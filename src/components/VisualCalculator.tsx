import React, { useEffect, useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react';
import { AnimatePresence, LayoutGroup, motion } from 'motion/react';

type PlaceKey = 'h' | 't' | 'o';
type FocusKey = PlaceKey | 'all' | 'none';
type StepPhase =
  | 'intro'
  | 'group'
  | 'regroup-source'
  | 'regroup-target'
  | 'borrow-source'
  | 'borrow-target'
  | 'remove'
  | 'place-complete'
  | 'complete';
type CellValue = number | null;
type BlockTone = 'base' | 'partner' | 'result' | 'remove' | 'accent';
type ActionTone = 'neutral' | 'focus' | 'success' | 'warning' | 'danger';

interface VisualStep {
  title: string;
  detail: string;
  focus: FocusKey;
  phase: StepPhase;
  h1: number;
  t1: number;
  o1: number;
  h2: number;
  t2: number;
  o2: number;
  hc: number;
  tc: number;
  hcPos: PlaceKey;
  tcPos: PlaceKey;
  borrowH: number;
  borrowT: number;
  borrowHPos: PlaceKey;
  borrowTPos: PlaceKey;
  hr: CellValue;
  tr: CellValue;
  or: CellValue;
  removeH: number;
  removeT: number;
  removeO: number;
  crossH: boolean;
  crossT: boolean;
  thousands: number;
}

interface VisualCalculatorProps {
  problemText: string;
  onControlSound?: () => void;
}

interface ActionCardData {
  badge: string;
  title: string;
  detail: string;
  tone: ActionTone;
  from?: { place: PlaceKey; count: number };
  to?: { place: PlaceKey; count: number };
  preview?: { place: PlaceKey; count: number; tone?: BlockTone };
}

interface BlockVisualItem {
  id: string;
  tone?: BlockTone;
}

interface SimplePlacePools {
  baseIds: string[];
  partnerIds: string[];
}

interface SimplePlaceVisual {
  topItems: BlockVisualItem[];
  middleItems: BlockVisualItem[];
  bottomItems: BlockVisualItem[];
}

const PLACE_ORDER: PlaceKey[] = ['h', 't', 'o'];

const PLACE_META: Record<
  PlaceKey,
  {
    label: string;
    fullLabel: string;
    lessonHint: string;
    cardBase: string;
    cardActive: string;
    kicker: string;
    actionBg: string;
    block: Record<BlockTone, string>;
    emptyTone: string;
    blockShape: string;
    gridClass: string;
  }
> = {
  h: {
    label: '백',
    fullLabel: '백의 자리',
    lessonHint: '큰 정사각형 1개는 100을 뜻해요.',
    cardBase:
      'border-sky-500/25 bg-[linear-gradient(180deg,rgba(8,47,73,0.42),rgba(15,23,42,0.9))]',
    cardActive: 'ring-2 ring-sky-300/65 shadow-[0_0_24px_rgba(56,189,248,0.18)]',
    kicker: 'text-sky-200',
    actionBg: 'border-sky-400/25 bg-sky-500/10',
    block: {
      base: 'border-sky-200/70 bg-sky-400/88 shadow-[0_8px_16px_rgba(14,165,233,0.22)]',
      partner: 'border-sky-100/45 bg-sky-300/55',
      result: 'border-cyan-100/80 bg-cyan-300/92 shadow-[0_10px_22px_rgba(34,211,238,0.22)]',
      remove: 'border-rose-200/70 bg-rose-400/90 shadow-[0_10px_20px_rgba(244,63,94,0.18)]',
      accent: 'border-white/80 bg-white/92 shadow-[0_10px_22px_rgba(255,255,255,0.18)]',
    },
    emptyTone: 'border-sky-200/12 bg-sky-950/18 text-sky-100/30',
    blockShape: 'h-5 w-5 rounded-md md:h-6 md:w-6',
    gridClass: 'grid-cols-4',
  },
  t: {
    label: '십',
    fullLabel: '십의 자리',
    lessonHint: '긴 막대 1개는 10을 뜻해요.',
    cardBase:
      'border-emerald-500/25 bg-[linear-gradient(180deg,rgba(6,78,59,0.36),rgba(15,23,42,0.9))]',
    cardActive: 'ring-2 ring-emerald-300/65 shadow-[0_0_24px_rgba(52,211,153,0.18)]',
    kicker: 'text-emerald-200',
    actionBg: 'border-emerald-400/25 bg-emerald-500/10',
    block: {
      base: 'border-emerald-200/70 bg-emerald-400/88 shadow-[0_8px_16px_rgba(16,185,129,0.2)]',
      partner: 'border-emerald-100/45 bg-emerald-300/52',
      result: 'border-lime-100/80 bg-lime-300/92 shadow-[0_10px_22px_rgba(163,230,53,0.18)]',
      remove: 'border-rose-200/70 bg-rose-400/90 shadow-[0_10px_20px_rgba(244,63,94,0.18)]',
      accent: 'border-white/80 bg-white/92 shadow-[0_10px_22px_rgba(255,255,255,0.18)]',
    },
    emptyTone: 'border-emerald-200/12 bg-emerald-950/18 text-emerald-100/30',
    blockShape: 'h-8 w-[10px] rounded-full md:h-9 md:w-3',
    gridClass: 'grid-cols-6',
  },
  o: {
    label: '일',
    fullLabel: '일의 자리',
    lessonHint: '작은 큐브 1개는 1을 뜻해요.',
    cardBase:
      'border-amber-500/25 bg-[linear-gradient(180deg,rgba(120,53,15,0.28),rgba(15,23,42,0.9))]',
    cardActive: 'ring-2 ring-amber-300/65 shadow-[0_0_24px_rgba(251,191,36,0.2)]',
    kicker: 'text-amber-200',
    actionBg: 'border-amber-400/25 bg-amber-500/10',
    block: {
      base: 'border-amber-200/80 bg-amber-300/95 shadow-[0_8px_16px_rgba(251,191,36,0.2)]',
      partner: 'border-amber-100/45 bg-amber-300/58',
      result: 'border-yellow-100/90 bg-yellow-200/95 shadow-[0_10px_22px_rgba(253,224,71,0.18)]',
      remove: 'border-rose-200/70 bg-rose-400/92 shadow-[0_10px_20px_rgba(244,63,94,0.18)]',
      accent: 'border-white/80 bg-white/92 shadow-[0_10px_22px_rgba(255,255,255,0.18)]',
    },
    emptyTone: 'border-amber-200/12 bg-amber-950/18 text-amber-100/30',
    blockShape: 'h-3.5 w-3.5 rounded-[4px] md:h-[13px] md:w-[13px]',
    gridClass: 'grid-cols-5',
  },
};

const PHASE_META: Record<StepPhase, { label: string; tone: string }> = {
  intro: { label: '준비', tone: 'border-slate-500/30 bg-slate-800/80 text-slate-200' },
  group: { label: '모으기', tone: 'border-blue-400/30 bg-blue-500/12 text-blue-100' },
  'regroup-source': { label: '묶기', tone: 'border-amber-400/30 bg-amber-500/14 text-amber-100' },
  'regroup-target': { label: '올리기', tone: 'border-emerald-400/30 bg-emerald-500/14 text-emerald-100' },
  'borrow-source': { label: '풀기 준비', tone: 'border-rose-400/30 bg-rose-500/14 text-rose-100' },
  'borrow-target': { label: '풀기', tone: 'border-orange-400/30 bg-orange-500/14 text-orange-100' },
  remove: { label: '빼기', tone: 'border-rose-400/30 bg-rose-500/14 text-rose-100' },
  'place-complete': { label: '정리', tone: 'border-emerald-400/30 bg-emerald-500/14 text-emerald-100' },
  complete: { label: '완료', tone: 'border-yellow-400/30 bg-yellow-500/14 text-yellow-100' },
};

const ACTION_TONE: Record<ActionTone, string> = {
  neutral: 'border-slate-600/45 bg-slate-900/75 text-slate-200',
  focus: 'border-blue-400/35 bg-blue-500/12 text-blue-100',
  success: 'border-emerald-400/35 bg-emerald-500/12 text-emerald-100',
  warning: 'border-amber-400/35 bg-amber-500/12 text-amber-100',
  danger: 'border-rose-400/35 bg-rose-500/12 text-rose-100',
};

function clampCount(value: number) {
  return Math.max(0, value);
}

function getDigit(value: number, place: PlaceKey) {
  if (place === 'h') return Math.floor(value / 100);
  if (place === 't') return Math.floor((value % 100) / 10);
  return value % 10;
}

function splitDigits4(value: number): Array<number | null> {
  return String(Math.max(0, value))
    .padStart(4, ' ')
    .split('')
    .map((digit) => (digit === ' ' ? null : Number(digit)));
}

function parseProblem(problemText: string) {
  const match = problemText.match(/(\d+)\s*([+-])\s*(\d+)/);

  if (!match) {
    return { n1: 0, op: '+' as const, n2: 0 };
  }

  return {
    n1: Number(match[1]),
    op: match[2] as '+' | '-',
    n2: Number(match[3]),
  };
}

function getPlaceValue(step: VisualStep, place: PlaceKey, group: 'first' | 'second' | 'result' | 'remove') {
  if (group === 'first') return place === 'h' ? step.h1 : place === 't' ? step.t1 : step.o1;
  if (group === 'second') return place === 'h' ? step.h2 : place === 't' ? step.t2 : step.o2;
  if (group === 'remove') return place === 'h' ? step.removeH : place === 't' ? step.removeT : step.removeO;
  return place === 'h' ? step.hr : place === 't' ? step.tr : step.or;
}

function getPlaceCountText(place: PlaceKey, count: number) {
  return `${PLACE_META[place].label} ${count}개`;
}

function pushStep(
  steps: VisualStep[],
  state: Omit<VisualStep, 'title' | 'detail' | 'focus' | 'phase'>,
  patch: Pick<VisualStep, 'title' | 'detail' | 'focus' | 'phase'>,
) {
  steps.push({
    ...state,
    ...patch,
    h1: clampCount(state.h1),
    t1: clampCount(state.t1),
    o1: clampCount(state.o1),
    h2: clampCount(state.h2),
    t2: clampCount(state.t2),
    o2: clampCount(state.o2),
    hc: clampCount(state.hc),
    tc: clampCount(state.tc),
    borrowH: clampCount(state.borrowH),
    borrowT: clampCount(state.borrowT),
    removeH: clampCount(state.removeH),
    removeT: clampCount(state.removeT),
    removeO: clampCount(state.removeO),
    thousands: clampCount(state.thousands),
  });
}

function genAdd(n1: number, n2: number) {
  const steps: VisualStep[] = [];
  const state: Omit<VisualStep, 'title' | 'detail' | 'focus' | 'phase'> = {
    h1: getDigit(n1, 'h'),
    t1: getDigit(n1, 't'),
    o1: getDigit(n1, 'o'),
    h2: getDigit(n2, 'h'),
    t2: getDigit(n2, 't'),
    o2: getDigit(n2, 'o'),
    hc: 0,
    tc: 0,
    hcPos: 't',
    tcPos: 'o',
    borrowH: 0,
    borrowT: 0,
    borrowHPos: 'h',
    borrowTPos: 't',
    hr: null,
    tr: null,
    or: null,
    removeH: 0,
    removeT: 0,
    removeO: 0,
    crossH: false,
    crossT: false,
    thousands: 0,
  };

  pushStep(steps, state, {
    title: '식을 백, 십, 일로 나누어 봅니다.',
    detail: '자리값이 다르면 서로 섞지 않고, 같은 자리끼리 계산합니다.',
    focus: 'all',
    phase: 'intro',
  });

  pushStep(steps, state, {
    title: '일의 자리 블록을 먼저 살펴봅니다.',
    detail: `${getPlaceCountText('o', state.o1)}와 ${getPlaceCountText('o', state.o2)}를 모아 봅니다.`,
    focus: 'o',
    phase: 'group',
  });

  const sumO = state.o1 + state.o2;
  state.o1 = 0;
  state.o2 = 0;
  state.or = sumO;

  pushStep(steps, state, {
    title: '일의 자리 블록을 한곳에 모읍니다.',
    detail: `일의 자리에는 모두 ${sumO}개가 모였습니다.`,
    focus: 'o',
    phase: 'group',
  });

  if (sumO >= 10) {
    state.tc = Math.floor(sumO / 10);
    state.tcPos = 'o';

    pushStep(steps, state, {
      title: '일의 자리 10개를 묶습니다.',
      detail: '일의 자리 10개는 십 1개와 같습니다.',
      focus: 'o',
      phase: 'regroup-source',
    });

    state.tcPos = 't';
    state.or = sumO % 10;

    pushStep(steps, state, {
      title: '묶은 십 1개를 십의 자리로 옮깁니다.',
      detail: `일의 자리에는 ${state.or}개가 남고, 십의 자리에 받아올림이 생깁니다.`,
      focus: 't',
      phase: 'regroup-target',
    });
  }

  pushStep(steps, state, {
    title: '일의 자리에 남은 블록을 놓습니다.',
    detail: `일의 자리 결과는 ${state.or ?? 0}입니다.`,
    focus: 'o',
    phase: 'place-complete',
  });

  pushStep(steps, state, {
    title: '십의 자리 블록을 살펴봅니다.',
    detail: `${getPlaceCountText('t', state.t1)}와 ${getPlaceCountText('t', state.t2)}에 받아올림을 더해 봅니다.`,
    focus: 't',
    phase: 'group',
  });

  const sumT = state.t1 + state.t2 + state.tc;
  state.t1 = 0;
  state.t2 = 0;
  state.tc = 0;
  state.tr = sumT;

  pushStep(steps, state, {
    title: '십의 자리 블록을 한곳에 모읍니다.',
    detail: `십의 자리에는 모두 ${sumT}개가 모였습니다.`,
    focus: 't',
    phase: 'group',
  });

  if (sumT >= 10) {
    state.hc = Math.floor(sumT / 10);
    state.hcPos = 't';

    pushStep(steps, state, {
      title: '십의 자리 10개를 묶습니다.',
      detail: '십의 자리 10개는 백 1개와 같습니다.',
      focus: 't',
      phase: 'regroup-source',
    });

    state.hcPos = 'h';
    state.tr = sumT % 10;

    pushStep(steps, state, {
      title: '묶은 백 1개를 백의 자리로 옮깁니다.',
      detail: `십의 자리에는 ${state.tr}개가 남고, 백의 자리에 받아올림이 생깁니다.`,
      focus: 'h',
      phase: 'regroup-target',
    });
  }

  pushStep(steps, state, {
    title: '십의 자리에 남은 블록을 놓습니다.',
    detail: `십의 자리 결과는 ${state.tr ?? 0}입니다.`,
    focus: 't',
    phase: 'place-complete',
  });

  pushStep(steps, state, {
    title: '백의 자리 블록을 살펴봅니다.',
    detail: `${getPlaceCountText('h', state.h1)}와 ${getPlaceCountText('h', state.h2)}에 받아올림을 더해 봅니다.`,
    focus: 'h',
    phase: 'group',
  });

  const sumH = state.h1 + state.h2 + state.hc;
  state.h1 = 0;
  state.h2 = 0;
  state.hc = 0;
  state.hr = sumH;

  pushStep(steps, state, {
    title: '백의 자리 블록을 한곳에 모읍니다.',
    detail: `백의 자리에는 모두 ${sumH}개가 모였습니다.`,
    focus: 'h',
    phase: 'group',
  });

  if (sumH >= 10) {
    state.thousands = Math.floor(sumH / 10);
    state.hr = sumH % 10;

    pushStep(steps, state, {
      title: '백 10개를 묶어 천 1개로 바꿉니다.',
      detail: `백 10개는 천 1개이므로, 결과에는 천 ${state.thousands}개가 생깁니다.`,
      focus: 'h',
      phase: 'regroup-source',
    });
  }

  pushStep(steps, state, {
    title: '백의 자리에 남은 블록을 놓습니다.',
    detail: `백의 자리 결과는 ${state.hr ?? 0}입니다.`,
    focus: 'h',
    phase: 'place-complete',
  });

  pushStep(steps, state, {
    title: '모든 자리 계산이 끝났습니다.',
    detail: '이제 결과 자리의 블록을 읽으면 최종 답을 알 수 있습니다.',
    focus: 'all',
    phase: 'complete',
  });

  return steps;
}

function genSub(n1: number, n2: number) {
  const steps: VisualStep[] = [];
  const state: Omit<VisualStep, 'title' | 'detail' | 'focus' | 'phase'> = {
    h1: getDigit(n1, 'h'),
    t1: getDigit(n1, 't'),
    o1: getDigit(n1, 'o'),
    h2: getDigit(n2, 'h'),
    t2: getDigit(n2, 't'),
    o2: getDigit(n2, 'o'),
    hc: 0,
    tc: 0,
    hcPos: 't',
    tcPos: 'o',
    borrowH: 0,
    borrowT: 0,
    borrowHPos: 'h',
    borrowTPos: 't',
    hr: null,
    tr: null,
    or: null,
    removeH: 0,
    removeT: 0,
    removeO: 0,
    crossH: false,
    crossT: false,
    thousands: 0,
  };

  pushStep(steps, state, {
    title: '식을 백, 십, 일로 나누어 봅니다.',
    detail: '빼기에서도 같은 자리끼리만 계산합니다.',
    focus: 'all',
    phase: 'intro',
  });

  pushStep(steps, state, {
    title: '일의 자리에서 뺄 수 있는지 살펴봅니다.',
    detail: `${getPlaceCountText('o', state.o1)}에서 ${getPlaceCountText('o', state.o2)}를 뺄 준비를 합니다.`,
    focus: 'o',
    phase: 'group',
  });

  if (state.o1 < state.o2) {
    state.t1 -= 1;
    state.borrowT = 1;
    state.borrowTPos = 't';
    state.crossT = true;

    pushStep(steps, state, {
      title: '십의 자리 1개를 풀 준비를 합니다.',
      detail: `일의 자리가 ${state.o1}개라서 ${state.o2}개를 뺄 수 없어, 십 1개를 가져옵니다.`,
      focus: 't',
      phase: 'borrow-source',
    });

    state.borrowTPos = 'o';
    state.o1 += 10;

    pushStep(steps, state, {
      title: '십 1개가 일 10개로 바뀝니다.',
      detail: `이제 일의 자리는 ${state.o1}개가 되어 뺄 수 있습니다.`,
      focus: 'o',
      phase: 'borrow-target',
    });

    state.borrowT = 0;
  }

  state.removeO = state.o2;

  pushStep(steps, state, {
    title: '일의 자리에서 뺄 블록을 고릅니다.',
    detail: `${state.o2}개를 골라서 빼 봅니다.`,
    focus: 'o',
    phase: 'remove',
  });

  state.o1 -= state.o2;
  state.removeO = 0;
  state.or = state.o1;

  pushStep(steps, state, {
    title: '일의 자리에 남은 블록을 놓습니다.',
    detail: `${state.o2}개를 빼고 ${state.or}개가 남았습니다.`,
    focus: 'o',
    phase: 'place-complete',
  });

  pushStep(steps, state, {
    title: '십의 자리에서 뺄 수 있는지 살펴봅니다.',
    detail: `${getPlaceCountText('t', state.t1)}에서 ${getPlaceCountText('t', state.t2)}를 뺄 준비를 합니다.`,
    focus: 't',
    phase: 'group',
  });

  if (state.t1 < state.t2) {
    state.h1 -= 1;
    state.borrowH = 1;
    state.borrowHPos = 'h';
    state.crossH = true;

    pushStep(steps, state, {
      title: '백의 자리 1개를 풀 준비를 합니다.',
      detail: `십의 자리가 ${state.t1}개라서 ${state.t2}개를 뺄 수 없어, 백 1개를 가져옵니다.`,
      focus: 'h',
      phase: 'borrow-source',
    });

    state.borrowHPos = 't';
    state.t1 += 10;

    pushStep(steps, state, {
      title: '백 1개가 십 10개로 바뀝니다.',
      detail: `이제 십의 자리는 ${state.t1}개가 되어 뺄 수 있습니다.`,
      focus: 't',
      phase: 'borrow-target',
    });

    state.borrowH = 0;
  }

  state.removeT = state.t2;

  pushStep(steps, state, {
    title: '십의 자리에서 뺄 블록을 고릅니다.',
    detail: `${state.t2}개를 골라서 빼 봅니다.`,
    focus: 't',
    phase: 'remove',
  });

  state.t1 -= state.t2;
  state.removeT = 0;
  state.tr = state.t1;

  pushStep(steps, state, {
    title: '십의 자리에 남은 블록을 놓습니다.',
    detail: `${state.t2}개를 빼고 ${state.tr}개가 남았습니다.`,
    focus: 't',
    phase: 'place-complete',
  });

  pushStep(steps, state, {
    title: '백의 자리에서 뺄 수 있는지 살펴봅니다.',
    detail: `${getPlaceCountText('h', state.h1)}에서 ${getPlaceCountText('h', state.h2)}를 뺄 준비를 합니다.`,
    focus: 'h',
    phase: 'group',
  });

  state.removeH = state.h2;

  pushStep(steps, state, {
    title: '백의 자리에서 뺄 블록을 고릅니다.',
    detail: `${state.h2}개를 골라서 빼 봅니다.`,
    focus: 'h',
    phase: 'remove',
  });

  state.h1 -= state.h2;
  state.removeH = 0;
  state.hr = state.h1;

  pushStep(steps, state, {
    title: '백의 자리에 남은 블록을 놓습니다.',
    detail: `${state.h2}개를 빼고 ${state.hr}개가 남았습니다.`,
    focus: 'h',
    phase: 'place-complete',
  });

  pushStep(steps, state, {
    title: '모든 자리 계산이 끝났습니다.',
    detail: '남아 있는 블록을 읽으면 최종 답을 알 수 있습니다.',
    focus: 'all',
    phase: 'complete',
  });

  return steps;
}

function BlockSet({
  count,
  items,
  place,
  prefix,
  tone = 'base',
  highlight = false,
  muted = false,
}: {
  count: number;
  items?: BlockVisualItem[];
  place: PlaceKey;
  prefix: string;
  tone?: BlockTone;
  highlight?: boolean;
  muted?: boolean;
}) {
  const meta = PLACE_META[place];
  const safeCount = items ? items.length : clampCount(count);

  if (safeCount === 0) {
    return (
      <div
        className={`flex h-full min-h-[56px] items-center justify-center rounded-2xl border border-dashed ${meta.emptyTone}`}
      >
        <div className="h-6 w-6 rounded-full border border-current opacity-20" />
      </div>
    );
  }

  const visualItems =
    items ??
    Array.from({ length: safeCount }, (_, index) => ({
      id: `${prefix}-${index}`,
      tone,
    }));

  return (
    <div
      className={`grid ${meta.gridClass} auto-rows-min content-start justify-items-start gap-1 p-1 md:gap-1.5 md:p-1.5 overflow-visible`}
    >
      <AnimatePresence initial={false}>
        {visualItems.map((item) => {
          const resolvedTone = item.tone ?? tone;

          return (
          <motion.div
            key={item.id}
            layout
            layoutId={item.id}
            initial={false}
            animate={{
              opacity: muted ? 0.46 : 1,
              y: resolvedTone === 'remove' ? -8 : 0,
            }}
            exit={{ opacity: 0, y: resolvedTone === 'remove' ? -14 : -4 }}
            transition={{ type: 'spring', stiffness: 260, damping: 28, mass: 0.65 }}
            className={`${meta.blockShape} ${meta.block[resolvedTone]} ${
              highlight ? 'ring-1 ring-white/65' : ''
            }`}
          />
          );
        })}
      </AnimatePresence>
    </div>
  );
}

function Tray({
  label,
  hint,
  place,
  count,
  prefix,
  tone,
  active,
}: {
  label: string;
  hint?: string;
  place: PlaceKey;
  count: number;
  prefix: string;
  tone: BlockTone;
  active: boolean;
}) {
  const meta = PLACE_META[place];

  return (
    <div
      className={`rounded-2xl border p-3 transition-all ${
        active
          ? 'border-white/18 bg-white/[0.045] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]'
          : 'border-white/8 bg-slate-950/32'
      }`}
    >
      <div className="mb-2 flex items-center justify-between gap-3">
        <div className="min-w-0">
          <p className="text-[11px] font-black tracking-[0.24em] text-slate-300">{label}</p>
        </div>
        <div
          className={`rounded-full border px-2.5 py-1 text-[10px] font-black ${meta.actionBg}`}
        >
          {count}개
        </div>
      </div>
      <BlockSet count={count} place={place} prefix={prefix} tone={tone} highlight={active} />
    </div>
  );
}

function ActionPreview({
  action,
  stepKey,
}: {
  action: ActionCardData;
  stepKey: string;
}) {
  return (
    <motion.div
      key={stepKey}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.18 }}
      className={`rounded-2xl border p-3 ${ACTION_TONE[action.tone]}`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="space-y-1">
          <div className="inline-flex items-center rounded-full border border-white/10 bg-black/10 px-2.5 py-1 text-[11px] font-black tracking-[0.18em]">
            {action.badge}
          </div>
          <p className="text-sm font-black text-white">{action.title}</p>
          <p className="text-xs leading-5 text-slate-200/85">{action.detail}</p>
        </div>
      </div>

      {(action.from || action.to || action.preview) && (
        <div className="mt-3 flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/45 p-3">
          {action.from ? (
            <div className="min-w-0 flex-1">
              <BlockSet
                count={action.from.count}
                place={action.from.place}
                prefix={`${stepKey}-from`}
                tone="accent"
                highlight
              />
            </div>
          ) : null}

          {action.from && action.to ? (
            <div className="shrink-0 text-center text-lg font-black text-white/90">→</div>
          ) : null}

          {action.to ? (
            <div className="min-w-0 flex-1">
              <BlockSet
                count={action.to.count}
                place={action.to.place}
                prefix={`${stepKey}-to`}
                tone="result"
                highlight
              />
            </div>
          ) : null}

          {!action.from && !action.to && action.preview ? (
            <div className="min-w-0 flex-1">
              <BlockSet
                count={action.preview.count}
                place={action.preview.place}
                prefix={`${stepKey}-preview`}
                tone={action.preview.tone ?? 'accent'}
                highlight
              />
            </div>
          ) : null}
        </div>
      )}
    </motion.div>
  );
}

function getPlaceAction(step: VisualStep, place: PlaceKey, op: '+' | '-'): ActionCardData {
  const fullLabel = PLACE_META[place].fullLabel;
  const resultCount = getPlaceValue(step, place, 'result');
  const removeCount = getPlaceValue(step, place, 'remove');
  const sourceCount = getPlaceValue(step, place, 'first');
  const partnerCount = getPlaceValue(step, place, 'second');

  if (op === '+') {
    if (place === 'o' && step.tc > 0 && step.tcPos === 'o') {
      return {
        badge: '10개 묶기',
        title: '일의 자리 10개를 십 1개로 바꿉니다.',
        detail: '같은 자리 블록 10개는 윗자리 블록 1개가 됩니다.',
        tone: 'warning',
        from: { place: 'o', count: 10 },
        to: { place: 't', count: step.tc },
      };
    }

    if (place === 't' && step.tc > 0 && step.tcPos === 't') {
      return {
        badge: '받아올림',
        title: '일의 자리에서 올라온 십 1개가 도착했습니다.',
        detail: '받아올림은 숫자가 아니라 블록이 자리 이동한 것입니다.',
        tone: 'success',
        preview: { place: 't', count: step.tc, tone: 'result' },
      };
    }

    if (place === 't' && step.hc > 0 && step.hcPos === 't') {
      return {
        badge: '10개 묶기',
        title: '십의 자리 10개를 백 1개로 바꿉니다.',
        detail: '십 10개는 백 1개가 됩니다.',
        tone: 'warning',
        from: { place: 't', count: 10 },
        to: { place: 'h', count: step.hc },
      };
    }

    if (place === 'h' && step.hc > 0 && step.hcPos === 'h') {
      return {
        badge: '받아올림',
        title: '십의 자리에서 올라온 백 1개가 도착했습니다.',
        detail: '윗자리로 올라온 블록을 함께 더합니다.',
        tone: 'success',
        preview: { place: 'h', count: step.hc, tone: 'result' },
      };
    }

    if (place === 'h' && step.thousands > 0 && step.phase === 'regroup-source') {
      return {
        badge: '천 만들기',
        title: '백 10개를 천 1개로 묶습니다.',
        detail: '백 10개는 천 1개와 같아서 결과가 한 자리 더 커집니다.',
        tone: 'warning',
        from: { place: 'h', count: 10 },
        to: { place: 'h', count: Math.max(0, step.hr ?? 0) },
      };
    }

    if (step.focus === place && step.phase === 'group') {
      return {
        badge: '모으기',
        title: `${fullLabel} 블록을 한곳에 모읍니다.`,
        detail: `${sourceCount}개와 ${partnerCount}개를 같은 자리에서 함께 봅니다.`,
        tone: 'focus',
        preview: { place, count: Math.max(1, sourceCount + partnerCount), tone: 'accent' },
      };
    }

    if (step.focus === place && step.phase === 'place-complete') {
      return {
        badge: '결과 놓기',
        title: `${fullLabel} 결과를 정리합니다.`,
        detail: `남은 블록 ${resultCount ?? 0}개를 결과 칸에 놓습니다.`,
        tone: 'success',
        preview: { place, count: Math.max(0, resultCount ?? 0), tone: 'result' },
      };
    }
  } else {
    if (place === 't' && step.borrowT > 0 && step.borrowTPos === 't') {
      return {
        badge: '풀기 준비',
        title: '십 1개를 풀어서 일의 자리로 보낼 준비를 합니다.',
        detail: '일의 자리가 부족할 때는 윗자리 블록 1개를 가져와 풉니다.',
        tone: 'danger',
        preview: { place: 't', count: 1, tone: 'accent' },
      };
    }

    if (place === 'o' && step.borrowT > 0 && step.borrowTPos === 'o') {
      return {
        badge: '10개로 바꾸기',
        title: '십 1개가 일 10개로 바뀝니다.',
        detail: '받아내림은 빌려오는 것이 아니라, 한 개를 열 개로 푸는 과정입니다.',
        tone: 'warning',
        from: { place: 't', count: 1 },
        to: { place: 'o', count: 10 },
      };
    }

    if (place === 'h' && step.borrowH > 0 && step.borrowHPos === 'h') {
      return {
        badge: '풀기 준비',
        title: '백 1개를 풀어서 십의 자리로 보낼 준비를 합니다.',
        detail: '십의 자리가 부족하면 백 1개를 가져와 풉니다.',
        tone: 'danger',
        preview: { place: 'h', count: 1, tone: 'accent' },
      };
    }

    if (place === 't' && step.borrowH > 0 && step.borrowHPos === 't') {
      return {
        badge: '10개로 바꾸기',
        title: '백 1개가 십 10개로 바뀝니다.',
        detail: '백 1개를 풀면 십 10개가 됩니다.',
        tone: 'warning',
        from: { place: 'h', count: 1 },
        to: { place: 't', count: 10 },
      };
    }

    if (step.focus === place && step.phase === 'remove') {
      return {
        badge: '빼기',
        title: `${removeCount}개를 골라서 뺍니다.`,
        detail: '뺄 블록을 먼저 눈으로 확인한 뒤, 빠지고 남는 수를 봅니다.',
        tone: 'danger',
        preview: { place, count: Math.max(0, removeCount), tone: 'remove' },
      };
    }

    if (step.focus === place && step.phase === 'place-complete') {
      return {
        badge: '남은 수',
        title: `${fullLabel}에 ${resultCount ?? 0}개가 남았습니다.`,
        detail: '제거된 블록을 빼고 남은 양이 결과가 됩니다.',
        tone: 'success',
        preview: { place, count: Math.max(0, resultCount ?? 0), tone: 'result' },
      };
    }

    if (step.focus === place && step.phase === 'group') {
      return {
        badge: '준비',
        title: `${fullLabel}에서 뺄 수 있는지 먼저 봅니다.`,
        detail: `${sourceCount}개에서 ${partnerCount}개를 뺄 수 있는지 확인합니다.`,
        tone: 'focus',
        preview: { place, count: Math.max(1, sourceCount), tone: 'accent' },
      };
    }
  }

  if (step.phase === 'complete') {
    return {
      badge: '읽기',
      title: '결과 칸의 블록을 읽어 답을 말합니다.',
      detail: '백, 십, 일을 차례대로 읽으면 숫자가 됩니다.',
      tone: 'success',
      preview: { place, count: Math.max(0, resultCount ?? 0), tone: 'result' },
    };
  }

  return {
    badge: '대기',
    title: `${fullLabel}는 잠시 기다립니다.`,
    detail: '지금은 다른 자리의 변화를 먼저 보고 있습니다.',
    tone: 'neutral',
  };
}

function PlaceCard({
  place,
  step,
  op,
}: {
  place: PlaceKey;
  step: VisualStep;
  op: '+' | '-';
}) {
  const meta = PLACE_META[place];
  const isFocused = step.focus === place || step.focus === 'all';
  const dimmed = step.focus !== place && step.focus !== 'all' && step.focus !== 'none';
  const currentCount = getPlaceValue(step, place, 'first');
  const partnerCount = getPlaceValue(step, place, 'second');
  const resultCount = getPlaceValue(step, place, 'result');
  const action = getPlaceAction(step, place, op);
  const currentHint = op === '+' ? '첫 번째 수의 블록' : '지금 남아 있는 블록';
  const partnerHint = op === '+' ? '더해질 블록' : '빼야 할 블록';

  return (
    <motion.section
      layout
      className={`flex min-h-[360px] min-w-0 flex-col gap-3 rounded-[28px] border p-4 transition-all ${
        meta.cardBase
      } ${isFocused ? meta.cardActive : ''} ${dimmed ? 'opacity-55 saturate-[0.8]' : 'opacity-100'}`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className={`text-[11px] font-black tracking-[0.3em] ${meta.kicker}`}>{meta.label}</div>
          <h4 className="mt-1 text-lg font-black text-white">{meta.fullLabel}</h4>
          <p className="mt-1 text-xs leading-5 text-slate-300">{meta.lessonHint}</p>
        </div>
        <div
          className={`rounded-full border px-2.5 py-1 text-[11px] font-black tracking-[0.16em] ${
            isFocused ? meta.actionBg : 'border-white/10 bg-slate-900/70 text-slate-300'
          }`}
        >
          {isFocused ? '현재 계산' : '대기'}
        </div>
      </div>

      <Tray
        label={op === '+' ? '첫 번째 수' : '현재 수'}
        hint={currentHint}
        place={place}
        count={currentCount}
        prefix={`${place}-current-${step.phase}`}
        tone="base"
        active={isFocused && (step.phase === 'group' || step.phase === 'borrow-source')}
      />

      <Tray
        label={op === '+' ? '더할 수' : '빼는 수'}
        hint={partnerHint}
        place={place}
        count={partnerCount}
        prefix={`${place}-partner-${step.phase}`}
        tone={op === '+' ? 'partner' : step.phase === 'remove' && step.focus === place ? 'remove' : 'partner'}
        active={isFocused && (step.phase === 'group' || step.phase === 'remove')}
      />

      <AnimatePresence mode="wait">
        <ActionPreview action={action} stepKey={`${place}-${step.phase}-${step.title}`} />
      </AnimatePresence>

      <div className="mt-auto rounded-[24px] border border-white/12 bg-slate-950/42 p-3">
        <div className="mb-3 flex items-start justify-between gap-3">
          <div>
            <p className="text-[11px] font-black tracking-[0.24em] text-slate-200">결과 자리</p>
            <p className="text-[11px] text-slate-400">계산 후 남는 블록을 모아 둡니다.</p>
          </div>
          <div className={`rounded-full border px-2.5 py-1 text-[11px] font-black ${meta.actionBg}`}>
            {resultCount ?? 0}개
          </div>
        </div>
        <BlockSet
          count={Math.max(0, resultCount ?? 0)}
          place={place}
          prefix={`${place}-result-${step.phase}`}
          tone="result"
          highlight={isFocused && (step.phase === 'place-complete' || step.phase === 'complete')}
          muted={resultCount === null}
        />
      </div>
    </motion.section>
  );
}

function ValueBadge({
  label,
  value,
  highlight,
}: {
  label: string;
  value: number | null;
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border px-2.5 py-2 text-center ${
        highlight
          ? 'border-yellow-300/35 bg-yellow-500/12 shadow-[0_0_18px_rgba(250,204,21,0.12)]'
          : 'border-white/10 bg-slate-950/50'
      }`}
    >
      <div className="text-[9px] font-black tracking-[0.24em] text-slate-500">{label}</div>
      <div className="mt-1 text-xl font-black text-white">{value === null ? '·' : value}</div>
    </div>
  );
}

function ProblemBoard({
  n1,
  n2,
  op,
  step,
}: {
  n1: number;
  n2: number;
  op: '+' | '-';
  step: VisualStep;
}) {
  const digits1 = splitDigits4(n1);
  const digits2 = splitDigits4(n2);
  const focusLabel =
    step.focus === 'all'
      ? '전체'
      : step.focus === 'none'
        ? '대기'
        : PLACE_META[step.focus].fullLabel;
  const resultDigits = [step.thousands || null, step.hr, step.tr, step.or];

  return (
    <div className="rounded-[28px] border border-white/12 bg-[linear-gradient(180deg,rgba(30,41,59,0.9),rgba(15,23,42,0.92))] p-5 shadow-inner">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[11px] font-black tracking-[0.28em] text-slate-300">세로셈 보기</p>
          <p className="mt-1 text-sm text-slate-400">현재 단계가 어느 자리에서 일어나는지 함께 확인합니다.</p>
        </div>
        <div className={`rounded-full border px-3 py-1.5 text-[11px] font-black ${PHASE_META[step.phase].tone}`}>
          {focusLabel} · {PHASE_META[step.phase].label}
        </div>
      </div>

      <div className="mt-5 grid grid-cols-[24px_repeat(4,minmax(0,1fr))] gap-2 rounded-[24px] border border-white/10 bg-slate-950/38 p-4">
        <div />
        {['천', '백', '십', '일'].map((label) => (
          <div key={label} className="text-center text-[11px] font-black tracking-[0.22em] text-slate-400">
            {label}
          </div>
        ))}

        <div />
        {digits1.map((digit, index) => (
          <div
            key={`top-${index}`}
            className="rounded-2xl border border-white/10 bg-slate-900/70 py-3 text-center text-2xl font-black text-white"
          >
            {digit ?? ''}
          </div>
        ))}

        <div className="flex items-center justify-center text-2xl font-black text-yellow-400">{op}</div>
        {digits2.map((digit, index) => (
          <div
            key={`bottom-${index}`}
            className="rounded-2xl border border-white/10 bg-slate-900/70 py-3 text-center text-2xl font-black text-white"
          >
            {digit ?? ''}
          </div>
        ))}

        <div className="col-span-5 mt-1 h-1 rounded-full bg-slate-700" />
      </div>

      <div className="mt-4 grid grid-cols-4 gap-2">
        <ValueBadge label="천" value={resultDigits[0]} highlight={step.phase === 'complete' && !!resultDigits[0]} />
        <ValueBadge label="백" value={resultDigits[1]} highlight={step.focus === 'h' || step.phase === 'complete'} />
        <ValueBadge label="십" value={resultDigits[2]} highlight={step.focus === 't' || step.phase === 'complete'} />
        <ValueBadge label="일" value={resultDigits[3]} highlight={step.focus === 'o' || step.phase === 'complete'} />
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2">
        {PLACE_ORDER.map((place) => (
          <div
            key={place}
            className={`rounded-2xl border px-3 py-2 ${
              step.focus === place || step.focus === 'all'
                ? PLACE_META[place].actionBg
                : 'border-white/8 bg-slate-950/45'
            }`}
          >
            <div className={`text-[11px] font-black tracking-[0.22em] ${PLACE_META[place].kicker}`}>
              {PLACE_META[place].label}
            </div>
            <div className="mt-1 text-xs leading-5 text-slate-300">{PLACE_META[place].lessonHint}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function getMinimalStepTitle(step: VisualStep) {
  if (step.phase === 'intro') return '시작';
  if (step.phase === 'group') {
    return step.focus === 'all' || step.focus === 'none'
      ? '모으기'
      : `${PLACE_META[step.focus].label} 모으기`;
  }
  if (step.phase === 'regroup-source') return '10→1';
  if (step.phase === 'regroup-target') return '올림';
  if (step.phase === 'borrow-source') return '가져오기';
  if (step.phase === 'borrow-target') return '1→10';
  if (step.phase === 'remove') return '빼기';
  if (step.phase === 'place-complete') return '놓기';
  return '완료';
}

function getMinimalStepNote(step: VisualStep) {
  if (step.phase === 'intro') return '';
  if (step.phase === 'regroup-source') return '10개를 묶습니다.';
  if (step.phase === 'regroup-target') return '윗자리로 옮깁니다.';
  if (step.phase === 'borrow-source') return '윗자리 1개를 가져옵니다.';
  if (step.phase === 'borrow-target') return '10개로 바꿉니다.';
  if (step.phase === 'remove' && step.focus !== 'all' && step.focus !== 'none') {
    return `${getPlaceValue(step, step.focus, 'remove')}개를 뺍니다.`;
  }
  if (step.phase === 'complete') return '';
  return '';
}

function getMinimalPlaceStatus(step: VisualStep, place: PlaceKey, op: '+' | '-') {
  if (step.phase === 'complete') return '완료';
  if (step.focus !== place && step.focus !== 'all') return null;

  if (op === '+') {
    if (place === 'o' && step.tc > 0 && step.tcPos === 'o') return '10→1';
    if (place === 't' && step.tc > 0 && step.tcPos === 't') return '올림';
    if (place === 't' && step.hc > 0 && step.hcPos === 't') return '10→1';
    if (place === 'h' && step.hc > 0 && step.hcPos === 'h') return '올림';
  } else {
    if (place === 't' && step.borrowT > 0 && step.borrowTPos === 't') return '풀기';
    if (place === 'o' && step.borrowT > 0 && step.borrowTPos === 'o') return '1→10';
    if (place === 'h' && step.borrowH > 0 && step.borrowHPos === 'h') return '풀기';
    if (place === 't' && step.borrowH > 0 && step.borrowHPos === 't') return '1→10';
    if (step.phase === 'remove') return '빼기';
  }

  if (step.phase === 'group') return '모으기';
  if (step.phase === 'place-complete') return '결과';
  return null;
}

function CompactTray({
  label,
  place,
  count,
  prefix,
  tone,
  active,
}: {
  label: string;
  place: PlaceKey;
  count: number;
  prefix: string;
  tone: BlockTone;
  active: boolean;
}) {
  const meta = PLACE_META[place];

  return (
    <div
      className={`rounded-2xl border p-3 ${
        active ? 'border-white/16 bg-white/[0.045]' : 'border-white/8 bg-slate-950/32'
      }`}
    >
      <div className="mb-2 text-[10px] font-black tracking-[0.24em] text-slate-400">{label}</div>
      <BlockSet count={count} place={place} prefix={prefix} tone={tone} highlight={active} />
    </div>
  );
}

function CompactOperandPanel({
  topLabel,
  topCount,
  bottomLabel,
  bottomCount,
  place,
  topPrefix,
  bottomPrefix,
  topTone,
  bottomTone,
  topActive,
  bottomActive,
}: {
  topLabel: string;
  topCount: number;
  bottomLabel: string;
  bottomCount: number;
  place: PlaceKey;
  topPrefix: string;
  bottomPrefix: string;
  topTone: BlockTone;
  bottomTone: BlockTone;
  topActive: boolean;
  bottomActive: boolean;
}) {
  const meta = PLACE_META[place];

  return (
    <div className="rounded-2xl border border-white/10 bg-slate-950/34 p-3">
      <div className="grid gap-3">
        <div>
          <div className="mb-2 flex items-center justify-between gap-2">
            <span className="text-[10px] font-black tracking-[0.22em] text-slate-400">{topLabel}</span>
            <span className={`rounded-full border px-2 py-0.5 text-[10px] font-black ${meta.actionBg}`}>
              {topCount}
            </span>
          </div>
          <BlockSet
            count={topCount}
            place={place}
            prefix={topPrefix}
            tone={topTone}
            highlight={topActive}
          />
        </div>

        <div className="h-px rounded-full bg-white/10" />

        <div>
          <div className="mb-2 flex items-center justify-between gap-2">
            <span className="text-[10px] font-black tracking-[0.22em] text-slate-400">{bottomLabel}</span>
            <span className={`rounded-full border px-2 py-0.5 text-[10px] font-black ${meta.actionBg}`}>
              {bottomCount}
            </span>
          </div>
          <BlockSet
            count={bottomCount}
            place={place}
            prefix={bottomPrefix}
            tone={bottomTone}
            highlight={bottomActive}
          />
        </div>
      </div>
    </div>
  );
}

function CompactPlaceCard({
  place,
  step,
  op,
}: {
  place: PlaceKey;
  step: VisualStep;
  op: '+' | '-';
}) {
  const meta = PLACE_META[place];
  const isFocused = step.focus === place || step.focus === 'all';
  const dimmed = step.focus !== place && step.focus !== 'all' && step.focus !== 'none';
  const currentCount = getPlaceValue(step, place, 'first');
  const partnerCount = getPlaceValue(step, place, 'second');
  const resultCount = Math.max(0, getPlaceValue(step, place, 'result') ?? 0);
  const status = getMinimalPlaceStatus(step, place, op);

  return (
    <motion.section
      layout
      className={`flex min-h-[300px] min-w-0 flex-col gap-2 overflow-hidden rounded-[26px] border p-3 ${
        meta.cardBase
      } ${isFocused ? meta.cardActive : ''} ${dimmed ? 'opacity-55 saturate-[0.85]' : 'opacity-100'}`}
    >
      <div className="flex items-center justify-between gap-2">
        <div className={`text-lg font-black ${meta.kicker}`}>{meta.label}</div>
        {status ? (
          <div className={`rounded-full border px-2.5 py-1 text-[10px] font-black ${meta.actionBg}`}>
            {status}
          </div>
        ) : null}
      </div>

      <div className="grid gap-2">
        <CompactOperandPanel
          topLabel={op === '+' ? '위 수' : '현재'}
          topCount={currentCount}
          bottomLabel={op === '+' ? '아래 수' : '뺄 수'}
          bottomCount={partnerCount}
          place={place}
          topPrefix={`${place}-compact-current-${step.phase}`}
          bottomPrefix={`${place}-compact-partner-${step.phase}`}
          topTone="base"
          bottomTone={op === '+' ? 'partner' : step.phase === 'remove' && step.focus === place ? 'remove' : 'partner'}
          topActive={isFocused && (step.phase === 'group' || step.phase === 'borrow-source')}
          bottomActive={isFocused && (step.phase === 'group' || step.phase === 'remove')}
        />
        <CompactTray
          label="결과"
          place={place}
          count={resultCount}
          prefix={`${place}-compact-result-${step.phase}`}
          tone="result"
          active={isFocused && (step.phase === 'place-complete' || step.phase === 'complete')}
        />
      </div>
    </motion.section>
  );
}

function CompactProblemBoard({
  n1,
  n2,
  op,
  step,
}: {
  n1: number;
  n2: number;
  op: '+' | '-';
  step: VisualStep;
}) {
  const digits1 = splitDigits4(n1);
  const digits2 = splitDigits4(n2);
  const resultDigits = [step.thousands || null, step.hr, step.tr, step.or];

  return (
    <div className="rounded-[26px] border border-white/12 bg-[linear-gradient(180deg,rgba(30,41,59,0.88),rgba(15,23,42,0.94))] p-4 shadow-inner">
      <div className="grid grid-cols-[22px_repeat(4,minmax(0,1fr))] gap-2 rounded-[22px] border border-white/10 bg-slate-950/38 p-3">
        <div />
        {['천', '백', '십', '일'].map((label) => (
          <div key={label} className="text-center text-[10px] font-black tracking-[0.2em] text-slate-500">
            {label}
          </div>
        ))}

        <div />
        {digits1.map((digit, index) => (
          <div
            key={`compact-top-${index}`}
            className="rounded-2xl border border-white/10 bg-slate-900/70 py-2.5 text-center text-xl font-black text-white"
          >
            {digit ?? ''}
          </div>
        ))}

        <div className="flex items-center justify-center text-xl font-black text-yellow-400">{op}</div>
        {digits2.map((digit, index) => (
          <div
            key={`compact-bottom-${index}`}
            className="rounded-2xl border border-white/10 bg-slate-900/70 py-2.5 text-center text-xl font-black text-white"
          >
            {digit ?? ''}
          </div>
        ))}

        <div className="col-span-5 mt-1 h-1 rounded-full bg-slate-700" />
      </div>

      <div className="mt-2 grid grid-cols-4 gap-2">
        <ValueBadge label="천" value={resultDigits[0]} highlight={step.phase === 'complete' && !!resultDigits[0]} />
        <ValueBadge label="백" value={resultDigits[1]} highlight={step.focus === 'h' || step.phase === 'complete'} />
        <ValueBadge label="십" value={resultDigits[2]} highlight={step.focus === 't' || step.phase === 'complete'} />
        <ValueBadge label="일" value={resultDigits[3]} highlight={step.focus === 'o' || step.phase === 'complete'} />
      </div>
    </div>
  );
}

function getSimpleStepMessage(step: VisualStep, op: '+' | '-', previousStep?: VisualStep) {
  if (step.phase === 'intro') return '계산을 시작합니다.';
  if (step.phase === 'group' && step.focus !== 'all' && step.focus !== 'none') {
    if (previousStep?.phase === 'group' && previousStep.focus === step.focus) {
      return op === '+' ? '블록을 모읍니다.' : '블록을 확인합니다.';
    }
    return `${PLACE_META[step.focus].fullLabel}를 봅니다.`;
  }
  if (step.phase === 'regroup-source') return '10개를 묶습니다.';
  if (step.phase === 'regroup-target') return '윗자리로 옮깁니다.';
  if (step.phase === 'borrow-source') return '윗자리에서 가져옵니다.';
  if (step.phase === 'borrow-target') return '1개를 10개로 풉니다.';
  if (step.phase === 'remove') return '블록을 뺍니다.';
  if (step.phase === 'place-complete') return '결과를 놓습니다.';
  return '계산이 완료되었습니다!';
}

function getSimplePlaceDisplay(step: VisualStep, place: PlaceKey, op: '+' | '-') {
  const first = getPlaceValue(step, place, 'first');
  const second = getPlaceValue(step, place, 'second');
  const remove = getPlaceValue(step, place, 'remove');
  const result = Math.max(0, getPlaceValue(step, place, 'result') ?? 0);

  if (step.phase === 'complete') {
    return { upperPrimary: 0, upperSecondary: 0, lower: result };
  }

  if (op === '+') {
    if (step.focus === place && (step.phase === 'group' || step.phase === 'regroup-source')) {
      if (first === 0 && second === 0 && result > 0) {
        return { upperPrimary: result, upperSecondary: 0, lower: 0 };
      }
    }

    if (step.focus === place && step.phase === 'place-complete') {
      return { upperPrimary: 0, upperSecondary: 0, lower: result };
    }

    return { upperPrimary: first, upperSecondary: second, lower: result };
  }

  if (step.focus === place && step.phase === 'remove') {
    return { upperPrimary: first, upperSecondary: remove, lower: 0 };
  }

  if (step.focus === place && step.phase === 'place-complete') {
    return { upperPrimary: 0, upperSecondary: 0, lower: result };
  }

  return { upperPrimary: first, upperSecondary: 0, lower: result };
}

function getSimplePlaceStatus(step: VisualStep, place: PlaceKey, op: '+' | '-') {
  if (step.focus !== place && step.focus !== 'all') return null;
  if (step.phase === 'complete') return null;
  if (op === '+') {
    if (place === 'o' && step.tc > 0 && step.tcPos === 'o') return '10→1';
    if (place === 't' && step.tc > 0 && step.tcPos === 't') return '올림';
    if (place === 't' && step.hc > 0 && step.hcPos === 't') return '10→1';
    if (place === 'h' && step.hc > 0 && step.hcPos === 'h') return '올림';
  } else {
    if (place === 't' && step.borrowT > 0 && step.borrowTPos === 't') return '가져오기';
    if (place === 'o' && step.borrowT > 0 && step.borrowTPos === 'o') return '1→10';
    if (place === 'h' && step.borrowH > 0 && step.borrowHPos === 'h') return '가져오기';
    if (place === 't' && step.borrowH > 0 && step.borrowHPos === 't') return '1→10';
    if (step.phase === 'remove') return '빼기';
  }

  if (step.phase === 'group') return '모으기';
  if (step.phase === 'place-complete') return '결과';
  return null;
}

function getCarryIntoPlace(step: VisualStep, place: PlaceKey) {
  if (place === 't' && step.tcPos === 't') return clampCount(step.tc);
  if (place === 'h' && step.hcPos === 'h') return clampCount(step.hc);
  return 0;
}

function takeVisualItems(ids: string[], count: number, tone: BlockTone) {
  return ids.slice(0, clampCount(count)).map((id) => ({ id, tone }));
}

function tintVisualItems<T extends BlockVisualItem>(items: T[], ids: Set<string>, tone: BlockTone) {
  if (ids.size === 0) return items;

  return items.map((item) => (ids.has(item.id) ? ({ ...item, tone } as T) : item));
}

function tintTrailingItems<T extends BlockVisualItem>(items: T[], count: number, tone: BlockTone) {
  if (count <= 0) return items;

  return items.map((item, index) => ({
    ...item,
    tone: index >= items.length - count ? tone : item.tone,
  })) as T[];
}

function interleaveVisualItems(primary: BlockVisualItem[], secondary: BlockVisualItem[]) {
  const merged: BlockVisualItem[] = [];
  const maxLength = Math.max(primary.length, secondary.length);

  for (let index = 0; index < maxLength; index += 1) {
    if (primary[index]) merged.push(primary[index]);
    if (secondary[index]) merged.push(secondary[index]);
  }

  return merged;
}

function findSimpleUpperSnapshot(
  steps: VisualStep[],
  stepIdx: number,
  place: PlaceKey,
  op: '+' | '-',
) {
  for (let index = stepIdx; index >= 0; index -= 1) {
    const candidate = steps[index];
    const first = clampCount(getPlaceValue(candidate, place, 'first'));
    const carry = op === '+' ? getCarryIntoPlace(candidate, place) : 0;
    const second = clampCount(getPlaceValue(candidate, place, 'second')) + carry;

    if (first > 0 || second > 0) {
      return { first, second, carry };
    }
  }

  const step = steps[stepIdx];
  const carry = op === '+' ? getCarryIntoPlace(step, place) : 0;

  return {
    first: clampCount(getPlaceValue(step, place, 'first')),
    second: clampCount(getPlaceValue(step, place, 'second')) + carry,
    carry,
  };
}

function getRegroupSourceBundleCount(step: VisualStep, place: PlaceKey) {
  if (step.phase !== 'regroup-source') return 0;
  if (place === 'o' && step.tcPos === 'o') return clampCount(step.tc) * 10;
  if (place === 't' && step.hcPos === 't') return clampCount(step.hc) * 10;
  return 0;
}

function isBorrowSourcePlace(step: VisualStep, place: PlaceKey) {
  return (
    step.phase === 'borrow-source' &&
    ((place === 't' && step.borrowT > 0 && step.borrowTPos === 't') ||
      (place === 'h' && step.borrowH > 0 && step.borrowHPos === 'h'))
  );
}

function getBorrowTargetCount(step: VisualStep, place: PlaceKey) {
  if (step.phase !== 'borrow-target') return 0;
  if (place === 'o' && step.borrowTPos === 'o') return 10;
  if (place === 't' && step.borrowHPos === 't') return 10;
  return 0;
}

function buildSimplePlaceVisual({
  steps,
  stepIdx,
  step,
  place,
  op,
  pools,
}: {
  steps: VisualStep[];
  stepIdx: number;
  step: VisualStep;
  place: PlaceKey;
  op: '+' | '-';
  pools: SimplePlacePools;
}): SimplePlaceVisual {
  const rawResult = getPlaceValue(step, place, 'result');
  const resultCount = clampCount(rawResult ?? 0);
  const isSettled =
    step.phase === 'complete' ||
    (step.focus === place && step.phase === 'place-complete') ||
    (step.focus !== place && rawResult !== null);

  if (op === '+') {
    const snapshot = findSimpleUpperSnapshot(steps, stepIdx, place, op);
    const currentFirst = clampCount(getPlaceValue(step, place, 'first'));
    const currentSecond = clampCount(getPlaceValue(step, place, 'second')) + getCarryIntoPlace(step, place);
    const snapshotBaseItems = takeVisualItems(pools.baseIds, snapshot.first, 'base');
    const snapshotPartnerItems: BlockVisualItem[] = pools.partnerIds
      .slice(0, snapshot.second)
      .map((id, index) => ({
        id,
        tone:
          snapshot.carry > 0 && index >= snapshot.second - snapshot.carry
            ? ('accent' as BlockTone)
            : ('partner' as BlockTone),
      }));

    const isCombinedPreview =
      step.focus === place &&
      (step.phase === 'group' || step.phase === 'regroup-source') &&
      currentFirst === 0 &&
      currentSecond === 0 &&
      resultCount > 0;
    const bundleCount = getRegroupSourceBundleCount(step, place);

    if (isCombinedPreview) {
      const mergedPreview = interleaveVisualItems(snapshotBaseItems, snapshotPartnerItems).slice(
        0,
        resultCount,
      );

      if (bundleCount > 0) {
        const bundleIds = new Set(mergedPreview.slice(0, bundleCount).map((item) => item.id));

        return {
          topItems: tintVisualItems(mergedPreview, bundleIds, 'accent'),
          middleItems: [] as BlockVisualItem[],
          bottomItems: [] as BlockVisualItem[],
        };
      }

      return {
        topItems: mergedPreview,
        middleItems: [] as BlockVisualItem[],
        bottomItems: [] as BlockVisualItem[],
      };
    }

    if (isSettled) {
      return {
        topItems: [] as BlockVisualItem[],
        middleItems: [] as BlockVisualItem[],
        bottomItems: interleaveVisualItems(snapshotBaseItems, snapshotPartnerItems)
          .slice(0, resultCount)
          .map((item) => ({ id: item.id, tone: 'result' as BlockTone })),
      };
    }

    return {
      topItems: takeVisualItems(pools.baseIds, currentFirst, 'base'),
      middleItems: pools.partnerIds.slice(0, currentSecond).map((id, index) => ({
        id,
        tone:
          snapshot.carry > 0 && index >= currentSecond - snapshot.carry
            ? ('accent' as BlockTone)
            : ('partner' as BlockTone),
      })),
      bottomItems: [] as BlockVisualItem[],
    };
  }

  const currentFirst = clampCount(getPlaceValue(step, place, 'first'));
  const currentSecond = clampCount(getPlaceValue(step, place, 'second'));
  const removeCount =
    step.focus === place && step.phase === 'remove'
      ? clampCount(getPlaceValue(step, place, 'remove'))
      : 0;
  const borrowTargetCount = getBorrowTargetCount(step, place);

  if (isSettled) {
    return {
      topItems: [] as BlockVisualItem[],
      middleItems: [] as BlockVisualItem[],
      bottomItems: takeVisualItems(pools.baseIds, resultCount, 'result'),
    };
  }

  let topItems: BlockVisualItem[] = pools.baseIds.slice(0, currentFirst).map((id, index) => ({
    id,
    tone:
      removeCount > 0 && index >= currentFirst - removeCount
        ? ('remove' as BlockTone)
        : ('base' as BlockTone),
  }));

  if (isBorrowSourcePlace(step, place)) {
    topItems = tintTrailingItems(topItems, 1, 'accent');
  }

  if (borrowTargetCount > 0) {
    topItems = tintTrailingItems(topItems, borrowTargetCount, 'accent');
  }

  return {
    topItems,
    middleItems: takeVisualItems(
      pools.partnerIds,
      currentSecond,
      step.focus === place && step.phase === 'remove' ? 'remove' : 'partner',
    ),
    bottomItems: [] as BlockVisualItem[],
  };
}

function SimpleFormulaPanel({
  n1,
  n2,
  op,
}: {
  n1: number;
  n2: number;
  op: '+' | '-';
}) {
  const digits1 = splitDigits4(n1);
  const digits2 = splitDigits4(n2);

  return (
    <div className="flex min-h-[240px] w-[118px] shrink-0 items-center justify-center rounded-[22px] border border-white/10 bg-slate-800/72 p-3 md:min-h-[280px] md:w-[172px] md:p-4">
      <div className="grid w-full grid-cols-[16px_repeat(4,minmax(0,1fr))] gap-x-1.5 gap-y-3 text-right md:grid-cols-[20px_repeat(4,minmax(0,1fr))] md:gap-x-2.5 md:gap-y-4">
        <div />
        {digits1.map((digit, index) => (
          <div
            key={`simple-top-${index}`}
            className="text-[1.95rem] font-black leading-none text-white md:text-[2.55rem]"
          >
            {digit ?? ''}
          </div>
        ))}

        <div className="text-[1.95rem] font-black leading-none text-yellow-400 md:text-[2.55rem]">
          {op}
        </div>
        {digits2.map((digit, index) => (
          <div
            key={`simple-bottom-${index}`}
            className="text-[1.95rem] font-black leading-none text-white md:text-[2.55rem]"
          >
            {digit ?? ''}
          </div>
        ))}

        <div className="col-span-5 h-1 rounded-full bg-slate-600/90" />
      </div>
    </div>
  );
}

function SimplePlaceCard({
  place,
  step,
  op,
  steps,
  stepIdx,
  pools,
}: {
  place: PlaceKey;
  step: VisualStep;
  op: '+' | '-';
  steps: VisualStep[];
  stepIdx: number;
  pools: SimplePlacePools;
}) {
  const meta = PLACE_META[place];
  const isFocused = step.focus === place || step.focus === 'all';
  const dimmed = step.focus !== place && step.focus !== 'all' && step.focus !== 'none';
  const status = getSimplePlaceStatus(step, place, op);
  const visual = buildSimplePlaceVisual({ steps, stepIdx, step, place, op, pools });
  const resultVisible = visual.bottomItems.length > 0 && visual.topItems.length === 0;

  return (
    <motion.section
      layout
      className={`flex min-h-[240px] min-w-0 flex-col gap-2 rounded-[22px] border p-2.5 transition-all md:min-h-[280px] md:p-3 ${
        meta.cardBase
      } ${isFocused ? meta.cardActive : ''} ${dimmed ? 'opacity-55 saturate-[0.85]' : 'opacity-100'}`}
    >
      <div className="flex items-center justify-between gap-2">
        <div className={`text-center text-xs font-black md:text-sm ${meta.kicker}`}>{meta.label}</div>
        {status ? (
          <div className={`rounded-full border px-2 py-0.5 text-[10px] font-black ${meta.actionBg}`}>
            {status}
          </div>
        ) : null}
      </div>

      <div className="grid min-h-0 flex-1 grid-rows-[minmax(0,1fr)_minmax(76px,0.7fr)] gap-2">
        <div className="min-h-0 rounded-[18px] border border-white/8 bg-slate-950/28 p-2.5">
          <div className="grid h-full min-h-0 grid-rows-[minmax(0,1fr)_1px_minmax(0,1fr)] gap-2">
            <div className="min-h-0 overflow-visible">
              <BlockSet
                count={visual.topItems.length}
                items={visual.topItems}
                place={place}
                prefix={`${place}-simple-top`}
                tone="base"
                highlight={isFocused && !resultVisible}
              />
            </div>
            <div className="h-px rounded-full bg-white/10" />
            <div className="min-h-0 overflow-visible">
              <BlockSet
                count={visual.middleItems.length}
                items={visual.middleItems}
                place={place}
                prefix={`${place}-simple-bottom`}
                tone={op === '+' ? 'partner' : 'remove'}
                highlight={isFocused && !resultVisible}
              />
            </div>
          </div>
        </div>

        <div className="min-h-0 rounded-[18px] border border-white/10 bg-slate-950/38 p-2.5">
          <div className="min-h-full overflow-visible">
            <BlockSet
              count={visual.bottomItems.length}
              items={visual.bottomItems}
              place={place}
              prefix={`${place}-simple-result`}
              tone="result"
              highlight={isFocused && resultVisible}
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export const VisualCalculator: React.FC<VisualCalculatorProps> = ({
  problemText,
  onControlSound,
}) => {
  const { n1, op, n2 } = useMemo(() => parseProblem(problemText), [problemText]);
  const steps = useMemo(() => (op === '+' ? genAdd(n1, n2) : genSub(n1, n2)), [n1, op, n2]);
  const placePools = useMemo(
    () =>
      PLACE_ORDER.reduce(
        (acc, place) => {
          const maxFirst = Math.max(
            0,
            ...steps.map((item) => clampCount(getPlaceValue(item, place, 'first'))),
          );
          const maxPartner = Math.max(
            0,
            ...steps.map((item) =>
              op === '+'
                ? clampCount(getPlaceValue(item, place, 'second')) + getCarryIntoPlace(item, place)
                : Math.max(
                    clampCount(getPlaceValue(item, place, 'second')),
                    clampCount(getPlaceValue(item, place, 'remove')),
                  ),
            ),
          );

          acc[place] = {
            baseIds: Array.from({ length: maxFirst }, (_, index) => `${place}-base-${index}`),
            partnerIds: Array.from(
              { length: maxPartner },
              (_, index) => `${place}-partner-${index}`,
            ),
          };

          return acc;
        },
        {} as Record<PlaceKey, SimplePlacePools>,
      ),
    [op, steps],
  );
  const [stepIdx, setStepIdx] = useState(0);

  useEffect(() => {
    setStepIdx(0);
  }, [problemText]);

  const step = steps[stepIdx];
  const previousStep = stepIdx > 0 ? steps[stepIdx - 1] : undefined;

  const moveStep = (nextIndex: number) => {
    setStepIdx(nextIndex);
    onControlSound?.();
  };

  return (
    <motion.div
      layout
      className="flex h-full min-h-0 flex-col gap-3 rounded-[28px] border-4 border-slate-700 bg-[linear-gradient(180deg,rgba(15,23,42,0.96),rgba(2,6,23,0.98))] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
    >
      <div className="rounded-[22px] border border-white/10 bg-slate-900/78 px-3 py-2.5">
        <div className="flex items-center justify-between gap-3">
          <AnimatePresence mode="wait">
            <motion.p
              key={`${stepIdx}-${step.title}`}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.14 }}
              className="min-w-0 truncate text-base font-black text-yellow-300"
            >
              {getSimpleStepMessage(step, op, previousStep)}
            </motion.p>
          </AnimatePresence>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => moveStep(Math.max(stepIdx - 1, 0))}
              disabled={stepIdx === 0}
              aria-label="이전 단계"
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-slate-800 text-white transition hover:bg-slate-700 disabled:opacity-45"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              type="button"
              onClick={() => moveStep(Math.min(stepIdx + 1, steps.length - 1))}
              disabled={stepIdx === steps.length - 1}
              aria-label="다음 단계"
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-600 text-white transition hover:bg-blue-500 disabled:opacity-45"
            >
              <ChevronRight size={16} />
            </button>
            <button
              type="button"
              onClick={() => moveStep(0)}
              aria-label="처음으로"
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-slate-800 text-white transition hover:bg-slate-700"
            >
              <RotateCcw size={16} />
            </button>
          </div>
        </div>
      </div>

      <LayoutGroup id="visual-calculator-blocks">
        <div className="flex min-h-0 flex-1 gap-3">
          <SimpleFormulaPanel n1={n1} n2={n2} op={op} />

          <div className="grid min-h-0 flex-1 grid-cols-3 gap-2.5 md:gap-3">
            {PLACE_ORDER.map((place) => (
              <React.Fragment key={place}>
                <SimplePlaceCard
                  place={place}
                  step={step}
                  op={op}
                  steps={steps}
                  stepIdx={stepIdx}
                  pools={placePools[place]}
                />
              </React.Fragment>
            ))}
          </div>
        </div>
      </LayoutGroup>
    </motion.div>
  );
};
