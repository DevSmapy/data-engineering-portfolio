import type { Metadata } from "next";
import { PortfolioPage } from "../PortfolioPage";

export const metadata: Metadata = {
  title: "AI 신약 연구 플랫폼 엔지니어링 | DevSmapy",
  description: "데이터 엔지니어링, 워크플로 자동화, 재사용 가능한 과학 연구 인프라에 관한 프로젝트 사례입니다.",
};

export default function KoreanPage() {
  return <PortfolioPage locale="ko" />;
}
