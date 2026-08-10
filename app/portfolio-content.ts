export type Locale = "en" | "ko" | "ja";

type Content = {
  nav: string[];
  heroEyebrow: string;
  heroTitle: string;
  heroAccent: string;
  heroCopy: string;
  explore: string;
  watch: string;
  caseLabel: string;
  completed: string;
  pipeline: string[];
  summary: [string, string][];
  heroFoot: string;
  contextLabel: string;
  context: string;
  contextStrong: string;
  systemLabel: string;
  systemTitle: string;
  systemCopy: string;
  frameLabel: string;
  frameMeta: string;
  capabilities: { index: string; title: string; text: string; tags: string[] }[];
  decisionsLabel: string;
  decisionsTitle: string;
  decisionsCopy: string;
  decisions: [string, string][];
  impactLabel: string;
  impactTitle: string;
  impactCopy: string;
  impacts: [string, string][];
  quote: string;
  quoteLabel: string;
  toolkitLabel: string;
  toolkitTitle: string;
  toolkitCopy: string;
  stack: [string, string][];
  footerLabel: string;
  footerTitle: string;
  github: string;
  copyright: string;
};

export const content: Record<Locale, Content> = {
  en: {
    nav: ["System", "Decisions", "Stack"], heroEyebrow: "Pharmaceutical R&D · Data & AI Engineering",
    heroTitle: "Research tools, connected as a", heroAccent: "system.",
    heroCopy: "An AI research platform case study for computational drug discovery—built around data engineering, workflow automation, and reusable scientific infrastructure.",
    explore: "Explore the system", watch: "Watch overview", caseLabel: "CASE STUDY / 2022–2023", completed: "COMPLETED",
    pipeline: ["DATA", "COMPUTE", "INSIGHT"], summary: [["Role", "Data & AI Engineer"], ["Focus", "Platform architecture & automation"], ["Domain", "Drug discovery & structural biology"]],
    heroFoot: "Designed to move researchers away from infrastructure friction and back toward scientific questions.",
    contextLabel: "00 / CONTEXT", context: "Modern drug discovery rarely fails because of a single model. It slows down when data formats, research tools, and execution environments", contextStrong: "cannot work together.",
    systemLabel: "01 / THE SYSTEM", systemTitle: "Four layers.\nOne research flow.", systemCopy: "The platform separates integration, automation, scientific computation, and data management so each concern can evolve independently.", frameLabel: "PLATFORM ARCHITECTURE", frameMeta: "MODULAR · EXTENSIBLE · REUSABLE",
    capabilities: [
      { index: "01", title: "Data integration", text: "Harmonized heterogeneous molecular datasets and metadata into consistent, validated inputs for downstream research.", tags: ["Ingestion", "Standardization", "Validation"] },
      { index: "02", title: "Workflow automation", text: "Connected fragmented command-line tools into repeatable Python workflows, reducing manual handoffs across research stages.", tags: ["Python", "Multiprocessing", "Linux"] },
      { index: "03", title: "Scientific computing", text: "Integrated molecular generation, virtual screening, protein structure prediction, and simulation-oriented tooling.", tags: ["RDKit", "Scikit-learn", "PyTorch"] },
      { index: "04", title: "Research data management", text: "Organized intermediate and final outputs in queryable stores to improve traceability, reuse, and experiment consistency.", tags: ["SQL", "PostgreSQL", "SQLite"] },
    ],
    decisionsLabel: "02 / ENGINEERING DECISIONS", decisionsTitle: "Built for change,\nnot a single experiment.", decisionsCopy: "Four principles shaped the platform: reduce coupling, automate recurring work, establish data quality early, and use proven tools pragmatically.",
    decisions: [["Modular over monolithic", "Isolate scientific tools behind clear inputs and outputs so individual stages can evolve without destabilizing the whole workflow."], ["Automation first", "Treat repetitive data preparation, execution, and result handling as engineering problems—not permanent research overhead."], ["Quality at ingestion", "Standardize and validate data before it reaches downstream computation, keeping project-specific cleanup from spreading."], ["Integrate, don’t reinvent", "Build around proven scientific software and focus engineering effort on interoperability, orchestration, and usability."]],
    impactLabel: "03 / WHY IT MATTERS", impactTitle: "Infrastructure as a\nresearch multiplier.", impactCopy: "The value was not another isolated algorithm. It was a reusable foundation that reduced operational friction across computational workflows.",
    impacts: [["Less operational toil", "Automated repetitive preparation, execution, and result-handling steps."], ["Consistent execution", "Standardized research workflows across tools, datasets, and projects."], ["Reusable foundations", "Made common workflow components available beyond a single research question."]],
    quote: "A good AI system begins with good data engineering.", quoteLabel: "CORE LEARNING FROM THE PROJECT",
    toolkitLabel: "04 / TOOLKIT", toolkitTitle: "The stack behind\nthe science.", toolkitCopy: "Scientific depth supported by pragmatic data and platform engineering.",
    stack: [["Programming", "Python · SQL · Bash"], ["Data", "Pandas · NumPy · PostgreSQL · SQLite"], ["Machine learning", "Scikit-learn · CatBoost · PyTorch"], ["Scientific computing", "RDKit · Open Babel · AutoDock Vina · PLIP · SuCOS"], ["Environment", "Linux · Docker · Git · Multiprocessing"]],
    footerLabel: "FULL CASE STUDY", footerTitle: "Explore the project\nin detail.", github: "View GitHub repository", copyright: "AI RESEARCH PLATFORM · CASE STUDY",
  },
  ko: {
    nav: ["시스템", "설계 판단", "기술 스택"], heroEyebrow: "제약 R&D · 데이터 & AI 엔지니어링",
    heroTitle: "연구 도구를 하나의", heroAccent: "시스템으로.",
    heroCopy: "데이터 엔지니어링, 워크플로 자동화, 재사용 가능한 과학 연구 인프라를 중심으로 구축한 AI 신약 개발 연구 플랫폼 사례입니다.",
    explore: "시스템 살펴보기", watch: "소개 영상 보기", caseLabel: "프로젝트 사례 / 2022–2023", completed: "완료",
    pipeline: ["데이터", "계산", "인사이트"], summary: [["역할", "Data & AI Engineer"], ["중점", "플랫폼 아키텍처 및 자동화"], ["분야", "신약 개발 및 구조생물학"]],
    heroFoot: "연구자가 인프라의 마찰에서 벗어나 과학적 질문에 집중할 수 있도록 설계했습니다.",
    contextLabel: "00 / 배경", context: "현대 신약 개발은 하나의 모델 때문에 느려지는 경우보다 데이터 형식, 연구 도구, 실행 환경이", contextStrong: "서로 연결되지 않을 때 느려집니다.",
    systemLabel: "01 / 시스템", systemTitle: "네 개의 계층.\n하나의 연구 흐름.", systemCopy: "통합, 자동화, 과학 계산, 데이터 관리를 분리해 각 영역이 독립적으로 발전할 수 있도록 설계했습니다.", frameLabel: "플랫폼 아키텍처", frameMeta: "모듈형 · 확장 가능 · 재사용 가능",
    capabilities: [
      { index: "01", title: "데이터 통합", text: "서로 다른 분자 데이터와 메타데이터를 일관되고 검증된 후속 연구 입력으로 표준화했습니다.", tags: ["수집", "표준화", "검증"] },
      { index: "02", title: "워크플로 자동화", text: "분절된 명령행 도구를 반복 가능한 Python 워크플로로 연결해 연구 단계 사이의 수작업을 줄였습니다.", tags: ["Python", "병렬처리", "Linux"] },
      { index: "03", title: "과학 계산", text: "분자 생성, 가상 탐색, 단백질 구조 예측, 시뮬레이션 관련 도구를 하나의 연구 흐름에 통합했습니다.", tags: ["RDKit", "Scikit-learn", "PyTorch"] },
      { index: "04", title: "연구 데이터 관리", text: "중간 및 최종 결과를 조회 가능한 저장 구조로 정리해 추적성, 재사용성, 실험 일관성을 높였습니다.", tags: ["SQL", "PostgreSQL", "SQLite"] },
    ],
    decisionsLabel: "02 / 엔지니어링 판단", decisionsTitle: "한 번의 실험이 아닌,\n변화를 위해 설계했습니다.", decisionsCopy: "결합도를 낮추고, 반복 업무를 자동화하고, 초기 데이터 품질을 확보하며, 검증된 도구를 실용적으로 활용했습니다.",
    decisions: [["모놀리식보다 모듈형", "명확한 입력과 출력 뒤에 각 연구 도구를 분리해 개별 단계가 전체 워크플로를 흔들지 않고 발전하도록 했습니다."], ["자동화 우선", "반복되는 데이터 준비, 실행, 결과 처리를 영구적인 연구 부담이 아닌 엔지니어링 문제로 다뤘습니다."], ["수집 단계의 품질", "후속 계산 전에 데이터를 표준화하고 검증해 프로젝트별 정제 작업이 확산되지 않게 했습니다."], ["재개발보다 통합", "검증된 과학 소프트웨어를 활용하고 상호운용성, 실행 흐름, 사용성에 개발 역량을 집중했습니다."]],
    impactLabel: "03 / 프로젝트 가치", impactTitle: "연구 생산성을 높이는\n인프라.", impactCopy: "가치는 또 하나의 고립된 알고리즘이 아니라, 계산 연구 전반의 운영 마찰을 줄이는 재사용 가능한 기반에 있었습니다.",
    impacts: [["반복 업무 감소", "반복적인 준비, 실행, 결과 처리 단계를 자동화했습니다."], ["일관된 실행", "도구, 데이터, 프로젝트에 걸친 연구 절차를 표준화했습니다."], ["재사용 가능한 기반", "공통 워크플로 요소를 여러 연구 과제에서 활용할 수 있게 했습니다."]],
    quote: "좋은 AI 시스템은 좋은 데이터 엔지니어링에서 시작됩니다.", quoteLabel: "프로젝트를 통해 얻은 핵심 교훈",
    toolkitLabel: "04 / 기술 스택", toolkitTitle: "연구를 움직인\n기술.", toolkitCopy: "과학적 깊이를 실용적인 데이터·플랫폼 엔지니어링으로 지원했습니다.",
    stack: [["프로그래밍", "Python · SQL · Bash"], ["데이터", "Pandas · NumPy · PostgreSQL · SQLite"], ["머신러닝", "Scikit-learn · CatBoost · PyTorch"], ["과학 계산", "RDKit · Open Babel · AutoDock Vina · PLIP · SuCOS"], ["환경", "Linux · Docker · Git · Multiprocessing"]],
    footerLabel: "전체 프로젝트", footerTitle: "GitHub에서 더 자세히\n확인해보세요.", github: "GitHub 저장소 보기", copyright: "AI 연구 플랫폼 · 프로젝트 사례",
  },
  ja: {
    nav: ["システム", "設計判断", "技術スタック"], heroEyebrow: "製薬R&D · データ & AIエンジニアリング",
    heroTitle: "研究ツールを、ひとつの", heroAccent: "システムへ。",
    heroCopy: "データエンジニアリング、ワークフロー自動化、再利用可能な科学研究基盤を中心に構築したAI創薬研究プラットフォームの事例です。",
    explore: "システムを見る", watch: "紹介動画を見る", caseLabel: "ケーススタディ / 2022–2023", completed: "完了",
    pipeline: ["データ", "計算", "知見"], summary: [["役割", "Data & AI Engineer"], ["重点", "プラットフォーム設計と自動化"], ["領域", "創薬と構造生物学"]],
    heroFoot: "研究者がインフラの摩擦から離れ、科学的な問いに集中できる環境を目指しました。",
    contextLabel: "00 / 背景", context: "現代の創薬は、一つのモデルよりも、データ形式・研究ツール・実行環境が", contextStrong: "連携できないときに停滞します。",
    systemLabel: "01 / システム", systemTitle: "4つのレイヤー。\n1つの研究フロー。", systemCopy: "統合、自動化、科学計算、データ管理を分離し、それぞれを独立して発展させられる構成にしました。", frameLabel: "プラットフォーム・アーキテクチャ", frameMeta: "モジュール型 · 拡張可能 · 再利用可能",
    capabilities: [
      { index: "01", title: "データ統合", text: "異種の分子データとメタデータを、一貫性のある検証済みの入力へ標準化しました。", tags: ["収集", "標準化", "検証"] },
      { index: "02", title: "ワークフロー自動化", text: "分断されたCLIツールを再現可能なPythonワークフローに接続し、研究工程間の手作業を削減しました。", tags: ["Python", "並列処理", "Linux"] },
      { index: "03", title: "科学計算", text: "分子生成、バーチャルスクリーニング、タンパク質構造予測、シミュレーション関連ツールを統合しました。", tags: ["RDKit", "Scikit-learn", "PyTorch"] },
      { index: "04", title: "研究データ管理", text: "中間・最終成果物を検索可能な形で整理し、追跡性、再利用性、実験の一貫性を高めました。", tags: ["SQL", "PostgreSQL", "SQLite"] },
    ],
    decisionsLabel: "02 / エンジニアリング判断", decisionsTitle: "一度の実験ではなく、\n変化のために。", decisionsCopy: "結合度を下げ、反復作業を自動化し、早期にデータ品質を確保し、実績あるツールを現実的に活用しました。",
    decisions: [["モノリスよりモジュール", "明確な入出力の背後に研究ツールを分離し、各工程が全体を不安定にせず進化できるようにしました。"], ["自動化を優先", "反復するデータ準備、実行、結果処理を恒久的な研究負担ではなく、解決すべき工学課題として扱いました。"], ["入口で品質を確保", "後続計算の前にデータを標準化・検証し、プロジェクト固有のクレンジングが広がることを防ぎました。"], ["再発明せず統合", "実績ある科学ソフトウェアを活かし、相互運用性、実行制御、使いやすさに注力しました。"]],
    impactLabel: "03 / プロジェクトの価値", impactTitle: "研究を加速する\nインフラ。", impactCopy: "価値は孤立したアルゴリズムではなく、計算研究全体の運用摩擦を減らす再利用可能な基盤にありました。",
    impacts: [["反復作業の削減", "準備、実行、結果処理の反復工程を自動化しました。"], ["一貫した実行", "ツール、データ、プロジェクトを横断する研究手順を標準化しました。"], ["再利用可能な基盤", "共通ワークフローを複数の研究テーマで活用できるようにしました。"]],
    quote: "優れたAIシステムは、優れたデータエンジニアリングから始まる。", quoteLabel: "プロジェクトから得た重要な学び",
    toolkitLabel: "04 / 技術スタック", toolkitTitle: "科学を支える\n技術。", toolkitCopy: "科学的な専門性を、実用的なデータ・プラットフォーム工学で支えました。",
    stack: [["プログラミング", "Python · SQL · Bash"], ["データ", "Pandas · NumPy · PostgreSQL · SQLite"], ["機械学習", "Scikit-learn · CatBoost · PyTorch"], ["科学計算", "RDKit · Open Babel · AutoDock Vina · PLIP · SuCOS"], ["環境", "Linux · Docker · Git · Multiprocessing"]],
    footerLabel: "完全版ケーススタディ", footerTitle: "GitHubで詳細を\nご覧ください。", github: "GitHubリポジトリを見る", copyright: "AI研究プラットフォーム · ケーススタディ",
  },
};
