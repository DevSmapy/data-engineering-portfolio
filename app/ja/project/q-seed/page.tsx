import type { Metadata } from "next";
import { CaseStudyPage } from "../../../PortfolioPage";
import { getBundle } from "../../../content";

export const metadata: Metadata = {
  title: "Q-SEED | DevSmapy",
  description:
    "ローカルDuckDBウェアハウス、ファクター分析、バックテスト、ポートフォリオ最適化を備えた個人クオンツ研究エンジン—再現可能な研究のためのもので、ライブ取引用ではありません。",
};

export default function JapaneseQseedProjectPage() {
  return <CaseStudyPage locale="ja" caseStudy={getBundle("ja").qseed} />;
}
