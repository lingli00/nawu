/**
 * 纯 fetch 经 GitHub REST API 推送（无子进程）：blobs → tree → commit → ref → workflow_dispatch。
 */
const fs = require('fs');
const path = require('path');

const REPO = 'lingli00/nawu';
const TOKEN = process.env.GH_TOKEN;
const ROOT = __dirname;

async function api(method, url, body) {
  const res = await fetch(`https://api.github.com${url}`, {
    method,
    headers: {
      Authorization: `token ${TOKEN}`,
      Accept: 'application/vnd.github+json',
      'User-Agent': 'push-script',
      'Content-Type': 'application/json',
    },
    body: body === undefined ? undefined : JSON.stringify(body),
  });
  const text = await res.text();
  if (!res.ok) throw new Error(`${method} ${url} -> ${res.status}: ${text.slice(0, 200)}`);
  return text.length ? JSON.parse(text) : null;
}

function walk(dir, out) {
  for (const name of fs.readdirSync(dir)) {
    if (name === '.git' || name === 'node_modules' || name === 'dist') continue;
    const abs = path.join(dir, name);
    if (fs.statSync(abs).isDirectory()) walk(abs, out);
    else out.push(path.relative(ROOT, abs).replace(/\\/g, '/'));
  }
  return out;
}

async function main() {
  const listFile = process.argv[2];
  const files = listFile
    ? fs.readFileSync(listFile, 'utf8').split('\n').map((s) => s.trim()).filter(Boolean)
    : walk(ROOT, []);
  console.log('files:', files.length);

  // 空仓库无法用 git data API：先用 contents API 初始化 README 产生首个 commit
  let base;
  const refRes = await api('GET', `/repos/${REPO}/git/ref/heads/main`).catch(() => null);
  if (!refRes) {
    const init = await api('PUT', `/repos/${REPO}/contents/README.md`, {
      message: 'init',
      content: Buffer.from('# nawu\n\n纳物 App 源码。由 WorkBuddy 自动推送。\n').toString('base64'),
    });
    base = { commitSha: init.commit.sha, treeSha: init.commit.tree.sha };
    console.log('repo initialized via contents API');
  } else {
    const c = await api('GET', `/repos/${REPO}/commits/main`);
    base = { commitSha: c.sha, treeSha: c.commit.tree.sha };
  }
  console.log('base commit:', base.commitSha);

  const tree = [];
  let done = 0;
  for (const rel of files) {
    const buf = fs.readFileSync(path.join(ROOT, rel));
    const blob = await api('POST', `/repos/${REPO}/git/blobs`, { content: buf.toString('base64'), encoding: 'base64' });
    tree.push({ path: rel, mode: '100644', type: 'blob', sha: blob.sha });
    if (++done % 20 === 0) console.log(`blobs ${done}/${files.length}`);
  }
  console.log('blobs done');

  const treeRes = await api('POST', `/repos/${REPO}/git/trees`, { base_tree: base.treeSha, tree });
  console.log('tree ok');

  const commit = await api('POST', `/repos/${REPO}/git/commits`, {
    message: 'Nawu/GuiFou app v1.0.0: 24 ledger categories, IME cursor fix, subscription & ledger UI (M1/M2), CI build',
    tree: treeRes.sha,
    parents: [base.commitSha],
  });
  console.log('commit:', commit.sha);

  await api('PATCH', `/repos/${REPO}/git/refs/heads/main`, { sha: commit.sha, force: true });
  console.log('ref main updated');

  await api('POST', `/repos/${REPO}/actions/workflows/build-apk.yml/dispatches`, { ref: 'main' });
  console.log('workflow dispatched');
}

main().catch((e) => { console.error('ERROR:', e.message); process.exit(1); });
