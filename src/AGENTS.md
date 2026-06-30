# SRC KNOWLEDGE BASE

## OVERVIEW

`src/` contains the actual Vite/React app: one very large game shell, global theme CSS, two reusable components, runtime overlay logic, and production assets.

## STRUCTURE

```text
src/
├── App.tsx                     # main game state, data, screens, interactions
├── main.tsx                    # React root + top-level ErrorBoundary
├── index.css                   # Tailwind import + Spotify theme remapping
├── readingActivityBlocker.ts   # DOM-injected reading-time blocker
├── components/
│   ├── ErrorBoundary.tsx
│   └── VisualCalculator.tsx
└── assets/                     # production game images
```

## WHERE TO LOOK

| Task | Location | Notes |
|------|----------|-------|
| Add or adjust game stages/problems | `App.tsx` | Search for nearby unit/stage/problem arrays first. |
| Change screen layout or game copy | `App.tsx`, `index.css` | Keep Korean copy natural and student-safe. |
| Change theme behavior | `index.css` | `.spotify-app` remaps many Tailwind utility colors globally. |
| Add images used by app | `assets/` | Use role/state filename convention. |
| Change visual calculation steps | `components/VisualCalculator.tsx` | Update generator logic and rendered cards together. |
| Change top-level crash UI | `main.tsx`, `components/ErrorBoundary.tsx` | Dev mode may expose error message. |
| Change reading-time lock | `readingActivityBlocker.ts` | Public image path is `/reading-activity-warning.webp`. |

## CODE MAP

| Symbol | Type | Location | Role |
|--------|------|----------|------|
| `App` | React component | `App.tsx` | Main state machine and rendered app. |
| `installReadingActivityBlocker` | function | `readingActivityBlocker.ts` | Creates and refreshes fixed blocker overlay. |
| `ErrorBoundary` | class component | `components/ErrorBoundary.tsx` | Reusable render-error boundary. |
| `VisualCalculator` | React component | `components/VisualCalculator.tsx` | Place-value walkthrough for addition/subtraction. |

## CONVENTIONS

- Keep imports explicit with `.tsx` where existing entry files already do so.
- Prefer existing arrays/objects in `App.tsx` for content changes; do not introduce a new data layer for small edits.
- Use `src/assets` for app-ready images and keep generated candidates in `tmp` until selected.
- Preserve the global `.spotify-app` behavior when adding Tailwind classes; many slate/emerald/rounded/shadow utilities are intentionally remapped.
- Use `lucide-react` for icons when adding button/tool icons.
- TypeScript is permissive (`allowJs`, no strict flag shown), but still keep typed data shapes clear and avoid suppressions.

## ANTI-PATTERNS

- Do not import images from `tmp`.
- Do not edit generated `dist` output to fix app behavior.
- Do not make broad `App.tsx` restructuring unless explicitly requested.
- Do not hide important instructions in tiny text; primary student actions must be obvious.
- Do not add new math problems from guesswork; use user-provided content.

## VERIFICATION

```bash
npm run lint
npm run build
```

For UI changes, also run `npm run dev` and exercise the changed screen in a browser.
