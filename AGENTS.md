# PROJECT KNOWLEDGE BASE

**Generated:** 2026-06-30 23:49:09 KST
**Commit:** 2d10ee5
**Branch:** main

## OVERVIEW

React 19 + TypeScript + Vite math practice game for elementary students. The project is teacher-maintained with AI help, so prefer small, readable, low-risk changes over broad architecture work.

## STRUCTURE

```text
Plus_Minus/
├── src/                 # app code, global theme, runtime assets
│   ├── App.tsx          # main game flow and most data/state
│   ├── components/      # reusable heavy UI components
│   ├── assets/          # production images referenced by the app
│   └── index.css        # Tailwind import + Spotify-like theme overrides
├── public/              # static public assets such as blocker warning image
├── tmp/                 # generated/candidate images; do not import from app code
├── dist/                # build output; do not edit by hand
├── DESIGN.md            # Spotify-inspired visual system
├── vercel.json          # deployment security headers and CSP
└── TODO.md              # draft backlog; user conversation has priority
```

## WHERE TO LOOK

| Task | Location | Notes |
|------|----------|-------|
| Product and collaboration rules | `AGENTS.md` | This file is the source of truth. |
| Current design language | `DESIGN.md`, `src/index.css` | Dark Spotify-like theme, green functional accent. |
| Game flow, stages, problem pools | `src/App.tsx` | Very large file; keep edits local and searchable. |
| Visual column calculator | `src/components/VisualCalculator.tsx` | Step generation, regroup/borrow visuals, motion timing. |
| Runtime error fallback | `src/main.tsx`, `src/components/ErrorBoundary.tsx` | Keep Korean user-facing copy gentle. |
| Reading-time lock overlay | `src/readingActivityBlocker.ts` | Injects fixed DOM overlay from public asset. |
| Production images | `src/assets/` | Use existing naming/state patterns. |
| Temporary generated images | `tmp/` | Candidates only; app code should not reference directly. |
| Deployment headers | `vercel.json` | CSP and security headers can block new remote assets/APIs. |

## CODE MAP

| Symbol | Type | Location | Refs | Role |
|--------|------|----------|------|------|
| `App` | component | `src/App.tsx` | entry | Main game shell, state, stages, rewards, problem handling. |
| `VisualCalculator` | component | `src/components/VisualCalculator.tsx` | from app | Place-value addition/subtraction visualization. |
| `ErrorBoundary` | class component | `src/components/ErrorBoundary.tsx` | `src/main.tsx` | Render error recovery UI. |
| `installReadingActivityBlocker` | function | `src/readingActivityBlocker.ts` | app/runtime | Blocks use during configured reading window. |
| `genAdd` / `genSub` | functions | `src/components/VisualCalculator.tsx` | internal | Build visual calculator step sequences. |
| `PLACE_META` / visual helpers | constants/functions | `src/components/VisualCalculator.tsx` | internal | Korean place-value labels and block rendering. |

## CONVENTIONS

- 기본 답변과 화면 문구는 한국어로 둔다.
- `npm run lint`는 ESLint가 아니라 `tsc --noEmit` 타입 확인이다.
- Tailwind CSS 4는 `@tailwindcss/vite` 플러그인과 `src/index.css`의 전역 override로 동작한다.
- Alias `@/*` maps to project root (`./*`), not only `src/*`.
- `.env.example` lists `GEMINI_API_KEY` and `APP_URL`, but confirm actual runtime usage before adding API-dependent code.
- `src/App.tsx`가 3만 줄 이상이므로 큰 기능은 작은 helper/component로 빼되, 요청 범위 밖 구조 개편은 하지 않는다.
- 새 문제 콘텐츠는 사용자가 제공한 원문과 정답을 기준으로만 넣는다.

## ANTI-PATTERNS (THIS PROJECT)

- `dist/` 수동 수정 금지.
- 앱 코드에서 `tmp/` 이미지 직접 참조 금지.
- `vercel.json` CSP를 확인하지 않고 외부 이미지, API, media endpoint를 추가하지 않는다.
- 로그인, 서버, DB, 랭킹, 결제, 채팅, 관리자 페이지를 임의로 만들지 않는다.
- 코덱스가 임의로 대량의 새 문제를 생성하지 않는다.
- 캐릭터 이미지 세트 교체 시 `default`, `attack`, `hit`, `defeat-scene` 상태를 깨지 않는다.
- 학생 오답/실패 문구에 탓하는 표현을 쓰지 않는다.

## UNIQUE STYLES

- Dark Spotify-like UI: `#121212` 계열 배경, achromatic surfaces, `#1ed760` green for primary actions only.
- Buttons are pill-shaped by default through `.spotify-app`; square/grid buttons need explicit escape classes.
- Character and stage art carry most color; decorative UI color should stay restrained.
- Elementary-student touch targets should remain large, legible, and unclipped on mobile/tablet.

## COMMANDS

```bash
npm install
npm run dev
npm run lint
npm run build
npm run preview
npm run clean
```

## NOTES

- There are no test scripts in `package.json`; verification normally means type check, build, and browser/manual QA for UI changes.
- No `.github/workflows` CI was present during this init.
- LSP tools were not available during this init; code map was built from `codegraph` plus direct file inspection.
- User conversation overrides `TODO.md` because `TODO.md` is explicitly a draft.
