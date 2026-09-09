import type { Metadata } from "next";
import { CaseStudyPage } from "../../../PortfolioPage";
import { getBundle } from "../../../content";

export const metadata: Metadata = {
  title: "Q-SEED | DevSmapy",
  description:
    "サイドデータエンジニアリングプロジェクト：KR/USバッチ時系列パイプライン（DuckDB、dbt、品質運用）—downstream研究アプリはウェアハウスのみ参照。ライブ取引用ではありません。",
};

export default function JapaneseQseedProjectPage() {
  return <CaseStudyPage locale="ja" caseStudy={getBundle("ja").qseed} />;
}
