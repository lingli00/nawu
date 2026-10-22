/**
 * ★v1.4.0 端侧离线语音识别（vosk + 中文小模型，按需下载）。
 *
 * 需求原点（用户反馈「系统语音服务联网失败」）：
 * 旧实现依赖 Android 系统语音服务 / 浏览器 Web Speech —— 前者在部分 ROM 上
 * 只有在线识别（服务端一抖就失败），后者在 Chrome 上把音频送到 Google，
 * 国内网络根本不可达。语音是记账的主输入方式，不能受外部服务牵连。
 *
 * 现在的架构：
 * - 引擎：vosk-browser（WebAssembly，随包分发 `public/vosk/vosk.js`，约 5.8MB）；
 * - 模型：vosk-model-small-cn-0.22（约 40MB，tar.gz），**不打包进 APK**，
 *   首次使用语音时弹窗引导下载，托管在自有服务器；
 * - 下载后存进 IndexedDB，之后完全本地运算：断网、服务端停机都能用；
 * - 总占用：引擎 5.8MB + 模型 ~40MB ≈ 46MB（≤ 50MB 约束）。
 *
 * 兼容策略（调用方负责兜底顺序）：
 *   本地引擎不可用（缺模型/无麦克风权限/非安全上下文）→ 系统语音/Web Speech
 *   → 都失败 → 提示改用键盘输入。
 *
 * 本文件除音频采集外都是纯逻辑，便于单测（见 tests/offline-asr.test.ts）。
 */

/**
 * 模型 tar.gz 的线上地址（自有服务器，经 PHP 接口下发）：
 * - 网页版同源，无跨域；
 * - App 内页面源是 https://localhost，跨域但接口带 `Access-Control-Allow-Origin: *`；
 * - 单文件直读 + Content-Length，客户端据此显示下载进度。
 */
export const ASR_MODEL_URL = 'http://106.53.204.29/asr-model.php';
/** 引擎脚本路径（public/vosk/vosk.js，随包分发）。 */
export const ASR_ENGINE_PATH = '/vosk/vosk.js';
/** 模型展示大小（MB，用于引导文案；真实大小以下载响应为准）。 */
export const ASR_MODEL_MB = 40;

const IDB_NAME = 'nawu-asr';
const IDB_STORE = 'models';
const IDB_KEY = 'vosk-small-cn-v1';
const LS_KEY = 'nawu-asr-model-v1';

/* ---------------- IndexedDB ---------------- */

function openDb(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(IDB_NAME, 1);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains(IDB_STORE)) db.createObjectStore(IDB_STORE);
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error ?? new Error('IndexedDB 不可用'));
  });
}

async function idbGet(key: string): Promise<Blob | undefined> {
  const db = await openDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(IDB_STORE, 'readonly');
    const req = tx.objectStore(IDB_STORE).get(key);
    req.onsuccess = () => resolve(req.result as Blob | undefined);
    req.onerror = () => reject(req.error ?? new Error('读取模型失败'));
  });
}

async function idbPut(key: string, value: Blob): Promise<void> {
  const db = await openDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(IDB_STORE, 'readwrite');
    tx.objectStore(IDB_STORE).put(value, key);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error ?? new Error('保存模型失败'));
  });
}

async function idbDel(key: string): Promise<void> {
  const db = await openDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(IDB_STORE, 'readwrite');
    tx.objectStore(IDB_STORE).delete(key);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error ?? new Error('删除模型失败'));
  });
}

/* ---------------- 模型状态 ---------------- */

/** 进程内缓存：避免每次按麦克风都读 IndexedDB。 */
let readyCache: boolean | null = null;

/** 模型是否已下载并可离线使用。 */
export async function asrModelReady(): Promise<boolean> {
  if (readyCache !== null) return readyCache;
  try {
    if (localStorage.getItem(LS_KEY) !== 'ok') {
      readyCache = false;
      return false;
    }
    const blob = await idbGet(IDB_KEY);
    readyCache = Boolean(blob && blob.size > 1024 * 1024);
  } catch {
    readyCache = false;
  }
  return readyCache;
}

/** 删除已下载模型（设置页「释放空间」用）。 */
export async function removeAsrModel(): Promise<void> {
  readyCache = false;
  try {
    localStorage.removeItem(LS_KEY);
  } catch {
    /* 忽略 */
  }
  try {
    await idbDel(IDB_KEY);
  } catch {
    /* 忽略 */
  }
}

/**
 * 下载模型（带进度）。成功后写入 IndexedDB 并置位。
 *
 * @param onPct 0~100 的整数百分比回调；total 未知时传 -1
 */
export async function downloadAsrModel(
  onPct: (pct: number, received: number, total: number) => void,
  signal?: AbortSignal,
): Promise<void> {
  const res = await fetch(ASR_MODEL_URL, { signal });
  if (!res.ok) throw new Error(`模型下载失败（HTTP ${res.status}）`);
  const total = Number(res.headers.get('content-length') ?? 0);
  const reader = res.body?.getReader();
  if (!reader) {
    // 老内核没有流式 body：退化为一次性取回（无进度）
    const blob = await res.blob();
    await idbPut(IDB_KEY, blob);
    finishDownload(blob);
    return;
  }
  const chunks: Uint8Array[] = [];
  let received = 0;
  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    if (value) {
      chunks.push(value);
      received += value.length;
      onPct(total > 0 ? Math.min(100, Math.round((received / total) * 100)) : -1, received, total);
    }
  }
  const blob = new Blob(chunks as BlobPart[], { type: 'application/gzip' });
  if (total > 0 && blob.size !== total) throw new Error('模型下载不完整，请重试');
  await idbPut(IDB_KEY, blob);
  finishDownload(blob);
}

function finishDownload(blob: Blob): void {
  readyCache = true;
  try {
    localStorage.setItem(LS_KEY, 'ok');
    localStorage.setItem(`${LS_KEY}-size`, String(blob.size));
  } catch {
    /* 隐私模式：仅本次会话可用 */
  }
}

/** 已下载模型的大小（字节，未知返回 0）。 */
export function asrModelBytes(): number {
  try {
    return Number(localStorage.getItem(`${LS_KEY}-size`) ?? '0') || 0;
  } catch {
    return 0;
  }
}

/* ---------------- 引擎加载 ---------------- */

interface VoskModule {
  createModel(url: string): Promise<VoskModel>;
}
interface VoskModel {
  KaldiRecognizer: new (sampleRate: number) => VoskRecognizer;
  terminate(): void;
}
interface VoskRecognizer {
  on(event: string, cb: (msg: unknown) => void): void;
  acceptWaveformFloat(buffer: Float32Array, sampleRate: number): void;
  retrieveFinalResult(): void;
  remove(): void;
}

let enginePromise: Promise<VoskModule> | null = null;

/** 按需注入引擎脚本（5.8MB，只在第一次用语音时加载）。 */
function loadEngine(): Promise<VoskModule> {
  if (enginePromise) return enginePromise;
  enginePromise = new Promise<VoskModule>((resolve, reject) => {
    const w = window as unknown as { Vosk?: VoskModule };
    if (w.Vosk) {
      resolve(w.Vosk);
      return;
    }
    const s = document.createElement('script');
    s.src = ASR_ENGINE_PATH;
    s.async = true;
    s.onload = () => {
      if (w.Vosk) resolve(w.Vosk);
      else reject(new Error('引擎加载失败'));
    };
    s.onerror = () => reject(new Error('引擎加载失败'));
    document.head.appendChild(s);
  });
  return enginePromise;
}

/* ---------------- 识别会话 ---------------- */

export interface OfflineAsrCallbacks {
  onPartial?: (text: string) => void;
  onResult: (text: string) => void;
  onError?: (code: string) => void;
  onEnd?: (reason: 'result' | 'error' | 'cancelled') => void;
}

export interface OfflineAsrSession {
  stop(): void;
  cancel(): void;
}

/** 从 vosk 消息里取文本（partial / final 结构一致）。 */
function textOf(msg: unknown): string {
  const r = (msg as { result?: { text?: string; partial?: string } })?.result;
  return (r?.text ?? r?.partial ?? '').trim();
}

/** 麦克风是否可用（非安全上下文 / 无设备都会返回 false）。 */
export function micAvailable(): boolean {
  return typeof navigator !== 'undefined' && Boolean(navigator.mediaDevices?.getUserMedia);
}

/**
 * 启动一次离线识别（按住说话）。
 *
 * 约定：stop() = 用户松手，把已识别文本交出；cancel() = 取消（丢弃）。
 */
export async function startOfflineAsr(opts: OfflineAsrCallbacks): Promise<OfflineAsrSession> {
  if (!micAvailable()) throw new Error('not-allowed');
  const blob = await idbGet(IDB_KEY);
  if (!blob) {
    readyCache = false;
    throw new Error('model-missing');
  }
  const vosk = await loadEngine();
  const url = URL.createObjectURL(blob);
  let model: VoskModel;
  try {
    model = await vosk.createModel(url);
  } finally {
    // 模型已读进 wasm 内存，blob URL 可以立刻回收
    URL.revokeObjectURL(url);
  }

  const rec = new model.KaldiRecognizer(16000);
  let finalText = '';
  let partial = '';
  let settled = false;
  let cancelled = false;

  const settle = (reason: 'result' | 'error' | 'cancelled'): void => {
    if (settled) return;
    settled = true;
    opts.onEnd?.(reason);
  };

  rec.on('partialresult', (m) => {
    const t = textOf(m);
    if (!t) return;
    partial = t;
    opts.onPartial?.(t);
  });
  rec.on('result', (m) => {
    const t = textOf(m);
    if (!t) return;
    finalText = finalText ? `${finalText}${/[，。,.!！?？]$/.test(finalText) ? '' : '，'}${t}` : t;
    partial = '';
    opts.onPartial?.(finalText);
  });

  const stream = await navigator.mediaDevices.getUserMedia({
    video: false,
    audio: { echoCancellation: true, noiseSuppression: true, channelCount: 1 },
  });
  const Ctx = (window.AudioContext ?? (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext);
  const ctx = new Ctx();
  const source = ctx.createMediaStreamSource(stream);
  const node = ctx.createScriptProcessor(4096, 1, 1);
  node.onaudioprocess = (ev) => {
    if (cancelled) return;
    try {
      rec.acceptWaveformFloat(new Float32Array(ev.inputBuffer.getChannelData(0)), ctx.sampleRate);
    } catch {
      /* 单帧失败不打断整段识别 */
    }
  };
  source.connect(node);
  node.connect(ctx.destination);

  let cleaned = false;
  const cleanup = async (): Promise<void> => {
    if (cleaned) return;
    cleaned = true;
    try {
      node.disconnect();
      source.disconnect();
    } catch {
      /* 已断开 */
    }
    for (const t of stream.getTracks()) t.stop();
    try {
      await ctx.close();
    } catch {
      /* 已关闭 */
    }
    try {
      rec.remove();
    } catch {
      /* 已移除 */
    }
    try {
      model.terminate();
    } catch {
      /* 已终止 */
    }
  };

  return {
    stop: () => {
      if (cancelled) return;
      try {
        rec.retrieveFinalResult();
      } catch {
        /* 收尾失败：用已有文本 */
      }
      // 等最后一帧结果回来再交卷
      window.setTimeout(() => {
        const text = (finalText || partial).trim();
        if (text) {
          opts.onResult(text);
          settle('result');
        } else {
          opts.onError?.('no-match');
          settle('error');
        }
        void cleanup();
      }, 320);
    },
    cancel: () => {
      cancelled = true;
      void cleanup();
      settle('cancelled');
    },
  };
}
