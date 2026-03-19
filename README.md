# Todo App

System zarządzania zadaniami - monorepo z frontendem (React) i backendem (Spring Boot + Keycloak).

## Struktura

- `frontend/` - React 19 + Vite + TypeScript + Tailwind CSS v4
- `backend/` - Spring Boot (placeholder)
- `docs/` - Shared API contract (OpenAPI)

## Quick Start

```bash
cd frontend
cp .env.example .env
pnpm install
pnpm orval       # generate API hooks from OpenAPI spec
pnpm dev         # start dev server
```

## Tech Stack (Frontend)

- React 19, Vite, TypeScript
- Tailwind CSS v4
- TanStack Query v5 (Orval-generated hooks)
- React Router v7
- React Hook Form + Zod
- keycloak-js (auth)
- motion, Sonner, Lucide React
