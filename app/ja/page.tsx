import type { Metadata } from "next";
import { PortfolioPage } from "../PortfolioPage";

export const metadata: Metadata = {
  title: "AI創薬研究プラットフォーム・エンジニアリング | DevSmapy",
  description: "データエンジニアリング、ワークフロー自動化、再利用可能な科学研究基盤に関するプロジェクト事例です。",
};

export default function JapanesePage() {
  return <PortfolioPage locale="ja" />;
}
