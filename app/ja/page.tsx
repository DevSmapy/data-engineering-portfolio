import type { Metadata } from "next";
import { HubPage } from "../PortfolioPage";

export const metadata: Metadata = {
  title: "データエンジニアリング・ポートフォリオ | DevSmapy",
  description:
    "計算創薬における研究プラットフォーム設計と大規模分子データ運用のケーススタディをまとめたポートフォリオです。",
};

export default function JapaneseHome() {
  return <HubPage locale="ja" />;
}
