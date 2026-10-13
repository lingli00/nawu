import type { Goods } from '../types/entities';

/**
 * 分享生图（v1.0.10）：把物品画成 900×1200 的竖版分享海报（纯 canvas，无依赖）。
 *
 * - icon 三形态兼容：img: dataURL 直接画；url: 相对路径补当前站点 origin；
 *   裸 lucide id / 无法加载 → 圆底 + 名称首字兜底；
 * - 返回 PNG dataURL，由调用方决定 navigator.share 或下载。
 */

/** 米白底 / 深绿主色（与全局 --paper/--accent 同源）。 */
const C = { paper: '#f5f3ee', accent: '#2e6e5a', accentSoft: '#e3ede8', ink: '#26302c', ink3: '#8a938f', line: '#e4e2da' };

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
    const u = v.slice(4).trim();
    if (/^https?:\/\//i.test(u)) return u;
    try {
      const origin = (typeof window !== 'undefined' ? window.location.origin : '') || '';
      return origin ? `${origin}${u.startsWith('/') ? '' : '/'}${u}` : null;
    } catch {
      return null;
    }
  }
  return null; // 裸 lucide id：canvas 无法画矢量，走首字兜底
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

  const src = iconSrcOf(goodsIconValue(g));
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

/** 优先系统分享，失败回退下载。 */
export async function shareOrDownload(dataUrl: string, fileName: string): Promise<'shared' | 'downloaded'> {
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
