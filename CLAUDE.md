# CLAUDE.md

## Project overview

Personal professional website for Ivan Donchenko (ivandonchenko.ru).  
Stack: React 19 + TypeScript + Vite (rolldown) + TailwindCSS 4 + React Router 6.

## Structure

```
src/
  components/       # Reusable UI and layout components
    layout/         # Header, Footer, Layout wrapper
    ui/             # Button, Card, TagList, ThemeToggle
  pages/            # Route-level page components
  contexts/         # ThemeContext, LanguageContext (custom i18n, en/ru)
  hooks/            # useTheme, useLanguage
  utils/            # frontmatter parser, date formatter, markdown/SEO helpers
  blog/             # Git submodule (moarster/articles): article markdown + images
  seo/              # pages.json: per-route title/description, shared with the
                    # prerender script
  styles/           # global.css with Tailwind v4 @theme config
scripts/
  prerender.mjs     # Post-build: per-route HTML, sitemap.xml, robots.txt
```

## Commands

- `pnpm dev` — dev server
- `pnpm build` — type-check + production build + prerender (per-route HTML, sitemap.xml, robots.txt)
- `pnpm lint` — Biome linter
- `pnpm format` — Biome formatter

## Conventions

- **i18n:** Custom context-based, no external library. Translations in `LanguageContext.tsx`, longer content in `.en.md`/`.ru.md` files.
- **Styling:** TailwindCSS 4 with `@theme` in `global.css`. Primary: teal, fonts: Inter + Brygada 1918.
- **Linting:** Biome (not ESLint). Config in `biome.json`.
- **No tests:** Intentional for a project of this scale — smoke-tested via CI build.
- **Env vars:** `VITE_YANDEX_METRIKA_ID` for analytics.

## Content rules

**Source of truth for positioning:** the hh.ru resume sources at
`/home/ivan/Projects/cv/hh/` (outside this repo) — `cv-about-lead.md` (headline,
desired role, the "Обо мне" profile), `cv-experience.md` (RU work history),
`cv-en.md` (EN work history). There is deliberately no strategy document inside
this repository. Read the resume before writing or editing any positioning copy.

### Typography

Normal typographic characters (curly quotes, em dashes, middots) are fine in site copy -
it is rendered text, not something retyped by hand.

## Deployment

Docker multi-stage build (node:22-alpine → nginx:stable-alpine).  
CI/CD: GitHub Actions → ghcr.io → Portainer webhook.
