import type { Metadata } from "next";
import { CaseStudyPage } from "../../../PortfolioPage";
import { getBundle } from "../../../content";

export const metadata: Metadata = {
  title: "大規模化合物データ運用 | DevSmapy",
  description:
    "1億件超のZINC分子データと100台以上のサーバー向け運用データインフラの事例です。",
};

export default function JapaneseBackbonePage() {
  return <CaseStudyPage locale="ja" caseStudy={getBundle("ja").backbone} />;
}
