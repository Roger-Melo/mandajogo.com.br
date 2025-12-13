# Repository Guidelines

<critical>
- **YOU MUST:** read @package.json to understand the project techs
</critical>

## Project Structure & Module Organization

- Next.js app router lives in `src/app` for routes/layouts; shared UI sits in `src/components` (Shadcn primitives in `src/components/ui`), utilities in `src/lib`, and data helpers in `src/db`.
- Unit tests stay beside the code they cover (e.g., `component.test.tsx`); Playwright end-to-end specs live in `tests/`.

## Build, Test, and Development Commands

- `npm run dev`: start the dev server with Turbopack; preferred for daily work.
- `npm run lint`: Next.js + ESLint checks.
- `npm run test:jest`: Jest + Testing Library in watch mode.
- `npx playwright test`: run Playwright E2E specs; add `--headed` when debugging.
- `npm run build`: production build only for CI or final verification; `npm start` serves the built app when required.

## Coding Style & Naming Conventions

- Favor TypeScript (`.ts`/`.tsx`), 2-space indentation, double-quoted imports, and the `@/` alias for `src`.
- Use `function` declarations over arrow components; components are PascalCase, hooks start with `use`, utilities camelCase, files kebab-case.
- Tailwind for styling; keep classes near markup. Extend Shadcn components from `src/components/ui` instead of reimplementing primitives.
- Keep secrets in `.env` and avoid committing credentials.

## Testing Guidelines

- Jest + Testing Library drive unit/integration coverage; keep `.test.ts(x)` near the code under test and assert user-visible outcomes.
- Playwright covers user flows from `tests/`; keep specs idempotent and seed data explicitly when needed.
- Add or update tests alongside behavior changes; lean on Jest for logic, reserving Playwright for meaningful end-to-end paths.

## Commit & Pull Request Guidelines

- Conventional commits (`type(scope): summary`); keep each commit focused and lint/tests passing.
- PRs should summarize changes, link issues/context, list commands run (lint, `npm run test:jest`, `npx playwright test`), and attach UI screenshots when visuals change.

## Dependency & Environment Tips

- Install exact versions (`npm install package@x.y.z`) and keep `package-lock.json` in sync; restart `npm run dev` after dependency updates.
- Default to the dev server workflow: iterate with `npm run dev`, not `npm run build`.

## Context7

Always use context7 when I need code generation, setup or configuration steps, or library/API documentation. This means you should automatically use the Context7 MCP tools to resolve library id and get library docs without me having to explicitly ask.

## Coding Conventions

- Prefer TypeScript (`.tsx`/`.ts`), in strict mode, for new components and utilities.
- Always keep secrets in `.env`
- Always use descriptive names for consts, variables, parameters, properties, classes (etc...) that you create

## When stuck

- ask a clarifying question or propose a short plan
- do not do large speculative changes without confirmation

## Code styling

- Don't implement ESLint disable comments
  - Don't do (example): `// eslint-disable-next-line react-refresh/only-export-components`
- Put duplicated values in descriptive consts
- Use ES Modules instead of require
- Favor immutable approach & functional methods (map, filter, reduce, toSorted). Avoid mutability and loops like for, while, etc. forEach is ok if really necessary.

## Automated testing

- Write unit & integration tests.
  - Your tests must be elegant and avoid code/data repetition.
- Automated tests for the main and critical cases are crucial. Test your implementation/refactoring using the project's techs/standards.
  - **Critical flows need to be validated, otherwise your task will be invalidated**.
- If your implementation/refactoring impacts existing tests in the project, you need to update them.

## Output

Provide:

1. **Implementation summary:**

- Only after finishing the task: what was added/modified, without showing code.
- Your plan output. You don't need to show code.

2. **Step by step to manual browser tests:**

- Show me a detailed step by step of how to test the implementation/refactoring in the browser, to confirm and ensure that what was implemented/refactored works.
