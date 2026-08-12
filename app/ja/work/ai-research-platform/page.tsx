import type { Metadata } from "next";
import { CaseStudyPage } from "../../../PortfolioPage";
import { getBundle } from "../../../content";

export const metadata: Metadata = {
  title: "AI創薬研究プラットフォーム・エンジニアリング | DevSmapy",
  description:
    "データエンジニアリング、ワークフロー自動化、再利用可能な科学研究基盤に関するプロジェクト事例です。",
};

export default function JapanesePlatformPage() {
  return <CaseStudyPage locale="ja" caseStudy={getBundle("ja").platform} />;
}
