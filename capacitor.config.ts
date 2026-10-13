import type { CapacitorConfig } from '@capacitor/cli';

/**
 * Capacitor 配置。
 *
 * ★R1 提醒：页面内所有业务请求走 `src/net/httpClient.ts` 的 CapacitorHttp（原生层），
 * 因此后端「零 CORS」不影响真机；但 `AndroidManifest.xml` 必须开明文 HTTP，
 * 否则内网 `http://10.0.0.209:3030` 一定连不上（见 `docs/BUILD.md`）。
 */
const config: CapacitorConfig = {
  appId: 'com.guifou.app',
  appName: '纳物',
  webDir: 'dist',
  android: {
    // Capacitor 7 默认 androidScheme 为 https，页面源是 https://localhost
    allowMixedContent: true,
    captureInput: true,
    webContentsDebuggingEnabled: false, // 发布版务必 false
  },
  plugins: {
    Keyboard: {
      resizeOnFullScreen: true,
      resize: 'body',
    },
  },
};

export default config;
