import type { Metadata } from "next";
import { CaseStudyPage } from "../../PortfolioPage";
import { platform } from "../../content";

export const metadata: Metadata = {
  title: "AI Research Platform Engineering | DevSmapy",
  description:
    "A data and AI engineering case study for computational drug discovery, workflow automation, and reusable scientific infrastructure.",
};

export default function PlatformCasePage() {
  return <CaseStudyPage caseStudy={platform} />;
}
