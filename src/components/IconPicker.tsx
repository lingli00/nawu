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
import { createPortal } from 'react-dom';
import { useBackGuard } from '../lib/backGuard';
import { SYSTEM_ICON_GROUPS } from '../lib/systemIcons';
import { get } from '../net/httpClient';
import { fetchIconAsDataUrl, iconCacheFetchAndStore, iconCacheLookup, normIconKey, warmIconCache } from '../lib/iconCache';
import { haptic } from '../lib/haptics';

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
 * ★v1.0.15 渲染铁律：网络图标**一律不吃 WebView 直连**——
 * 缓存 dataURL 优先 → 未命中走统一网络层抓取入库再渲染 → 全败才落兜底。
 * （用户实测：WebView 加载 http 图极慢且重启即失，缓存层根治。）
 *
 * ⚠️ 铁律：搜索框文本输入非受控（defaultValue + onInput 存 state 仅供过滤，
 * 不回写 DOM）——IME 铁律。
 */

export type Tab = 'lib' | 'web' | 'img' | 'upload';

/** tab 定义：物品模式（系统图标 14 分类 / 品牌图片 / 网络图片 / 相册）与订阅模式（图标库 / 网络图标 / 本地上传）。 */
function tabsOf(systemMode: boolean): Array<{ key: Tab; label: string; Icon: typeof LayoutGrid }> {
  return systemMode
    ? [
        { key: 'lib', label: '系统图标', Icon: LayoutGrid },
        { key: 'web', label: '品牌图片', Icon: Link2 },
        { key: 'img', label: '网络图片', Icon: ImageIcon },
        { key: 'upload', label: '相册上传', Icon: Upload },
      ]
    : [
        { key: 'lib', label: '图标库', Icon: LayoutGrid },
        { key: 'web', label: '网络图标', Icon: Link2 },
        { key: 'upload', label: '本地上传', Icon: Upload },
      ];
}

/** 图标服务基址：浏览器 = 当前站点；App = 当前服务器。 */
function iconBaseOf(): string {
  return currentServer()?.url ?? (typeof window !== 'undefined' ? window.location.origin : '');
}

/** 在线搜索结果（v1.0.11：site 站点域名 / icon 图形图标；v1.0.16：img 商品图片；v1.0.17：thumb 缩略直链）。 */
interface OnlineHit {
  type?: 'site' | 'icon' | 'img';
  domain?: string;
  icon?: string;
  url?: string;
  thumb?: string;
}

/** 商品图预览渲染（缓存优先 + 原生通道抓取，永不裸 img 直连）。 */
function HitImg({ abs, alt }: { abs: string; alt?: string }) {
  const chain = useMemo(() => [abs], [abs]);
  const { src, done } = useCachedIconSrc(chain);
  if (!done || !src) {
    return <span className="h-full w-full rounded bg-surface-2" aria-label={alt} />;
  }
  return <img src={src} alt={alt ?? abs} className="h-full w-full" style={{ objectFit: 'contain' }} />;
}

/** 商品图代理相对路径（任意图床统一走自己服务器的 /api/img/get，缓存放心）。 */
function imgProxyUrl(raw: string): string {
  return `/api/img/get?u=${encodeURIComponent(raw)}`;
}

/** 商品图预览渲染（缓存优先 + 原生通道抓取，永不裸 img 直连）。
 *  v1.0.17：优先用 Bing 缩略直链（~7KB/张秒开），无缩略才走代理原图。 */
function ProductImg({ raw, thumb, alt }: { raw: string; thumb?: string; alt?: string }) {
  const chain = useMemo(() => [thumb ?? imgProxyUrl(raw)], [raw, thumb]);
  const { src, done } = useCachedIconSrc(chain);
  if (!done || !src) {
    return (
      <span
        className="flex h-full w-full items-center justify-center rounded-lg bg-surface-2 text-ink-3/40"
        aria-label={alt}
      >
        <ImageIcon size={16} />
      </span>
    );
  }
  return <img src={src} alt={alt ?? raw} className="h-full w-full rounded-lg" style={{ objectFit: 'cover' }} />;
}

/** 任意 dataURL 中心方裁到 ≤max 的正方形 JPEG（商品图入库用，随备份走）。 */
async function cropSquareDataUrl(dataUrl: string, max = 512): Promise<string> {
  const img = await new Promise<HTMLImageElement | null>((resolve) => {
    const el = new Image();
    const t = setTimeout(() => resolve(null), 6000);
    el.onload = () => {
      clearTimeout(t);
      resolve(el);
    };
    el.onerror = () => {
      clearTimeout(t);
      resolve(null);
    };
    el.src = dataUrl;
  });
  if (!img) return dataUrl; // 解码失败原样存
  const side = Math.min(img.naturalWidth, img.naturalHeight);
  const sx = (img.naturalWidth - side) / 2;
  const sy = (img.naturalHeight - side) / 2;
  const out = Math.min(max, side);
  const cv = document.createElement('canvas');
  cv.width = out;
  cv.height = out;
  const ctx = cv.getContext('2d');
  if (!ctx) return dataUrl;
  ctx.drawImage(img, sx, sy, side, side, 0, 0, out, out);
  return cv.toDataURL('image/jpeg', 0.85);
}

/** 候选链 → 缓存 dataURL（命中即用；未命中走网络层抓取入库）。 */
function useCachedIconSrc(chain: string[]): { src: string | null; done: boolean } {
  const key = chain.map((c) => normIconKey(c)).join('|');
  const [state, setState] = useState<{ src: string | null; done: boolean }>({ src: null, done: false });
  useEffect(() => {
    let alive = true;
    setState({ src: null, done: false });
    void (async () => {
      const hit = await iconCacheLookup(key.split('|'));
      if (hit) {
        if (alive) setState({ src: hit, done: true });
        return;
      }
      const data = await iconCacheFetchAndStore(key.split('|').map((k) => absFromKey(k)));
      if (alive) setState({ src: data, done: true });
    })();
    return () => {
      alive = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);
  return state;
}

/** 相对键 → 抓取用绝对 URL。 */
function absFromKey(k: string): string {
  if (/^https?:\/\//i.test(k)) return k;
  const base = iconBaseOf();
  return base ? `${base}${k.startsWith('/') ? '' : '/'}${k}` : k;
}

/** 网络图标（缓存 dataURL 优先）+ 固定尺寸容器：任何站点的图标都显示成一样大。 */
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
  const { src, done } = useCachedIconSrc(chain);
  if (!done) {
    // 加载中：占位底（无破图、无闪烁破图标）
    return (
      <span
        className="flex shrink-0 items-center justify-center rounded-md bg-surface-2 text-ink-3/40"
        style={{ width: size, height: size }}
        aria-label={alt}
      />
    );
  }
  if (src) {
    return (
      <span className="flex shrink-0 items-center justify-center overflow-hidden" style={{ width: size, height: size }}>
        <img
          src={src}
          width={size}
          height={size}
          alt={alt ?? domain}
          className="h-full w-full"
          style={{ objectFit: 'contain' }}
        />
      </span>
    );
  }
  // 全部源失败：中性兜底（域名首字符）
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

/** 相对代理路径（/api/icon/proxy?u=…）→ 绝对 URL；已是绝对原样返回。 */
export function absIconUrl(u: string | undefined, base: string): string {
  if (!u) return '';
  return u.startsWith('/') ? `${base}${u}` : u;
}

/** 预览：任意 icon 值（builtin / url: / img:）→ 可视节点。
 *  v1.0.15：url: 值不再让 WebView 直连网络 ——
 *  ① 本地缓存 dataURL 命中 → 直接渲染（离线可用、重进秒显、恢复备份即显）；
 *  ② 未命中 → 候选链（自建代理 → Iconify 直链 → 公共 favicon 源）走统一网络层
 *     抓取入库后渲染（App 走 CapacitorHttp 原生通道，不受 WebView 网络栈拖累）；
 *  ③ 全败 → 兜底 Tag / 首字符（永不出现「破图」占位）。 */
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
  const v = (icon ?? '').trim();
  const isUrl = v.startsWith('url:');
  const isImg = v.startsWith('img:');
  const raw = isUrl ? v.slice(4).trim() : '';

  const chain = useMemo<string[]>(() => {
    if (!isUrl || !raw) return [];
    const list = [raw];
    if (raw.includes('api.iconify.design')) {
      const base = iconBaseOf();
      if (base) list.unshift(`${base}/api/icon/proxy?u=${encodeURIComponent(raw)}`);
    } else {
      const m = raw.match(/[?&]d=([^&]+)/);
      if (m) {
        const d = decodeURIComponent(m[1]);
        list.push(`https://icon.horse/i/${d}`, `https://favicon.im/${d}`);
      }
    }
    return list;
  }, [isUrl, raw]);

  const { src, done } = useCachedIconSrc(chain);
  const [imgBroken, setImgBroken] = useState(false);
  useEffect(() => setImgBroken(false), [v]);

  if (isImg && !imgBroken) {
    return (
      <img
        src={v.slice(4).trim()}
        width={size}
        height={size}
        alt=""
        className={className}
        style={{ borderRadius: 6, objectFit: 'cover' }}
        onError={() => setImgBroken(true)}
      />
    );
  }
  if (isUrl) {
    if (src) {
      return (
        <img
          src={src}
          width={size}
          height={size}
          alt=""
          className={className}
          style={{ borderRadius: 6, objectFit: 'contain', background: fallbackBg }}
        />
      );
    }
    if (!done) {
      // 加载中：半透明兜底占位（避免列表跳动，也绝不出现破图）
      const Placeholder = subIconOf(v);
      return <Placeholder size={size} className={`${className ?? ''} opacity-30`} style={fallbackFg ? { color: fallbackFg } : undefined} />;
    }
    // 全部源失败 → 兜底图标
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
  systemMode = false,
  initialTab,
}: {
  value: string;
  onChange: (icon: string) => void;
  /** 传入则接管本地上传（如物品表单的大图裁剪流程）；不传走默认 96px 压缩。 */
  onFilePicked?: (file: File) => void;
  /** v1.0.17 物品模式：系统图标走 14 分类大库 + 品牌图片 / 网络图片独立 tab。 */
  systemMode?: boolean;
  /** 由五来源选择页带入的初始 tab。 */
  initialTab?: Tab;
}) {
  const [tab, setTab] = useState<Tab>(initialTab ?? 'lib');
  /** 全局唯一搜索关键词（只用于过滤，不回写输入框——IME 铁律）。 */
  const [query, setQuery] = useState('');
  const [onlineHits, setOnlineHits] = useState<OnlineHit[] | null>(null);
  /** 商品图片结果（v1.0.16：/api/img/search，Bing 图搜原图直链）。 */
  const [imgHits, setImgHits] = useState<OnlineHit[] | null>(null);
  const [onlineBusy, setOnlineBusy] = useState(false);
  const [uploadBusy, setUploadBusy] = useState(false);
  const fileRef = useRef<HTMLInputElement | null>(null);
  /** 搜索框 DOM 引用：回车/点放大镜时读真值立即搜（不依赖 state 时序）。 */
  const searchRef = useRef<HTMLInputElement | null>(null);
  const base = useMemo(iconBaseOf, []);

  const q = query.trim().toLowerCase();
  /** 图标库过滤（按 lucide id）。物品模式=14 分类系统图标大库；订阅模式=订阅图标库。 */
  const baseGroups = systemMode
    ? SYSTEM_ICON_GROUPS.map((g) => ({ label: g.label, items: g.items.map((id) => ({ id })) }))
    : SUB_ICON_GROUPS.map((g) => ({ label: g.label, items: g.items.map((it) => ({ id: it.id })) }));
  const libGroups = useMemo(() => {
    if (!q) return baseGroups;
    return baseGroups.map((g) => ({ ...g, items: g.items.filter((it) => it.id.includes(q)) })).filter(
      (g) => g.items.length > 0,
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [q, systemMode]);
  /** 品牌库搜索（名称/别名/域名）。 */
  const brandHits = useMemo(() => (q ? searchBrands(query) : null), [q, query]);
  /** 关键词长得像域名时给直取兜底。 */
  const domainHit = useMemo(
    () => (q && brandHits && brandHits.length === 0 ? normalizeDomainInput(query) : null),
    [q, brandHits, query],
  );

  /* 在线搜索：立即执行版（回车 / 点放大镜 / 防抖共用同一实现）。
     ★必须走统一网络层 get()（v1.0.14）：此前用裸 fetch，App WebView(https 源)
     跨域请求被 CORS 拦截 → catch → 永远空结果（用户实测「搜索结果空白」）。
     CapacitorHttp 原生层发请求不受同源策略限制。 */
  const runOnlineSearch = (kwRaw: string): void => {
    const kw = kwRaw.trim();
    setOnlineHits(null);
    setImgHits(null);
    if (kw.length < 2) {
      setOnlineBusy(false);
      return;
    }
    setOnlineBusy(true);
    if (tab === 'img') {
      /* 网络图片 tab：只搜商品图 */
      get<{ ok?: boolean; items?: OnlineHit[] }>({ url: base }, '/api/img/search', { q: kw }, 10000)
        .then((res) => {
          const items = res.data?.ok && Array.isArray(res.data.items) ? res.data.items : [];
          setImgHits(items);
          const urls = items
            .map((h) => (h.thumb ? absIconUrl(h.thumb, base) : ''))
            .filter(Boolean);
          if (urls.length > 0) void warmIconCache(urls, base);
        })
        .catch(() => setImgHits([]))
        .finally(() => setOnlineBusy(false));
      return;
    }
    /* ① 图形图标 + 站点域名（原有接口） */
    get<{ ok?: boolean; items?: OnlineHit[] }>({ url: base }, '/api/icon/search', { q: kw }, 8000)
      .then((res) => {
        const items = res.data?.ok && Array.isArray(res.data.items) ? res.data.items : [];
        setOnlineHits(items);
        /* ★搜索到的图标全量后台预热进本地缓存（v1.0.15 用户约定）：
           本次没选的图标也先缓存，之后选用/恢复备份都离线秒显。 */
        const urls = items
          .map((h) =>
            h.type === 'icon' && h.url
              ? absIconUrl(h.url, base)
              : h.domain
                ? iconApiUrl(base, h.domain)
                : '',
          )
          .filter(Boolean);
        if (urls.length > 0) void warmIconCache(urls, base);
      })
      .catch(() => setOnlineHits([]));
  };

  /** 点选商品图片：原生通道抓原图 → 中心方裁 ≤512 → 存 img: dataURL（随备份走，永不失效）。 */
  const pickProductImage = async (raw: string): Promise<void> => {
    const abs = absIconUrl(imgProxyUrl(raw), base);
    try {
      const data = await fetchIconAsDataUrl(abs);
      if (!data) {
        toastError('图片抓取失败，换一张试试');
        return;
      }
      const square = await cropSquareDataUrl(data, 512);
      void haptic('select');
      onChange(toImgIcon(square));
      void warmIconCache([abs], base);
    } catch {
      toastError('图片处理失败，换一张试试');
    }
  };

  /** 点选图标：写值 + 立即预热入库（设置过一次，终身离线可用）。 */
  const pickIcon = (iconValue: string, warmSrc?: string): void => {
    void haptic('select');
    onChange(iconValue);
    if (warmSrc) void warmIconCache([warmSrc], base);
  };

  /* 防抖 300ms 自动检索；query 的来源见下方「事件 + 轮询」双保险。
     回车/放大镜/compositionend/search 仍绕过防抖立即搜。 */
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

  /* 搜索触发（v1.0.13 最终方案）：事件 + 轮询双保险。
     实测（用户设备两轮录屏实锤）：部分安卓 WebView + 搜狗输入法，IME 上屏
     文本时【不向页面派发任何 input/composition 事件】——React 合成与原生
     addEventListener 都收不到，只有删除字符才有事件；文本明明进了 DOM。
     事件链在这类设备上理论走不通，所以再加 150ms 轮询直接读输入框 DOM 真值：
     不管输入法用什么方式写文本，字进了框就必然被发现。 */
  useEffect(() => {
    const el = searchRef.current;
    if (!el) return;
    /** 末次已知值：事件与轮询共用同一基准，去重避免重复 setState。 */
    let last = el.value;
    const sync = (): void => {
      if (el.value === last) return;
      last = el.value;
      setQuery(el.value);
    };
    const fire = (): void => runOnlineSearch(el.value);
    const onKeyUp = (e: KeyboardEvent): void => {
      if ((e.key === 'Enter' || e.keyCode === 13) && !e.isComposing && e.keyCode !== 229) {
        e.preventDefault();
        fire();
      }
    };
    const onCompoEnd = (): void => {
      sync();
      fire();
    };
    el.addEventListener('input', sync);
    el.addEventListener('compositionupdate', sync);
    el.addEventListener('compositionend', onCompoEnd);
    el.addEventListener('keyup', onKeyUp);
    el.addEventListener('search', fire);
    /** 轮询兜底：每 150ms 对比一次 DOM 真值（打字无事件的设备靠这条活）。 */
    const iv = window.setInterval(sync, 150);
    return () => {
      window.clearInterval(iv);
      el.removeEventListener('input', sync);
      el.removeEventListener('compositionupdate', sync);
      el.removeEventListener('compositionend', onCompoEnd);
      el.removeEventListener('keyup', onKeyUp);
      el.removeEventListener('search', fire);
    };
    /* deps 带 tab：切到「本地上传」输入框会卸载，切回来要重新挂监听+轮询 */
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
  const searching = q !== '' && (tab === 'lib' || tab === 'web');
  const imgSearching = q !== '' && tab === 'img';
  const iconHits = useMemo(
    () => (onlineHits ?? []).filter((h) => h.type === 'icon' && h.url),
    [onlineHits],
  );
  const siteHits = useMemo(
    () => (onlineHits ?? []).filter((h) => h.domain),
    [onlineHits],
  );
  const onlineEmpty =
    !onlineBusy && onlineHits !== null && iconHits.length === 0 && siteHits.length === 0;
  const localEmpty = libGroups.length === 0 && (!brandHits || brandHits.length === 0) && !domainHit;
  const allEmpty = searching && localEmpty && (q.length < 2 || onlineEmpty);

  /** 浏览态（未搜索）时当前 tab 的内容。 */
  const browseView =
    tab === 'lib' ? (
      <>
        {systemMode && !q ? (
          /* 分类快捷 chips（对齐竞品）：点击滚动到对应分类 */
          <div className="sticky top-0 z-10 -mx-1 flex gap-1.5 overflow-x-auto bg-surface px-1 py-1">
            {SYSTEM_ICON_GROUPS.map((g) => (
              <button
                key={g.key}
                type="button"
                onClick={() => document.getElementById(`sysgrp-${g.key}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                className="shrink-0 rounded-full border border-line bg-surface-2 px-2.5 py-1 text-[11px] text-ink-2 active:scale-95"
              >
                {g.label}
                <span className="ml-0.5 text-ink-3/70">{g.items.length}</span>
              </button>
            ))}
          </div>
        ) : null}
        {libGroups.map((group) => {
          const gkey = systemMode ? (SYSTEM_ICON_GROUPS.find((g) => g.label === group.label)?.key ?? '') : '';
          return (
            <div key={group.label} id={gkey ? `sysgrp-${gkey}` : undefined}>
              <SectionLabel>
                {group.label}
                {systemMode ? <span className="ml-1 text-ink-3/70">({group.items.length})</span> : null}
              </SectionLabel>
              <div className="grid grid-cols-8 gap-2">
                {group.items.map(({ id }) => {
                  const Icon = subIconOf(id);
                  return (
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
                  );
                })}
              </div>
            </div>
          );
        })}
      </>
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
                onPick={() => pickIcon(toUrlIcon(iconApiUrl(base, b.domain)), iconApiUrl(base, b.domain))}
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
        {tabsOf(systemMode).map(({ key, label, Icon }) => (
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
            : tab === 'img'
              ? '搜商品名称或型号，出真实商品图'
              : tab === 'web'
                ? searching
                  ? '品牌 + 在线图标，一次搜齐'
                  : '内置品牌库，点击即采用'
                : searching
                  ? '按图标名过滤全部分类'
                  : '按分类浏览 · 点击即选中'}
        </span>
      </div>

      {tab === 'img' ? (
        /* —— v1.0.17 网络图片：商品图专用搜索（大图九宫格） —— */
        <div className="max-h-80 space-y-3 overflow-y-auto">
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
              placeholder="如：iPhone 17、一加15、佳能 R6、戴森吸尘器…"
              className="min-w-0 flex-1 bg-transparent text-xs outline-none placeholder:text-ink-3"
            />
          </div>
          {imgSearching ? (
            onlineBusy ? (
              <p className="py-6 text-center text-xs text-ink-3">正在检索商品图…</p>
            ) : imgHits && imgHits.length > 0 ? (
              <>
                <div className="grid grid-cols-3 gap-2">
                  {imgHits.map((h) =>
                    h.url ? (
                      <button
                        key={h.url}
                        type="button"
                        onClick={() => void pickProductImage(h.url!)}
                        title="采用此商品图"
                        aria-label="采用此商品图"
                        className="aspect-square overflow-hidden rounded-xl border border-line bg-surface-2 transition-all active:scale-95"
                      >
                        <ProductImg raw={h.url} thumb={h.thumb} />
                      </button>
                    ) : null,
                  )}
                </div>
                <p className="text-[10px] text-ink-3">点选自动裁正方形存入本地 · 随备份携带 · 永久离线可用</p>
              </>
            ) : (
              <p className="rounded-card border border-dashed border-line bg-surface-2 p-4 text-center text-xs text-ink-3">
                没有找到「{query}」的商品图，换个说法（品牌 + 型号）试试
              </p>
            )
          ) : (
            <div className="flex flex-col items-center gap-2 rounded-card border border-dashed border-line bg-surface-2 px-4 py-8 text-center">
              <ImageIcon size={24} className="text-ink-3/60" />
              <p className="text-xs text-ink-3">搜「手机型号 / 相机 / 家电」等，直接出真实商品缩略图</p>
            </div>
          )}
        </div>
      ) : tab === 'upload' ? (
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
              placeholder={systemMode ? '搜系统图标 / 品牌 / 在线…' : '搜图标：耳机、水杯、微信、任一英文词…'}
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
                          {group.items.map(({ id }) => {
                            const Icon = subIconOf(id);
                            return (
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
                            );
                          })}
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
                        onPick={() => pickIcon(toUrlIcon(iconApiUrl(base, b.domain)), iconApiUrl(base, b.domain))}
                      />
                    ))}
                  </div>
                </div>
              ) : domainHit ? (
                <div>
                  <SectionLabel>域名直取</SectionLabel>
                  <button
                    type="button"
                    onClick={() => pickIcon(toUrlIcon(iconApiUrl(base, domainHit)), iconApiUrl(base, domainHit))}
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
                      {iconHits.map((h) => {
                        const abs = absIconUrl(h.url, base);
                        return (
                          <button
                            key={h.icon}
                            type="button"
                            onClick={() => pickIcon(`url:${abs}`, abs)}
                            title={h.icon}
                            aria-label={h.icon}
                            className={`flex h-10 items-center justify-center rounded-btn border bg-surface p-1.5 transition-all active:scale-95 ${
                              value === `url:${abs}` ? 'border-accent bg-accent-soft' : 'border-line'
                            }`}
                          >
                            <HitImg abs={abs} alt={h.icon} />
                          </button>
                        );
                      })}
                        </div>
                      ) : null}

                      {/* 站点图标（favicon：订阅/品牌官网） */}
                      {siteHits.length > 0 ? (
                        <ul className="divide-y divide-line-2 overflow-hidden rounded-card border border-line bg-surface">
                          {siteHits.map((h) => (
                            <li key={h.domain}>
                              <button
                                type="button"
                                onClick={() => pickIcon(toUrlIcon(iconApiUrl(base, h.domain!)), iconApiUrl(base, h.domain!))}
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
                  没有找到「{query}」，换个说法试试，或切「网络图片 / 相册上传」
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


/* ============================================================================
 * 图片来源选择页（v1.0.17）：对齐竞品「归否」的五来源 action sheet。
 * 点物品/订阅的图标位 → 先选来源 → 再进对应选择视图。
 * ==========================================================================*/
export type IconSource = 'system' | 'brand' | 'net' | 'album' | 'camera';

const SOURCE_OPTIONS: Array<{ key: IconSource; label: string; desc: string }> = [
  { key: 'system', label: '系统图标', desc: '14 分类 · 单色线性 · 离线可用' },
  { key: 'brand', label: '品牌图片', desc: '常见品牌官网图标' },
  { key: 'net', label: '网络图片', desc: '搜商品名称/型号出真实商品图' },
  { key: 'album', label: '相册图片', desc: '从手机相册选一张' },
  { key: 'camera', label: '拍照', desc: '现场拍一张' },
];

export function ImageSourceSheet({
  open,
  onClose,
  onPick,
}: {
  open: boolean;
  onClose: () => void;
  onPick: (s: IconSource) => void;
}) {
  useBackGuard(open, onClose);
  if (!open) return null;
  return createPortal(
    <div className="fixed inset-0 z-50 flex items-end bg-black/40" onClick={onClose}>
      <div
        className="sheet-enter mx-auto w-full max-w-md rounded-t-3xl bg-surface p-2 pb-[max(env(safe-area-inset-bottom),0.5rem)]"
        onClick={(e) => e.stopPropagation()}
      >
        {SOURCE_OPTIONS.map((o) => (
          <button
            key={o.key}
            type="button"
            onClick={() => {
              void haptic('select');
              onPick(o.key);
            }}
            className="flex w-full flex-col items-center gap-0.5 border-b border-line py-3.5 last:border-b-0 active:bg-surface-2"
          >
            <span className="text-base font-medium text-ink">{o.label}</span>
            <span className="text-[11px] text-ink-3">{o.desc}</span>
          </button>
        ))}
        <button
          type="button"
          onClick={onClose}
          className="mt-2 w-full rounded-2xl bg-surface-2 py-3.5 text-base font-semibold text-ink active:scale-[0.99]"
        >
          取消
        </button>
      </div>
    </div>,
    document.body,
  );
}
