import { useMemo, useState } from 'react';
import CategoryGlyph from '../components/CategoryGlyph';
import { useDataStore, useSettingsStore } from '../store';
import { categoryShare, judgementBreakdown } from '../domain/stats';
import type { CategorySlice } from '../domain/stats';
import { ofMonth, sumExpense, sumIncome } from '../domain/ledger';
import { formatMoney, formatCompactMoney } from '../lib/money';
import { addDays, fmtDate, lastNDays, lastNMonths, monthKey, monthLabel, nextMonth, prevMonth, relativeDayLabel, today } from '../lib/date';
import type { ValueRecord } from '../types/entities';

/** P08 报表：按日/月/年三态粒度看分类环图 + 趋势 + 归/需/否（全部只统计生活流记账）。 */

type Grain = 'day' | 'month' | 'year';

const GRAIN_CHIPS: Array<[Grain, string]> = [
  ['day', '按日'],
  ['month', '按月'],
  ['year', '按年'],
];

const J_META = {
  gui: { label: '归', desc: '值得的花销' },
  xu: { label: '需', desc: '必要的花销' },
  fou: { label: '否', desc: '本可避免' },
} as const;

/** 环图（自绘 SVG，stroke-dasharray 分段）。 */
function Donut({ slices, total }: { slices: CategorySlice[]; total: number }) {
  const R = 54;
  const C = 2 * Math.PI * R;
  let acc = 0;
  return (
    <svg viewBox="0 0 140 140" className="h-36 w-36 shrink-0">
      <circle cx="70" cy="70" r={R} fill="none" stroke="var(--line)" strokeWidth="16" />
      {slices.map((s) => {
        const dash = s.ratio * C;
        const el = (
          <circle
            key={s.categoryId}
            cx="70"
            cy="70"
            r={R}
            fill="none"
            stroke={s.color}
            strokeWidth="16"
            strokeDasharray={`${Math.max(dash - 1.5, 0)} ${C}`}
            strokeDashoffset={-acc}
            transform="rotate(-90 70 70)"
          />
        );
        acc += dash;
        return el;
      })}
      <text x="70" y="64" textAnchor="middle" fontSize="10" className="fill-ink-3">
        本月支出
      </text>
      <text x="70" y="82" textAnchor="middle" fontSize="14" fontWeight="700" className="fill-ink">
        {formatCompactMoney(total)}
      </text>
    </svg>
  );
}

/** P08 报表：分类环图 + 趋势 + 归/需/否结构（支持日/月/年三种粒度）。 */
export default function ReportPage() {
  const records = useDataStore((s) => s.valueRecords);
  const categories = useDataStore((s) => s.categories);
  const currency = useSettingsStore((s) => s.settings.currency);

  const [grain, setGrain] = useState<Grain>('month');
  const [day, setDay] = useState(() => today());
  const [ym, setYm] = useState(() => monthKey());
  const [year, setYear] = useState(() => Number(monthKey().slice(0, 4)));

  /* —— 三种粒度的时间窗口（口径：只统计生活流 valueRecords，不含物品/订阅） —— */
  const windowRows = useMemo<ValueRecord[]>(() => {
    if (grain === 'day') return records.filter((r) => r.date === day);
    if (grain === 'month') return ofMonth(records, ym);
    return records.filter((r) => r.date.startsWith(String(year)));
  }, [records, grain, day, ym, year]);

  const expense = useMemo(() => sumExpense(windowRows), [windowRows]);
  const income = useMemo(() => sumIncome(windowRows), [windowRows]);

  const slices = useMemo(() => categoryShare(windowRows, categories, { type: 'expense' }), [windowRows, categories]);
  const stack = useMemo(() => judgementBreakdown(windowRows), [windowRows]);

  /** 趋势柱：按日 → 近 7 天；按月 → 近 6 个月；按年 → 该年 12 个月。 */
  const trend = useMemo(() => {
    if (grain === 'month') {
      return lastNMonths(6, `${ym}-01`).map((m) => {
        const list = ofMonth(records, m);
        return { key: m, label: monthLabel(m), expense: sumExpense(list), income: sumIncome(list) };
      });
    }
    if (grain === 'day') {
      return lastNDays(7, day).map((d) => {
        const list = records.filter((r) => r.date === d);
        return { key: d, label: fmtDate(d, 'M/D'), expense: sumExpense(list), income: sumIncome(list) };
      });
    }
    return Array.from({ length: 12 }, (_, i) => {
      const m = `${year}-${String(i + 1).padStart(2, '0')}`;
      const list = records.filter((r) => r.date.startsWith(m));
      return { key: m, label: `${i + 1}月`, expense: sumExpense(list), income: sumIncome(list) };
    });
  }, [grain, records, day, ym, year]);

  const maxBar = Math.max(...trend.map((b) => Math.max(b.expense, b.income)), 1);

  /** 粒度切换器的 ‹ › 步进。 */
  const step = (dir: -1 | 1) => {
    if (grain === 'day') setDay(addDays(day, dir));
    else if (grain === 'month') setYm(dir === -1 ? prevMonth(ym) : nextMonth(ym));
    else setYear((y) => y + dir);
  };

  const windowLabel =
    grain === 'day'
      ? `${relativeDayLabel(day)} · ${day}`
      : grain === 'month'
        ? monthLabel(ym, true)
        : `${year} 年`;

  const trendTitle =
    grain === 'day' ? '近 7 天趋势' : grain === 'month' ? '近 6 个月趋势' : `${year} 年逐月趋势`;

  return (
    <div className="text-ink">
      {/* 自绘 Tab 头（底栏页不带返回箭头；safe-area 由 MainShell 外层统一处理） */}
      {/* 宽度/边距全部交给 MainShell 的 main（max-w-xl px-4），页面不再自带宽度容器 */}
      <header className="page-enter flex w-full items-end justify-between pb-1 pt-2">
        <div className="min-w-0">
          <h1 className="text-3xl font-bold leading-9">报表</h1>
          <p className="truncate text-xs text-ink-3">
            {windowLabel} · 收 {formatMoney(income, currency)} / 支 {formatMoney(expense, currency)}
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-1">
          <button
            onClick={() => step(-1)}
            className="flex h-9 w-9 items-center justify-center rounded-full text-lg text-ink-2 active:scale-95 active:bg-surface transition-transform"
            aria-label="上一期"
          >
            ‹
          </button>
          {grain === 'day' ? (
            <input
              type="date"
              value={day}
              onChange={(e) => e.target.value && setDay(e.target.value)}
              aria-label="选择日期"
              className="h-9 w-32 rounded-btn border border-line bg-surface px-1.5 text-[11px] text-ink-2 outline-none focus:border-accent"
            />
          ) : null}
          <button
            onClick={() => step(1)}
            className="flex h-9 w-9 items-center justify-center rounded-full text-lg text-ink-2 active:scale-95 active:bg-surface transition-transform"
            aria-label="下一期"
          >
            ›
          </button>
        </div>
      </header>
      {/* PC 桌面：环图 + 趋势并排两列，归/需/否占整行（对齐 PC 阅读节奏） */}
      <div className="lg:grid lg:grid-cols-2 lg:gap-3">
        {/* 粒度切换 chips（与首页筛选 chips 同样式） */}
        <div className="mb-3 flex gap-2 lg:col-span-2">
          {GRAIN_CHIPS.map(([g, label]) => (
            <button
              key={g}
              onClick={() => setGrain(g)}
              className={`h-8 rounded-full border px-3.5 text-xs transition-all active:scale-95 ${
                grain === g ? 'border-accent bg-accent-soft font-medium text-accent' : 'border-line bg-surface text-ink-3'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* 分类环图 */}
        <div className="page-enter rounded-card border border-line bg-surface p-4">
          <h2 className="text-sm font-semibold">支出分类占比</h2>
          <p className="mt-0.5 text-[11px] text-ink-3">仅统计生活流记账（物品与订阅不计入）</p>
          {slices.length === 0 ? (
            <p className="py-10 text-center text-sm text-ink-3">
              {grain === 'day' ? '今天' : grain === 'month' ? '本月' : '本年'}还没有支出记录
            </p>
          ) : (
            <div className="mt-3 flex items-center gap-4">
              <Donut slices={slices} total={expense} />
              <ul className="min-w-0 flex-1 space-y-1.5">
                {slices.slice(0, 6).map((s) => (
                  <li key={s.categoryId} className="flex items-center gap-2 text-xs">
                    <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ background: s.color }} />
                    <span className="flex min-w-0 flex-1 items-center gap-1 truncate">
                      <CategoryGlyph id={s.icon} size={14} className="shrink-0 text-ink-2" />
                      {s.name}
                    </span>
                    <span className="text-ink-3">{Math.round(s.ratio * 100)}%</span>
                    <span className="w-16 text-right font-medium">{formatCompactMoney(s.amount, currency)}</span>
                  </li>
                ))}
                {slices.length > 6 ? (
                  <li className="pl-5 text-[11px] text-ink-3">其余 {slices.length - 6} 个分类…</li>
                ) : null}
              </ul>
            </div>
          )}
        </div>

        {/* 趋势 */}
        <div className="page-enter mt-3 rounded-card border border-line bg-surface p-4 lg:mt-0">
          <div className="flex items-baseline justify-between">
            <h2 className="text-sm font-semibold">{trendTitle}</h2>
            <p className="text-[11px] text-ink-3">
              <span className="mr-2 inline-flex items-center gap-1">
                <span className="inline-block h-2 w-2 rounded-full bg-accent" />
                支出
              </span>
              <span className="inline-flex items-center gap-1">
                <span className="inline-block h-2 w-2 rounded-full" style={{ background: 'var(--xu)' }} />
                收入
              </span>
            </p>
          </div>
          <p className="mt-0.5 text-[11px] text-ink-3">仅统计生活流记账</p>
          <div className="mt-4 flex h-32 items-end justify-between gap-2">
            {trend.map((b) => (
              <div key={b.key} className="flex min-w-0 flex-1 flex-col items-center gap-1">
                <div className="flex h-28 w-full items-end justify-center gap-1">
                  <div
                    className="w-3.5 rounded-t bg-accent transition-all"
                    style={{ height: `${Math.max((b.expense / maxBar) * 100, b.expense > 0 ? 3 : 0)}%` }}
                    title={`支出 ${formatMoney(b.expense, currency)}`}
                  />
                  <div
                    className="w-3.5 rounded-t transition-all"
                    style={{
                      height: `${Math.max((b.income / maxBar) * 100, b.income > 0 ? 3 : 0)}%`,
                      background: 'var(--xu)',
                    }}
                    title={`收入 ${formatMoney(b.income, currency)}`}
                  />
                </div>
                <span className={`text-[11px] ${b.key === (grain === 'day' ? day : grain === 'month' ? ym : '') ? 'font-semibold text-accent' : 'text-ink-3'}`}>
                  {b.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 归 / 需 / 否 */}
        <div className="page-enter mt-3 rounded-card border border-line bg-surface p-4 lg:col-span-2 lg:mt-0">
          <h2 className="text-sm font-semibold">归 / 需 / 否 结构</h2>
          <p className="mt-0.5 text-[11px] text-ink-3">仅统计生活流记账（物品与订阅不计入）</p>
          <div className="mt-3 flex h-2 overflow-hidden rounded-full bg-surface-2">
            {stack.map((s) => (
              <div key={s.judgement} style={{ width: `${s.ratio * 100}%`, background: s.color }} />
            ))}
          </div>
          <ul className="mt-3 space-y-2.5">
            {stack.map((s) => (
              <li key={s.judgement}>
                <div className="flex items-baseline justify-between text-xs">
                  <span style={{ color: s.color }}>
                    {s.label} · {J_META[s.judgement].desc}
                  </span>
                  <span>
                    <span className="font-semibold">{formatMoney(s.amount, currency)}</span>
                    <span className="ml-1.5 text-ink-3">{Math.round(s.ratio * 100)}%</span>
                  </span>
                </div>
                <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-surface-2">
                  <div style={{ width: `${s.ratio * 100}%`, background: s.color }} className="h-full rounded-full" />
                </div>
              </li>
            ))}
          </ul>
          {expense === 0 ? (
            <p className="mt-2 text-[11px] text-ink-3">
              {grain === 'day' ? '今天' : grain === 'month' ? '本月' : '本年'}暂无支出，先去记一笔吧
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
