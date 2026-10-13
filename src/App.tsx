import { useEffect, type ReactNode } from 'react';
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import AppRoutes from './router';
import MainShell from './components/layout/MainShell';
import { useAppStore } from './store/useAppStore';
import { useServerStore } from './store/useServerStore';
import { isNative } from './net/env';
import { UiHost } from './components/ui/UiHost';
import { Compass } from 'lucide-react';

/**
 * 浏览器端自动注册服务器：网页用户本来就是从服务器打开的页面，
 * 服务器地址就是当前站点 origin —— 让用户再手填 IP 毫无道理（App 端才需要）。
 * 模块级防重入：hydrate 后只尝试一次；彻底失败则回落离线模式（仍可用全部记账功能）。
 */
let autoServerOnce = false;
async function ensureBrowserServer(): Promise<void> {
  if (autoServerOnce) return;
  autoServerOnce = true;
  const { add } = useServerStore.getState();
  try {
    await add({ alias: '当前站点', url: window.location.origin });
  } catch {
    await useAppStore.getState().setOfflineMode(true);
  }
}

/**
 * 路由守卫（架构 §5.4 + 主理人拍板修订）：
 * - 未 hydrate → 启动骨架（App 根部处理）
 * - App 端：无服务器配置且未选择离线 → 引导页（真机不知道服务器在哪，必须让用户填）
 * - 网页端（浏览器）：绝不进引导页 —— 自动把当前站点注册为服务器，直接进应用；
 *   服务器管理仍可从「我的」页进入（App 场景保留）。
 * - **不再强制登录**：允许未登录离线使用全部记账功能，登录从「我的」页进入
 */
function RouteGuard({ children }: { children: ReactNode }): JSX.Element {
  const navigate = useNavigate();
  const location = useLocation();
  const hydrated = useAppStore((s) => s.hydrated);
  const offlineMode = useAppStore((s) => s.offlineMode);
  const serverCount = useServerStore((s) => s.servers.length);
  const native = isNative();

  useEffect(() => {
    if (!hydrated) return;
    if (!native) {
      // 网页端：自动配置当前站点；若手动导航到引导页一律弹回首页
      if (serverCount === 0 && !offlineMode) void ensureBrowserServer();
      if (location.pathname.startsWith('/onboarding')) navigate('/home', { replace: true });
      return;
    }
    if (serverCount === 0 && !offlineMode) {
      navigate('/onboarding/server', { replace: true });
    }
  }, [hydrated, location.pathname, navigate, native, offlineMode, serverCount]);

  return <>{children}</>;
}

/** 冷启动骨架（hydrate 完成前）。 */
function BootSplash(): JSX.Element {
  return (
    <div className="min-h-screen bg-paper flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <Compass size={36} className="text-ink-3" strokeWidth={1.5} />
        <div className="t-h3 text-ink-2">纳物</div>
        <div className="w-40 h-1 rounded bg-line overflow-hidden">
          <div className="h-full w-1/3 shimmer" />
        </div>
      </div>
    </div>
  );
}

/**
 * App 根组件：路由 + 主壳（底部 4 Tab + FAB，按路径自动显隐）+ 全局 Toast / Dialog 宿主。
 */
export default function App(): JSX.Element {
  const hydrated = useAppStore((s) => s.hydrated);

  if (!hydrated) return <BootSplash />;

  return (
    <RouteGuard>
      <MainShell>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          {AppRoutes.map((r) => (
            <Route key={r.path} path={r.path} element={r.element} />
          ))}
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </MainShell>
      <UiHost />
    </RouteGuard>
  );
}
