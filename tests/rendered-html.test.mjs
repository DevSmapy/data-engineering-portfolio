import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";
import test from "node:test";

const root = fileURLToPath(new URL("../", import.meta.url));
const PORT = 3467;
const BASE = `http://127.0.0.1:${PORT}`;

/** @type {import("node:child_process").ChildProcess | undefined} */
let server;

async function waitForServer() {
  const deadline = Date.now() + 60_000;
  while (Date.now() < deadline) {
    try {
      const response = await fetch(BASE);
      if (response.ok) return;
    } catch {
      // Server still starting.
    }
    await new Promise((resolve) => setTimeout(resolve, 250));
  }
  throw new Error("next start did not become ready in time");
}

test.before(async () => {
  server = spawn("node", ["node_modules/next/dist/bin/next", "start", "-p", String(PORT)], {
    cwd: root,
    stdio: ["ignore", "pipe", "pipe"],
    env: { ...process.env, NODE_ENV: "production" },
  });
  await waitForServer();
});

test.after(() => {
  server?.kill("SIGTERM");
});

async function fetchHtml(path) {
  const response = await fetch(`${BASE}${path}`);
  assert.equal(response.status, 200, path);
  return response.text();
}

function assertLang(html, lang) {
  assert.match(html, new RegExp(`<html[^>]*lang="${lang}"`));
}

function assertTitle(html, title) {
  assert.match(html, new RegExp(`<title>${title.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}</title>`));
}

function assertLanguageLinks(html, hrefs) {
  for (const href of hrefs) {
    assert.match(html, new RegExp(`href="${href.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"`));
  }
}

test("renders localized hub routes with document language, metadata, and language links", async () => {
  const cases = [
    {
      path: "/",
      lang: "en",
      title: "Data Engineering Portfolio | DevSmapy",
      text: "computational drug discovery.",
      links: ["/", "/ko", "/ja"],
    },
    {
      path: "/ko",
      lang: "ko",
      title: "데이터 엔지니어링 포트폴리오 | DevSmapy",
      text: "AI 신약 개발을 위한",
      links: ["/", "/ko", "/ja"],
    },
    {
      path: "/ja",
      lang: "ja",
      title: "データエンジニアリング・ポートフォリオ | DevSmapy",
      text: "計算創薬のための",
      links: ["/", "/ko", "/ja"],
    },
  ];

  for (const item of cases) {
    const html = await fetchHtml(item.path);
    assertLang(html, item.lang);
    assertTitle(html, item.title);
    assert.ok(html.includes(item.text), item.path);
    assertLanguageLinks(html, item.links);
  }
});

test("renders localized case routes with document language, metadata, and language links", async () => {
  const cases = [
    {
      path: "/work/ai-research-platform",
      lang: "en",
      title: "AI Research Platform Engineering | DevSmapy",
      text: "CASE STUDY / 2022–2023",
      links: ["/work/ai-research-platform", "/ko/work/ai-research-platform", "/ja/work/ai-research-platform"],
    },
    {
      path: "/work/backbone-infrastructure",
      lang: "en",
      title: "Large-Scale Chemical Data Operations | DevSmapy",
      text: "CASE STUDY / 2019–2022",
      links: ["/work/backbone-infrastructure", "/ko/work/backbone-infrastructure", "/ja/work/backbone-infrastructure"],
    },
    {
      path: "/ko/work/ai-research-platform",
      lang: "ko",
      title: "AI 신약 연구 플랫폼 엔지니어링 | DevSmapy",
      text: "프로젝트 사례 / 2022–2023",
      links: ["/work/ai-research-platform", "/ko/work/ai-research-platform", "/ja/work/ai-research-platform"],
    },
    {
      path: "/ko/work/backbone-infrastructure",
      lang: "ko",
      title: "대규모 화합물 데이터 운영 | DevSmapy",
      text: "프로젝트 사례 / 2019–2022",
      links: ["/work/backbone-infrastructure", "/ko/work/backbone-infrastructure", "/ja/work/backbone-infrastructure"],
    },
    {
      path: "/ja/work/ai-research-platform",
      lang: "ja",
      title: "AI創薬研究プラットフォーム・エンジニアリング | DevSmapy",
      text: "ケーススタディ / 2022–2023",
      links: ["/work/ai-research-platform", "/ko/work/ai-research-platform", "/ja/work/ai-research-platform"],
    },
    {
      path: "/ja/work/backbone-infrastructure",
      lang: "ja",
      title: "大規模化合物データ運用 | DevSmapy",
      text: "ケーススタディ / 2019–2022",
      links: ["/work/backbone-infrastructure", "/ko/work/backbone-infrastructure", "/ja/work/backbone-infrastructure"],
    },
  ];

  for (const item of cases) {
    const html = await fetchHtml(item.path);
    assertLang(html, item.lang);
    assertTitle(html, item.title);
    assert.ok(html.includes(item.text), item.path);
    assertLanguageLinks(html, item.links);
  }
});
