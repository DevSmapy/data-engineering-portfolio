import Link from "next/link";
import { backbone, hub, platform, type CaseContent } from "./content";

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

function SiteNav({
  brandHref = "/",
  brandLabel = "DevSmapy / Portfolio",
  links,
  githubUrl,
}: {
  brandHref?: string;
  brandLabel?: string;
  links: { href: string; label: string }[];
  githubUrl?: string;
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
        {githubUrl && (
          <a className="navCta" href={githubUrl} target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
        )}
      </div>
    </nav>
  );
}

export function HubPage() {
  return (
    <main>
      <SiteNav
        links={[
          { href: "#work", label: "Work" },
          { href: hub.projects[0].href, label: "Platform" },
          { href: hub.projects[1].href, label: "Backbone" },
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
              {hub.heroTitle}
              <br />
              <em>{hub.heroAccent}</em>
            </h1>
            <p className="heroCopy">{hub.heroCopy}</p>
            <div className="heroActions">
              <NavHref className="button primary" href={hub.projects[0].href}>
                {hub.primaryCta}
                <span>→</span>
              </NavHref>
              <NavHref className="button secondary" href={hub.projects[1].href}>
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
        <div className="workGrid">
          {hub.projects.map((project, index) => (
            <article className="workCard" key={project.href}>
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
                <NavHref className="button primary" href={project.href}>
                  Open case
                  <span>→</span>
                </NavHref>
                <a className="button secondary" href={project.githubUrl} target="_blank" rel="noreferrer">
                  GitHub
                  <span>↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer>
        <div className="shell footerBottom hubFooter">
          <span>{hub.copyright}</span>
          <span>English first · Korean & Japanese coming later</span>
          <span>© 2026 DevSmapy</span>
        </div>
      </footer>
    </main>
  );
}

export function CaseStudyPage({ caseStudy }: { caseStudy: CaseContent }) {
  const c = caseStudy;
  const hasSystem = Boolean(c.systemLabel && c.capabilities);

  return (
    <main>
      <SiteNav
        brandHref="/"
        brandLabel="DevSmapy / Case Study"
        links={[
          { href: "/", label: "Home" },
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
          <p>{c.heroFoot}</p>
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
            <NavHref className="button ghost" href="/">
              Back to home
              <span>←</span>
            </NavHref>
          </div>
        </div>
        <div className="shell footerBottom">
          <span>{c.copyright}</span>
          <span>
            <NavHref href="/">Home</NavHref>
            {" · "}
            <NavHref href={platform.path}>Platform</NavHref>
            {" · "}
            <NavHref href={backbone.path}>Backbone</NavHref>
          </span>
          <span>© 2026 DevSmapy</span>
        </div>
      </footer>
    </main>
  );
}
