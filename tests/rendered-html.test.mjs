import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

async function source(path) {
  return readFile(new URL(path, root), "utf8");
}

test("defines hub and case routes for English, Korean, and Japanese", async () => {
  const files = await Promise.all([
    source("app/page.tsx"),
    source("app/ko/page.tsx"),
    source("app/ja/page.tsx"),
    source("app/work/ai-research-platform/page.tsx"),
    source("app/work/backbone-infrastructure/page.tsx"),
    source("app/ko/work/ai-research-platform/page.tsx"),
    source("app/ko/work/backbone-infrastructure/page.tsx"),
    source("app/ja/work/ai-research-platform/page.tsx"),
    source("app/ja/work/backbone-infrastructure/page.tsx"),
  ]);

  assert.match(files[0], /locale="en"/);
  assert.match(files[1], /locale="ko"/);
  assert.match(files[2], /locale="ja"/);
  assert.match(files[3], /getBundle\("en"\)\.platform/);
  assert.match(files[4], /getBundle\("en"\)\.backbone/);
  assert.match(files[5], /getBundle\("ko"\)\.platform/);
  assert.match(files[6], /getBundle\("ko"\)\.backbone/);
  assert.match(files[7], /getBundle\("ja"\)\.platform/);
  assert.match(files[8], /getBundle\("ja"\)\.backbone/);
});

test("keeps localized bundles and path helpers", async () => {
  const [content, en, ko, ja, page] = await Promise.all([
    source("app/content.ts"),
    source("app/locales/en.ts"),
    source("app/locales/ko.ts"),
    source("app/locales/ja.ts"),
    source("app/PortfolioPage.tsx"),
  ]);

  assert.match(content, /export function localizePath/);
  assert.match(content, /export function languageHref/);
  assert.match(en, /CASE STUDY \/ 2019–2022/);
  assert.match(ko, /프로젝트 사례 \/ 2019–2022/);
  assert.match(ja, /ケーススタディ \/ 2019–2022/);
  assert.match(en, /export const en:/);
  assert.match(ko, /export const ko:/);
  assert.match(ja, /export const ja:/);
  assert.match(page, /LanguageSwitch/);
  assert.match(page, /languageHref/);
});
