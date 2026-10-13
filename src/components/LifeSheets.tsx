import { useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPortal } from 'react-dom';
import { CalendarClock, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { useDataStore, toastSuccess, toastError } from '../store';
import { useBackGuard } from '../lib/backGuard';
import { haptic } from '../lib/haptics';
import { addDays, today } from '../lib/date';
import type { Cooldown, WishItem } from '../types/entities';

/**
 * 生活流「种草清单 / 购物冷静池」管理弹层（v1.0.20 · M2+M3.3 最小闭环）。
 *
 * - 种草清单（wishlist）：想买先记下，可「转冷静池」；
 * - 冷静池（cooldowns）：想买但先等等，倒计时到期后可「转为物品」（写预填 → 首页新增表单）。
 * 数据模型 v1.0 即已落库（wishlist / cooldowns 集合），本组件补齐 UI。
 */

/** 弹层骨架（底部 sheet，桌面端走全局右侧抽屉规则）。 */
function SheetFrame({
  title,
  onClose,
  children,
}: {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}) {
  useBackGuard(true, onClose);
  return createPortal(
    <div className="fixed inset-0 z-50 flex items-end bg-black/40" onClick={onClose}>
      <div
        className="sheet-enter mx-auto max-h-[86vh] w-full max-w-xl overflow-y-auto rounded-t-3xl bg-surface p-4 pb-[max(env(safe-area-inset-bottom),1rem)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-3 flex items-center justify-between">
          <p className="text-sm font-semibold">{title}</p>
          <button
            onClick={onClose}
            aria-label="关闭"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-surface-2 text-ink-2 active:scale-95"
          >
            ✕
          </button>
        </div>
        {children}
      </div>
    </div>,
    document.body,
  );
}

/** 冷静剩余天数文案（负数 = 已到期）。 */
export function cooldownLeftDays(until: string): number {
  const t = new Date(`${today()}T00:00:00`).getTime();
  const u = new Date(`${until}T00:00:00`).getTime();
  if (!Number.isFinite(u)) return 0;
  return Math.round((u - t) / 86400000);
}

/* ============================================================================
 * 种草清单
 * ==========================================================================*/
export function WishSheet({ onClose }: { onClose: () => void }) {
  const wishes = useDataStore((s) => s.wishlist);
  const addWish = useDataStore((s) => s.addWish);
  const removeById = useDataStore((s) => s.removeById);
  const addCooldown = useDataStore((s) => s.addCooldown);

  const nameRef = useRef<HTMLInputElement | null>(null);
  const noteRef = useRef<HTMLInputElement | null>(null);
  const [price, setPrice] = useState('');
  const [busy, setBusy] = useState(false);

  const total = useMemo(
    () => wishes.reduce((acc, w) => acc + (w.price || 0), 0),
    [wishes],
  );

  const add = async (): Promise<void> => {
    const name = (nameRef.current?.value ?? '').trim();
    if (!name) {
      toastError('先写下想买什么');
      return;
    }
    const p = Number(price);
    setBusy(true);
    try {
      await addWish({ name, price: Number.isFinite(p) && p > 0 ? p : undefined, note: (noteRef.current?.value ?? '').trim() || undefined });
      if (nameRef.current) nameRef.current.value = '';
      if (noteRef.current) noteRef.current.value = '';
      setPrice('');
      toastSuccess('已加入种草清单');
    } finally {
      setBusy(false);
    }
  };

  /** 转冷静池：默认冷静 7 天。 */
  const toCooldown = async (w: WishItem): Promise<void> => {
    void haptic('select');
    await addCooldown({ name: w.name, until: addDays(today(), 7) });
    await removeById('wishlist', w.id);
    toastSuccess(`「${w.name}」进入 7 天冷静期`);
  };

  return (
    <SheetFrame title={`种草清单 (${wishes.length})`} onClose={onClose}>
      {/* 添加行 */}
      <div className="mb-3 space-y-2 rounded-card border border-line bg-surface-2 p-3">
        <div className="flex gap-2">
          <input
            ref={nameRef}
            defaultValue=""
            placeholder="想买什么？"
            className="h-10 min-w-0 flex-1 rounded-btn border border-line bg-surface px-3 text-sm outline-none focus:border-accent"
          />
          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            inputMode="decimal"
            placeholder="¥ 价格"
            className="h-10 w-24 rounded-btn border border-line bg-surface px-3 text-sm outline-none focus:border-accent"
          />
        </div>
        <div className="flex gap-2">
          <input
            ref={noteRef}
            defaultValue=""
            placeholder="备注（可选）"
            className="h-10 min-w-0 flex-1 rounded-btn border border-line bg-surface px-3 text-sm outline-none focus:border-accent"
          />
          <button
            onClick={() => void add()}
            disabled={busy}
            className="flex h-10 shrink-0 items-center gap-1 rounded-btn bg-accent px-4 text-sm font-medium text-white active:opacity-90 disabled:opacity-40"
          >
            <Plus size={14} />
            种草
          </button>
        </div>
      </div>

      {wishes.length === 0 ? (
        <p className="rounded-card border border-dashed border-line bg-surface-2 p-8 text-center text-xs text-ink-3">
          清单空空的。想买什么先记下来，过几天再看看还想不想要。
        </p>
      ) : (
        <>
          <ul className="divide-y divide-line-2 overflow-hidden rounded-card border border-line bg-surface">
            {wishes.map((w) => (
              <li key={w.id} className="flex items-center gap-3 px-3.5 py-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <ShoppingBag size={16} />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm">{w.name}</p>
                  <p className="text-[11px] text-ink-3">
                    {w.price ? `¥${w.price}` : '未定价'}
                    {w.note ? ` · ${w.note}` : ''}
                  </p>
                </div>
                <button
                  onClick={() => void toCooldown(w)}
                  className="shrink-0 rounded-full border border-line bg-surface-2 px-2.5 py-1 text-[11px] text-ink-2 active:scale-95"
                >
                  转冷静池
                </button>
                <button
                  onClick={() => void removeById('wishlist', w.id)}
                  aria-label="删除"
                  className="shrink-0 text-ink-3 active:text-red-500"
                >
                  <Trash2 size={15} />
                </button>
              </li>
            ))}
          </ul>
          {total > 0 ? (
            <p className="mt-2 px-1 text-[11px] text-ink-3">
              合计 ¥{total.toLocaleString('zh-CN', { maximumFractionDigits: 2 })} —— 都是「想要」，不是「需要」
            </p>
          ) : null}
        </>
      )}
      <p className="mt-3 px-1 text-[11px] leading-4 text-ink-3/70">
        小贴士：种草的东西先放 7 天冷静期，到期还想要再买——冷静池里一键转成物品建档。
      </p>
    </SheetFrame>
  );
}

/* ============================================================================
 * 购物冷静池
 * ==========================================================================*/
const COOL_DAYS = [3, 7, 14, 30];

export function CooldownSheet({ onClose }: { onClose: () => void }) {
  const nav = useNavigate();
  const items = useDataStore((s) => s.cooldowns);
  const addCooldown = useDataStore((s) => s.addCooldown);
  const removeById = useDataStore((s) => s.removeById);

  const nameRef = useRef<HTMLInputElement | null>(null);
  const [days, setDays] = useState(7);
  const [busy, setBusy] = useState(false);

  const sorted = useMemo(() => [...items].sort((a, b) => a.until.localeCompare(b.until)), [items]);

  const add = async (): Promise<void> => {
    const name = (nameRef.current?.value ?? '').trim();
    if (!name) {
      toastError('先写下想买什么');
      return;
    }
    setBusy(true);
    try {
      await addCooldown({ name, until: addDays(today(), days) });
      if (nameRef.current) nameRef.current.value = '';
      toastSuccess(`已进入 ${days} 天冷静期`);
    } finally {
      setBusy(false);
    }
  };

  /** 到期转物品：写预填 → 首页自动开新增表单。 */
  const toGoods = (c: Cooldown): void => {
    void haptic('select');
    try {
      sessionStorage.setItem('gf.prefill.goods', JSON.stringify({ name: c.name }));
    } catch {
      /* 忽略 */
    }
    onClose();
    nav('/home');
  };

  return (
    <SheetFrame title={`购物冷静池 (${items.length})`} onClose={onClose}>
      {/* 添加行 */}
      <div className="mb-3 space-y-2 rounded-card border border-line bg-surface-2 p-3">
        <div className="flex gap-2">
          <input
            ref={nameRef}
            defaultValue=""
            placeholder="想买什么？先等等"
            className="h-10 min-w-0 flex-1 rounded-btn border border-line bg-surface px-3 text-sm outline-none focus:border-accent"
          />
          <button
            onClick={() => void add()}
            disabled={busy}
            className="flex h-10 shrink-0 items-center gap-1 rounded-btn bg-accent px-4 text-sm font-medium text-white active:opacity-90 disabled:opacity-40"
          >
            <Plus size={14} />
            开始冷静
          </button>
        </div>
        <div className="flex gap-1.5">
          {COOL_DAYS.map((d) => (
            <button
              key={d}
              onClick={() => setDays(d)}
              className={`h-8 flex-1 rounded-full border text-xs transition-all active:scale-95 ${
                days === d ? 'border-accent bg-accent-soft font-medium text-accent' : 'border-line bg-surface text-ink-3'
              }`}
            >
              {d} 天
            </button>
          ))}
        </div>
      </div>

      {sorted.length === 0 ? (
        <p className="rounded-card border border-dashed border-line bg-surface-2 p-8 text-center text-xs text-ink-3">
          冷静池是空的。冲动消费前先把东西放进来，倒计时结束还想要再买。
        </p>
      ) : (
        <ul className="divide-y divide-line-2 overflow-hidden rounded-card border border-line bg-surface">
          {sorted.map((c) => {
            const left = cooldownLeftDays(c.until);
            return (
              <li key={c.id} className="flex items-center gap-3 px-3.5 py-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-surface-2 text-ink-2">
                  <CalendarClock size={16} />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm">{c.name}</p>
                  <p className="text-[11px] text-ink-3">到 {c.until}</p>
                </div>
                {left > 0 ? (
                  <span className="shrink-0 rounded-full bg-accent-soft px-2.5 py-1 text-[11px] font-medium text-accent">
                    还剩 {left} 天
                  </span>
                ) : (
                  <button
                    onClick={() => toGoods(c)}
                    className="shrink-0 rounded-full bg-accent px-3 py-1.5 text-[11px] font-medium text-white active:scale-95"
                  >
                    到期 · 转物品
                  </button>
                )}
                <button
                  onClick={() => void removeById('cooldowns', c.id)}
                  aria-label="删除"
                  className="shrink-0 text-ink-3 active:text-red-500"
                >
                  <Trash2 size={15} />
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </SheetFrame>
  );
}

/* ============================================================================
 * 快捷冷静（记一笔「稍后」钮用）：名称 + 天数，确认即入池。
 * ==========================================================================*/
export function QuickCooldownSheet({ presetName, onClose }: { presetName?: string; onClose: () => void }) {
  const addCooldown = useDataStore((s) => s.addCooldown);
  const [name, setName] = useState(presetName ?? '');
  const [days, setDays] = useState(7);
  const [busy, setBusy] = useState(false);

  const confirm = async (): Promise<void> => {
    const n = name.trim();
    if (!n) {
      toastError('先写下想买什么');
      return;
    }
    setBusy(true);
    try {
      await addCooldown({ name: n, until: addDays(today(), days) });
      toastSuccess(`「${n}」进入 ${days} 天冷静期`);
      onClose();
    } finally {
      setBusy(false);
    }
  };

  return (
    <SheetFrame title="先放冷静池" onClose={onClose}>
      <div className="space-y-2 rounded-card border border-line bg-surface-2 p-3">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="想买什么？"
          className="h-10 w-full rounded-btn border border-line bg-surface px-3 text-sm outline-none focus:border-accent"
        />
        <div className="flex gap-1.5">
          {COOL_DAYS.map((d) => (
            <button
              key={d}
              onClick={() => setDays(d)}
              className={`h-8 flex-1 rounded-full border text-xs transition-all active:scale-95 ${
                days === d ? 'border-accent bg-accent-soft font-medium text-accent' : 'border-line bg-surface text-ink-3'
              }`}
            >
              {d} 天
            </button>
          ))}
        </div>
        <button
          onClick={() => void confirm()}
          disabled={busy}
          className="h-11 w-full rounded-btn bg-accent text-sm font-semibold text-white active:opacity-90 disabled:opacity-40"
        >
          {busy ? '保存中…' : `冷静 ${days} 天，到期再说`}
        </button>
        <p className="text-center text-[11px] text-ink-3">这笔不记支出 —— 到期还想要，再去买也不迟</p>
      </div>
    </SheetFrame>
  );
}
