import type { Metadata } from "next";
import { CaseStudyPage } from "../../PortfolioPage";
import { getBundle } from "../../content";

export const metadata: Metadata = {
  title: "AI Research Platform Engineering | DevSmapy",
  description:
    "A data and AI engineering case study for computational drug discovery, workflow automation, and reusable scientific infrastructure.",
};

export default function PlatformCasePage() {
  return <CaseStudyPage locale="en" caseStudy={getBundle("en").platform} />;
}
