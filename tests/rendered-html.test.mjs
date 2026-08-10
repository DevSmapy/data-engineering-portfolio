import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

async function source(path) {
  return readFile(new URL(path, root), "utf8");
}

test("defines the English, Korean, and Japanese portfolio routes", async () => {
  const [english, korean, japanese] = await Promise.all([
    source("app/page.tsx"),
    source("app/ko/page.tsx"),
    source("app/ja/page.tsx"),
  ]);

  assert.match(english, /<PortfolioPage locale="en"\s*\/>/);
  assert.match(korean, /<PortfolioPage locale="ko"\s*\/>/);
  assert.match(japanese, /<PortfolioPage locale="ja"\s*\/>/);
});

test("keeps all locale content in the shared portfolio model", async () => {
  const [content, page] = await Promise.all([
    source("app/portfolio-content.ts"),
    source("app/PortfolioPage.tsx"),
  ]);

  assert.match(content, /export type Locale = "en" \| "ko" \| "ja"/);
  assert.match(content, /\ben:\s*\{/);
  assert.match(content, /\bko:\s*\{/);
  assert.match(content, /\bja:\s*\{/);
  assert.match(page, /href:\s*"\/ko"/);
  assert.match(page, /href:\s*"\/ja"/);
  assert.match(page, /href:\s*"\/"/);
  assert.match(page, /id="system"/);
  assert.match(page, /id="decisions"/);
  assert.match(page, /id="stack"/);
});
