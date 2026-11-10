import { COLLECTIONS, type CollectionName } from '../types/entities';

/**
 * ★v1.6.6 · 把「云端待入账」事件合并进本机集合。
 *
 * 服务端事件 payload 支持四类操作（见 GF_Ai::mergeIntoPayload）：
 *   <集合名>: 行数组        按 id upsert（新记录放最前）
 *   patches: {集合: [{id,patch}]}  局部更新
 *   deletes: {集合: [id…]}   删除
 *   replace: {集合: 行数组}  整组替换
 *
 * 这里与服务端保持完全同口径，保证「云端快照」与「本机」结果一致。
 * 只返回发生变化的集合，交给 setAllCollections 做 patch，绝不整仓覆盖。
 */
type Row = Record<string, unknown>;

export interface MergeEventLike {
  id: number;
  records: Record<string, unknown>;
}

const isRow = (v: unknown): v is Row => typeof v === 'object' && v !== null && !Array.isArray(v);
const isCollection = (name: string): name is CollectionName => (COLLECTIONS as readonly string[]).includes(name);
const rowId = (r: Row): string => (r.id === undefined || r.id === null ? '' : String(r.id));

/** 统计若干事件一共涉及多少行记录（含增删改）。 */
export function countInboxRows(events: MergeEventLike[]): number {
  let n = 0;
  for (const ev of events) {
    const r = ev.records ?? {};
    for (const name of COLLECTIONS) {
      if (Array.isArray(r[name])) n += r[name].length;
    }
    for (const group of [r.patches, r.deletes]) {
      if (group && typeof group === 'object') {
        for (const v of Object.values(group as Record<string, unknown>)) {
          if (Array.isArray(v)) n += v.length;
        }
      }
    }
  }
  return n;
}

export function mergeInboxEvents(
  base: Record<string, unknown>,
  events: MergeEventLike[],
): Partial<Record<CollectionName, unknown[]>> {
  const changed = new Set<CollectionName>();
  const working: Record<string, Row[]> = {};

  /** 惰性取一份可写副本；只有真正需要写入的集合才会进 changed。 */
  const col = (name: string): Row[] | null => {
    if (!isCollection(name)) return null;
    if (!working[name]) {
      const b = base[name];
      working[name] = Array.isArray(b) ? b.filter(isRow).map((r) => ({ ...r })) : [];
      changed.add(name);
    }
    return working[name];
  };

  for (const ev of events) {
    const records = ev.records ?? {};

    // ① 顶层集合：按 id upsert
    for (const name of COLLECTIONS) {
      const rows = records[name];
      if (!Array.isArray(rows)) continue;
      const typed = rows.filter(isRow);
      if (!typed.length) continue;
      const list = col(name);
      if (!list) continue;
      const fresh: Row[] = [];
      for (const row of typed) {
        const id = rowId(row);
        const idx = id ? list.findIndex((r) => rowId(r) === id) : -1;
        if (idx >= 0) list[idx] = { ...list[idx], ...row };
        else fresh.push(row);
      }
      if (fresh.length) list.unshift(...fresh);
    }

    // ② 局部更新
    const patches = records.patches;
    if (patches && typeof patches === 'object' && !Array.isArray(patches)) {
      for (const [name, ops] of Object.entries(patches as Record<string, unknown>)) {
        if (!Array.isArray(ops)) continue;
        const list = col(name);
        if (!list) continue;
        for (const op of ops) {
          if (!isRow(op) || !isRow(op.patch)) continue;
          const patch = op.patch as Row;
          const id = String(op.id ?? '');
          if (!id) continue;
          const idx = list.findIndex((r) => rowId(r) === id);
          if (idx >= 0) list[idx] = { ...list[idx], ...patch };
        }
      }
    }

    // ③ 删除
    const deletes = records.deletes;
    if (deletes && typeof deletes === 'object' && !Array.isArray(deletes)) {
      for (const [name, ids] of Object.entries(deletes as Record<string, unknown>)) {
        if (!Array.isArray(ids)) continue;
        const list = col(name);
        if (!list) continue;
        const kill = new Set(ids.map(String));
        working[name] = list.filter((r) => !kill.has(rowId(r)));
      }
    }

    // ④ 整组替换
    const replace = records.replace;
    if (replace && typeof replace === 'object' && !Array.isArray(replace)) {
      for (const [name, rows] of Object.entries(replace as Record<string, unknown>)) {
        if (!Array.isArray(rows)) continue;
        if (!isCollection(name)) continue;
        working[name] = rows.filter(isRow).map((r) => ({ ...r }));
        changed.add(name);
      }
    }
  }

  const out: Partial<Record<CollectionName, unknown[]>> = {};
  for (const name of changed) out[name] = working[name] as unknown[];
  return out;
}
