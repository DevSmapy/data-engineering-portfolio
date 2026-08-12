import type { Metadata } from "next";
import { CaseStudyPage } from "../../PortfolioPage";
import { backbone } from "../../content";

export const metadata: Metadata = {
  title: "High-Throughput Backbone Infrastructure | DevSmapy",
  description:
    "Data engineering case study: operational infrastructure for 100M+ ZINC molecular records across 100+ compute servers.",
};

export default function BackboneCasePage() {
  return <CaseStudyPage caseStudy={backbone} />;
}
