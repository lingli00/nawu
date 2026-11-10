import { ApiError } from '../lib/error';
import { get, post, request } from '../net/httpClient';
import type { ServerConfig } from '../types/entities';
import { EP } from './endpoints';

/**
 * ★v1.6.5 · AI 接入（Muse / 任意 AI 智能体）
 *
 * 页面只做三件事：
 *   ① 展示本服务的 API 基址（让用户填进自己 AI 后台）；
 *   ② 生成 / 撤销个人 API Key（nawu_sk_…，长期有效，可随时吊销）；
 *   ③ 把 AI 在云端记的账增量合并到本机（不必整份恢复备份）。
 */

export interface AiKeyRow {
  id: string;
  name: string;
  prefix: string;
  createdAt: string;
  lastUsedAt: string | null;
}

export interface AiInboxEvent {
  id: number;
  kind: string;
  source: string;
  createdAt: string;
  records: {
    valueRecords?: Array<Record<string, unknown>>;
    goods?: Array<Record<string, unknown>>;
    subscriptions?: Array<Record<string, unknown>>;
  };
}

/** 生成一把新 Key（明文只返回一次）。 */
export async function createAiKey(server: ServerConfig | null, name = 'Muse'): Promise<{ id: string; key: string }> {
  const res = await post<{ ok: boolean; id?: string; key?: string; error?: string }>(server, EP.aiKeys, { name });
  if (!res.data || res.data.ok !== true || !res.data.key) {
    throw new ApiError('http', res.data?.error ?? '生成密钥失败', res.status, res.data);
  }
  return { id: res.data.id ?? '', key: res.data.key };
}

export async function listAiKeys(server: ServerConfig | null): Promise<AiKeyRow[]> {
  const res = await get<{ ok: boolean; keys?: AiKeyRow[] }>(server, EP.aiKeys);
  if (!res.data || res.data.ok !== true) {
    throw new ApiError('http', '读取密钥列表失败', res.status, res.data);
  }
  return res.data.keys ?? [];
}

export async function revokeAiKey(server: ServerConfig | null, id: string): Promise<void> {
  const res = await request<{ ok: boolean; revoked?: boolean; error?: string }>(server, {
    method: 'DELETE',
    path: EP.aiKeys,
    body: { id },
  });
  if (!res.data || res.data.ok !== true) {
    throw new ApiError('http', res.data?.error ?? '撤销失败', res.status, res.data);
  }
}

export async function fetchAiInbox(server: ServerConfig | null): Promise<{ events: AiInboxEvent[]; count: number }> {
  const res = await get<{ ok: boolean; events?: AiInboxEvent[]; count?: number }>(server, EP.aiInbox);
  if (!res.data || res.data.ok !== true) {
    throw new ApiError('http', '读取云端待入账失败', res.status, res.data);
  }
  return { events: res.data.events ?? [], count: res.data.count ?? 0 };
}

export async function applyAiInbox(server: ServerConfig | null, ids: number[]): Promise<void> {
  if (!ids.length) return;
  await post(server, EP.aiInboxApply, { ids });
}
