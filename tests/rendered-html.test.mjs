import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

async function source(path) {
  return readFile(new URL(path, root), "utf8");
}

test("defines the English hub and two case study routes", async () => {
  const [home, platform, backbone] = await Promise.all([
    source("app/page.tsx"),
    source("app/work/ai-research-platform/page.tsx"),
    source("app/work/backbone-infrastructure/page.tsx"),
  ]);

  assert.match(home, /<HubPage\s*\/>/);
  assert.match(platform, /caseStudy=\{platform\}/);
  assert.match(backbone, /caseStudy=\{backbone\}/);
});

test("keeps English hub and case content in the shared content module", async () => {
  const [content, page] = await Promise.all([
    source("app/content.ts"),
    source("app/PortfolioPage.tsx"),
  ]);

  assert.match(content, /export const hub:/);
  assert.match(content, /export const platform:/);
  assert.match(content, /export const backbone:/);
  assert.match(content, /href: "\/work\/ai-research-platform"/);
  assert.match(content, /href: "\/work\/backbone-infrastructure"/);
  assert.match(content, /100M\+/);
  assert.match(content, /Scope Boundaries|SCOPE BOUNDARIES|What I did not own/i);
  assert.match(page, /export function HubPage/);
  assert.match(page, /export function CaseStudyPage/);
  assert.match(page, /id="stack"/);
});

test("defers Korean and Japanese to redirects until Phase 3", async () => {
  const [korean, japanese] = await Promise.all([
    source("app/ko/page.tsx"),
    source("app/ja/page.tsx"),
  ]);

  assert.match(korean, /redirect\("\/"\)/);
  assert.match(japanese, /redirect\("\/"\)/);
});
