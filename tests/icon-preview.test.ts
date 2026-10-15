// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { act, createElement, useMemo, useState } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { IconPreview } from '../src/components/IconPicker';
import { goodsIconValue, goodsImageFromIcon } from '../src/lib/goodsIcon';

/**
 * v1.0.31 · 锁定 IconPreview 的 hooks 契约（用户反馈：添加物品选品牌图片必崩）。
 *
 * 背景：React #300 = Rendered fewer hooks than expected。
 * 旧实现把 `brand:` 的提前 return 和非 brand 分支的 7 个 hooks 写在同一个组件里，
 * 预览值一旦在 brand ↔ 其它形态之间切换，hooks 数量变化 → React 抛错整树卸载（白屏）。
 * 本测试以「同一实例连续切换形态」的方式复现——旧实现必抛，修复后必过。
 */

let container: HTMLDivElement;
let root: Root;

/** React 18 要求显式声明测试环境支持 act（否则每次更新都刷警告）。 */
(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
  root = createRoot(container);
});

afterEach(() => {
  act(() => root.unmount());
  container.remove();
  document.body.innerHTML = '';
});

/** 受控宿主：把 setter 暴露出来，模拟用户在表单里反复换图标。 */
function mountControlled(initial: string): (v: string) => void {
  let setter: (v: string) => void = () => undefined;
  function Host(): ReturnType<typeof createElement> {
    const [v, setV] = useState(initial);
    setter = setV;
    return createElement(IconPreview, { icon: v, size: 24 });
  }
  act(() => root.render(createElement(Host)));
  return (v: string) => act(() => setter(v));
}

describe('IconPreview hooks 契约（#300 回归）', () => {
  it('空值 → 品牌 → 网络图 → 裸 lucide id → 品牌：同一实例切换不抛错', () => {
    const set = mountControlled('');

    // 关键一步：非 brand（7 hooks）→ brand（旧实现只剩 1 hook）——旧代码在此抛 #300
    expect(() => set('brand:kimi')).not.toThrow();
    expect(container.innerHTML).toContain('<svg');

    expect(() => set('url:https://example.com/favicon.ico')).not.toThrow();
    expect(() => set('img:data:image/png;base64,iVBORw0KGgoAAAANSUhEUg==')).not.toThrow();
    expect(() => set('')).not.toThrow();
    expect(() => set('brand:kimi')).not.toThrow();
    expect(() => set('lucide:tag')).not.toThrow();
    expect(container.innerHTML.length).toBeGreaterThan(0);
  });

  it('未知品牌 slug 走兜底图标，不抛错', () => {
    const set = mountControlled('');
    expect(() => set('brand:__not_exist_slug__')).not.toThrow();
    expect(container.innerHTML).toContain('<svg');
  });

  it('builtin 形态往返（goodsIconValue ↔ goodsImageFromIcon）后预览仍可渲染', () => {
    const set = mountControlled('');
    const img = goodsImageFromIcon('clothing');
    expect(img).toEqual({ source: 'builtin', ref: 'clothing' });
    expect(goodsIconValue({ image: img })).toBe('clothing');
    expect(() => set(goodsIconValue({ image: img }))).not.toThrow();
    expect(() => set(goodsIconValue({ image: goodsImageFromIcon('brand:kimi') }))).not.toThrow();
    expect(container.innerHTML.length).toBeGreaterThan(0);
  });

  /**
   * 反向对照：把旧实现（brand 提前 return 与非 brand 分支的 hooks 混在同一组件）
   * 原样复刻一份，同样的形态切换**必须**抛错。这条保证上面 3 条不是「假绿」——
   * 一旦有人把两段逻辑又揉回一个组件，本文件会连同它一起变红。
   *
   * 注意旧实现的真实形状：brand 分支**先跑了 1 个 hook**（useMemo 算 glyph）再 return，
   * 非 brand 分支共 7 个。React 的 #300 判定发生在「新渲染调用的 hook 链比上次短」
   * 且仍有 hook 被调用时（currentHook.next !== null）——所以完全 0 个 hook 的
   * 提前 return 反而不报错，必须按原样复刻才有意义。
   */
  it('反向对照：旧实现（提前 return 跨越 hooks）在同一切换下必抛错', () => {
    // eslint-disable-next-line react/no-unstable-nested-components
    function BuggyLikeBefore({ v }: { v: string }): ReturnType<typeof createElement> {
      const marker = useMemo(() => v, [v]); // hook #1：旧实现在 brand 分支前也算 glyph
      if (v.startsWith('brand:')) return createElement('span', null, marker);
      const [n] = useState(1); // hook #2：只有非 brand 分支才走到
      return createElement('span', null, `${marker}${n}`);
    }
    let setter: (v: string) => void = () => undefined;
    // eslint-disable-next-line react/no-unstable-nested-components
    function Host(): ReturnType<typeof createElement> {
      const [v, setV] = useState('');
      setter = setV;
      return createElement(BuggyLikeBefore, { v });
    }
    act(() => root.render(createElement(Host)));
    // 非 brand(2 hooks) → brand(1 hook)：React 抛 Rendered fewer hooks than expected（#300）
    expect(() => act(() => setter('brand:kimi'))).toThrow(/fewer hooks|Rendered fewer/i);
  });
});
