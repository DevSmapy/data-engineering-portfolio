export type Locale = "en" | "ko" | "ja";

export type CaseContent = {
  id: "platform" | "backbone";
  path: string;
  githubUrl: string;
  videoUrl?: string;
  nav: string[];
  heroEyebrow: string;
  heroTitle: string;
  heroAccent: string;
  heroCopy: string;
  explore: string;
  watch?: string;
  caseLabel: string;
  completed: string;
  pipeline: string[];
  summary: [string, string][];
  heroFoot: string;
  footTags: string[];
  contextLabel: string;
  context: string;
  contextStrong: string;
  systemLabel?: string;
  systemTitle?: string;
  systemCopy?: string;
  frameLabel?: string;
  frameMeta?: string;
  architectureSrc?: string;
  architectureAlt?: string;
  capabilities?: { index: string; title: string; text: string; tags: string[] }[];
  workLabel: string;
  workTitle: string;
  workCopy: string;
  workItems: [string, string][];
  impactLabel: string;
  impactTitle: string;
  impactCopy: string;
  impacts: [string, string][];
  quote?: string;
  quoteLabel?: string;
  scopeLabel?: string;
  scopeTitle?: string;
  scopeItems?: string[];
  toolkitLabel: string;
  toolkitTitle: string;
  toolkitCopy: string;
  stack: [string, string][];
  footerLabel: string;
  footerTitle: string;
  github: string;
  copyright: string;
};

export type HubContent = {
  heroEyebrow: string;
  heroTitle: string;
  heroAccent: string;
  heroCopy: string;
  primaryCta: string;
  secondaryCta: string;
  workLabel: string;
  workTitle: string;
  openCase: string;
  githubLabel: string;
  projects: {
    href: string;
    githubUrl: string;
    title: string;
    summary: string;
    facts: [string, string][];
  }[];
  copyright: string;
};

export type UiCopy = {
  brandPortfolio: string;
  brandCase: string;
  home: string;
  backHome: string;
  work: string;
  platform: string;
  backbone: string;
};

export type LocaleBundle = {
  hub: HubContent;
  platform: CaseContent;
  backbone: CaseContent;
  ui: UiCopy;
};
