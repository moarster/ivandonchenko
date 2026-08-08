# CLAUDE.md

## Project overview

Personal professional website for Ivan Donchenko (ivandonchenko.ru).  
Stack: React 19 + TypeScript + Vite (rolldown) + TailwindCSS 4 + React Router 6.

## Structure

```
src/
  components/       # Reusable UI and layout components
    layout/         # Header, Footer, Layout wrapper
    ui/             # Button, Card, TagList, ThemeToggle, Spinner
  pages/            # Route-level page components
  contexts/         # ThemeContext, LanguageContext (custom i18n, en/ru)
  hooks/            # useTheme, useLanguage
  utils/            # frontmatter parser, date formatter, markdown helpers
  content/          # Markdown content files with lang suffixes
  styles/           # global.css with Tailwind v4 @theme config
```

## Commands

- `pnpm dev` — dev server
- `pnpm build` — type-check + production build
- `pnpm lint` — Biome linter
- `pnpm format` — Biome formatter

## Conventions

- **i18n:** Custom context-based, no external library. Translations in `LanguageContext.tsx`, longer content in `.en.md`/`.ru.md` files.
- **Styling:** TailwindCSS 4 with `@theme` in `global.css`. Primary: teal, fonts: Inter + Brygada 1918.
- **Linting:** Biome (not ESLint). Config in `biome.json`.
- **No tests:** Intentional for a project of this scale — smoke-tested via CI build.
- **Env vars:** `VITE_YANDEX_METRIKA_ID` for analytics.

## Content rules

**Source of truth for positioning:** the hh.ru resume at
`/home/ivan/Projects/cv/hh/Руководитель-разработки-IT-Lead.md` (outside this repo).
There is deliberately no strategy document inside this repository. Read the resume
before writing or editing any positioning copy.

### Presented role

- RU: "Лидер разработки". EN: "Head of Development".
- Technical leader who owns the whole vertical: client, requirements, architecture,
  breakdown and estimation, release planning, people, code review - and writes code.
- Not a single-track team lead (backend lead, frontend lead, analysis lead). The role is
  above such leads, or instead of them when there is one cross-functional team and
  someone has to own the whole result.

### The numbers formula

One formula everywhere: `15 лет в IT | 14 лет руководства командами | 14 лет разработки
на Java/Kotlin | 7 лет архитектуры | английский C1` (rendered on the site with the middot
as separator). Never "14+" or "15+". Java/Kotlin is 14 years, not 15.

### Only verified figures, always with attribution

- -30% emergency response time - АПК "Безопасный город", МЧС (Сахалин), delivered in
  8 months, team of 15
- -40% data analysis time and 15 000+ facilities - портал МДО, Минэнерго России
- -60% report preparation time - Комитет по энергетике Санкт-Петербурга
- 4000+ users in 85 regions - ИС РФС
- Awards: "Лучший ИТ-проект в ТЭК" 2016, "Проект года" Global CIO 2021

Management proofs (also verified, use them - the site under-used them historically):
merger of two teams into one of 35 people with a full stack change and 97% of the team
retained; team built from zero to 20 people as CTO; classic project management on АПК
"Безопасный город" (plan, budget, deadlines, risks, team of 15, delivered in 8 months);
a portfolio of 3-5 parallel projects and teams up to 40 people; a methodology for
assessing actual developer effort using neural networks. Teams from 5 to 40 people.

### Forbidden

- No kwork offers presented as achieved results ("-70% времени", "100->1000+ док/мин",
  "x5 throughput" and similar). They are offers, not cases.
- "5 лет Camunda в production" only. Flowable is the current 2025-2026 project - never
  attribute 5 years to it.
- Do not rewrite past roles retroactively beyond the real content of the work. Job titles
  follow the resume.
- The words "фриланс" and "фрилансер" never appear on the site.
- No "Подход к работе" / "Мои принципы" / "Ценности" blocks, and no wording like
  "прагматизм", "качество кода", "быстрый старт", "решаю бизнес-проблему, а не внедряю
  модные технологии". Test: if the phrase could be pasted unchanged onto a random
  candidate's site, it must not be here. Only what is checkable - figures, names of
  systems and clients, concrete roles and decisions.

### Targeting

- Target: roles that require both leading a team and writing code.
- Not target: pure senior IC positions; hiring processes gated on live coding.

### Typography

Normal typographic characters (curly quotes, em dashes, middots) are fine in site copy -
it is rendered text, not something retyped by hand.

## Deployment

Docker multi-stage build (node:22-alpine → nginx:stable-alpine).  
CI/CD: GitHub Actions → ghcr.io → Portainer webhook.
