Read `~/.agents/INSTRUCTIONS.md` for shared global rules.

## Repository conventions

- Maintain agent instructions in `AGENTS.md`.
- Keep project documentation in the repository under `docs/`.
- Store specs in `docs/specs/` and link them from relevant GitHub issues.
- Store architecture decision records in `docs/adr/`.
- Use pnpm for dependency installation, package management, and package scripts.

## Agent skills

### Issue tracker

Use GitHub Projects + Issues. Before tracker operations, read `docs/agents/issue-tracker.md`.

### Triage labels

Use five default triage labels plus backend, design, and frontend.
Before labeling issues, read `docs/agents/triage-labels.md`.

### Domain docs

Use a single-context layout. Before exploring domain concepts or architecture,
read `docs/agents/domain.md`.

## Verification

Run before handing off work:

- `pnpm check`: lint, format check, typecheck, unit tests.
- `pnpm build`: production build.
- `pnpm test:e2e`: Playwright against the production server; run `pnpm build` first.

Fixers: `pnpm lint:fix`, `pnpm format`.

Gotchas:

- Git hooks stay fast: pre-commit runs lint-staged (ESLint + Prettier on staged files); commit-msg runs commitlint (Conventional Commits). CI runs the broad checks.
- Prettier owns formatting; ESLint owns correctness. `eslint-config-prettier` disables overlapping rules.
- Vitest uses the `node` environment and matches `src/**/*.test.{ts,tsx}`. Add `jsdom` and Testing Library when the first component test lands.
- E2E specs live in `e2e/`. Add tests only for real behavior.
