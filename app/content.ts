import { en } from "./locales/en";
import { ja } from "./locales/ja";
import { ko } from "./locales/ko";
import { BACKBONE_PATH, PLATFORM_PATH } from "./shared";
import type { Locale, LocaleBundle } from "./types";

export type {
  CaseContent,
  HubContent,
  Locale,
  LocaleBundle,
  UiCopy,
} from "./types";

export {
  BACKBONE_GITHUB,
  BACKBONE_PATH,
  PLATFORM_GITHUB,
  PLATFORM_PATH,
  PLATFORM_VIDEO,
} from "./shared";

export function localizePath(locale: Locale, path: string): string {
  if (path === "/") return locale === "en" ? "/" : `/${locale}`;
  return locale === "en" ? path : `/${locale}${path}`;
}

export const languageLinks: { code: string; locale: Locale }[] = [
  { code: "EN", locale: "en" },
  { code: "한국어", locale: "ko" },
  { code: "日本語", locale: "ja" },
];

export function languageHref(locale: Locale, page: "home" | "platform" | "backbone"): string {
  const path = page === "home" ? "/" : page === "platform" ? PLATFORM_PATH : BACKBONE_PATH;
  return localizePath(locale, path);
}

export const bundles: Record<Locale, LocaleBundle> = { en, ko, ja };

export function getBundle(locale: Locale): LocaleBundle {
  return bundles[locale];
}
