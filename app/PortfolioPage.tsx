import { content, type Locale } from "./portfolio-content";

const githubUrl = "https://github.com/DevSmapy/AI-Driven-Drug-Discovery-Pipeline-Data-Engineering-Optimization";
const videoUrl = "https://www.youtube.com/watch?v=dE86VRudoKY&t=60";
const languageLinks = [{ code: "EN", href: "/" }, { code: "한국어", href: "/ko" }, { code: "日本語", href: "/ja" }];

function Lines({ text }: { text: string }) {
  return <>{text.split("\n").map((line, i) => <span key={line}>{i > 0 && <br />}{line}</span>)}</>;
}

export function PortfolioPage({ locale }: { locale: Locale }) {
  const c = content[locale];
  return (
    <main>
      <nav className="nav shell" aria-label="Primary navigation">
        <a className="brand" href="#top"><span className="brandMark">DS</span><span>DevSmapy / Case Study</span></a>
        <div className="navLinks">
          <a href="#system">{c.nav[0]}</a><a href="#decisions">{c.nav[1]}</a><a href="#stack">{c.nav[2]}</a>
          <div className="languageSwitch" aria-label="Language selector">
            {languageLinks.map((item) => <a className={(locale === "en" && item.code === "EN") || (locale === "ko" && item.code === "한국어") || (locale === "ja" && item.code === "日本語") ? "active" : ""} href={item.href} key={item.code}>{item.code}</a>)}
          </div>
          <a className="navCta" href={githubUrl} target="_blank" rel="noreferrer">GitHub ↗</a>
        </div>
      </nav>

      <section className="hero shell" id="top">
        <div className="eyebrow"><span />{c.heroEyebrow}</div>
        <div className="heroGrid">
          <div><h1>{c.heroTitle}<br /><em>{c.heroAccent}</em></h1><p className="heroCopy">{c.heroCopy}</p>
            <div className="heroActions"><a className="button primary" href="#system">{c.explore}<span>↓</span></a><a className="button secondary" href={videoUrl} target="_blank" rel="noreferrer">{c.watch}<span>↗</span></a></div>
          </div>
          <aside className="heroPanel"><div className="panelTop"><span>{c.caseLabel}</span><span className="status"><i />{c.completed}</span></div>
            <div className="pipelineMini" aria-hidden="true">{c.pipeline.map((item, index) => <span className="miniGroup" key={item}><span className="miniNode"><b>0{index + 1}</b><span>{item}</span></span>{index < 2 && <i>→</i>}</span>)}</div>
            <dl>{c.summary.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
          </aside>
        </div>
        <div className="heroFoot"><p>{c.heroFoot}</p><div><span>DATA ENGINEERING</span><span>WORKFLOW AUTOMATION</span><span>REPRODUCIBILITY</span></div></div>
      </section>

      <section className="manifesto"><div className="shell statement"><span className="sectionNo">{c.contextLabel}</span><p>{c.context} <strong>{c.contextStrong}</strong></p></div></section>

      <section className="section shell" id="system">
        <div className="sectionHeader"><div><span className="sectionNo">{c.systemLabel}</span><h2><Lines text={c.systemTitle} /></h2></div><p>{c.systemCopy}</p></div>
        <div className="architectureFrame"><div className="frameBar"><span>{c.frameLabel}</span><span>{c.frameMeta}</span></div><img src="/architecture.png" alt="AI research platform architecture" /></div>
        <div className="capabilityGrid">{c.capabilities.map((item) => <article className="capability" key={item.index}><span className="capIndex">{item.index}</span><h3>{item.title}</h3><p>{item.text}</p><div>{item.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div></article>)}</div>
      </section>

      <section className="section darkSection" id="decisions"><div className="shell">
        <div className="sectionHeader inverse"><div><span className="sectionNo">{c.decisionsLabel}</span><h2><Lines text={c.decisionsTitle} /></h2></div><p>{c.decisionsCopy}</p></div>
        <div className="decisionList">{c.decisions.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p><b>↗</b></article>)}</div>
      </div></section>

      <section className="section shell impactSection">
        <div className="sectionHeader"><div><span className="sectionNo">{c.impactLabel}</span><h2><Lines text={c.impactTitle} /></h2></div><p>{c.impactCopy}</p></div>
        <div className="impactGrid">{c.impacts.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
        <blockquote><p>“{c.quote}”</p><span>{c.quoteLabel}</span></blockquote>
      </section>

      <section className="section stackSection" id="stack"><div className="shell stackGrid"><div><span className="sectionNo">{c.toolkitLabel}</span><h2><Lines text={c.toolkitTitle} /></h2><p>{c.toolkitCopy}</p></div><div className="stackList">{c.stack.map(([category, tools]) => <div key={category}><span>{category}</span><strong>{tools}</strong></div>)}</div></div></section>

      <footer><div className="shell footerGrid"><div><span className="sectionNo">{c.footerLabel}</span><h2><Lines text={c.footerTitle} /></h2></div><div className="footerActions"><a className="button light" href={githubUrl} target="_blank" rel="noreferrer">{c.github}<span>↗</span></a><a className="button ghost" href={videoUrl} target="_blank" rel="noreferrer">{c.watch}<span>↗</span></a></div></div>
        <div className="shell footerBottom"><span>{c.copyright}</span><span>{languageLinks.map((item, index) => <span key={item.code}>{index > 0 && " · "}<a href={item.href}>{item.code}</a></span>)}</span><span>© 2026 DevSmapy</span></div>
      </footer>
    </main>
  );
}
