import type { CapacitorConfig } from '@capacitor/cli';

/**
 * Capacitor 配置。
 *
 * ★R1 提醒：页面内所有业务请求走 `src/net/httpClient.ts` 的 CapacitorHttp（原生层），
 * 因此后端「零 CORS」不影响真机；但 `AndroidManifest.xml` 必须开明文 HTTP，
 * 否则内网 `http://192.168.1.100:3030` 一定连不上（见 `docs/BUILD.md`）。
 */
const config: CapacitorConfig = {
  appId: 'com.guifou.app',
  appName: '纳物',
  webDir: 'dist',
  android: {
    // Capacitor 7 默认 androidScheme 为 https，页面源是 https://localhost
    allowMixedContent: true,
    /**
     * ★v1.6.4 光标 Bug 的原生根因（务必保持 false，勿改回 true）：
     *
     * true 时 CapacitorWebView.onCreateInputConnection() 会返回它自己 new 的
     * `BaseInputConnection`，而不是 Chromium 的 `WebViewInputConnection`。
     * BaseInputConnection 是给硬键盘按键用的简化实现，不参与输入法的组合区
     * （composing region）管理：
     *   · 中文输入法组合期 commitText / setComposingText 走简化路径，
     *     selection 与组合区一脱节，WebView 只能把光标顶到文本末尾；
     *   · deleteSurroundingText（删一个字）在简化实现里退化为「整段重设文本」，
     *     同样把光标顶到末尾。
     * 用户看到的就是「光标放在文字中间，删一个字或打一个字，光标立刻跳到句末」。
     *
     * 本项目没有硬键盘按键捕获需求（语音/键盘输入全走标准 IME），因此关闭它，
     * 交还给 Chromium 原生输入连接。配套的 JS 层保护见 src/lib/caretGuard.ts。
     */
    captureInput: false,
    webContentsDebuggingEnabled: false, // 发布版务必 false
    // ★v1.0.21：Android 15 强制 edge-to-edge（WebView 延伸到状态栏/手势条下）。
    // ★v1.7.x 改为 'disable'（务必保持，勿改回 'auto'）——修「APP 顶部状态栏下方空一大块」：
    //   'auto' 时 Capacitor 检测到强制 e2e 会给 WebView 加一道**原生 margin** 避开系统栏；
    //   而网页层 MainShell 的 pager-shell 又写了 `paddingTop: env(safe-area-inset-top)`，
    //   在 APP 里该值 = 状态栏高度，于是状态栏被算了**两遍**（原生 margin + 网页 padding），
    //   叠加成用户看到的顶部大空白。网页浏览器里 safe-area-inset-top 为 0，故网页不受影响。
    // 关掉原生 margin，只保留网页侧 `env(safe-area-inset-top)` 这一道（浏览器/APP 都成立、更可控）。
    // 注：此配置打进原生壳，改动后必须重新打 APK 才生效。
    // 类型为 'auto' | 'force' | 'disable'，"disable" = 完全不加原生 margin（= 首席要的 false）。
    adjustMarginsForEdgeToEdge: 'disable',
  },
  plugins: {
    Keyboard: {
      resizeOnFullScreen: true,
      resize: 'body',
    },
  },
};

export default config;
