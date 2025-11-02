# Repository Guidelines

## Project Structure & Module Organization

Next.js 15 app routes live in `src/app`, shared UI in `src/components`, domain helpers in `src/lib`, and TypeScript contracts in `src/types`. 

Database helpers and sample fixtures sit in `src/db`, runtime assets in `public/`, and documentation media in `assets/`. 

Playwright specs reside in `tests/` (older examples in `tests-examples/`). 

Prisma schema and seeding scripts are stored in `prisma/`; keep them aligned with any data-model change.

## Build, Test, and Development Commands

- `npm run dev` — start the Turbopack dev server at http://localhost:3000.
- `npm run build` then `npm start` — generate and serve the production bundle.
- `npm run lint` — enforce Next/ESLint rules; fix violations before review.
- `npm run test:jest` — watch-mode unit/integration suite with coverage; add `CI=true` and `--runInBand` for single-pass runs.
- `npx playwright test` — execute Playwright specs; the config auto-spawns the dev server.
- `npx prisma generate` — refresh the Prisma client after editing `schema.prisma` (also runs on install).

## Dev environment tips

- Always install exact version of dependencies. Never with `^`.

## Coding Style & Naming Conventions

- TypeScript strict mode
- Use TypeScript with React function components. 
- Stick to 2-space indentation
- Double-quoted imports, and the `@/` alias when referencing `src`.
- Components and files exporting JSX should be PascalCase, hooks start with `use`, and utilities remain camelCase. 
- Styling leans on Tailwind classes—keep related markup and classes together inside the component file.

## Testing Guidelines

Jest with Testing Library is configured via `jest.config.ts` and `jest.setup.ts`; place `.test.ts(x)` files near the code they validate and keep the default coverage output intact. 

Playwright specs in `tests/*.spec.ts` should capture end-to-end flows, stay idempotent, and rely on seeded data when necessary. Call out new or updated tests in the PR description.

## Commit & Pull Request Guidelines

Follow the existing Conventional Commit pattern (`type(scope): summary`), keeping each commit focused and verified by linting and relevant tests. 

PRs should provide a short summary, link to context or issues, list the commands you ran (`npm run lint`, `npm run test:jest`, `npx playwright test`), and add UI screenshots when visuals change. 

Highlight migrations or configuration edits so reviewers can double-check them quickly.

## Database & Environment Notes

Update `prisma/schema.prisma` for schema changes and rerun `npx prisma generate` to refresh the client. 

Maintain sample data in `prisma/seed.ts`, executing it with `npx ts-node prisma/seed.ts --compiler-options '{"module":"CommonJS"}'` when fixtures need to be refreshed. 

Keep secrets in `.env`, mirror new keys in `.env.example`, and ensure any runtime toggles stay in sync with `next.config.ts`.
