import { describe, expect, it } from 'vitest';
import { countInboxRows, mergeInboxEvents } from '../src/lib/aiInboxMerge';
import { COLLECTIONS } from '../src/types/entities';

const base = () => ({
  valueRecords: [{ id: 'vr1', amount: 10, note: '旧' }],
  goods: [{ id: 'g1', name: '耳机', price: 899 }],
  wishlist: [{ id: 'w1', name: '想买' }],
  walls: [{ id: 'wl1', text: '一句话' }],
  categories: [{ id: 'cl0', name: '餐饮', kind: 'ledger' }],
});

describe('mergeInboxEvents', () => {
  it('只 patch 有改动的集合，不整仓覆盖', () => {
    const out = mergeInboxEvents(base(), [
      { id: 1, records: { goods: [{ id: 'g2', name: '键盘', price: 299 }] } },
    ]);
    expect(Object.keys(out).sort()).toEqual(['goods']);
    expect((out.goods as Array<Record<string, unknown>>).map((r) => r.id)).toEqual(['g2', 'g1']);
  });

  it('新记录放最前，同 id 覆盖且不重复', () => {
    const out = mergeInboxEvents(base(), [
      { id: 1, records: { valueRecords: [{ id: 'vr1', note: '改过' }, { id: 'vr2', amount: 35 }] } },
    ]);
    const rows = out.valueRecords as Array<Record<string, unknown>>;
    expect(rows).toHaveLength(2);
    expect(rows[0].id).toBe('vr2');
    expect(rows[1]).toMatchObject({ id: 'vr1', amount: 10, note: '改过' });
  });

  it('任意额外字段都原样保留（备注/手续费/图片/自定义字段）', () => {
    const out = mergeInboxEvents(base(), [
      {
        id: 1,
        records: {
          goods: [{
            id: 'g2', name: '显示器', price: 1299, note: '下单备注',
            image: { source: 'url', ref: 'x.jpg' },
            extraFees: [{ name: '手续费', amount: 5 }],
            purchaseChannel: '京东',
          }],
        },
      },
    ]);
    const row = (out.goods as Array<Record<string, unknown>>)[0];
    expect(row.purchaseChannel).toBe('京东');
    expect(row.image).toEqual({ source: 'url', ref: 'x.jpg' });
    expect(row.extraFees).toEqual([{ name: '手续费', amount: 5 }]);
  });

  it('patches / deletes / replace 与服务端同口径', () => {
    const out = mergeInboxEvents(base(), [
      {
        id: 1,
        records: {
          patches: { goods: [{ id: 'g1', patch: { note: '加了备注', feeRatePermille: 21 } }] },
          deletes: { wishlist: ['w1'] },
          replace: { walls: [{ id: 'wl2', text: '换掉' }] },
        },
      },
    ]);
    expect((out.goods as Array<Record<string, unknown>>)[0]).toMatchObject({
      id: 'g1', name: '耳机', note: '加了备注', feeRatePermille: 21,
    });
    expect(out.wishlist).toEqual([]);
    expect(out.walls).toEqual([{ id: 'wl2', text: '换掉' }]);
    expect(out.valueRecords).toBeUndefined();
  });

  it('可写 12 个集合里的任意一个（含自定义分类）', () => {
    const out = mergeInboxEvents(base(), [
      { id: 1, records: { categories: [{ id: 'cu_1', name: '咖啡', kind: 'ledger' }] } },
      { id: 2, records: { subscriptions: [{ id: 's1', name: '网盘', amount: 25, period: 'month' }] } },
      { id: 3, records: { reminders: [{ id: 'r1', kind: 'sub_renew', at: '2026-12-01' }] } },
    ]);
    expect((out.categories as Array<Record<string, unknown>>).some((r) => r.name === '咖啡')).toBe(true);
    expect(Object.keys(out).sort()).toEqual(['categories', 'reminders', 'subscriptions']);
    expect(COLLECTIONS).toHaveLength(12);
  });

  it('多个事件按顺序累计，且不修改原数据', () => {
    const src = base();
    const out = mergeInboxEvents(src, [
      { id: 1, records: { goods: [{ id: 'g2', name: 'A' }] } },
      { id: 2, records: { goods: [{ id: 'g3', name: 'B' }] } },
    ]);
    expect((out.goods as unknown[]).map((r) => (r as { id: string }).id)).toEqual(['g3', 'g2', 'g1']);
    expect(src.goods).toHaveLength(1);
  });

  it('空事件不产生任何改动', () => {
    expect(mergeInboxEvents(base(), [{ id: 1, records: {} }])).toEqual({});
  });

  it('countInboxRows 统计增删改全部行数', () => {
    expect(countInboxRows([
      {
        id: 1,
        records: {
          goods: [{ id: 'g2' }, { id: 'g3' }],
          patches: { goods: [{ id: 'g1', patch: { note: 'x' } }] },
          deletes: { wishlist: ['w1'] },
        },
      },
    ])).toBe(4);
  });
});
