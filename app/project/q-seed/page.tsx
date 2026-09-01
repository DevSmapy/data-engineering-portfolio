import type { Metadata } from "next";
import { CaseStudyPage } from "../../PortfolioPage";
import { getBundle } from "../../content";

export const metadata: Metadata = {
  title: "Q-SEED | DevSmapy",
  description:
    "Side data-engineering project: batch KR/US market-data pipeline (DuckDB, dbt, quality ops)—downstream research apps consume the warehouse only. Not live trading.",
};

export default function QseedProjectPage() {
  return <CaseStudyPage locale="en" caseStudy={getBundle("en").qseed} />;
}
