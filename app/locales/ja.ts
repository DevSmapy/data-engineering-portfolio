import type { LocaleBundle } from "../types";
import {
  BACKBONE_GITHUB,
  BACKBONE_PATH,
  PLATFORM_GITHUB,
  PLATFORM_PATH,
  PLATFORM_VIDEO,
} from "../shared";

export const ja: LocaleBundle = {
  ui: {
    brandPortfolio: "DevSmapy / ポートフォリオ",
    brandCase: "DevSmapy / ケーススタディ",
    home: "ホーム",
    backHome: "ホームへ戻る",
    work: "プロジェクト",
    platform: "プラットフォーム",
    backbone: "バックボーン",
  },
  hub: {
    heroEyebrow: "製薬R&D · データ & AIエンジニアリング",
    heroTitle: "計算創薬のための",
    heroAccent: "データエンジニアリング。",
    heroCopy:
      "研究プラットフォーム設計と大規模分子データの運用に関するケーススタディです。担当した範囲を中心にまとめています。",
    primaryCta: "プラットフォーム事例を見る",
    secondaryCta: "バックボーン事例を見る",
    workLabel: "選定プロジェクト",
    workTitle: "2つのプロジェクト。",
    openCase: "事例を開く",
    githubLabel: "GitHub",
    projects: [
      {
        href: PLATFORM_PATH,
        githubUrl: PLATFORM_GITHUB,
        title: "AI研究プラットフォーム",
        summary:
          "分子生成、スクリーニング、構造生物学ツールをモジュール型研究プラットフォームへつなぎ、ワークフロー自動化とデータ品質のガードレールを構築しました。",
        facts: [
          ["役割", "Data & AI Engineer"],
          ["重点", "プラットフォーム設計と自動化"],
          ["領域", "創薬と構造生物学"],
        ],
      },
      {
        href: BACKBONE_PATH,
        githubUrl: BACKBONE_GITHUB,
        title: "大規模化合物データ運用",
        summary:
          "1億件超のZINCデータと100台以上のサーバーでBackbone抽出を回すための運用・データ層—分割、復旧、ストレージを意識したアーカイブ、SQLite化を担当しました。",
        facts: [
          ["役割", "Data Engineer"],
          ["規模", "1億+件 · 100+サーバー"],
          ["重点", "バッチ信頼性・データ運用"],
        ],
      },
    ],
    copyright: "データエンジニアリング・ポートフォリオ",
  },
  platform: {
    id: "platform",
    path: PLATFORM_PATH,
    githubUrl: PLATFORM_GITHUB,
    videoUrl: PLATFORM_VIDEO,
    nav: ["背景", "システム", "貢献", "スタック"],
    heroEyebrow: "製薬R&D · データ & AIエンジニアリング",
    heroTitle: "研究ツールを、ひとつの",
    heroAccent: "システムへ。",
    heroCopy:
      "データエンジニアリング、ワークフロー自動化、再利用可能な科学研究基盤を中心に構築したAI創薬研究プラットフォームの事例です。",
    explore: "システムを見る",
    watch: "関連動画を見る",
    caseLabel: "ケーススタディ / 2022–2023",
    completed: "完了",
    pipeline: ["データ", "計算", "知見"],
    summary: [
      ["役割", "Data & AI Engineer"],
      ["重点", "プラットフォーム設計と自動化"],
      ["領域", "創薬と構造生物学"],
    ],
    heroFoot: "研究者がインフラの摩擦から離れ、科学的な問いに集中できる環境を目指しました。",
    footTags: ["データエンジニアリング", "ワークフロー自動化", "再現性"],
    contextLabel: "00 / 背景",
    context: "現代の創薬は、一つのモデルよりも、データ形式・研究ツール・実行環境が",
    contextStrong: "連携できないときに停滞します。",
    systemLabel: "01 / システム",
    systemTitle: "4つのレイヤー。\n1つの研究フロー。",
    systemCopy:
      "統合、自動化、科学計算、データ管理を分離し、それぞれを独立して発展させられる構成にしました。",
    frameLabel: "プラットフォーム・アーキテクチャ",
    frameMeta: "モジュール型 · 拡張可能 · 再利用可能",
    architectureSrc: "/architecture.png",
    architectureAlt: "AI研究プラットフォーム・アーキテクチャ",
    capabilities: [
      {
        index: "01",
        title: "データ統合",
        text: "異種の分子データとメタデータを、一貫性のある検証済みの入力へ標準化しました。",
        tags: ["収集", "標準化", "検証"],
      },
      {
        index: "02",
        title: "ワークフロー自動化",
        text: "分断されたCLIツールを再現可能なPythonワークフローに接続し、研究工程間の手作業を削減しました。",
        tags: ["Python", "並列処理", "Linux"],
      },
      {
        index: "03",
        title: "科学計算",
        text: "分子生成、バーチャルスクリーニング、タンパク質構造予測、シミュレーション関連ツールを統合しました。",
        tags: ["RDKit", "Scikit-learn", "PyTorch"],
      },
      {
        index: "04",
        title: "研究データ管理",
        text: "中間・最終成果物を検索可能な形で整理し、追跡性、再利用性、実験の一貫性を高めました。",
        tags: ["SQL", "PostgreSQL", "SQLite"],
      },
    ],
    workLabel: "02 / 担当したこと",
    workTitle: "一度の実験ではなく、\n変化のために。",
    workCopy:
      "結合度を下げ、反復作業を自動化し、早期にデータ品質を確保し、実績あるツールを現実的に活用しました。",
    workItems: [
      [
        "モノリスよりモジュール",
        "明確な入出力の背後に研究ツールを分離し、各工程が全体を不安定にせず進化できるようにしました。",
      ],
      [
        "自動化を優先",
        "反復するデータ準備、実行、結果処理を恒久的な研究負担ではなく、解決すべき工学課題として扱いました。",
      ],
      [
        "入口で品質を確保",
        "後続計算の前にデータを標準化・検証し、プロジェクト固有のクレンジングが広がることを防ぎました。",
      ],
      [
        "再発明せず統合",
        "実績ある科学ソフトウェアを活かし、相互運用性、実行制御、使いやすさに注力しました。",
      ],
    ],
    impactLabel: "03 / 成果",
    impactTitle: "研究を加速する\nインフラ。",
    impactCopy:
      "価値は孤立したアルゴリズムではなく、計算研究全体の運用摩擦を減らす再利用可能な基盤にありました。",
    impacts: [
      ["反復作業の削減", "準備、実行、結果処理の反復工程を自動化しました。"],
      ["一貫した実行", "ツール、データ、プロジェクトを横断する研究手順を標準化しました。"],
      ["再利用可能な基盤", "共通ワークフローを複数の研究テーマで活用できるようにしました。"],
    ],
    quote: "優れたAIシステムは、優れたデータエンジニアリングから始まる。",
    quoteLabel: "プロジェクトから得た重要な学び",
    toolkitLabel: "04 / 技術スタック",
    toolkitTitle: "科学を支える\n技術。",
    toolkitCopy: "科学的な専門性を、実用的なデータ・プラットフォーム工学で支えました。",
    stack: [
      ["プログラミング", "Python · SQL · Bash"],
      ["データ", "Pandas · NumPy · PostgreSQL · SQLite"],
      ["機械学習", "Scikit-learn · CatBoost · PyTorch"],
      ["科学計算", "RDKit · Open Babel · AutoDock Vina · PLIP · SuCOS"],
      ["環境", "Linux · Docker · Git · Multiprocessing"],
    ],
    footerLabel: "完全版ケーススタディ",
    footerTitle: "GitHubで詳細を\nご覧ください。",
    github: "GitHubリポジトリを見る",
    copyright: "AI研究プラットフォーム · ケーススタディ",
  },
  backbone: {
    id: "backbone",
    path: BACKBONE_PATH,
    githubUrl: BACKBONE_GITHUB,
    nav: ["背景", "貢献", "成果", "スタック"],
    heroEyebrow: "計算創薬 · データエンジニアリング",
    heroTitle: "大規模Backbone抽出を",
    heroAccent: "運用可能に。",
    heroCopy:
      "1億件超のZINC分子データを100台以上の計算サーバーで処理するための運用データインフラ—分割、失敗復旧、ストレージを意識したアーカイブ、後続検索向けSQLite DB構築を担当しました。",
    explore: "担当内容を見る",
    caseLabel: "ケーススタディ / 2019–2022",
    completed: "完了",
    pipeline: ["分割", "実行", "格納"],
    summary: [
      ["役割", "Data Engineer"],
      ["規模", "ZINC 1億+件"],
      ["計算", "サーバー 100+台"],
    ],
    heroFoot:
      "既存のBackbone抽出・検索ロジックの上で、大規模バッチ運用とDB化を担当しました。",
    footTags: ["バッチ信頼性", "ストレージ意識の運用", "データ品質"],
    contextLabel: "00 / 背景",
    context:
      "既存抽出器で1億件超のZINC SMILESを処理するには、作業を分散し、クラスタースケジューラーなしで完了を確認し、失敗パーティションだけを復旧し、中間ファイルI/Oから共有NASを守り、",
    contextStrong: "サーバーCSVを検索可能なDBへ変える必要がありました。",
    workLabel: "01 / 担当したこと",
    workTitle: "バッチを終わらせる\n運用。",
    workCopy:
      "入力分割、多数サーバー実行、オペレーター中心の復旧、ストレージ意識のアーカイブ、CSV→SQLite化を担当しました。",
    workItems: [
      [
        "多数サーバーでのバッチ実行",
        "入力を固定パーティションに分けscpで配布し、tmux synchronize-panesで実行環境を揃え、完了メッセージとoutputファイル数・サイズで結果を確認したうえで100台以上の出力を集約しました。",
      ],
      [
        "失敗分のみの復旧",
        "サーバー全体の再実行ではなく失敗inputだけを集め再分割・再配布し、Excelで進捗とETAを追い、バッチ結果と次計画を報告したうえで復旧バッチを回しました。",
      ],
      [
        "ストレージを意識した成果物",
        "中間ファイルを計算サーバーのローカルでtar.bz2 / pbzip2圧縮し、NASをアーカイブ保管先として順次転送しました。",
      ],
      [
        "CSV → SQLiteパイプライン",
        "Pythonで整備し、完全一致行のみ重複除去・型正規化したうえでCompound DBとBackbone lookup SQLiteを構築しました。",
      ],
    ],
    impactLabel: "02 / 成果",
    impactTitle: "1億件規模で\n実行できる道筋。",
    impactCopy:
      "有用なインフラはアルゴリズムやスケジューラーだけではありません。大規模科学計算を実行・観測・復旧可能にし、周辺ストレージを守る運用層でもあります。",
    impacts: [
      [
        "規模に耐える実行経路",
        "既存の科学ソフトウェアで1億件超の分子データを処理・整理できる経路を作りました。",
      ],
      ["復旧可能なバッチ", "失敗パーティションだけを再実行し、不要な再処理を減らしました。"],
      [
        "より安全な共有ストレージ",
        "圧縮を計算サーバーのディスクへ移し、NASはアーカイブ用途に使いました。",
      ],
      [
        "検索可能な成果",
        "後続の1D分子検索・スクリーニングに使える構造化分子データを届けました。",
      ],
    ],
    toolkitLabel: "03 / 技術スタック",
    toolkitTitle: "運用を支えた\n技術。",
    toolkitCopy: "バッチ実行、ストレージ、DB化のための実用ツールです。",
    stack: [
      ["プログラミング・自動化", "Python · Shell scripting"],
      ["データ処理", "CSV · 整備 · 型正規化"],
      ["データベース", "SQLite"],
      ["計算運用", "Linux · tmux · scp · cp"],
      ["ストレージ運用", "tar · bzip2 · pbzip2 · NASアーカイブ"],
      ["運用報告", "Excel"],
    ],
    footerLabel: "完全版ケーススタディ",
    footerTitle: "GitHubで詳細を\nご覧ください。",
    github: "GitHubリポジトリを見る",
    copyright: "化合物データ運用 · ケーススタディ",
  },
};
