# Ivan Donchenko - Personal Professional Site

A modern, bilingual personal website built with React, TypeScript, and TailwindCSS 4.

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **TailwindCSS 4** - Styling
- **React Router** - Navigation
- **Radix UI** - Accessible components
- **Lucide React** - Icons
- **React Markdown** - Content rendering
- **Biome** - Linting and formatting

## Features

- 🌓 Dark/Light theme support
- 🌍 Bilingual (English/Russian)
- 📱 Fully responsive
- ♿ Accessible components
- 📝 Markdown-based content
- 🎨 Teal & Fuchsia color scheme
- 🔤 Brygada 1918 accent font

## Getting Started

### Install dependencies:
```bash
pnpm install
```

### Run development server:
```bash
pnpm dev
```

### Build for production:
```bash
pnpm build
```

### Preview production build:
```bash
pnpm preview
```

### Format code:
```bash
pnpm format
```

### Lint code:
```bash
pnpm lint
```

## Project Structure
```
src/
├── components/     # Reusable UI components
├── pages/          # Route pages
├── content/        # Markdown content (blog, projects, about)
├── contexts/       # React contexts (theme, language)
├── hooks/          # Custom hooks
├── styles/         # Global styles
└── utils/          # Utility functions
```

## Content Management
All content is stored in Markdown files in src/content/:
- `about/` - About me pages (EN/RU)
- `projects/` - Project case studies
- `blog/` - Blog posts

### Adding New Content
#### Blog Post
Create a new `.md` file in `src/content/blog/`:
```markdown
---
title: "Your Post Title"
date: 2025-10-01
description: "Brief description"
tags: ["tag1", "tag2"]
---

Your content here...
```

#### Project
Create a new `.md` file in `src/content/projects/`:
```markdown
---
title: "Project Name"
date: 2025-10-01
description: "Project description"
cover: "/images/projects/cover.png"
---

Project details...
```

## Customization

- **Colors**: Edit `tailwind.config.ts`
- **Fonts**: Add font files to `public/fonts/`
- **Theme**: Modify `src/contexts/ThemeContext.tsx`
- **Translations**: Edit `src/contexts/LanguageContext.tsx`

## Deployment
Build the project and deploy the `dist/` folder to any static hosting service (Vercel, Netlify, GitHub Pages, etc.).

## License
© 2025 Ivan Donchenko. All rights reserved.