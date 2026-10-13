import { createBackup, deleteBackup, deviceLabel, getBackup, listBackups } from '../api/backups';
import { backupLabel, shouldAutoBackup } from '../domain/backupPolicy';
import { humanMessage } from '../lib/error';
import logger from '../lib/log';
import { applySnapshot, buildSnapshot } from '../storage/snapshot';
import { COLLECTIONS } from '../types/entities';
import type { BackupRow } from '../types/api';
import type { CollectionName } from '../types/entities';
import { isLoggedIn, useAuthStore } from './useAuthStore';
import { useDataStore } from './useDataStore';
import { useSettingsStore } from './useSettingsStore';
import { currentServer } from './useServerStore';

/**
 * 备份编排（R3/R4/R5）。
 *
 * ★服务端**只保留最近 3 份**备份（PHP 侧 trimBackups(3)），
 * 因此自动备份走 24h 节流 + 变更阈值，手动备份不限。
 */

/** 从 store 组装快照。 */
export function buildCurrentSnapshot() {
  const data = useDataStore.getState();
  const settings = useSettingsStore.getState().settings;
  const collections: Partial<Record<CollectionName, unknown[]>> = {};
  for (const name of COLLECTIONS) {
    collections[name] = (data[name] as unknown as unknown[]) ?? [];
  }
  return buildSnapshot({ collections, settings });
}

/**
 * 上传一份备份。
 * @param kind manual=手动（用户点按钮）/ auto=自动（静默，失败只记日志）
 * @returns 新备份 id；失败抛 ApiError
 */
export async function uploadBackup(kind: 'manual' | 'auto' = 'manual'): Promise<number> {
  const server = currentServer();
  if (!server) throw new Error('未配置服务器');

  const payload = buildCurrentSnapshot();
  const device = await deviceLabel();
  const id = await createBackup(server, {
    payload,
    label: backupLabel(kind),
    item_count: payload.count,
    device,
  });

  await useSettingsStore.getState().setLastBackupAt(new Date().toISOString());
  useDataStore.getState().resetChanged();
  return id;
}

/** 备份列表。 */
export async function fetchBackupList(): Promise<BackupRow[]> {
  const server = currentServer();
  if (!server) return [];
  return listBackups(server);
}

/**
 * 恢复结果（供恢复成功的 Toast 文案使用）。
 */
export interface RestoreResult {
  /** 恢复后的 12 集合总条数 */
  total: number;
  /** 快照导出时间（ISO，空串表示快照里没有） */
  exportedAt: string;
  /** 快照里的订阅条数（>0 时提示「停用」状态不随 Web 备份保存） */
  subCount: number;
}

/**
 * 恢复一份备份（**会覆盖本机全部数据**）。
 */
export async function restoreBackup(id: number | string): Promise<RestoreResult> {
  const server = currentServer();
  if (!server) throw new Error('未配置服务器');

  const detail = await getBackup(server, id);
  // 传入本机当前 settings：恢复时保留快照里没有的本机自定义键（如 archivedSubIds）
  const currentSettings = useSettingsStore.getState().settings;
  const applied = applySnapshot(detail.payload, currentSettings);
  await useDataStore.getState().setAllCollections(applied.collections);
  await useSettingsStore.getState().replace(applied.settings);

  let total = 0;
  for (const name of COLLECTIONS) total += applied.collections[name]?.length ?? 0;
  return {
    total,
    exportedAt: applied.exportedAt,
    subCount: applied.collections.subscriptions?.length ?? 0,
  };
}

/** 删除一份远端备份。 */
export async function deleteRemoteBackup(id: number | string): Promise<void> {
  const server = currentServer();
  if (!server) throw new Error('未配置服务器');
  await deleteBackup(server, id);
}

/**
 * 静默自动备份（登录 + 24h + 变更 ≥ 阈值 时执行）。
 * 失败**不打扰用户**，只写日志（架构 §5.3）。
 * @returns 是否真的执行了备份
 */
export async function maybeAutoBackup(): Promise<boolean> {
  const settings = useSettingsStore.getState().settings;
  const changed = useDataStore.getState().changedSinceBackup;
  if (!shouldAutoBackup({
    loggedIn: isLoggedIn(),
    autoSync: settings.autoSync,
    lastBackupAt: settings.lastBackupAt,
    changedSinceBackup: changed,
  })) {
    return false;
  }
  try {
    await uploadBackup('auto');
    return true;
  } catch (e) {
    logger.warn('backup', '自动备份失败', humanMessage(e));
    return false;
  }
}

/** 当前登录态是否允许备份（供 UI 禁用按钮）。 */
export function canBackup(): boolean {
  return Boolean(currentServer()) && isLoggedIn() && useAuthStore.getState().sessionState === 'valid';
}
