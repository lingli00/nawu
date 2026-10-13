import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Share2 } from 'lucide-react';
import { useDataStore, useSettingsStore, toastSuccess, toastError } from '../store';
import { IconPreview } from '../components/IconPicker';
import { formatMoney } from '../lib/money';
import { goodsIconValue, shareOrDownload, drawGoodsCard } from '../lib/shareCard';
import type { Goods } from '../types/entities';

/**
 * 置物墙（v1.0.10）：在役物品的展示墙——纯展示页，可从「我的」进入，
 * 桌面端多列大卡、移动端三列。物品卡可单独生成分享海报。
 */

function holdDays(g: Goods): number {
  return Math.max(0, Math.floor((Date.now() - new Date(g.buyDate).getTime()) / 86400000));
}

function WallCard({
  g,
  categoryName,
  symbol,
  onShare,
}: {
  g: Goods;
  categoryName: string | null;
  symbol: string;
  onShare: (g: Goods) => void;
}): JSX.Element {
  return (
    <div className="page-enter overflow-hidden rounded-card border border-line bg-surface">
      <div className="flex aspect-square items-center justify-center bg-surface-2 p-4">
        <IconPreview icon={goodsIconValue(g)} size={72} className="text-ink-2" />
      </div>
      <div className="p-3">
        <p className="truncate text-sm font-semibold">{g.name}</p>
        <p className="tnum mt-0.5 text-xs text-ink-3">
          {symbol}
          {Number(g.price ?? 0).toLocaleString('zh-CN', { maximumFractionDigits: 2 })} · 陪伴 {holdDays(g)} 天
        </p>
        {categoryName ? <p className="mt-1 text-[11px] text-accent">{categoryName}</p> : null}
        <button
          onClick={() => onShare(g)}
          aria-label={`分享 ${g.name}`}
          className="mt-2 flex h-8 w-full items-center justify-center gap-1.5 rounded-btn border border-line text-xs text-ink-2 active:bg-surface-2"
        >
          <Share2 size={13} strokeWidth={1.8} aria-hidden />
          分享卡片
        </button>
      </div>
    </div>
  );
}

export default function WallPage(): JSX.Element {
  const nav = useNavigate();
  const goods = useDataStore((s) => s.goods);
  const categories = useDataStore((s) => s.categories);
  const currency = useSettingsStore((s) => s.settings.currency);
  const symbol = currency === 'CNY' ? '¥' : currency === 'USD' ? '$' : '¥';

  const active = useMemo(() => goods.filter((g) => g.status !== 'retired'), [goods]);
  const catNameOf = (id: string): string | null => categories.find((c) => c.id === id)?.name ?? null;

  const share = async (g: Goods): Promise<void> => {
    try {
      const dataUrl = await drawGoodsCard(g, catNameOf(g.categoryId));
      const how = await shareOrDownload(dataUrl, `纳物-${g.name}.png`);
      if (how === 'downloaded') toastSuccess('海报已下载');
    } catch (e) {
      toastError(e instanceof Error ? e.message : '生成海报失败');
    }
  };

  return (
    <div className="page-enter min-h-full text-ink">
      <header className="flex w-full items-end justify-between pb-1 pt-2">
        <div className="min-w-0">
          <h1 className="text-3xl font-bold leading-9">置物墙</h1>
          <p className="truncate text-xs text-ink-3">
            {active.length} 件在役 · 总投入{' '}
            {formatMoney(
              active.reduce((acc, g) => acc + Number(g.price ?? 0), 0),
              currency,
            )}
          </p>
        </div>
        <button
          onClick={() => nav('/home')}
          className="h-9 rounded-full border border-line bg-surface px-4 text-xs text-ink-2 active:bg-surface-2"
        >
          去添置
        </button>
      </header>

      {active.length === 0 ? (
        <div className="mt-3 rounded-card border border-dashed border-line bg-surface p-10 text-center text-sm text-ink-3">
          墙上还空着，先去首页入库第一件物品
        </div>
      ) : (
        <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {active.map((g) => (
            <WallCard key={g.id} g={g} categoryName={catNameOf(g.categoryId)} symbol={symbol} onShare={(x) => void share(x)} />
          ))}
        </div>
      )}
    </div>
  );
}
