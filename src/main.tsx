import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';
import { useAppStore } from './store/useAppStore';
import { isNative } from './net/env';
import './index.css';

/**
 * 初始化原生插件（状态栏/键盘/返回键）。
 * 全部用动态 import + isNative() 守卫，保证浏览器 dev 环境不报错。
 */
async function initNativePlugins(theme: 'light' | 'dark'): Promise<void> {
  if (!isNative()) return;
  try {
    const [{ StatusBar, Style }, { Keyboard }, { App: CapApp }] = await Promise.all([
      import('@capacitor/status-bar'),
      import('@capacitor/keyboard'),
      import('@capacitor/app'),
    ]);
    await StatusBar.setOverlaysWebView({ overlay: false });
    await StatusBar.setStyle({ style: theme === 'dark' ? Style.Dark : Style.Light });
    await StatusBar.setBackgroundColor({ color: theme === 'dark' ? '#121513' : '#f4f5f3' });
    await Keyboard.setResizeMode({ mode: 'body' as never }).catch(() => undefined);
    await CapApp.removeAllListeners();
  } catch {
    // 插件不可用（浏览器 / 未安装）时静默降级，不影响业务
  }
}

/** 冷启动：先 hydrate 本地数据，再挂载 UI。 */
async function bootstrap(): Promise<void> {
  const store = useAppStore.getState();
  await store.init();
  const theme = useAppStore.getState().theme;
  document.documentElement.setAttribute('data-theme', theme);
  await initNativePlugins(theme);

  const rootEl = document.getElementById('root');
  if (!rootEl) throw new Error('#root 节点缺失，请检查 index.html');
  ReactDOM.createRoot(rootEl).render(
    <React.StrictMode>
      <HashRouter>
        <App />
      </HashRouter>
    </React.StrictMode>,
  );
}

void bootstrap();
