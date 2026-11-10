import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Check, Copy, KeyRound, RefreshCw, Sparkles, Trash2, Wand2 } from 'lucide-react';
import { currentServer, useAuthStore, useDataStore, toastError, toastSuccess } from '../store';
import type { CollectionName } from '../types/entities';
import { haptic } from '../lib/haptics';
import {
  applyAiInbox,
  createAiKey,
  fetchAiInbox,
  listAiKeys,
  revokeAiKey,
  type AiInboxEvent,
  type AiKeyRow,
} from '../api/aiAccess';

/**
 * ★v1.6.5 · AI 接入页（网页端 + App 通用）
 *
 * 这就是「让 Muse 帮你记账」的开关面板：
 *   ① 复制 API 地址 → 填进你自己的 AI 后台（自定义工具 / HTTP 工具）；
 *   ② 生成一把 API Key → 填进 AI 后台的认证（Bearer）；
 *   ③ 之后对 AI 说「记一笔：午饭 35」，记录会进「云端待入账」，点一下就合并进本机。
 *
 * 为什么要「云端待入账」这一步：纳物是本地优先，服务端只存整份快照。
 * AI 写入走独立事件流，客户端显式合并 —— 既不会丢，也不会被自动备份覆盖。
 */

/** 复制（Web 用 navigator.clipboard，App 内退回 execCommand）。 */
async function copyText(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
    /* 落到下面的兜底 */
  }
  try {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand('copy');
    document.body.removeChild(ta);
    return ok;
  } catch {
    return false;
  }
}

export default function AiAccessPage() {
  const nav = useNavigate();
  const session = useAuthStore((s) => s.session);
  const server = currentServer();
  const setAllCollections = useDataStore((s) => s.setAllCollections);

  const [keys, setKeys] = useState<AiKeyRow[]>([]);
  const [freshKey, setFreshKey] = useState('');
  const [inbox, setInbox] = useState<{ events: AiInboxEvent[]; count: number }>({ events: [], count: 0 });
  const [busy, setBusy] = useState(false);
  const [copied, setCopied] = useState('');

  const baseUrl = useMemo(() => (server?.url ?? '').replace(/\/+$/, ''), [server]);
  const openapiUrl = baseUrl ? `${baseUrl}/api/ai/openapi.json` : '';

  const refresh = async () => {
    if (!session?.token) return;
    try {
      const [k, box] = await Promise.all([listAiKeys(server), fetchAiInbox(server)]);
      setKeys(k);
      setInbox(box);
    } catch {
      /* 离线/未开通：静默 */
    }
  };

  useEffect(() => {
    void refresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session?.token, baseUrl]);

  const doCopy = async (text: string, tag: string) => {
    const ok = await copyText(text);
    setCopied(ok ? tag : '');
    if (ok) {
      void haptic('select');
      toastSuccess('已复制');
      window.setTimeout(() => setCopied(''), 1600);
    } else {
      toastError('复制失败，请手动选中复制');
    }
  };

  const doCreate = async () => {
    void haptic('medium');
    setBusy(true);
    try {
      const k = await createAiKey(server, 'Muse');
      setFreshKey(k.key);
      await refresh();
      toastSuccess('密钥已生成，复制后填入你的 AI 后台');
    } catch (e) {
      toastError((e as Error).message || '生成失败');
    } finally {
      setBusy(false);
    }
  };

  const doRevoke = async (id: string) => {
    void haptic('heavy');
    if (!window.confirm('撤销后该 AI 将无法再记账，确定？')) return;
    try {
      await revokeAiKey(server, id);
      await refresh();
      toastSuccess('已撤销');
    } catch (e) {
      toastError((e as Error).message || '撤销失败');
    }
  };

  const doMerge = async () => {
    void haptic('medium');
    if (!inbox.count) {
      toastError('云端没有待入账记录');
      return;
    }
    setBusy(true);
    try {
      const cur = useDataStore.getState();
      const next: Partial<Record<CollectionName, unknown[]>> = {};
      const add = (name: CollectionName, rows: Array<Record<string, unknown>>) => {
        if (!rows.length) return;
        const base = (cur[name] as unknown as Array<{ id?: string }>) ?? [];
        const have = new Set(base.map((r) => r.id));
        const fresh = rows.filter((r) => r.id && !have.has(r.id as string));
        if (fresh.length) next[name] = [...fresh, ...base];
      };
      for (const ev of inbox.events) {
        add('valueRecords', ev.records.valueRecords ?? []);
        add('goods', ev.records.goods ?? []);
        add('subscriptions', ev.records.subscriptions ?? []);
      }
      // setAllCollections 只 patch 传进去的集合，其余保持不动
      if (Object.keys(next).length) {
        await setAllCollections(next);
      }
      await applyAiInbox(server, inbox.events.map((e) => e.id));
      await refresh();
      const n = inbox.count;
      toastSuccess(n ? `已合并 ${n} 条到本机` : '没有新记录');
    } catch (e) {
      toastError((e as Error).message || '合并失败');
    } finally {
      setBusy(false);
    }
  };

  const curlSample = baseUrl
    ? `curl -X POST ${baseUrl}/api/ai/commit \\
  -H "Authorization: Bearer <你的 API Key>" \\
  -H "Content-Type: application/json" \\
  -d '{"text":"昨天买了个耳机 899，今天午饭 35"}'`
    : '';

  return (
    <div className="space-y-3 pb-6">
      <div className="flex items-center gap-2">
        <button
          onClick={() => nav(-1)}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-surface active:bg-surface-2"
          aria-label="返回"
        >
          <ArrowLeft size={18} strokeWidth={1.8} />
        </button>
        <h1 className="text-lg font-semibold">AI 接入</h1>
      </div>

      {!session?.token ? (
        <div className="rounded-card border border-line bg-surface p-4">
          <p className="text-sm text-ink-2">登录后才能生成 API 密钥。</p>
          <button
            onClick={() => nav('/login')}
            className="mt-3 h-10 w-full rounded-btn bg-accent text-sm font-medium text-white"
          >
            去登录
          </button>
        </div>
      ) : (
        <>
          {/* 第一步：地址 */}
          <section className="rounded-card border border-line bg-surface p-4">
            <div className="mb-2 flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent-soft text-accent">
                <Sparkles size={16} strokeWidth={1.9} />
              </span>
              <h2 className="text-sm font-semibold">1 · 复制 API 地址</h2>
            </div>
            <div className="flex items-center gap-2">
              <code className="min-w-0 flex-1 truncate rounded-btn bg-surface-2 px-3 py-2 text-xs text-ink-2">
                {baseUrl || '未连接服务器'}
              </code>
              <button
                onClick={() => void doCopy(baseUrl, 'base')}
                className="flex h-9 items-center gap-1 rounded-btn border border-line px-3 text-xs active:bg-surface-2"
              >
                {copied === 'base' ? <Check size={14} /> : <Copy size={14} />}
                复制
              </button>
            </div>
            <p className="mt-2 text-[11px] text-ink-3">
              把这个地址填进你自己 AI 后台的「自定义工具 / HTTP 工具」。接口规范：{' '}
              <a className="text-accent underline" href={openapiUrl} target="_blank" rel="noreferrer">
                openapi.json
              </a>
            </p>
          </section>

          {/* 第二步：密钥 */}
          <section className="rounded-card border border-line bg-surface p-4">
            <div className="mb-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent-soft text-accent">
                  <KeyRound size={16} strokeWidth={1.9} />
                </span>
                <h2 className="text-sm font-semibold">2 · 生成 API 密钥</h2>
              </div>
              <button onClick={() => void refresh()} className="text-ink-3 active:opacity-60" aria-label="刷新">
                <RefreshCw size={16} strokeWidth={1.8} />
              </button>
            </div>

            {freshKey ? (
              <div className="mb-3 rounded-btn border border-accent/30 bg-accent-soft p-3">
                <p className="mb-1 text-[11px] text-accent">新建成功，只显示这一次：</p>
                <div className="flex items-center gap-2">
                  <code className="min-w-0 flex-1 break-all text-[11px] text-accent">{freshKey}</code>
                  <button
                    onClick={() => void doCopy(freshKey, 'new')}
                    className="flex h-8 shrink-0 items-center gap-1 rounded-btn bg-accent px-2.5 text-[11px] font-medium text-white"
                  >
                    {copied === 'new' ? <Check size={13} /> : <Copy size={13} />}
                    复制
                  </button>
                </div>
              </div>
            ) : null}

            {keys.length ? (
              <ul className="mb-3 divide-y divide-line-2">
                {keys.map((k) => (
                  <li key={k.id} className="flex items-center gap-2 py-2.5">
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm">{k.name}</p>
                      <p className="text-[11px] text-ink-3">
                        {k.prefix} · 创建 {k.createdAt}
                        {k.lastUsedAt ? ` · 最近使用 ${k.lastUsedAt}` : ' · 未使用'}
                      </p>
                    </div>
                    <button
                      onClick={() => void doRevoke(k.id)}
                      className="flex h-8 items-center gap-1 rounded-btn border border-line px-2.5 text-[11px] text-ink-3 active:bg-surface-2"
                      style={{ color: 'var(--fou)' }}
                    >
                      <Trash2 size={13} />
                      撤销
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mb-3 text-xs text-ink-3">还没有密钥。生成后填进 AI 后台的认证（Bearer）。</p>
            )}

            <button
              onClick={() => void doCreate()}
              disabled={busy}
              className="flex h-10 w-full items-center justify-center gap-2 rounded-btn bg-accent text-sm font-medium text-white disabled:opacity-60"
            >
              <Wand2 size={16} strokeWidth={1.9} />
              {busy ? '处理中…' : keys.length ? '再生成一把' : '生成 API 密钥'}
            </button>
          </section>

          {/* 第三步：待入账 */}
          <section className="rounded-card border border-line bg-surface p-4">
            <div className="mb-2 flex items-center justify-between">
              <h2 className="text-sm font-semibold">3 · 云端待入账</h2>
              <span className="text-[11px] text-ink-3">{inbox.count ? `${inbox.count} 条` : '暂无'}</span>
            </div>
            <p className="mb-3 text-[11px] text-ink-3">
              AI 记的账先落在云端，点「合并」才写进本机。合并后 App / 网页 / 多端一致。
            </p>
            <button
              onClick={() => void doMerge()}
              disabled={busy || !inbox.count}
              className="h-10 w-full rounded-btn border border-line text-sm font-medium active:bg-surface-2 disabled:opacity-50"
            >
              {inbox.count ? `合并 ${inbox.count} 条到本机` : '暂无待入账'}
            </button>
          </section>

          {/* 用法说明 */}
          <section className="rounded-card border border-line bg-surface p-4">
            <h2 className="mb-2 text-sm font-semibold">怎么用（4 步）</h2>
            <ol className="space-y-1.5 text-[12px] leading-relaxed text-ink-2">
              <li>1. 复制上面的 API 地址，填进你的 AI 后台（自定义工具 / HTTP 插件）。</li>
              <li>2. 生成密钥，填进认证方式 <code className="rounded bg-surface-2 px-1">Authorization: Bearer &lt;Key&gt;</code>。</li>
              <li>3. 让 AI 调用 <code className="rounded bg-surface-2 px-1">POST /api/ai/commit</code>，body 传 <code className="rounded bg-surface-2 px-1">{'{"text":"午饭 35"}'}</code>。</li>
              <li>4. 回到这里点「合并」，记录就进生活流了。查账可调 <code className="rounded bg-surface-2 px-1">POST /api/ai/ask</code>。</li>
            </ol>
            {curlSample ? (
              <pre className="mt-3 overflow-x-auto rounded-btn bg-surface-2 p-3 text-[10.5px] leading-relaxed text-ink-2">
                {curlSample}
              </pre>
            ) : null}
          </section>
        </>
      )}
    </div>
  );
}
