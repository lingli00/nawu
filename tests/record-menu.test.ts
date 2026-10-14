// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { act, createElement, useState } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { MemoryRouter } from 'react-router-dom';
import RecordMenu from '../src/components/RecordMenu';
import { onSheetOpen } from '../src/lib/sheetBus';

/**
 * v1.0.24 · 复现并锁定「新增订阅第一次点击没反应，反复点才能进」的修复。
 *
 * 时序（真实点击链路）：点卡片 → onClose() 让宿主卸载 RecordMenu →
 * useBackGuard cleanup 执行 history.back() 撤占位历史（异步派发 popstate）→
 * 旧实现在 onClick 里**同步** emitSheetOpen，其 setState 与 popstate 交错被吞。
 * 修复：同路由 emit 推迟一个宏任务，popstate 先落地后再开层；
 * 且 emit 无订阅者时自动退回「标志 + 导航」自愈。
 */

let container: HTMLDivElement;
let root: Root;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
  root = createRoot(container);
});

afterEach(() => {
  act(() => root.unmount());
  container.remove();
});

/** 宿主：open=false 时卸载菜单（真实触发 backGuard 卸载时序）。 */
function Host(): React.ReactNode {
  const [open, setOpen] = useState(true);
  return open ? createElement(RecordMenu, { onClose: () => setOpen(false) }) : null;
}

function findButton(text: string): HTMLButtonElement {
  // RecordMenu 走 createPortal 到 document.body
  const btn = [...document.body.querySelectorAll('button')].find((b) => (b.textContent ?? '').includes(text));
  if (!btn) throw new Error(`按钮不存在: ${text}`);
  return btn as HTMLButtonElement;
}

describe('RecordMenu · 结构（v1.0.24）', () => {
  it('AI 记一笔并入 2×2 记录卡（原 hero 已去掉，全菜单只有一个入口）', async () => {
    await act(async () => {
      root.render(createElement(MemoryRouter, { initialEntries: ['/home'] }, createElement(Host)));
    });
    const hits = [...document.body.querySelectorAll('button')].filter((b) => (b.textContent ?? '').includes('AI 记一笔'));
    expect(hits.length).toBe(1);
    expect((document.body.textContent ?? '').includes('价值记账')).toBe(true);
    expect((document.body.textContent ?? '').includes('手动录入')).toBe(true);
    expect((document.body.textContent ?? '').includes('新增订阅')).toBe(true);
  });
});

describe('RecordMenu · 同路由开层竞态（v1.0.24 修复）', () => {
  it('新增订阅：菜单卸载 backGuard 回退落定后再开层，不吞首次点击', async () => {
    let subHit = 0;
    let backBeforeEmit = false;
    const backSpy = vi.spyOn(window.history, 'back');
    const off = onSheetOpen('sub', () => {
      subHit++;
      // 修复契约：emit 必须迟于 backGuard 卸载时的 history.back()，
      // 否则其 setState 与 popstate 同帧交错，首次开层被吞（用户录屏里的恶性 bug）
      backBeforeEmit = backSpy.mock.calls.length > 0;
    });
    try {
      await act(async () => {
        root.render(createElement(MemoryRouter, { initialEntries: ['/home'] }, createElement(Host)));
      });

      await act(async () => {
        findButton('新增订阅').click();
      });
      await act(async () => {
        await new Promise((r) => setTimeout(r, 20));
      });
      expect(subHit).toBe(1);
      expect(backBeforeEmit).toBe(true);
    } finally {
      off();
      backSpy.mockRestore();
    }
  });

  it('生活流四键同样走延迟 emit（心动清单样例）', async () => {
    let wishHit = 0;
    let backBeforeEmit = false;
    const backSpy = vi.spyOn(window.history, 'back');
    const off = onSheetOpen('wish', () => {
      wishHit++;
      backBeforeEmit = backSpy.mock.calls.length > 0;
    });
    try {
      await act(async () => {
        root.render(createElement(MemoryRouter, { initialEntries: ['/ledger'] }, createElement(Host)));
      });
      await act(async () => {
        findButton('心动清单').click();
      });
      await act(async () => {
        await new Promise((r) => setTimeout(r, 20));
      });
      expect(wishHit).toBe(1);
      expect(backBeforeEmit).toBe(true);
    } finally {
      off();
      backSpy.mockRestore();
    }
  });

  it('无订阅者（目标页未挂）→ 不静默失败，自动写 sessionStorage 标志自愈', async () => {
    try {
      sessionStorage.removeItem('gf.open.goods');
    } catch {
      /* 忽略 */
    }
    await act(async () => {
      root.render(createElement(MemoryRouter, { initialEntries: ['/home'] }, createElement(Host)));
    });
    await act(async () => {
      findButton('手动录入').click();
    });
    await act(async () => {
      await new Promise((r) => setTimeout(r, 20));
    });
    expect(sessionStorage.getItem('gf.open.goods')).toBe('1');
  });
});
