import { useEffect } from 'react';

/**
 * Android 返回手势/返回键关闭弹层（v1.0.9）。
 *
 * 原生返回会触发 WebView history 回退——弹层打开时压入一个占位历史记录，
 * popstate 到它时执行 onClose 而不是退出页面；用户点遮罩/按钮关闭时，
 * 组件卸载的 cleanup 里主动 history.back() 弹掉占位，保持历史栈干净。
 *
 * 多层弹层（如物品表单上再叠裁剪层）各自压栈，天然形成后进先出的栈序。
 */
export function useBackGuard(active: boolean, onClose: () => void): void {
  useEffect(() => {
    if (!active) return;
    if (typeof window === 'undefined' || !window.history?.pushState) return;
    let consumed = false;
    try {
      window.history.pushState({ gfSheet: Date.now() }, '');
    } catch {
      return;
    }
    const onPop = (): void => {
      consumed = true;
      onClose();
    };
    window.addEventListener('popstate', onPop);
    return () => {
      window.removeEventListener('popstate', onPop);
      if (!consumed) {
        // 弹层经 UI 途径关闭：撤掉占位历史记录（不触发 onPop，因监听已移除）
        try {
          window.history.back();
        } catch {
          /* ignore */
        }
      }
    };
    // onClose 用闭包即可：随 active 变化重建监听
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);
}
