# Workspace

## Overview

Full-stack web development startup portfolio website. A recruiter-targeted portfolio with bold dark UI, neon accents, animated pages, and an interactive "Neural Architecture" skills constellation. Contact form connects to Express backend.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **Frontend**: React + Vite (artifacts/portfolio) — dark neon theme, framer-motion animations
- **API framework**: Express 5 (artifacts/api-server)
- **Database**: PostgreSQL + Drizzle ORM (no tables used yet)
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Portfolio Pages

- `/` — Home: Hero with animated text, "What We Do", skills/projects teaser
- `/about` — About: Developer story with scroll animations
- `/projects` — Projects: Animated project cards with tech stack badges
- `/contact` — Contact: Working form using useSubmitContact mutation hook
- `/skills` — WOW Section: Interactive "Neural Architecture" constellation (glowing skill nodes + animated connection lines)

## API Endpoints

- `GET /api/healthz` — health check
- `POST /api/contact` — contact form submission (returns success message)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
