import { getKV, setKV } from '../storage/kv';
import { isNative } from '../net/env';
import { currentServer } from '../store/useServerStore';
import logger from './log';

/**
 * 图标本地缓存层（v1.0.15 · 「设置过一次，终身离线可用」）。
 *
 * 背景（用户实测两轮录屏定位）：
 * - App WebView(https://localhost 源) 直连 http 服务器的 <img> 加载极慢/不稳定，
 *   退出重进后 WebView 内存缓存清空 → 破图重来；
 * - 恢复备份后图标要重新走网络慢慢「缓存出来」，网络差时永远显示不出来。
 *
 * 方案（铁律）：所有网络图标的**字节**一律经统一网络层（真机 CapacitorHttp 原生通道，
 * 浏览器 fetch 同源路径）抓取 → 转 dataURL → 持久化 KV（真机 Preferences）。
 * 界面渲染只吃缓存 dataURL，不再依赖 WebView 网络栈；备份快照随身携带
 * 全部图标数据（buildSnapshot icons 字段），恢复后无需再联网找图。
 *
 * 缓存键：相对路径优先（/api/icon/img?d=…、/api/icon/proxy?u=…），
 * 与服务器域名解耦 —— 换服务器 / 跨设备恢复都能命中。
 */

/** KV 键：LRU 索引。 */
const INDEX_KEY = 'gf.icon.cache.index';
/** KV 键前缀：单图标条目（一个图标一个 key，避免单条 value 过大拖慢 Preferences）。 */
const ENTRY_PREFIX = 'gf.icon.c.';

/** LRU 容量上限（条）。 */
const MAX_ENTRIES = 500;
/** 单条 dataURL 体积上限（约 300KB，超过不入缓存）。 */
const MAX_ENTRY_CHARS = 400_000;

/** LRU 索引结构（新 → 旧）。 */
interface IconIndex {
  keys: string[];
}

/* ------------------------------------------------------------------ */
/* 键归一化                                                            */
/* ------------------------------------------------------------------ */

/**
 * 图标 src → 缓存键。
 * 同服务器绝对 URL 一律剥掉 origin 存相对路径；外链保留完整 URL。
 */
export function normIconKey(src: string, base?: string): string {
  const u = (src ?? '').trim();
  if (!u) return '';
  // App 内页面源是 https://localhost，相对路径可能被误拼到 localhost —— 一并剥掉
  const LOCALHOST = /^https?:\/\/localhost(?::\d+)?/i;
  const b = (base ?? currentServer()?.url ?? '').replace(/\/+$/, '');
  if (b && u.toLowerCase().startsWith(b.toLowerCase())) {
    return u.slice(b.length) || '/';
  }
  if (LOCALHOST.test(u)) {
    return u.replace(LOCALHOST, '') || '/';
  }
  return u;
}

/* ------------------------------------------------------------------ */
/* 读写                                                                */
/* ------------------------------------------------------------------ */

/** 按候选键顺序查缓存，命中返回 dataURL。 */
export async function iconCacheLookup(keys: string[]): Promise<string | null> {
  for (const k of keys) {
    const nk = normIconKey(k);
    if (!nk) continue;
    const hit = await getKV<string>(ENTRY_PREFIX + nk);
    if (hit && hit.startsWith('data:')) return hit;
  }
  return null;
}

/** 写入一条缓存并做 LRU 淘汰。 */
export async function iconCacheStore(src: string, dataUrl: string): Promise<void> {
  const nk = normIconKey(src);
  if (!nk || !dataUrl.startsWith('data:') || dataUrl.length > MAX_ENTRY_CHARS) return;
  try {
    await setKV(ENTRY_PREFIX + nk, dataUrl);
    const idx = (await getKV<IconIndex>(INDEX_KEY)) ?? { keys: [] };
    idx.keys = [nk, ...idx.keys.filter((k) => k !== nk)].slice(0, MAX_ENTRIES);
    await setKV(INDEX_KEY, idx);
  } catch (e) {
    logger.warn('iconCache', '写入失败', e);
  }
}

/* ------------------------------------------------------------------ */
/* 抓取（统一网络层，禁 WebView 直连）                                  */
/* ------------------------------------------------------------------ */

/** 抓取一个图标 URL → dataURL（失败 null）。限制 512KB。 */
export async function fetchIconAsDataUrl(src: string): Promise<string | null> {
  const url = (src ?? '').trim();
  if (!url || (!/^https?:\/\//i.test(url) && !url.startsWith('/'))) return null;

  if (isNative()) {
    try {
      const mod = await import('@capacitor/core');
      const res = await mod.CapacitorHttp.request({
        url,
        method: 'GET',
        responseType: 'arraybuffer',
        connectTimeout: 8000,
        readTimeout: 8000,
      });
      const status = Number(res.status ?? 0);
      if (status < 200 || status >= 300) return null;
      const b64 = typeof res.data === 'string' ? res.data : '';
      if (!b64 || b64.length > MAX_ENTRY_CHARS) return null;
      const headers = (res.headers ?? {}) as Record<string, string | string[]>;
      const rawType = Array.isArray(headers['Content-Type'])
        ? headers['Content-Type'][0]
        : headers['Content-Type'] ?? headers['content-type'] ?? '';
      const type = /svg|image|icon/i.test(String(rawType)) ? String(rawType).split(';')[0] : 'image/png';
      return `data:${type};base64,${b64}`;
    } catch (e) {
      logger.debug('iconCache', '原生抓取失败', url, e);
      return null;
    }
  }

  // 浏览器：同源路径直接 fetch（服务端图标接口同源；带 CORS 的代理也行）
  try {
    const abs = url.startsWith('/') ? `${window.location.origin}${url}` : url;
    const res = await fetch(abs, { credentials: 'omit' });
    if (!res.ok) return null;
    const blob = await res.blob();
    if (blob.size > MAX_ENTRY_CHARS) return null;
    return await new Promise<string | null>((resolve) => {
      const fr = new FileReader();
      fr.onload = () => resolve(typeof fr.result === 'string' ? fr.result : null);
      fr.onerror = () => resolve(null);
      fr.readAsDataURL(blob);
    });
  } catch {
    return null;
  }
}

/**
 * 按候选链抓取首个成功者并入库。
 * @returns 成功的 dataURL（同时已写入缓存），全败 null
 */
export async function iconCacheFetchAndStore(chain: string[], base?: string): Promise<string | null> {
  for (const src of chain) {
    const data = await fetchIconAsDataUrl(src);
    if (data) {
      await iconCacheStore(src, data);
      // 兜底：整条链的键都指向同一份图（查任意候选键都命中）
      for (const k of chain) {
        if (k !== src) await iconCacheStore(k, data);
      }
      void base;
      return data;
    }
  }
  return null;
}

/** 后台并发预热一批图标 src（搜索结果全量缓存用，失败静默）。 */
export async function warmIconCache(srcs: string[], base?: string): Promise<void> {
  const list = srcs.map((s) => (s ?? '').trim()).filter(Boolean).slice(0, 24);
  const CONCURRENCY = 4;
  let cursor = 0;
  const worker = async (): Promise<void> => {
    while (cursor < list.length) {
      const src = list[cursor++];
      const nk = normIconKey(src, base);
      const hit = await getKV<string>(ENTRY_PREFIX + nk);
      if (hit && hit.startsWith('data:')) continue;
      await fetchIconAsDataUrl(src).then((d) => (d ? iconCacheStore(src, d) : null));
    }
  };
  await Promise.all(Array.from({ length: Math.min(CONCURRENCY, list.length) }, worker));
}

/* ------------------------------------------------------------------ */
/* 备份导出 / 恢复导入                                                  */
/* ------------------------------------------------------------------ */

/** 导出全部图标缓存（备份快照 icons 字段）。 */
export async function iconCacheExport(): Promise<Record<string, string>> {
  const idx = (await getKV<IconIndex>(INDEX_KEY)) ?? { keys: [] };
  const out: Record<string, string> = {};
  for (const k of idx.keys) {
    const v = await getKV<string>(ENTRY_PREFIX + k);
    if (v && v.startsWith('data:') && v.length <= MAX_ENTRY_CHARS) out[k] = v;
  }
  return out;
}

/**
 * ★v1.0.19 备份瘦身：只导出**被数据实际引用**的缓存条目。
 * refKeys = collectUrlRefKeys() 的归一化键集合；不传则退化为全量导出。
 * 单条仍受 MAX_ENTRY_CHARS 限制——备份只带「在用的图标」，不再随身携带整个搜索缓存。
 */
export async function iconCacheExportReferenced(refKeys?: Set<string>): Promise<Record<string, string>> {
  if (!refKeys) return iconCacheExport();
  const idx = (await getKV<IconIndex>(INDEX_KEY)) ?? { keys: [] };
  const out: Record<string, string> = {};
  for (const k of idx.keys) {
    if (!refKeys.has(k)) continue;
    const v = await getKV<string>(ENTRY_PREFIX + k);
    if (v && v.startsWith('data:') && v.length <= MAX_ENTRY_CHARS) out[k] = v;
  }
  return out;
}

/** 从备份合并导入图标缓存（不清空现有）。@returns 导入条数 */
export async function iconCacheImport(rec: unknown): Promise<number> {
  if (!rec || typeof rec !== 'object') return 0;
  const entries = Object.entries(rec as Record<string, unknown>).filter(
    ([k, v]) => typeof k === 'string' && k && typeof v === 'string' && v.startsWith('data:') && v.length <= MAX_ENTRY_CHARS,
  );
  if (entries.length === 0) return 0;
  const idx = (await getKV<IconIndex>(INDEX_KEY)) ?? { keys: [] };
  for (const [k, v] of entries.slice(0, MAX_ENTRIES)) {
    await setKV(ENTRY_PREFIX + k, v);
    if (!idx.keys.includes(k)) idx.keys.push(k);
  }
  // 导入的排到最前（最近恢复的图标最可能被用到），并截断容量
  const imported = entries.map(([k]) => k);
  idx.keys = [...imported, ...idx.keys.filter((k) => !imported.includes(k))].slice(0, MAX_ENTRIES);
  await setKV(INDEX_KEY, idx);
  return imported.length;
}
