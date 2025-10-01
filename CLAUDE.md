# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
```bash
pnpm dev          # Start development server
pnpm build        # TypeScript check + production build
pnpm preview      # Preview production build
```

### Code Quality
```bash
pnpm lint         # Check code with Biome
pnpm format       # Format code with Biome
```

## Architecture

### Tech Stack
- **React 19** with TypeScript
- **Vite** (using rolldown-vite fork)
- **TailwindCSS 4** for styling
- **React Router** for navigation
- **Biome** for linting/formatting (not ESLint/Prettier)

### Core Application Structure

**Context-Based State Management:**
- `ThemeContext` - Manages light/dark theme with localStorage persistence and system preference detection
- `LanguageContext` - Manages bilingual (en/ru) with translations dictionary and localStorage persistence
- Both contexts wrap the entire app in `App.tsx` (ThemeProvider → LanguageProvider → BrowserRouter)

**Path Aliasing:**
- `@/*` maps to `./src/*` (configured in both `vite.config.ts` and `tsconfig.json`)
- Always use `@/` imports, not relative paths

**Content System:**
- All content stored as Markdown files in `src/content/`
- Organized by content type: `about/`, `projects/`, `cv/`, `contact/`
- Multi-language structure: `index.md` (Russian default), `index.en.md`, `index.fr.md`
- Projects have nested folders (e.g., `projects/bioinformatics/index.md`)
- Frontmatter parsed with `gray-matter`, rendered with `react-markdown`
- Content loader types defined in `src/utils/contentLoader.ts` (BlogPostMeta, ProjectMeta)

**Routing:**
- All routes defined in `App.tsx` using React Router v6
- Nested under a `<Layout />` component
- Routes: `/`, `/about`, `/cv`, `/projects`, `/blog`, `/blog/:slug`, `/contact`, `/*` (NotFound)

**Design System:**
- Primary color: Teal (#14b8a6) with full 50-900 palette
- Accent color: Fuchsia (#d946ef)
- Fonts: Inter (sans), Brygada 1918 (display/serif)
- Dark mode via class-based approach (`darkMode: 'class'` in Tailwind)
- UI components use Radix UI primitives for accessibility

### Key Patterns

**Theme Management:**
- Theme stored in localStorage as `'light'` | `'dark'`
- On mount, checks localStorage → system preference → defaults to light
- CSS class applied to `document.documentElement`

**Language/Translations:**
- Language stored in localStorage as `'en'` | `'ru'`
- Defaults to `'ru'` if not set
- Use `t(key)` function from LanguageContext for UI translations
- Content uses separate `.md` files per language

**Component Organization:**
- `components/ui/` - Reusable UI primitives (Button, Card, Spinner, ThemeToggle)
- `components/layout/` - Layout components (Header, Footer, Layout)
- `pages/` - Route components
- Use custom hooks (`useTheme`, `useLanguage`) to access contexts

## Important Notes

- Uses **Biome**, not ESLint or Prettier
- TypeScript strict mode enabled with extensive linting rules
- Package manager is **pnpm** with workspace support
- Vite uses the `rolldown-vite` fork (specified in overrides)