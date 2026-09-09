import Link from "next/link";
import {
  BACKBONE_PATH,
  PLATFORM_PATH,
  QSEED_PATH,
  getBundle,
  languageHref,
  languageLinks,
  localizePath,
  type CaseContent,
  type Locale,
} from "./content";
import type { HeroFootSegment } from "./types";

type NavPage = "home" | "platform" | "backbone" | "qseed";

type HubProject = {
  href: string;
  githubUrl: string;
  title: string;
  summary: string;
  facts: [string, string][];
};

function Lines({ text }: { text: string }) {
  return (
    <>
      {text.split("\n").map((line, i) => (
        <span key={line}>
          {i > 0 && <br />}
          {line}
        </span>
      ))}
    </>
  );
}

function renderFootText(text: string) {
  const lines = text.split("\n");
  if (lines.length === 1) return text;
  return lines.map((line, i) => (
    <span key={i}>
      {i > 0 && <br />}
      {line}
    </span>
  ));
}

function HeroFootText({ foot }: { foot: string | readonly HeroFootSegment[] }) {
  if (typeof foot === "string") return renderFootText(foot);
  return foot.map((part, index) =>
    typeof part === "string" ? (
      <span key={index}>{renderFootText(part)}</span>
    ) : (
      <strong key={index}>{part.em}</strong>
    ),
  );
}

function NavHref({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  if (href.startsWith("http") || href.startsWith("#")) {
    return (
      <a className={className} href={href} {...(href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}>
        {children}
      </a>
    );
  }
  return (
    <Link className={className} href={href}>
      {children}
    </Link>
  );
}

function LanguageSwitch({ locale, page }: { locale: Locale; page: NavPage }) {
  return (
    <div className="languageSwitch" aria-label="Language selector">
      {languageLinks.map((item) => (
        <NavHref
          className={locale === item.locale ? "active" : ""}
          href={languageHref(item.locale, page)}
          key={item.code}
        >
          {item.code}
        </NavHref>
      ))}
    </div>
  );
}

function SiteNav({
  brandHref,
  brandLabel,
  links,
  githubUrl,
  locale,
  page,
}: {
  brandHref: string;
  brandLabel: string;
  links: { href: string; label: string }[];
  githubUrl?: string;
  locale: Locale;
  page: NavPage;
}) {
  return (
    <nav className="nav shell" aria-label="Primary navigation">
      <NavHref className="brand" href={brandHref}>
        <span className="brandMark">DS</span>
        <span>{brandLabel}</span>
      </NavHref>
      <div className="navLinks">
        {links.map((link) => (
          <NavHref href={link.href} key={link.href}>
            {link.label}
          </NavHref>
        ))}
        <LanguageSwitch locale={locale} page={page} />
        {githubUrl && (
          <a className="navCta" href={githubUrl} target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
        )}
      </div>
    </nav>
  );
}

function ProjectCards({
  locale,
  projects,
  openCase,
  githubLabel,
  single,
}: {
  locale: Locale;
  projects: HubProject[];
  openCase: string;
  githubLabel: string;
  single?: boolean;
}) {
  return (
    <div className={single ? "workGrid workGridSingle" : "workGrid"}>
      {projects.map((project, index) => {
        const href = localizePath(locale, project.href);
        return (
          <article className={single ? "workCard workCardSingle" : "workCard"} key={project.href}>
            <span className="capIndex">0{index + 1}</span>
            <h3>{project.title}</h3>
            <p>{project.summary}</p>
            <dl>
              {project.facts.map(([label, value]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
            <div className="workCardActions">
              <NavHref className="button primary" href={href}>
                {openCase}
                <span>→</span>
              </NavHref>
              <a className="button secondary" href={project.githubUrl} target="_blank" rel="noreferrer">
                {githubLabel}
                <span>↗</span>
              </a>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export function HubPage({ locale }: { locale: Locale }) {
  const { hub, ui } = getBundle(locale);
  const home = localizePath(locale, "/");
  const platformHref = localizePath(locale, PLATFORM_PATH);
  const backboneHref = localizePath(locale, BACKBONE_PATH);

  return (
    <main>
      <SiteNav
        brandHref={home}
        brandLabel={ui.brandPortfolio}
        locale={locale}
        page="home"
        links={[
          { href: "#work", label: ui.work },
          { href: "#project", label: ui.project },
          { href: platformHref, label: ui.platform },
          { href: backboneHref, label: ui.backbone },
        ]}
      />

      <section className="hero shell" id="top">
        <div className="eyebrow">
          <span />
          {hub.heroEyebrow}
        </div>
        <div className="heroGrid hubHeroGrid">
          <div>
            <h1>
              <span className="heroLine">{hub.heroTitle}</span>
              <em>{hub.heroAccent}</em>
            </h1>
            <p className="heroCopy">{hub.heroCopy}</p>
            <div className="heroActions">
              <NavHref className="button primary" href={platformHref}>
                {hub.primaryCta}
                <span>→</span>
              </NavHref>
              <NavHref className="button secondary" href={backboneHref}>
                {hub.secondaryCta}
                <span>→</span>
              </NavHref>
            </div>
          </div>
        </div>
      </section>

      <section className="section shell" id="work">
        <div className="sectionHeader">
          <div>
            <span className="sectionNo">{hub.workLabel}</span>
            <h2>{hub.workTitle}</h2>
          </div>
        </div>
        <ProjectCards
          locale={locale}
          projects={hub.projects}
          openCase={hub.openCase}
          githubLabel={hub.githubLabel}
        />
      </section>

      <section className="section shell" id="project">
        <div className="sectionHeader">
          <div>
            <span className="sectionNo">{hub.personalLabel}</span>
            <h2>{hub.personalTitle}</h2>
          </div>
        </div>
        <ProjectCards
          locale={locale}
          projects={hub.personalProjects}
          openCase={hub.openCase}
          githubLabel={hub.githubLabel}
          single
        />
      </section>

      <footer>
        <div className="shell footerBottom hubFooter">
          <span>{hub.copyright}</span>
          <span>
            {languageLinks.map((item, index) => (
              <span key={item.code}>
                {index > 0 && " · "}
                <NavHref href={languageHref(item.locale, "home")}>{item.code}</NavHref>
              </span>
            ))}
          </span>
          <span>© 2026 DevSmapy</span>
        </div>
      </footer>
    </main>
  );
}

export function CaseStudyPage({
  locale,
  caseStudy,
}: {
  locale: Locale;
  caseStudy: CaseContent;
}) {
  const { ui } = getBundle(locale);
  const c = caseStudy;
  const hasSystem = Boolean(c.systemLabel && c.capabilities);
  const home = localizePath(locale, "/");
  const page = c.id;

  return (
    <main>
      <SiteNav
        brandHref={home}
        brandLabel={ui.brandCase}
        locale={locale}
        page={page}
        links={[
          { href: home, label: ui.home },
          { href: "#problem", label: c.nav[0] },
          { href: hasSystem ? "#system" : "#work", label: c.nav[1] },
          { href: "#stack", label: c.nav[c.nav.length - 1] },
        ]}
        githubUrl={c.githubUrl}
      />

      <section className="hero shell" id="top">
        <div className="eyebrow">
          <span />
          {c.heroEyebrow}
        </div>
        <div className="heroGrid">
          <div>
            <h1>
              {c.heroTitle}
              <br />
              <em>{c.heroAccent}</em>
            </h1>
            <p className="heroCopy">{c.heroCopy}</p>
            <div className="heroActions">
              <a className="button primary" href={hasSystem ? "#system" : "#work"}>
                {c.explore}
                <span>↓</span>
              </a>
              {c.videoUrl && c.watch && (
                <a className="button secondary" href={c.videoUrl} target="_blank" rel="noreferrer">
                  {c.watch}
                  <span>↗</span>
                </a>
              )}
            </div>
          </div>
          <aside className="heroPanel">
            <div className="panelTop">
              <span>{c.caseLabel}</span>
              <span className="status">
                <i />
                {c.completed}
              </span>
            </div>
            <div className="pipelineMini" aria-hidden="true">
              {c.pipeline.map((item, index) => (
                <span className="miniGroup" key={item}>
                  <span className="miniNode">
                    <b>0{index + 1}</b>
                    <span>{item}</span>
                  </span>
                  {index < c.pipeline.length - 1 && <i>→</i>}
                </span>
              ))}
            </div>
            <dl>
              {c.summary.map(([label, value]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
        <div className="heroFoot">
          <p>
            <HeroFootText foot={c.heroFoot} />
          </p>
          <div>
            {c.footTags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="manifesto" id="problem">
        <div className="shell statement">
          <span className="sectionNo">{c.contextLabel}</span>
          <p>
            {c.context} <strong>{c.contextStrong}</strong>
          </p>
        </div>
      </section>

      {hasSystem && (
        <section className="section shell" id="system">
          <div className="sectionHeader">
            <div>
              <span className="sectionNo">{c.systemLabel}</span>
              <h2>
                <Lines text={c.systemTitle!} />
              </h2>
            </div>
            <p>{c.systemCopy}</p>
          </div>
          {c.architectureSrc && (
            <div className="architectureFrame">
              <div className="frameBar">
                <span>{c.frameLabel}</span>
                <span>{c.frameMeta}</span>
              </div>
              <img src={c.architectureSrc} alt={c.architectureAlt ?? ""} />
            </div>
          )}
          <div className="capabilityGrid">
            {c.capabilities!.map((item) => (
              <article className="capability" key={item.index}>
                <span className="capIndex">{item.index}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <div>
                  {item.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      <section className="section darkSection" id="work">
        <div className="shell">
          <div className="sectionHeader inverse">
            <div>
              <span className="sectionNo">{c.workLabel}</span>
              <h2>
                <Lines text={c.workTitle} />
              </h2>
            </div>
            <p>{c.workCopy}</p>
          </div>
          <div className="decisionList">
            {c.workItems.map(([title, text], index) => (
              <article key={title}>
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
                <b>↗</b>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell impactSection" id="impact">
        <div className="sectionHeader">
          <div>
            <span className="sectionNo">{c.impactLabel}</span>
            <h2>
              <Lines text={c.impactTitle} />
            </h2>
          </div>
          <p>{c.impactCopy}</p>
        </div>
        <div className={`impactGrid${c.impacts.length > 3 ? " impactGridWide" : ""}`}>
          {c.impacts.map(([title, text], index) => (
            <article key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        {c.quote && (
          <blockquote>
            <p>“{c.quote}”</p>
            <span>{c.quoteLabel}</span>
          </blockquote>
        )}
      </section>

      {c.scopeItems && (
        <section className="section shell scopeSection" id="scope">
          <div className="sectionHeader">
            <div>
              <span className="sectionNo">{c.scopeLabel}</span>
              <h2>{c.scopeTitle}</h2>
            </div>
          </div>
          <ul className="scopeList">
            {c.scopeItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      )}

      <section className="section stackSection" id="stack">
        <div className="shell stackGrid">
          <div>
            <span className="sectionNo">{c.toolkitLabel}</span>
            <h2>
              <Lines text={c.toolkitTitle} />
            </h2>
            <p>{c.toolkitCopy}</p>
          </div>
          <div className="stackList">
            {c.stack.map(([category, tools]) => (
              <div key={category}>
                <span>{category}</span>
                <strong>{tools}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer>
        <div className="shell footerGrid">
          <div>
            <span className="sectionNo">{c.footerLabel}</span>
            <h2>
              <Lines text={c.footerTitle} />
            </h2>
          </div>
          <div className="footerActions">
            <a className="button light" href={c.githubUrl} target="_blank" rel="noreferrer">
              {c.github}
              <span>↗</span>
            </a>
            {c.videoUrl && c.watch && (
              <a className="button ghost" href={c.videoUrl} target="_blank" rel="noreferrer">
                {c.watch}
                <span>↗</span>
              </a>
            )}
            <NavHref className="button ghost" href={home}>
              {ui.backHome}
              <span>←</span>
            </NavHref>
          </div>
        </div>
        <div className="shell footerBottom">
          <span>{c.copyright}</span>
          <span>
            <NavHref href={home}>{ui.home}</NavHref>
            {c.id === "qseed" ? (
              <>
                {" · "}
                <NavHref href={localizePath(locale, QSEED_PATH)}>{ui.qseed}</NavHref>
              </>
            ) : (
              <>
                {" · "}
                <NavHref href={localizePath(locale, PLATFORM_PATH)}>{ui.platform}</NavHref>
                {" · "}
                <NavHref href={localizePath(locale, BACKBONE_PATH)}>{ui.backbone}</NavHref>
              </>
            )}
          </span>
          <span>© 2026 DevSmapy</span>
        </div>
      </footer>
    </main>
  );
}
