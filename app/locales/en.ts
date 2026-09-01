import type { LocaleBundle } from "../types";
import {
  BACKBONE_GITHUB,
  BACKBONE_PATH,
  PLATFORM_GITHUB,
  PLATFORM_PATH,
  PLATFORM_VIDEO,
  QSEED_GITHUB,
  QSEED_PATH,
} from "../shared";

export const en: LocaleBundle = {
  ui: {
    brandPortfolio: "DevSmapy / Portfolio",
    brandCase: "DevSmapy / Case Study",
    home: "Home",
    backHome: "Back to home",
    work: "Work",
    project: "Project",
    platform: "Platform",
    backbone: "Backbone",
    qseed: "Q-SEED",
  },
  hub: {
    heroEyebrow: "Pharmaceutical R&D · Data & AI Engineering",
    heroTitle: "Data engineering for",
    heroAccent: "computational drug discovery.",
    heroCopy:
      "Case studies on research platform architecture and large-scale molecular data operations—written from the work I owned.",
    primaryCta: "View platform case",
    secondaryCta: "View backbone case",
    workLabel: "SELECTED WORK",
    workTitle: "Two projects.",
    openCase: "Open case",
    githubLabel: "GitHub",
    projects: [
      {
        href: PLATFORM_PATH,
        githubUrl: PLATFORM_GITHUB,
        title: "AI research platform",
        summary:
          "Connected molecular generation, screening, and structural biology tools into a modular research platform with automated workflows and data quality guardrails.",
        facts: [
          ["Role", "Data & AI Engineer"],
          ["Focus", "Platform architecture & automation"],
          ["Domain", "Drug discovery & structural biology"],
        ],
      },
      {
        href: BACKBONE_PATH,
        githubUrl: BACKBONE_GITHUB,
        title: "Large-scale chemical data operations",
        summary:
          "Built the operational data layer to run Backbone extraction across 100M+ ZINC records on 100+ servers—partitioning, recovery, storage-aware archives, and SQLite delivery.",
        facts: [
          ["Role", "Data Engineer"],
          ["Scale", "100M+ records · 100+ servers"],
          ["Focus", "Batch reliability & data ops"],
        ],
      },
    ],
    personalLabel: "PERSONAL",
    personalTitle: "One research engine.",
    personalProjects: [
      {
        href: QSEED_PATH,
        githubUrl: QSEED_GITHUB,
        title: "Q-SEED",
        summary:
          "Local DuckDB warehouse for Korean and US equities, then factor analysis, backtests, and weight optimization—built to reproduce research, not to trade or broker.",
        facts: [
          ["Role", "Personal · data engineer"],
          ["Loop", "Collect → health → factor → simulate"],
          ["Stack", "DuckDB · dbt · Python"],
        ],
      },
    ],
    copyright: "DATA ENGINEERING PORTFOLIO",
  },
  platform: {
    id: "platform",
    path: PLATFORM_PATH,
    githubUrl: PLATFORM_GITHUB,
    videoUrl: PLATFORM_VIDEO,
    nav: ["Problem", "System", "Work", "Stack"],
    heroEyebrow: "Pharmaceutical R&D · Data & AI Engineering",
    heroTitle: "Research tools, connected as a",
    heroAccent: "system.",
    heroCopy:
      "An AI research platform case study for computational drug discovery—built around data engineering, workflow automation, and reusable scientific infrastructure.",
    explore: "Explore the system",
    watch: "Watch related video",
    caseLabel: "CASE STUDY / 2022–2023",
    completed: "COMPLETED",
    pipeline: ["DATA", "COMPUTE", "INSIGHT"],
    summary: [
      ["Role", "Data & AI Engineer"],
      ["Focus", "Platform architecture & automation"],
      ["Domain", "Drug discovery & structural biology"],
    ],
    heroFoot:
      "Designed to move researchers away from infrastructure friction and back toward scientific questions.",
    footTags: ["DATA ENGINEERING", "WORKFLOW AUTOMATION", "REPRODUCIBILITY"],
    contextLabel: "00 / PROBLEM",
    context:
      "Modern drug discovery rarely fails because of a single model. It slows down when data formats, research tools, and execution environments",
    contextStrong: "cannot work together.",
    systemLabel: "01 / THE SYSTEM",
    systemTitle: "Four layers.\nOne research flow.",
    systemCopy:
      "The platform separates integration, automation, scientific computation, and data management so each concern can evolve independently.",
    frameLabel: "PLATFORM ARCHITECTURE",
    frameMeta: "MODULAR · EXTENSIBLE · REUSABLE",
    architectureSrc: "/architecture.png",
    architectureAlt: "AI research platform architecture",
    capabilities: [
      {
        index: "01",
        title: "Data integration",
        text: "Harmonized heterogeneous molecular datasets and metadata into consistent, validated inputs for downstream research.",
        tags: ["Ingestion", "Standardization", "Validation"],
      },
      {
        index: "02",
        title: "Workflow automation",
        text: "Connected fragmented command-line tools into repeatable Python workflows, reducing manual handoffs across research stages.",
        tags: ["Python", "Multiprocessing", "Linux"],
      },
      {
        index: "03",
        title: "Scientific computing",
        text: "Integrated molecular generation, virtual screening, protein structure prediction, and simulation-oriented tooling.",
        tags: ["RDKit", "Scikit-learn", "PyTorch"],
      },
      {
        index: "04",
        title: "Research data management",
        text: "Organized intermediate and final outputs in queryable stores to improve traceability, reuse, and experiment consistency.",
        tags: ["SQL", "PostgreSQL", "SQLite"],
      },
    ],
    workLabel: "02 / WHAT I DID",
    workTitle: "Built for change,\nnot a single experiment.",
    workCopy:
      "Four principles shaped the platform: reduce coupling, automate recurring work, establish data quality early, and use proven tools pragmatically.",
    workItems: [
      [
        "Modular over monolithic",
        "Isolate scientific tools behind clear inputs and outputs so individual stages can evolve without destabilizing the whole workflow.",
      ],
      [
        "Automation first",
        "Treat repetitive data preparation, execution, and result handling as engineering problems—not permanent research overhead.",
      ],
      [
        "Quality at ingestion",
        "Standardize and validate data before it reaches downstream computation, keeping project-specific cleanup from spreading.",
      ],
      [
        "Integrate, don’t reinvent",
        "Build around proven scientific software and focus engineering effort on interoperability, orchestration, and usability.",
      ],
    ],
    impactLabel: "03 / IMPACT",
    impactTitle: "Infrastructure as a\nresearch multiplier.",
    impactCopy:
      "The value was not another isolated algorithm. It was a reusable foundation that reduced operational friction across computational workflows.",
    impacts: [
      [
        "Less operational toil",
        "Automated repetitive preparation, execution, and result-handling steps.",
      ],
      [
        "Consistent execution",
        "Standardized research workflows across tools, datasets, and projects.",
      ],
      [
        "Reusable foundations",
        "Made common workflow components available beyond a single research question.",
      ],
    ],
    quote: "A good AI system begins with good data engineering.",
    quoteLabel: "CORE LEARNING FROM THE PROJECT",
    toolkitLabel: "04 / TOOLKIT",
    toolkitTitle: "The stack behind\nthe science.",
    toolkitCopy: "Scientific depth supported by pragmatic data and platform engineering.",
    stack: [
      ["Programming", "Python · SQL · Bash"],
      ["Data", "Pandas · NumPy · PostgreSQL · SQLite"],
      ["Machine learning", "Scikit-learn · CatBoost · PyTorch"],
      ["Scientific computing", "RDKit · Open Babel · AutoDock Vina · PLIP · SuCOS"],
      ["Environment", "Linux · Docker · Git · Multiprocessing"],
    ],
    footerLabel: "FULL CASE STUDY",
    footerTitle: "Explore the project\nin detail.",
    github: "View GitHub repository",
    copyright: "AI RESEARCH PLATFORM · CASE STUDY",
  },
  backbone: {
    id: "backbone",
    path: BACKBONE_PATH,
    githubUrl: BACKBONE_GITHUB,
    nav: ["Problem", "Work", "Impact", "Stack"],
    heroEyebrow: "Computational drug discovery · Data engineering",
    heroTitle: "Making large-scale Backbone extraction",
    heroAccent: "operable.",
    heroCopy:
      "Operational data infrastructure to process 100M+ ZINC molecular records across 100+ compute servers—partitioning, failure recovery, storage-aware archives, and SQLite databases for downstream search.",
    explore: "See the work",
    caseLabel: "CASE STUDY / 2019–2022",
    completed: "COMPLETED",
    pipeline: ["SLICE", "RUN", "STORE"],
    summary: [
      ["Role", "Data Engineer"],
      ["Scale", "100M+ ZINC records"],
      ["Compute", "100+ servers"],
    ],
    heroFoot:
      "Built on existing Backbone extraction and search logic—I owned large-scale batch operations and database delivery.",
    footTags: ["BATCH RELIABILITY", "STORAGE-AWARE OPS", "DATA QUALITY"],
    contextLabel: "00 / PROBLEM",
    context:
      "Processing 100M+ ZINC SMILES records with an existing extractor required distributing work, verifying completion without a cluster scheduler, recovering failed partitions only, protecting shared NAS from intermediate-file I/O, and",
    contextStrong: "turning server CSVs into queryable databases.",
    workLabel: "01 / WHAT I DID",
    workTitle: "Ops that make\nbatch work finish.",
    workCopy:
      "I owned partitioning, multi-node execution, operator-centered recovery, storage-aware archival, and CSV-to-SQLite delivery.",
    workItems: [
      [
        "Multi-node batch execution",
        "Split inputs into fixed partitions, distributed them with scp, prepared identical run contexts with tmux synchronize-panes, then verified outputs via completion messages and file counts/sizes before consolidating results across 100+ servers.",
      ],
      [
        "Failure-only recovery",
        "Replaced whole-server restarts with collecting failed inputs only, tracked progress and ETA in Excel, reported batch results and the next plan, then redistributed and reran the recovery batch.",
      ],
      [
        "Storage-aware artifacts",
        "Compressed intermediates on local disks with tar.bz2 / pbzip2, treated NAS as archive destination, and transferred completed archives sequentially to limit shared I/O.",
      ],
      [
        "CSV → SQLite pipeline",
        "Cleaned outputs in Python, applied exact-row deduplication and type normalization, and loaded compound and Backbone lookup SQLite databases keyed for downstream access.",
      ],
    ],
    impactLabel: "02 / IMPACT",
    impactTitle: "Runnable at\n100M+ scale.",
    impactCopy:
      "Useful infrastructure is not only an algorithm or a scheduler. It is the operational layer that makes large-scale scientific computation executable, observable, recoverable, and safe for surrounding storage.",
    impacts: [
      [
        "Operational path at scale",
        "Established a path to process and organize 100M+ molecular records with existing scientific software.",
      ],
      [
        "Recoverable batches",
        "Isolated and reran failed partitions only, reducing avoidable reprocessing.",
      ],
      [
        "Safer shared storage",
        "Moved compression to compute-server disks and used NAS for archival rather than as a compute workspace.",
      ],
      [
        "Queryable outputs",
        "Delivered structured molecular data for later 1D molecular search and screening workflows.",
      ],
    ],
    toolkitLabel: "03 / TOOLKIT",
    toolkitTitle: "The stack behind\nthe ops.",
    toolkitCopy: "Practical tooling for batch execution, storage, and database delivery.",
    stack: [
      ["Programming & automation", "Python · Shell scripting"],
      ["Data processing", "CSV · cleaning · type normalization"],
      ["Database", "SQLite"],
      ["Compute operations", "Linux · tmux · scp · cp"],
      ["Storage operations", "tar · bzip2 · pbzip2 · NAS archival"],
      ["Reporting", "Excel"],
    ],
    footerLabel: "FULL CASE STUDY",
    footerTitle: "Explore the project\nin detail.",
    github: "View GitHub repository",
    copyright: "CHEMICAL DATA OPERATIONS · CASE STUDY",
  },
  qseed: {
    id: "qseed",
    path: QSEED_PATH,
    githubUrl: QSEED_GITHUB,
    nav: ["Problem", "System", "Work", "Stack"],
    heroEyebrow: "Personal project · Quant research engine",
    heroTitle: "Warehouse first.",
    heroAccent: "Then the strategy.",
    heroCopy:
      "Q-SEED loads market data once, checks it, and only then runs factor analysis, backtests, and portfolio weights. Cross-sectional research does not hit live APIs on every request.",
    explore: "Explore the system",
    caseLabel: "PERSONAL PROJECT / 2026",
    completed: "IN PROGRESS",
    pipeline: ["LOAD", "HEALTH", "RESEARCH"],
    summary: [
      ["Role", "Personal · data engineer"],
      ["Focus", "Warehouse-first quant research"],
      ["Domain", "Equities · factor research"],
    ],
    heroFoot:
      "Universe, hypotheses, and constraints start with me. Cursor helps implement. I review and verify before anything ships.",
    footTags: ["DUCKDB", "REPRODUCIBILITY", "LOCAL RESEARCH"],
    contextLabel: "00 / PROBLEM",
    context:
      "On-demand quote APIs cannot reproduce a cross-sectional study. For factor IC and backtests, the warehouse has to be",
    contextStrong: "the source of truth.",
    systemLabel: "01 / THE SYSTEM",
    systemTitle: "Four layers.\nOne research loop.",
    systemCopy:
      "Batch collection, health checks, factor analysis, and simulation share one DuckDB file. Each phase reads what the previous phase wrote.",
    capabilities: [
      {
        index: "01",
        title: "Collect",
        text: "FinanceDataReader for universes, yfinance in chunks into DuckDB raw_stocks with Parquet backup. Incremental updates and market-aware gap repair.",
        tags: ["DuckDB", "Parquet", "cron"],
      },
      {
        index: "02",
        title: "Health",
        text: "dbt marts for coverage, freshness, and data quality. Streamlit review UI. Analysis and local API read the warehouse—not live quotes.",
        tags: ["dbt", "Streamlit"],
      },
      {
        index: "03",
        title: "Factor",
        text: "Six built-in price factors. Cross-sectional IC and quintiles stored per factor so prior runs are not wiped on the next experiment.",
        tags: ["IC", "quintiles"],
      },
      {
        index: "04",
        title: "Simulate",
        text: "Long-short backtests with run_id provenance, then selection vs allocation: equal weight, min-volatility, and HRP on the same engine.",
        tags: ["provenance", "optimize"],
      },
    ],
    workLabel: "02 / WHAT I DID",
    workTitle: "Make the loop finish,\nthen argue with it.",
    workCopy:
      "Engineering choices that keep research reproducible: warehouse-only analysis, resumable ingestion, and runs you can cite.",
    workItems: [
      [
        "Warehouse before signals",
        "yfinance and FinanceDataReader run only in batch. Factor work, dashboards, and the local API read DuckDB.",
      ],
      [
        "Ops that resume",
        "Ticker-level last_date incremental loads, market-aware gap repair, and KR/US cron sessions with a shared write lock.",
      ],
      [
        "Runs you can cite",
        "Factor tables replace one factor at a time. Backtests keep run_id, manifest.json, and provenance metadata.",
      ],
      [
        "Human intent, AI as tool",
        "I set the universe, hypotheses, constraints, and review bar. Cursor implements from that intent. I verify outputs before merging.",
      ],
    ],
    impactLabel: "03 / IMPACT",
    impactTitle: "A loop you can\nrerun and trust.",
    impactCopy:
      "The point is not a single backtest number on a portfolio page. It is infrastructure that makes factor research inspectable and repeatable on your machine.",
    impacts: [
      [
        "Reproducible path",
        "The same CLI commands rebuild the warehouse, rerun analysis, and leave artifacts you can diff.",
      ],
      [
        "Quality before signals",
        "Coverage, freshness, and gap checks run before factor or backtest code assumes the data is clean.",
      ],
      [
        "Clear boundaries",
        "Not live trading, not broker integration, not a hosted API—local research with GitHub for deeper case studies.",
      ],
    ],
    toolkitLabel: "04 / TOOLKIT",
    toolkitTitle: "The stack behind\nthe loop.",
    toolkitCopy: "Python tooling for ingestion, transformation, analysis, and local review.",
    stack: [
      ["Language & packaging", "Python 3.11–3.12 · uv · pydantic-settings"],
      ["Ingestion & storage", "FinanceDataReader · yfinance · DuckDB · Parquet"],
      ["Transform & review", "dbt-core/dbt-duckdb · Streamlit · Plotly"],
      ["Analysis", "Pandas · SciPy · quantstats · pyportfolioopt"],
      ["Quality & deploy", "Ruff · mypy · pre-commit · Docker"],
    ],
    footerLabel: "FULL PROJECT",
    footerTitle: "Explore the engine\non GitHub.",
    github: "View GitHub repository",
    copyright: "Q-SEED · PERSONAL PROJECT",
  },
};
