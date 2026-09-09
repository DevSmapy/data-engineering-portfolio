import type { Metadata } from "next";
import { CaseStudyPage } from "../../../PortfolioPage";
import { getBundle } from "../../../content";

export const metadata: Metadata = {
  title: "Q-SEED | DevSmapy",
  description:
    "사이드 데이터 엔지니어링 프로젝트: KR/US 배치 시세 파이프라인(DuckDB, dbt, 품질 운영)—downstream 연구 앱은 웨어하우스만 소비합니다. 실시간 매매용이 아닙니다.",
};

export default function KoreanQseedProjectPage() {
  return <CaseStudyPage locale="ko" caseStudy={getBundle("ko").qseed} />;
}
