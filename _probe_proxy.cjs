/* 校验：哪些域名的服务端代理源失败（这些最可能落到镜像灰占位图）。 */
const fs = require('fs');
const ts = fs.readFileSync('src/lib/brandIcon.ts', 'utf8');
const domains = [...new Set([...ts.matchAll(/domain:\s*'([^']+)'/g)].map((m) => m[1]))];
(async () => {
  const bad = [];
  let cursor = 0;
  async function probe(d) {
    const ac = new AbortController();
    const t = setTimeout(() => ac.abort(), 10000);
    try {
      const r = await fetch('http://106.53.204.29/api/icon/img?d=' + encodeURIComponent(d), { signal: ac.signal });
      if (!r.ok) return false;
      const b = Buffer.from(await r.arrayBuffer());
      return b.length > 100;
    } catch {
      return false;
    } finally {
      clearTimeout(t);
    }
  }
  await Promise.all(Array.from({ length: 8 }, async () => {
    while (cursor < domains.length) {
      const d = domains[cursor++];
      if (!(await probe(d))) bad.push(d);
    }
  }));
  console.log('proxy-fail domains:', bad.length);
  if (bad.length) console.log(bad.join(', '));
})();
