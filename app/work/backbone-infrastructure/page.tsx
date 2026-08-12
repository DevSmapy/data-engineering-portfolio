import type { Metadata } from "next";
import { CaseStudyPage } from "../../PortfolioPage";
import { getBundle } from "../../content";

export const metadata: Metadata = {
  title: "Large-Scale Chemical Data Operations | DevSmapy",
  description:
    "Data engineering case study: operational infrastructure for 100M+ ZINC molecular records across 100+ compute servers.",
};

export default function BackboneCasePage() {
  return <CaseStudyPage locale="en" caseStudy={getBundle("en").backbone} />;
}
