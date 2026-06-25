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

## Deployment

Docker multi-stage build (node:22-alpine → nginx:stable-alpine).  
CI/CD: GitHub Actions → ghcr.io → Portainer webhook.
