# AGENTS Guidelines for This Repository

This repository contains a Next.js application. When working on the project interactively with an agent (e.g. the Codex CLI) please follow the guidelines below.

## Use the Development Server, **not** `npm run build`

* **Always use `npm run dev`** while iterating on the application. This starts Next.js in development mode with hot-reload enabled.
* **Do _not_ run `npm run build` inside the agent session.**

## Context7

Always use context7 when I need code generation, setup or configuration steps, or library/API documentation. This means you should automatically use the Context7 MCP tools to resolve library id and get library docs without me having to explicitly ask.

## Keep Dependencies in Sync

If you add or update dependencies remember to:

1. Always install exact version of the dependency. Never with `^`.
2. Update the appropriate lockfile (`package-lock.json`, `pnpm-lock.yaml`, `yarn.lock`).
3. Re-start the development server so that Next.js picks up the changes.

## Coding Conventions

- Prefer TypeScript (`.tsx`/`.ts`), in strict mode, for new components and utilities.
- Use `function` (keyword) instead of const arrow function. 
- Stick to 2-space indentation
- Double-quoted imports, and the `@/` alias when referencing `src`.
- Components and files exporting JSX/TSX should be PascalCase, hooks start with `use`, utilities remain camelCase and filenames are kebab-case. 
- Use Shadcn as component library. Its components live in `src/components/ui`
- Styling leans on Tailwind classes—keep related markup and classes together inside the component file.
- Keep secrets in `.env`

## Testing Guidelines

Jest with Testing Library is configured via `jest.config.ts` and `jest.setup.ts`; place `.test.ts(x)` files near the code they validate and keep the default coverage output intact. 

Playwright specs in `tests/*.spec.ts` should capture end-to-end flows, stay idempotent, and rely on seeded data when necessary. Call out new or updated tests in the PR description.

## Commit & Pull Request Guidelines

Follow the existing Conventional Commit pattern (`type(scope): summary`), keeping each commit focused and verified by linting and relevant tests. 

PRs should provide a short summary, link to context or issues, list the commands you ran (`npm run lint`, `npm run test:jest`, `npx playwright test`), and add UI screenshots when visuals change. 

Highlight migrations or configuration edits so reviewers can double-check them quickly.

## Commands

### Type check a single file by path
npm run tsc --noEmit path/to/file.tsx

###  Format a single file by path
npm run prettier --write path/to/file.tsx

### Lint a single file by path
npm run eslint --fix path/to/file.tsx

### Unit tests - pick one
npx jest path/to/file.test.tsx

### Full build when explicitly requested
npm run build

Note: Always lint, test, and typecheck updated files. Use project-wide build sparingly.

## When stuck
- ask a clarifying question, propose a short plan, or open a draft PR with notes
- do not push large speculative changes without confirmation

## Good and bad patterns


