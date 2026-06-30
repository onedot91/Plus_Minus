# COMPONENTS KNOWLEDGE BASE

## OVERVIEW

`src/components/` holds the reusable error boundary and the large visual place-value calculator. Most ordinary game flow still lives in `src/App.tsx`.

## WHERE TO LOOK

| Task | Location | Notes |
|------|----------|-------|
| Render crash fallback around a tree | `ErrorBoundary.tsx` | Class component with optional `fallbackRender` and `resetKey`. |
| Customize top-level fallback UI | `../main.tsx` | Uses `ErrorBoundary` with a richer Korean fallback. |
| Addition/subtraction step logic | `VisualCalculator.tsx` | `genAdd`, `genSub`, `pushStep`, pruning helpers. |
| Place-value labels and colors | `VisualCalculator.tsx` | `PLACE_META`, tone maps, block components. |
| Animation timing | `VisualCalculator.tsx` | Lock/delay constants near top of file. |
| Compact calculator layout | `VisualCalculator.tsx` | Compact board/card helpers live in the same file. |

## CONVENTIONS

- `VisualCalculator.tsx` keeps step data, generator logic, and rendering helpers together; change all affected layers in one pass.
- Preserve `VisualControlSound` values (`step`, `regroup`, `borrow`, `resolve`) because callers can coordinate sound with step phase.
- Problem parsing expects text like `number + number` or `number - number`; changing copy format can affect calculator behavior.
- Motion uses `motion/react` and shared spring/ease constants; avoid ad hoc animation constants unless the local timing needs it.
- Error UI copy should stay short, Korean, and recovery-oriented.

## ANTI-PATTERNS

- Do not add `as any`, `@ts-ignore`, or type suppressions for visual-step shape mismatches.
- Do not change regroup/borrow math without checking both `genAdd` and `genSub` rendered behavior.
- Do not remove `ErrorBoundary` reset behavior; `resetKey` is the existing recovery hook.
- Do not introduce unrelated design systems inside components; inherit `src/index.css` and existing Tailwind style.

## VERIFICATION

```bash
npm run lint
npm run build
```

For calculator changes, manually run addition and subtraction cases that require carrying/borrowing.
