import type { Goods } from '../types/entities';
import { Capacitor } from '@capacitor/core';
import { currentServer } from '../store';
import { iconCacheLookup } from './iconCache';
import logger from './log';

/**
 * 分享生图（v1.0.10）：把物品画成 900×1200 的竖版分享海报（纯 canvas，无依赖）。
 *
 * - icon 三形态兼容：img: dataURL 直接画；url: 相对路径补当前站点 origin；
 *   裸 lucide id / 无法加载 → 圆底 + 名称首字兜底；
 * - 返回 PNG dataURL，由调用方决定 navigator.share 或下载。
 */

/** 米白底 / 深绿主色（与全局 --paper/--accent 同源）。 */
const C = { paper: '#f5f3ee', accent: '#2e6e5a', accentSoft: '#e3ede8', ink: '#26302c', ink3: '#8a938f', line: '#e4e2da' };

/** 分享海报写入的系统相册名（App 端）。 */
const ALBUM_NAME = '纳物';

function loadImage(src: string, timeoutMs = 6000): Promise<HTMLImageElement | null> {
  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    const timer = setTimeout(() => resolve(null), timeoutMs);
    img.onload = () => {
      clearTimeout(timer);
      resolve(img);
    };
    img.onerror = () => {
      clearTimeout(timer);
      resolve(null);
    };
    img.src = src;
  });
}

/** Goods.image（{source, ref} 对象）→ 三形态 icon 字符串（img:/url:/空）。 */
export function goodsIconValue(g: Pick<Goods, 'image'>): string {
  const img = g.image;
  const ref = (img?.ref ?? '').trim();
  if (!ref) return '';
  if (img?.source === 'local' || ref.startsWith('data:')) return `img:${ref}`;
  if (img?.source === 'web' || /^https?:\/\//i.test(ref)) return `url:${ref}`;
  return '';
}

/** 物品 icon 值 → 可绘制的 src（不可绘返回 null）。 */
function iconSrcOf(icon: string | undefined): string | null {
  const v = (icon ?? '').trim();
  if (!v) return null;
  if (v.startsWith('img:')) return v.slice(4).trim();
  if (v.startsWith('url:')) {
    let u = v.slice(4).trim();
    if (!/^https?:\/\//i.test(u)) {
      // 相对路径补 origin：优先真实服务器（App 内 window.origin 是 https://localhost，拼上去必然 404）
      const origin = currentServer()?.url || (typeof window !== 'undefined' ? window.location.origin : '') || '';
      if (!origin) return null;
      u = `${origin}${u.startsWith('/') ? '' : '/'}${u}`;
    }
    // Iconify 直链在部分手机网络不可达 → 换自建代理（服务器有 CORS 头，canvas 不脏）
    if (u.includes('api.iconify.design')) {
      const base = currentServer()?.url ?? (typeof window !== 'undefined' ? window.location.origin : '');
      if (base) u = `${base}/api/icon/proxy?u=${encodeURIComponent(u)}`;
    }
    return u;
  }
  return null; // 裸 lucide id：canvas 无法画矢量，走首字兜底
}

/** canvas 用的图标 src：本地缓存 dataURL 优先（v1.0.15），
 *  未命中才回落 URL（dataURL 画 canvas 不存在跨域污染，WebView 加载 http 图
 *  慢/不稳的问题也一并绕开）。 */
async function resolveIconSrc(icon: string | undefined): Promise<string | null> {
  const urlSrc = iconSrcOf(icon);
  if (!urlSrc) return null;
  if (urlSrc.startsWith('data:')) return urlSrc;
  const cached = await iconCacheLookup([urlSrc]);
  return cached ?? urlSrc;
}

function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number): void {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

export async function drawGoodsCard(g: Goods, categoryName: string | null): Promise<string> {
  const W = 900;
  const H = 1200;
  const cv = document.createElement('canvas');
  cv.width = W;
  cv.height = H;
  const ctx = cv.getContext('2d');
  if (!ctx) throw new Error('画布不可用');

  // 底 + 顶部品牌条
  ctx.fillStyle = C.paper;
  ctx.fillRect(0, 0, W, H);
  ctx.fillStyle = C.accent;
  ctx.fillRect(0, 0, W, 12);
  ctx.fillStyle = C.ink;
  ctx.font = '700 44px system-ui, sans-serif';
  ctx.fillText('纳物', 64, 108);
  ctx.fillStyle = C.ink3;
  ctx.font = '400 26px system-ui, sans-serif';
  ctx.fillText('NaWu · 值得的花销，值得记录', 64, 150);

  // 图区卡（460 高圆角卡：图片或首字兜底）
  const cardX = 64;
  const cardY = 210;
  const cardW = W - 128;
  const cardH = 460;
  ctx.fillStyle = '#ffffff';
  roundRect(ctx, cardX, cardY, cardW, cardH, 32);
  ctx.fill();
  ctx.strokeStyle = C.line;
  ctx.lineWidth = 2;
  roundRect(ctx, cardX, cardY, cardW, cardH, 32);
  ctx.stroke();

  const src = await resolveIconSrc(goodsIconValue(g));
  let drawn = false;
  if (src) {
    const img = await loadImage(src);
    if (img) {
      // contain 绘制进内边距 48 的区域
      const pad = 56;
      const boxW = cardW - pad * 2;
      const boxH = cardH - pad * 2;
      const scale = Math.min(boxW / img.width, boxH / img.height);
      const dw = img.width * scale;
      const dh = img.height * scale;
      ctx.drawImage(img, cardX + (cardW - dw) / 2, cardY + (cardH - dh) / 2, dw, dh);
      drawn = true;
    }
  }
  if (!drawn) {
    ctx.fillStyle = C.accentSoft;
    ctx.beginPath();
    ctx.arc(cardX + cardW / 2, cardY + cardH / 2, 120, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = C.accent;
    ctx.font = '700 120px system-ui, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText((g.name || '物').charAt(0), cardX + cardW / 2, cardY + cardH / 2 + 6);
    ctx.textAlign = 'left';
    ctx.textBaseline = 'alphabetic';
  }

  // 名称 + 分类
  let y = cardY + cardH + 96;
  ctx.fillStyle = C.ink;
  ctx.font = '700 56px system-ui, sans-serif';
  const name = g.name || '未命名物品';
  ctx.fillText(name.length > 14 ? `${name.slice(0, 14)}…` : name, 64, y);
  if (categoryName) {
    ctx.fillStyle = C.accentSoft;
    roundRect(ctx, 64, y + 28, 40 + categoryName.length * 30, 56, 28);
    ctx.fill();
    ctx.fillStyle = C.accent;
    ctx.font = '500 28px system-ui, sans-serif';
    ctx.fillText(categoryName, 84, y + 66);
  }

  // 底部数据行
  const infoY = H - 150;
  ctx.fillStyle = C.ink3;
  ctx.font = '400 26px system-ui, sans-serif';
  const days = Math.max(0, Math.floor((Date.now() - new Date(g.buyDate).getTime()) / 86400000));
  const cells: Array<[string, string]> = [
    ['价格', `¥${Number(g.price ?? 0).toLocaleString('zh-CN', { maximumFractionDigits: 2 })}`],
    ['陪伴', `${days} 天`],
    ['状态', g.status === 'retired' ? '已退役' : '在役'],
  ];
  const colW = (W - 128) / 3;
  cells.forEach(([label, val], i) => {
    const x = 64 + i * colW;
    ctx.fillStyle = C.ink3;
    ctx.font = '400 26px system-ui, sans-serif';
    ctx.fillText(label, x, infoY);
    ctx.fillStyle = C.ink;
    ctx.font = '700 40px system-ui, sans-serif';
    ctx.fillText(val, x, infoY + 58);
  });

  return cv.toDataURL('image/png');
}

/** contain 绘制图片进矩形区；失败画首字圆底兜底。返回是否画了真图。 */
async function drawIconInto(
  ctx: CanvasRenderingContext2D,
  g: Goods,
  x: number,
  y: number,
  w: number,
  h: number,
  r = 0,
): Promise<boolean> {
  const src = await resolveIconSrc(goodsIconValue(g));
  if (src) {
    const img = await loadImage(src);
    if (img) {
      const scale = Math.min(w / img.width, h / img.height);
      const dw = img.width * scale;
      const dh = img.height * scale;
      if (r > 0) {
        ctx.save();
        roundRect(ctx, x, y, w, h, r);
        ctx.clip();
      }
      ctx.drawImage(img, x + (w - dw) / 2, y + (h - dh) / 2, dw, dh);
      if (r > 0) ctx.restore();
      return true;
    }
  }
  // 首字圆底兜底
  ctx.fillStyle = C.accentSoft;
  ctx.beginPath();
  ctx.arc(x + w / 2, y + h / 2, Math.min(w, h) * 0.26, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = C.accent;
  ctx.font = `700 ${Math.round(Math.min(w, h) * 0.26)}px system-ui, sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText((g.name || '物').charAt(0), x + w / 2, y + h / 2 + 4);
  ctx.textAlign = 'left';
  ctx.textBaseline = 'alphabetic';
  return false;
}

/**
 * 置物墙整墙海报（v1.0.11）：所有在役物品一张图导出。
 * 900 宽三列网格，高度随物品数自适应；单卡 = 图区 + 名称 + 价格。
 */
export async function drawWallSheet(items: Array<{ g: Goods; categoryName: string | null }>): Promise<string> {
  const W = 900;
  const COLS = 3;
  const GAP = 20;
  const PAD = 48;
  const colW = (W - PAD * 2 - GAP * (COLS - 1)) / COLS;
  const imgH = Math.round(colW * 0.72);
  const cardH = imgH + 96;
  const rows = Math.max(1, Math.ceil(items.length / COLS));
  const headH = 216;
  const footH = 92;
  const H = headH + rows * (cardH + GAP) - GAP + footH;

  const cv = document.createElement('canvas');
  cv.width = W;
  cv.height = H;
  const ctx = cv.getContext('2d');
  if (!ctx) throw new Error('画布不可用');

  // 底 + 品牌条
  ctx.fillStyle = C.paper;
  ctx.fillRect(0, 0, W, H);
  ctx.fillStyle = C.accent;
  ctx.fillRect(0, 0, W, 12);

  // 头部
  ctx.fillStyle = C.ink;
  ctx.font = '700 52px system-ui, sans-serif';
  ctx.fillText('纳物 · 置物墙', PAD, 116);
  const total = items.reduce((acc, it) => acc + Number(it.g.price ?? 0), 0);
  ctx.fillStyle = C.ink3;
  ctx.font = '400 26px system-ui, sans-serif';
  ctx.fillText(
    `${items.length} 件在役 · 总投入 ¥${total.toLocaleString('zh-CN', { maximumFractionDigits: 0 })}`,
    PAD,
    160,
  );
  ctx.font = '400 22px system-ui, sans-serif';
  ctx.fillText('NaWu · 值得的花销，值得记录', PAD, 196);

  // 卡片网格
  for (let i = 0; i < items.length; i += 1) {
    const cx = PAD + (i % COLS) * (colW + GAP);
    const cy = headH + Math.floor(i / COLS) * (cardH + GAP);
    ctx.fillStyle = '#ffffff';
    roundRect(ctx, cx, cy, colW, cardH, 24);
    ctx.fill();
    ctx.strokeStyle = C.line;
    ctx.lineWidth = 2;
    roundRect(ctx, cx, cy, colW, cardH, 24);
    ctx.stroke();

    await drawIconInto(ctx, items[i].g, cx + 14, cy + 14, colW - 28, imgH, 16);

    const name = items[i].g.name || '未命名';
    ctx.fillStyle = C.ink;
    ctx.font = '600 24px system-ui, sans-serif';
    ctx.fillText(name.length > 8 ? `${name.slice(0, 8)}…` : name, cx + 14, cy + imgH + 42);
    ctx.fillStyle = C.ink3;
    ctx.font = '400 20px system-ui, sans-serif';
    ctx.fillText(
      `¥${Number(items[i].g.price ?? 0).toLocaleString('zh-CN', { maximumFractionDigits: 0 })}`,
      cx + 14,
      cy + imgH + 74,
    );
  }

  // 页脚
  ctx.fillStyle = C.ink3;
  ctx.font = '400 20px system-ui, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText(`由「纳物」生成 · ${new Date().toLocaleDateString('zh-CN')}`, W / 2, H - 30);
  ctx.textAlign = 'left';

  return cv.toDataURL('image/png');
}

/** 保存/分享策略（v1.0.16 重写）：
 *  原生 App → 直接写入系统相册「纳物」相册（MediaStore，无需任何存储权限）；
 *  网页端 → navigator.share 优先，失败回退 <a download>。
 *  ★旧实现 `<a download>` 在 App WebView 里既不弹下载也不进相册——
 *  用户看到「已保存」但相册永远是空的，本版根治。 */
export async function shareOrDownload(
  dataUrl: string,
  fileName: string,
): Promise<'shared' | 'saved' | 'downloaded'> {
  if (Capacitor.isNativePlatform()) {
    try {
      const { Media } = await import('@capacitor-community/media');
      // 找「纳物」相册（App 关联相册，无需权限）；没有就建
      let albumId = '';
      try {
        const { albums } = await Media.getAlbums();
        albumId = albums.find((a) => a.name === ALBUM_NAME)?.identifier ?? '';
      } catch {
        /* ignore */
      }
      if (!albumId) {
        await Media.createAlbum({ name: ALBUM_NAME });
        const { albums } = await Media.getAlbums();
        albumId = albums.find((a) => a.name === ALBUM_NAME)?.identifier ?? '';
      }
      const base = fileName.replace(/\.png$/i, '');
      await Media.savePhoto({ path: dataUrl, albumIdentifier: albumId || undefined, fileName: base });
      return 'saved';
    } catch (e) {
      logger.warn('savePhoto failed, fallback to share/download', e);
      // 落相册失败 → 退回系统分享，再不行才下载
    }
  }
  try {
    const blob = await (await fetch(dataUrl)).blob();
    const file = new File([blob], fileName, { type: 'image/png' });
    const nav = navigator as Navigator & { canShare?: (d: { files: File[] }) => boolean; share?: (d: { files: File[] }) => Promise<void> };
    if (nav.canShare?.({ files: [file] }) && nav.share) {
      await nav.share({ files: [file] });
      return 'shared';
    }
  } catch {
    /* 用户取消或不可用 → 下载 */
  }
  const a = document.createElement('a');
  a.href = dataUrl;
  a.download = fileName;
  a.click();
  return 'downloaded';
}
