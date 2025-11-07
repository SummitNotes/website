# Summit AI Notes Landing Site (Astro)

This is the landing site for Summit AI Notes, built with Astro for optimal performance and simplicity.

## Tech Stack

- **Astro** - Static site generator with islands architecture
- **React** - For interactive components (islands)
- **Tailwind CSS v4** - Styling with modern CSS
- **MDX** - Documentation with Content Collections
- **shadcn/ui** - Component library (Radix UI primitives)
- **Lucide React** - Icon library

## Project Structure

```
/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── ui/         # shadcn/ui components
│   │   ├── HeroSection.tsx
│   │   └── FeaturesSection.tsx
│   ├── content/        # MDX documentation
│   │   ├── config.ts   # Content Collections schema
│   │   └── docs/       # Documentation files
│   │       ├── settings/
│   │       └── setup/
│   ├── layouts/        # Astro layouts
│   │   └── Layout.astro
│   ├── lib/            # Utilities
│   │   └── utils.ts
│   ├── pages/          # File-based routing
│   │   ├── index.astro
│   │   ├── support.astro
│   │   ├── privacy.astro
│   │   └── docs/
│   │       ├── index.astro
│   │       └── [...slug].astro
│   └── styles/
│       └── global.css  # Global styles + Tailwind
└── astro.config.mjs    # Astro configuration
```

## Development

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:4321)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Pages

- `/` - Landing page with hero and features
- `/support` - Support and FAQ page
- `/privacy` - Privacy policy
- `/docs` - Documentation index
- `/docs/settings/llm` - LLM configuration guide
- `/docs/setup/lmstudio` - LM Studio setup guide
- `/docs/setup/cloud-providers` - Cloud provider setup guide

## Adding Documentation

1. Create a new MDX file in `src/content/docs/[category]/`
2. Add frontmatter with title, description, category, and order
3. Write your documentation in MDX format
4. The page will automatically appear in the docs navigation

Example:

```mdx
---
title: "My Guide"
description: "A helpful guide"
category: "guides"
order: 1
---

# My Guide

Content goes here...
```

## Deployment

The site is fully static and can be deployed to:

- **Vercel**: `vercel deploy`
- **Netlify**: Connect repository and build
- **GitHub Pages**: Use `gh-pages` workflow
- **Any static host**: Upload `dist/` folder

## Migration from Next.js

This site was migrated from Next.js to Astro for:

- **Simplicity**: Static site generation without server complexity
- **Performance**: Smaller bundle sizes (~70% reduction)
- **Better DX**: File-based routing, Content Collections for docs
- **Cost**: Zero runtime costs (fully static)

All existing components, styles, and content were preserved during migration.

## Notes

- React components use `client:load` directive for hydration
- Path alias `@/` points to `src/`
- Tailwind CSS v4 uses `@import` syntax
- Dark mode supported via CSS variables
- All documentation is type-safe via Content Collections
