import type { Metadata } from "next";
import { CaseStudyPage } from "../../../PortfolioPage";
import { getBundle } from "../../../content";

export const metadata: Metadata = {
  title: "대규모 화합물 데이터 운영 | DevSmapy",
  description:
    "1억 건 이상 ZINC 분자 데이터와 100대 이상 서버를 위한 운영 데이터 인프라 사례입니다.",
};

export default function KoreanBackbonePage() {
  return <CaseStudyPage locale="ko" caseStudy={getBundle("ko").backbone} />;
}
