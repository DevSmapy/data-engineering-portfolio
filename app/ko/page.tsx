import type { Metadata } from "next";
import { HubPage } from "../PortfolioPage";

export const metadata: Metadata = {
  title: "데이터 엔지니어링 포트폴리오 | DevSmapy",
  description:
    "AI 신약 개발 분야의 연구 플랫폼 아키텍처와 대규모 분자 데이터 운영 사례를 정리한 포트폴리오입니다.",
};

export default function KoreanHome() {
  return <HubPage locale="ko" />;
}
