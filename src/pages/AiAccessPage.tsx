import { useEffect, useMemo, useState, type ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft, BookOpen, Braces, Check, ChevronDown, Copy, Database, ExternalLink,
  Inbox, KeyRound, Layers, Link2, RefreshCw, ShieldCheck, Sparkles, Tag,
  Trash2, Wand2, Zap,
} from 'lucide-react';
import { currentServer, useAuthStore, useDataStore, toastError, toastSuccess } from '../store';
import { haptic } from '../lib/haptics';
import { mergeInboxEvents } from '../lib/aiInboxMerge';
import {
  applyAiInbox,
  createAiKey,
  discardAiInbox,
  fetchAiInbox,
  fetchAiSchema,
  listAiKeys,
  revokeAiKey,
  type AiInboxEvent,
  type AiInboxItem,
  type AiKeyRow,
  type AiSchemaInfo,
} from '../api/aiAccess';

/**
 * ★v1.6.6 · AI 接入页（网页端 + App 通用）
 *
 * 设计要点（针对 v1.6.5 截图里的问题重做）：
 *   · 顶部状态卡 + 四张分区卡，层级、留白、圆角统一；
 *   · 地址 / 规范地址各自成行，长链接不再被挤压；
 *   · 密钥信息分行展示，不再「创建 xxx · 最近使用 xxx」折成两行乱码；
 *   · 「云端待入账」默认展开，逐批逐条显示明细 + 勾选合并，避免一键误入账；
 *   · 用法说明默认收起，curl 代码块独立卡片、可横竖滚动、可复制，不会被屏幕裁断；
 *   · 新增「接口能力」面板：12 个集合 / 字段 / 端点一目了然，可复制成给 AI 的能力说明。
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

const shortTime = (s: string) => (s || '').replace('T', ' ').slice(0, 16);

function money(v: number | string | null | undefined): string {
  if (v === null || v === undefined || v === '') return '';
  const n = Number(v);
  if (!Number.isFinite(n)) return '';
  return `¥${n.toLocaleString('zh-CN', { maximumFractionDigits: 2 })}`;
}

/** 老服务端事件没有 summary 时，从 records 里兜底生成明细。 */
function fallbackItems(ev: AiInboxEvent): AiInboxItem[] {
  const out: AiInboxItem[] = [];
  const labels: Record<string, string> = {
    valueRecords: '生活流', goods: '物品', subscriptions: '订阅', bills: '账单',
    categories: '分类', wishlist: '心愿', cooldowns: '冷静期', moods: '情绪',
    times: '时间', usageRecords: '打卡', reminders: '提醒', walls: '心墙',
  };
  for (const [name, rows] of Object.entries(ev.records ?? {})) {
    if (!Array.isArray(rows)) continue;
    for (const row of rows) {
      if (typeof row !== 'object' || row === null) continue;
      const r = row as Record<string, unknown>;
      out.push({
        collection: name,
        collectionLabel: labels[name] ?? name,
        id: String(r.id ?? ''),
        title: String(r.name ?? r.note ?? r.text ?? labels[name] ?? name),
        amount: (r.amount ?? r.price ?? null) as number | string | null,
        date: String(r.date ?? r.buyDate ?? r.startDate ?? r.dueDate ?? ''),
        note: String(r.note ?? ''),
        fields: Object.keys(r),
      });
    }
  }
  return out;
}

/** 生成可直接粘进 AI 系统提示词的能力说明。 */
function capabilityPrompt(baseUrl: string, schema: AiSchemaInfo | null): string {
  const lines = [
    '你是「纳物 NaWu」的数据助手，可以通过 HTTP API 管理我的全部数据。',
    `Base URL：${baseUrl}`,
    '认证：Authorization: Bearer <API Key>；Content-Type: application/json',
    `接口规范：${baseUrl}/api/ai/openapi.json`,
    '',
    '【先读再写】调用 GET /api/ai/schema 获取 12 个集合的完整字段字典；GET /api/ai/context 获取分类、物品、订阅、最近流水。',
    '【读取】GET /api/ai/collections?name=<集合>；复杂条件用 POST /api/ai/query（filter 支持 $gte/$lte/$contains/$in/$or，sortBy/limit/offset/fields）。',
    '【写入】POST /api/ai/mutate，body：{"operations":[{"op":"upsert|update|delete|replace","collection":"<集合>","record":{...}}]}。所有集合都允许附加任意自定义字段，字段会原样保留。',
    '【自然语言】POST /api/ai/parse（只解析）、POST /api/ai/commit（text/items/draft/operations 四选一）、POST /api/ai/ask（查账 / 值不值）。',
    '【自定义】POST /api/ai/categories 自行添加生活流/物品/订阅分类；POST /api/ai/options 自定义「是否归需」选项与判定规则、自定义字段；POST /api/ai/actions 注册任意新功能，POST /api/ai/actions/run 调用。',
    '',
    '【可写的数据】物品（名称、备注、手续费/附加费用、图片、购入日期、保修截止日、自定义字段）、订阅（每月多少钱、周期、图片、开始/到期日）、生活流（金额、日期、分类、是否归需、备注、图片）、账单（截止日、金额、状态）、心愿单、冷静期、分类、情绪、时间、打卡、提醒、心墙。',
    '【重要】写入会先落「云端待入账」，我在 App / 网页的「AI 接入」页逐条确认后才会进本机。不要告诉我已经直接入账；可用 dryRun=true 先预演，DELETE /api/ai/inbox 可撤销。',
  ];
  if (schema) {
    lines.push('', `【当前库】共 ${schema.collectionNames.length} 个集合，${Object.values(schema.collections).reduce((n, c) => n + c.fieldCount, 0)} 个字段；` +
      `归需选项：${schema.judgementOptions.map((o) => o.label).join(' / ')}；` +
      `分类 ${schema.categories.length} 个；自定义功能 ${schema.actions.length} 个。`);
  }
  return lines.join('\n');
}

/** 分区卡：统一标题层级、留白与阴影。 */
function StepCard(props: {
  step: string;
  icon: ReactNode;
  title: string;
  subtitle?: string;
  aside?: React.ReactNode;
  children: ReactNode;
}) {
  return (
    <section className="rounded-card border border-line bg-surface shadow-card">
      <div className="flex items-center gap-2.5 px-4 pt-4">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
          {props.icon}
        </span>
        <div className="min-w-0 flex-1">
          <h2 className="text-sm font-semibold leading-tight">
            <span className="mr-1 text-accent">{props.step}</span>
            {props.title}
          </h2>
          {props.subtitle ? <p className="mt-0.5 truncate text-[11px] text-ink-3">{props.subtitle}</p> : null}
        </div>
        {props.aside}
      </div>
      <div className="px-4 pb-4 pt-3">{props.children}</div>
    </section>
  );
}

export default function AiAccessPage() {
  const nav = useNavigate();
  const session = useAuthStore((s) => s.session);
  const server = currentServer();
  const setAllCollections = useDataStore((s) => s.setAllCollections);

  const [keys, setKeys] = useState<AiKeyRow[]>([]);
  const [freshKey, setFreshKey] = useState('');
  const [inbox, setInbox] = useState<{ events: AiInboxEvent[]; count: number }>({ events: [], count: 0 });
  const [schema, setSchema] = useState<AiSchemaInfo | null>(null);
  const [busy, setBusy] = useState(false);
  const [copied, setCopied] = useState('');
  const [inboxOpen, setInboxOpen] = useState(true); // ★默认展开
  const [guideOpen, setGuideOpen] = useState(false);
  const [capsOpen, setCapsOpen] = useState(false);
  const [selected, setSelected] = useState<Set<number>>(new Set());

  const baseUrl = useMemo(() => (server?.url ?? '').replace(/\/+$/, ''), [server]);
  const openapiUrl = baseUrl ? `${baseUrl}/api/ai/openapi.json` : '';
  const loggedIn = Boolean(session?.token);

  const refresh = async () => {
    if (!loggedIn) return;
    try {
      const [k, box] = await Promise.all([listAiKeys(server), fetchAiInbox(server)]);
      setKeys(k);
      setInbox(box);
      setSelected((prev) => {
        const alive = new Set(box.events.map((e) => e.id));
        return new Set([...prev].filter((id) => alive.has(id)));
      });
    } catch {
      /* 离线/未开通：静默 */
    }
    try {
      setSchema(await fetchAiSchema(server));
    } catch {
      /* 老服务端没有 /schema 时，能力面板降级为静态说明 */
    }
  };

  useEffect(() => {
    void refresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session?.token, baseUrl]);

  const doCopy = async (text: string, tag: string) => {
    if (!text) return;
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
    if (!window.confirm('撤销后该 AI 将无法再调用接口，确定？')) return;
    try {
      await revokeAiKey(server, id);
      await refresh();
      toastSuccess('已撤销');
    } catch (e) {
      toastError((e as Error).message || '撤销失败');
    }
  };

  const toggle = (id: number) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const selectedEvents = inbox.events.filter((e) => selected.has(e.id));
  const selectedRows = selectedEvents.reduce((n, e) => n + (e.itemCount || fallbackItems(e).length), 0);

  /** 只把勾选的批次合并进本机，支持全部 12 个集合与增删改。 */
  const doMerge = async () => {
    void haptic('medium');
    if (!selectedEvents.length) {
      toastError('请先勾选要入账的批次');
      return;
    }
    setBusy(true);
    try {
      const cur = useDataStore.getState() as unknown as Record<string, unknown>;
      const next = mergeInboxEvents(cur, selectedEvents);
      if (Object.keys(next).length) await setAllCollections(next);
      await applyAiInbox(server, selectedEvents.map((e) => e.id));
      setSelected(new Set());
      await refresh();
      toastSuccess(`已合并 ${selectedRows} 条到本机`);
    } catch (e) {
      toastError((e as Error).message || '合并失败');
    } finally {
      setBusy(false);
    }
  };

  /** 丢弃勾选的批次：服务端会同步清掉云端快照里的对应记录。 */
  const doDiscard = async () => {
    if (!selectedEvents.length) return;
    if (!window.confirm(`确定丢弃这 ${selectedEvents.length} 个批次（共 ${selectedRows} 条）？丢弃后不会进入本机，也无法恢复。`)) return;
    void haptic('heavy');
    setBusy(true);
    try {
      await discardAiInbox(server, selectedEvents.map((e) => e.id));
      setSelected(new Set());
      await refresh();
      toastSuccess('已丢弃');
    } catch (e) {
      toastError((e as Error).message || '丢弃失败');
    } finally {
      setBusy(false);
    }
  };

  const curlSample = baseUrl
    ? [
        `curl -X POST ${baseUrl}/api/ai/mutate \\`,
        '  -H "Authorization: Bearer <你的 API Key>" \\',
        '  -H "Content-Type: application/json" \\',
        `  -d '{"operations":[{"op":"upsert","collection":"goods","record":{"name":"耳机","price":899,"note":"双十一","extraFees":[{"name":"手续费","amount":3}],"image":{"source":"url","ref":"https://.../photo.jpg"}}}]}'`,
      ].join('\n')
    : '';
  const totalFields = schema ? Object.values(schema.collections).reduce((n, c) => n + c.fieldCount, 0) : 116;
  const stats = [
    { label: '可调用集合', value: schema?.collectionNames.length ?? 12 },
    { label: '字段', value: totalFields },
    { label: '接口端点', value: 16 },
    { label: '待入账', value: inbox.count },
  ];

  return (
    <div className="mx-auto w-full max-w-2xl space-y-3 pb-10 dt:max-w-3xl">
      {/* 顶部标题 */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => nav(-1)}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line bg-surface active:bg-surface-2"
          aria-label="返回"
        >
          <ArrowLeft size={18} strokeWidth={1.8} />
        </button>
        <div className="min-w-0 flex-1">
          <h1 className="text-h2">AI 接入</h1>
          <p className="truncate text-caption text-ink-3">把纳物的全部数据交给你的 AI</p>
        </div>
        <span className={`shrink-0 rounded-full px-2.5 py-1 text-[11px] font-medium ${
          loggedIn ? 'bg-accent-soft text-accent' : 'bg-surface-2 text-ink-3'
        }`}>
          {loggedIn ? (baseUrl ? '已连接' : '未连接服务器') : '未登录'}
        </span>
      </div>

      {/* 状态总览 */}
      <div className="relative overflow-hidden rounded-card border border-line bg-accent-soft px-4 py-4">
        <div className="pointer-events-none absolute -right-12 -top-14 h-40 w-40 rounded-full border-[26px] border-accent/10" />
        <div className="relative">
          <div className="flex items-center gap-1.5 text-accent">
            <Sparkles size={14} strokeWidth={2} />
            <span className="text-caption font-medium">
              全量数据 API{schema?.version ? ` · v${schema.version}` : ''}
            </span>
          </div>
          <h2 className="mt-1.5 text-h2">让 AI 替你打理纳物</h2>
          <p className="mt-1 text-caption leading-relaxed text-ink-2">
            物品、备注、手续费、图片、日期、截止时间、每月金额、归需与分类，都能读能写。
          </p>
          <div className="mt-3 grid grid-cols-4 gap-2">
            {stats.map((s) => (
              <div key={s.label} className="rounded-btn bg-surface px-2 py-2 text-center">
                <p className="text-num-sm text-ink">{s.value}</p>
                <p className="mt-0.5 text-[10px] text-ink-3">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {!loggedIn ? (
        <div className="rounded-card border border-line bg-surface p-5 text-center shadow-card">
          <p className="text-sm text-ink-2">登录后才能生成 API 密钥、查看云端待入账。</p>
          <button
            onClick={() => nav('/login')}
            className="mt-4 h-11 w-full rounded-btn bg-accent text-sm font-medium text-white"
          >
            去登录
          </button>
        </div>
      ) : (
        <>
          {/* 1 · API 地址 */}
          <StepCard step="1" icon={<Link2 size={17} strokeWidth={1.9} />} title="复制 API 地址" subtitle="填进你 AI 后台的自定义工具 / HTTP 工具">
            <div className="flex items-center gap-2 rounded-btn border border-line bg-surface-2 px-3 py-2.5">
              <code className="min-w-0 flex-1 truncate font-mono text-[13px] text-ink">
                {baseUrl || '未连接服务器'}
              </code>
              <button
                onClick={() => void doCopy(baseUrl, 'base')}
                className="flex h-8 shrink-0 items-center gap-1 rounded-btn border border-line bg-surface px-2.5 text-[11px] font-medium active:bg-surface-2"
              >
                {copied === 'base' ? <Check size={13} /> : <Copy size={13} />}
                复制
              </button>
            </div>
            <div className="mt-2.5 flex items-center gap-2 rounded-btn border border-line px-3 py-2">
              <div className="min-w-0 flex-1">
                <p className="text-[10px] text-ink-3">接口规范 · 可直接导入 AI 工具</p>
                <code className="mt-0.5 block break-all font-mono text-[11px] text-ink-2">
                  {openapiUrl || '/api/ai/openapi.json'}
                </code>
              </div>
              <button
                onClick={() => void doCopy(openapiUrl, 'spec')}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-btn border border-line active:bg-surface-2"
                aria-label="复制规范地址"
              >
                {copied === 'spec' ? <Check size={14} /> : <Copy size={14} />}
              </button>
              <a
                href={openapiUrl || '#'}
                target="_blank"
                rel="noreferrer"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-btn border border-line active:bg-surface-2"
                aria-label="打开规范"
              >
                <ExternalLink size={14} />
              </a>
            </div>
            <p className="mt-2.5 text-[11px] leading-relaxed text-ink-3">
              认证方式：<code className="rounded bg-surface-2 px-1 text-ink-2">Authorization: Bearer &lt;Key&gt;</code>
            </p>
          </StepCard>

          {/* 2 · API 密钥 */}
          <StepCard
            step="2"
            icon={<KeyRound size={17} strokeWidth={1.9} />}
            title="生成 API 密钥"
            subtitle="长期使用，可随时撤销"
            aside={
              <button
                onClick={() => void refresh()}
                className="flex h-8 w-8 items-center justify-center rounded-full text-ink-3 active:bg-surface-2"
                aria-label="刷新"
              >
                <RefreshCw size={15} strokeWidth={1.8} />
              </button>
            }
          >
            {freshKey ? (
              <div className="mb-3 rounded-btn border border-accent/30 bg-accent-soft p-3">
                <div className="mb-1.5 flex items-center gap-1.5 text-[11px] font-medium text-accent">
                  <ShieldCheck size={13} />
                  新建成功 · 明文只显示这一次
                </div>
                <div className="flex items-center gap-2">
                  <code className="min-w-0 flex-1 break-all font-mono text-[11px] text-ink">{freshKey}</code>
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
              <ul className="mb-3 space-y-2">
                {keys.map((k) => (
                  <li key={k.id} className="rounded-btn border border-line bg-surface-2 p-3">
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <p className="min-w-0 flex-1 truncate text-[13px] font-medium">{k.name}</p>
                      <button
                        onClick={() => void doRevoke(k.id)}
                        className="flex h-7 shrink-0 items-center gap-1 rounded-btn border border-line bg-surface px-2 text-[11px] text-danger active:bg-surface-2"
                      >
                        <Trash2 size={12} />
                        撤销
                      </button>
                    </div>
                    <p className="mt-1.5 break-all font-mono text-[11px] text-ink-2">{k.prefix}</p>
                    <div className="mt-1.5 grid grid-cols-2 gap-2 border-t border-line-2 pt-1.5 text-[10px] text-ink-3">
                      <span className="truncate">创建 · {k.createdAt}</span>
                      <span className="truncate text-right">最近使用 · {k.lastUsedAt ?? '未使用'}</span>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="mb-3 rounded-btn border border-dashed border-line bg-surface-2 px-3 py-4 text-center">
                <p className="text-xs text-ink-2">还没有密钥</p>
                <p className="mt-0.5 text-[11px] text-ink-3">生成后填进 AI 后台的认证（Bearer）</p>
              </div>
            )}

            <button
              onClick={() => void doCreate()}
              disabled={busy}
              className="flex h-11 w-full items-center justify-center gap-2 rounded-btn bg-accent text-sm font-medium text-white active:opacity-90 disabled:opacity-60"
            >
              <Wand2 size={16} strokeWidth={1.9} />
              {busy ? '处理中…' : keys.length ? '再生成一把' : '生成 API 密钥'}
            </button>
          </StepCard>

          {/* 3 · 云端待入账（★默认展开 + 逐条明细） */}
          <StepCard
            step="3"
            icon={<Inbox size={17} strokeWidth={1.9} />}
            title="云端待入账"
            subtitle={inbox.count ? `${inbox.events.length} 个批次 · ${inbox.count} 条记录` : '暂无待入账'}
            aside={
              <button
                onClick={() => setInboxOpen((v) => !v)}
                className="flex h-8 items-center gap-1 rounded-full px-2 text-[11px] text-ink-3 active:bg-surface-2"
                aria-expanded={inboxOpen}
              >
                {inboxOpen ? '收起' : '展开'}
                <ChevronDown size={14} className={inboxOpen ? 'rotate-180 transition-transform' : 'transition-transform'} />
              </button>
            }
          >
            <p className="mb-2.5 text-[11px] leading-relaxed text-ink-3">
              AI 写入先落在这里；你逐条确认后才写进本机，合并后 App / 网页 / 多端一致。
            </p>
            {inboxOpen ? (
              <>
                <div className="mb-2.5 flex items-start gap-2 rounded-btn bg-warn-soft px-3 py-2 text-[11px] leading-relaxed text-ink-2">
                  <ShieldCheck size={14} className="mt-0.5 shrink-0 text-warn" />
                  <span>默认不勾选。先看明细再合并，避免把不想入账的项目误写进生活流。</span>
                </div>

                {inbox.events.length ? (
                  <>
                    <div className="mb-2 flex items-center justify-between gap-2">
                      <button
                        onClick={() => setSelected(selected.size === inbox.events.length ? new Set() : new Set(inbox.events.map((e) => e.id)))}
                        className="text-[11px] font-medium text-accent"
                      >
                        {selected.size === inbox.events.length ? '取消全选' : '全选'}
                      </button>
                      <span className="text-[11px] text-ink-3">已选 {selectedEvents.length} 批 / {selectedRows} 条</span>
                    </div>

                    <ul className="max-h-[420px] space-y-2 overflow-y-auto pr-0.5">
                      {inbox.events.map((ev) => {
                        const items = ev.summary?.length ? ev.summary : fallbackItems(ev);
                        const picked = selected.has(ev.id);
                        return (
                          <li
                            key={ev.id}
                            className={`overflow-hidden rounded-btn border bg-surface ${picked ? 'border-accent/50' : 'border-line'}`}
                          >
                            <label className="flex cursor-pointer items-center gap-2.5 px-3 py-2.5">
                              <input
                                type="checkbox"
                                checked={picked}
                                onChange={() => toggle(ev.id)}
                                className="h-4 w-4 shrink-0"
                                style={{ accentColor: 'var(--accent)' }}
                              />
                              <div className="min-w-0 flex-1">
                                <p className="text-xs font-medium">批次 #{ev.id} · {items.length} 条</p>
                                <p className="mt-0.5 truncate text-[10px] text-ink-3">
                                  {shortTime(ev.createdAt)} · 来自 {ev.source || 'AI'}
                                </p>
                              </div>
                              <span className="shrink-0 rounded-md bg-surface-2 px-1.5 py-0.5 text-[10px] text-ink-3">
                                {ev.kind}
                              </span>
                            </label>
                            <ul className="divide-y divide-line-2 border-t border-line-2">
                              {items.map((it, i) => (
                                <li key={`${it.id}-${i}`} className="flex items-center gap-2 px-3 py-2">
                                  <span className="shrink-0 rounded-md bg-accent-soft px-1.5 py-0.5 text-[10px] text-accent">
                                    {it.collectionLabel}
                                  </span>
                                  <span className="min-w-0 flex-1 truncate text-[12px] text-ink">{it.title}</span>
                                  {money(it.amount) ? (
                                    <span className="shrink-0 text-[12px] font-medium text-ink">{money(it.amount)}</span>
                                  ) : null}
                                  {it.date ? <span className="shrink-0 text-[10px] text-ink-3">{it.date.slice(5)}</span> : null}
                                </li>
                              ))}
                              {items.length === 0 ? (
                                <li className="px-3 py-2 text-[11px] text-ink-3">（无明细）</li>
                              ) : null}
                            </ul>
                            {items[0]?.fields?.length ? (
                              <p className="truncate border-t border-line-2 px-3 py-1.5 text-[10px] text-ink-3">
                                字段：{items[0].fields.slice(0, 10).join(' · ')}{items[0].fields.length > 10 ? ' …' : ''}
                              </p>
                            ) : null}
                          </li>
                        );
                      })}
                    </ul>

                    <div className="mt-3 flex gap-2">
                      <button
                        onClick={() => void doMerge()}
                        disabled={busy || !selectedEvents.length}
                        className="h-10 flex-1 rounded-btn bg-accent text-[13px] font-medium text-white active:opacity-90 disabled:opacity-50"
                      >
                        {selectedEvents.length ? `合并选中 ${selectedRows} 条到本机` : '请先勾选批次'}
                      </button>
                      <button
                        onClick={() => void doDiscard()}
                        disabled={busy || !selectedEvents.length}
                        className="flex h-10 shrink-0 items-center gap-1 rounded-btn border border-line px-3 text-[12px] text-danger active:bg-surface-2 disabled:opacity-50"
                      >
                        <Trash2 size={14} />
                        丢弃
                      </button>
                    </div>
                  </>
                ) : (
                  <div className="flex flex-col items-center gap-2 rounded-btn border border-dashed border-line bg-surface-2 py-8">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent-soft text-accent">
                      <Inbox size={20} strokeWidth={1.7} />
                    </span>
                    <p className="text-sm font-medium text-ink-2">暂无待入账</p>
                    <p className="text-[11px] text-ink-3">AI 写入的记录会先出现在这里，确认后才入账</p>
                  </div>
                )}
              </>
            ) : (
              <button
                onClick={() => setInboxOpen(true)}
                className="h-10 w-full rounded-btn border border-line text-[13px] font-medium text-ink-2 active:bg-surface-2"
              >
                {inbox.count ? `展开查看 ${inbox.count} 条明细` : '展开待入账'}
              </button>
            )}
          </StepCard>

          {/* 4 · 怎么用 */}
          <section className="rounded-card border border-line bg-surface shadow-card">
            <button
              onClick={() => setGuideOpen((v) => !v)}
              className="flex w-full items-center gap-2.5 px-4 py-3.5 text-left"
              aria-expanded={guideOpen}
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                <BookOpen size={17} strokeWidth={1.9} />
              </span>
              <div className="min-w-0 flex-1">
                <h2 className="text-sm font-semibold"><span className="mr-1 text-accent">4</span>怎么用（4 步）</h2>
                <p className="mt-0.5 text-[11px] text-ink-3">认证、调用、确认，附可直接复制的示例</p>
              </div>
              <ChevronDown size={16} className={`shrink-0 text-ink-3 transition-transform ${guideOpen ? 'rotate-180' : ''}`} />
            </button>
            {guideOpen ? (
              <div className="border-t border-line-2 px-4 pb-4 pt-3">
                <ol className="space-y-2.5">
                  {[
                    <>复制上面的 API 地址与 <code className="rounded bg-surface-2 px-1">openapi.json</code>，填进你的 AI 后台。</>,
                    <>生成密钥，认证填 <code className="rounded bg-surface-2 px-1">Authorization: Bearer &lt;Key&gt;</code>。</>,
                    <>让 AI 先调 <code className="rounded bg-surface-2 px-1">GET /api/ai/schema</code> 看能写什么，再用 <code className="rounded bg-surface-2 px-1">POST /api/ai/mutate</code> 写任意字段。</>,
                    <>回到第 3 步核对明细、勾选并合并；查账用 <code className="rounded bg-surface-2 px-1">POST /api/ai/ask</code>。</>,
                  ].map((node, i) => (
                    <li key={i} className="flex gap-2.5 text-[12px] leading-relaxed text-ink-2">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-soft text-[10px] font-semibold text-accent">
                        {i + 1}
                      </span>
                      <span className="min-w-0 flex-1 break-words">{node}</span>
                    </li>
                  ))}
                </ol>
                {curlSample ? (
                  <div className="mt-3 overflow-hidden rounded-btn border border-line bg-surface-2">
                    <div className="flex items-center justify-between border-b border-line px-3 py-2">
                      <span className="text-[11px] font-medium text-ink-2">示例 · 写入一件物品（含手续费与图片）</span>
                      <button
                        onClick={() => void doCopy(curlSample, 'curl')}
                        className="flex h-7 items-center gap-1 rounded-btn border border-line bg-surface px-2 text-[10px] active:bg-surface-2"
                      >
                        {copied === 'curl' ? <Check size={12} /> : <Copy size={12} />}
                        复制
                      </button>
                    </div>
                    <pre className="max-h-52 overflow-auto whitespace-pre px-3 py-2.5 font-mono text-[10.5px] leading-relaxed text-ink-2">
                      {curlSample}
                    </pre>
                  </div>
                ) : null}
              </div>
            ) : null}
          </section>

          {/* 接口能力 */}
          <section className="rounded-card border border-line bg-surface shadow-card">
            <button
              onClick={() => setCapsOpen((v) => !v)}
              className="flex w-full items-center gap-2.5 px-4 py-3.5 text-left"
              aria-expanded={capsOpen}
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                <Braces size={17} strokeWidth={1.9} />
              </span>
              <div className="min-w-0 flex-1">
                <h2 className="text-sm font-semibold">接口能力</h2>
                <p className="mt-0.5 text-[11px] text-ink-3">
                  {schema ? `${schema.collectionNames.length} 个集合 · ${totalFields} 个字段 · ${schema.categories.length} 个分类` : '12 个集合 · 全字段读写'}
                </p>
              </div>
              <ChevronDown size={16} className={`shrink-0 text-ink-3 transition-transform ${capsOpen ? 'rotate-180' : ''}`} />
            </button>
            {capsOpen ? (
              <div className="border-t border-line-2 px-4 pb-4 pt-3">
                <button
                  onClick={() => void doCopy(capabilityPrompt(baseUrl, schema), 'prompt')}
                  className="mb-3 flex h-10 w-full items-center justify-center gap-2 rounded-btn border border-accent/40 bg-accent-soft text-[13px] font-medium text-accent active:opacity-80"
                >
                  {copied === 'prompt' ? <Check size={15} /> : <Copy size={15} />}
                  复制能力说明（粘贴给 AI）
                </button>

                <div className="mb-3 grid grid-cols-2 gap-2">
                  {(schema ? Object.entries(schema.collections) : [
                    ['goods', { label: '物品库', fieldCount: 24, description: '' }],
                    ['subscriptions', { label: '订阅', fieldCount: 22, description: '' }],
                    ['valueRecords', { label: '生活流', fieldCount: 13, description: '' }],
                    ['categories', { label: '分类表', fieldCount: 5, description: '' }],
                  ] as Array<[string, { label: string; fieldCount: number; description: string }]>).map(([name, meta]) => (
                    <div key={name} className="rounded-btn border border-line bg-surface-2 px-2.5 py-2">
                      <p className="truncate text-[12px] font-medium">{meta.label}</p>
                      <p className="mt-0.5 text-[10px] text-ink-3">
                        {meta.fieldCount} 字段 · {schema?.counts?.[name] ?? 0} 条
                      </p>
                    </div>
                  ))}
                </div>

                <div className="space-y-2 rounded-btn border border-line p-3">
                  <div className="flex items-start gap-2">
                    <Tag size={14} className="mt-0.5 shrink-0 text-accent" />
                    <div className="min-w-0 flex-1">
                      <p className="text-[11px] font-medium">是否归需（可自定义）</p>
                      <p className="mt-0.5 text-[10px] leading-relaxed text-ink-3">
                        {(schema?.judgementOptions ?? [{ value: 'gui', label: '归 · 值得' }, { value: 'xu', label: '需 · 必要' }, { value: 'fou', label: '否 · 本可避免' }])
                          .map((o) => o.label).join(' / ')}
                        {' · '}可用 POST /api/ai/options 增删选项与判定规则
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 border-t border-line-2 pt-2">
                    <Layers size={14} className="mt-0.5 shrink-0 text-accent" />
                    <div className="min-w-0 flex-1">
                      <p className="text-[11px] font-medium">分类可自行添加</p>
                      <p className="mt-0.5 text-[10px] text-ink-3">POST /api/ai/categories · 生活流 / 物品 / 订阅三类</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 border-t border-line-2 pt-2">
                    <Zap size={14} className="mt-0.5 shrink-0 text-accent" />
                    <div className="min-w-0 flex-1">
                      <p className="text-[11px] font-medium">任意新功能</p>
                      <p className="mt-0.5 text-[10px] text-ink-3">
                        POST /api/ai/actions 注册动作模板 · 当前 {schema?.actions.length ?? 0} 个
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {['GET /schema', 'GET /context', 'GET /collections', 'POST /query', 'POST /mutate', 'POST /categories', 'POST /options', 'POST /actions/run', 'POST /commit', 'POST /ask']
                    .map((p) => (
                      <span key={p} className="rounded-md bg-surface-2 px-1.5 py-1 font-mono text-[10px] text-ink-3">
                        {p}
                      </span>
                    ))}
                </div>
                <p className="mt-3 flex items-start gap-1.5 text-[10px] leading-relaxed text-ink-3">
                  <Database size={12} className="mt-0.5 shrink-0" />
                  所有集合都允许附加任意自定义字段；写入先落云端待入账，确认后才进本机。
                </p>
              </div>
            ) : null}
          </section>
        </>
      )}
    </div>
  );
}
