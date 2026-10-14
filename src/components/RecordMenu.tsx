import { createPortal } from 'react-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Compass,
  CreditCard,
  Heart,
  Hourglass,
  NotebookPen,
  PenLine,
  Snowflake,
  Sparkles,
  Sprout,
} from 'lucide-react';
import { useBackGuard } from '../lib/backGuard';
import { haptic } from '../lib/haptics';
import { useMediaQuery } from '../lib/useMediaQuery';
import { emitSheetOpen, type SheetKey } from '../lib/sheetBus';

/**
 * 加号动作菜单（v1.0.22 起 · 文案与视觉全部自有语言）。
 *
 * 结构：2×2 记录卡（AI 记一笔 / 价值记账 / 手动录入 / 新增订阅）
 *      + 2×2 生活流入口（购物冷静 / 心动清单 / 时间切片 / 情绪速写）+ 取消。
 *
 * ★ v1.0.24 修复「新增订阅第一次点击没反应，反复点才能进」：
 * 旧实现在 onClick 里同步 emitSheetOpen —— 而同一轮批处理中 RecordMenu 卸载，
 * backGuard 的 cleanup 执行 history.back() 撤占位历史，其 popstate 与 emit
 * 的 setState 交错，首次开层被吞。现在同路由 emit 推迟一个宏任务
 * （back()/popstate 先落地），且 emit 无订阅者时自动退回「标志 + 导航」自愈。
 *
 * PC 适配：≥1024px 居中对话框（pop-enter），移动端底部 sheet（sheet-enter）。
 */

const TINT = {
  ai: '#3f8f6a', // 墨绿（品牌主色）
  ledger: '#4a7fb5', // 需蓝
  manual: '#8B5CF6', // 紫
  sub: '#c98a2d', // 琥珀
  cool: '#2e9e8a', // 青瓷
  wish: '#c98a2d', // 琥珀
  time: 'var(--accent)', // 墨绿（与时间拨盘同色系）
  mood: '#c2603f', // 陶土
};

/** 生活流/记录弹层的路由归属：同路由发信号，跨路由走标志 + 导航。 */
const SHEET_ROUTE: Record<SheetKey, { route: string; flag: string }> = {
  goods: { route: '/home', flag: 'gf.open.goods' },
  sub: { route: '/home', flag: 'gf.open.sub' },
  wish: { route: '/ledger', flag: 'gf.open.wish' },
  cooldown: { route: '/ledger', flag: 'gf.open.cooldown' },
  mood: { route: '/ledger', flag: 'gf.open.mood' },
  time: { route: '/ledger', flag: 'gf.open.time' },
};

function setFlag(key: string): void {
  try {
    sessionStorage.setItem(key, '1');
  } catch {
    /* 忽略 */
  }
}

function clearFlag(key: string): void {
  try {
    sessionStorage.removeItem(key);
  } catch {
    /* 忽略 */
  }
}

export default function RecordMenu({ onClose }: { onClose: () => void }) {
  const nav = useNavigate();
  const { pathname } = useLocation();
  const wide = useMediaQuery('(min-width: 1024px)');
  useBackGuard(true, onClose);

  const go = (fn: () => void): void => {
    void haptic('select');
    onClose();
    fn();
  };

  /**
   * 同路由发信号即时开层；跨路由写标志 + 导航（目标页挂载消费）。
   * 同路由的 emit 推迟一个宏任务：关菜单时 backGuard 的 history.back()
   * 派发的 popstate 与 emit 的 setState 同帧交错会吞掉首次开层
   * （v1.0.24 修复「第一次点击没反应」）。
   */
  const openSheet = (key: SheetKey): void => {
    const { route, flag } = SHEET_ROUTE[key];
    if (pathname === route) {
      clearFlag(flag);
      setTimeout(() => {
        if (emitSheetOpen(key)) return;
        // 无订阅者（目标页未挂载）：退回「标志 + 导航」自愈
        setFlag(flag);
        nav(route);
      }, 0);
    } else {
      setFlag(flag);
      nav(route);
    }
  };

  const cards: Array<{ label: string; sub: string; Icon: typeof Sparkles; tint: string; run: () => void }> = [
    { label: 'AI 记一笔', sub: '说一句话 / 贴图自动归档', Icon: Sparkles, tint: TINT.ai, run: () => nav('/ai') },
    { label: '价值记账', sub: '消费 / 归需否判断', Icon: NotebookPen, tint: TINT.ledger, run: () => nav('/record') },
    {
      label: '手动录入',
      sub: '搜索 / 填写',
      Icon: PenLine,
      tint: TINT.manual,
      run: () => openSheet('goods'),
    },
    {
      label: '新增订阅',
      sub: '周期 / 续费',
      Icon: CreditCard,
      tint: TINT.sub,
      run: () => openSheet('sub'),
    },
  ];

  const rows: Array<{ label: string; sub: string; Icon: typeof Compass; tint: string; key: SheetKey }> = [
    { label: '购物冷静', sub: '放入冷静池', Icon: Snowflake, tint: TINT.cool, key: 'cooldown' },
    { label: '心动清单', sub: '先记下，再斟酌', Icon: Sprout, tint: TINT.wish, key: 'wish' },
    { label: '时间切片', sub: '记录刚才做了啥', Icon: Hourglass, tint: TINT.time, key: 'time' },
    { label: '情绪速写', sub: '记录心灵灵感', Icon: Heart, tint: TINT.mood, key: 'mood' },
  ];

  const panel = (
    <>
      <p className="mb-3 flex items-center gap-2 text-base font-semibold">
        <span
          className="flex h-7 w-7 items-center justify-center rounded-lg"
          style={{ background: 'color-mix(in srgb, var(--accent) 16%, transparent)', color: 'var(--accent)' }}
        >
          <Compass size={15} strokeWidth={2} />
        </span>
        记一笔，归一类
      </p>

      {/* 2×2 记录卡 */}
      <div className="grid grid-cols-2 gap-2.5">
        {cards.map(({ label, sub, Icon, tint, run }) => (
          <button
            key={label}
            onClick={() => go(run)}
            className="rounded-card border border-line p-3.5 text-left transition-all active:scale-[0.98]"
            style={{ background: `color-mix(in srgb, ${tint} 8%, var(--surface))` }}
          >
            <span
              className="mb-2 flex h-9 w-9 items-center justify-center rounded-xl"
              style={{ background: `color-mix(in srgb, ${tint} 18%, transparent)`, color: tint }}
            >
              <Icon size={17} />
            </span>
            <p className="text-sm font-semibold">{label}</p>
            <p className="mt-0.5 truncate text-[11px] text-ink-3">{sub}</p>
          </button>
        ))}
      </div>

      <div className="my-3 border-t border-line-2" />

      {/* 生活流 2×2 入口（tint 小卡，非列表行） */}
      <div className="grid grid-cols-2 gap-2.5">
        {rows.map(({ label, sub, Icon, tint, key }) => (
          <button
            key={label}
            onClick={() => go(() => openSheet(key))}
            className="flex items-center gap-2.5 rounded-card border px-3 py-2.5 text-left transition-all active:scale-[0.98]"
            style={{
              borderColor: `color-mix(in srgb, ${tint} 28%, transparent)`,
              background: `color-mix(in srgb, ${tint} 10%, var(--surface))`,
            }}
          >
            <span
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl"
              style={{ background: `color-mix(in srgb, ${tint} 18%, transparent)`, color: tint }}
            >
              <Icon size={16} />
            </span>
            <span className="min-w-0">
              <span className="block truncate text-sm font-medium">{label}</span>
              <span className="block truncate text-[11px] text-ink-3">{sub}</span>
            </span>
          </button>
        ))}
      </div>

      <button
        onClick={onClose}
        className="mt-4 h-11 w-full rounded-btn border border-line bg-surface-2 text-sm font-medium text-ink-2 active:scale-[0.99]"
      >
        取消
      </button>
    </>
  );

  return createPortal(
    <div className="fixed inset-0 z-50 flex bg-black/40" onClick={onClose} style={wide ? { alignItems: 'center', justifyContent: 'center' } : { alignItems: 'flex-end' }}>
      <div
        className={
          wide
            ? 'pop-enter mx-auto max-h-[86vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-surface p-5'
            : 'sheet-enter mx-auto max-h-[86vh] w-full max-w-xl overflow-y-auto rounded-t-3xl bg-surface p-4 pb-[max(env(safe-area-inset-bottom),1rem)]'
        }
        onClick={(e) => e.stopPropagation()}
      >
        {panel}
      </div>
    </div>,
    document.body,
  );
}
