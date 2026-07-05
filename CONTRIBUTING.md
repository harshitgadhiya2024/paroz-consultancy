# Contributing to Paroz Consultancy

## Prerequisites

- Node.js 18+, npm 9+
- PostgreSQL or MongoDB (confirm with tech lead)

## Setup

```bash
# Frontend (React / Next.js)
cd frontend && npm install

# Backend (Node.js / Express)
cd backend && npm install

# Copy env files and fill in values
cp frontend/.env.example frontend/.env.local
cp backend/.env.example backend/.env
```

## Dev Servers

```bash
# Terminal 1 — API (http://localhost:4000)
cd backend && npm run dev

# Terminal 2 — Frontend (http://localhost:3000)
cd frontend && npm run dev
```

## Tests

```bash
cd backend  && npm test
cd frontend && npm test
```

## Lint & Format

```bash
npm run lint       # check
npm run lint:fix   # auto-fix
```

ESLint + Prettier are enforced via pre-commit hooks — do not bypass with `--no-verify`.

## Pull Requests

1. Branch from `main`: `git checkout -b feat/your-feature`
2. Ensure all tests pass before opening a PR.
3. Include a clear description of what changed and why.

## Questions?

Open a GitHub issue or ask in the team chat.
