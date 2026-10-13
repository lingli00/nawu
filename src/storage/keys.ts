import { COLLECTIONS, type CollectionName } from '../types/entities';

/**
 * 本地存储键名（**与 Web 版完全一致**，不得修改，否则跨端备份无法互通）。
 */

/** KV 前缀（Web 版 `guifou.kv.<name>`）。 */
export const KV_PREFIX = 'guifou.kv.';

/** 会话（token + user）。 */
export const K_USER = 'guifou.user';
/** 当前服务器（Web 版兼容镜像）。 */
export const K_SELFHOST = 'guifou.selfhost';
/** 自定义识别规则。 */
export const K_PARSE_RULES = 'guifou.parse.rules';
/** 汇率表。 */
export const K_RATES = 'guifou.rates.v2';
/** UI 偏好（offlineMode / homeTab / lastRoute）。 */
export const K_UI = 'guifou.ui';
/** 是否已灌种子。 */
export const K_SEEDED = 'guifou.seeded.v1';

/** 设置。 */
export const KV_SETTINGS = `${KV_PREFIX}settings`;
/** 服务器列表。 */
export const KV_SERVERS = `${KV_PREFIX}servers`;
/** 备份元信息（自动备份节流用）。 */
export const KV_BACKUP_META = `${KV_PREFIX}backupMeta`;

/** 集合键：`guifou.<collection>`。 */
export function collectionKey(name: CollectionName): string {
  return `guifou.${name}`;
}

/** 全部集合键（有序，与 COLLECTIONS 对齐）。 */
export const COLLECTION_KEYS: string[] = COLLECTIONS.map((c) => collectionKey(c));

/** 全部 KV 键（供「清空本地数据」与调试）。 */
export const ALL_MANAGED_KEYS: string[] = [
  K_USER,
  K_SELFHOST,
  K_PARSE_RULES,
  K_RATES,
  K_UI,
  K_SEEDED,
  KV_SETTINGS,
  KV_SERVERS,
  KV_BACKUP_META,
  ...COLLECTION_KEYS,
];
