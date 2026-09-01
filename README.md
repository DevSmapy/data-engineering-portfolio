# Data Engineering Portfolio

Portfolio website for Yongkyun Lee's data engineering work in computational
drug discovery. Available in English, Korean, and Japanese.

## Routes

### English
- `/` — hub (Platform featured first, then Backbone; personal project below)
- `/work/ai-research-platform` — AI research platform case study
- `/work/backbone-infrastructure` — high-throughput Backbone infrastructure case study
- `/project/q-seed` — Q-SEED personal quant research engine

### Korean
- `/ko`
- `/ko/work/ai-research-platform`
- `/ko/work/backbone-infrastructure`
- `/ko/project/q-seed`

### Japanese
- `/ja`
- `/ja/work/ai-research-platform`
- `/ja/work/backbone-infrastructure`
- `/ja/project/q-seed`

## Prerequisites

- Node.js `>=22.13.0`

## Quick Start

```bash
npm install
npm run dev
npm run build
```

## Commands

- `npm run dev`: start the local development server
- `npm run build`: create a production build
- `npm run lint`: run static checks
- `npm test`: build and verify hub + case routes across locales

## Deployment

The production site is hosted on Vercel. Pushes to `main` trigger production
deployments, while other branches and pull requests receive preview deployments.

[View the live portfolio](https://portfolio-site-beta-blush-81.vercel.app/)

## Related repositories

- [AI Research Platform](https://github.com/DevSmapy/AI-Driven-Drug-Discovery-Pipeline-Data-Engineering-Optimization)
- [High-Throughput Backbone Infrastructure](https://github.com/DevSmapy/High-Throughput-Computational-Drug-Discovery-Infrastructure)
- [Q-SEED](https://github.com/DevSmapy/Q-SEED)
