import React, { useEffect, useMemo, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react';
import { AnimatePresence, LayoutGroup, motion } from 'motion/react';

type PlaceKey = 'h' | 't' | 'o';
type DisplayPlaceKey = 'th' | PlaceKey;
type FocusKey = DisplayPlaceKey | 'all' | 'none';
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
export type VisualControlSound = 'step' | 'regroup' | 'borrow' | 'resolve';
type StepNavigationSource = 'forward' | 'backward' | 'reset' | 'auto';
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
  onControlSound?: (sound: VisualControlSound) => void;
  condensed?: boolean;
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

interface SimpleTransferVisual {
  key: string;
  mode: 'regroup' | 'borrow';
  phase: 'source' | 'target';
  source: DisplayPlaceKey;
  target: DisplayPlaceKey;
  sourceCount: number;
  targetCount: number;
  chipLabel: string;
  note: string;
}

const AUTO_COMPLETE_CHAIN_DELAY_MS = 560;

const PLACE_ORDER: PlaceKey[] = ['h', 't', 'o'];

const PLACE_META: Record<
  DisplayPlaceKey,
  {
    label: string;
    fullLabel: string;
    modelLabel: string;
    lessonHint: string;
    cardBase: string;
    cardActive: string;
    kicker: string;
    actionBg: string;
    block: Record<BlockTone, string>;
    emptyTone: string;
    blockShape: string;
    compactBlockShape: string;
    gridClass: string;
    compactGridClass: string;
  }
> = {
  th: {
    label: '천',
    fullLabel: '천의 자리',
    modelLabel: '천 모형',
    lessonHint: '큰 입체 천 모형 1개는 1000을 뜻해요.',
    cardBase:
      'border-violet-500/25 bg-[linear-gradient(180deg,rgba(76,29,149,0.36),rgba(15,23,42,0.9))]',
    cardActive: 'ring-2 ring-violet-300/65 shadow-[0_0_24px_rgba(167,139,250,0.2)]',
    kicker: 'text-violet-200',
    actionBg: 'border-violet-400/25 bg-violet-500/10',
    block: {
      base: 'border-violet-200/70 bg-violet-400/88 shadow-[0_8px_16px_rgba(139,92,246,0.22)]',
      partner: 'border-violet-100/45 bg-violet-300/55',
      result: 'border-fuchsia-100/85 bg-fuchsia-300/92 shadow-[0_10px_22px_rgba(217,70,239,0.2)]',
      remove: 'border-rose-200/70 bg-rose-400/90 shadow-[0_10px_20px_rgba(244,63,94,0.18)]',
      accent: 'border-white/80 bg-white/92 shadow-[0_10px_22px_rgba(255,255,255,0.18)]',
    },
    emptyTone: 'border-violet-200/12 bg-violet-950/18 text-violet-100/30',
    blockShape: 'h-7 w-7 rounded-[14px] md:h-8 md:w-8',
    compactBlockShape: 'h-6 w-6 rounded-[12px] md:h-7 md:w-7',
    gridClass: 'grid-cols-2',
    compactGridClass: 'grid-cols-2',
  },
  h: {
    label: '백',
    fullLabel: '백의 자리',
    modelLabel: '백 모형',
    lessonHint: '큰 정사각형 백 모형 1개는 100을 뜻해요.',
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
    compactBlockShape: 'h-[18px] w-[18px] rounded-[7px] md:h-5 md:w-5',
    gridClass: 'grid-cols-5',
    compactGridClass: 'grid-cols-4',
  },
  t: {
    label: '십',
    fullLabel: '십의 자리',
    modelLabel: '십 모형',
    lessonHint: '긴 막대 십 모형 1개는 10을 뜻해요.',
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
    compactBlockShape: 'h-7 w-2.5 rounded-full md:h-8 md:w-[11px]',
    gridClass: 'grid-cols-5',
    compactGridClass: 'grid-cols-4',
  },
  o: {
    label: '일',
    fullLabel: '일의 자리',
    modelLabel: '일 모형',
    lessonHint: '작은 큐브 일 모형 1개는 1을 뜻해요.',
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
    compactBlockShape: 'h-3 w-3 rounded-[4px] md:h-3.5 md:w-3.5',
    gridClass: 'grid-cols-5',
    compactGridClass: 'grid-cols-4',
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

function getControlSoundForStep(phase: StepPhase): VisualControlSound {
  if (phase === 'regroup-source' || phase === 'regroup-target') {
    return 'regroup';
  }

  if (phase === 'borrow-source' || phase === 'borrow-target') {
    return 'borrow';
  }

  if (phase === 'place-complete' || phase === 'complete') {
    return 'resolve';
  }

  return 'step';
}

const ACTION_TONE: Record<ActionTone, string> = {
  neutral: 'border-slate-600/45 bg-slate-900/75 text-slate-200',
  focus: 'border-blue-400/35 bg-blue-500/12 text-blue-100',
  success: 'border-emerald-400/35 bg-emerald-500/12 text-emerald-100',
  warning: 'border-amber-400/35 bg-amber-500/12 text-amber-100',
  danger: 'border-rose-400/35 bg-rose-500/12 text-rose-100',
};

const THOUSAND_CUBE_COLORS: Record<
  BlockTone,
  { top: string; front: string; side: string; stroke: string; glow: string }
> = {
  base: {
    top: '#d8b4fe',
    front: '#c084fc',
    side: '#a855f7',
    stroke: '#f3e8ff',
    glow: '0 8px 18px rgba(139,92,246,0.26)',
  },
  partner: {
    top: '#e9d5ff',
    front: '#c4b5fd',
    side: '#8b5cf6',
    stroke: '#f5f3ff',
    glow: '0 8px 16px rgba(139,92,246,0.18)',
  },
  result: {
    top: '#f5d0fe',
    front: '#e879f9',
    side: '#c026d3',
    stroke: '#fdf4ff',
    glow: '0 10px 22px rgba(217,70,239,0.28)',
  },
  remove: {
    top: '#fecdd3',
    front: '#fb7185',
    side: '#e11d48',
    stroke: '#fff1f2',
    glow: '0 10px 18px rgba(244,63,94,0.24)',
  },
  accent: {
    top: '#ffffff',
    front: '#f8fafc',
    side: '#cbd5e1',
    stroke: '#ffffff',
    glow: '0 10px 20px rgba(255,255,255,0.28)',
  },
};

const SIMPLE_CARD_MIN_HEIGHT_CLASS = 'min-h-[200px] sm:min-h-[220px] md:min-h-[280px]';
const DENSE_SIMPLE_CARD_MIN_HEIGHT_CLASS = 'min-h-[170px] sm:min-h-[188px] md:min-h-[228px]';
const SIMPLE_CARD_HEADER_CLASS = 'flex min-h-[24px] items-center justify-between gap-2 md:min-h-[28px]';
const SIMPLE_CARD_BODY_CLASS =
  'grid min-h-0 flex-1 grid-rows-[minmax(0,1fr)_minmax(76px,0.7fr)] gap-2';
const SIMPLE_OPERAND_ROWS_CLASS =
  'grid h-full min-h-0 grid-rows-[minmax(0,1fr)_1px_minmax(0,1fr)] gap-2';

function getSimpleCardMinHeightClass(compactLayout: boolean) {
  return compactLayout ? DENSE_SIMPLE_CARD_MIN_HEIGHT_CLASS : SIMPLE_CARD_MIN_HEIGHT_CLASS;
}

function clampCount(value: number) {
  return Math.max(0, value);
}

function ThousandCube({
  tone,
  compact = false,
  highlight = false,
}: {
  tone: BlockTone;
  compact?: boolean;
  highlight?: boolean;
}) {
  const colors = THOUSAND_CUBE_COLORS[tone];

  return (
    <div
      className={`relative ${compact ? 'h-8 w-8 md:h-9 md:w-9' : 'h-9 w-9 md:h-10 md:w-10'}`}
      style={{
        filter: `${highlight ? 'drop-shadow(0 0 6px rgba(255,255,255,0.22)) ' : ''}drop-shadow(${colors.glow})`,
      }}
    >
      <svg viewBox="0 0 100 100" className="h-full w-full overflow-visible">
        <polygon points="22,30 50,12 80,30 52,48" fill={colors.top} stroke={colors.stroke} strokeWidth="3" />
        <polygon points="22,30 22,68 52,88 52,48" fill={colors.front} stroke={colors.stroke} strokeWidth="3" />
        <polygon points="52,48 80,30 80,68 52,88" fill={colors.side} stroke={colors.stroke} strokeWidth="3" />
      </svg>
    </div>
  );
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

function getPlaceModelLabel(place: DisplayPlaceKey) {
  return PLACE_META[place].modelLabel;
}

function getPlaceCountText(place: PlaceKey, count: number) {
  return `${getPlaceModelLabel(place)} ${count}개`;
}

function getFocusedPlace(step: VisualStep) {
  return step.focus === 'all' || step.focus === 'none' || step.focus === 'th' ? null : step.focus;
}

function hasVisibleBlocksInStep(step: VisualStep, op: '+' | '-') {
  const place = getFocusedPlace(step);

  if (!place) return true;

  const first = clampCount(getPlaceValue(step, place, 'first'));
  const second = clampCount(getPlaceValue(step, place, 'second'));
  const result = clampCount(getPlaceValue(step, place, 'result') ?? 0);

  if (step.phase === 'group') {
    if (op === '+') {
      const carry = getCarryIntoPlace(step, place);
      const sourceTotal = first + second + carry;
      return sourceTotal > 0 || result > 0;
    }

    return first + second > 0;
  }

  if (step.phase === 'remove') {
    return first + second > 0;
  }

  if (step.phase === 'place-complete') {
    return result > 0;
  }

  return true;
}

function pruneEmptyVisualSteps(steps: VisualStep[], op: '+' | '-') {
  return steps.reduce<VisualStep[]>((pruned, step) => {
    if (!hasVisibleBlocksInStep(step, op)) return pruned;

    const previousStep = pruned.at(-1);

    if (
      op === '+' &&
      previousStep &&
      previousStep.phase === 'group' &&
      step.phase === 'group' &&
      previousStep.focus === step.focus &&
      previousStep.focus !== 'all' &&
      previousStep.focus !== 'none' &&
      previousStep.focus !== 'th'
    ) {
      const previousPlace = previousStep.focus;
      const previousFirst = clampCount(getPlaceValue(previousStep, previousPlace, 'first'));
      const previousPartner =
        clampCount(getPlaceValue(previousStep, previousPlace, 'second')) +
        getCarryIntoPlace(previousStep, previousPlace);
      const currentFirst = clampCount(getPlaceValue(step, previousPlace, 'first'));
      const currentPartner =
        clampCount(getPlaceValue(step, previousPlace, 'second')) +
        getCarryIntoPlace(step, previousPlace);
      const currentResult = clampCount(getPlaceValue(step, previousPlace, 'result') ?? 0);

      if (
        previousFirst > 0 &&
        previousPartner === 0 &&
        currentFirst === 0 &&
        currentPartner === 0 &&
        currentResult === previousFirst
      ) {
        return pruned;
      }
    }

    pruned.push(step);
    return pruned;
  }, []);
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
    title: '일 모형을 먼저 살펴봅니다.',
    detail: `${getPlaceCountText('o', state.o1)}와 ${getPlaceCountText('o', state.o2)}를 모아 봅니다.`,
    focus: 'o',
    phase: 'group',
  });

  const sumO = state.o1 + state.o2;
  state.o1 = 0;
  state.o2 = 0;
  state.or = sumO;

  pushStep(steps, state, {
    title: '일 모형을 한곳에 모읍니다.',
    detail: `일의 자리에는 모두 ${sumO}개의 일 모형이 모였습니다.`,
    focus: 'o',
    phase: 'group',
  });

  if (sumO >= 10) {
    state.tc = Math.floor(sumO / 10);
    state.tcPos = 'o';

    pushStep(steps, state, {
      title: '일의 자리 10개를 묶습니다.',
      detail: '일의 자리 10개를 묶으면 십의 자리 1개가 되어 다음 자리로 올라갑니다.',
      focus: 'o',
      phase: 'regroup-source',
    });

    state.tcPos = 't';
    state.or = sumO % 10;

    pushStep(steps, state, {
      title: '묶은 십 1개를 십의 자리에 올립니다.',
      detail: `일의 자리에는 ${state.or}개가 남고, 묶은 십 1개가 십의 자리에 놓입니다.`,
      focus: 't',
      phase: 'regroup-target',
    });
  }

  pushStep(steps, state, {
    title: '일의 자리에 남은 일 모형을 놓습니다.',
    detail: `일의 자리 결과는 ${state.or ?? 0}입니다.`,
    focus: 'o',
    phase: 'place-complete',
  });

  pushStep(steps, state, {
    title: '십 모형을 살펴봅니다.',
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
    title: '십 모형을 한곳에 모읍니다.',
    detail: `십의 자리에는 모두 ${sumT}개의 십 모형이 모였습니다.`,
    focus: 't',
    phase: 'group',
  });

  if (sumT >= 10) {
    state.hc = Math.floor(sumT / 10);
    state.hcPos = 't';

    pushStep(steps, state, {
      title: '십의 자리 10개를 묶습니다.',
      detail: '십의 자리 10개를 묶으면 백의 자리 1개가 되어 다음 자리로 올라갑니다.',
      focus: 't',
      phase: 'regroup-source',
    });

    state.hcPos = 'h';
    state.tr = sumT % 10;

    pushStep(steps, state, {
      title: '묶은 백 1개를 백의 자리에 올립니다.',
      detail: `십의 자리에는 ${state.tr}개가 남고, 묶은 백 1개가 백의 자리에 놓입니다.`,
      focus: 'h',
      phase: 'regroup-target',
    });
  }

  pushStep(steps, state, {
    title: '십의 자리에 남은 십 모형을 놓습니다.',
    detail: `십의 자리 결과는 ${state.tr ?? 0}입니다.`,
    focus: 't',
    phase: 'place-complete',
  });

  pushStep(steps, state, {
    title: '백 모형을 살펴봅니다.',
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
    title: '백 모형을 한곳에 모읍니다.',
    detail: `백의 자리에는 모두 ${sumH}개의 백 모형이 모였습니다.`,
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

    pushStep(steps, state, {
      title: '묶은 천 1개를 천의 자리에 올립니다.',
      detail: `백의 자리에는 ${state.hr}개가 남고, 묶은 천 ${state.thousands}개가 천의 자리에 놓입니다.`,
      focus: 'th',
      phase: 'regroup-target',
    });
  }

  pushStep(steps, state, {
    title: '백의 자리에 남은 백 모형을 놓습니다.',
    detail: `백의 자리 결과는 ${state.hr ?? 0}입니다.`,
    focus: 'h',
    phase: 'place-complete',
  });

  if (sumH >= 10) {
    pushStep(steps, state, {
      title: '천의 자리에 놓인 천 모형을 결과 칸에 정리합니다.',
      detail: `천의 자리 결과는 ${state.thousands}입니다.`,
      focus: 'th',
      phase: 'place-complete',
    });
  }

  pushStep(steps, state, {
    title: '모든 자리 계산이 끝났습니다.',
    detail: '이제 결과 자리의 모형을 읽으면 최종 답을 알 수 있습니다.',
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
    if (state.t1 === 0) {
      state.h1 -= 1;
      state.borrowH = 1;
      state.borrowHPos = 'h';
      state.crossH = true;

      pushStep(steps, state, {
        title: '백의 자리 1개를 먼저 가져올 준비를 합니다.',
        detail: '십의 자리가 0이라서 바로 일의 자리로 갈 수 없어, 백 1개를 십의 자리로 보냅니다.',
        focus: 'h',
        phase: 'borrow-source',
      });

      state.borrowHPos = 't';
      state.t1 += 10;

      pushStep(steps, state, {
        title: '가져온 백 1개를 십 10개로 풉니다.',
        detail: `이제 십의 자리에 ${state.t1}개의 십 모형이 생겼습니다.`,
        focus: 't',
        phase: 'borrow-target',
      });

      state.borrowH = 0;
    }

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
    title: '일의 자리에서 뺄 일 모형을 고릅니다.',
    detail: `${state.o2}개를 골라서 빼 봅니다.`,
    focus: 'o',
    phase: 'remove',
  });

  state.o1 -= state.o2;
  state.removeO = 0;
  state.or = state.o1;

  pushStep(steps, state, {
    title: '일의 자리에 남은 일 모형을 놓습니다.',
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
    title: '십의 자리에서 뺄 십 모형을 고릅니다.',
    detail: `${state.t2}개를 골라서 빼 봅니다.`,
    focus: 't',
    phase: 'remove',
  });

  state.t1 -= state.t2;
  state.removeT = 0;
  state.tr = state.t1;

  pushStep(steps, state, {
    title: '십의 자리에 남은 십 모형을 놓습니다.',
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
    title: '백의 자리에서 뺄 백 모형을 고릅니다.',
    detail: `${state.h2}개를 골라서 빼 봅니다.`,
    focus: 'h',
    phase: 'remove',
  });

  state.h1 -= state.h2;
  state.removeH = 0;
  state.hr = state.h1;

  pushStep(steps, state, {
    title: '백의 자리에 남은 백 모형을 놓습니다.',
    detail: `${state.h2}개를 빼고 ${state.hr}개가 남았습니다.`,
    focus: 'h',
    phase: 'place-complete',
  });

  pushStep(steps, state, {
    title: '모든 자리 계산이 끝났습니다.',
    detail: '남아 있는 모형을 읽으면 최종 답을 알 수 있습니다.',
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
  compact = false,
}: {
  count: number;
  items?: BlockVisualItem[];
  place: DisplayPlaceKey;
  prefix: string;
  tone?: BlockTone;
  highlight?: boolean;
  muted?: boolean;
  compact?: boolean;
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
      className={`grid ${
        compact ? meta.compactGridClass : meta.gridClass
      } auto-rows-min content-start justify-items-center gap-1 p-1 md:gap-1.5 md:p-1.5 overflow-visible`}
    >
      <AnimatePresence initial={false}>
        {visualItems.map((item) => {
          const resolvedTone = item.tone ?? tone;
          const isAccent = resolvedTone === 'accent';
          const isResultPulse = resolvedTone === 'result' && highlight;
          const isRemove = resolvedTone === 'remove';

          return (
          <motion.div
            key={item.id}
            layout
            layoutId={item.id}
            initial={false}
            animate={{
              opacity: muted ? 0.46 : 1,
              y: isRemove ? -10 : isAccent || isResultPulse ? [0, -5, 0] : 0,
              scale: isAccent || isResultPulse ? [1, 1.1, 1] : 1,
              rotate: isRemove ? -8 : 0,
            }}
            exit={{ opacity: 0, y: isRemove ? -16 : -6, scale: isRemove ? 0.84 : 0.94 }}
            transition={{
              layout: { type: 'spring', stiffness: 240, damping: 24, mass: 0.7 },
              duration: isAccent || isResultPulse ? 0.56 : 0.28,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={`relative flex items-center justify-center overflow-visible ${
              compact ? meta.compactBlockShape : meta.blockShape
            } ${place === 'th' ? '' : meta.block[resolvedTone]} ${highlight ? 'ring-1 ring-white/65' : ''}`}
          >
            {place === 'th' ? (
              <ThousandCube tone={resolvedTone} compact={compact} highlight={highlight} />
            ) : null}
          </motion.div>
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
  const modelLabel = PLACE_META[place].modelLabel;
  const resultCount = getPlaceValue(step, place, 'result');
  const removeCount = getPlaceValue(step, place, 'remove');
  const sourceCount = getPlaceValue(step, place, 'first');
  const partnerCount = getPlaceValue(step, place, 'second');

  if (op === '+') {
    if (place === 'o' && step.tc > 0 && step.tcPos === 'o') {
      return {
        badge: '10개 묶기',
        title: '일의 자리 10개를 십 1개로 바꿉니다.',
        detail: '일 모형 10개를 묶어 십 모형 1개로 올립니다.',
        tone: 'warning',
        from: { place: 'o', count: 10 },
        to: { place: 't', count: step.tc },
      };
    }

    if (place === 't' && step.tc > 0 && step.tcPos === 't') {
      return {
        badge: '받아올림',
        title: '일의 자리에서 올라온 십 1개가 도착했습니다.',
        detail: '받아올림은 일 모형이 십의 자리로 이동한 것입니다.',
        tone: 'success',
        preview: { place: 't', count: step.tc, tone: 'result' },
      };
    }

    if (place === 't' && step.hc > 0 && step.hcPos === 't') {
      return {
        badge: '10개 묶기',
        title: '십의 자리 10개를 백 1개로 바꿉니다.',
        detail: '십 모형 10개를 묶어 백 모형 1개로 올립니다.',
        tone: 'warning',
        from: { place: 't', count: 10 },
        to: { place: 'h', count: step.hc },
      };
    }

    if (place === 'h' && step.hc > 0 && step.hcPos === 'h') {
      return {
        badge: '받아올림',
        title: '십의 자리에서 올라온 백 1개가 도착했습니다.',
        detail: '받아올림은 십 모형이 백의 자리로 이동한 것입니다.',
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
        title: `${modelLabel}을 한곳에 모읍니다.`,
        detail: `${sourceCount}개의 ${modelLabel}과 ${partnerCount}개의 ${modelLabel}을 같은 자리에서 함께 봅니다.`,
        tone: 'focus',
        preview: { place, count: Math.max(1, sourceCount + partnerCount), tone: 'accent' },
      };
    }

    if (step.focus === place && step.phase === 'place-complete') {
      return {
        badge: '결과 놓기',
        title: `${fullLabel} 결과를 정리합니다.`,
        detail: `남은 ${modelLabel} ${resultCount ?? 0}개를 결과 칸에 놓습니다.`,
        tone: 'success',
        preview: { place, count: Math.max(0, resultCount ?? 0), tone: 'result' },
      };
    }
  } else {
    if (place === 't' && step.borrowT > 0 && step.borrowTPos === 't') {
      return {
        badge: '풀기 준비',
        title: '십 1개를 풀어서 일의 자리로 보낼 준비를 합니다.',
        detail: '일의 자리가 부족할 때는 윗자리 모형 1개를 가져와 풉니다.',
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
        detail: `뺄 ${modelLabel}을 먼저 눈으로 확인한 뒤, 빠지고 남는 수를 봅니다.`,
        tone: 'danger',
        preview: { place, count: Math.max(0, removeCount), tone: 'remove' },
      };
    }

    if (step.focus === place && step.phase === 'place-complete') {
      return {
        badge: '남은 수',
        title: `${fullLabel}에 ${resultCount ?? 0}개가 남았습니다.`,
        detail: `제거된 ${modelLabel}을 빼고 남은 양이 결과가 됩니다.`,
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
      title: '결과 칸의 모형을 읽어 답을 말합니다.',
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
  const currentHint = op === '+' ? '첫 번째 수의 모형' : '지금 남아 있는 모형';
  const partnerHint = op === '+' ? '더해질 모형' : '빼야 할 모형';

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
            <p className="text-[11px] text-slate-400">계산 후 남는 {meta.modelLabel}을 모아 둡니다.</p>
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
  if (step.phase === 'regroup-source') {
    if (step.focus === 'o') return '일→십';
    if (step.focus === 't') return '십→백';
    return '백→천';
  }
  if (step.phase === 'regroup-target') return '올림';
  if (step.phase === 'borrow-source') return '가져오기';
  if (step.phase === 'borrow-target') {
    if (step.focus === 'o') return '십→일';
    if (step.focus === 't') return '백→십';
    return '풀기';
  }
  if (step.phase === 'remove') return '빼기';
  if (step.phase === 'place-complete') return '놓기';
  return '완료';
}

function getMinimalStepNote(step: VisualStep) {
  if (step.phase === 'intro') return '';
  if (step.phase === 'regroup-source') {
    if (step.focus === 'o') return '일→십으로 묶어 올립니다.';
    if (step.focus === 't') return '십→백으로 묶어 올립니다.';
    return '백 10개를 천 1개로 묶습니다.';
  }
  if (step.phase === 'regroup-target') {
    if (step.focus === 't' && step.tcPos === 't') return '일의 자리에서 십의 자리로 올립니다.';
    if (step.focus === 'h' && step.hcPos === 'h') return '십의 자리에서 백의 자리로 올립니다.';
    return '윗자리로 옮깁니다.';
  }
  if (step.phase === 'borrow-source') return '윗자리 1개를 가져옵니다.';
  if (step.phase === 'borrow-target') {
    if (step.focus === 'o' && step.borrowTPos === 'o') return '십의 자리에서 일의 자리로 풉니다.';
    if (step.focus === 't' && step.borrowHPos === 't') return '백의 자리에서 십의 자리로 풉니다.';
    return '10개로 바꿉니다.';
  }
  if (step.phase === 'remove' && step.focus !== 'all' && step.focus !== 'none' && step.focus !== 'th') {
    return `${getPlaceValue(step, step.focus, 'remove')}개를 뺍니다.`;
  }
  if (step.phase === 'complete') return '';
  return '';
}

function getMinimalPlaceStatus(step: VisualStep, place: PlaceKey, op: '+' | '-') {
  if (step.phase === 'complete') return '완료';
  if (step.focus !== place && step.focus !== 'all') return null;

  if (op === '+') {
    if (place === 'o' && step.tc > 0 && step.tcPos === 'o') return '일→십';
    if (place === 't' && step.tc > 0 && step.tcPos === 't') return '올림';
    if (place === 't' && step.hc > 0 && step.hcPos === 't') return '십→백';
    if (place === 'h' && step.hc > 0 && step.hcPos === 'h') return '올림';
  } else {
    if (place === 't' && step.borrowT > 0 && step.borrowTPos === 't') return '풀기';
    if (place === 'o' && step.borrowT > 0 && step.borrowTPos === 'o') return '십→일';
    if (place === 'h' && step.borrowH > 0 && step.borrowHPos === 'h') return '풀기';
    if (place === 't' && step.borrowH > 0 && step.borrowHPos === 't') return '백→십';
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
      className={`flex min-h-[240px] min-w-0 flex-col gap-2 overflow-hidden rounded-[26px] border p-3 sm:min-h-[260px] md:min-h-[300px] ${
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
      return op === '+' ? `${PLACE_META[step.focus].modelLabel}을 모읍니다.` : `${PLACE_META[step.focus].modelLabel}을 확인합니다.`;
    }
    return `${PLACE_META[step.focus].modelLabel}을 봅니다.`;
  }
  if (step.phase === 'regroup-source') {
    if (step.focus === 'o') return '일의 자리 10개를 묶어 십의 자리로 올릴 준비를 합니다.';
    if (step.focus === 't') return '십의 자리 10개를 묶어 백의 자리로 올릴 준비를 합니다.';
    return '백 10개를 묶어 천 1개를 만듭니다.';
  }
  if (step.phase === 'regroup-target') {
    if (step.thousands > 0) return '묶은 천 1개를 천의 자리에 올립니다.';
    if (step.focus === 't' && step.tcPos === 't') return '묶은 십 1개를 십의 자리에 올립니다.';
    if (step.focus === 'h' && step.hcPos === 'h') return '묶은 백 1개를 백의 자리에 올립니다.';
    return '윗자리로 옮깁니다.';
  }
  if (step.phase === 'borrow-source') return '윗자리에서 가져옵니다.';
  if (step.phase === 'borrow-target') {
    if (step.focus === 'o' && step.borrowTPos === 'o') return '가져온 십 1개를 일의 자리 10개로 풉니다.';
    if (step.focus === 't' && step.borrowHPos === 't') return '가져온 백 1개를 십의 자리 10개로 풉니다.';
    return '1개를 10개로 풉니다.';
  }
  if (step.phase === 'remove' && step.focus !== 'all' && step.focus !== 'none' && step.focus !== 'th') {
    return `${PLACE_META[step.focus].modelLabel}을 뺍니다.`;
  }
  if (step.phase === 'place-complete') {
    if (step.focus === 'th') return '천의 자리에 결과를 놓습니다.';
    return '결과를 놓습니다.';
  }
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
    if (place === 'o' && step.tc > 0 && step.tcPos === 'o') return '일→십';
    if (place === 't' && step.tc > 0 && step.tcPos === 't') return '올림';
    if (place === 't' && step.hc > 0 && step.hcPos === 't') return '십→백';
    if (place === 'h' && step.hc > 0 && step.hcPos === 'h') return '올림';
  } else {
    if (place === 't' && step.borrowT > 0 && step.borrowTPos === 't') return '가져오기';
    if (place === 'o' && step.borrowT > 0 && step.borrowTPos === 'o') return '십→일';
    if (place === 'h' && step.borrowH > 0 && step.borrowHPos === 'h') return '가져오기';
    if (place === 't' && step.borrowH > 0 && step.borrowHPos === 't') return '백→십';
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

function getBorrowTargetCount(step: VisualStep, place: PlaceKey) {
  if (step.phase !== 'borrow-target') return 0;
  if (place === 'o' && step.borrowTPos === 'o') return 10;
  if (place === 't' && step.borrowHPos === 't') return 10;
  return 0;
}

function getSimpleTransferVisual(step: VisualStep, op: '+' | '-'): SimpleTransferVisual | null {
  if (op === '+') {
    if (step.phase === 'regroup-source' && step.tc > 0 && step.tcPos === 'o') {
      return {
        key: 'o-to-t',
        mode: 'regroup',
        phase: 'source',
        source: 'o',
        target: 't',
        sourceCount: 10,
        targetCount: 1,
        chipLabel: '일→십',
        note: '일의 자리 10개를 묶어 십의 자리 1개로 올릴 준비를 합니다.',
      };
    }

    if (step.phase === 'regroup-target' && step.tc > 0 && step.tcPos === 't') {
      return {
        key: 'o-to-t',
        mode: 'regroup',
        phase: 'target',
        source: 'o',
        target: 't',
        sourceCount: 10,
        targetCount: 1,
        chipLabel: '일→십',
        note: '묶은 십 1개가 일의 자리에서 십의 자리로 올라갑니다.',
      };
    }

    if (step.phase === 'regroup-source' && step.hc > 0 && step.hcPos === 't') {
      return {
        key: 't-to-h',
        mode: 'regroup',
        phase: 'source',
        source: 't',
        target: 'h',
        sourceCount: 10,
        targetCount: 1,
        chipLabel: '십→백',
        note: '십의 자리 10개를 묶어 백의 자리 1개로 올릴 준비를 합니다.',
      };
    }

    if (step.phase === 'regroup-target' && step.hc > 0 && step.hcPos === 'h') {
      return {
        key: 't-to-h',
        mode: 'regroup',
        phase: 'target',
        source: 't',
        target: 'h',
        sourceCount: 10,
        targetCount: 1,
        chipLabel: '십→백',
        note: '묶은 백 1개가 십의 자리에서 백의 자리로 올라갑니다.',
      };
    }

    if (step.phase === 'regroup-source' && step.thousands > 0) {
      return {
        key: 'h-to-th',
        mode: 'regroup',
        phase: 'source',
        source: 'h',
        target: 'th',
        sourceCount: 10,
        targetCount: step.thousands,
        chipLabel: '백→천',
        note: '백의 자리 10개를 묶어 천의 자리로 올릴 준비를 합니다.',
      };
    }

    if (step.phase === 'regroup-target' && step.thousands > 0) {
      return {
        key: 'h-to-th',
        mode: 'regroup',
        phase: 'target',
        source: 'h',
        target: 'th',
        sourceCount: 10,
        targetCount: step.thousands,
        chipLabel: '백→천',
        note: '묶은 천 1개가 백의 자리에서 천의 자리로 올라갑니다.',
      };
    }
  } else {
    if (step.phase === 'borrow-source' && step.borrowT > 0 && step.borrowTPos === 't') {
      return {
        key: 't-to-o',
        mode: 'borrow',
        phase: 'source',
        source: 't',
        target: 'o',
        sourceCount: 1,
        targetCount: 10,
        chipLabel: '십→일',
        note: '십의 자리 1개를 가져와 일의 자리로 보낼 준비를 합니다.',
      };
    }

    if (step.phase === 'borrow-target' && step.borrowTPos === 'o') {
      return {
        key: 't-to-o',
        mode: 'borrow',
        phase: 'target',
        source: 't',
        target: 'o',
        sourceCount: 1,
        targetCount: 10,
        chipLabel: '십→일',
        note: '가져온 십 1개를 일의 자리 10개로 풉니다.',
      };
    }

    if (step.phase === 'borrow-source' && step.borrowH > 0 && step.borrowHPos === 'h') {
      return {
        key: 'h-to-t',
        mode: 'borrow',
        phase: 'source',
        source: 'h',
        target: 't',
        sourceCount: 1,
        targetCount: 10,
        chipLabel: '백→십',
        note: '백의 자리 1개를 가져와 십의 자리로 보낼 준비를 합니다.',
      };
    }

    if (step.phase === 'borrow-target' && step.borrowHPos === 't') {
      return {
        key: 'h-to-t',
        mode: 'borrow',
        phase: 'target',
        source: 'h',
        target: 't',
        sourceCount: 1,
        targetCount: 10,
        chipLabel: '백→십',
        note: '가져온 백 1개를 십의 자리 10개로 풉니다.',
      };
    }
  }

  return null;
}

function getTransferPieceOffsets(count: number, place: DisplayPlaceKey) {
  if (count <= 1) {
    return [{ x: 0, y: 0 }];
  }

  if (place === 'th') {
    return Array.from({ length: count }, (_, index) => ({
      x: ((index % 2) - 0.5) * 22,
      y: Math.floor(index / 2) * 22,
    }));
  }

  const xGap = place === 't' ? 16 : 18;
  const yGap = place === 'h' ? 20 : 18;

  return Array.from({ length: count }, (_, index) => ({
    x: ((index % 5) - 2) * xGap,
    y: (Math.floor(index / 5) - 0.5) * yGap,
  }));
}

function getTransferPieceShape(place: DisplayPlaceKey, role: 'source' | 'target') {
  if (place === 'th') {
    return role === 'target' ? 'h-10 w-10 rounded-[16px]' : 'h-8 w-8 rounded-[14px]';
  }

  if (place === 'h') {
    return role === 'target' ? 'h-8 w-8 rounded-[12px]' : 'h-7 w-7 rounded-[10px]';
  }

  if (place === 't') {
    return role === 'target' ? 'h-12 w-4 rounded-full' : 'h-10 w-3.5 rounded-full';
  }

  return role === 'target' ? 'h-7 w-7 rounded-[10px]' : 'h-6 w-6 rounded-[9px]';
}

function getTransferPieceTone(place: DisplayPlaceKey, mode: 'regroup' | 'borrow', role: 'source' | 'target') {
  const meta = PLACE_META[place];
  const baseTone =
    role === 'target'
      ? mode === 'regroup'
        ? meta.block.result
        : meta.block.accent
      : meta.block.accent;

  return `${baseTone} ring-1 ring-white/65`;
}

function getTransferPieceBlockTone(mode: 'regroup' | 'borrow', role: 'source' | 'target'): BlockTone {
  if (role === 'target') {
    return mode === 'regroup' ? 'result' : 'accent';
  }

  return 'accent';
}

function TransferMorphVisual({
  transfer,
  sourceLeft,
  targetLeft,
}: {
  transfer: SimpleTransferVisual;
  sourceLeft: number;
  targetLeft: number;
}) {
  const isTargetPhase = transfer.phase === 'target';
  const sourceOffsets = getTransferPieceOffsets(transfer.sourceCount, transfer.source);
  const targetOffsets = getTransferPieceOffsets(transfer.targetCount, transfer.target);
  const glowClass =
    transfer.mode === 'regroup'
      ? 'bg-[radial-gradient(circle,rgba(110,231,183,0.38),rgba(56,189,248,0.18),transparent_72%)]'
      : 'bg-[radial-gradient(circle,rgba(253,224,71,0.34),rgba(251,146,60,0.16),transparent_72%)]';

  return (
    <motion.div
      initial={false}
      animate={{
        left: `${isTargetPhase ? targetLeft : sourceLeft}%`,
        top: isTargetPhase ? '25%' : '25%',
        scale: isTargetPhase ? 1.03 : 0.98,
      }}
      transition={{ duration: 0.86, ease: [0.22, 1, 0.36, 1] }}
      className="absolute -translate-x-1/2 -translate-y-1/2"
    >
      <div className="relative h-28 w-36">
        <motion.div
          initial={false}
          animate={{
            opacity: isTargetPhase ? 0.34 : 0.2,
            scale: isTargetPhase ? 1.16 : 0.94,
          }}
          transition={{ duration: 0.68, ease: [0.22, 1, 0.36, 1] }}
          className={`absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl ${glowClass}`}
        />

        {sourceOffsets.map((offset, index) => (
          <motion.div
            key={`${transfer.key}-source-${index}`}
            initial={false}
            animate={{
              x: isTargetPhase ? offset.x * 0.18 : offset.x,
              y: isTargetPhase ? offset.y * 0.18 : offset.y,
              scale: isTargetPhase ? 0.42 : 1,
              opacity: isTargetPhase ? 0 : 1,
              rotate: isTargetPhase && transfer.mode === 'borrow' ? -18 : 0,
            }}
            transition={{
              duration: 0.82,
              delay: Math.min(index, 4) * 0.018,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center"
          >
            {transfer.source === 'th' ? (
              <ThousandCube tone={getTransferPieceBlockTone(transfer.mode, 'source')} compact />
            ) : (
              <div
                className={`${getTransferPieceShape(transfer.source, 'source')} ${getTransferPieceTone(
                  transfer.source,
                  transfer.mode,
                  'source',
                )}`}
              />
            )}
          </motion.div>
        ))}

        {targetOffsets.map((offset, index) => (
          <motion.div
            key={`${transfer.key}-target-${index}`}
            initial={false}
            animate={{
              x: isTargetPhase ? offset.x : offset.x * 0.14,
              y: isTargetPhase ? offset.y : offset.y * 0.14,
              scale: isTargetPhase ? 1 : 0.36,
              opacity: isTargetPhase ? 1 : 0,
              rotate: isTargetPhase ? 0 : 12,
            }}
            transition={{
              duration: 0.88,
              delay: isTargetPhase ? 0.08 + Math.min(index, 4) * 0.018 : 0,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center"
          >
            {transfer.target === 'th' ? (
              <ThousandCube tone={getTransferPieceBlockTone(transfer.mode, 'target')} compact />
            ) : (
              <div
                className={`${getTransferPieceShape(transfer.target, 'target')} ${getTransferPieceTone(
                  transfer.target,
                  transfer.mode,
                  'target',
                )}`}
              />
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function SimpleTransferOverlay({
  transfer,
  stepIdx,
  showThousandsSection,
}: {
  transfer: SimpleTransferVisual | null;
  stepIdx: number;
  showThousandsSection: boolean;
}) {
  if (!transfer) return null;

  const displayOrder: DisplayPlaceKey[] = showThousandsSection ? ['th', 'h', 't', 'o'] : ['h', 't', 'o'];
  const centers = displayOrder.reduce((acc, place, index) => {
    acc[place] = ((index + 0.5) / displayOrder.length) * 100;
    return acc;
  }, { th: 0, h: 0, t: 0, o: 0 } as Record<DisplayPlaceKey, number>);
  const sourceLeft = centers[transfer.source];
  const targetLeft = centers[transfer.target];
  const lineLeft = Math.min(sourceLeft, targetLeft);
  const lineWidth = Math.abs(targetLeft - sourceLeft);
  const middleLeft = (sourceLeft + targetLeft) / 2;
  const railClass =
    transfer.mode === 'regroup'
      ? 'bg-gradient-to-r from-sky-300/0 via-cyan-200/85 to-emerald-300/0'
      : 'bg-gradient-to-r from-rose-300/0 via-amber-200/85 to-orange-300/0';
  const markerClass =
    transfer.mode === 'regroup'
      ? 'border-cyan-100/80 bg-cyan-200/85'
      : 'border-amber-100/80 bg-amber-200/85';
  const noteClass =
    transfer.mode === 'regroup'
      ? 'border-cyan-200/25 bg-slate-950/78 text-cyan-50'
      : 'border-amber-200/25 bg-slate-950/78 text-amber-50';

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={transfer.key}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.22 }}
        className="pointer-events-none absolute inset-0 z-20"
      >
        <motion.div
          initial={false}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
          className={`absolute h-[2px] origin-center rounded-full ${railClass}`}
          style={{ top: '26%', left: `${lineLeft}%`, width: `${lineWidth}%` }}
        />

        {[sourceLeft, targetLeft].map((left, index) => (
          <motion.div
            key={`${transfer.key}-marker-${index}`}
            animate={{ scale: [0.92, 1.45, 0.92], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.1, repeat: Infinity, delay: index * 0.12, ease: 'easeInOut' }}
            className={`absolute h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border ${markerClass}`}
            style={{ top: '26%', left: `${left}%` }}
          />
        ))}

        <AnimatePresence mode="wait">
          <motion.div
            key={`${transfer.key}-note-${transfer.phase}-${stepIdx}`}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className={`absolute min-w-[148px] -translate-x-1/2 rounded-full border px-3 py-1 text-center text-[11px] font-black backdrop-blur-sm ${noteClass}`}
            style={{ top: '13%', left: `${middleLeft}%` }}
          >
            {transfer.note}
          </motion.div>
        </AnimatePresence>

        <TransferMorphVisual transfer={transfer} sourceLeft={sourceLeft} targetLeft={targetLeft} />
      </motion.div>
    </AnimatePresence>
  );
}

function CompactTransferBanner({
  transfer,
}: {
  transfer: SimpleTransferVisual;
}) {
  const containerClass =
    transfer.mode === 'regroup'
      ? 'border-cyan-300/20 bg-cyan-500/10 text-cyan-50'
      : 'border-amber-300/20 bg-amber-500/10 text-amber-50';
  const badgeClass =
    transfer.mode === 'regroup'
      ? 'border-cyan-200/35 bg-cyan-200/10 text-cyan-100'
      : 'border-amber-200/35 bg-amber-200/10 text-amber-100';

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -4 }}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className={`rounded-[22px] border px-4 py-3 shadow-inner ${containerClass}`}
    >
      <div className="flex flex-wrap items-center gap-2">
        <span className={`rounded-full border px-2.5 py-1 text-[10px] font-black ${badgeClass}`}>
          {transfer.chipLabel}
        </span>
        <p className="text-sm font-bold leading-6">{transfer.note}</p>
      </div>
    </motion.div>
  );
}

function SimpleThousandsCard({
  step,
  compactLayout = false,
}: {
  step: VisualStep;
  compactLayout?: boolean;
}) {
  const meta = PLACE_META.th;
  const resultCount = clampCount(step.thousands);
  const isFocused = step.focus === 'th' || step.focus === 'all';
  const dimmed = step.focus !== 'th' && step.focus !== 'all' && step.focus !== 'none';
  const isActive =
    (step.focus === 'th' && (step.phase === 'regroup-target' || step.phase === 'place-complete')) ||
    step.phase === 'complete';
  const transferRole = step.focus === 'th' && step.phase === 'regroup-target' && resultCount > 0 ? 'target' : null;
  const transferMode = transferRole ? 'regroup' : null;
  const transferShadowClass =
    transferRole === 'target'
      ? transferMode === 'regroup'
        ? 'shadow-[0_0_32px_rgba(52,211,153,0.16)]'
        : 'shadow-[0_0_32px_rgba(251,191,36,0.16)]'
      : '';
  const status =
    resultCount > 0
      ? step.phase === 'regroup-source'
        ? '백→천'
        : step.phase === 'regroup-target'
          ? '올림'
        : '결과'
      : null;
  const cardMinHeightClass = getSimpleCardMinHeightClass(compactLayout);
  const resultItems = Array.from({ length: resultCount }, (_, index) => ({
    id: `thousands-result-${index}`,
    tone: 'result' as BlockTone,
  }));

  return (
    <motion.section
      layout
      animate={
        transferRole === 'target' ? { y: [0, -2, 0], scale: [1, 1.015, 1] } : { y: 0, scale: 1 }
      }
      transition={{
        layout: { type: 'spring', stiffness: 240, damping: 24 },
        duration: transferRole ? 0.6 : 0.24,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`flex min-w-0 flex-col ${compactLayout ? 'gap-1.5 rounded-[20px] p-2 md:p-2.5' : 'gap-2 rounded-[22px] p-2.5 md:p-3'} transition-all ${cardMinHeightClass} ${
        meta.cardBase
      } ${isActive ? meta.cardActive : ''} ${transferShadowClass} ${
        dimmed ? 'opacity-55 saturate-[0.85]' : resultCount === 0 ? 'opacity-70 saturate-[0.82]' : 'opacity-100'
      }`}
    >
      <div className={SIMPLE_CARD_HEADER_CLASS}>
        <div className={`text-center text-xs font-black md:text-sm ${meta.kicker}`}>{meta.label}</div>
        {status ? (
          <div className={`rounded-full border px-2 py-0.5 text-[10px] font-black ${meta.actionBg}`}>
            {status}
          </div>
        ) : null}
      </div>

      <div className={SIMPLE_CARD_BODY_CLASS}>
        <div className="min-h-0 rounded-[18px] border border-white/8 bg-slate-950/28 p-2.5">
          <div className={SIMPLE_OPERAND_ROWS_CLASS}>
            <div className="min-h-0 overflow-visible">
              <BlockSet
                count={0}
                place="th"
                prefix="th-simple-top"
                tone="base"
                compact={compactLayout}
              />
            </div>
            <div className="h-px rounded-full bg-white/10" />
            <div className="min-h-0 overflow-visible">
              <BlockSet
                count={step.focus === 'th' && step.phase === 'regroup-target' ? resultItems.length : 0}
                items={step.focus === 'th' && step.phase === 'regroup-target' ? resultItems : undefined}
                place="th"
                prefix="th-simple-bottom"
                tone="partner"
                compact={compactLayout}
                highlight={isFocused && step.phase === 'regroup-target'}
              />
            </div>
          </div>
        </div>

        <div className="min-h-0 rounded-[18px] border border-white/10 bg-slate-950/38 p-2.5">
          <div className="min-h-full overflow-visible">
            <BlockSet
              count={step.phase === 'place-complete' || step.phase === 'complete' ? resultItems.length : 0}
              items={step.phase === 'place-complete' || step.phase === 'complete' ? resultItems : undefined}
              place="th"
              prefix="thousands-simple-result"
              tone="result"
              highlight={isFocused && (step.phase === 'place-complete' || step.phase === 'complete')}
              compact={compactLayout}
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
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
  compactLayout = false,
}: {
  n1: number;
  n2: number;
  op: '+' | '-';
  compactLayout?: boolean;
}) {
  const digits1 = splitDigits4(n1);
  const digits2 = splitDigits4(n2);
  const panelWidthClass = compactLayout ? 'w-full sm:w-[104px] md:w-[152px]' : 'w-full sm:w-[118px] md:w-[172px]';
  const digitClass = compactLayout
    ? 'text-[1.35rem] font-black leading-none text-white sm:text-[1.75rem] md:text-[2.3rem]'
    : 'text-[1.5rem] font-black leading-none text-white sm:text-[1.95rem] md:text-[2.55rem]';
  const operatorClass = compactLayout
    ? 'text-[1.35rem] font-black leading-none text-yellow-400 sm:text-[1.75rem] md:text-[2.3rem]'
    : 'text-[1.5rem] font-black leading-none text-yellow-400 sm:text-[1.95rem] md:text-[2.55rem]';
  const cardMinHeightClass = getSimpleCardMinHeightClass(compactLayout);

  return (
    <div
      className={`flex shrink-0 flex-col rounded-[22px] border border-white/10 bg-slate-800/72 p-2.5 ${panelWidthClass} ${cardMinHeightClass} md:p-3`}
    >
      <div aria-hidden="true" className={`${SIMPLE_CARD_HEADER_CLASS} opacity-0`}>
        <div className="text-center text-xs font-black md:text-sm">백</div>
      </div>

      <div className={SIMPLE_CARD_BODY_CLASS}>
        <div className="min-h-0 p-2.5">
          <div className={`${SIMPLE_OPERAND_ROWS_CLASS} text-right`}>
            <div className="grid grid-cols-[16px_repeat(4,minmax(0,1fr))] gap-x-1.5 self-start md:grid-cols-[20px_repeat(4,minmax(0,1fr))] md:gap-x-2.5">
              <div />
              {digits1.map((digit, index) => (
                <div
                  key={`simple-top-${index}`}
                  className={digitClass}
                >
                  {digit ?? ''}
                </div>
              ))}
            </div>

            <div aria-hidden="true" className="h-px opacity-0" />

            <div className="grid grid-cols-[16px_repeat(4,minmax(0,1fr))] gap-x-1.5 self-start md:grid-cols-[20px_repeat(4,minmax(0,1fr))] md:gap-x-2.5">
              <div className={operatorClass}>
                {op}
              </div>
              {digits2.map((digit, index) => (
                <div
                  key={`simple-bottom-${index}`}
                  className={digitClass}
                >
                  {digit ?? ''}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="min-h-0 p-2.5">
          <div className="grid grid-cols-[16px_repeat(4,minmax(0,1fr))] gap-x-1.5 md:grid-cols-[20px_repeat(4,minmax(0,1fr))] md:gap-x-2.5">
            <div className="col-span-5 h-1 rounded-full bg-slate-600/90" />
          </div>
        </div>
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
  transferRole,
  transferMode,
  compactLayout = false,
}: {
  place: PlaceKey;
  step: VisualStep;
  op: '+' | '-';
  steps: VisualStep[];
  stepIdx: number;
  pools: SimplePlacePools;
  transferRole?: 'source' | 'target' | null;
  transferMode?: 'regroup' | 'borrow' | null;
  compactLayout?: boolean;
}) {
  const meta = PLACE_META[place];
  const isFocused = step.focus === place || step.focus === 'all';
  const dimmed = step.focus !== place && step.focus !== 'all' && step.focus !== 'none';
  const status = getSimplePlaceStatus(step, place, op);
  const visual = buildSimplePlaceVisual({ steps, stepIdx, step, place, op, pools });
  const resultVisible = visual.bottomItems.length > 0 && visual.topItems.length === 0;
  const transferShadowClass =
    transferRole === 'source'
      ? transferMode === 'regroup'
        ? 'shadow-[0_0_26px_rgba(34,211,238,0.12)]'
        : 'shadow-[0_0_26px_rgba(251,146,60,0.14)]'
      : transferRole === 'target'
        ? transferMode === 'regroup'
          ? 'shadow-[0_0_32px_rgba(52,211,153,0.16)]'
          : 'shadow-[0_0_32px_rgba(251,191,36,0.16)]'
        : '';
  const cardMinHeightClass = getSimpleCardMinHeightClass(compactLayout);

  return (
    <motion.section
      layout
      animate={
        transferRole === 'source'
          ? { y: [0, -4, 0], scale: [1, 1.01, 1] }
          : transferRole === 'target'
            ? { y: [0, -2, 0], scale: [1, 1.015, 1] }
            : { y: 0, scale: 1 }
      }
      transition={{
        layout: { type: 'spring', stiffness: 240, damping: 24 },
        duration: transferRole ? 0.6 : 0.24,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`flex min-w-0 flex-col ${compactLayout ? 'gap-1.5 rounded-[20px] p-2 md:p-2.5' : 'gap-2 rounded-[22px] p-2.5 md:p-3'} transition-all ${cardMinHeightClass} ${
        meta.cardBase
      } ${isFocused ? meta.cardActive : ''} ${transferShadowClass} ${
        dimmed ? 'opacity-55 saturate-[0.85]' : 'opacity-100'
      }`}
    >
      <div className={SIMPLE_CARD_HEADER_CLASS}>
        <div className={`text-center text-xs font-black md:text-sm ${meta.kicker}`}>{meta.label}</div>
        {status ? (
          <div className={`rounded-full border px-2 py-0.5 text-[10px] font-black ${meta.actionBg}`}>
            {status}
          </div>
        ) : null}
      </div>

      <div className={SIMPLE_CARD_BODY_CLASS}>
        <div className="min-h-0 rounded-[18px] border border-white/8 bg-slate-950/28 p-2.5">
          <div className={SIMPLE_OPERAND_ROWS_CLASS}>
            <div className="min-h-0 overflow-visible">
              <BlockSet
                count={visual.topItems.length}
                items={visual.topItems}
                place={place}
                prefix={`${place}-simple-top`}
                tone="base"
                highlight={isFocused && !resultVisible}
                compact={compactLayout}
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
                compact={compactLayout}
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
              compact={compactLayout}
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
  condensed = false,
}) => {
  const { n1, op, n2 } = useMemo(() => parseProblem(problemText), [problemText]);
  const steps = useMemo(
    () => pruneEmptyVisualSteps(op === '+' ? genAdd(n1, n2) : genSub(n1, n2), op),
    [n1, op, n2],
  );
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
  const autoCompleteTimerRef = useRef<number | null>(null);
  const lastMoveSourceRef = useRef<StepNavigationSource>('reset');

  const clearAutoCompleteTimer = () => {
    if (autoCompleteTimerRef.current !== null) {
      window.clearTimeout(autoCompleteTimerRef.current);
      autoCompleteTimerRef.current = null;
    }
  };

  useEffect(() => {
    clearAutoCompleteTimer();
    lastMoveSourceRef.current = 'reset';
    setStepIdx(0);
  }, [problemText]);

  useEffect(() => () => clearAutoCompleteTimer(), []);

  const currentStepIdx = steps.length > 0 ? Math.min(stepIdx, steps.length - 1) : 0;
  const step = steps[currentStepIdx];
  const previousStep = currentStepIdx > 0 ? steps[currentStepIdx - 1] : undefined;

  if (!step) {
    return null;
  }

  const transfer = getSimpleTransferVisual(step, op);
  const showThousandsSection = op === '+' && step.thousands > 0;
  const desktopCompactLayout = showThousandsSection || condensed;
  const isPenultimateStep = currentStepIdx === steps.length - 2;
  const finalStep = isPenultimateStep ? steps[currentStepIdx + 1] : undefined;

  const moveStep = (nextIndex: number, source: StepNavigationSource) => {
    clearAutoCompleteTimer();
    if (steps.length === 0) return;

    const safeIndex = Math.min(Math.max(nextIndex, 0), steps.length - 1);
    const nextStep = steps[safeIndex];
    lastMoveSourceRef.current = source;
    setStepIdx(safeIndex);
    onControlSound?.(getControlSoundForStep(nextStep.phase));
  };

  useEffect(() => {
    if (!isPenultimateStep || finalStep?.phase !== 'complete') return;
    if (lastMoveSourceRef.current !== 'forward') return;

    autoCompleteTimerRef.current = window.setTimeout(() => {
      moveStep(currentStepIdx + 1, 'auto');
    }, AUTO_COMPLETE_CHAIN_DELAY_MS);

    return () => clearAutoCompleteTimer();
  }, [currentStepIdx, finalStep?.phase, isPenultimateStep, steps, onControlSound]);

  return (
    <motion.div
      layout
      className={`flex h-full min-h-0 flex-col rounded-[28px] border-4 border-slate-700 bg-[linear-gradient(180deg,rgba(15,23,42,0.96),rgba(2,6,23,0.98))] shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] ${
        condensed ? 'gap-2.5 p-2.5' : 'gap-3 p-3'
      }`}
    >
      <div className="rounded-[22px] border border-white/10 bg-slate-900/78 px-3 py-2.5">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
          <AnimatePresence mode="wait">
            <motion.p
              key={`${currentStepIdx}-${step.title}`}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.14 }}
              className="min-w-0 text-sm font-black leading-5 text-yellow-300 sm:truncate sm:text-base sm:leading-normal"
            >
              {getSimpleStepMessage(step, op, previousStep)}
            </motion.p>
          </AnimatePresence>

          <div className="flex items-center gap-1.5 self-end sm:self-auto">
            <button
              type="button"
              onClick={() => moveStep(currentStepIdx - 1, 'backward')}
              disabled={currentStepIdx === 0}
              aria-label="이전 단계"
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-slate-800 text-white transition hover:bg-slate-700 disabled:opacity-45"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              type="button"
              onClick={() => moveStep(currentStepIdx + 1, 'forward')}
              disabled={currentStepIdx === steps.length - 1}
              aria-label="다음 단계"
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-600 text-white transition hover:bg-blue-500 disabled:opacity-45"
            >
              <ChevronRight size={16} />
            </button>
            <button
              type="button"
              onClick={() => moveStep(0, 'reset')}
              aria-label="처음으로"
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-slate-800 text-white transition hover:bg-slate-700"
            >
              <RotateCcw size={16} />
            </button>
          </div>
        </div>
      </div>

      <LayoutGroup id="visual-calculator-blocks">
        <div className="flex min-h-0 flex-1 flex-col gap-3 xl:hidden">
          <CompactProblemBoard n1={n1} n2={n2} op={op} step={step} />

          {transfer ? <CompactTransferBanner transfer={transfer} /> : null}

          <div className="grid min-h-0 gap-3 sm:grid-cols-2">
            {showThousandsSection ? <SimpleThousandsCard step={step} compactLayout /> : null}
            {PLACE_ORDER.map((place) => (
              <React.Fragment key={place}>
                <CompactPlaceCard place={place} step={step} op={op} />
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className={`hidden min-h-0 flex-1 xl:flex ${condensed ? 'gap-2' : 'gap-3'}`}>
          <SimpleFormulaPanel n1={n1} n2={n2} op={op} compactLayout={desktopCompactLayout} />

          <div className="relative min-h-0 flex-1">
            <SimpleTransferOverlay
              transfer={transfer}
              stepIdx={currentStepIdx}
              showThousandsSection={showThousandsSection}
            />

            <div className={`grid min-h-0 h-full ${showThousandsSection ? 'grid-cols-4 gap-2 md:gap-2.5' : 'grid-cols-3 gap-2.5 md:gap-3'}`}>
              {showThousandsSection ? <SimpleThousandsCard step={step} compactLayout={desktopCompactLayout} /> : null}
              {PLACE_ORDER.map((place) => (
                <React.Fragment key={place}>
                  <SimplePlaceCard
                    place={place}
                    step={step}
                    op={op}
                    steps={steps}
                    stepIdx={currentStepIdx}
                    pools={placePools[place]}
                    transferRole={
                      transfer ? (transfer.source === place ? 'source' : transfer.target === place ? 'target' : null) : null
                    }
                    transferMode={transfer?.mode ?? null}
                    compactLayout={desktopCompactLayout}
                  />
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </LayoutGroup>
    </motion.div>
  );
};
