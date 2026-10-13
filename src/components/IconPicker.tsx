import { useEffect, useMemo, useRef, useState } from 'react';
import { Image as ImageIcon, LayoutGrid, Link2, Search, Upload } from 'lucide-react';
import { SUB_ICON_GROUPS, subIconOf } from '../lib/subIcons';
import {
  BRAND_GROUPS,
  compressIconFile,
  faviconChain,
  iconApiUrl,
  normalizeDomainInput,
  searchBrands,
  toImgIcon,
  toUrlIcon,
  type BrandItem,
} from '../lib/brandIcon';
import { currentServer, toastError } from '../store';

/**
 * 统一图标选择器（订阅 / 物品共用，v1.0.5）。
 *
 * 三个来源 tab（用于不搜索时的浏览）：图标库 / 网络图标 / 本地上传。
 * 搜索框全局唯一：输入任意关键词，一次出齐三类结果 ——
 *   ① 内置图标（lucide 按 id 匹配）
 *   ② 品牌图标（本地 150+ 预设，名称/别名/域名匹配）
 *   ③ 在线图标（自动走服务端 /api/icon/search 检索真实官网，
 *      再由 /api/icon/img 服务端解析目标站真实 <link icon>）—— 无需换框重输。
 * 本地上传：选图自动压缩（默认 96px 方形裁边；传入 onFilePicked 可接管，
 * 物品表单用它走大图裁剪流程）。
 *
 * ⚠️ 铁律：搜索框文本输入非受控（defaultValue + onInput 存 state 仅供过滤，
 * 不回写 DOM）——IME 铁律。
 */

type Tab = 'lib' | 'web' | 'upload';

const TABS: Array<{ key: Tab; label: string; Icon: typeof LayoutGrid }> = [
  { key: 'lib', label: '图标库', Icon: LayoutGrid },
  { key: 'web', label: '网络图标', Icon: Link2 },
  { key: 'upload', label: '本地上传', Icon: Upload },
];

/** 图标服务基址：浏览器 = 当前站点；App = 当前服务器。 */
function iconBaseOf(): string {
  return currentServer()?.url ?? (typeof window !== 'undefined' ? window.location.origin : '');
}

/** 在线搜索结果（v1.0.11：type=icon 图形图标（Iconify SVG）/ type=site 站点域名）。 */
interface OnlineHit {
  type?: 'site' | 'icon';
  domain?: string;
  icon?: string;
  url?: string;
}

/** 网络图标（多源回退）+ 固定尺寸容器：任何站点的图标都显示成一样大。 */
export function BrandImg({
  base,
  domain,
  size = 24,
  alt,
}: {
  base: string;
  domain: string;
  size?: number;
  alt?: string;
}) {
  const chain = useMemo(() => faviconChain(base, domain), [base, domain]);
  const [idx, setIdx] = useState(0);
  useEffect(() => setIdx(0), [base, domain]);
  if (idx >= chain.length) {
    // 全部源失败：中性兜底（域名首字符），不再是突兀的灰色方块
    return (
      <span
        className="flex shrink-0 items-center justify-center rounded-md bg-surface-2 text-ink-3"
        style={{ width: size, height: size, fontSize: size * 0.5 }}
        aria-label={alt}
      >
        {domain.charAt(0).toUpperCase()}
      </span>
    );
  }
  return (
    <span className="flex shrink-0 items-center justify-center overflow-hidden" style={{ width: size, height: size }}>
      <img
        src={chain[idx]}
        width={size}
        height={size}
        alt={alt ?? domain}
        loading="lazy"
        className="h-full w-full"
        style={{ objectFit: 'contain' }}
        onError={() => setIdx(idx + 1)}
      />
    </span>
  );
}

/** 预览：任意 icon 值（builtin / url: / img:）→ 可视节点。 */
export function IconPreview({
  icon,
  size = 22,
  className,
  fallbackBg,
  fallbackFg,
}: {
  icon: string;
  size?: number;
  className?: string;
  fallbackBg?: string;
  fallbackFg?: string;
}) {
  const [broken, setBroken] = useState(false);
  const v = (icon ?? '').trim();
  if (v.startsWith('url:') && !broken) {
    return (
      <img
        src={v.slice(4).trim()}
        width={size}
        height={size}
        alt=""
        className={className}
        style={{ borderRadius: 6, objectFit: 'contain', background: fallbackBg }}
        onError={() => setBroken(true)}
      />
    );
  }
  if (v.startsWith('img:') && !broken) {
    return (
      <img
        src={v.slice(4).trim()}
        width={size}
        height={size}
        alt=""
        className={className}
        style={{ borderRadius: 6, objectFit: 'cover' }}
        onError={() => setBroken(true)}
      />
    );
  }
  const Cmp = subIconOf(v);
  return <Cmp size={size} className={className} style={fallbackFg ? { color: fallbackFg } : undefined} />;
}

/** 品牌图标按钮（自建代理直链，固定 24px 容器）。 */
function BrandButton({
  brand,
  base,
  active,
  onPick,
}: {
  brand: BrandItem;
  base: string;
  active: boolean;
  onPick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onPick}
      title={brand.name}
      className={`flex flex-col items-center gap-1 rounded-btn border py-2 transition-all active:scale-95 ${
        active ? 'border-accent bg-accent-soft' : 'border-line bg-surface-2'
      }`}
    >
      <BrandImg base={base} domain={brand.domain} size={24} alt={brand.name} />
      <span className="w-full truncate px-0.5 text-center text-[10px] text-ink-2">{brand.name}</span>
    </button>
  );
}

/** 分区标题（搜索结果分组用）。 */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="mb-1.5 text-[11px] font-medium text-ink-3">{children}</p>;
}

export default function IconPicker({
  value,
  onChange,
  onFilePicked,
}: {
  value: string;
  onChange: (icon: string) => void;
  /** 传入则接管本地上传（如物品表单的大图裁剪流程）；不传走默认 96px 压缩。 */
  onFilePicked?: (file: File) => void;
}) {
  const [tab, setTab] = useState<Tab>('lib');
  /** 全局唯一搜索关键词（只用于过滤，不回写输入框——IME 铁律）。 */
  const [query, setQuery] = useState('');
  const [onlineHits, setOnlineHits] = useState<OnlineHit[] | null>(null);
  const [onlineBusy, setOnlineBusy] = useState(false);
  const [uploadBusy, setUploadBusy] = useState(false);
  const fileRef = useRef<HTMLInputElement | null>(null);
  /** 搜索框 DOM 引用：回车/点放大镜时读真值立即搜（不依赖 state 时序）。 */
  const searchRef = useRef<HTMLInputElement | null>(null);
  const base = useMemo(iconBaseOf, []);

  const q = query.trim().toLowerCase();
  /** 图标库过滤（按 lucide id）。 */
  const libGroups = useMemo(() => {
    if (!q) return SUB_ICON_GROUPS;
    return SUB_ICON_GROUPS.map((g) => ({ ...g, items: g.items.filter((it) => it.id.includes(q)) })).filter(
      (g) => g.items.length > 0,
    );
  }, [q]);
  /** 品牌库搜索（名称/别名/域名）。 */
  const brandHits = useMemo(() => (q ? searchBrands(query) : null), [q, query]);
  /** 关键词长得像域名时给直取兜底。 */
  const domainHit = useMemo(
    () => (q && brandHits && brandHits.length === 0 ? normalizeDomainInput(query) : null),
    [q, brandHits, query],
  );

  /* 在线搜索：立即执行版（回车 / 点放大镜 / 防抖共用同一实现）。 */
  const runOnlineSearch = (kwRaw: string): void => {
    const kw = kwRaw.trim();
    setOnlineHits(null);
    if (kw.length < 2) {
      setOnlineBusy(false);
      return;
    }
    setOnlineBusy(true);
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 8000);
    fetch(`${base}/api/icon/search?q=${encodeURIComponent(kw)}`, { signal: ctrl.signal })
      .then((r) => r.json())
      .then((j: { ok?: boolean; items?: OnlineHit[] }) => setOnlineHits(j.ok && j.items ? j.items : []))
      .catch(() => setOnlineHits([]))
      .finally(() => {
        clearTimeout(timer);
        setOnlineBusy(false);
      });
  };

  /* 防抖 300ms 自动检索；部分 Android WebView 中文组合输入期 input 事件不完整，
     删除字符才触发——所以回车/放大镜/compositionend/search 事件都能绕过防抖直接搜。 */
  useEffect(() => {
    const kw = query.trim();
    if (kw.length < 2) {
      setOnlineBusy(false);
      return;
    }
    const timer = setTimeout(() => runOnlineSearch(kw), 300);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, base]);

  /* 搜索触发兜底（v1.0.12 重写）：全部改挂【原生 DOM 事件】。
     实测（用户视频实锤）：Android Gboard 中文拼音【连续组合输入】期间，
     React 合成 onInput 被 ChangeEventPlugin 延迟到 compositionend——而连续
     打拼音时 composition 一直不结束 → 输入全程不触发；删除已上屏字符是
     非组合编辑 → 立即触发。这就是「只能删字符才搜索」的根因。
     原生 input/compositionupdate 事件不受 React 合成系统影响，
     组合输入期间照常派发，这里同步 state 即可。 */
  useEffect(() => {
    const el = searchRef.current;
    if (!el) return;
    const sync = (): void => setQuery(el.value);
    const fire = (): void => runOnlineSearch(el.value);
    const onKeyUp = (e: KeyboardEvent): void => {
      if ((e.key === 'Enter' || e.keyCode === 13) && !e.isComposing && e.keyCode !== 229) {
        e.preventDefault();
        fire();
      }
    };
    el.addEventListener('input', sync);
    el.addEventListener('compositionupdate', sync);
    const onCompoEnd = (): void => {
      sync();
      fire();
    };
    el.addEventListener('compositionend', onCompoEnd);
    el.addEventListener('keyup', onKeyUp);
    el.addEventListener('search', fire);
    return () => {
      el.removeEventListener('input', sync);
      el.removeEventListener('compositionupdate', sync);
      el.removeEventListener('compositionend', onCompoEnd);
      el.removeEventListener('keyup', onKeyUp);
      el.removeEventListener('search', fire);
    };
    /* deps 带 tab：切到「本地上传」输入框会卸载，切回来要重新挂监听 */
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [base, tab]);

  const pickFile = async (file: File | undefined): Promise<void> => {
    if (!file) return;
    if (onFilePicked) {
      onFilePicked(file);
      return;
    }
    setUploadBusy(true);
    try {
      const dataUrl = await compressIconFile(file, 96);
      onChange(toImgIcon(dataUrl));
    } catch (e) {
      toastError(e instanceof Error ? e.message : '图片处理失败');
    } finally {
      setUploadBusy(false);
    }
  };

  /* —— 搜索结果（内置 + 品牌 + 在线，一框出齐） —— */
  const searching = q !== '' && tab !== 'upload';
  const iconHits = useMemo(
    () => (onlineHits ?? []).filter((h) => h.type === 'icon' && h.url),
    [onlineHits],
  );
  const siteHits = useMemo(
    () => (onlineHits ?? []).filter((h) => h.domain),
    [onlineHits],
  );
  const onlineEmpty = !onlineBusy && onlineHits !== null && iconHits.length === 0 && siteHits.length === 0;
  const localEmpty = libGroups.length === 0 && (!brandHits || brandHits.length === 0) && !domainHit;
  const allEmpty = searching && localEmpty && (q.length < 2 || onlineEmpty);

  /** 浏览态（未搜索）时当前 tab 的内容。 */
  const browseView =
    tab === 'lib' ? (
      libGroups.map((group) => (
        <div key={group.label}>
          <SectionLabel>{group.label}</SectionLabel>
          <div className="grid grid-cols-8 gap-2">
            {group.items.map(({ id, icon: Icon }) => (
              <button
                key={id}
                type="button"
                onClick={() => onChange(id)}
                aria-label={id}
                title={id}
                className={`flex h-10 items-center justify-center rounded-btn border transition-all active:scale-95 ${
                  value === id ? 'border-accent bg-accent-soft text-accent' : 'border-line bg-surface-2 text-ink-2'
                }`}
              >
                <Icon size={18} />
              </button>
            ))}
          </div>
        </div>
      ))
    ) : (
      BRAND_GROUPS.map((group) => (
        <div key={group.label}>
          <SectionLabel>
            {group.label}
            <span className="ml-1 text-ink-3/70">({group.items.length})</span>
          </SectionLabel>
          <div className="grid grid-cols-5 gap-2">
            {group.items.map((b) => (
              <BrandButton
                key={b.domain + b.name}
                brand={b}
                base={base}
                active={value === toUrlIcon(iconApiUrl(base, b.domain))}
                onPick={() => onChange(toUrlIcon(iconApiUrl(base, b.domain)))}
              />
            ))}
          </div>
        </div>
      ))
    );

  return (
    <div>
      {/* 来源 tab */}
      <div className="mb-2 flex gap-1 rounded-btn bg-surface-2 p-1">
        {TABS.map(({ key, label, Icon }) => (
          <button
            key={key}
            type="button"
            onClick={() => setTab(key)}
            className={`flex h-9 flex-1 items-center justify-center gap-1.5 rounded-btn text-xs font-medium ${
              tab === key ? 'bg-surface text-accent shadow-sm' : 'text-ink-3'
            }`}
          >
            <Icon size={14} />
            {label}
          </button>
        ))}
      </div>

      {/* 当前选中预览 */}
      <div className="mb-2 flex items-center gap-2.5">
        <span className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-accent-soft text-accent">
          <IconPreview icon={value} size={22} />
        </span>
        <span className="text-xs text-ink-3">
          {tab === 'upload'
            ? uploadBusy
              ? '处理中…'
              : '选一张方图，自动裁边压缩'
            : searching
              ? '内置 + 品牌 + 在线，一次搜齐'
              : '点击图标即选中；搜索一次出齐所有来源'}
        </span>
      </div>

      {tab === 'upload' ? (
        <div>
          <button
            type="button"
            onClick={() => fileRef.current?.click()}
            disabled={uploadBusy}
            className="flex h-24 w-full flex-col items-center justify-center gap-1.5 rounded-card border border-dashed border-line bg-surface-2 text-xs text-ink-3 disabled:opacity-50"
          >
            <ImageIcon size={22} />
            {uploadBusy ? '压缩处理中…' : '点此选择图片（自动裁成正方形）'}
          </button>
          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              const f = e.target.files?.[0];
              e.target.value = '';
              void pickFile(f);
            }}
          />
        </div>
      ) : (
        <div className="max-h-80 space-y-3 overflow-y-auto">
          {/* 唯一搜索框：内置 / 品牌 / 在线，一框搜齐；回车或点放大镜立即搜 */}
          <div className="flex h-9 items-center gap-2 rounded-btn border border-line bg-surface-2 px-2.5 focus-within:border-accent">
            <button
              type="button"
              aria-label="搜索"
              onClick={() => searchRef.current && runOnlineSearch(searchRef.current.value)}
              className="shrink-0 text-ink-3 active:text-accent"
            >
              <Search size={14} />
            </button>
            <input
              ref={searchRef}
              type="search"
              defaultValue=""
              onInput={(e) => setQuery((e.target as HTMLInputElement).value)}
              onKeyDown={(e) => {
                const ke = e.nativeEvent;
                if ((e.key === 'Enter' || ke.keyCode === 13) && !ke.isComposing && ke.keyCode !== 229) {
                  e.preventDefault();
                  runOnlineSearch((e.target as HTMLInputElement).value);
                }
              }}
              enterKeyHint="search"
              placeholder="搜图标：耳机、水杯、微信、任一英文词…"
              className="min-w-0 flex-1 bg-transparent text-xs outline-none placeholder:text-ink-3"
            />
          </div>

          {searching ? (
            <>
              {/* ① 内置图标 */}
              {libGroups.length > 0 ? (
                <div>
                  <SectionLabel>内置图标</SectionLabel>
                  <div className="space-y-3">
                    {libGroups.map((group) => (
                      <div key={group.label}>
                        <p className="mb-1 text-[10px] text-ink-3/80">{group.label}</p>
                        <div className="grid grid-cols-8 gap-2">
                          {group.items.map(({ id, icon: Icon }) => (
                            <button
                              key={id}
                              type="button"
                              onClick={() => onChange(id)}
                              aria-label={id}
                              title={id}
                              className={`flex h-10 items-center justify-center rounded-btn border transition-all active:scale-95 ${
                                value === id
                                  ? 'border-accent bg-accent-soft text-accent'
                                  : 'border-line bg-surface-2 text-ink-2'
                              }`}
                            >
                              <Icon size={18} />
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}

              {/* ② 品牌图标 */}
              {brandHits && brandHits.length > 0 ? (
                <div>
                  <SectionLabel>品牌图标</SectionLabel>
                  <div className="grid grid-cols-5 gap-2">
                    {brandHits.map((b) => (
                      <BrandButton
                        key={b.domain + b.name}
                        brand={b}
                        base={base}
                        active={value === toUrlIcon(iconApiUrl(base, b.domain))}
                        onPick={() => onChange(toUrlIcon(iconApiUrl(base, b.domain)))}
                      />
                    ))}
                  </div>
                </div>
              ) : domainHit ? (
                <div>
                  <SectionLabel>域名直取</SectionLabel>
                  <button
                    type="button"
                    onClick={() => onChange(toUrlIcon(iconApiUrl(base, domainHit)))}
                    className="flex w-full items-center justify-center gap-2 rounded-card border border-dashed border-line bg-surface-2 py-3 text-xs text-ink-2 active:scale-[0.99]"
                  >
                    <BrandImg base={base} domain={domainHit} size={20} />
                    获取 {domainHit} 的图标
                  </button>
                </div>
              ) : null}

              {/* ③ 在线图标（同一关键词自动检索，无需换框重输） */}
              {q.length >= 2 ? (
                <div>
                  <SectionLabel>
                    在线图标
                    {onlineBusy ? <span className="ml-1 font-normal text-ink-3/70">搜索中…</span> : null}
                  </SectionLabel>
                  {onlineBusy ? (
                    <p className="py-3 text-center text-xs text-ink-3">正在检索图标…</p>
                  ) : (
                    <>
                      {/* 图形图标（Iconify：数码/生活用品的具体图形，物品/生活流首选） */}
                      {iconHits.length > 0 ? (
                        <div className="mb-2 grid grid-cols-8 gap-2">
                          {iconHits.map((h) => (
                            <button
                              key={h.icon}
                              type="button"
                              onClick={() => onChange(`url:${h.url}`)}
                              title={h.icon}
                              aria-label={h.icon}
                              className={`flex h-10 items-center justify-center rounded-btn border bg-surface p-1.5 transition-all active:scale-95 ${
                                value === `url:${h.url}` ? 'border-accent bg-accent-soft' : 'border-line'
                              }`}
                            >
                              <img
                                src={h.url}
                                alt={h.icon}
                                loading="lazy"
                                className="h-full w-full"
                                style={{ objectFit: 'contain' }}
                              />
                            </button>
                          ))}
                        </div>
                      ) : null}

                      {/* 站点图标（favicon：订阅/品牌官网） */}
                      {siteHits.length > 0 ? (
                        <ul className="divide-y divide-line-2 overflow-hidden rounded-card border border-line bg-surface">
                          {siteHits.map((h) => (
                            <li key={h.domain}>
                              <button
                                type="button"
                                onClick={() => onChange(toUrlIcon(iconApiUrl(base, h.domain!)))}
                                className={`flex w-full items-center gap-2.5 px-3 py-2 text-left active:bg-surface-2 ${
                                  value === toUrlIcon(iconApiUrl(base, h.domain!)) ? 'bg-accent-soft' : ''
                                }`}
                              >
                                <BrandImg base={base} domain={h.domain!} size={22} />
                                <span className="min-w-0 flex-1 truncate text-xs text-ink-2">{h.domain}</span>
                                <span className="text-[11px] text-accent">采用</span>
                              </button>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </>
                  )}
                </div>
              ) : null}

              {/* 全空兜底 */}
              {allEmpty ? (
                <p className="rounded-card border border-dashed border-line bg-surface-2 p-4 text-center text-xs text-ink-3">
                  没有找到「{query}」，换个说法试试，或切「本地上传」直接选图片
                </p>
              ) : null}
            </>
          ) : (
            /* 浏览态：按当前 tab 展示全部 */
            browseView
          )}
        </div>
      )}
    </div>
  );
}
