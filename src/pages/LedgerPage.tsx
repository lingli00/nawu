import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Leaf, PenLine, ReceiptText } from 'lucide-react';
import CategoryGlyph from '../components/CategoryGlyph';
import {
  useDataStore,
  useSettingsStore,
  useUiStore,
} from '../store';
import { groupByDay, sumExpense, sumIncome } from '../domain/ledger';
import { formatSignedMoney, formatMoney } from '../lib/money';
import { addDays, monthKey, monthLabel, nextMonth, prevMonth, relativeDayLabel, today } from '../lib/date';
import type { Judgement, ValueRecord } from '../types/entities';

/** P09 生活流：按日/月/年三态粒度查看流水 + 删除撤销。 */

type Grain = 'day' | 'month' | 'year';

const GRAIN_CHIPS: Array<[Grain, string]> = [
  ['day', '按日'],
  ['month', '按月'],
  ['year', '按年'],
];

const JUDGEMENT_COLOR: Record<Judgement, string> = {
  gui: 'var(--gui)',
  xu: 'var(--xu)',
  fou: 'var(--fou)',
};
const JUDGEMENT_LABEL: Record<Judgement, string> = { gui: '归', xu: '需', fou: '否' };

/** 月份键升序去重（某年出现过的月份）。 */
function monthKeysOf(rows: ValueRecord[]): string[] {
  return [...new Set(rows.map((r) => r.date.slice(0, 7)))].sort();
}

export default function LedgerPage() {
  const nav = useNavigate();
  const records = useDataStore((s) => s.valueRecords);
  const categories = useDataStore((s) => s.categories);
  const removeLedger = useDataStore((s) => s.removeLedger);
  const undo = useDataStore((s) => s.undo);
  const currency = useSettingsStore((s) => s.settings.currency);

  const [grain, setGrain] = useState<Grain>('month');
  const [day, setDay] = useState(today());
  const [ym, setYm] = useState(monthKey());
  const [year, setYear] = useState(() => Number(monthKey().slice(0, 4)));

  const catOf = (id: string) => categories.find((c) => c.id === id);

  /* —— 三种粒度的时间窗口（全部只统计生活流 valueRecords） —— */
  const inDay = useMemo(() => records.filter((r) => r.date === day), [records, day]);
  const inMonth = useMemo(() => records.filter((r) => r.date.startsWith(ym)), [records, ym]);
  const inYear = useMemo(() => records.filter((r) => r.date.startsWith(String(year))), [records, year]);

  /** 按年视图：该年出现过的月份（升序），渲染时倒序展示。 */
  const yearMonths = useMemo(() => monthKeysOf(inYear), [inYear]);

  const activeRows = grain === 'day' ? inDay : grain === 'month' ? inMonth : inYear;
  const expense = useMemo(() => sumExpense(activeRows), [activeRows]);
  const income = useMemo(
    () => activeRows.filter((r) => r.type === 'income').reduce((acc, r) => acc + (r.amount || 0), 0),
    [activeRows],
  );

  /* —— v1.0 价值账本大卡（永远看今天，对标竞品生活流首屏） —— */
  const todayRows = useMemo(() => records.filter((r) => r.date === today()), [records]);
  const todayExpense = useMemo(() => sumExpense(todayRows), [todayRows]);
  const todayIncome = useMemo(
    () => todayRows.filter((r) => r.type === 'income').reduce((acc, r) => acc + (r.amount || 0), 0),
    [todayRows],
  );
  const byJudgement = useMemo(() => {
    const acc: Record<Judgement, number> = { gui: 0, xu: 0, fou: 0 };
    for (const r of todayRows) {
      if (r.type === 'expense') acc[r.judgement] += r.amount || 0;
    }
    return acc;
  }, [todayRows]);
  /** 健康度：非「否」支出占比；今日无支出 → 100%。 */
  const health = todayExpense > 0 ? Math.round((1 - byJudgement.fou / todayExpense) * 100) : 100;
  const jPct = (j: Judgement): number => (todayExpense > 0 ? Math.round((byJudgement[j] / todayExpense) * 100) : 0);

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

  const del = async (id: string, label: string) => {
    await removeLedger(id);
    useUiStore.getState().toast(`已删除「${label}」`, 'info', { actionLabel: '撤销', onAction: () => void undo() });
  };

  /** 按日分组的流水列表（按日 / 按月共用）。 */
  const renderDayGroups = (rows: ValueRecord[]) => {
    const groups = groupByDay(rows);
    if (groups.length === 0) {
      return (
        <div className="rounded-card border border-dashed border-line bg-surface p-10 text-center lg:col-span-2">
          <Leaf size={30} className="mx-auto text-ink-3" strokeWidth={1.5} />
          <p className="mt-2 text-sm text-ink-3">这个{grain === 'day' ? '天' : '月'}还没有记录</p>
          <button onClick={() => nav('/ai')} className="mt-3 h-9 rounded-full bg-accent-soft px-4 text-xs font-medium text-accent">
            试试 AI 记一笔
          </button>
        </div>
      );
    }
    return groups.map((g) => (
      <section key={g.date}>
        <div className="flex items-baseline justify-between px-1 py-1.5">
          <h3 className="text-xs font-semibold text-ink-2">{relativeDayLabel(g.date)}</h3>
          <p className="text-[11px] text-ink-3">
            {g.income > 0 ? `收 ${formatMoney(g.income, currency)} · ` : ''}支 {formatMoney(g.expense, currency)}
          </p>
        </div>
        <ul className="divide-y divide-line-2 overflow-hidden rounded-card border border-line bg-surface">
          {g.rows.map((r) => {
            const cat = catOf(r.categoryId);
            return (
              <li key={r.id} className="flex items-center gap-3 px-3.5 py-3.5">
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-surface-2 text-base font-bold"
                  style={{ color: JUDGEMENT_COLOR[r.judgement] }}
                >
                  {JUDGEMENT_LABEL[r.judgement]}
                </span>
                <button onClick={() => nav(`/record/${r.id}`)} className="min-w-0 flex-1 text-left">
                  <p className="flex items-center gap-1 truncate text-sm">
                    {cat ? (
                      <>
                        <CategoryGlyph id={cat.icon} size={14} className="shrink-0 text-ink-2" />
                        {cat.name}
                      </>
                    ) : (
                      '未分类'
                    )}
                    {r.note ? <span className="text-ink-3"> · {r.note}</span> : null}
                  </p>
                  <p className="text-[11px] text-ink-3">
                    {r.type === 'income' ? '收入' : '支出'} · {r.judgement === 'gui' ? '值得' : r.judgement === 'xu' ? '必要' : '本可避免'}
                  </p>
                </button>
                <div className="text-right">
                  <p
                    className="text-sm font-semibold"
                    style={{ color: r.type === 'income' ? 'var(--gui)' : 'var(--ink)' }}
                  >
                    {formatSignedMoney(r.amount, r.type, r.currency)}
                  </p>
                  <button
                    onClick={() => del(r.id, r.note || cat?.name || '记录')}
                    className="text-[11px] text-ink-3"
                  >
                    删除
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    ));
  };

  /** 按年视图：每月一节（月份汇总 + 该月流水）。 */
  const renderYearGroups = () => {
    if (yearMonths.length === 0) {
      return (
        <div className="rounded-card border border-dashed border-line bg-surface p-10 text-center lg:col-span-2">
          <Leaf size={30} className="mx-auto text-ink-3" strokeWidth={1.5} />
          <p className="mt-2 text-sm text-ink-3">{year} 年还没有记录</p>
          <button onClick={() => nav('/ai')} className="mt-3 h-9 rounded-full bg-accent-soft px-4 text-xs font-medium text-accent">
            试试 AI 记一笔
          </button>
        </div>
      );
    }
    return [...yearMonths].reverse().map((m) => {
      const rows = inYear.filter((r) => r.date.startsWith(m));
      return (
        <section key={m}>
          <div className="flex items-baseline justify-between px-1 py-1.5">
            <h3 className="text-xs font-semibold text-ink-2">{monthLabel(m)}</h3>
            <p className="text-[11px] text-ink-3">
              {sumIncome(rows) > 0 ? `收 ${formatMoney(sumIncome(rows), currency)} · ` : ''}支 {formatMoney(sumExpense(rows), currency)}
            </p>
          </div>
          {renderDayGroups(rows)}
        </section>
      );
    });
  };

  return (
    <div className="space-y-3">
      {/* 大字标题 + 手动记一笔（与首页/报表页顶栏同风格） */}
      <header className="flex items-center justify-between pb-3 pt-2">
        <h1 className="text-3xl font-bold leading-9">生活流</h1>
        <button onClick={() => nav('/record')} className="h-9 rounded-full bg-accent-soft px-3.5 text-xs font-medium text-accent">
          <PenLine size={14} className="mr-1 inline-block align-[-2px]" />
          手动记一笔
        </button>
      </header>

      {/* v1.0 价值账本大卡（今日：支出 / 健康度 / 归需否三色条 / 同期收入） */}
      <div className="rounded-card border border-line bg-surface p-4">
        <div className="flex items-center justify-between">
          <p className="flex items-center gap-1.5 text-sm font-semibold">
            <ReceiptText size={15} className="text-ink-2" />
            价值账本 · 今日
          </p>
          <span className="text-xs font-semibold" style={{ color: 'var(--gui)' }}>
            ↗ 健康度 {health}%
          </span>
        </div>
        <div className="mt-1.5 flex items-end justify-between">
          <div>
            <p className="text-[11px] text-ink-3">今日支出</p>
            <p className="text-2xl font-bold leading-8">{formatMoney(todayExpense, currency)}</p>
          </div>
          <p className="pb-1 text-[11px] text-ink-3">同期收入 {formatMoney(todayIncome, currency)}</p>
        </div>
        {/* 归 / 需 / 否 三色分布条 */}
        <div className="mt-2 flex h-1.5 overflow-hidden rounded-full bg-surface-2">
          {(['gui', 'xu', 'fou'] as Judgement[]).map((j) => (
            <span key={j} style={{ width: `${jPct(j)}%`, background: JUDGEMENT_COLOR[j], transition: 'width .3s' }} />
          ))}
        </div>
        <div className="mt-2 flex justify-between text-[11px] text-ink-3">
          {(['gui', 'xu', 'fou'] as Judgement[]).map((j) => (
            <span key={j} className="flex items-center gap-1">
              <i className="inline-block h-1.5 w-1.5 rounded-full" style={{ background: JUDGEMENT_COLOR[j] }} />
              {JUDGEMENT_LABEL[j]} {formatMoney(byJudgement[j], currency)}
              <span className="hidden sm:inline">· {j === 'gui' ? '投资' : j === 'xu' ? '生存' : '浪费'}</span>
            </span>
          ))}
        </div>
        {todayExpense === 0 ? (
          <p className="mt-2.5 rounded-btn bg-surface-2 px-3 py-2 text-xs text-ink-3">暂无支出，保持空杯心态</p>
        ) : byJudgement.fou > 0 ? (
          <p className="mt-2.5 rounded-btn bg-surface-2 px-3 py-2 text-xs" style={{ color: 'var(--fou)' }}>
            今日有 {formatMoney(byJudgement.fou, currency)}「否」支出，占 {jPct('fou')}%
          </p>
        ) : null}
      </div>

      {/* 粒度切换 chips（与首页筛选 chips 同样式） */}
      <div className="flex gap-2">
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

      {/* 时间窗口切换 */}
      <div className="flex items-center justify-between rounded-card border border-line bg-surface px-3 py-2">
        <button onClick={() => step(-1)} className="h-8 w-8 rounded-btn text-ink-2" aria-label="上一期">
          ‹
        </button>
        <div className="text-center">
          <p className="text-sm font-semibold">{windowLabel}</p>
          <p className="text-[11px] text-ink-3">
            支出 {formatMoney(expense, currency)} · 收入 {formatMoney(income, currency)}
          </p>
        </div>
        {grain === 'day' ? (
          <input
            type="date"
            value={day}
            onChange={(e) => e.target.value && setDay(e.target.value)}
            aria-label="选择日期"
            className="h-8 w-32 rounded-btn border border-line bg-surface-2 px-1.5 text-[11px] text-ink-2 outline-none focus:border-accent"
          />
        ) : (
          <button onClick={() => step(1)} className="h-8 w-8 rounded-btn text-ink-2" aria-label="下一期">
            ›
          </button>
        )}
      </div>

      {/* 流水列表（只统计生活流记账）；桌面端按日分节排两栏，手机端不变 */}
      <div className="space-y-3 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-5 lg:space-y-0">
        {grain === 'year' ? renderYearGroups() : renderDayGroups(activeRows)}
      </div>
    </div>
  );
}
