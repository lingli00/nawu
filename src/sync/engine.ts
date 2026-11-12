import { create } from 'zustand';
import { fetchSyncCursor, pullSync, pushSync } from '../api/sync';
import { humanMessage } from '../lib/error';
import logger from '../lib/log';
import { saveCollection } from '../storage/repo';
import type { ServerConfig, Settings } from '../types/entities';
import { isLoggedIn, useAuthStore } from '../store/useAuthStore';
import { refreshTheme } from '../store/useAppStore';
import { useDataStore } from '../store/useDataStore';
import { currentServer } from '../store/useServerStore';
import { useSettingsStore } from '../store/useSettingsStore';
import {
  consumeNeedSeed,
  getCursor,
  getMeta,
  readOutbox,
  removeEntries,
  setCursor,
  setEnqueueListener,
  setMeta,
} from './outbox';
import {
  mergeRoamingSettings,
  recordUpdatedAt,
  remoteShouldWin,
  SETTINGS_DOC_ID,
  stripSensitiveSettings,
  type SyncableRecord,
} from './model';
import { noteSettingsMutation } from './note';

/**
 * ★v1.7.0 多端同步引擎
 *
 * 职责：登录态下把本机变更推上云（outbox）、把云端变更拉下来按 LWW 合并进本地，
 * 实现「手机写、电脑自动看到」。未登录时引擎不启动，行为与旧版（纯本地）完全一致。
 *
 * 触发时机：启动 / 登录成功 / 数据变更后防抖 2.5s / 设置变更 / 切前台 / 每 60s 轮询。
 *
 * 合并规则（LWW）：
 * - 远端新（updatedAt 严格更大）→ 覆盖本地；
 * - 本地有未推送的更新（outbox 命中且不早于远端）→ 本地优先，推完自然覆盖云端；
 * - 删除走墓碑，不会被旧数据"复活"。
 */

export type SyncStatus = 'off' | 'idle' | 'syncing' | 'error';

interface SyncState {
  status: SyncStatus;
  /** 上次成功同步时间（ms，0 = 从未）。 */
  lastSyncAt: number;
  /** 待推送变更条数。 */
  pending: number;
  error: string;
}

export const useSyncStore = create<SyncState>()(() => ({
  status: 'off',
  lastSyncAt: 0,
  pending: 0,
  error: '',
}));

/* ---------------- 模块内状态 ---------------- */

const DEBOUNCE_MS = 2500;
const INTERVAL_MS = 60_000;
const PUSH_CHUNK = 200;
/** pull 循环安全上限（500 × 40 = 2 万条）。 */
const PULL_MAX_ROUNDS = 40;

let started = false;
let syncing = false;
let rerunRequested = false;
let applyingRemote = false;
let debounceTimer: ReturnType<typeof setTimeout> | null = null;
let intervalTimer: ReturnType<typeof setInterval> | null = null;
let unsubSettings: (() => void) | null = null;
let visibilityHandler: (() => void) | null = null;

function patchStore(patch: Partial<SyncState>): void {
  useSyncStore.setState(patch);
}

/* ---------------- 对外 API ---------------- */

/** 防抖调度一次同步（outbox 入队后由 listener 触发）。 */
export function scheduleSync(delay = DEBOUNCE_MS): void {
  if (!started) return;
  if (debounceTimer !== null) clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    debounceTimer = null;
    void syncNow('debounce');
  }, delay);
}

/**
 * 立即同步一轮（推 outbox → 拉 → 合并）。
 * @returns 是否完整成功
 */
export async function syncNow(reason: string): Promise<boolean> {
  const server = currentServer();
  if (!started || !server || !isLoggedIn() || useAuthStore.getState().sessionState !== 'valid') {
    return false;
  }
  if (!useDataStore.getState().loaded || !useSettingsStore.getState().loaded) return false;
  if (syncing) {
    rerunRequested = true;
    return false;
  }
  syncing = true;
  patchStore({ status: 'syncing', error: '' });
  try {
    await runSync(server);
    patchStore({ status: 'idle', lastSyncAt: Date.now(), error: '' });
    await setMeta(server.id, { lastSyncAt: Date.now(), lastError: '' });
    return true;
  } catch (e) {
    const msg = humanMessage(e);
    logger.warn('sync', `同步失败（${reason}）：${msg}`);
    patchStore({ status: 'error', error: msg });
    try {
      await setMeta(server.id, { lastSyncAt: useSyncStore.getState().lastSyncAt, lastError: msg });
    } catch {
      /* 元信息写失败不影响 */
    }
    return false;
  } finally {
    syncing = false;
    if (rerunRequested) {
      rerunRequested = false;
      scheduleSync(300);
    }
  }
}

/** 启动引擎（幂等）。登录成功 / App 启动时调用；未登录时每轮 syncNow 自行短路。 */
export function startSyncEngine(): void {
  if (started) {
    void syncNow('start');
    return;
  }
  started = true;
  patchStore({ status: 'idle' });

  // 冷启动：把上次同步元信息读进 store（UI 展示用）
  const sidAtStart = currentServer()?.id;
  if (sidAtStart) {
    void getMeta(sidAtStart)
      .then((m) => patchStore({ lastSyncAt: m.lastSyncAt, pending: 0 }))
      .catch(() => {
        /* 元信息读取失败不影响 */
      });
  }

  // outbox 有新变更 → 防抖同步
  setEnqueueListener(() => scheduleSync());

  // 设置变更 → 设置漫游（剥离敏感键）
  unsubSettings = useSettingsStore.subscribe((state, prev) => {
    if (applyingRemote) return;
    if (state.settings === prev.settings) return;
    void noteSettingsMutation(stripSensitiveSettings(state.settings));
  });

  intervalTimer = setInterval(() => {
    void syncNow('interval');
  }, INTERVAL_MS);

  visibilityHandler = () => {
    if (typeof document !== 'undefined' && document.visibilityState === 'visible') {
      void syncNow('visible');
    }
  };
  if (typeof document !== 'undefined') {
    document.addEventListener('visibilitychange', visibilityHandler);
  }
  void registerNativeResume();

  void syncNow('start');
}

/** 停止引擎（登出 / 会话过期时调用）。本地数据保留，队列与游标也保留。 */
export function stopSyncEngine(): void {
  if (!started) return;
  started = false;
  if (intervalTimer !== null) {
    clearInterval(intervalTimer);
    intervalTimer = null;
  }
  if (debounceTimer !== null) {
    clearTimeout(debounceTimer);
    debounceTimer = null;
  }
  unsubSettings?.();
  unsubSettings = null;
  if (visibilityHandler && typeof document !== 'undefined') {
    document.removeEventListener('visibilitychange', visibilityHandler);
  }
  visibilityHandler = null;
  setEnqueueListener(null);
  patchStore({ status: 'off', pending: 0 });
}

/* ---------------- 内部实现 ---------------- */

async function registerNativeResume(): Promise<void> {
  try {
    const mod = await import('@capacitor/app');
    await mod.App.addListener('resume', () => {
      void syncNow('resume');
    });
  } catch {
    /* 浏览器环境无原生 App 插件，忽略 */
  }
}

/** 一轮完整同步：seed（如需）→ 推 outbox → 拉取合并。 */
async function runSync(server: ServerConfig): Promise<void> {
  const sid = server.id;

  // 0. 刷新 pending 展示
  patchStore({ pending: (await readOutbox(sid)).length });

  // 1. 首次同步（无游标）或恢复备份后：把本机全量推一遍（服务端可能没有这些记录）
  const needSeed = await consumeNeedSeed(sid);
  let cursor = await getCursor(sid);
  if (cursor === null || needSeed) {
    await seedAll(server);
    cursor = await fetchSyncCursor(server);
    await setCursor(sid, cursor);
  }

  // 2. 推送 outbox（最多 20 轮 × 200 条，剩余下轮继续）
  await pushOutbox(server);

  // 3. 拉取并合并（循环直到没有更多）
  for (let round = 0; round < PULL_MAX_ROUNDS; round += 1) {
    const res = await pullSync(server, cursor);
    if (res.changes.length > 0) await applyRemoteChanges(server.id, res.changes);
    cursor = res.cursor;
    await setCursor(sid, cursor);
    if (!res.hasMore) break;
  }

  patchStore({ pending: (await readOutbox(sid)).length });
}

/** 本机全量 seed：12 集合 + 设置（剥离敏感键）。服务端按 LWW 去重，幂等。 */
async function seedAll(server: ServerConfig): Promise<void> {
  const ds = useDataStore.getState();
  const { COLLECTIONS } = await import('../types/entities');
  const changes: Array<{ collection: string; recordId: string; op: 'upsert'; data: unknown; updatedAt: number }> = [];
  for (const name of COLLECTIONS) {
    const rows = (ds[name] as unknown as SyncableRecord[]) ?? [];
    for (const r of rows) {
      if (!r || typeof r.id !== 'string') continue;
      changes.push({
        collection: name,
        recordId: r.id,
        op: 'upsert',
        data: r,
        updatedAt: recordUpdatedAt(r) || Date.now(),
      });
    }
  }
  changes.push({
    collection: SETTINGS_DOC_ID,
    recordId: 'settings',
    op: 'upsert',
    data: stripSensitiveSettings(useSettingsStore.getState().settings),
    updatedAt: Date.now(),
  });

  let applied = 0;
  for (let i = 0; i < changes.length; i += PUSH_CHUNK) {
    const res = await pushSync(server, changes.slice(i, i + PUSH_CHUNK));
    applied += res.applied;
  }
  logger.debug('sync', `全量 seed 完成：${changes.length} 条（服务端 applied ${applied}）`);
}

/** 推送 outbox（成功即移除；服务端 ignored 表示云端已有更新版本，同样移除）。 */
async function pushOutbox(server: ServerConfig): Promise<void> {
  const sid = server.id;
  for (let round = 0; round < 20; round += 1) {
    const entries = await readOutbox(sid);
    if (entries.length === 0) return;
    const batch = entries.slice(0, PUSH_CHUNK);
    await pushSync(
      server,
      batch.map((e) => ({ collection: e.collection, recordId: e.recordId, op: e.op, data: e.data, updatedAt: e.updatedAt })),
    );
    await removeEntries(sid, batch.map((e) => e.k));
  }
}

/** 把远端变更合并进本地（LWW + 墓碑；settings 单独处理）。 */
async function applyRemoteChanges(
  serverId: string,
  changes: Array<{ collection: string; recordId: string; op: 'upsert' | 'delete'; data?: unknown; updatedAt: number }>,
): Promise<void> {
  const pending = await readOutbox(serverId);
  const ds = useDataStore.getState();

  /* 设置漫游 */
  for (const c of changes) {
    if (c.collection !== SETTINGS_DOC_ID) continue;
    if (c.op !== 'upsert' || !c.data || typeof c.data !== 'object') continue;
    const local = useSettingsStore.getState().settings;
    const merged = mergeRoamingSettings(local, c.data as Partial<Settings>);
    applyingRemote = true;
    try {
      await useSettingsStore.getState().replace(merged);
      refreshTheme();
    } finally {
      applyingRemote = false;
    }
  }

  /* 12 集合：按 collection 分组批量合并 */
  const byCollection = new Map<string, typeof changes>();
  for (const c of changes) {
    if (c.collection === SETTINGS_DOC_ID) continue;
    const list = byCollection.get(c.collection) ?? [];
    list.push(c);
    byCollection.set(c.collection, list);
  }

  for (const [collection, list] of byCollection) {
    const rows = ((ds as unknown as Record<string, SyncableRecord[]>)[collection] ?? []).slice();
    let changed = false;

    // 删除墓碑
    for (const c of list) {
      if (c.op !== 'delete') continue;
      const idx = rows.findIndex((r) => r?.id === c.recordId);
      if (idx < 0) continue;
      const localAt = recordUpdatedAt(rows[idx]);
      const pendingNewer = pending.some((p) => p.collection === collection && p.recordId === c.recordId && p.updatedAt >= c.updatedAt);
      if (pendingNewer || localAt > c.updatedAt) continue; // 本地更新：保留，推上去会覆盖云端
      rows.splice(idx, 1);
      changed = true;
    }

    // upsert 合并
    for (const c of list) {
      if (c.op !== 'upsert' || !c.data || typeof c.data !== 'object') continue;
      const remote = c.data as SyncableRecord;
      if (!remote || typeof remote.id !== 'string') continue;
      const idx = rows.findIndex((r) => r?.id === remote.id);
      const pendingNewer = pending.some((p) => p.collection === collection && p.recordId === remote.id && p.updatedAt >= c.updatedAt);
      if (idx < 0) {
        rows.unshift(remote);
        changed = true;
        continue;
      }
      if (!remoteShouldWin(recordUpdatedAt(rows[idx]), c.updatedAt, pendingNewer)) continue;
      rows[idx] = remote;
      changed = true;
    }

    if (changed) {
      useDataStore.setState({ [collection]: rows } as unknown as Partial<Record<string, unknown>>);
      await saveCollection(collection as Parameters<typeof saveCollection>[0], rows as unknown as unknown[]);
    }
  }
}

/** 供 UI / 测试：读上次同步元信息。 */
export async function loadSyncMeta(serverId: string): Promise<{ lastSyncAt: number; lastError: string }> {
  return getMeta(serverId);
}

/** 引擎是否在运行（测试 / 调试用）。 */
export function isSyncEngineRunning(): boolean {
  return started;
}
