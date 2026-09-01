import type { Metadata } from "next";
import { CaseStudyPage } from "../../../PortfolioPage";
import { getBundle } from "../../../content";

export const metadata: Metadata = {
  title: "Q-SEED | DevSmapy",
  description:
    "로컬 DuckDB 웨어하우스, 팩터 분석, 백테스트, 포트폴리오 최적화를 갖춘 개인 퀀트 연구 엔진—재현 가능한 연구를 위해 만들었으며, 실시간 매매용이 아닙니다.",
};

export default function KoreanQseedProjectPage() {
  return <CaseStudyPage locale="ko" caseStudy={getBundle("ko").qseed} />;
}
