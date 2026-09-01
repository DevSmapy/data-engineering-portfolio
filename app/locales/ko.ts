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

export const ko: LocaleBundle = {
  ui: {
    brandPortfolio: "DevSmapy / 포트폴리오",
    brandCase: "DevSmapy / 프로젝트 사례",
    home: "홈",
    backHome: "홈으로",
    work: "프로젝트",
    project: "개인",
    platform: "플랫폼",
    backbone: "백본",
    qseed: "Q-SEED",
  },
  hub: {
    heroEyebrow: "제약 R&D · 데이터 & AI 엔지니어링",
    heroTitle: "AI 신약 개발을 위한",
    heroAccent: "데이터 엔지니어링",
    heroCopy:
      "연구 플랫폼 아키텍처와 대규모 분자 데이터 운영에 대한 사례입니다. 제가 담당한 일을 중심으로 정리했습니다.",
    primaryCta: "플랫폼 사례 보기",
    secondaryCta: "백본 사례 보기",
    workLabel: "선정 프로젝트",
    workTitle: "두 개의 프로젝트.",
    openCase: "사례 열기",
    githubLabel: "GitHub",
    projects: [
      {
        href: PLATFORM_PATH,
        githubUrl: PLATFORM_GITHUB,
        title: "AI 연구 플랫폼",
        summary:
          "분자 생성, 스크리닝, 구조생물학 도구를 모듈형 연구 플랫폼으로 연결하고 워크플로 자동화와 데이터 품질 가드레일을 구축했습니다.",
        facts: [
          ["역할", "Data & AI Engineer"],
          ["중점", "플랫폼 아키텍처 및 자동화"],
          ["분야", "신약 개발 및 구조생물학"],
        ],
      },
      {
        href: BACKBONE_PATH,
        githubUrl: BACKBONE_GITHUB,
        title: "대규모 화합물 데이터 운영",
        summary:
          "1억 건 이상 ZINC 데이터와 100대 이상 서버에서 Backbone 추출을 돌리기 위한 운영·데이터 계층—분할, 복구, 스토리지 인식 아카이브, SQLite 적재를 담당했습니다.",
        facts: [
          ["역할", "Data Engineer"],
          ["규모", "1억+ 건 · 100+ 서버"],
          ["중점", "배치 신뢰성 및 데이터 운영"],
        ],
      },
    ],
    personalLabel: "개인 프로젝트",
    personalTitle: "하나의 연구 엔진.",
    personalProjects: [
      {
        href: QSEED_PATH,
        githubUrl: QSEED_GITHUB,
        title: "Q-SEED",
        summary:
          "한국·미국 주식 시세를 로컬 DuckDB에 적재하고, 팩터 분석·백테스트·가중치 최적화까지 검증하는 연구 엔진—재현 가능한 연구를 위해 만들었으며, 자동매매나 브로커 연동은 아닙니다.",
        facts: [
          ["역할", "Personal · data engineer"],
          ["루프", "적재 → 품질 → 팩터 → 시뮬레이션"],
          ["스택", "DuckDB · dbt · Python"],
        ],
      },
    ],
    copyright: "데이터 엔지니어링 포트폴리오",
  },
  platform: {
    id: "platform",
    path: PLATFORM_PATH,
    githubUrl: PLATFORM_GITHUB,
    videoUrl: PLATFORM_VIDEO,
    nav: ["배경", "시스템", "기여", "스택"],
    heroEyebrow: "제약 R&D · 데이터 & AI 엔지니어링",
    heroTitle: "연구 도구를 하나의",
    heroAccent: "시스템으로.",
    heroCopy:
      "데이터 엔지니어링, 워크플로 자동화, 재사용 가능한 과학 연구 인프라를 중심으로 구축한 AI 신약 개발 연구 플랫폼 사례입니다.",
    explore: "시스템 살펴보기",
    watch: "관련 영상 보기",
    caseLabel: "프로젝트 사례 / 2022–2023",
    completed: "완료",
    pipeline: ["데이터", "계산", "인사이트"],
    summary: [
      ["역할", "Data & AI Engineer"],
      ["중점", "플랫폼 아키텍처 및 자동화"],
      ["분야", "신약 개발 및 구조생물학"],
    ],
    heroFoot: "연구자가 인프라의 마찰에서 벗어나 과학적 질문에 집중할 수 있도록 설계했습니다.",
    footTags: ["데이터 엔지니어링", "워크플로 자동화", "재현성"],
    contextLabel: "00 / 배경",
    context: "현대 신약 개발은 하나의 모델 때문에 느려지는 경우보다 데이터 형식, 연구 도구, 실행 환경이",
    contextStrong: "서로 연결되지 않을 때 느려집니다.",
    systemLabel: "01 / 시스템",
    systemTitle: "네 개의 계층.\n하나의 연구 흐름.",
    systemCopy:
      "통합, 자동화, 분자 계산, 데이터 관리를 분리해 각 영역이 독립적으로 발전할 수 있도록 설계했습니다.",
    frameLabel: "플랫폼 아키텍처",
    frameMeta: "모듈형 · 확장 가능 · 재사용 가능",
    architectureSrc: "/architecture.png",
    architectureAlt: "AI 연구 플랫폼 아키텍처",
    capabilities: [
      {
        index: "01",
        title: "데이터 통합",
        text: "서로 다른 분자 데이터와 메타데이터를 일관되고 검증된 후속 연구 입력으로 표준화했습니다.",
        tags: ["수집", "표준화", "검증"],
      },
      {
        index: "02",
        title: "워크플로 자동화",
        text: "분절된 명령행 도구를 반복 가능한 Python 워크플로로 연결해 연구 단계 사이의 수작업을 줄였습니다.",
        tags: ["Python", "병렬처리", "Linux"],
      },
      {
        index: "03",
        title: "분자 계산 도구",
        text: "분자 생성, 가상 탐색, 단백질 구조 예측, 시뮬레이션 관련 도구를 하나의 연구 흐름에 통합했습니다.",
        tags: ["RDKit", "Scikit-learn", "PyTorch"],
      },
      {
        index: "04",
        title: "연구 데이터 관리",
        text: "중간 및 최종 결과를 조회 가능한 저장 구조로 정리해 추적성, 재사용성, 실험 일관성을 높였습니다.",
        tags: ["SQL", "PostgreSQL", "SQLite"],
      },
    ],
    workLabel: "02 / 내가 한 일",
    workTitle: "한 번의 실험이 아닌,\n변화를 위해 설계했습니다.",
    workCopy:
      "결합도를 낮추고, 반복 업무를 자동화하고, 초기 데이터 품질을 확보하며, 검증된 도구를 실용적으로 활용했습니다.",
    workItems: [
      [
        "유지보수하기 쉬운 모듈형 설계",
        "명확한 입력과 출력 뒤에 각 연구 도구를 분리해 개별 단계가 전체 워크플로를 흔들지 않고 발전하도록 했습니다.",
      ],
      [
        "자동화 우선",
        "반복되는 데이터 준비, 실행, 결과 처리를 영구적인 연구 부담이 아닌 엔지니어링 문제로 다뤘습니다.",
      ],
      [
        "수집 단계의 품질",
        "후속 계산 전에 데이터를 표준화하고 검증해 프로젝트별 정제 작업이 확산되지 않게 했습니다.",
      ],
      [
        "재개발보다 통합",
        "검증된 과학 소프트웨어를 활용하고 상호운용성, 실행 흐름, 사용성에 개발 역량을 집중했습니다.",
      ],
    ],
    impactLabel: "03 / 성과",
    impactTitle: "연구 생산성을 높이는\n인프라.",
    impactCopy:
      "가치는 또 하나의 고립된 알고리즘이 아니라, 계산 연구 전반의 운영 마찰을 줄이는 재사용 가능한 기반에 있었습니다.",
    impacts: [
      ["반복 업무 감소", "반복적인 준비, 실행, 결과 처리 단계를 자동화했습니다."],
      ["일관된 실행", "도구, 데이터, 프로젝트에 걸친 연구 절차를 표준화했습니다."],
      ["재사용 가능한 기반", "공통 워크플로 요소를 여러 연구 과제에서 활용할 수 있게 했습니다."],
    ],
    quote: "좋은 AI 시스템은 좋은 데이터 엔지니어링에서 시작됩니다.",
    quoteLabel: "프로젝트를 통해 얻은 핵심 교훈",
    toolkitLabel: "04 / 기술 스택",
    toolkitTitle: "연구를 움직인\n기술.",
    toolkitCopy: "과학적 깊이를 실용적인 데이터·플랫폼 엔지니어링으로 지원했습니다.",
    stack: [
      ["프로그래밍", "Python · SQL · Bash"],
      ["데이터", "Pandas · NumPy · PostgreSQL · SQLite"],
      ["머신러닝", "Scikit-learn · CatBoost · PyTorch"],
      ["분자 계산", "RDKit · Open Babel · AutoDock Vina · PLIP · SuCOS"],
      ["환경", "Linux · Docker · Git · Multiprocessing"],
    ],
    footerLabel: "전체 프로젝트",
    footerTitle: "GitHub에서 더 자세히\n확인해보세요.",
    github: "GitHub 저장소 보기",
    copyright: "AI 연구 플랫폼 · 프로젝트 사례",
  },
  backbone: {
    id: "backbone",
    path: BACKBONE_PATH,
    githubUrl: BACKBONE_GITHUB,
    nav: ["배경", "기여", "성과", "스택"],
    heroEyebrow: "AI 신약 개발 · 데이터 엔지니어링",
    heroTitle: "대규모 Backbone 추출을",
    heroAccent: "운영 가능하게.",
    heroCopy:
      "1억 건 이상 ZINC 분자 데이터를 100대 이상 계산 서버에서 처리하기 위한 운영 데이터 인프라—분할, 실패 복구, 스토리지 인식 아카이브, 후속 검색용 SQLite DB 구축을 담당했습니다.",
    explore: "작업 내용 보기",
    caseLabel: "프로젝트 사례 / 2019–2022",
    completed: "완료",
    pipeline: ["분할", "실행", "적재"],
    summary: [
      ["역할", "Data Engineer"],
      ["규모", "ZINC 1억+ 건"],
      ["계산", "서버 100+ 대"],
    ],
    heroFoot:
      "기존 Backbone 추출·검색 로직 위에서, 대규모 배치 운영과 DB화를 담당했습니다.",
    footTags: ["배치 신뢰성", "스토리지 인식 운영", "데이터 품질"],
    contextLabel: "00 / 배경",
    context: "화합물 데이터 규모는 1억 건을 넘었습니다. 막힌 지점은",
    contextStrong: "그 규모를 감당할 실행·복구·적재 체계가 없었다는 점입니다.",
    workLabel: "01 / 내가 한 일",
    workTitle: "배치가 끝나게 만드는\n운영.",
    workCopy:
      "입력 분할, 다수 서버 실행, 운영자 중심 복구, 스토리지 인식 아카이브, CSV→SQLite 적재를 담당했습니다.",
    workItems: [
      [
        "다수 서버 배치 실행",
        "입력을 고정 파티션으로 나누고 scp로 배포했으며, tmux synchronize-panes로 실행 환경을 맞춘 뒤 완료 메시지와 output 파일 수·크기로 결과를 확인하고 100대 이상 서버 출력을 모았습니다.",
      ],
      [
        "실패분만 복구",
        "서버 전체 재실행 대신 실패 input만 모아 재분할·재배포하고, Excel로 진행·ETA를 추적하며 배치 결과와 다음 계획까지 보고한 뒤 복구 배치를 돌렸습니다.",
      ],
      [
        "스토리지 인식 산출물",
        "중간 파일을 계산 서버 로컬에서 tar.bz2 / pbzip2로 압축하고, NAS는 아카이브 보관처로 두며 전송을 순차 진행했습니다.",
      ],
      [
        "CSV → SQLite 파이프라인",
        "Python으로 정제하고 완전 동일 행만 중복 제거·타입 정규화한 뒤, Compound DB와 Backbone lookup SQLite를 구축했습니다.",
      ],
    ],
    impactLabel: "02 / 성과",
    impactTitle: "1억 건 규모에서\n실행 가능한 경로.",
    impactCopy:
      "유용한 인프라는 알고리즘이나 스케줄러만이 아닙니다. 대규모 과학 계산을 실행·관찰·복구 가능하게 하고 주변 스토리지를 지키는 운영 계층이기도 합니다.",
    impacts: [
      [
        "규모에 맞는 실행 경로",
        "기존 과학 소프트웨어로 1억 건 이상 분자 데이터를 처리·정리할 수 있는 경로를 만들었습니다.",
      ],
      ["복구 가능한 배치", "실패 파티션만 다시 돌려 불필요한 재처리를 줄였습니다."],
      [
        "더 안전한 공유 스토리지",
        "압축을 계산 서버 디스크로 옮기고 NAS는 아카이브용으로 사용했습니다.",
      ],
      [
        "조회 가능한 결과",
        "이후 1D 분자 검색·스크리닝에 쓸 수 있는 구조화 분자 데이터를 전달했습니다.",
      ],
    ],
    toolkitLabel: "03 / 기술 스택",
    toolkitTitle: "운영을 움직인\n기술.",
    toolkitCopy: "배치 실행, 스토리지, DB 적재를 위한 실용 도구입니다.",
    stack: [
      ["프로그래밍·자동화", "Python · Shell scripting"],
      ["데이터 처리", "CSV · 정제 · 타입 정규화"],
      ["데이터베이스", "SQLite"],
      ["계산 운영", "Linux · tmux · scp · cp"],
      ["스토리지 운영", "tar · bzip2 · pbzip2 · NAS 아카이브"],
      ["운영 보고", "Excel"],
    ],
    footerLabel: "전체 프로젝트",
    footerTitle: "GitHub에서 더 자세히\n확인해보세요.",
    github: "GitHub 저장소 보기",
    copyright: "화합물 데이터 운영 · 프로젝트 사례",
  },
  qseed: {
    id: "qseed",
    path: QSEED_PATH,
    githubUrl: QSEED_GITHUB,
    nav: ["배경", "시스템", "기여", "스택"],
    heroEyebrow: "개인 프로젝트 · 퀀트 연구 엔진",
    heroTitle: "웨어하우스 먼저.",
    heroAccent: "그다음 전략.",
    heroCopy:
      "Q-SEED는 시세를 한 번 적재·검증한 뒤 팩터 분석, 백테스트, 포트폴리오 가중치를 실행합니다. 단면 연구는 요청마다 실시간 시세 API를 치지 않습니다.",
    explore: "시스템 살펴보기",
    caseLabel: "개인 프로젝트 / 2026",
    completed: "진행 중",
    pipeline: ["적재", "품질", "연구"],
    summary: [
      ["역할", "Personal · data engineer"],
      ["중점", "웨어하우스 우선 퀀트 연구"],
      ["분야", "주식 · 팩터 연구"],
    ],
    heroFoot:
      "유니버스, 가설, 제약은 제가 정합니다. Cursor는 구현을 돕고, 반영 전에 제가 검증합니다.",
    footTags: ["DUCKDB", "재현성", "로컬 연구"],
    contextLabel: "00 / 배경",
    context:
      "온디맨드 시세 API로는 단면 연구를 재현할 수 없습니다. 팩터 IC와 백테스트를 위해서는",
    contextStrong: "웨어하우스가 source of truth여야 합니다.",
    systemLabel: "01 / 시스템",
    systemTitle: "네 개의 계층.\n하나의 연구 루프.",
    systemCopy:
      "배치 수집, 품질 확인, 팩터 분석, 시뮬레이션이 하나의 DuckDB 파일을 공유합니다. 각 단계는 이전 단계가 쓴 데이터를 읽습니다.",
    capabilities: [
      {
        index: "01",
        title: "적재",
        text: "FinanceDataReader로 유니버스, yfinance 청크 수집 후 DuckDB raw_stocks와 Parquet 백업. 증분 갱신과 시장별 공백 복구.",
        tags: ["DuckDB", "Parquet", "cron"],
      },
      {
        index: "02",
        title: "품질",
        text: "dbt mart로 커버리지·신선도·품질 확인. Streamlit 리뷰 UI. 분석과 로컬 API는 실시간 시세가 아닌 웨어하우스를 읽습니다.",
        tags: ["dbt", "Streamlit"],
      },
      {
        index: "03",
        title: "팩터",
        text: "내장 가격 팩터 6종. 단면 IC·분위수를 팩터별로 저장해 다음 실험이 이전 결과를 지우지 않습니다.",
        tags: ["IC", "분위수"],
      },
      {
        index: "04",
        title: "시뮬레이션",
        text: "run_id provenance가 있는 롱숏 백테스트, 이후 선정과 배분—동일가중·최소분산·HRP를 같은 엔진으로.",
        tags: ["provenance", "최적화"],
      },
    ],
    workLabel: "02 / 내가 한 일",
    workTitle: "루프를 끝까지 돌리고,\n그 결과와 논쟁하기.",
    workCopy:
      "연구를 재현 가능하게 만드는 엔지니어링 선택: 웨어하우스 전용 분석, 재개 가능한 수집, 인용 가능한 실행.",
    workItems: [
      [
        "시그널보다 웨어하우스",
        "yfinance·FinanceDataReader는 배치에만 사용. 팩터·대시보드·로컬 API는 DuckDB를 읽습니다.",
      ],
      [
        "재개 가능한 운영",
        "티커별 last_date 증분, 시장별 공백 복구, KR/US cron과 공유 쓰기 락.",
      ],
      [
        "인용 가능한 실행",
        "팩터 테이블은 팩터 단위 교체. 백테스트는 run_id·manifest.json·provenance 메타데이터를 남깁니다.",
      ],
      [
        "사람의 의도, AI는 도구",
        "유니버스·가설·제약·리뷰 기준은 제가 정합니다. Cursor는 그 의도대로 구현하고, 반영 전에 제가 검증합니다.",
      ],
    ],
    impactLabel: "03 / 성과",
    impactTitle: "다시 돌리고\n신뢰할 수 있는 루프.",
    impactCopy:
      "포트폴리오 페이지에 백테스트 숫자 하나를 올리는 것이 목적이 아닙니다. 내 머신에서 팩터 연구를 검사하고 반복할 수 있는 인프라가 목적입니다.",
    impacts: [
      [
        "재현 가능한 경로",
        "같은 CLI로 웨어하우스를 재구축하고 분석을 다시 실행하며 diff할 산출물을 남깁니다.",
      ],
      [
        "시그널 전 품질",
        "팩터·백테스트 코드가 데이터가 깨끗하다고 가정하기 전에 커버리지·신선도·공백을 확인합니다.",
      ],
      [
        "명확한 경계",
        "실시간 매매·브로커 연동·호스티드 API가 아닌—로컬 연구이며, 상세 케이스는 GitHub에 있습니다.",
      ],
    ],
    toolkitLabel: "04 / 기술 스택",
    toolkitTitle: "루프를 지탱한\n기술.",
    toolkitCopy: "수집·변환·분석·로컬 리뷰를 위한 Python 도구입니다.",
    stack: [
      ["언어·패키징", "Python 3.11–3.12 · uv · pydantic-settings"],
      ["수집·저장", "FinanceDataReader · yfinance · DuckDB · Parquet"],
      ["변환·리뷰", "dbt-core/dbt-duckdb · Streamlit · Plotly"],
      ["분석", "Pandas · SciPy · quantstats · pyportfolioopt"],
      ["품질·배포", "Ruff · mypy · pre-commit · Docker"],
    ],
    footerLabel: "전체 프로젝트",
    footerTitle: "GitHub에서 엔진\n자세히 보기.",
    github: "GitHub 저장소 보기",
    copyright: "Q-SEED · 개인 프로젝트",
  },
};
