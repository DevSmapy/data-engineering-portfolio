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
  projects: {
    href: string;
    githubUrl: string;
    title: string;
    summary: string;
    facts: [string, string][];
  }[];
  copyright: string;
};

export const hub: HubContent = {
  heroEyebrow: "Pharmaceutical R&D · Data & AI Engineering",
  heroTitle: "Data engineering for",
  heroAccent: "computational drug discovery.",
  heroCopy:
    "Case studies on research platform architecture and large-scale molecular data operations—written from the work I owned.",
  primaryCta: "View platform case",
  secondaryCta: "View backbone case",
  workLabel: "SELECTED WORK",
  workTitle: "Two projects.",
  projects: [
    {
      href: "/work/ai-research-platform",
      githubUrl:
        "https://github.com/DevSmapy/AI-Driven-Drug-Discovery-Pipeline-Data-Engineering-Optimization",
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
      href: "/work/backbone-infrastructure",
      githubUrl:
        "https://github.com/DevSmapy/High-Throughput-Computational-Drug-Discovery-Infrastructure",
      title: "High-throughput backbone infrastructure",
      summary:
        "Built the operational data layer to run Backbone extraction across 100M+ ZINC records on 100+ servers—partitioning, recovery, storage-aware archives, and SQLite delivery.",
      facts: [
        ["Role", "Data Engineer"],
        ["Scale", "100M+ records · 100+ servers"],
        ["Focus", "Batch reliability & data ops"],
      ],
    },
  ],
  copyright: "DATA ENGINEERING PORTFOLIO",
};

export const platform: CaseContent = {
  id: "platform",
  path: "/work/ai-research-platform",
  githubUrl:
    "https://github.com/DevSmapy/AI-Driven-Drug-Discovery-Pipeline-Data-Engineering-Optimization",
  videoUrl: "https://www.youtube.com/watch?v=dE86VRudoKY&t=60",
  nav: ["Problem", "System", "Work", "Stack"],
  heroEyebrow: "Pharmaceutical R&D · Data & AI Engineering",
  heroTitle: "Research tools, connected as a",
  heroAccent: "system.",
  heroCopy:
    "An AI research platform case study for computational drug discovery—built around data engineering, workflow automation, and reusable scientific infrastructure.",
  explore: "Explore the system",
  watch: "Watch overview",
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
};

export const backbone: CaseContent = {
  id: "backbone",
  path: "/work/backbone-infrastructure",
  githubUrl:
    "https://github.com/DevSmapy/High-Throughput-Computational-Drug-Discovery-Infrastructure",
  nav: ["Problem", "Work", "Impact", "Stack"],
  heroEyebrow: "Computational drug discovery · Data engineering",
  heroTitle: "Making large-scale Backbone extraction",
  heroAccent: "operable.",
  heroCopy:
    "Operational data infrastructure to process 100M+ ZINC molecular records across 100+ compute servers—partitioning, failure recovery, storage-aware archives, and SQLite databases for downstream search.",
  explore: "See the work",
  caseLabel: "CASE STUDY",
  completed: "COMPLETED",
  pipeline: ["SLICE", "RUN", "STORE"],
  summary: [
    ["Role", "Data Engineer"],
    ["Scale", "100M+ ZINC records"],
    ["Compute", "100+ servers"],
  ],
  heroFoot:
    "My contribution was the operational and data-engineering layer around an existing Backbone extractor—not the molecular algorithms themselves.",
  footTags: ["BATCH RELIABILITY", "STORAGE-AWARE OPS", "DATA QUALITY"],
  contextLabel: "00 / PROBLEM",
  context:
    "Processing 100M+ ZINC SMILES records with an existing extractor required distributing work, verifying completion without a cluster scheduler, recovering failed partitions only, protecting shared NAS from intermediate-file I/O, and",
  contextStrong: "turning server CSVs into queryable databases.",
  workLabel: "01 / WHAT I DID",
  workTitle: "Ops that make\nbatch work finish.",
  workCopy:
    "I owned partitioning, multi-node execution, operator-centered recovery, completion reporting, storage-aware archival, and CSV-to-SQLite delivery.",
  workItems: [
    [
      "Multi-node batch execution",
      "Split inputs into fixed partitions, distributed them from a server list with scp, prepared identical run contexts with tmux synchronize-panes, and consolidated outputs across 100+ servers.",
    ],
    [
      "Failure-only recovery",
      "Replaced whole-server restarts with collecting failed inputs, repartitioning only those, redistributing them, and rerunning with a revised completion estimate.",
    ],
    [
      "Completion checks & reporting",
      "Used completion messages and output file counts/sizes as operational signals, tracked progress in Excel, and reported batch results plus the next execution plan.",
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
  scopeLabel: "03 / SCOPE BOUNDARIES",
  scopeTitle: "What I did not own.",
  scopeItems: [
    "Development of the core 1D Scan Version3 molecular search algorithm",
    "Development of the molecular Backbone extraction algorithm",
    "Cluster scheduler or automatic retry-system implementation",
    "NAS or network-infrastructure design",
  ],
  toolkitLabel: "04 / TOOLKIT",
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
  copyright: "BACKBONE INFRASTRUCTURE · CASE STUDY",
};

export const cases = { platform, backbone } as const;
