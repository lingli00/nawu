import { describe, expect, it } from 'vitest';
import { channelBase, channelManifestPath } from '../src/api/appUpdate';
import { OFFICIAL_UPDATE_CHANNEL, compareVersions } from '../src/lib/appVersion';
import { joinUrl, normalizeServerUrl } from '../src/lib/url';

/**
 * v1.1.1 回归：官方频道地址拼接。
 *
 * 背景：request() 内部的 normalizeServerUrl() 会把 server.url 归一成「协议://主机」，
 * path 被剥掉。v1.1.1 之前把 OFFICIAL_UPDATE_CHANNEL 整个当 server.url 传进 request()，
 * 导致手机请求 http://host:port/app-manifest.json（少了频道目录），拿到 SPA 的 HTML，
 * 官方频道（含增量补丁）在 App 端从未生效——表现为「收不到增量更新通知」。
 */
describe('官方频道地址拼接（v1.1.1 回归）', () => {
  it('频道目录必须保留：manifest 请求 path 带目录前缀', () => {
    const { origin, dir } = channelBase();
    expect(dir.length).toBeGreaterThan(0);
    expect(channelManifestPath()).toBe(`${dir}/app-manifest.json`);
    // 手机最终请求的完整 URL 必须落在频道目录内
    expect(joinUrl(origin, channelManifestPath())).toBe(
      `${OFFICIAL_UPDATE_CHANNEL.replace(/\/+$/, '')}/app-manifest.json`,
    );
  });

  it('原点不含路径（供 request() 归一化后仍能拼回频道目录）', () => {
    const { origin } = channelBase();
    expect(origin).not.toContain('/nawu-update');
    expect(normalizeServerUrl(origin).url).toBe(origin);
  });

  it('对照记录：normalizeServerUrl 直接吃掉频道目录（本 bug 成因）', () => {
    const n = normalizeServerUrl(OFFICIAL_UPDATE_CHANNEL);
    expect(n.ok).toBe(true);
    expect(n.url).not.toContain('nawu-update');
  });
});

/**
 * ★v1.4.1 回归（真机上「一直显示已是最新、增量包从没生效」的根因）：
 * 频道地址曾被写成 `http://127.0.0.1:2233/nawu-update/` 这个本地占位，
 * 而构建期没有任何替换 —— 手机上的 127.0.0.1 指向手机自己，
 * 频道永远不可达，每次都静默回退用户服务器，补丁与时间戳全部失效。
 */
describe('官方频道地址必须是线上真实地址（v1.4.1 回归）', () => {
  it('不能是 localhost / 127.0.0.1 之类的本地占位', () => {
    expect(OFFICIAL_UPDATE_CHANNEL).not.toMatch(/127\.0\.0\.1|localhost|0\.0\.0\.0/);
  });

  it('★v1.5.0：官网通道在 80 端口 /nawu-update/（2233 独立端口已下线）', () => {
    expect(OFFICIAL_UPDATE_CHANNEL.startsWith('http://')).toBe(true);
    expect(OFFICIAL_UPDATE_CHANNEL).not.toContain(':2233');
    expect(OFFICIAL_UPDATE_CHANNEL.endsWith('/nawu-update/')).toBe(true);
  });

  it('1.4.x 相比 1.3.9 应判定为新版本（否则检查更新永远是「已是最新」）', () => {
    expect(compareVersions('1.4.1', '1.3.9')).toBe(1);
    expect(compareVersions('1.4.0', '1.3.9')).toBe(1);
    expect(compareVersions('1.3.9', '1.3.9')).toBe(0);
  });
});
