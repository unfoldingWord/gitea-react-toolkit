# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Library Does

`gitea-react-toolkit` is a React component library that exposes Gitea (a self-hosted Git service) API functionality through React components and Material-UI. It provides both low-level API abstractions (`src/core/`) and high-level React components (`src/components/`) for interacting with Gitea instances.

Published to npm as `gitea-react-toolkit`. Live docs: https://gitea-react-toolkit.netlify.com/

## Commands

```bash
# Development — run Styleguidist docs server (port 6060)
yarn start

# Unit tests (Jest, runs on src/core only)
yarn test:unit

# Run a single test file
npx jest src/core/gitea-api/repos/repos.spec.js

# Run tests matching a name pattern
npx jest --testNamePattern="createRepo"

# E2E tests (Cypress)
yarn test:e2e

# Transpile to dist/ for publishing
yarn prepublishOnly

# Build static Styleguidist docs
yarn build
```

## Architecture

### Source Layout

```
src/
├── core/
│   └── gitea-api/          # Low-level Gitea REST API bindings
│       ├── http/            # Axios HTTP layer with IndexedDB caching
│       ├── authentication.ts
│       ├── users/           # User & org API calls
│       └── repos/           # Repo CRUD + contents (file) + git tree APIs
├── components/              # React UI components
│   ├── authentication/      # Login flow, AuthenticationContext
│   ├── repository/          # Single repo CRUD, RepositoryContext
│   ├── repositories/        # Repo list + search
│   ├── organizations/       # Org list
│   ├── organization/        # Single org, OrganizationContext
│   ├── file/                # File CRUD, FileContext
│   ├── tree-blob/           # Git tree/blob navigation
│   └── application-bar/     # App header / nav menus
└── index.ts                 # Re-exports everything from components + core
```

### Key Patterns

**Layered architecture:** `components/` call `core/gitea-api/` functions, which use the `http/` module (Axios + cache) to hit the Gitea REST API. Components never call Axios directly.

**Context + Hooks:** State is managed via React Context providers and custom hooks — `useAuthentication`, `useRepository`, `useOrganization`. Components consume context via these hooks rather than prop drilling.

**Caching:** The HTTP layer uses `axios-cache-adapter` backed by `localforage` (IndexedDB). Pass `{ noCache: true }` in config to bypass. Server reachability is checked via `checkIfServerOnline()` before requests.

**Mixed TypeScript/JavaScript:** `src/core/` is TypeScript (`.ts`); `src/components/` is JavaScript (`.js`). ESLint enforces strict TS rules in `.ts` files (`@typescript-eslint/explicit-function-return-type`, no `any`, etc.).

**Component documentation:** Each section has a `_readme.md` and PropTypes with JSDoc comments. Styleguidist generates live preview docs from these.

### Main Exports

`src/index.ts` re-exports everything. Key exports:

- **HTTP utilities:** `get`, `post`, `put`, `patch`, `del`, `checkIfServerOnline`, `parseError`
- **Auth:** `authenticate`, `encodeAuthentication`, `authorizationHeaders`, `LoginForm`, `useAuthentication`, `Authentication.context`
- **Repos:** `createRepo`, `readRepo`, `updateRepo`, `deleteRepo`, `forkRepo`, `searchRepos`, `Repository`, `useRepository`, `Repositories`
- **Contents (files):** `readContent`, `createContent`, `updateContent`, `deleteContent`, `File.context`
- **Users/Orgs:** `getUser`, `ensureToken`, `listOrganizations`, `Organizations`, `useOrganization`
- **Git tree:** `TreeObject`, `BlobObject`, `Tree`, `useBlob`

### Test Patterns

Tests live alongside source files (`repos.spec.js` beside `repos.ts`). They use Jest spies to mock the HTTP module rather than making real network calls. Coverage is collected by nyc/Istanbul via Babel instrumentation. CI runs `test:unit` on every push.