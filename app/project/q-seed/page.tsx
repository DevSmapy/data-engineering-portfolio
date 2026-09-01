import type { Metadata } from "next";
import { CaseStudyPage } from "../../PortfolioPage";
import { getBundle } from "../../content";

export const metadata: Metadata = {
  title: "Q-SEED | DevSmapy",
  description:
    "Personal quant research engine: local DuckDB warehouse, factor analysis, backtests, and portfolio optimization—built for reproducible research, not live trading.",
};

export default function QseedProjectPage() {
  return <CaseStudyPage locale="en" caseStudy={getBundle("en").qseed} />;
}
