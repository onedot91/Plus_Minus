import React, { useState, useEffect, useRef, useEffectEvent } from 'react';
import { Sword, Heart, RotateCcw, Play, Sparkles, Star, ChevronDown, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { VisualCalculator, type VisualControlSound } from './components/VisualCalculator';
import { ErrorBoundary } from './components/ErrorBoundary';
import startHeroImage from './assets/intro-math-game.jpeg';
import stage1DefeatSceneImage from './assets/stage1-defeat-scene-cutout.png';
import stage1ChurusigiDefeatSceneImage from './assets/stage1-churusigi-defeat-scene.jpeg';
import stage2DefeatSceneImage from './assets/stage2-defeat-scene.jpeg';
import stage2JjangpalDefeatSceneImage from './assets/stage2-jjangpal-defeat-scene.jpeg';
import stage3DefeatSceneImage from './assets/stage3-defeat-scene-cutout.png';
import stage3GamjaanigumaDefeatSceneImage from './assets/stage3-gamjaaniguma-defeat-scene-cutout.png';
import stage4DefeatSceneImage from './assets/stage4-defeat-scene-cutout.png';
import stage4BaekgeurigoaDefeatSceneImage from './assets/stage4-baekgeurigoa-defeat-scene-cutout.png';
import stage5DefeatSceneImage from './assets/stage5-defeat-scene-cutout.png';
import stage5JurdiDefeatSceneImage from './assets/stage5-jurdi-defeat-scene-cutout.png';
import stage6DefeatSceneImage from './assets/stage6-defeat-scene-cutout.png';
import stage6AnheunhanDefeatSceneImage from './assets/stage6-anheunhan-defeat-scene.jpeg';
import stage7DefeatSceneImage from './assets/stage7-defeat-scene-cutout.png';
import stage7ArnyaDefeatSceneImage from './assets/stage7-arnya-defeat-scene-cutout.png';
import stage8DefeatSceneImage from './assets/stage8-defeat-scene-cutout.png';
import stage9DefeatSceneImage from './assets/stage9-defeat-scene-cutout.png';
import playerAttackImage from './assets/player-attack.png';
import playerDefaultImage from './assets/player-default.png';
import playerHitImage from './assets/player-hit.png';
import opponentLevel1AttackImage from './assets/opponent-level1-attack.png';
import opponentLevel1ChurusigiAttackImage from './assets/opponent-level1-churusigi-attack-cutout.png';
import opponentLevel1DefaultImage from './assets/opponent-level1-default.png';
import opponentLevel1ChurusigiDefaultImage from './assets/opponent-level1-churusigi-default-cutout.png';
import opponentLevel1HitImage from './assets/opponent-level1-hit.png';
import opponentLevel1ChurusigiHitImage from './assets/opponent-level1-churusigi-hit-cutout.png';
import opponentLevel2AttackImage from './assets/opponent-level2-attack.png';
import opponentLevel2JjangpalAttackImage from './assets/opponent-level2-jjangpal-attack-cutout.png';
import opponentLevel2DefaultImage from './assets/opponent-level2-default.png';
import opponentLevel2JjangpalDefaultImage from './assets/opponent-level2-jjangpal-default-cutout.png';
import opponentLevel2HitImage from './assets/opponent-level2-hit.png';
import opponentLevel2JjangpalHitImage from './assets/opponent-level2-jjangpal-hit-cutout.png';
import opponentLevel3AttackImage from './assets/opponent-level3-attack.png';
import opponentLevel3GamjaanigumaAttackImage from './assets/opponent-level3-gamjaaniguma-attack-cutout.png';
import opponentLevel3DefaultImage from './assets/opponent-level3-default.png';
import opponentLevel3GamjaanigumaDefaultImage from './assets/opponent-level3-gamjaaniguma-default-cutout.png';
import opponentLevel3HitImage from './assets/opponent-level3-hit.png';
import opponentLevel3GamjaanigumaHitImage from './assets/opponent-level3-gamjaaniguma-hit-cutout.png';
import opponentLevel4AttackImage from './assets/opponent-level4-attack.png';
import opponentLevel4BaekgeurigoaAttackImage from './assets/opponent-level4-baekgeurigoa-attack-cutout.png';
import opponentLevel4DefaultImage from './assets/opponent-level4-default.png';
import opponentLevel4BaekgeurigoaDefaultImage from './assets/opponent-level4-baekgeurigoa-default-cutout.png';
import opponentLevel4HitImage from './assets/opponent-level4-hit.png';
import opponentLevel4BaekgeurigoaHitImage from './assets/opponent-level4-baekgeurigoa-hit-cutout.png';
import opponentLevel5AttackImage from './assets/opponent-level5-attack.png';
import opponentLevel5JurdiAttackImage from './assets/opponent-level5-jurdi-attack-cutout.png';
import opponentLevel5DefaultImage from './assets/opponent-level5-default.png';
import opponentLevel5JurdiDefaultImage from './assets/opponent-level5-jurdi-default-cutout.png';
import opponentLevel5HitImage from './assets/opponent-level5-hit.png';
import opponentLevel5JurdiHitImage from './assets/opponent-level5-jurdi-hit-cutout.png';
import opponentLevel6AttackImage from './assets/opponent-level6-attack.png';
import opponentLevel6AnheunhanAttackImage from './assets/opponent-level6-anheunhan-attack-cutout.png';
import opponentLevel6DefaultImage from './assets/opponent-level6-default.png';
import opponentLevel6AnheunhanDefaultImage from './assets/opponent-level6-anheunhan-default-cutout.png';
import opponentLevel6HitImage from './assets/opponent-level6-hit.png';
import opponentLevel6AnheunhanHitImage from './assets/opponent-level6-anheunhan-hit-cutout.png';
import opponentLevel7AttackImage from './assets/opponent-level7-attack.png';
import opponentLevel7ArnyaAttackImage from './assets/opponent-level7-arnya-attack-cutout.png';
import opponentLevel7DefaultImage from './assets/opponent-level7-default.png';
import opponentLevel7ArnyaDefaultImage from './assets/opponent-level7-arnya-default-cutout.png';
import opponentLevel7HitImage from './assets/opponent-level7-hit.png';
import opponentLevel7ArnyaHitImage from './assets/opponent-level7-arnya-hit-cutout.png';
import opponentLevel8AttackImage from './assets/opponent-level8-attack.png';
import opponentLevel8DefaultImage from './assets/opponent-level8-default.png';
import opponentLevel8HitImage from './assets/opponent-level8-hit.png';
import opponentLevel9AttackImage from './assets/opponent-level9-attack.png';
import opponentLevel9DefaultImage from './assets/opponent-level9-default.png';
import opponentLevel9HitImage from './assets/opponent-level9-hit.png';
import unit3Level1YorsiAttackImage from './assets/unit3-level1-yorsi-attack.png';
import unit3Level1YorsiDefaultImage from './assets/unit3-level1-yorsi-default.png';
import unit3Level1YorsiDefeatSceneImage from './assets/unit3-level1-yorsi-defeat-scene.png';
import unit3Level1YorsiHitImage from './assets/unit3-level1-yorsi-hit.png';
import unit3Level2JjeojjeomiAttackImage from './assets/unit3-level2-jjeojjeomi-attack.png';
import unit3Level2JjeojjeomiDefaultImage from './assets/unit3-level2-jjeojjeomi-default.png';
import unit3Level2JjeojjeomiDefeatSceneImage from './assets/unit3-level2-jjeojjeomi-defeat-scene.png';
import unit3Level2JjeojjeomiHitImage from './assets/unit3-level2-jjeojjeomi-hit.png';
import unit3Level3BbangAttackImage from './assets/unit3-level3-bbang-attack.png';
import unit3Level3BbangDefaultImage from './assets/unit3-level3-bbang-default.png';
import unit3Level3BbangDefeatSceneImage from './assets/unit3-level3-bbang-defeat-scene.png';
import unit3Level3BbangHitImage from './assets/unit3-level3-bbang-hit.png';
import unit3Level4HeartpingAttackImage from './assets/unit3-level4-heartping-attack.png';
import unit3Level4HeartpingDefaultImage from './assets/unit3-level4-heartping-default.png';
import unit3Level4HeartpingDefeatSceneImage from './assets/unit3-level4-heartping-defeat-scene.png';
import unit3Level4HeartpingHitImage from './assets/unit3-level4-heartping-hit.png';
import unit3Level5TraleroAttackImage from './assets/unit3-level5-tralero-attack.png';
import unit3Level5TraleroDefaultImage from './assets/unit3-level5-tralero-default.png';
import unit3Level5TraleroDefeatSceneImage from './assets/unit3-level5-tralero-defeat-scene.png';
import unit3Level5TraleroHitImage from './assets/unit3-level5-tralero-hit.png';
import unit3Level6DeongdeongiDetectiveAttackImage from './assets/unit3-level6-deongdeongi-detective-attack.png';
import unit3Level6DeongdeongiDetectiveDefaultImage from './assets/unit3-level6-deongdeongi-detective-default.png';
import unit3Level6DeongdeongiDetectiveDefeatSceneImage from './assets/unit3-level6-deongdeongi-detective-defeat-scene.png';
import unit3Level6DeongdeongiDetectiveHitImage from './assets/unit3-level6-deongdeongi-detective-hit.png';
import unit3Level7MochiengelAttackImage from './assets/unit3-level7-mochiengel-attack.png';
import unit3Level7MochiengelDefaultImage from './assets/unit3-level7-mochiengel-default.png';
import unit3Level7MochiengelDefeatSceneImage from './assets/unit3-level7-mochiengel-defeat-scene.png';
import unit3Level7MochiengelHitImage from './assets/unit3-level7-mochiengel-hit.png';
import unit3Level8LabulabuAttackImage from './assets/unit3-level8-labulabu-attack.png';
import unit3Level8LabulabuDefaultImage from './assets/unit3-level8-labulabu-default.png';
import unit3Level8LabulabuDefeatSceneImage from './assets/unit3-level8-labulabu-defeat-scene.png';
import unit3Level8LabulabuHitImage from './assets/unit3-level8-labulabu-hit.png';
import unit3Level9GimgangrimAttackImage from './assets/unit3-level9-gimgangrim-attack.jpeg';
import unit3Level9GimgangrimDefaultImage from './assets/unit3-level9-gimgangrim-default.jpeg';
import unit3Level9GimgangrimDefeatSceneImage from './assets/unit3-level9-gimgangrim-defeat-scene.jpeg';
import unit3Level9GimgangrimHitImage from './assets/unit3-level9-gimgangrim-hit.jpeg';
import unit3Level10RobloxAttackImage from './assets/unit3-level10-roblox-attack.jpeg';
import unit3Level10RobloxDefaultImage from './assets/unit3-level10-roblox-default.jpeg';
import unit3Level10RobloxDefeatSceneImage from './assets/unit3-level10-roblox-defeat-scene.jpeg';
import unit3Level10RobloxHitImage from './assets/unit3-level10-roblox-hit.jpeg';
import unit3Level11EnglishBirdAttackImage from './assets/unit3-level11-english-bird-attack.jpeg';
import unit3Level11EnglishBirdDefaultImage from './assets/unit3-level11-english-bird-default.jpeg';
import unit3Level11EnglishBirdDefeatSceneImage from './assets/unit3-level11-english-bird-defeat-scene.jpeg';
import unit3Level11EnglishBirdHitImage from './assets/unit3-level11-english-bird-hit.jpeg';
import unit3Level12AkmagomaAttackImage from './assets/unit3-level12-akmagoma-attack.jpeg';
import unit3Level12AkmagomaDefaultImage from './assets/unit3-level12-akmagoma-default.jpeg';
import unit3Level12AkmagomaDefeatSceneImage from './assets/unit3-level12-akmagoma-defeat-scene.jpeg';
import unit3Level12AkmagomaHitImage from './assets/unit3-level12-akmagoma-hit.jpeg';

type GameState = 'start' | 'unitSelect' | 'playing' | 'win' | 'lose';

type BattleDifficulty = 'easy' | 'normal' | 'hard';

type LearningUnitId = 'unit2' | 'unit3';

type ProblemKind = 'equation' | 'story' | 'builder' | 'measurement' | 'distanceMap' | 'distanceWorksheet' | 'clockReading' | 'timeAddition';
type MeasurementObjectKind =
  | 'seed'
  | 'rice'
  | 'eraser'
  | 'leaf'
  | 'paperStrip'
  | 'stick'
  | 'pencil'
  | 'paperClip'
  | 'toothpick'
  | 'crayon'
  | 'chalk'
  | 'chocolate';
type DistanceEstimationStrategy = 'compare' | 'chunk' | 'unitize';

interface BuildSlotConfig {
  id: string;
  label: string;
  digits: string[];
}

interface BuilderProblemData {
  title: string;
  instruction: string;
  helperText: string;
  badge?: string;
  op: '+' | '-';
  topTemplate: string;
  bottomTemplate: string;
  slots: BuildSlotConfig[];
  invalidMessage: string;
  validate: (left: number, right: number) => boolean;
}

interface BuilderTemplate extends BuilderProblemData {
  templateId: string;
}

interface Problem {
  text: string;
  prompt: string;
  answer: number;
  kind: ProblemKind;
  answerUnit?: string;
  requiresUnitSelection?: boolean;
  storyTable?: StoryPromptTableData;
  builder?: BuilderProblemData;
  measurement?: MeasurementProblemData;
  distanceMap?: DistanceMapProblemData;
  distanceWorksheet?: DistanceWorksheetProblemData;
  clockReading?: ClockReadingProblemData;
  timeAddition?: TimeAdditionProblemData;
}

interface EstimationProblem {
  prompt: string;
  question: string;
  options: number[];
  answer: number;
}

interface UnitSelectionChallenge {
  badge: string;
  prompt: string;
  options: string[];
  answer: string;
}

type DistanceWorksheetInputKind = 'number' | 'place';
type DistanceWorksheetMapVariant = 'meadow' | 'river' | 'town' | 'campus' | 'orchard' | 'harbor' | 'village';

interface DistanceWorksheetLandmarkData {
  id: string;
  label: string;
  dotIndex: number;
  row: 'top' | 'bottom';
  accent: string;
  icon: 'bookstore' | 'station' | 'market' | 'fountain' | 'park' | 'bank' | 'school' | 'hospital' | 'library';
}

interface DistanceWorksheetPromptData {
  id: string;
  prefix: string;
  suffix: string;
  answer: string;
  kind: DistanceWorksheetInputKind;
  answerUnit?: string;
}

interface DistanceWorksheetReferenceData {
  fromDotIndex: number;
  toDotIndex: number;
  label: string;
}

interface DistanceWorksheetProblemData {
  title: string;
  instruction: string;
  mapVariant: DistanceWorksheetMapVariant;
  dotCount: number;
  landmarks: DistanceWorksheetLandmarkData[];
  reference: DistanceWorksheetReferenceData;
  prompt: DistanceWorksheetPromptData;
}

interface DistanceWorksheetProblemSetData {
  title: string;
  instruction: string;
  mapVariant: DistanceWorksheetMapVariant;
  dotCount: number;
  landmarks: DistanceWorksheetLandmarkData[];
  reference: DistanceWorksheetReferenceData;
  prompts: DistanceWorksheetPromptData[];
}

interface DeveloperProblemSnapshot {
  level: number;
  opponentHP: number;
  problem: Problem;
  problemCoachmark: string | null;
}

interface MeasurementProblemData {
  title: string;
  question: string;
  objectKind: MeasurementObjectKind;
  objectLabel: string;
  startMm: number;
  lengthMm: number;
  rulerCm: number;
}

interface ClockReadingProblemData {
  title: string;
  question: string;
  hour: number;
  minute: number;
  second: number;
  editableParts: ClockInputPart[];
}

type ClockInputPart = 'hours' | 'minutes' | 'seconds';
type ClockReadingDifficulty = 1 | 2 | 3 | 4 | 5;
type TimeAdditionMode = 'clock' | 'bar' | 'vertical' | 'story';
type TimeArithmeticOperation = '+' | '-';
interface TimeValue {
  hours: number;
  minutes: number;
  seconds: number;
}

interface TimeStoryHighlight {
  label: string;
  value: string;
}

interface StoryPromptTableData {
  headers: string[];
  rows: Array<{
    cells: string[];
  }>;
}

interface TimeAdditionProblemData {
  title: string;
  instruction: string;
  mode: TimeAdditionMode;
  operation: TimeArithmeticOperation;
  left: TimeValue;
  right: TimeValue;
  result: TimeValue;
  editableParts: ClockInputPart[];
  storyLines?: string[];
  storyHighlights?: TimeStoryHighlight[];
}

interface ClockReadingAnswerInput {
  hours: string;
  minutes: string;
  seconds: string;
}

interface DistanceMapPoint {
  x: number;
  y: number;
}

interface DistanceMapLandmarkData {
  id: string;
  label: string;
  x: number;
  y: number;
  accent: string;
  kind: 'home' | 'reference' | 'place';
}

interface DistanceEstimationBaseData {
  title: string;
  question: string;
  sentence: string;
  referenceMeters: number;
  targetLabel: string;
  targetMeters: number;
  estimatedKilometers: number;
  strategy: DistanceEstimationStrategy;
  landmarks: DistanceMapLandmarkData[];
}

interface DistanceCompareProblemData extends DistanceEstimationBaseData {
  strategy: 'compare';
  referenceRoute: DistanceMapPoint[];
  targetRoute: DistanceMapPoint[];
  compareSlotCount: number;
}

interface DistanceChunkSegmentData {
  id: string;
  color: string;
  points: DistanceMapPoint[];
  units: number;
}

interface DistanceChunkProblemData extends DistanceEstimationBaseData {
  strategy: 'chunk';
  targetRoute: DistanceMapPoint[];
  segments: DistanceChunkSegmentData[];
}

interface DistanceUnitizeProblemData extends DistanceEstimationBaseData {
  strategy: 'unitize';
  referenceRoute: DistanceMapPoint[];
  targetRoute: DistanceMapPoint[];
}

type DistanceMapProblemData =
  | DistanceCompareProblemData
  | DistanceChunkProblemData
  | DistanceUnitizeProblemData;

interface DistanceMapTokenData {
  id: number;
  slotIndex: number | null;
  x: number;
  y: number;
}

interface CharacterSpriteSet {
  attack: string;
  default: string;
  hit: string;
}

type Level1OpponentId = 'jeongichu' | 'churusigi';
type Level2OpponentId = 'noneunpenggwin' | 'jjangpal';
type Level3OpponentId = 'romiromi' | 'gamjaaniguma';
type Level4OpponentId = 'koronan' | 'baekgeurigoa';
type Level5OpponentId = 'niiik' | 'jurdi';
type Level6OpponentId = 'syuppeolboi' | 'anheunhannammae';
type Level7OpponentId = 'anijeuko' | 'arnya';

interface SpecialOpponentConfig {
  name: string;
  spriteSet: CharacterSpriteSet;
  defeatSceneImage: string;
  spriteClassName?: string;
  defeatSceneClassName?: string;
  removeSpriteBlackBackground?: boolean;
  removeDefeatSceneBlackBackground?: boolean;
}

interface SpecialOpponentSelections {
  level1: Level1OpponentId;
  level2: Level2OpponentId;
  level3: Level3OpponentId;
  level4: Level4OpponentId;
  level5: Level5OpponentId;
  level6: Level6OpponentId;
  level7: Level7OpponentId;
}

interface BattleDifficultyConfig {
  label: string;
  regularAttackDamage: number;
  regularHitDamage: number;
  estimationAttackDamage: number;
  estimationHitDamage: number;
}

const EDGE_BLACK_TRANSPARENT_THRESHOLD = 84;
const edgeBlackTransparentImageCache = new Map<string, string>();

function isNearBlackPixel(data: Uint8ClampedArray, offset: number, threshold: number) {
  return (
    data[offset + 3] > 0 &&
    data[offset] <= threshold &&
    data[offset + 1] <= threshold &&
    data[offset + 2] <= threshold
  );
}

function createEdgeBlackTransparentImage(src: string, image: HTMLImageElement, threshold: number) {
  const canvas = document.createElement('canvas');
  const width = image.naturalWidth;
  const height = image.naturalHeight;

  if (!width || !height) {
    return src;
  }

  canvas.width = width;
  canvas.height = height;

  const context = canvas.getContext('2d');
  if (!context) {
    return src;
  }

  context.drawImage(image, 0, 0, width, height);

  const imageData = context.getImageData(0, 0, width, height);
  const { data } = imageData;
  const pixelCount = width * height;
  const visited = new Uint8Array(pixelCount);
  const queue = new Int32Array(pixelCount);
  let head = 0;
  let tail = 0;

  const enqueue = (x: number, y: number) => {
    if (x < 0 || x >= width || y < 0 || y >= height) {
      return;
    }

    const pixelIndex = y * width + x;
    if (visited[pixelIndex]) {
      return;
    }

    const offset = pixelIndex * 4;
    if (!isNearBlackPixel(data, offset, threshold)) {
      return;
    }

    visited[pixelIndex] = 1;
    queue[tail++] = pixelIndex;
  };

  for (let x = 0; x < width; x += 1) {
    enqueue(x, 0);
    enqueue(x, height - 1);
  }

  for (let y = 1; y < height - 1; y += 1) {
    enqueue(0, y);
    enqueue(width - 1, y);
  }

  while (head < tail) {
    const pixelIndex = queue[head++];
    const x = pixelIndex % width;
    const y = Math.floor(pixelIndex / width);

    enqueue(x - 1, y);
    enqueue(x + 1, y);
    enqueue(x, y - 1);
    enqueue(x, y + 1);
  }

  for (let pixelIndex = 0; pixelIndex < pixelCount; pixelIndex += 1) {
    if (visited[pixelIndex]) {
      data[pixelIndex * 4 + 3] = 0;
    }
  }

  context.putImageData(imageData, 0, 0);
  return canvas.toDataURL('image/png');
}

function useEdgeBlackTransparentImage(src: string | null, enabled = false, threshold = EDGE_BLACK_TRANSPARENT_THRESHOLD) {
  const [processedSrc, setProcessedSrc] = useState<string | null>(src);

  useEffect(() => {
    let cancelled = false;

    if (!src) {
      setProcessedSrc(null);
      return () => {
        cancelled = true;
      };
    }

    if (!enabled || typeof window === 'undefined') {
      setProcessedSrc(src);
      return () => {
        cancelled = true;
      };
    }

    const cacheKey = `${src}::${threshold}`;
    const cachedImage = edgeBlackTransparentImageCache.get(cacheKey);
    if (cachedImage) {
      setProcessedSrc(cachedImage);
      return () => {
        cancelled = true;
      };
    }

    setProcessedSrc(src);

    const image = new Image();
    image.decoding = 'async';
    image.onload = () => {
      try {
        const transparentImage = createEdgeBlackTransparentImage(src, image, threshold);
        edgeBlackTransparentImageCache.set(cacheKey, transparentImage);

        if (!cancelled) {
          setProcessedSrc(transparentImage);
        }
      } catch {
        if (!cancelled) {
          setProcessedSrc(src);
        }
      }
    };
    image.onerror = () => {
      if (!cancelled) {
        setProcessedSrc(src);
      }
    };
    image.src = src;

    return () => {
      cancelled = true;
    };
  }, [src, enabled, threshold]);

  return processedSrc ?? src;
}

interface LearningUnitConfig {
  id: LearningUnitId;
  chapterLabel: string;
  title: string;
  summary: string;
  description: string;
  isAvailable: boolean;
}

type StoryTemplate = (a: number, b: number) => string;

interface StoryTemplatePool {
  '+': StoryTemplate[];
  '-': StoryTemplate[];
}

interface GeneratedStoryProblem {
  a: number;
  b: number;
  op: '+' | '-';
  answer: number;
}

type SoundEffectName =
  | 'correct'
  | 'wrong'
  | 'win'
  | 'lose'
  | 'start'
  | 'alert'
  | 'enemyHit'
  | 'playerHit'
  | 'levelUp'
  | 'tick'
  | 'ui'
  | 'submit'
  | 'dangerPulse'
  | 'hintStep'
  | 'hintCarry'
  | 'hintBorrow'
  | 'hintResolve';

interface SoundLayerBase {
  startAt?: number;
  duration: number;
  gain: number;
  attack?: number;
  release?: number;
  pan?: number;
  panJitter?: number;
  reverbSend?: number;
  delaySend?: number;
  filter?: {
    type: BiquadFilterType;
    frequency: number;
    q?: number;
    gain?: number;
    sweepTo?: number;
  };
}

interface OscillatorLayer extends SoundLayerBase {
  kind: 'oscillator';
  wave: OscillatorType;
  frequency: number;
  glideTo?: number;
  detune?: number;
  detuneJitter?: number;
}

interface NoiseLayer extends SoundLayerBase {
  kind: 'noise';
  playbackRate?: number;
}

type SoundLayer = OscillatorLayer | NoiseLayer;

interface SoundEffectDefinition {
  output?: number;
  layers: SoundLayer[];
}

interface SoundPlaybackOptions {
  gainMultiplier?: number;
  detune?: number;
  noisePlaybackRateMultiplier?: number;
}

type AnimationSoundPlayer = (effectName: SoundEffectName, options?: SoundPlaybackOptions) => void;

interface AudioEngine {
  version: number;
  context: AudioContext;
  noiseBuffer: AudioBuffer;
  output: GainNode;
  masterGain: GainNode;
  reverbSend: GainNode;
  delaySend: GainNode;
}

type CompatibleWindow = Window & typeof globalThis & {
  webkitAudioContext?: typeof AudioContext;
};

const LAYER_GAIN_BOOST = 1.8;
const MASTER_EFFECT_GAIN = 3.5;
const POST_COMPRESSOR_GAIN = 3.2;
const AUDIO_ENGINE_VERSION = 3;

const SOUND_EFFECTS: Record<SoundEffectName, SoundEffectDefinition> = {
  start: {
    output: 0.88,
    layers: [
      { kind: 'noise', duration: 0.08, gain: 0.01, attack: 0.002, release: 0.05, filter: { type: 'highpass', frequency: 2200, sweepTo: 7200, q: 0.8 }, reverbSend: 0.04, delaySend: 0.02 },
      { kind: 'oscillator', wave: 'triangle', frequency: 360, glideTo: 540, duration: 0.12, gain: 0.032, attack: 0.003, release: 0.08, filter: { type: 'lowpass', frequency: 3600, sweepTo: 2200, q: 0.7 }, reverbSend: 0.05, delaySend: 0.03, pan: -0.08 },
      { kind: 'oscillator', wave: 'sine', startAt: 0.045, frequency: 523.25, glideTo: 783.99, duration: 0.21, gain: 0.042, attack: 0.004, release: 0.16, delaySend: 0.05, reverbSend: 0.11, pan: 0.08 },
      { kind: 'oscillator', wave: 'sine', startAt: 0.1, frequency: 1046.5, duration: 0.11, gain: 0.012, attack: 0.002, release: 0.08, reverbSend: 0.1 },
    ],
  },
  correct: {
    output: 0.9,
    layers: [
      { kind: 'noise', duration: 0.04, gain: 0.007, attack: 0.001, release: 0.03, filter: { type: 'highpass', frequency: 3400, sweepTo: 9000, q: 0.8 }, reverbSend: 0.02 },
      { kind: 'oscillator', wave: 'triangle', frequency: 660, glideTo: 990, duration: 0.09, gain: 0.034, attack: 0.0015, release: 0.06, detuneJitter: 5, filter: { type: 'lowpass', frequency: 4800, sweepTo: 2800, q: 0.8 }, delaySend: 0.03, reverbSend: 0.05, pan: -0.08, panJitter: 0.04 },
      { kind: 'oscillator', wave: 'sine', startAt: 0.012, frequency: 990, glideTo: 1318.5, duration: 0.13, gain: 0.03, attack: 0.0015, release: 0.085, reverbSend: 0.06, pan: 0.1, panJitter: 0.04 },
      { kind: 'oscillator', wave: 'triangle', startAt: 0.022, frequency: 495, glideTo: 659.25, duration: 0.17, gain: 0.025, attack: 0.002, release: 0.115, filter: { type: 'bandpass', frequency: 1800, sweepTo: 2400, q: 2.2 }, reverbSend: 0.04 },
      { kind: 'oscillator', wave: 'sine', startAt: 0.048, frequency: 1318.5, glideTo: 1760, duration: 0.12, gain: 0.014, attack: 0.0015, release: 0.09, delaySend: 0.03, reverbSend: 0.08, pan: 0.14 },
    ],
  },
  alert: {
    output: 0.84,
    layers: [
      { kind: 'noise', duration: 0.12, gain: 0.008, attack: 0.002, release: 0.1, filter: { type: 'bandpass', frequency: 2200, sweepTo: 3400, q: 1.3 }, delaySend: 0.02, reverbSend: 0.04 },
      { kind: 'oscillator', wave: 'triangle', frequency: 440, glideTo: 660, duration: 0.09, gain: 0.022, attack: 0.002, release: 0.06, filter: { type: 'bandpass', frequency: 1100, sweepTo: 1700, q: 2.6 }, reverbSend: 0.04, pan: -0.18 },
      { kind: 'oscillator', wave: 'square', startAt: 0.075, frequency: 880, glideTo: 740, duration: 0.11, gain: 0.018, attack: 0.002, release: 0.08, filter: { type: 'lowpass', frequency: 2600, sweepTo: 1400, q: 0.8 }, delaySend: 0.04, reverbSend: 0.06, pan: 0.16 },
      { kind: 'oscillator', wave: 'sine', startAt: 0.075, frequency: 220, glideTo: 196, duration: 0.12, gain: 0.018, attack: 0.002, release: 0.08, reverbSend: 0.03 },
    ],
  },
  enemyHit: {
    output: 0.92,
    layers: [
      { kind: 'noise', duration: 0.058, gain: 0.015, attack: 0.001, release: 0.04, filter: { type: 'bandpass', frequency: 1500, sweepTo: 650, q: 1.1 }, reverbSend: 0.02, pan: 0.12 },
      { kind: 'oscillator', wave: 'triangle', frequency: 240, glideTo: 160, duration: 0.095, gain: 0.024, attack: 0.0015, release: 0.06, filter: { type: 'lowpass', frequency: 1800, sweepTo: 420, q: 0.9 }, pan: -0.08 },
      { kind: 'oscillator', wave: 'sine', startAt: 0.008, frequency: 110, glideTo: 72, duration: 0.17, gain: 0.034, attack: 0.001, release: 0.11, filter: { type: 'lowpass', frequency: 820, sweepTo: 180, q: 0.8 }, reverbSend: 0.02 },
      { kind: 'oscillator', wave: 'triangle', startAt: 0.012, frequency: 880, glideTo: 620, duration: 0.055, gain: 0.009, attack: 0.001, release: 0.03, filter: { type: 'lowpass', frequency: 2600, sweepTo: 1200, q: 0.8 }, pan: 0.18 },
      { kind: 'oscillator', wave: 'square', startAt: 0.002, frequency: 1460, glideTo: 980, duration: 0.026, gain: 0.004, attack: 0.001, release: 0.018, filter: { type: 'lowpass', frequency: 3000, sweepTo: 1600, q: 0.8 }, pan: 0.22 },
    ],
  },
  playerHit: {
    output: 0.88,
    layers: [
      { kind: 'noise', duration: 0.075, gain: 0.015, attack: 0.001, release: 0.06, filter: { type: 'bandpass', frequency: 900, sweepTo: 320, q: 1.4 }, reverbSend: 0.03, pan: -0.14 },
      { kind: 'oscillator', wave: 'triangle', frequency: 180, glideTo: 120, duration: 0.125, gain: 0.026, attack: 0.0015, release: 0.085, filter: { type: 'lowpass', frequency: 1200, sweepTo: 260, q: 0.9 }, pan: 0.12 },
      { kind: 'oscillator', wave: 'sine', startAt: 0.012, frequency: 96, glideTo: 62, duration: 0.21, gain: 0.038, attack: 0.0015, release: 0.14, filter: { type: 'lowpass', frequency: 620, sweepTo: 140, q: 0.8 }, reverbSend: 0.03 },
      { kind: 'oscillator', wave: 'triangle', startAt: 0.004, frequency: 520, glideTo: 360, duration: 0.05, gain: 0.0065, attack: 0.001, release: 0.028, filter: { type: 'lowpass', frequency: 1400, sweepTo: 700, q: 0.8 }, pan: 0.08 },
      { kind: 'oscillator', wave: 'sine', startAt: 0.05, frequency: 62, glideTo: 49, duration: 0.14, gain: 0.012, attack: 0.002, release: 0.1, filter: { type: 'lowpass', frequency: 320, sweepTo: 140, q: 0.8 }, reverbSend: 0.04 },
    ],
  },
  wrong: {
    output: 0.84,
    layers: [
      { kind: 'noise', duration: 0.09, gain: 0.009, attack: 0.001, release: 0.07, filter: { type: 'lowpass', frequency: 1600, sweepTo: 450, q: 0.8 }, reverbSend: 0.02 },
      { kind: 'oscillator', wave: 'triangle', frequency: 320, glideTo: 220, duration: 0.18, gain: 0.028, attack: 0.002, release: 0.12, detuneJitter: 6, filter: { type: 'lowpass', frequency: 1500, sweepTo: 520, q: 0.7 }, reverbSend: 0.02, pan: -0.08 },
      { kind: 'oscillator', wave: 'sine', startAt: 0.02, frequency: 246.94, glideTo: 174.61, duration: 0.22, gain: 0.026, attack: 0.002, release: 0.16, filter: { type: 'bandpass', frequency: 540, sweepTo: 280, q: 1.8 }, delaySend: 0.015, pan: 0.06 },
      { kind: 'oscillator', wave: 'sine', startAt: 0.028, frequency: 123.47, glideTo: 87.31, duration: 0.18, gain: 0.014, attack: 0.002, release: 0.12, filter: { type: 'lowpass', frequency: 520, sweepTo: 180, q: 0.8 }, reverbSend: 0.03 },
    ],
  },
  levelUp: {
    output: 0.92,
    layers: [
      { kind: 'noise', duration: 0.14, gain: 0.009, attack: 0.002, release: 0.1, filter: { type: 'highpass', frequency: 4000, sweepTo: 9000, q: 0.8 }, reverbSend: 0.12 },
      { kind: 'oscillator', wave: 'triangle', frequency: 523.25, duration: 0.1, gain: 0.022, attack: 0.002, release: 0.07, delaySend: 0.03, reverbSend: 0.09, pan: -0.16 },
      { kind: 'oscillator', wave: 'sine', startAt: 0.09, frequency: 659.25, duration: 0.11, gain: 0.024, attack: 0.002, release: 0.08, delaySend: 0.04, reverbSend: 0.1, pan: 0.12 },
      { kind: 'oscillator', wave: 'triangle', startAt: 0.18, frequency: 783.99, duration: 0.13, gain: 0.026, attack: 0.002, release: 0.09, delaySend: 0.05, reverbSend: 0.11, pan: -0.04 },
      { kind: 'oscillator', wave: 'sine', startAt: 0.28, frequency: 1046.5, duration: 0.18, gain: 0.018, attack: 0.002, release: 0.12, delaySend: 0.06, reverbSend: 0.14, pan: 0.08 },
      { kind: 'oscillator', wave: 'sine', startAt: 0.28, frequency: 1567.98, duration: 0.14, gain: 0.008, attack: 0.001, release: 0.09, reverbSend: 0.14, pan: 0.16 },
      { kind: 'oscillator', wave: 'triangle', startAt: 0.41, frequency: 1318.5, duration: 0.14, gain: 0.014, attack: 0.0015, release: 0.1, delaySend: 0.05, reverbSend: 0.12, pan: 0.02 },
    ],
  },
  tick: {
    output: 0.7,
    layers: [
      { kind: 'oscillator', wave: 'square', frequency: 1320, glideTo: 1180, duration: 0.04, gain: 0.012, attack: 0.001, release: 0.03, filter: { type: 'lowpass', frequency: 3600, sweepTo: 2100, q: 0.8 }, pan: -0.03 },
      { kind: 'oscillator', wave: 'sine', startAt: 0.008, frequency: 740, duration: 0.06, gain: 0.01, attack: 0.001, release: 0.04, reverbSend: 0.01, pan: 0.03 },
    ],
  },
  ui: {
    output: 0.42,
    layers: [
      { kind: 'oscillator', wave: 'triangle', frequency: 640, glideTo: 470, duration: 0.035, gain: 0.008, attack: 0.001, release: 0.024, filter: { type: 'lowpass', frequency: 1500, sweepTo: 900, q: 0.8 }, pan: -0.02 },
      { kind: 'oscillator', wave: 'sine', frequency: 320, glideTo: 240, duration: 0.045, gain: 0.007, attack: 0.001, release: 0.03, filter: { type: 'lowpass', frequency: 900, sweepTo: 540, q: 0.7 } },
      { kind: 'oscillator', wave: 'square', startAt: 0.002, frequency: 1180, glideTo: 860, duration: 0.014, gain: 0.0025, attack: 0.001, release: 0.01, filter: { type: 'lowpass', frequency: 1800, sweepTo: 1100, q: 0.8 }, pan: 0.02 },
    ],
  },
  submit: {
    output: 0.34,
    layers: [
      { kind: 'noise', duration: 0.018, gain: 0.0022, attack: 0.001, release: 0.012, filter: { type: 'highpass', frequency: 2800, sweepTo: 6800, q: 0.8 }, reverbSend: 0.01 },
      { kind: 'oscillator', wave: 'triangle', frequency: 460, glideTo: 620, duration: 0.045, gain: 0.005, attack: 0.001, release: 0.024, filter: { type: 'lowpass', frequency: 2200, sweepTo: 1400, q: 0.8 }, pan: -0.03 },
      { kind: 'oscillator', wave: 'sine', startAt: 0.006, frequency: 700, glideTo: 880, duration: 0.05, gain: 0.0048, attack: 0.001, release: 0.03, reverbSend: 0.015, pan: 0.03 },
    ],
  },
  dangerPulse: {
    output: 0.36,
    layers: [
      { kind: 'noise', duration: 0.05, gain: 0.003, attack: 0.001, release: 0.04, filter: { type: 'bandpass', frequency: 1000, sweepTo: 420, q: 1.3 }, reverbSend: 0.02 },
      { kind: 'oscillator', wave: 'sine', frequency: 146.83, glideTo: 130.81, duration: 0.18, gain: 0.008, attack: 0.002, release: 0.12, filter: { type: 'lowpass', frequency: 620, sweepTo: 240, q: 0.8 }, reverbSend: 0.04 },
      { kind: 'oscillator', wave: 'triangle', startAt: 0.018, frequency: 293.66, glideTo: 261.63, duration: 0.12, gain: 0.0045, attack: 0.002, release: 0.08, filter: { type: 'bandpass', frequency: 1100, sweepTo: 620, q: 1.4 }, pan: -0.04 },
    ],
  },
  hintStep: {
    output: 0.38,
    layers: [
      { kind: 'oscillator', wave: 'triangle', frequency: 760, glideTo: 640, duration: 0.05, gain: 0.0065, attack: 0.001, release: 0.03, filter: { type: 'lowpass', frequency: 1800, sweepTo: 1100, q: 0.8 }, pan: -0.03 },
      { kind: 'oscillator', wave: 'sine', startAt: 0.006, frequency: 420, duration: 0.06, gain: 0.0052, attack: 0.001, release: 0.04, reverbSend: 0.02, pan: 0.03 },
    ],
  },
  hintCarry: {
    output: 0.46,
    layers: [
      { kind: 'noise', duration: 0.03, gain: 0.0035, attack: 0.001, release: 0.02, filter: { type: 'highpass', frequency: 3000, sweepTo: 7000, q: 0.8 }, reverbSend: 0.02 },
      { kind: 'oscillator', wave: 'triangle', frequency: 520, glideTo: 780, duration: 0.08, gain: 0.008, attack: 0.001, release: 0.05, delaySend: 0.02, pan: -0.06 },
      { kind: 'oscillator', wave: 'sine', startAt: 0.015, frequency: 780, glideTo: 1046.5, duration: 0.11, gain: 0.007, attack: 0.0015, release: 0.07, reverbSend: 0.04, pan: 0.08 },
    ],
  },
  hintBorrow: {
    output: 0.44,
    layers: [
      { kind: 'noise', duration: 0.05, gain: 0.004, attack: 0.001, release: 0.03, filter: { type: 'bandpass', frequency: 1200, sweepTo: 600, q: 1.2 }, reverbSend: 0.02 },
      { kind: 'oscillator', wave: 'triangle', frequency: 480, glideTo: 360, duration: 0.08, gain: 0.007, attack: 0.001, release: 0.05, filter: { type: 'lowpass', frequency: 1500, sweepTo: 800, q: 0.8 }, pan: -0.05 },
      { kind: 'oscillator', wave: 'sine', startAt: 0.016, frequency: 330, glideTo: 392, duration: 0.1, gain: 0.006, attack: 0.0015, release: 0.07, reverbSend: 0.03, pan: 0.06 },
    ],
  },
  hintResolve: {
    output: 0.42,
    layers: [
      { kind: 'noise', duration: 0.02, gain: 0.002, attack: 0.001, release: 0.015, filter: { type: 'highpass', frequency: 3400, sweepTo: 7600, q: 0.8 }, reverbSend: 0.015 },
      { kind: 'oscillator', wave: 'triangle', frequency: 660, glideTo: 720, duration: 0.06, gain: 0.007, attack: 0.001, release: 0.04, delaySend: 0.015, reverbSend: 0.02, pan: -0.05 },
      { kind: 'oscillator', wave: 'sine', startAt: 0.012, frequency: 990, duration: 0.08, gain: 0.0055, attack: 0.0015, release: 0.05, reverbSend: 0.05, pan: 0.06 },
    ],
  },
  lose: {
    output: 0.82,
    layers: [
      { kind: 'noise', duration: 0.32, gain: 0.01, attack: 0.003, release: 0.22, filter: { type: 'lowpass', frequency: 1200, sweepTo: 260, q: 0.7 }, reverbSend: 0.05 },
      { kind: 'oscillator', wave: 'triangle', frequency: 261.63, glideTo: 196, duration: 0.16, gain: 0.026, attack: 0.003, release: 0.11, filter: { type: 'lowpass', frequency: 1500, sweepTo: 500, q: 0.9 }, pan: -0.12 },
      { kind: 'oscillator', wave: 'sine', startAt: 0.1, frequency: 220, glideTo: 174.61, duration: 0.22, gain: 0.03, attack: 0.003, release: 0.16, filter: { type: 'lowpass', frequency: 1200, sweepTo: 300, q: 0.8 }, reverbSend: 0.06, pan: 0.08 },
      { kind: 'oscillator', wave: 'triangle', startAt: 0.26, frequency: 196, glideTo: 220, duration: 0.18, gain: 0.016, attack: 0.004, release: 0.12, filter: { type: 'lowpass', frequency: 1000, sweepTo: 420, q: 0.8 }, reverbSend: 0.08, delaySend: 0.03, pan: 0.02 },
    ],
  },
  win: {
    output: 0.96,
    layers: [
      { kind: 'noise', duration: 0.42, gain: 0.01, attack: 0.002, release: 0.28, filter: { type: 'highpass', frequency: 3600, sweepTo: 9800, q: 0.8 }, reverbSend: 0.18, delaySend: 0.04 },
      { kind: 'oscillator', wave: 'sine', frequency: 261.63, glideTo: 392, duration: 0.24, gain: 0.014, attack: 0.003, release: 0.16, filter: { type: 'lowpass', frequency: 760, sweepTo: 320, q: 0.8 }, reverbSend: 0.08, pan: -0.08 },
      { kind: 'oscillator', wave: 'sawtooth', frequency: 392, glideTo: 523.25, duration: 0.18, gain: 0.012, attack: 0.003, release: 0.12, filter: { type: 'lowpass', frequency: 2200, sweepTo: 1600, q: 0.85 }, reverbSend: 0.08, delaySend: 0.04, pan: -0.18 },
      { kind: 'oscillator', wave: 'triangle', frequency: 523.25, duration: 0.16, gain: 0.028, attack: 0.0025, release: 0.11, delaySend: 0.05, reverbSend: 0.12, pan: -0.1 },
      { kind: 'oscillator', wave: 'sine', startAt: 0.012, frequency: 1046.5, duration: 0.12, gain: 0.012, attack: 0.002, release: 0.08, reverbSend: 0.14, pan: 0.06 },
      { kind: 'oscillator', wave: 'sawtooth', startAt: 0.14, frequency: 659.25, glideTo: 783.99, duration: 0.18, gain: 0.013, attack: 0.0025, release: 0.12, filter: { type: 'lowpass', frequency: 2400, sweepTo: 1750, q: 0.9 }, delaySend: 0.05, reverbSend: 0.12, pan: 0.16 },
      { kind: 'oscillator', wave: 'triangle', startAt: 0.14, frequency: 783.99, duration: 0.18, gain: 0.03, attack: 0.003, release: 0.12, delaySend: 0.05, reverbSend: 0.13, pan: 0.02 },
      { kind: 'oscillator', wave: 'sine', startAt: 0.16, frequency: 1567.98, duration: 0.12, gain: 0.011, attack: 0.002, release: 0.08, reverbSend: 0.16, pan: 0.18 },
      { kind: 'oscillator', wave: 'triangle', startAt: 0.3, frequency: 783.99, glideTo: 1046.5, duration: 0.22, gain: 0.032, attack: 0.003, release: 0.14, delaySend: 0.06, reverbSend: 0.14, pan: -0.04 },
      { kind: 'oscillator', wave: 'sawtooth', startAt: 0.3, frequency: 1046.5, glideTo: 1318.5, duration: 0.24, gain: 0.013, attack: 0.002, release: 0.16, filter: { type: 'lowpass', frequency: 2600, sweepTo: 1900, q: 0.85 }, reverbSend: 0.12, pan: 0.12 },
      { kind: 'oscillator', wave: 'sine', startAt: 0.33, frequency: 2093, duration: 0.16, gain: 0.009, attack: 0.0015, release: 0.1, delaySend: 0.03, reverbSend: 0.18, pan: 0.2 },
      { kind: 'oscillator', wave: 'triangle', startAt: 0.52, frequency: 1318.5, glideTo: 1567.98, duration: 0.22, gain: 0.024, attack: 0.0025, release: 0.14, delaySend: 0.07, reverbSend: 0.16, pan: 0.05 },
      { kind: 'oscillator', wave: 'sine', startAt: 0.56, frequency: 2637.02, duration: 0.18, gain: 0.007, attack: 0.001, release: 0.12, reverbSend: 0.2, pan: 0.22 },
    ],
  },
};

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function roundToNearestUnit(value: number, unit: number) {
  return Math.round(value / unit) * unit;
}

function previewRemainingHP(currentHP: number, damage: number) {
  return Math.max(0, currentHP - damage);
}

function randomCentered(amount = 0) {
  return (Math.random() * 2 - 1) * amount;
}

function createNoiseBuffer(context: AudioContext, duration = 1.5) {
  const frameCount = Math.floor(context.sampleRate * duration);
  const buffer = context.createBuffer(1, frameCount, context.sampleRate);
  const data = buffer.getChannelData(0);

  for (let i = 0; i < frameCount; i += 1) {
    data[i] = Math.random() * 2 - 1;
  }

  return buffer;
}

function createImpulseResponse(context: AudioContext, duration = 1.4, decay = 2.2) {
  const frameCount = Math.floor(context.sampleRate * duration);
  const impulse = context.createBuffer(2, frameCount, context.sampleRate);

  for (let channel = 0; channel < impulse.numberOfChannels; channel += 1) {
    const channelData = impulse.getChannelData(channel);

    for (let i = 0; i < frameCount; i += 1) {
      const decayAmount = Math.pow(1 - i / frameCount, decay);
      channelData[i] = (Math.random() * 2 - 1) * decayAmount;
    }
  }

  return impulse;
}

function createAudioEngine(): AudioEngine | null {
  if (typeof window === 'undefined') return null;

  const compatibleWindow = window as CompatibleWindow;
  const AudioContextCtor = compatibleWindow.AudioContext ?? compatibleWindow.webkitAudioContext;

  if (!AudioContextCtor) return null;

  const context = new AudioContextCtor();
  const output = context.createGain();
  const compressor = context.createDynamicsCompressor();
  const masterGain = context.createGain();
  const limiter = context.createDynamicsCompressor();
  const reverbSend = context.createGain();
  const delaySend = context.createGain();
  const convolver = context.createConvolver();
  const reverbHighPass = context.createBiquadFilter();
  const reverbLowPass = context.createBiquadFilter();
  const reverbReturn = context.createGain();
  const delay = context.createDelay(1);
  const delayFeedback = context.createGain();
  const delayLowPass = context.createBiquadFilter();
  const delayReturn = context.createGain();

  output.gain.value = 1.35;
  compressor.threshold.value = -30;
  compressor.knee.value = 20;
  compressor.ratio.value = 10;
  compressor.attack.value = 0.001;
  compressor.release.value = 0.12;
  masterGain.gain.value = POST_COMPRESSOR_GAIN;
  limiter.threshold.value = -3;
  limiter.knee.value = 0;
  limiter.ratio.value = 20;
  limiter.attack.value = 0.001;
  limiter.release.value = 0.05;
  output.connect(compressor);
  compressor.connect(masterGain);
  masterGain.connect(limiter);
  limiter.connect(context.destination);

  convolver.buffer = createImpulseResponse(context);
  reverbHighPass.type = 'highpass';
  reverbHighPass.frequency.value = 220;
  reverbLowPass.type = 'lowpass';
  reverbLowPass.frequency.value = 3600;
  reverbReturn.gain.value = 0.28;
  reverbSend.connect(convolver);
  convolver.connect(reverbHighPass);
  reverbHighPass.connect(reverbLowPass);
  reverbLowPass.connect(reverbReturn);
  reverbReturn.connect(output);

  delay.delayTime.value = 0.14;
  delayFeedback.gain.value = 0.22;
  delayLowPass.type = 'lowpass';
  delayLowPass.frequency.value = 2200;
  delayReturn.gain.value = 0.18;
  delaySend.connect(delay);
  delay.connect(delayLowPass);
  delayLowPass.connect(delayReturn);
  delayLowPass.connect(delayFeedback);
  delayFeedback.connect(delay);
  delayReturn.connect(output);

  return {
    version: AUDIO_ENGINE_VERSION,
    context,
    noiseBuffer: createNoiseBuffer(context),
    output,
    masterGain,
    reverbSend,
    delaySend,
  };
}

function closeAudioEngine(engine: AudioEngine | null) {
  if (!engine || engine.context.state === 'closed') {
    return;
  }

  void engine.context.close();
}

function applyEnvelope(param: AudioParam, startAt: number, duration: number, attack: number, release: number, peak: number) {
  const safeAttack = Math.max(attack, 0.001);
  const safeRelease = clamp(release, 0.02, duration);
  const attackEnd = Math.min(startAt + safeAttack, startAt + duration * 0.35);
  const releaseStart = Math.max(attackEnd, startAt + duration - safeRelease);

  param.cancelScheduledValues(startAt);
  param.setValueAtTime(0.0001, startAt);
  param.linearRampToValueAtTime(peak, attackEnd);

  if (releaseStart > attackEnd) {
    param.exponentialRampToValueAtTime(Math.max(peak * 0.6, 0.0001), releaseStart);
  }

  param.exponentialRampToValueAtTime(0.0001, startAt + duration);
}

function createLayerInput(engine: AudioEngine, layer: SoundLayer, startAt: number, effectOutput: number) {
  const { context } = engine;
  const gainNode = context.createGain();
  const pannerNode = context.createStereoPanner();
  const pan = clamp((layer.pan ?? 0) + randomCentered(layer.panJitter ?? 0), -1, 1);

  pannerNode.pan.value = pan;
  gainNode.connect(pannerNode);
  pannerNode.connect(engine.output);

  if (layer.reverbSend) {
    const reverbGain = context.createGain();
    reverbGain.gain.value = layer.reverbSend;
    gainNode.connect(reverbGain);
    reverbGain.connect(engine.reverbSend);
  }

  if (layer.delaySend) {
    const delayGain = context.createGain();
    delayGain.gain.value = layer.delaySend;
    gainNode.connect(delayGain);
    delayGain.connect(engine.delaySend);
  }

  applyEnvelope(
    gainNode.gain,
    startAt,
    layer.duration,
    layer.attack ?? 0.003,
    layer.release ?? Math.max(0.08, layer.duration * 0.75),
    layer.gain * effectOutput,
  );

  if (!layer.filter) {
    return gainNode;
  }

  const filterNode = context.createBiquadFilter();
  filterNode.type = layer.filter.type;
  filterNode.frequency.setValueAtTime(layer.filter.frequency, startAt);
  filterNode.Q.value = layer.filter.q ?? 0.7;

  if (layer.filter.gain !== undefined) {
    filterNode.gain.value = layer.filter.gain;
  }

  if (layer.filter.sweepTo) {
    filterNode.frequency.exponentialRampToValueAtTime(layer.filter.sweepTo, startAt + layer.duration);
  }

  filterNode.connect(gainNode);
  return filterNode;
}

function scheduleOscillatorLayer(
  engine: AudioEngine,
  layer: OscillatorLayer,
  effectOutput: number,
  baseTime: number,
  options: SoundPlaybackOptions,
) {
  const startAt = baseTime + (layer.startAt ?? 0);
  const endAt = startAt + layer.duration;
  const oscillator = engine.context.createOscillator();
  const detune = (layer.detune ?? 0) + randomCentered(layer.detuneJitter ?? 0) + (options.detune ?? 0);
  const inputNode = createLayerInput(engine, layer, startAt, effectOutput);

  oscillator.type = layer.wave;
  oscillator.frequency.setValueAtTime(layer.frequency, startAt);
  oscillator.detune.value = detune;

  if (layer.glideTo) {
    oscillator.frequency.exponentialRampToValueAtTime(layer.glideTo, endAt);
  }

  oscillator.connect(inputNode);
  oscillator.start(startAt);
  oscillator.stop(endAt + 0.05);
}

function scheduleNoiseLayer(
  engine: AudioEngine,
  layer: NoiseLayer,
  effectOutput: number,
  baseTime: number,
  options: SoundPlaybackOptions,
) {
  const startAt = baseTime + (layer.startAt ?? 0);
  const noise = engine.context.createBufferSource();
  const inputNode = createLayerInput(engine, layer, startAt, effectOutput);

  noise.buffer = engine.noiseBuffer;
  noise.playbackRate.value = (layer.playbackRate ?? 1) * (options.noisePlaybackRateMultiplier ?? 1);
  noise.connect(inputNode);
  noise.start(startAt);
  noise.stop(startAt + layer.duration + 0.02);
}

function playEffect(engine: AudioEngine, effectName: SoundEffectName, options: SoundPlaybackOptions = {}) {
  const effect = SOUND_EFFECTS[effectName];
  const baseTime = engine.context.currentTime + 0.005;
  const effectOutput = (effect.output ?? 1) * MASTER_EFFECT_GAIN * LAYER_GAIN_BOOST * (options.gainMultiplier ?? 1);

  for (const layer of effect.layers) {
    if (layer.kind === 'oscillator') {
      scheduleOscillatorLayer(engine, layer, effectOutput, baseTime, options);
    } else {
      scheduleNoiseLayer(engine, layer, effectOutput, baseTime, options);
    }
  }
}

const LEVEL_OPPONENT_NAMES = [
  '',
  '전기츄',
  '노는펭귄',
  '로미로미',
  '코로난',
  '니이익',
  '슈뻘보이',
  '아니즈코',
  '발오공',
  '홍홍자',
  '시계수호자',
  '단위박사',
  '길시대왕',
];

const LEVEL_OPPONENT_EMOJIS = ['', '👾', '👹', '👺', '🤖', '👻', '🦖', '🐲', '😈', '👿', '⌛', '📏', '👑'];
const DEFAULT_LEARNING_UNIT_ID: LearningUnitId = 'unit2';
const DEFAULT_LEVEL1_OPPONENT_ID: Level1OpponentId = 'jeongichu';
const DEFAULT_LEVEL2_OPPONENT_ID: Level2OpponentId = 'noneunpenggwin';
const DEFAULT_LEVEL3_OPPONENT_ID: Level3OpponentId = 'romiromi';
const DEFAULT_LEVEL4_OPPONENT_ID: Level4OpponentId = 'koronan';
const DEFAULT_LEVEL5_OPPONENT_ID: Level5OpponentId = 'niiik';
const DEFAULT_LEVEL6_OPPONENT_ID: Level6OpponentId = 'syuppeolboi';
const DEFAULT_LEVEL7_OPPONENT_ID: Level7OpponentId = 'anijeuko';
const DEFAULT_SPECIAL_OPPONENT_SELECTIONS: SpecialOpponentSelections = {
  level1: DEFAULT_LEVEL1_OPPONENT_ID,
  level2: DEFAULT_LEVEL2_OPPONENT_ID,
  level3: DEFAULT_LEVEL3_OPPONENT_ID,
  level4: DEFAULT_LEVEL4_OPPONENT_ID,
  level5: DEFAULT_LEVEL5_OPPONENT_ID,
  level6: DEFAULT_LEVEL6_OPPONENT_ID,
  level7: DEFAULT_LEVEL7_OPPONENT_ID,
};
const LEVEL1_OPPONENT_VARIANTS: Record<Level1OpponentId, SpecialOpponentConfig> = {
  jeongichu: {
    name: '전기츄',
    spriteSet: {
      attack: opponentLevel1AttackImage,
      default: opponentLevel1DefaultImage,
      hit: opponentLevel1HitImage,
    },
    defeatSceneImage: stage1DefeatSceneImage,
  },
  churusigi: {
    name: '츄르식이',
    spriteSet: {
      attack: opponentLevel1ChurusigiAttackImage,
      default: opponentLevel1ChurusigiDefaultImage,
      hit: opponentLevel1ChurusigiHitImage,
    },
    defeatSceneImage: stage1ChurusigiDefeatSceneImage,
  },
};
const LEVEL2_OPPONENT_VARIANTS: Record<Level2OpponentId, SpecialOpponentConfig> = {
  noneunpenggwin: {
    name: '노는펭귄',
    spriteSet: {
      attack: opponentLevel2AttackImage,
      default: opponentLevel2DefaultImage,
      hit: opponentLevel2HitImage,
    },
    defeatSceneImage: stage2DefeatSceneImage,
  },
  jjangpal: {
    name: '짱팔',
    spriteSet: {
      attack: opponentLevel2JjangpalAttackImage,
      default: opponentLevel2JjangpalDefaultImage,
      hit: opponentLevel2JjangpalHitImage,
    },
    defeatSceneImage: stage2JjangpalDefeatSceneImage,
  },
};
const LEVEL3_OPPONENT_VARIANTS: Record<Level3OpponentId, SpecialOpponentConfig> = {
  romiromi: {
    name: '로미로미',
    spriteSet: {
      attack: opponentLevel3AttackImage,
      default: opponentLevel3DefaultImage,
      hit: opponentLevel3HitImage,
    },
    defeatSceneImage: stage3DefeatSceneImage,
  },
  gamjaaniguma: {
    name: '감자아니구마',
    spriteSet: {
      attack: opponentLevel3GamjaanigumaAttackImage,
      default: opponentLevel3GamjaanigumaDefaultImage,
      hit: opponentLevel3GamjaanigumaHitImage,
    },
    defeatSceneImage: stage3GamjaanigumaDefeatSceneImage,
  },
};
const LEVEL4_OPPONENT_VARIANTS: Record<Level4OpponentId, SpecialOpponentConfig> = {
  koronan: {
    name: '코로난',
    spriteSet: {
      attack: opponentLevel4AttackImage,
      default: opponentLevel4DefaultImage,
      hit: opponentLevel4HitImage,
    },
    defeatSceneImage: stage4DefeatSceneImage,
  },
  baekgeurigoa: {
    name: '백 그리고 아',
    spriteSet: {
      attack: opponentLevel4BaekgeurigoaAttackImage,
      default: opponentLevel4BaekgeurigoaDefaultImage,
      hit: opponentLevel4BaekgeurigoaHitImage,
    },
    defeatSceneImage: stage4BaekgeurigoaDefeatSceneImage,
  },
};
const LEVEL5_OPPONENT_VARIANTS: Record<Level5OpponentId, SpecialOpponentConfig> = {
  niiik: {
    name: '니이익',
    spriteSet: {
      attack: opponentLevel5AttackImage,
      default: opponentLevel5DefaultImage,
      hit: opponentLevel5HitImage,
    },
    defeatSceneImage: stage5DefeatSceneImage,
  },
  jurdi: {
    name: '주르디',
    spriteSet: {
      attack: opponentLevel5JurdiAttackImage,
      default: opponentLevel5JurdiDefaultImage,
      hit: opponentLevel5JurdiHitImage,
    },
    defeatSceneImage: stage5JurdiDefeatSceneImage,
  },
};
const LEVEL6_OPPONENT_VARIANTS: Record<Level6OpponentId, SpecialOpponentConfig> = {
  syuppeolboi: {
    name: '슈뻘보이',
    spriteSet: {
      attack: opponentLevel6AttackImage,
      default: opponentLevel6DefaultImage,
      hit: opponentLevel6HitImage,
    },
    defeatSceneImage: stage6DefeatSceneImage,
  },
  anheunhannammae: {
    name: '안흔한남매',
    spriteSet: {
      attack: opponentLevel6AnheunhanAttackImage,
      default: opponentLevel6AnheunhanDefaultImage,
      hit: opponentLevel6AnheunhanHitImage,
    },
    defeatSceneImage: stage6AnheunhanDefeatSceneImage,
    defeatSceneClassName: 'scale-[0.94]',
  },
};
const LEVEL7_OPPONENT_VARIANTS: Record<Level7OpponentId, SpecialOpponentConfig> = {
  anijeuko: {
    name: '아니즈코',
    spriteSet: {
      attack: opponentLevel7AttackImage,
      default: opponentLevel7DefaultImage,
      hit: opponentLevel7HitImage,
    },
    defeatSceneImage: stage7DefeatSceneImage,
  },
  arnya: {
    name: '아르냐',
    spriteSet: {
      attack: opponentLevel7ArnyaAttackImage,
      default: opponentLevel7ArnyaDefaultImage,
      hit: opponentLevel7ArnyaHitImage,
    },
    defeatSceneImage: stage7ArnyaDefeatSceneImage,
  },
};
const UNIT3_LEVEL_OPPONENTS: Partial<Record<number, SpecialOpponentConfig>> = {
  1: {
    name: '요르시',
    spriteSet: {
      attack: unit3Level1YorsiAttackImage,
      default: unit3Level1YorsiDefaultImage,
      hit: unit3Level1YorsiHitImage,
    },
    defeatSceneImage: unit3Level1YorsiDefeatSceneImage,
  },
  2: {
    name: '쩌쩌미',
    spriteSet: {
      attack: unit3Level2JjeojjeomiAttackImage,
      default: unit3Level2JjeojjeomiDefaultImage,
      hit: unit3Level2JjeojjeomiHitImage,
    },
    defeatSceneImage: unit3Level2JjeojjeomiDefeatSceneImage,
  },
  3: {
    name: '빵',
    spriteSet: {
      attack: unit3Level3BbangAttackImage,
      default: unit3Level3BbangDefaultImage,
      hit: unit3Level3BbangHitImage,
    },
    defeatSceneImage: unit3Level3BbangDefeatSceneImage,
  },
  4: {
    name: '하트핑',
    spriteSet: {
      attack: unit3Level4HeartpingAttackImage,
      default: unit3Level4HeartpingDefaultImage,
      hit: unit3Level4HeartpingHitImage,
    },
    defeatSceneImage: unit3Level4HeartpingDefeatSceneImage,
  },
  5: {
    name: '트라레로',
    spriteSet: {
      attack: unit3Level5TraleroAttackImage,
      default: unit3Level5TraleroDefaultImage,
      hit: unit3Level5TraleroHitImage,
    },
    defeatSceneImage: unit3Level5TraleroDefeatSceneImage,
  },
  6: {
    name: '덩덩이 탐정',
    spriteSet: {
      attack: unit3Level6DeongdeongiDetectiveAttackImage,
      default: unit3Level6DeongdeongiDetectiveDefaultImage,
      hit: unit3Level6DeongdeongiDetectiveHitImage,
    },
    defeatSceneImage: unit3Level6DeongdeongiDetectiveDefeatSceneImage,
  },
  7: {
    name: '모찌엔젤',
    spriteSet: {
      attack: unit3Level7MochiengelAttackImage,
      default: unit3Level7MochiengelDefaultImage,
      hit: unit3Level7MochiengelHitImage,
    },
    defeatSceneImage: unit3Level7MochiengelDefeatSceneImage,
  },
  8: {
    name: '라부라부',
    spriteSet: {
      attack: unit3Level8LabulabuAttackImage,
      default: unit3Level8LabulabuDefaultImage,
      hit: unit3Level8LabulabuHitImage,
    },
    defeatSceneImage: unit3Level8LabulabuDefeatSceneImage,
  },
  9: {
    name: '김강림',
    spriteSet: {
      attack: unit3Level9GimgangrimAttackImage,
      default: unit3Level9GimgangrimDefaultImage,
      hit: unit3Level9GimgangrimHitImage,
    },
    defeatSceneImage: unit3Level9GimgangrimDefeatSceneImage,
    removeSpriteBlackBackground: true,
    removeDefeatSceneBlackBackground: true,
  },
  10: {
    name: '로블럭스',
    spriteSet: {
      attack: unit3Level10RobloxAttackImage,
      default: unit3Level10RobloxDefaultImage,
      hit: unit3Level10RobloxHitImage,
    },
    defeatSceneImage: unit3Level10RobloxDefeatSceneImage,
    removeSpriteBlackBackground: true,
    removeDefeatSceneBlackBackground: true,
  },
  11: {
    name: '영어 잘하는 새',
    spriteSet: {
      attack: unit3Level11EnglishBirdAttackImage,
      default: unit3Level11EnglishBirdDefaultImage,
      hit: unit3Level11EnglishBirdHitImage,
    },
    defeatSceneImage: unit3Level11EnglishBirdDefeatSceneImage,
    removeSpriteBlackBackground: true,
    removeDefeatSceneBlackBackground: true,
  },
  12: {
    name: '악마고마',
    spriteSet: {
      attack: unit3Level12AkmagomaAttackImage,
      default: unit3Level12AkmagomaDefaultImage,
      hit: unit3Level12AkmagomaHitImage,
    },
    defeatSceneImage: unit3Level12AkmagomaDefeatSceneImage,
    removeSpriteBlackBackground: true,
    removeDefeatSceneBlackBackground: true,
  },
};
const LEVEL_OPPONENT_SPRITES: Partial<Record<number, CharacterSpriteSet>> = {
  1: {
    attack: opponentLevel1AttackImage,
    default: opponentLevel1DefaultImage,
    hit: opponentLevel1HitImage,
  },
  2: {
    attack: opponentLevel2AttackImage,
    default: opponentLevel2DefaultImage,
    hit: opponentLevel2HitImage,
  },
  3: {
    attack: opponentLevel3AttackImage,
    default: opponentLevel3DefaultImage,
    hit: opponentLevel3HitImage,
  },
  4: {
    attack: opponentLevel4AttackImage,
    default: opponentLevel4DefaultImage,
    hit: opponentLevel4HitImage,
  },
  5: {
    attack: opponentLevel5AttackImage,
    default: opponentLevel5DefaultImage,
    hit: opponentLevel5HitImage,
  },
  6: {
    attack: opponentLevel6AttackImage,
    default: opponentLevel6DefaultImage,
    hit: opponentLevel6HitImage,
  },
  7: {
    attack: opponentLevel7AttackImage,
    default: opponentLevel7DefaultImage,
    hit: opponentLevel7HitImage,
  },
  8: {
    attack: opponentLevel8AttackImage,
    default: opponentLevel8DefaultImage,
    hit: opponentLevel8HitImage,
  },
  9: {
    attack: opponentLevel9AttackImage,
    default: opponentLevel9DefaultImage,
    hit: opponentLevel9HitImage,
  },
};
const UNIT_LEVEL_DESCRIPTIONS: Record<LearningUnitId, string[]> = {
  unit2: [
    '',
    '1단계: 받아올림 없는 덧셈',
    '2단계: 받아내림 없는 뺄셈',
    '3단계: 받아올림 1번 덧셈',
    '4단계: 받아내림 1번 뺄셈',
    '5단계: 받아올림 2~3번 덧셈',
    '6단계: 받아내림 2번 뺄셈',
    '7단계: 덧셈과 뺄셈 종합',
    '8단계: 해석형 문항',
    '9단계: 해석형 문항',
  ],
  unit3: [
    '',
    '1단계: 1mm가 왜 필요할까',
    '2단계: 1cm와 1mm의 관계',
    '3단계: 길이 재기',
    '4단계: 길이 비교',
    '5단계: 1km가 왜 필요할까',
    '6단계: 1km와 1m의 관계',
    '7단계: 거리 어림',
    '8단계: 1초가 왜 필요할까?',
    '9단계: 초 단위까지 시각 읽기',
    '10단계: 시간의 덧셈',
    '11단계: 시간의 뺄셈',
    '12단계: 시간의 덧셈과 뺄셈 종합',
  ],
};

function getLevelDescriptionsForUnit(unitId: LearningUnitId) {
  return UNIT_LEVEL_DESCRIPTIONS[unitId];
}

function getTotalLevelsForUnit(unitId: LearningUnitId) {
  return getLevelDescriptionsForUnit(unitId).length - 1;
}

function getDeveloperLevelFromShortcut(event: KeyboardEvent) {
  if (!event.shiftKey || event.ctrlKey || event.altKey || event.metaKey) {
    return null;
  }

  if (event.code.startsWith('Digit')) {
    const digit = Number(event.code.slice(5));
    return digit === 0 ? 10 : digit;
  }

  if (event.code === 'Minus') {
    return 11;
  }

  if (event.code === 'Equal') {
    return 12;
  }

  return null;
}

const DEFEAT_SCENE_IMAGES: Partial<Record<number, string>> = {
  1: stage1DefeatSceneImage,
  2: stage2DefeatSceneImage,
  3: stage3DefeatSceneImage,
  4: stage4DefeatSceneImage,
  5: stage5DefeatSceneImage,
  6: stage6DefeatSceneImage,
  7: stage7DefeatSceneImage,
  8: stage8DefeatSceneImage,
  9: stage9DefeatSceneImage,
};
const RECORD_BOARD_URL = 'https://padlet.com/hyong4115edu/padlet-khqcsms45f1diiig';
const VICTORY_CONFETTI = [
  { left: '6%', top: '12%', className: 'h-3 w-14 rounded-full bg-yellow-300/90', duration: 3.6, delay: 0.15, drift: 10 },
  { left: '17%', top: '27%', className: 'h-4 w-4 rounded-full bg-amber-100/95', duration: 4.1, delay: 0.75, drift: -8 },
  { left: '84%', top: '14%', className: 'h-3 w-12 rounded-full bg-rose-300/80', duration: 3.9, delay: 0.4, drift: -12 },
  { left: '92%', top: '28%', className: 'h-4 w-4 rotate-45 rounded-sm bg-cyan-300/80', duration: 4.4, delay: 0.95, drift: 8 },
  { left: '11%', top: '61%', className: 'h-3 w-10 rotate-12 rounded-full bg-emerald-300/80', duration: 4.2, delay: 1.1, drift: 6 },
  { left: '88%', top: '59%', className: 'h-3 w-9 -rotate-12 rounded-full bg-fuchsia-300/75', duration: 3.8, delay: 0.55, drift: -6 },
] as const;
const VICTORY_SPARKLES = [
  { left: '15%', top: '10%', size: 28, delay: 0.2, duration: 2.8, className: 'text-yellow-100/90' },
  { left: '81%', top: '8%', size: 26, delay: 0.85, duration: 2.6, className: 'text-amber-200/80' },
  { left: '10%', top: '44%', size: 24, delay: 0.55, duration: 2.9, className: 'text-rose-200/75' },
  { left: '86%', top: '42%', size: 30, delay: 1.1, duration: 3.1, className: 'text-cyan-200/75' },
] as const;
const DEFAULT_PLAYER_NAME = '나';
const BATTLE_DIFFICULTY_ORDER: BattleDifficulty[] = ['easy', 'normal', 'hard'];
const BATTLE_DIFFICULTY_CONFIG: Record<BattleDifficulty, BattleDifficultyConfig> = {
  easy: {
    label: '쉬움',
    regularAttackDamage: 30,
    regularHitDamage: 10,
    estimationAttackDamage: 48,
    estimationHitDamage: 25,
  },
  normal: {
    label: '보통',
    regularAttackDamage: 25,
    regularHitDamage: 15,
    estimationAttackDamage: 40,
    estimationHitDamage: 30,
  },
  hard: {
    label: '어려움',
    regularAttackDamage: 20,
    regularHitDamage: 20,
    estimationAttackDamage: 32,
    estimationHitDamage: 35,
  },
};
const LEARNING_UNITS: LearningUnitConfig[] = [
  {
    id: 'unit2',
    chapterLabel: '2단원',
    title: '덧셈과 뺄셈',
    summary: '기존 내용',
    description: '현재 바로 플레이할 수 있는 단원입니다.',
    isAvailable: true,
  },
  {
    id: 'unit3',
    chapterLabel: '3단원',
    title: '길이와 시간',
    summary: '단위, 측정, 시각과 시간',
    description: '길이와 시간을 읽고, 재고, 어림하고, 계산하는 단원입니다.',
    isAvailable: true,
  },
];
const FINAL_BUILDER_HP = 25;
const ESTIMATION_SAFE_HP = 40;
const UNIT_SELECTION_TIME_LIMIT_SECONDS = 15;
const UNIT_SELECTION_CHALLENGE_LEVELS = new Set<number>([2, 4, 7, 8]);
const MAX_ZERO_TENS_BORROW_COACHMARKS = 3;
const ZERO_TENS_BORROW_COACHMARK_TITLE = '생각해보기';
const ZERO_TENS_BORROW_COACHMARK_TEXT = '십의 자리가 0인 수에서 일의 자리로 어떻게 받아내림을 할까요?';
const UNIT3_SECRET_CODE_GATE = {
  unitId: 'unit3' as const,
  fromLevel: 7,
  nextLevel: 8,
  answer: '시각과 시간',
};
const ATTACK_POSE_DURATION_MS = 850;
const HIT_POSE_DURATION_MS = 700;
const ATTACK_MOTION_DURATION_S = 0.4;
const HIT_MOTION_DURATION_S = 0.5;
const ESTIMATION_TIME_LIMIT_SECONDS = 20;
const ESTIMATION_ROUNDING_UNIT = 100;
const ESTIMATION_MIN_ANSWER = 100;
const ESTIMATION_MAX_ANSWER = 900;
const ESTIMATION_MAX_RAW_ANSWER = ESTIMATION_MAX_ANSWER + ESTIMATION_ROUNDING_UNIT / 2 - 1;
const ESTIMATION_PROMPT = '각 수를 백의 자리까지 반올림해서 계산해 보세요.';
const ESTIMATION_BOUNDARY_RANGE_MIN = 40;
const ESTIMATION_BOUNDARY_RANGE_MAX = 60;
const ESTIMATION_MIN_DISTANCE_FROM_ANCHOR = 15;
const ESTIMATION_MAX_GENERATION_ATTEMPTS = 300;

function pickSpecialOpponentSelections(): SpecialOpponentSelections {
  return {
    level1: Math.random() < 0.5 ? DEFAULT_LEVEL1_OPPONENT_ID : 'churusigi',
    level2: Math.random() < 0.5 ? DEFAULT_LEVEL2_OPPONENT_ID : 'jjangpal',
    level3: Math.random() < 0.5 ? DEFAULT_LEVEL3_OPPONENT_ID : 'gamjaaniguma',
    level4: Math.random() < 0.5 ? DEFAULT_LEVEL4_OPPONENT_ID : 'baekgeurigoa',
    level5: Math.random() < 0.5 ? DEFAULT_LEVEL5_OPPONENT_ID : 'jurdi',
    level6: Math.random() < 0.5 ? DEFAULT_LEVEL6_OPPONENT_ID : 'anheunhannammae',
    level7: Math.random() < 0.5 ? DEFAULT_LEVEL7_OPPONENT_ID : 'arnya',
  };
}

function getSpecialOpponentConfig(level: number, selections: SpecialOpponentSelections) {
  if (level === 1) {
    return LEVEL1_OPPONENT_VARIANTS[selections.level1] ?? LEVEL1_OPPONENT_VARIANTS[DEFAULT_LEVEL1_OPPONENT_ID];
  }

  if (level === 2) {
    return LEVEL2_OPPONENT_VARIANTS[selections.level2] ?? LEVEL2_OPPONENT_VARIANTS[DEFAULT_LEVEL2_OPPONENT_ID];
  }

  if (level === 3) {
    return LEVEL3_OPPONENT_VARIANTS[selections.level3] ?? LEVEL3_OPPONENT_VARIANTS[DEFAULT_LEVEL3_OPPONENT_ID];
  }

  if (level === 4) {
    return LEVEL4_OPPONENT_VARIANTS[selections.level4] ?? LEVEL4_OPPONENT_VARIANTS[DEFAULT_LEVEL4_OPPONENT_ID];
  }

  if (level === 5) {
    return LEVEL5_OPPONENT_VARIANTS[selections.level5] ?? LEVEL5_OPPONENT_VARIANTS[DEFAULT_LEVEL5_OPPONENT_ID];
  }

  if (level === 6) {
    return LEVEL6_OPPONENT_VARIANTS[selections.level6] ?? LEVEL6_OPPONENT_VARIANTS[DEFAULT_LEVEL6_OPPONENT_ID];
  }

  if (level === 7) {
    return LEVEL7_OPPONENT_VARIANTS[selections.level7] ?? LEVEL7_OPPONENT_VARIANTS[DEFAULT_LEVEL7_OPPONENT_ID];
  }

  return null;
}

function getConfiguredOpponentForUnit(
  unitId: LearningUnitId,
  level: number,
  selections: SpecialOpponentSelections,
) {
  if (unitId === 'unit3') {
    return UNIT3_LEVEL_OPPONENTS[level] ?? null;
  }

  return getSpecialOpponentConfig(level, selections);
}

function getOpponentEmojiForLevel(level: number) {
  return LEVEL_OPPONENT_EMOJIS[level] ?? LEVEL_OPPONENT_EMOJIS[LEVEL_OPPONENT_EMOJIS.length - 1];
}

function getOpponentNameForLevel(
  unitId: LearningUnitId,
  level: number,
  selections: SpecialOpponentSelections = DEFAULT_SPECIAL_OPPONENT_SELECTIONS,
) {
  const configuredOpponent = getConfiguredOpponentForUnit(unitId, level, selections);
  if (configuredOpponent) {
    return configuredOpponent.name;
  }

  return LEVEL_OPPONENT_NAMES[level] ?? LEVEL_OPPONENT_NAMES[LEVEL_OPPONENT_NAMES.length - 1];
}

function getOpponentSpriteSetForLevel(
  unitId: LearningUnitId,
  level: number,
  selections: SpecialOpponentSelections = DEFAULT_SPECIAL_OPPONENT_SELECTIONS,
) {
  const configuredOpponent = getConfiguredOpponentForUnit(unitId, level, selections);
  if (configuredOpponent) {
    return configuredOpponent.spriteSet;
  }

  return LEVEL_OPPONENT_SPRITES[level] ?? LEVEL_OPPONENT_SPRITES[9];
}

function getDefeatSceneImageForLevel(
  unitId: LearningUnitId,
  level: number,
  selections: SpecialOpponentSelections = DEFAULT_SPECIAL_OPPONENT_SELECTIONS,
) {
  const configuredOpponent = getConfiguredOpponentForUnit(unitId, level, selections);
  if (configuredOpponent) {
    return configuredOpponent.defeatSceneImage;
  }

  return DEFEAT_SCENE_IMAGES[level] ?? DEFEAT_SCENE_IMAGES[9] ?? null;
}

function getOpponentEntranceMessage(
  unitId: LearningUnitId,
  level: number,
  selections: SpecialOpponentSelections = DEFAULT_SPECIAL_OPPONENT_SELECTIONS,
) {
  return `상대 ${getOpponentNameForLevel(unitId, level, selections)} 등장!`;
}

function digitRange(min: number, max: number) {
  return Array.from({ length: max - min + 1 }, (_, index) => String(min + index));
}

function createBuilderSlot(id: string, label: string, min: number, max: number): BuildSlotConfig {
  return {
    id,
    label,
    digits: digitRange(min, max),
  };
}

const previousBuilderTemplateIdByLevel: Partial<Record<number, string>> = {};

function pickBuilderTemplate(level: number, templates: BuilderTemplate[]) {
  const previousTemplateId = previousBuilderTemplateIdByLevel[level];
  const candidates = templates.filter((template) => template.templateId !== previousTemplateId);
  const selectedTemplate = sample(candidates.length > 0 ? candidates : templates);
  previousBuilderTemplateIdByLevel[level] = selectedTemplate.templateId;
  return selectedTemplate;
}

const STORY_TEMPLATE_POOLS: Record<number, StoryTemplatePool> = {
  8: {
    '+': [
      (a, b) =>
        `연지네 집에서 학교까지 가려면 ${a}걸음을, 학교에서 도서관까지 가려면 ${b}걸음을 걸어야 합니다.\n연지가 집에서 학교를 지나 도서관까지 가려면 모두 몇 걸음을 걸어야 하는지 구해 봅시다.`,
      (a, b) =>
        `도서관 책 정리 봉사에 오전에는 ${a}권, 오후에는 ${b}권의 책을 제자리에 꽂았습니다.\n하루 동안 모두 몇 권의 책을 정리했는지 구해 봅시다.`,
      (a, b) =>
        `운동회 응원 점수를 1반은 ${a}점, 2반은 ${b}점 얻었습니다.\n두 반이 얻은 점수는 모두 몇 점인지 구해 봅시다.`,
      (a, b) =>
        `민준이는 아침에 색종이 ${a}장을 접고, 방과 후에 ${b}장을 더 접었습니다.\n민준이가 접은 색종이는 모두 몇 장인지 구해 봅시다.`,
      (a, b) =>
        `학교 텃밭에서 토마토를 1구역에서 ${a}개, 2구역에서 ${b}개 땄습니다.\n오늘 모두 몇 개의 토마토를 수확했는지 구해 봅시다.`,
      (a, b) =>
        `학급 나눔 상자에 1모둠이 연필 ${a}자루를 넣고, 2모둠이 ${b}자루를 더 넣었습니다.\n상자 안에는 모두 몇 자루의 연필이 있는지 구해 봅시다.`,
      (a, b) =>
        `급식실 우유 상자를 오전에 ${a}개 정리하고, 점심시간 뒤에 ${b}개를 더 정리했습니다.\n정리한 우유 상자는 모두 몇 개인지 구해 봅시다.`,
      (a, b) =>
        `과학실 관찰 기록지를 월요일에 ${a}장, 화요일에 ${b}장 모았습니다.\n이틀 동안 모은 기록지는 모두 몇 장인지 구해 봅시다.`,
      (a, b) =>
        `학교 복도 분리수거함에 오전에는 플라스틱 병 ${a}개, 오후에는 ${b}개를 넣었습니다.\n하루 동안 모두 몇 개를 모았는지 구해 봅시다.`,
      (a, b) =>
        `독서 달력에 소희는 지난주에 ${a}쪽, 이번 주에 ${b}쪽을 읽었습니다.\n지금까지 읽은 쪽수는 모두 몇 쪽인지 구해 봅시다.`,
      (a, b) =>
        `체험학습 준비로 3학년은 이름표 ${a}장, 4학년은 ${b}장을 만들었습니다.\n만든 이름표는 모두 몇 장인지 구해 봅시다.`,
      (a, b) =>
        `학교 앞 나눔 바구니에 아침에는 귤 ${a}개, 점심 뒤에는 ${b}개를 더 담았습니다.\n바구니에 들어 있는 귤은 모두 몇 개인지 구해 봅시다.`,
    ],
    '-': [
      (a, b) =>
        `도윤이네 학교 누리집은 오늘 ${a}명이 방문했고, 어제는 ${b}명이 방문했습니다.\n오늘 누리집을 방문한 사람은 어제보다 몇 명 더 많은지 구해 봅시다.`,
      (a, b) =>
        `학급문고에 책이 ${a}권 있었는데, 친구들이 ${b}권을 빌려 갔습니다.\n지금 남아 있는 책은 몇 권인지 구해 봅시다.`,
      (a, b) =>
        `준호는 스티커를 ${a}장 가지고 있었는데, 동생에게 ${b}장을 나누어 주었습니다.\n준호에게 남은 스티커는 몇 장인지 구해 봅시다.`,
      (a, b) =>
        `체육 시간에 준비한 공은 ${a}개였고, 그중 ${b}개를 사용했습니다.\n아직 사용하지 않은 공은 몇 개인지 구해 봅시다.`,
      (a, b) =>
        `미술 시간에 크레파스를 ${a}개 준비했는데, 친구들이 ${b}개를 먼저 사용했습니다.\n지금 남아 있는 크레파스는 몇 개인지 구해 봅시다.`,
      (a, b) =>
        `봉사 활동용 장갑이 ${a}켤레 있었는데, 그중 ${b}켤레를 나누어 주었습니다.\n남은 장갑은 몇 켤레인지 구해 봅시다.`,
      (a, b) =>
        `학교 화단에 심은 꽃모종이 ${a}개였는데, 운동장 쪽 화단으로 ${b}개를 옮겼습니다.\n처음 화단에 남은 꽃모종은 몇 개인지 구해 봅시다.`,
      (a, b) =>
        `급식 도우미 배지가 ${a}개 있었는데, 오늘 ${b}개를 사용했습니다.\n보관함에 남은 배지는 몇 개인지 구해 봅시다.`,
      (a, b) =>
        `현장체험학습 명찰을 ${a}개 준비했는데, 출발 전에 ${b}개를 나누어 주었습니다.\n남은 명찰은 몇 개인지 구해 봅시다.`,
      (a, b) =>
        `교실 게시판에 압정을 ${a}개 두었는데, 오늘 ${b}개를 사용했습니다.\n상자에 남아 있는 압정은 몇 개인지 구해 봅시다.`,
      (a, b) =>
        `급식실에서 종이컵 ${a}개를 꺼냈는데, 그중 ${b}개를 먼저 사용했습니다.\n아직 남은 종이컵은 몇 개인지 구해 봅시다.`,
      (a, b) =>
        `민지는 퍼즐 조각 ${a}개를 맞췄다가 그중 ${b}개를 다시 빼 보았습니다.\n지금 맞춰 놓은 조각은 몇 개인지 구해 봅시다.`,
    ],
  },
  9: {
    '+': [
      (a, b) =>
        `재활용 캠페인에서 월요일에는 종이 ${a}장을, 화요일에는 ${b}장을 모았습니다. 모은 종이의 수를 활동 기록표에 적어 넣으려고 합니다.\n이틀 동안 모두 몇 장을 모았는지 구해 봅시다.`,
      (a, b) =>
        `학교 박람회 체험 부스에 오전에는 ${a}명, 오후에는 ${b}명이 참여했습니다. 진행 도우미가 하루 참여 인원을 정리해 보려고 합니다.\n하루 동안 참여한 학생은 모두 몇 명인지 구해 봅시다.`,
      (a, b) =>
        `교내 바자회 쿠폰을 쉬는 시간마다 나누어 주었더니 1교시에 ${a}장, 2교시에 ${b}장을 사용했습니다. 학생회에서 지금까지 사용한 쿠폰 수를 알아보려 합니다.\n사용한 쿠폰은 모두 몇 장인지 구해 봅시다.`,
      (a, b) =>
        `별자리 관찰 행사에서 1조가 별 스티커를 ${a}장, 2조가 ${b}장 모았습니다. 행사 마무리 시간에 두 조의 결과를 함께 발표하려고 합니다.\n두 조가 모은 스티커는 모두 몇 장인지 구해 봅시다.`,
      (a, b) =>
        `수영장 입장 기록을 보니 오전반은 ${a}명, 오후반은 ${b}명이었습니다. 체육 선생님이 하루 전체 이용 인원을 확인하려고 합니다.\n이날 수영장을 이용한 학생은 모두 몇 명인지 구해 봅시다.`,
      (a, b) =>
        `학교 축제 초대장을 3학년은 ${a}장, 4학년은 ${b}장 완성했습니다. 축제 준비를 맡은 선생님이 완성된 초대장 수를 세어 보려고 합니다.\n완성한 초대장은 모두 몇 장인지 구해 봅시다.`,
      (a, b) =>
        `환경 동아리에서 페트병 뚜껑을 지난주에 ${a}개, 이번 주에 ${b}개 더 모았습니다. 모은 양을 벽보에 적기 전에 전체 수를 확인하려고 합니다.\n지금까지 모두 몇 개를 모았는지 구해 봅시다.`,
      (a, b) =>
        `교실 뒤 게시판에 작품 사진을 첫째 줄에 ${a}장, 둘째 줄에 ${b}장 붙였습니다. 게시판에 전시된 사진 수를 안내문에 적으려고 합니다.\n게시판에 붙인 사진은 모두 몇 장인지 구해 봅시다.`,
      (a, b) =>
        `학교 안전 캠페인 설문에 어제는 ${a}명, 오늘은 ${b}명이 참여했습니다. 학생회에서 이틀 동안 모인 응답 수를 정리하려고 합니다.\n모인 응답은 모두 몇 개인지 구해 봅시다.`,
      (a, b) =>
        `도서관 대출 기록을 보니 오전에는 책 ${a}권, 오후에는 ${b}권이 대출되었습니다. 사서 선생님이 하루 대출 수를 확인하려고 합니다.\n하루 동안 대출된 책은 모두 몇 권인지 구해 봅시다.`,
      (a, b) =>
        `교내 스포츠데이에서 5학년은 ${a}점, 6학년은 ${b}점을 얻었습니다. 진행팀이 전체 점수를 합쳐 발표하려고 합니다.\n두 학년이 얻은 점수는 모두 몇 점인지 구해 봅시다.`,
      (a, b) =>
        `환경 보호 벽보에 손도장을 첫째 시간에 ${a}개, 둘째 시간에 ${b}개 찍었습니다. 벽보에 찍힌 손도장의 수를 세어 보려고 합니다.\n손도장은 모두 몇 개인지 구해 봅시다.`,
    ],
    '-': [
      (a, b) =>
        `현장체험학습 간식 꾸러미를 ${a}개 준비했는데, 출발 전에 ${b}개를 나누어 주었습니다. 아직 버스에 싣지 않은 꾸러미 수를 알아보려 합니다.\n남은 간식 꾸러미는 몇 개인지 구해 봅시다.`,
      (a, b) =>
        `온라인 퀴즈에 ${a}명이 참여했고, 그중 ${b}명이 이미 답을 제출했습니다. 담임 선생님이 아직 기다려야 하는 학생 수를 확인하려고 합니다.\n아직 제출하지 않은 사람은 몇 명인지 구해 봅시다.`,
      (a, b) =>
        `미술 전시회 입장권이 ${a}장 있었는데, 오전에 ${b}장이 사용되었습니다. 오후 관람을 위해 남은 입장권 수를 세어 보려고 합니다.\n남아 있는 입장권은 몇 장인지 구해 봅시다.`,
      (a, b) =>
        `학교 방송을 들은 학생이 이번 주에는 ${a}명, 지난주에는 ${b}명이었습니다. 방송부에서 지난주와 비교한 차이를 알아보려 합니다.\n이번 주에 더 많이 들은 학생은 몇 명인지 구해 봅시다.`,
      (a, b) =>
        `달리기 기록표를 ${a}장 준비했는데, 그중 ${b}장을 먼저 배부했습니다. 이어서 사용할 수 있도록 남은 기록표 수를 알아보려 합니다.\n기록표는 몇 장 남았는지 구해 봅시다.`,
      (a, b) =>
        `과학관 체험 신청자는 ${a}명이었는데, 그중 ${b}명이 먼저 입장했습니다. 줄을 서서 기다리는 학생이 몇 명인지 확인하려고 합니다.\n아직 기다리는 학생은 몇 명인지 구해 봅시다.`,
      (a, b) =>
        `학급 회의 자료를 ${a}부 인쇄했는데, 발표 모둠에 ${b}부를 나누어 주었습니다. 교실 책상 위에 남아 있는 자료 수를 알아보려 합니다.\n책상 위에 남은 자료는 몇 부인지 구해 봅시다.`,
      (a, b) =>
        `우산 꽂이에 우산이 ${a}개 있었는데, 비가 그친 뒤 ${b}개가 먼저 가져가졌습니다. 우산 꽂이에 아직 남은 우산 수를 확인하려고 합니다.\n남아 있는 우산은 몇 개인지 구해 봅시다.`,
      (a, b) =>
        `자원봉사 팔찌를 ${a}개 준비했는데, 행사 시작 전에 ${b}개를 나누어 주었습니다. 진행팀이 남은 수량을 확인하려고 합니다.\n남은 팔찌는 몇 개인지 구해 봅시다.`,
      (a, b) =>
        `코딩 교실 태블릿이 ${a}대 있었는데, 그중 ${b}대를 먼저 배부했습니다. 아직 보관함에 있는 태블릿은 몇 대인지 구해 봅시다.`,
      (a, b) =>
        `운동장 응원 깃발을 ${a}개 세워 두었는데, 비가 와서 ${b}개를 먼저 정리했습니다. 아직 남아 있는 깃발은 몇 개인지 구해 봅시다.`,
      (a, b) =>
        `학교 사진전 인화 사진이 ${a}장 있었는데, 전시 준비로 ${b}장을 먼저 게시판에 붙였습니다. 아직 상자에 남은 사진은 몇 장인지 구해 봅시다.`,
    ],
  },
};

function sample<T>(items: T[]): T {
  return items[Math.floor(Math.random() * items.length)];
}

function randomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

interface MeasurementFactoryConfig {
  title: string;
  question: string;
  objectKind: MeasurementObjectKind;
  objectLabel: string;
  minLengthMm: number;
  maxLengthMm: number;
  shiftedStartMinMm: number;
  shiftedStartMaxMm: number;
}

function shuffleValues<T>(values: T[]) {
  const next = [...values];

  for (let index = next.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [next[index], next[swapIndex]] = [next[swapIndex], next[index]];
  }

  return next;
}

function createMeasurementFactoryPair(config: MeasurementFactoryConfig): Array<() => Problem> {
  return [
    () => {
      const lengthMm = randomInt(config.minLengthMm, config.maxLengthMm);
      return createMeasurementProblem({
        title: config.title,
        question: config.question,
        objectKind: config.objectKind,
        objectLabel: config.objectLabel,
        startMm: 0,
        lengthMm,
      });
    },
    () => {
      const lengthMm = randomInt(config.minLengthMm, config.maxLengthMm);
      return createMeasurementProblem({
        title: config.title,
        question: config.question,
        objectKind: config.objectKind,
        objectLabel: config.objectLabel,
        startMm: randomInt(config.shiftedStartMinMm, config.shiftedStartMaxMm),
        lengthMm,
      });
    },
  ];
}

function toMillimeters(centimeters: number, millimeters = 0) {
  return centimeters * 10 + millimeters;
}

function formatLengthAsMixedUnits(totalMillimeters: number) {
  const centimeters = Math.floor(totalMillimeters / 10);
  const millimeters = totalMillimeters % 10;

  if (centimeters === 0) {
    return `${totalMillimeters}mm`;
  }

  if (millimeters === 0) {
    return `${centimeters}cm`;
  }

  return `${centimeters}cm ${millimeters}mm`;
}

function formatLengthValue(totalMillimeters: number) {
  if (totalMillimeters < 10) {
    return `${totalMillimeters}mm`;
  }

  if (Math.random() < 0.4) {
    return `${totalMillimeters}mm`;
  }

  return formatLengthAsMixedUnits(totalMillimeters);
}

function toMeters(kilometers: number, meters = 0) {
  return kilometers * 1000 + meters;
}

function formatDistanceAsMixedUnits(totalMeters: number) {
  const kilometers = Math.floor(totalMeters / 1000);
  const meters = totalMeters % 1000;

  if (kilometers === 0) {
    return `${totalMeters}m`;
  }

  if (meters === 0) {
    return `${kilometers}km`;
  }

  return `${kilometers}km ${meters}m`;
}

function formatDistanceValue(totalMeters: number) {
  if (totalMeters < 1000) {
    return `${totalMeters}m`;
  }

  if (Math.random() < 0.35) {
    return `${totalMeters}m`;
  }

  return formatDistanceAsMixedUnits(totalMeters);
}

function getDistinctRandomNumbers(count: number, min: number, max: number) {
  const values = new Set<number>();

  while (values.size < count) {
    values.add(randomInt(min, max));
  }

  return [...values];
}

function buildNumberedOptionsPrompt(question: string, options: string[]) {
  return `${question}\n${options.map((option, index) => `${index + 1}) ${option}`).join('\n')}`;
}

function createShuffledOptionsProblem(question: string, options: string[], correctOption: string) {
  const shuffledOptions = shuffleValues(options);
  return createPromptProblem(
    buildNumberedOptionsPrompt(question, shuffledOptions),
    shuffledOptions.indexOf(correctOption) + 1,
  );
}

function formatClockTime(hours: number, minutes: number, seconds?: number) {
  if (seconds === undefined) {
    return `${hours}시 ${minutes}분`;
  }

  return `${hours}시 ${minutes}분 ${seconds}초`;
}

function formatDuration(hours: number, minutes: number, seconds = 0) {
  const parts: string[] = [];

  if (hours > 0) {
    parts.push(`${hours}시간`);
  }

  if (minutes > 0) {
    parts.push(`${minutes}분`);
  }

  if (seconds > 0 || parts.length === 0) {
    parts.push(`${seconds}초`);
  }

  return parts.join(' ');
}

function splitClockSeconds(totalSeconds: number) {
  return {
    hours: Math.floor(totalSeconds / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  };
}

function splitAnimatedClockSeconds(totalSeconds: number) {
  const secondsInHalfDay = 12 * 3600;
  const normalizedTotalSeconds = ((totalSeconds % secondsInHalfDay) + secondsInHalfDay) % secondsInHalfDay;
  const hours = Math.floor(normalizedTotalSeconds / 3600);

  return {
    hours: hours === 0 ? 12 : hours,
    minutes: Math.floor((normalizedTotalSeconds % 3600) / 60),
    seconds: normalizedTotalSeconds % 60,
  };
}

function toTotalTimeSeconds(value: TimeValue) {
  return value.hours * 3600 + value.minutes * 60 + value.seconds;
}

function getTimeValueSignature(value: TimeValue) {
  return `${value.hours}:${value.minutes}:${value.seconds}`;
}

function getTimeValuePartValue(value: TimeValue, part: ClockInputPart) {
  if (part === 'hours') {
    return value.hours;
  }

  if (part === 'minutes') {
    return value.minutes;
  }

  return value.seconds;
}

function getClockReadingPartValue(clockReading: ClockReadingProblemData, part: ClockInputPart) {
  if (part === 'hours') {
    return clockReading.hour;
  }

  if (part === 'minutes') {
    return clockReading.minute;
  }

  return clockReading.second;
}

function formatClockReadingBlankText(
  hour: number,
  minute: number,
  second: number,
  editableParts: ClockInputPart[],
) {
  const values: Record<ClockInputPart, string> = {
    hours: editableParts.includes('hours') ? '□시' : `${hour}시`,
    minutes: editableParts.includes('minutes') ? '□분' : `${minute}분`,
    seconds: editableParts.includes('seconds') ? '□초' : `${second}초`,
  };

  return `${values.hours} ${values.minutes} ${values.seconds}`;
}

function getClockReadingDifficulty(problemSequence?: number, opponentHP = 100): ClockReadingDifficulty {
  if (problemSequence !== undefined) {
    return Math.min(Math.max(problemSequence, 1), 5) as ClockReadingDifficulty;
  }

  if (opponentHP <= 20) return 5;
  if (opponentHP <= 40) return 4;
  if (opponentHP <= 60) return 3;
  if (opponentHP <= 80) return 2;
  return 1;
}

function getClockReadingEditableParts(_difficulty: ClockReadingDifficulty): ClockInputPart[] {
  return ['hours', 'minutes', 'seconds'];
}

function createClockReadingVisualProblem(difficulty: ClockReadingDifficulty = 3): Problem {
  const hour = randomInt(1, 12);
  const minute =
    difficulty === 1
      ? sample([0, 15, 30, 45])
      : difficulty === 2 || difficulty === 3
        ? randomInt(0, 11) * 5
        : randomInt(0, 59);
  // Exclude 0 seconds so learners always read the second hand, while keeping the
  // minute hand close enough to the current minute for elementary learners.
  const second =
    difficulty === 1
      ? sample([5, 10])
      : difficulty === 2
        ? sample([5, 10, 15])
        : difficulty === 3 || difficulty === 4
        ? sample([5, 10, 15])
        : sample([5, 10, 15, 20]);
  const editableParts = getClockReadingEditableParts(difficulty);
  const question =
    editableParts.length === 3
      ? '시침, 분침, 초침이 가리키는 시각을 차례대로 써 보세요.'
      : `시계가 가리키는 시각은 ${formatClockReadingBlankText(hour, minute, second, editableParts)}입니다. 빈칸에 알맞은 수를 써 보세요.`;

  return {
    text: '',
    prompt: '시계 그림을 보고 시각을 읽어 보세요.',
    answer: hour * 3600 + minute * 60 + second,
    kind: 'clockReading',
    clockReading: {
      title: '시계 그림을 보고 시각을 읽어 보세요.',
      question,
      hour,
      minute,
      second,
      editableParts,
    },
  };
}

function createTimeAdditionProblem(timeAddition: TimeAdditionProblemData): Problem {
  return {
    text: '',
    prompt: `${timeAddition.mode}:${getTimeValueSignature(timeAddition.left)}${timeAddition.operation}${getTimeValueSignature(timeAddition.right)}`,
    answer: toTotalTimeSeconds(timeAddition.result),
    kind: 'timeAddition',
    timeAddition,
  };
}

function createStoryTimeAdditionProblem(
  timeAddition: Omit<TimeAdditionProblemData, 'mode'> & {
    storyLines: string[];
    storyHighlights?: TimeStoryHighlight[];
  },
): Problem {
  return createTimeAdditionProblem({
    ...timeAddition,
    mode: 'story',
  });
}

const CLOCK_TIME_ADDITION_PRESENTATIONS = [
  {
    title: '시계 그림으로 시간을 더해 보세요.',
    instruction: '시작 시각과 더할 시간을 보고, 결과 시각을 써 보세요.',
  },
  {
    title: '시계를 보고 지난 뒤의 시각을 구해 보세요.',
    instruction: '처음 시각에서 몇 분 몇 초가 지난 뒤의 시각을 적어 보세요.',
  },
  {
    title: '시각이 어떻게 바뀌는지 생각해 보세요.',
    instruction: '주어진 시각에 시간을 더한 뒤의 결과를 구해 보세요.',
  },
] as const;

const BAR_TIME_ADDITION_PRESENTATIONS = [
  {
    title: '띠모형으로 시간을 합쳐 보세요.',
    instruction: '두 시간 띠가 모여 하나가 되는 모습을 보고 합한 시간을 구해 보세요.',
  },
  {
    title: '띠를 보고 더해진 시간을 구해 보세요.',
    instruction: '앞의 시간과 뒤의 시간이 이어진 전체 시간을 적어 보세요.',
  },
  {
    title: '시간 띠를 이어 붙여 보세요.',
    instruction: '두 구간의 시간을 합쳐 전체 시간이 얼마인지 생각해 보세요.',
  },
] as const;

const VERTICAL_TIME_ADDITION_PRESENTATIONS = [
  {
    title: '세로식으로 시간을 더해 보세요.',
    instruction: '세로식을 보고 시간, 분, 초를 차례대로 계산해 보세요.',
  },
  {
    title: '세로 계산으로 시간을 더해 보세요.',
    instruction: '초부터 차례대로 더하며 결과를 구해 보세요.',
  },
  {
    title: '시간 세로셈을 완성해 보세요.',
    instruction: '올림이 있는지 살피며 계산 결과를 적어 보세요.',
  },
] as const;

const CLOCK_TIME_SUBTRACTION_PRESENTATIONS = [
  {
    title: '시계 그림으로 시간을 빼 보세요.',
    instruction: '시작 시각과 뺄 시간을 보고, 결과 시각을 써 보세요.',
  },
  {
    title: '시계를 보고 전의 시각을 구해 보세요.',
    instruction: '주어진 시각에서 몇 분 몇 초 전인지 계산해 보세요.',
  },
  {
    title: '시각에서 시간을 빼 보세요.',
    instruction: '시계에 나타난 시각에서 주어진 시간을 뺀 결과를 구해 보세요.',
  },
] as const;

const BAR_TIME_SUBTRACTION_PRESENTATIONS = [
  {
    title: '띠모형으로 시간을 빼 보세요.',
    instruction: '처음 시간과 뺄 시간을 보고 남은 시간을 구해 보세요.',
  },
  {
    title: '시간 띠에서 남은 시간을 찾아보세요.',
    instruction: '전체 시간에서 일부 시간을 덜어낸 뒤 남은 시간을 적어 보세요.',
  },
  {
    title: '띠모형으로 남은 시간을 계산해 보세요.',
    instruction: '두 시간 띠의 차이를 생각하며 답을 구해 보세요.',
  },
] as const;

const VERTICAL_TIME_SUBTRACTION_PRESENTATIONS = [
  {
    title: '세로식으로 시간을 빼 보세요.',
    instruction: '세로식을 보고 시간, 분, 초를 차례대로 계산해 보세요.',
  },
  {
    title: '세로 계산으로 시간을 빼 보세요.',
    instruction: '필요한 곳에서 받아내림하며 결과를 구해 보세요.',
  },
  {
    title: '시간 세로셈을 완성해 보세요.',
    instruction: '초와 분의 받아내림을 살피며 차를 계산해 보세요.',
  },
] as const;

function createClockTimeAdditionProblem(step = 1): Problem {
  while (true) {
    const startHour = randomInt(1, 10);
    const startMinute =
      step === 1
        ? sample([5, 10, 15, 20, 25, 30, 35, 40])
        : step === 2
          ? randomInt(10, 45)
          : randomInt(35, 55);
    const startSecond =
      step === 1
        ? sample([10, 20, 30])
        : step === 2
          ? sample([15, 25, 35, 45])
          : sample([20, 30, 40, 50]);
    const addMinutes =
      step === 1
        ? randomInt(1, 5)
        : step === 2
          ? randomInt(2, 8)
          : randomInt(8, 18);
    const addSeconds =
      step === 1
        ? sample([10, 20])
        : step === 2
          ? sample([15, 20, 25, 30])
          : sample([15, 25, 35, 45]);
    const result = splitClockSeconds(startHour * 3600 + startMinute * 60 + startSecond + addMinutes * 60 + addSeconds);

    if (result.hours <= 12) {
      const presentation = sample(CLOCK_TIME_ADDITION_PRESENTATIONS);
      return createTimeAdditionProblem({
        title: presentation.title,
        instruction: presentation.instruction,
        mode: 'clock',
        operation: '+',
        left: { hours: startHour, minutes: startMinute, seconds: startSecond },
        right: { hours: 0, minutes: addMinutes, seconds: addSeconds },
        result,
        editableParts: ['hours', 'minutes', 'seconds'],
      });
    }
  }
}

function createBarModelTimeAdditionProblem(step = 1): Problem {
  while (true) {
    const leftMinutes = step === 1 ? randomInt(1, 2) : step === 2 ? randomInt(2, 3) : randomInt(2, 4);
    const rightMinutes = step === 1 ? randomInt(1, 2) : step === 2 ? randomInt(1, 3) : randomInt(2, 4);
    const leftSeconds =
      step === 1
        ? sample([10, 20, 30])
        : step === 2
          ? sample([20, 30, 40])
          : sample([20, 30, 40, 50]);
    const rightSeconds =
      step === 1
        ? sample([10, 20, 30])
        : step === 2
          ? sample([20, 30, 40])
          : sample([10, 20, 30, 40]);
    const totalSeconds = leftMinutes * 60 + leftSeconds + rightMinutes * 60 + rightSeconds;
    const result = splitClockSeconds(totalSeconds);
    const hasSecondCarry = leftSeconds + rightSeconds >= 60;

    if ((step === 1 && hasSecondCarry) || (step >= 2 && !hasSecondCarry)) {
      continue;
    }

    const presentation = sample(BAR_TIME_ADDITION_PRESENTATIONS);
    return createTimeAdditionProblem({
      title: presentation.title,
      instruction: presentation.instruction,
      mode: 'bar',
      operation: '+',
      left: { hours: 0, minutes: leftMinutes, seconds: leftSeconds },
      right: { hours: 0, minutes: rightMinutes, seconds: rightSeconds },
      result,
      editableParts: ['minutes', 'seconds'],
    });
  }
}

function createVerticalTimeAdditionProblem(step = 1): Problem {
  while (true) {
    const left = {
      hours: randomInt(1, step >= 3 ? 5 : 4),
      minutes: randomInt(step === 1 ? 10 : 20, 55),
      seconds: randomInt(step === 1 ? 10 : 20, 55),
    };
    const right = {
      hours: randomInt(step === 1 ? 0 : 1, step >= 4 ? 3 : 2),
      minutes: randomInt(10, 50),
      seconds: randomInt(10, 50),
    };
    const result = splitClockSeconds(toTotalTimeSeconds(left) + toTotalTimeSeconds(right));
    const hasSecondCarry = left.seconds + right.seconds >= 60;
    const hasMinuteCarry = left.minutes + right.minutes + (hasSecondCarry ? 1 : 0) >= 60;

    if (result.hours > 12) {
      continue;
    }

    if (step === 1 && (hasSecondCarry || hasMinuteCarry)) {
      continue;
    }

    if (step === 2 && (!hasSecondCarry || hasMinuteCarry)) {
      continue;
    }

    if (step === 3 && (!hasSecondCarry || !hasMinuteCarry)) {
      continue;
    }

    if (step >= 4 && !hasMinuteCarry) {
      continue;
    }

    const presentation = sample(VERTICAL_TIME_ADDITION_PRESENTATIONS);
    return createTimeAdditionProblem({
      title: presentation.title,
      instruction: presentation.instruction,
      mode: 'vertical',
      operation: '+',
      left,
      right,
      result,
      editableParts: ['hours', 'minutes', 'seconds'],
    });
  }
}

const UNIT3_FIXED_TIME_PROBLEM_COUNT = 4;

function createClockTimeSubtractionProblem(step = 1): Problem {
  while (true) {
    const startHour = randomInt(2, 11);
    const startMinute =
      step === 1
        ? sample([20, 25, 30, 35, 40, 45, 50])
        : randomInt(10, 55);
    const startSecond =
      step === 1
        ? sample([20, 30, 40, 50])
        : sample([10, 20, 30, 40, 50]);
    const subtractMinutes =
      step === 1
        ? randomInt(1, 5)
        : randomInt(3, 10);
    const subtractSeconds =
      step === 1
        ? sample([10, 20])
        : sample([10, 20, 30, 40]);
    const hasSecondBorrow = startSecond < subtractSeconds;
    const hasMinuteBorrow = startMinute - (hasSecondBorrow ? 1 : 0) < subtractMinutes;

    if (step === 1 && (hasSecondBorrow || hasMinuteBorrow)) {
      continue;
    }

    const resultSeconds = startHour * 3600 + startMinute * 60 + startSecond - (subtractMinutes * 60 + subtractSeconds);
    const result = splitClockSeconds(resultSeconds);

    if (result.hours >= 1) {
      const presentation = sample(CLOCK_TIME_SUBTRACTION_PRESENTATIONS);
      return createTimeAdditionProblem({
        title: presentation.title,
        instruction: presentation.instruction,
        mode: 'clock',
        operation: '-',
        left: { hours: startHour, minutes: startMinute, seconds: startSecond },
        right: { hours: 0, minutes: subtractMinutes, seconds: subtractSeconds },
        result,
        editableParts: ['hours', 'minutes', 'seconds'],
      });
    }
  }
}

function createBarModelTimeSubtractionProblem(step = 1): Problem {
  while (true) {
    const leftMinutes = step === 1 ? randomInt(3, 5) : randomInt(4, 6);
    const rightMinutes = step === 1 ? randomInt(1, 2) : randomInt(2, 3);
    const leftSeconds =
      step === 1
        ? sample([20, 30, 40, 50])
        : sample([10, 20, 30, 40, 50]);
    const rightSeconds =
      step === 1
        ? sample([10, 20])
        : sample([10, 20, 30, 40]);
    const hasSecondBorrow = leftSeconds < rightSeconds;
    const hasMinuteBorrow = leftMinutes - (hasSecondBorrow ? 1 : 0) < rightMinutes;

    if (step === 1 && (hasSecondBorrow || hasMinuteBorrow)) {
      continue;
    }

    const resultSeconds = leftMinutes * 60 + leftSeconds - (rightMinutes * 60 + rightSeconds);
    const result = splitClockSeconds(resultSeconds);

    if (toTotalTimeSeconds(result) > 0) {
      const presentation = sample(BAR_TIME_SUBTRACTION_PRESENTATIONS);
      return createTimeAdditionProblem({
        title: presentation.title,
        instruction: presentation.instruction,
        mode: 'bar',
        operation: '-',
        left: { hours: 0, minutes: leftMinutes, seconds: leftSeconds },
        right: { hours: 0, minutes: rightMinutes, seconds: rightSeconds },
        result,
        editableParts: ['minutes', 'seconds'],
      });
    }
  }
}

function createVerticalTimeSubtractionProblem(step = 1): Problem {
  while (true) {
    const left = {
      hours: randomInt(2, step === 1 ? 4 : 5),
      minutes: randomInt(15, 55),
      seconds: randomInt(10, 55),
    };
    const right = {
      hours: randomInt(0, 2),
      minutes: randomInt(10, 50),
      seconds: randomInt(10, 50),
    };
    const leftTotalSeconds = toTotalTimeSeconds(left);
    const rightTotalSeconds = toTotalTimeSeconds(right);

    if (rightTotalSeconds >= leftTotalSeconds) {
      continue;
    }

    const result = splitClockSeconds(leftTotalSeconds - rightTotalSeconds);
    const hasSecondBorrow = left.seconds < right.seconds;
    const hasMinuteBorrow = left.minutes - (hasSecondBorrow ? 1 : 0) < right.minutes;
    const borrowCount = Number(hasSecondBorrow) + Number(hasMinuteBorrow);

    if (result.hours < 1) {
      continue;
    }

    if (step === 1 && borrowCount !== 0) {
      continue;
    }

    if (step >= 2 && borrowCount !== 1) {
      continue;
    }

    const presentation = sample(VERTICAL_TIME_SUBTRACTION_PRESENTATIONS);
    return createTimeAdditionProblem({
      title: presentation.title,
      instruction: presentation.instruction,
      mode: 'vertical',
      operation: '-',
      left,
      right,
      result,
      editableParts: ['hours', 'minutes', 'seconds'],
    });
  }
}

function createLevel10TimeAdditionProblem(problemSequence = 1, _opponentHP = 100): Problem {
  const resolvedSequence = Math.min(Math.max(problemSequence, 1), UNIT3_FIXED_TIME_PROBLEM_COUNT);

  if (resolvedSequence === 1) {
    return createClockTimeAdditionProblem(1);
  }

  if (resolvedSequence === 2) {
    return createBarModelTimeAdditionProblem(1);
  }

  if (resolvedSequence === 3) {
    return createVerticalTimeAdditionProblem(1);
  }

  return createVerticalTimeAdditionProblem(2);
}

function createLevel11TimeSubtractionProblem(problemSequence = 1, _opponentHP = 100): Problem {
  const resolvedSequence = Math.min(Math.max(problemSequence, 1), UNIT3_FIXED_TIME_PROBLEM_COUNT);

  if (resolvedSequence === 1) {
    return createClockTimeSubtractionProblem(1);
  }

  if (resolvedSequence === 2) {
    return createBarModelTimeSubtractionProblem(1);
  }

  if (resolvedSequence === 3) {
    return createVerticalTimeSubtractionProblem(1);
  }

  return createVerticalTimeSubtractionProblem(2);
}

type Level12TemplateId =
  | 'eventStartTime'
  | 'activityDuration'
  | 'tripArrivalTime'
  | 'dailyPracticeTotal'
  | 'activityStartTime'
  | 'elapsedTime'
  | 'remainingUntilEvent'
  | 'remainingAfterUse';

type Level12OperationGroup = 'addition' | 'subtraction';

const LEVEL12_ADDITION_TEMPLATE_IDS: Level12TemplateId[] = [
  'eventStartTime',
  'activityDuration',
  'tripArrivalTime',
  'dailyPracticeTotal',
];

const LEVEL12_SUBTRACTION_TEMPLATE_IDS: Level12TemplateId[] = [
  'activityStartTime',
  'elapsedTime',
  'remainingUntilEvent',
  'remainingAfterUse',
];

const LEVEL12_TEMPLATE_OPERATIONS: Record<Level12TemplateId, Level12OperationGroup> = {
  eventStartTime: 'addition',
  activityDuration: 'addition',
  tripArrivalTime: 'addition',
  dailyPracticeTotal: 'addition',
  activityStartTime: 'subtraction',
  elapsedTime: 'subtraction',
  remainingUntilEvent: 'subtraction',
  remainingAfterUse: 'subtraction',
};

const LEVEL12_DEFAULT_TEMPLATE_ORDER: Level12TemplateId[] = [
  'eventStartTime',
  'elapsedTime',
  'activityDuration',
  'activityStartTime',
];

const LEVEL12_OPERATION_PATTERNS: Level12OperationGroup[][] = [
  ['addition', 'subtraction', 'addition', 'subtraction'],
  ['addition', 'addition', 'subtraction', 'subtraction'],
  ['subtraction', 'addition', 'addition', 'subtraction'],
  ['subtraction', 'addition', 'subtraction', 'addition'],
  ['addition', 'subtraction', 'subtraction', 'addition'],
  ['subtraction', 'subtraction', 'addition', 'addition'],
];

function pickLevel12TemplateSubset(
  pool: Level12TemplateId[],
  blockedIds: Set<Level12TemplateId>,
  count: number,
) {
  const available = shuffleValues(pool.filter((id) => !blockedIds.has(id)));
  const fallback = shuffleValues(pool.filter((id) => blockedIds.has(id)));
  return [...available, ...fallback].slice(0, count);
}

function buildLevel12RoundTemplateOrder(previousOrder: Level12TemplateId[] = []) {
  const previousAdditionIds = new Set(previousOrder.filter((id) => LEVEL12_TEMPLATE_OPERATIONS[id] === 'addition'));
  const previousSubtractionIds = new Set(previousOrder.filter((id) => LEVEL12_TEMPLATE_OPERATIONS[id] === 'subtraction'));
  const additionTemplates = shuffleValues(pickLevel12TemplateSubset(LEVEL12_ADDITION_TEMPLATE_IDS, previousAdditionIds, 2));
  const subtractionTemplates = shuffleValues(
    pickLevel12TemplateSubset(LEVEL12_SUBTRACTION_TEMPLATE_IDS, previousSubtractionIds, 2),
  );
  const operationPattern = sample(LEVEL12_OPERATION_PATTERNS);
  let additionIndex = 0;
  let subtractionIndex = 0;

  return operationPattern.map((group) =>
    group === 'addition' ? additionTemplates[additionIndex++] : subtractionTemplates[subtractionIndex++],
  );
}

function createLevel12MovieStartTimeProblem(): Problem {
  const scenarios = [
    {
      title: '영화가 시작하는 시각을 구해 보세요.',
      instruction: '주어진 말을 읽고 영화가 시작하는 시각을 시와 분으로 써 보세요.',
      waitLabel: '영화 시작까지',
      line2: (waitText: string) => `영화는 ${waitText} 후에 시작합니다.`,
      question: '영화가 시작하는 시각은 언제인가요?',
    },
    {
      title: '인형극이 시작하는 시각을 구해 보세요.',
      instruction: '주어진 말을 읽고 인형극이 시작하는 시각을 시와 분으로 써 보세요.',
      waitLabel: '인형극 시작까지',
      line2: (waitText: string) => `인형극은 ${waitText} 후에 시작합니다.`,
      question: '인형극이 시작하는 시각은 언제인가요?',
    },
    {
      title: '마술 공연이 시작하는 시각을 구해 보세요.',
      instruction: '주어진 말을 읽고 마술 공연이 시작하는 시각을 시와 분으로 써 보세요.',
      waitLabel: '공연 시작까지',
      line2: (waitText: string) => `마술 공연은 ${waitText} 후에 시작합니다.`,
      question: '마술 공연이 시작하는 시각은 언제인가요?',
    },
    {
      title: '낭독회가 시작하는 시각을 구해 보세요.',
      instruction: '주어진 말을 읽고 낭독회가 시작하는 시각을 시와 분으로 써 보세요.',
      waitLabel: '낭독회 시작까지',
      line2: (waitText: string) => `낭독회는 ${waitText} 후에 시작합니다.`,
      question: '낭독회가 시작하는 시각은 언제인가요?',
    },
  ];
  const scenario = sample(scenarios);

  while (true) {
    const currentHour = randomInt(7, 11);
    const currentMinute = sample([25, 30, 35, 40, 45, 50, 55]);
    const waitMinutes = sample([10, 15, 20, 25, 30, 35]);
    const result = splitClockSeconds(currentHour * 3600 + currentMinute * 60 + waitMinutes * 60);

    if (result.hours > 12 || result.hours === currentHour) {
      continue;
    }

    return createStoryTimeAdditionProblem({
      title: scenario.title,
      instruction: scenario.instruction,
      operation: '+',
      left: { hours: currentHour, minutes: currentMinute, seconds: 0 },
      right: { hours: 0, minutes: waitMinutes, seconds: 0 },
      result,
      editableParts: ['hours', 'minutes'],
      storyHighlights: [
        { label: '지금 시각', value: formatClockTime(currentHour, currentMinute) },
        { label: scenario.waitLabel, value: formatDuration(0, waitMinutes) },
      ],
      storyLines: [
        `지금 시각은 ${formatClockTime(currentHour, currentMinute)}입니다.`,
        scenario.line2(formatDuration(0, waitMinutes)),
        scenario.question,
      ],
    });
  }
}

function createLevel12DrawingDurationProblem(): Problem {
  const scenarios = [
    {
      title: '그림을 완성하는 데 걸린 시간을 구해 보세요.',
      instruction: '두 활동에 걸린 시간을 합해서 전체 걸린 시간을 써 보세요.',
      leftLabel: '밑그림',
      rightLabel: '색칠',
      storyLines: (leftText: string, rightText: string) => [
        `지민이는 ${leftText} 동안 밑그림을 그리고,`,
        `${rightText} 동안 색칠하여 그림을 완성했습니다.`,
        '그림을 완성하는 데 걸린 시간은 모두 얼마인가요?',
      ],
    },
    {
      title: '과학 관찰 기록을 마치는 데 걸린 시간을 구해 보세요.',
      instruction: '두 활동에 걸린 시간을 합해서 전체 걸린 시간을 써 보세요.',
      leftLabel: '관찰',
      rightLabel: '기록 정리',
      storyLines: (leftText: string, rightText: string) => [
        `도윤이는 ${leftText} 동안 식물을 관찰하고,`,
        `${rightText} 동안 관찰 기록을 정리했습니다.`,
        '관찰 기록을 마치는 데 걸린 시간은 모두 얼마인가요?',
      ],
    },
    {
      title: '모형을 만드는 데 걸린 시간을 구해 보세요.',
      instruction: '두 활동에 걸린 시간을 합해서 전체 걸린 시간을 써 보세요.',
      leftLabel: '부품 고르기',
      rightLabel: '조립하기',
      storyLines: (leftText: string, rightText: string) => [
        `서준이는 ${leftText} 동안 부품을 고르고,`,
        `${rightText} 동안 모형을 조립했습니다.`,
        '모형을 만드는 데 걸린 시간은 모두 얼마인가요?',
      ],
    },
    {
      title: '독서 활동에 걸린 시간을 구해 보세요.',
      instruction: '두 활동에 걸린 시간을 합해서 전체 걸린 시간을 써 보세요.',
      leftLabel: '책 읽기',
      rightLabel: '독서록 쓰기',
      storyLines: (leftText: string, rightText: string) => [
        `하린이는 ${leftText} 동안 책을 읽고,`,
        `${rightText} 동안 독서록을 썼습니다.`,
        '독서 활동에 걸린 시간은 모두 얼마인가요?',
      ],
    },
  ];
  const scenario = sample(scenarios);

  while (true) {
    const sketchMinutes = randomInt(6, 16);
    const sketchSeconds = sample([10, 20, 30, 40, 50]);
    const colorMinutes = randomInt(22, 38);
    const colorSeconds = sample([15, 25, 35, 45, 50]);
    const result = splitClockSeconds(sketchMinutes * 60 + sketchSeconds + colorMinutes * 60 + colorSeconds);

    if (result.hours > 0 || sketchSeconds + colorSeconds < 60) {
      continue;
    }

    const sketchText = formatDuration(0, sketchMinutes, sketchSeconds);
    const colorText = formatDuration(0, colorMinutes, colorSeconds);

    return createStoryTimeAdditionProblem({
      title: scenario.title,
      instruction: scenario.instruction,
      operation: '+',
      left: { hours: 0, minutes: sketchMinutes, seconds: sketchSeconds },
      right: { hours: 0, minutes: colorMinutes, seconds: colorSeconds },
      result,
      editableParts: ['minutes', 'seconds'],
      storyHighlights: [
        { label: scenario.leftLabel, value: sketchText },
        { label: scenario.rightLabel, value: colorText },
      ],
      storyLines: scenario.storyLines(sketchText, colorText),
    });
  }
}

function createLevel12TripArrivalTimeProblem(): Problem {
  const scenarios = [
    {
      title: '도착 시각을 구해 보세요.',
      instruction: '출발 시각과 걸린 시간을 보고 도착 시각을 구해 보세요.',
      startLabel: '출발 시각',
      durationLabel: '이동 시간',
      storyLines: (startText: string, durationText: string) => [
        `민서는 ${startText}에 체험학습 버스를 탔습니다.`,
        `버스를 타고 ${durationText} 동안 이동했습니다.`,
        '도착한 시각은 언제인가요?',
      ],
    },
    {
      title: '수영장에 도착한 시각을 구해 보세요.',
      instruction: '출발 시각과 걸린 시간을 보고 도착 시각을 구해 보세요.',
      startLabel: '출발 시각',
      durationLabel: '걸린 시간',
      storyLines: (startText: string, durationText: string) => [
        `유나는 ${startText}에 집에서 출발했습니다.`,
        `${durationText} 동안 이동하여 수영장에 도착했습니다.`,
        '수영장에 도착한 시각은 언제인가요?',
      ],
    },
    {
      title: '도서관에 도착한 시각을 구해 보세요.',
      instruction: '출발 시각과 걸린 시간을 보고 도착 시각을 구해 보세요.',
      startLabel: '출발 시각',
      durationLabel: '이동 시간',
      storyLines: (startText: string, durationText: string) => [
        `지후는 ${startText}에 학교를 출발했습니다.`,
        `도서관까지 가는 데 ${durationText}이 걸렸습니다.`,
        '도서관에 도착한 시각은 언제인가요?',
      ],
    },
    {
      title: '체육관에 도착한 시각을 구해 보세요.',
      instruction: '출발 시각과 걸린 시간을 보고 도착 시각을 구해 보세요.',
      startLabel: '출발 시각',
      durationLabel: '이동 시간',
      storyLines: (startText: string, durationText: string) => [
        `서아는 ${startText}에 학원 차를 탔습니다.`,
        `체육관까지 ${durationText} 동안 이동했습니다.`,
        '체육관에 도착한 시각은 언제인가요?',
      ],
    },
  ];
  const scenario = sample(scenarios);

  while (true) {
    const start = {
      hours: randomInt(1, 9),
      minutes: randomInt(15, 50),
      seconds: sample([10, 20, 30, 40, 50]),
    };
    const duration = {
      hours: sample([0, 1]),
      minutes: randomInt(15, 42),
      seconds: sample([15, 25, 35, 45]),
    };
    const result = splitClockSeconds(toTotalTimeSeconds(start) + toTotalTimeSeconds(duration));
    const hasSecondCarry = start.seconds + duration.seconds >= 60;
    const hasMinuteCarry = start.minutes + duration.minutes + (hasSecondCarry ? 1 : 0) >= 60;

    if (result.hours > 12 || (!hasSecondCarry && !hasMinuteCarry)) {
      continue;
    }

    const startText = formatClockTime(start.hours, start.minutes, start.seconds);
    const durationText = formatDuration(duration.hours, duration.minutes, duration.seconds);

    return createStoryTimeAdditionProblem({
      title: scenario.title,
      instruction: scenario.instruction,
      operation: '+',
      left: start,
      right: duration,
      result,
      editableParts: ['hours', 'minutes', 'seconds'],
      storyHighlights: [
        { label: scenario.startLabel, value: startText },
        { label: scenario.durationLabel, value: durationText },
      ],
      storyLines: scenario.storyLines(startText, durationText),
    });
  }
}

function createLevel12DailyPracticeTotalProblem(): Problem {
  const scenarios = [
    {
      title: '하루 동안 연습한 시간을 구해 보세요.',
      instruction: '두 번의 연습 시간을 합해서 하루 동안 연습한 시간을 써 보세요.',
      leftLabel: '오전 연습',
      rightLabel: '오후 연습',
      storyLines: (leftText: string, rightText: string) => [
        `유나는 오전에 ${leftText} 동안 피아노를 연습하고,`,
        `오후에 ${rightText} 동안 발표 연습을 했습니다.`,
        '하루 동안 연습한 시간은 모두 얼마인가요?',
      ],
    },
    {
      title: '하루 동안 공부한 시간을 구해 보세요.',
      instruction: '두 번의 공부 시간을 합해서 하루 동안 공부한 시간을 써 보세요.',
      leftLabel: '오전 공부',
      rightLabel: '오후 공부',
      storyLines: (leftText: string, rightText: string) => [
        `도윤이는 오전에 ${leftText} 동안 책을 읽고,`,
        `오후에 ${rightText} 동안 문제를 풀었습니다.`,
        '하루 동안 공부한 시간은 모두 얼마인가요?',
      ],
    },
    {
      title: '하루 동안 활동한 시간을 구해 보세요.',
      instruction: '두 번의 활동 시간을 합해서 하루 동안 활동한 시간을 써 보세요.',
      leftLabel: '첫 번째 활동',
      rightLabel: '두 번째 활동',
      storyLines: (leftText: string, rightText: string) => [
        `하람이는 오전에 ${leftText} 동안 로봇을 만들고,`,
        `오후에 ${rightText} 동안 작품을 꾸몄습니다.`,
        '하루 동안 활동한 시간은 모두 얼마인가요?',
      ],
    },
    {
      title: '하루 동안 준비한 시간을 구해 보세요.',
      instruction: '두 번의 준비 시간을 합해서 하루 동안 준비한 시간을 써 보세요.',
      leftLabel: '1차 준비',
      rightLabel: '2차 준비',
      storyLines: (leftText: string, rightText: string) => [
        `세아는 오전에 ${leftText} 동안 발표 자료를 만들고,`,
        `오후에 ${rightText} 동안 발표를 연습했습니다.`,
        '하루 동안 준비한 시간은 모두 얼마인가요?',
      ],
    },
  ];
  const scenario = sample(scenarios);

  while (true) {
    const left = {
      hours: 0,
      minutes: randomInt(26, 38),
      seconds: sample([10, 20, 30, 40, 50]),
    };
    const right = {
      hours: 0,
      minutes: randomInt(24, 36),
      seconds: sample([15, 25, 35, 45, 50]),
    };
    const result = splitClockSeconds(toTotalTimeSeconds(left) + toTotalTimeSeconds(right));
    const hasSecondCarry = left.seconds + right.seconds >= 60;
    const hasMinuteCarry = left.minutes + right.minutes + (hasSecondCarry ? 1 : 0) >= 60;

    if (result.hours !== 1 || (!hasSecondCarry && !hasMinuteCarry)) {
      continue;
    }

    const leftText = formatDuration(left.hours, left.minutes, left.seconds);
    const rightText = formatDuration(right.hours, right.minutes, right.seconds);

    return createStoryTimeAdditionProblem({
      title: scenario.title,
      instruction: scenario.instruction,
      operation: '+',
      left,
      right,
      result,
      editableParts: ['hours', 'minutes', 'seconds'],
      storyHighlights: [
        { label: scenario.leftLabel, value: leftText },
        { label: scenario.rightLabel, value: rightText },
      ],
      storyLines: scenario.storyLines(leftText, rightText),
    });
  }
}

function createLevel12ElapsedTimeProblem(): Problem {
  const scenarios = [
    {
      title: '활동한 시간을 구해 보세요.',
      instruction: '시작 시각과 끝난 시각을 보고 걸린 시간을 구해 보세요.',
      startLabel: '시작 시각',
      endLabel: '끝난 시각',
      storyLines: (startText: string, endText: string) => [
        `하린이는 ${startText}에 독서 활동을 시작했습니다.`,
        `${endText}에 활동을 마쳤습니다.`,
        '독서 활동에 걸린 시간은 모두 얼마인가요?',
      ],
    },
    {
      title: '연습한 시간을 구해 보세요.',
      instruction: '시작 시각과 끝난 시각을 보고 걸린 시간을 구해 보세요.',
      startLabel: '시작 시각',
      endLabel: '끝난 시각',
      storyLines: (startText: string, endText: string) => [
        `지후는 ${startText}에 리코더 연습을 시작했습니다.`,
        `${endText}에 연습을 마쳤습니다.`,
        '리코더 연습에 걸린 시간은 모두 얼마인가요?',
      ],
    },
    {
      title: '관찰한 시간을 구해 보세요.',
      instruction: '시작 시각과 끝난 시각을 보고 걸린 시간을 구해 보세요.',
      startLabel: '시작 시각',
      endLabel: '끝난 시각',
      storyLines: (startText: string, endText: string) => [
        `도윤이는 ${startText}부터 곤충을 관찰했습니다.`,
        `${endText}에 관찰을 마쳤습니다.`,
        '곤충을 관찰한 시간은 모두 얼마인가요?',
      ],
    },
    {
      title: '운동한 시간을 구해 보세요.',
      instruction: '시작 시각과 끝난 시각을 보고 걸린 시간을 구해 보세요.',
      startLabel: '시작 시각',
      endLabel: '끝난 시각',
      storyLines: (startText: string, endText: string) => [
        `서준이는 ${startText}에 줄넘기를 시작했습니다.`,
        `${endText}에 운동을 마쳤습니다.`,
        '줄넘기한 시간은 모두 얼마인가요?',
      ],
    },
  ];
  const scenario = sample(scenarios);

  while (true) {
    const start = {
      hours: randomInt(1, 9),
      minutes: randomInt(5, 50),
      seconds: sample([10, 20, 30, 40, 50]),
    };
    const duration = {
      hours: sample([0, 1]),
      minutes: randomInt(18, 42),
      seconds: sample([10, 20, 30, 40, 45]),
    };
    const end = splitClockSeconds(toTotalTimeSeconds(start) + toTotalTimeSeconds(duration));
    const hasSecondBorrow = end.seconds < start.seconds;
    const hasMinuteBorrow = end.minutes - (hasSecondBorrow ? 1 : 0) < start.minutes;
    const editableParts: ClockInputPart[] =
      duration.hours > 0 ? ['hours', 'minutes', 'seconds'] : ['minutes', 'seconds'];

    if (end.hours > 12 || (!hasSecondBorrow && !hasMinuteBorrow)) {
      continue;
    }

    const startText = formatClockTime(start.hours, start.minutes, start.seconds);
    const endText = formatClockTime(end.hours, end.minutes, end.seconds);

    return createStoryTimeAdditionProblem({
      title: scenario.title,
      instruction: scenario.instruction,
      operation: '-',
      left: end,
      right: start,
      result: duration,
      editableParts,
      storyHighlights: [
        { label: scenario.startLabel, value: startText },
        { label: scenario.endLabel, value: endText },
      ],
      storyLines: scenario.storyLines(startText, endText),
    });
  }
}

function createLevel12StartTimeProblem(): Problem {
  const scenarios = [
    {
      title: '산책을 시작한 시각을 구해 보세요.',
      instruction: '걸린 시간과 도착한 시각을 보고 시작한 시각을 구해 보세요.',
      durationLabel: '산책 시간',
      arrivalLabel: '도착 시각',
      storyLines: (durationText: string, arrivalText: string) => [
        `재민이는 가족들과 ${durationText} 동안 산책을 했습니다.`,
        `산책을 하고 집에 돌아온 시각은 ${arrivalText}입니다.`,
        '재민이가 산책을 시작한 시각은 언제인가요?',
      ],
    },
    {
      title: '수영 연습을 시작한 시각을 구해 보세요.',
      instruction: '걸린 시간과 끝난 시각을 보고 시작한 시각을 구해 보세요.',
      durationLabel: '연습 시간',
      arrivalLabel: '끝난 시각',
      storyLines: (durationText: string, arrivalText: string) => [
        `민서는 ${durationText} 동안 수영 연습을 했습니다.`,
        `연습이 끝난 시각은 ${arrivalText}입니다.`,
        '민서가 수영 연습을 시작한 시각은 언제인가요?',
      ],
    },
    {
      title: '체험관 관람을 시작한 시각을 구해 보세요.',
      instruction: '걸린 시간과 끝난 시각을 보고 시작한 시각을 구해 보세요.',
      durationLabel: '관람 시간',
      arrivalLabel: '끝난 시각',
      storyLines: (durationText: string, arrivalText: string) => [
        `도윤이는 ${durationText} 동안 체험관을 둘러보았습니다.`,
        `관람을 마친 시각은 ${arrivalText}입니다.`,
        '도윤이가 체험관 관람을 시작한 시각은 언제인가요?',
      ],
    },
    {
      title: '자전거 타기를 시작한 시각을 구해 보세요.',
      instruction: '걸린 시간과 돌아온 시각을 보고 시작한 시각을 구해 보세요.',
      durationLabel: '탄 시간',
      arrivalLabel: '돌아온 시각',
      storyLines: (durationText: string, arrivalText: string) => [
        `서윤이는 ${durationText} 동안 자전거를 탔습니다.`,
        `집에 돌아온 시각은 ${arrivalText}입니다.`,
        '서윤이가 자전거 타기를 시작한 시각은 언제인가요?',
      ],
    },
  ];
  const scenario = sample(scenarios);

  while (true) {
    const start = {
      hours: randomInt(2, 9),
      minutes: randomInt(5, 50),
      seconds: randomInt(10, 50),
    };
    const duration = {
      hours: sample([0, 1]),
      minutes: randomInt(18, 45),
      seconds: randomInt(10, 45),
    };
    const arrival = splitClockSeconds(toTotalTimeSeconds(start) + toTotalTimeSeconds(duration));
    const hasSecondBorrow = arrival.seconds < duration.seconds;
    const hasMinuteBorrow = arrival.minutes - (hasSecondBorrow ? 1 : 0) < duration.minutes;

    if (arrival.hours > 12 || (!hasSecondBorrow && !hasMinuteBorrow)) {
      continue;
    }

    const durationText = formatDuration(duration.hours, duration.minutes, duration.seconds);
    const arrivalText = formatClockTime(arrival.hours, arrival.minutes, arrival.seconds);

    return createStoryTimeAdditionProblem({
      title: scenario.title,
      instruction: scenario.instruction,
      operation: '-',
      left: arrival,
      right: duration,
      result: start,
      editableParts: ['hours', 'minutes', 'seconds'],
      storyHighlights: [
        { label: scenario.durationLabel, value: durationText },
        { label: scenario.arrivalLabel, value: arrivalText },
      ],
      storyLines: scenario.storyLines(durationText, arrivalText),
    });
  }
}

function createLevel12RemainingUntilEventProblem(): Problem {
  const scenarios = [
    {
      title: '남은 시간을 구해 보세요.',
      instruction: '현재 시각과 예정된 시각을 보고 남은 시간을 구해 보세요.',
      currentLabel: '현재 시각',
      scheduledLabel: '예정된 시각',
      storyLines: (currentText: string, scheduledText: string) => [
        `지금 시각은 ${currentText}입니다.`,
        `도서관 수업은 ${scheduledText}에 시작합니다.`,
        '수업이 시작할 때까지 남은 시간은 얼마인가요?',
      ],
    },
    {
      title: '공연까지 남은 시간을 구해 보세요.',
      instruction: '현재 시각과 예정된 시각을 보고 남은 시간을 구해 보세요.',
      currentLabel: '현재 시각',
      scheduledLabel: '공연 시작 시각',
      storyLines: (currentText: string, scheduledText: string) => [
        `지금 시각은 ${currentText}입니다.`,
        `공연은 ${scheduledText}에 시작합니다.`,
        '공연이 시작할 때까지 남은 시간은 얼마인가요?',
      ],
    },
    {
      title: '버스 출발까지 남은 시간을 구해 보세요.',
      instruction: '현재 시각과 예정된 시각을 보고 남은 시간을 구해 보세요.',
      currentLabel: '현재 시각',
      scheduledLabel: '출발 시각',
      storyLines: (currentText: string, scheduledText: string) => [
        `지금 시각은 ${currentText}입니다.`,
        `체험학습 버스는 ${scheduledText}에 출발합니다.`,
        '버스가 출발할 때까지 남은 시간은 얼마인가요?',
      ],
    },
    {
      title: '수업 시작까지 남은 시간을 구해 보세요.',
      instruction: '현재 시각과 예정된 시각을 보고 남은 시간을 구해 보세요.',
      currentLabel: '현재 시각',
      scheduledLabel: '수업 시작 시각',
      storyLines: (currentText: string, scheduledText: string) => [
        `지금 시각은 ${currentText}입니다.`,
        `체육 수업은 ${scheduledText}에 시작합니다.`,
        '체육 수업이 시작할 때까지 남은 시간은 얼마인가요?',
      ],
    },
  ];
  const scenario = sample(scenarios);

  while (true) {
    const current = {
      hours: randomInt(7, 10),
      minutes: sample([25, 30, 35, 40, 45, 50, 55]),
      seconds: 0,
    };
    const remaining = {
      hours: sample([0, 0, 1]),
      minutes: sample([10, 15, 20, 25, 30, 35, 40]),
      seconds: 0,
    };
    const scheduled = splitClockSeconds(toTotalTimeSeconds(current) + toTotalTimeSeconds(remaining));
    const editableParts: ClockInputPart[] = remaining.hours > 0 ? ['hours', 'minutes'] : ['minutes'];

    if (scheduled.hours > 12 || scheduled.hours === current.hours) {
      continue;
    }

    const currentText = formatClockTime(current.hours, current.minutes);
    const scheduledText = formatClockTime(scheduled.hours, scheduled.minutes);

    return createStoryTimeAdditionProblem({
      title: scenario.title,
      instruction: scenario.instruction,
      operation: '-',
      left: scheduled,
      right: current,
      result: remaining,
      editableParts,
      storyHighlights: [
        { label: scenario.currentLabel, value: currentText },
        { label: scenario.scheduledLabel, value: scheduledText },
      ],
      storyLines: scenario.storyLines(currentText, scheduledText),
    });
  }
}

function createLevel12RemainingAfterUseProblem(): Problem {
  const scenarios = [
    {
      title: '남은 연습 시간을 구해 보세요.',
      instruction: '전체 시간과 사용한 시간을 보고 남은 시간을 구해 보세요.',
      totalLabel: '전체 연습 시간',
      usedLabel: '사용한 시간',
      storyLines: (totalText: string, usedText: string) => [
        `서윤이는 오늘 ${totalText} 동안 연습하기로 했습니다.`,
        `그중 ${usedText} 동안 이미 연습했습니다.`,
        '남은 연습 시간은 얼마인가요?',
      ],
    },
    {
      title: '남은 준비 시간을 구해 보세요.',
      instruction: '전체 시간과 사용한 시간을 보고 남은 시간을 구해 보세요.',
      totalLabel: '전체 준비 시간',
      usedLabel: '사용한 시간',
      storyLines: (totalText: string, usedText: string) => [
        `민서는 발표 준비를 ${totalText} 동안 하기로 했습니다.`,
        `그중 ${usedText} 동안 자료를 만들었습니다.`,
        '남은 준비 시간은 얼마인가요?',
      ],
    },
    {
      title: '남은 놀이 시간을 구해 보세요.',
      instruction: '전체 시간과 사용한 시간을 보고 남은 시간을 구해 보세요.',
      totalLabel: '전체 놀이 시간',
      usedLabel: '사용한 시간',
      storyLines: (totalText: string, usedText: string) => [
        `지후는 놀이터에서 ${totalText} 동안 놀기로 했습니다.`,
        `그중 ${usedText} 동안 미끄럼틀을 탔습니다.`,
        '남은 놀이 시간은 얼마인가요?',
      ],
    },
    {
      title: '남은 읽기 시간을 구해 보세요.',
      instruction: '전체 시간과 사용한 시간을 보고 남은 시간을 구해 보세요.',
      totalLabel: '전체 읽기 시간',
      usedLabel: '사용한 시간',
      storyLines: (totalText: string, usedText: string) => [
        `하린이는 책을 ${totalText} 동안 읽기로 했습니다.`,
        `그중 ${usedText} 동안 이미 책을 읽었습니다.`,
        '남은 읽기 시간은 얼마인가요?',
      ],
    },
  ];
  const scenario = sample(scenarios);

  while (true) {
    const total = {
      hours: 1,
      minutes: randomInt(10, 28),
      seconds: sample([10, 20, 30, 40, 50]),
    };
    const used = {
      hours: 0,
      minutes: randomInt(25, 48),
      seconds: sample([15, 25, 35, 45]),
    };
    const remainingSeconds = toTotalTimeSeconds(total) - toTotalTimeSeconds(used);

    if (remainingSeconds <= 0) {
      continue;
    }

    const remaining = splitClockSeconds(remainingSeconds);
    const hasSecondBorrow = total.seconds < used.seconds;
    const hasMinuteBorrow = total.minutes - (hasSecondBorrow ? 1 : 0) < used.minutes;
    const editableParts: ClockInputPart[] =
      remaining.hours > 0 ? ['hours', 'minutes', 'seconds'] : ['minutes', 'seconds'];

    if (!hasSecondBorrow && !hasMinuteBorrow) {
      continue;
    }

    const totalText = formatDuration(total.hours, total.minutes, total.seconds);
    const usedText = formatDuration(used.hours, used.minutes, used.seconds);

    return createStoryTimeAdditionProblem({
      title: scenario.title,
      instruction: scenario.instruction,
      operation: '-',
      left: total,
      right: used,
      result: remaining,
      editableParts,
      storyHighlights: [
        { label: scenario.totalLabel, value: totalText },
        { label: scenario.usedLabel, value: usedText },
      ],
      storyLines: scenario.storyLines(totalText, usedText),
    });
  }
}

function createLevel12ProblemFromTemplate(templateId: Level12TemplateId): Problem {
  if (templateId === 'eventStartTime') {
    return createLevel12MovieStartTimeProblem();
  }

  if (templateId === 'activityDuration') {
    return createLevel12DrawingDurationProblem();
  }

  if (templateId === 'tripArrivalTime') {
    return createLevel12TripArrivalTimeProblem();
  }

  if (templateId === 'dailyPracticeTotal') {
    return createLevel12DailyPracticeTotalProblem();
  }

  if (templateId === 'activityStartTime') {
    return createLevel12StartTimeProblem();
  }

  if (templateId === 'elapsedTime') {
    return createLevel12ElapsedTimeProblem();
  }

  if (templateId === 'remainingUntilEvent') {
    return createLevel12RemainingUntilEventProblem();
  }

  return createLevel12RemainingAfterUseProblem();
}

function createLevel12TimeMixedProblem(
  problemSequence = 1,
  _opponentHP = 100,
  templateOrder: Level12TemplateId[] = LEVEL12_DEFAULT_TEMPLATE_ORDER,
): Problem {
  const resolvedSequence = Math.min(Math.max(problemSequence, 1), UNIT3_FIXED_TIME_PROBLEM_COUNT);
  const templateId = templateOrder[resolvedSequence - 1] ?? LEVEL12_DEFAULT_TEMPLATE_ORDER[resolvedSequence - 1];
  return createLevel12ProblemFromTemplate(templateId);
}

function isUnit3FixedTimeSequenceLevel(unitId: LearningUnitId, level: number) {
  return unitId === 'unit3' && (level === 10 || level === 11 || level === 12);
}

function getUnit3FixedTimeOpponentHPAfterCorrect(problemSequence: number) {
  const resolvedSequence = Math.min(Math.max(problemSequence, 1), UNIT3_FIXED_TIME_PROBLEM_COUNT);
  return Math.max(0, 100 - resolvedSequence * (100 / UNIT3_FIXED_TIME_PROBLEM_COUNT));
}

function createMillimeterNeedIntroProblem(): Problem {
  const options = ['m', 'mm', 'km'];
  const situations = [
    '사과씨의 길이를 자로 재었더니 1cm보다 짧았습니다.\n그런데 0cm라고 하기는 어렵고, 1cm라고 하기도 어렵습니다.',
    '쌀알의 길이를 자로 재었더니 1cm보다 짧았습니다.\ncm로만 나타내면 얼마나 되는지 딱 맞게 말하기 어렵습니다.',
    '단추 한 개의 두께를 재었더니 1cm보다 짧았습니다.\n0cm라고 하면 너무 작고, 1cm라고 하면 너무 크게 나타납니다.',
    '짧게 자른 종이띠의 길이를 재었더니 1cm보다 짧았습니다.\ncm만으로는 길이를 자세히 나타내기 어렵습니다.',
    '손톱의 두께를 재어 보니 1cm보다 짧았습니다.\ncm로만 나타내면 얼마나 되는지 정확히 말하기 어렵습니다.',
    '도화지에 그은 작은 선의 길이를 재었더니 1cm보다 짧았습니다.\ncm로만 쓰면 실제 길이와 비슷하게 나타내기 어렵습니다.',
    '작은 스티커 한 조각의 길이를 재었더니 1cm보다 짧았습니다.\ncm보다 더 잘게 나타낼 단위가 필요합니다.',
    '연필심 굵기를 자로 재어 보니 1cm보다 훨씬 짧았습니다.\ncm만으로는 길이를 바르게 말하기 어렵습니다.',
  ];
  const questions = [
    '더 [[정확하게]] 나타내기 위해 필요한 단위는 무엇일까요?',
    '이 길이를 [[딱 맞게]] 나타내려면 어떤 단위가 필요할까요?',
    'cm보다 더 잘게 나타내려면 어떤 단위를 써야 할까요?',
  ];
  return createShuffledOptionsProblem(`${sample(situations)}\n${sample(questions)}`, options, 'mm');
}

function createMillimeterNeedChoiceProblem(): Problem {
  const options = ['[[정확하게]]', '[[편하게]]'];
  const questions = [
    'mm는 cm보다 길이를 더 어떻게 나타내기 위해 필요한 단위일까요?',
    '1cm보다 짧은 길이를 나타낼 때 mm는 어떤 점에서 더 좋을까요?',
    'mm를 사용하면 cm보다 길이를 어떻게 나타낼 수 있을까요?',
    '아주 짧은 길이를 말할 때 mm가 필요한 까닭은 무엇일까요?',
  ];
  return createShuffledOptionsProblem(sample(questions), options, '[[정확하게]]');
}

function createKilometerNeedIntroProblem(): Problem {
  const options = ['cm', 'km', 'mm'];
  const situations = [
    '서울에서 부산까지의 거리를 m로 나타내면 아주 큰 수가 됩니다.',
    '서울에서 대구까지의 거리를 m로 나타내면 아주 큰 수가 됩니다.',
    '학교에서 수련원까지 버스로 가는 거리를 m로 나타내면 수가 너무 커집니다.',
    '우리 집에서 할머니 댁까지 차로 가는 먼 거리를 m로 나타내면 아주 큰 수가 됩니다.',
    '도시와 도시 사이의 거리를 m로 나타내면 숫자가 너무 길어집니다.',
    '고속도로를 따라 멀리 이동한 거리를 m로 나타내면 숫자가 너무 커집니다.',
    '기차를 타고 다른 도시까지 가는 거리를 m로만 쓰면 읽기 불편합니다.',
    '멀리 떨어진 놀이공원까지의 거리를 m로 나타내면 수가 너무 길어집니다.',
  ];
  const questions = [
    '더 [[편하게]] 나타내기 위해 필요한 단위는 무엇일까요?',
    '이처럼 먼 거리를 나타낼 때 쓰기 좋은 단위는 무엇일까요?',
    '숫자가 너무 길어지지 않게 하려면 어떤 단위를 써야 할까요?',
  ];
  return createShuffledOptionsProblem(`${sample(situations)}\n${sample(questions)}`, options, 'km');
}

function createKilometerNeedChoiceProblem(): Problem {
  const options = ['[[정확하게]]', '[[편하게]]'];
  const questions = [
    'km는 m보다 먼 거리를 더 어떻게 나타내기 위해 필요한 단위일까요?',
    '아주 먼 거리를 말할 때 km를 쓰는 까닭은 무엇일까요?',
    'km를 사용하면 먼 거리를 m보다 어떻게 나타낼 수 있을까요?',
    '먼 거리를 나타낼 때 km가 좋은 점은 무엇일까요?',
  ];
  return createShuffledOptionsProblem(sample(questions), options, '[[편하게]]');
}

function createSecondNeedIntroProblem(): Problem {
  const options = ['시간', '초', '분'];
  const situations = [
    '눈을 한 번 깜빡이는 데 걸리는 시간은 1분보다 훨씬 짧았습니다.\n분으로만 나타내면 얼마나 걸렸는지 자세히 말하기 어렵습니다.',
    '박수 한 번 치는 데 걸리는 시간은 아주 짧았습니다.\n분으로만 나타내면 걸린 시간을 정확하게 말하기 어렵습니다.',
    '엘리베이터 문이 닫히는 데 걸린 시간은 1분보다 훨씬 짧았습니다.\n짧은 시간을 분으로만 나타내면 불편합니다.',
    '공을 한 번 던지고 받는 데 걸리는 시간은 매우 짧았습니다.\n분으로만 나타내면 얼마나 걸렸는지 알기 어렵습니다.',
    '출발 신호를 듣고 한 걸음 떼는 데 걸리는 시간은 아주 짧았습니다.\n이처럼 짧은 시간은 분보다 더 작은 단위가 필요합니다.',
    '촛불을 후 하고 끄는 데 걸리는 시간은 매우 짧았습니다.\n분으로만 쓰면 실제 느낌과 다르게 나타납니다.',
    '문자를 한 번 눌러 보내는 데 걸리는 시간은 아주 짧았습니다.\n이런 시간은 분보다 더 작은 단위가 필요합니다.',
    '리모컨 버튼을 한 번 누르는 데 걸리는 시간은 거의 잠깐입니다.\n분으로는 자세히 나타내기 어렵습니다.',
  ];
  const questions = [
    '더 [[정확하게]] 나타내기 위해 필요한 단위는 무엇일까요?',
    '이처럼 짧은 시간을 나타내려면 어떤 단위가 필요할까요?',
    '분보다 더 작은 단위로 나타내려면 무엇을 써야 할까요?',
  ];
  return createShuffledOptionsProblem(`${sample(situations)}\n${sample(questions)}`, options, '초');
}

function createSecondNeedChoiceProblem(): Problem {
  const options = ['[[정확하게]]', '[[편하게]]'];
  const questions = [
    '초는 분보다 짧은 시간을 더 어떻게 나타내기 위해 필요한 단위일까요?',
    '아주 짧은 시간을 나타낼 때 초를 쓰는 까닭은 무엇일까요?',
    '초를 사용하면 짧은 시간을 분보다 어떻게 나타낼 수 있을까요?',
    '짧은 시간을 말할 때 초가 필요한 이유는 무엇일까요?',
  ];
  return createShuffledOptionsProblem(sample(questions), options, '[[정확하게]]');
}

function createEquationProblem(a: number, b: number, op: '+' | '-', answer: number): Problem {
  const text = `${a} ${op} ${b}`;
  return { text, prompt: text, answer, kind: 'equation' };
}

function createStoryProblem(level: number, a: number, b: number, op: '+' | '-', answer: number): Problem {
  const text = `${a} ${op} ${b}`;
  const prompt = sample(STORY_TEMPLATE_POOLS[level]?.[op] ?? STORY_TEMPLATE_POOLS[9][op])(a, b);
  return { text, prompt, answer, kind: 'story' };
}

function createPromptProblem(
  prompt: string,
  answer: number,
  answerUnit?: string,
  options?: {
    storyTable?: StoryPromptTableData;
  },
): Problem {
  return {
    text: '',
    prompt,
    answer,
    kind: 'story',
    answerUnit,
    storyTable: options?.storyTable,
  };
}

function createMeasurementProblem({
  title,
  question,
  objectKind,
  objectLabel,
  startMm,
  lengthMm,
}: {
  title: string;
  question: string;
  objectKind: MeasurementObjectKind;
  objectLabel: string;
  startMm: number;
  lengthMm: number;
}): Problem {
  return {
    text: '',
    prompt: question,
    answer: lengthMm,
    kind: 'measurement',
    answerUnit: 'mm',
    measurement: {
      title,
      question,
      objectKind,
      objectLabel,
      startMm,
      lengthMm,
      rulerCm: Math.max(5, Math.ceil((startMm + lengthMm + 8) / 10)),
    },
  };
}

function createDistanceMapProblem(distanceMap: DistanceMapProblemData): Problem {
  return {
    text: '',
    prompt: `${distanceMap.question}\n${distanceMap.sentence}`,
    answer: distanceMap.estimatedKilometers,
    kind: 'distanceMap',
    distanceMap,
  };
}

function createDistanceWorksheetProblem(distanceWorksheet: DistanceWorksheetProblemData): Problem {
  return {
    text: '',
    prompt: `${distanceWorksheet.instruction}\n${distanceWorksheet.prompt.prefix}□${distanceWorksheet.prompt.suffix}`,
    answer: 0,
    answerUnit: distanceWorksheet.prompt.answerUnit,
    requiresUnitSelection: Boolean(distanceWorksheet.prompt.answerUnit),
    kind: 'distanceWorksheet',
    distanceWorksheet,
  };
}

function normalizeAnswerUnit(unit: string) {
  return unit.trim().replace(/\s+/g, '').toLowerCase();
}

function normalizeSecretCode(value: string) {
  return value.replace(/\s+/g, '');
}

function requiresSecretCodeForLevelTransition(unitId: LearningUnitId, currentLevel: number, nextLevel: number) {
  return (
    unitId === UNIT3_SECRET_CODE_GATE.unitId &&
    currentLevel === UNIT3_SECRET_CODE_GATE.fromLevel &&
    nextLevel === UNIT3_SECRET_CODE_GATE.nextLevel
  );
}

function normalizeDistanceWorksheetAnswer(value: string, kind: DistanceWorksheetInputKind) {
  const trimmed = value.trim();
  return kind === 'number' ? trimmed.replace(/\D/g, '') : trimmed.replace(/\s+/g, '');
}

function getAnswerUnitOptions(expectedUnit: string) {
  const normalizedUnit = normalizeAnswerUnit(expectedUnit);

  if (['mm', 'cm', 'm', 'km'].includes(normalizedUnit)) {
    return ['mm', 'cm', 'm', 'km'];
  }

  if (['초', '분', '시간'].includes(expectedUnit.trim())) {
    return ['초', '분', '시간'];
  }

  return [expectedUnit];
}

const UNIT_SELECTION_CHALLENGE_POOLS: Partial<Record<number, UnitSelectionChallenge[]>> = {
  2: [
    {
      badge: '길이 단위 선택',
      prompt: '가위의 긴 쪽 길이는 약 15 □입니다.',
      options: ['mm', 'cm', 'km'],
      answer: 'cm',
    },
    {
      badge: '길이 단위 선택',
      prompt: '지우개 한 개의 길이는 약 45 □입니다.',
      options: ['mm', 'm', 'km'],
      answer: 'mm',
    },
    {
      badge: '길이 단위 선택',
      prompt: '책 한 권의 두께는 약 12 □입니다.',
      options: ['mm', 'm', 'km'],
      answer: 'mm',
    },
    {
      badge: '길이 단위 선택',
      prompt: '색연필 한 자루의 길이는 약 18 □입니다.',
      options: ['mm', 'cm', 'km'],
      answer: 'cm',
    },
    {
      badge: '길이 단위 선택',
      prompt: '단추 한 개의 두께는 약 3 □입니다.',
      options: ['mm', 'cm', 'm'],
      answer: 'mm',
    },
    {
      badge: '길이 단위 선택',
      prompt: '공책의 가로 길이는 약 21 □입니다.',
      options: ['mm', 'cm', 'km'],
      answer: 'cm',
    },
    {
      badge: '길이 단위 선택',
      prompt: '손톱의 두께는 약 1 □입니다.',
      options: ['mm', 'cm', 'm'],
      answer: 'mm',
    },
    {
      badge: '길이 단위 선택',
      prompt: '빨대의 길이는 약 20 □입니다.',
      options: ['mm', 'cm', 'km'],
      answer: 'cm',
    },
  ],
  4: [
    {
      badge: '길이 판단하기',
      prompt: '단위를 잘못 사용한 문장은 어느 것일까요?',
      options: [
        '필통의 길이는 약 20cm입니다.',
        '버스의 길이는 약 10m입니다.',
        '학교 복도의 길이는 약 70km입니다.',
      ],
      answer: '학교 복도의 길이는 약 70km입니다.',
    },
    {
      badge: '길이 판단하기',
      prompt: '알맞지 않은 문장을 골라 보세요.',
      options: [
        '수학책의 두께는 약 9mm입니다.',
        '엄지손톱의 너비는 약 2km입니다.',
        '교실 문의 높이는 약 2m입니다.',
      ],
      answer: '엄지손톱의 너비는 약 2km입니다.',
    },
    {
      badge: '길이 판단하기',
      prompt: '단위를 바르게 쓴 문장은 어느 것일까요?',
      options: [
        '나무젓가락 한 개의 길이는 약 20km입니다.',
        '도로의 길이는 약 3mm입니다.',
        '연필 한 자루의 길이는 약 18cm입니다.',
      ],
      answer: '연필 한 자루의 길이는 약 18cm입니다.',
    },
    {
      badge: '길이 판단하기',
      prompt: '단위를 바르게 쓴 문장은 어느 것일까요?',
      options: [
        '고속도로의 길이는 약 7cm입니다.',
        '책상 높이는 약 70cm입니다.',
        '연필심의 굵기는 약 2m입니다.',
      ],
      answer: '책상 높이는 약 70cm입니다.',
    },
    {
      badge: '길이 판단하기',
      prompt: '알맞지 않은 문장을 골라 보세요.',
      options: [
        '교실 칠판의 가로 길이는 약 3m입니다.',
        '운동화 끈의 길이는 약 1m입니다.',
        '개미의 길이는 약 8km입니다.',
      ],
      answer: '개미의 길이는 약 8km입니다.',
    },
    {
      badge: '길이 판단하기',
      prompt: '단위를 바르게 쓴 문장은 어느 것일까요?',
      options: [
        '복사 종이 한 장의 두께는 약 1m입니다.',
        '손가락 한 마디의 길이는 약 4cm입니다.',
        '학교 운동장의 둘레는 약 400mm입니다.',
      ],
      answer: '손가락 한 마디의 길이는 약 4cm입니다.',
    },
  ],
  7: [
    {
      badge: '거리 단위 선택',
      prompt: '집에서 학교까지의 거리를 알맞게 나타낸 것은 어느 것일까요?',
      options: ['1mm 200cm', '1km 200m', '1m 200mm'],
      answer: '1km 200m',
    },
    {
      badge: '거리 단위 선택',
      prompt: '서울에서 대구까지의 거리는 약 237 □입니다.',
      options: ['mm', 'm', 'km'],
      answer: 'km',
    },
    {
      badge: '거리 단위 선택',
      prompt: '학교에서 가까운 편의점까지의 거리는 약 400 □입니다.',
      options: ['mm', 'm', 'km'],
      answer: 'm',
    },
    {
      badge: '거리 단위 선택',
      prompt: '부산에서 대구까지의 거리는 약 90 □입니다.',
      options: ['cm', 'm', 'km'],
      answer: 'km',
    },
    {
      badge: '거리 단위 선택',
      prompt: '학교 현관에서 교실까지의 거리는 약 80 □입니다.',
      options: ['mm', 'm', 'km'],
      answer: 'm',
    },
    {
      badge: '거리 단위 선택',
      prompt: '놀이터까지의 거리를 알맞게 나타낸 것은 어느 것일까요?',
      options: ['850m', '850km', '850mm'],
      answer: '850m',
    },
    {
      badge: '거리 단위 선택',
      prompt: '집에서 할머니 댁까지 차로 가는 거리를 알맞게 나타낸 것은 어느 것일까요?',
      options: ['2km 300m', '2m 300mm', '2mm 300cm'],
      answer: '2km 300m',
    },
  ],
  8: [
    {
      badge: '시간 단위 선택',
      prompt: '박수 한 번 치는 데 걸리는 시간은 약 1 □입니다.',
      options: ['초', '분', '시간'],
      answer: '초',
    },
    {
      badge: '시간 단위 선택',
      prompt: '양치하는 데 걸리는 시간은 약 3 □입니다.',
      options: ['초', '분', '시간'],
      answer: '분',
    },
    {
      badge: '시간 단위 선택',
      prompt: '잠자는 시간은 보통 8 □입니다.',
      options: ['초', '분', '시간'],
      answer: '시간',
    },
    {
      badge: '시간 단위 선택',
      prompt: '100m를 달리는 데 걸리는 시간은 약 20 □입니다.',
      options: ['초', '분', '시간'],
      answer: '초',
    },
    {
      badge: '시간 단위 선택',
      prompt: '점심을 먹는 데 걸리는 시간은 약 30 □입니다.',
      options: ['초', '분', '시간'],
      answer: '분',
    },
    {
      badge: '시간 단위 선택',
      prompt: '하루 동안 학교에 머무는 시간은 약 6 □입니다.',
      options: ['초', '분', '시간'],
      answer: '시간',
    },
    {
      badge: '시간 단위 선택',
      prompt: '눈을 한 번 깜빡이는 데 걸리는 시간은 약 1 □입니다.',
      options: ['초', '분', '시간'],
      answer: '초',
    },
  ],
  10: [
    {
      badge: '시간 판단하기',
      prompt: '단위를 잘못 사용한 문장은 어느 것일까요?',
      options: [
        '손을 한 번 드는 데 1초쯤 걸립니다.',
        '수업 한 시간은 약 40분입니다.',
        '박수 한 번 치는 데 1분이 걸렸습니다.',
      ],
      answer: '박수 한 번 치는 데 1분이 걸렸습니다.',
    },
    {
      badge: '시간 판단하기',
      prompt: '알맞지 않은 문장을 골라 보세요.',
      options: [
        '눈을 한 번 깜빡이는 데 걸리는 시간은 약 1초입니다.',
        '영화 한 편을 보는 데 걸리는 시간은 약 2시간입니다.',
        '줄넘기 50개를 하는 데 2시간이 걸립니다.',
      ],
      answer: '줄넘기 50개를 하는 데 2시간이 걸립니다.',
    },
    {
      badge: '시간 판단하기',
      prompt: '알맞은 문장을 골라 보세요.',
      options: [
        '낮잠을 1초 잤습니다.',
        '동화책 한 쪽을 읽는 데 30초쯤 걸립니다.',
        '급식 먹는 데 20시간이 걸립니다.',
      ],
      answer: '동화책 한 쪽을 읽는 데 30초쯤 걸립니다.',
    },
    {
      badge: '시간 판단하기',
      prompt: '단위를 바르게 쓴 문장은 어느 것일까요?',
      options: [
        '엘리베이터 문이 닫히는 데 10시간이 걸립니다.',
        '교실을 청소하는 데 15분쯤 걸립니다.',
        '지우개를 한 번 집는 데 3분이 걸립니다.',
      ],
      answer: '교실을 청소하는 데 15분쯤 걸립니다.',
    },
    {
      badge: '시간 판단하기',
      prompt: '알맞지 않은 문장을 골라 보세요.',
      options: [
        '손뼉을 세 번 치는 데 5초쯤 걸립니다.',
        '운동장을 한 바퀴 걷는 데 10분쯤 걸립니다.',
        '하품 한 번 하는 데 1시간이 걸립니다.',
      ],
      answer: '하품 한 번 하는 데 1시간이 걸립니다.',
    },
    {
      badge: '시간 판단하기',
      prompt: '알맞은 문장을 골라 보세요.',
      options: [
        '샤워를 하는 데 15초쯤 걸립니다.',
        '학급 회의를 하는 데 20분쯤 걸립니다.',
        '버스를 기다리는 데 3시간쯤 걸립니다.',
      ],
      answer: '학급 회의를 하는 데 20분쯤 걸립니다.',
    },
  ],
  11: [
    {
      badge: '시간 단위 선택',
      prompt: '멀리 있는 놀이공원까지 차를 타고 가는 시간은 약 1 □ 30 □입니다.',
      options: ['시간, 분', '분, 초', '초, 시간'],
      answer: '시간, 분',
    },
    {
      badge: '시간 단위 선택',
      prompt: '어제 본 만화영화는 90 □ 동안 했어요.',
      options: ['초', '분', '시간'],
      answer: '분',
    },
    {
      badge: '시간 단위 선택',
      prompt: '점심시간은 보통 50 □입니다.',
      options: ['초', '분', '시간'],
      answer: '분',
    },
    {
      badge: '시간 단위 선택',
      prompt: '줄넘기 100개를 하는 데 걸리는 시간은 약 1 □ 20 □입니다.',
      options: ['시간, 분', '분, 초', '초, 시간'],
      answer: '분, 초',
    },
    {
      badge: '시간 단위 선택',
      prompt: '친척 집까지 버스를 타고 가는 시간은 약 2 □ 10 □입니다.',
      options: ['시간, 분', '분, 초', '초, 시간'],
      answer: '시간, 분',
    },
    {
      badge: '시간 단위 선택',
      prompt: '학교 조회 시간은 보통 15 □입니다.',
      options: ['초', '분', '시간'],
      answer: '분',
    },
    {
      badge: '시간 단위 선택',
      prompt: '애니메이션 한 편은 보통 30 □ 동안 합니다.',
      options: ['초', '분', '시간'],
      answer: '분',
    },
  ],
};

// Use more concrete everyday objects here so the picture supports real-world length sense.
const SMALL_MEASUREMENT_FACTORY_CONFIGS: MeasurementFactoryConfig[] = [
  {
    title: '그림을 보고 작은 눈금을 세어 보세요.',
    question: '사과씨의 길이는 몇 mm인가요?',
    objectKind: 'seed',
    objectLabel: '사과씨',
    minLengthMm: 5,
    maxLengthMm: 7,
    shiftedStartMinMm: 1,
    shiftedStartMaxMm: 4,
  },
  {
    title: '그림을 보고 작은 눈금을 세어 보세요.',
    question: '쌀알의 길이는 몇 mm인가요?',
    objectKind: 'rice',
    objectLabel: '쌀알',
    minLengthMm: 5,
    maxLengthMm: 8,
    shiftedStartMinMm: 1,
    shiftedStartMaxMm: 5,
  },
  {
    title: '그림을 보고 작은 눈금을 세어 보세요.',
    question: '짧게 자른 종이띠의 길이는 몇 mm인가요?',
    objectKind: 'paperStrip',
    objectLabel: '짧은 종이띠',
    minLengthMm: 6,
    maxLengthMm: 9,
    shiftedStartMinMm: 1,
    shiftedStartMaxMm: 3,
  },
  {
    title: '그림을 보고 작은 눈금을 세어 보세요.',
    question: '작은 초콜릿 조각의 길이는 몇 mm인가요?',
    objectKind: 'chocolate',
    objectLabel: '작은 초콜릿 조각',
    minLengthMm: 7,
    maxLengthMm: 10,
    shiftedStartMinMm: 1,
    shiftedStartMaxMm: 3,
  },
];

const LARGE_MEASUREMENT_FACTORY_CONFIGS: MeasurementFactoryConfig[] = [
  {
    title: '그림을 보고 길이를 재어 보세요.',
    question: '지우개의 길이는 몇 mm인가요?',
    objectKind: 'eraser',
    objectLabel: '지우개',
    minLengthMm: 35,
    maxLengthMm: 48,
    shiftedStartMinMm: 1,
    shiftedStartMaxMm: 4,
  },
  {
    title: '그림을 보고 길이를 재어 보세요.',
    question: '클립의 길이는 몇 mm인가요?',
    objectKind: 'paperClip',
    objectLabel: '클립',
    minLengthMm: 28,
    maxLengthMm: 33,
    shiftedStartMinMm: 1,
    shiftedStartMaxMm: 5,
  },
  {
    title: '그림을 보고 길이를 재어 보세요.',
    question: '초콜릿 한 칸의 길이는 몇 mm인가요?',
    objectKind: 'chocolate',
    objectLabel: '초콜릿 한 칸',
    minLengthMm: 30,
    maxLengthMm: 38,
    shiftedStartMinMm: 1,
    shiftedStartMaxMm: 4,
  },
  {
    title: '그림을 보고 길이를 재어 보세요.',
    question: '이쑤시개의 길이는 몇 mm인가요?',
    objectKind: 'toothpick',
    objectLabel: '이쑤시개',
    minLengthMm: 62,
    maxLengthMm: 65,
    shiftedStartMinMm: 1,
    shiftedStartMaxMm: 5,
  },
  {
    title: '그림을 보고 길이를 재어 보세요.',
    question: '연필의 길이는 몇 mm인가요?',
    objectKind: 'pencil',
    objectLabel: '연필',
    minLengthMm: 82,
    maxLengthMm: 96,
    shiftedStartMinMm: 1,
    shiftedStartMaxMm: 5,
  },
  {
    title: '그림을 보고 길이를 재어 보세요.',
    question: '색연필의 길이는 몇 mm인가요?',
    objectKind: 'crayon',
    objectLabel: '색연필',
    minLengthMm: 84,
    maxLengthMm: 90,
    shiftedStartMinMm: 1,
    shiftedStartMaxMm: 5,
  },
  {
    title: '그림을 보고 길이를 재어 보세요.',
    question: '분필의 길이는 몇 mm인가요?',
    objectKind: 'chalk',
    objectLabel: '분필',
    minLengthMm: 82,
    maxLengthMm: 85,
    shiftedStartMinMm: 1,
    shiftedStartMaxMm: 4,
  },
];

const DISTANCE_MAP_REFERENCE_METERS = 500;
const DISTANCE_MAP_HOME_POINT: DistanceMapPoint = { x: 296, y: 84 };
const DISTANCE_MAP_BUS_STOP_POINT: DistanceMapPoint = { x: 430, y: 126 };
const DISTANCE_MAP_LIBRARY_POINT: DistanceMapPoint = { x: 176, y: 154 };
const DISTANCE_MAP_POLICE_POINT: DistanceMapPoint = { x: 150, y: 320 };
const DISTANCE_MAP_STADIUM_POINT: DistanceMapPoint = { x: 360, y: 340 };
const DISTANCE_MAP_SCIENCE_POINT: DistanceMapPoint = { x: 530, y: 268 };
const DISTANCE_MAP_PARK_POINT: DistanceMapPoint = { x: 532, y: 112 };

const DISTANCE_MAP_LANDMARKS: DistanceMapLandmarkData[] = [
  { id: 'home', label: '집', x: DISTANCE_MAP_HOME_POINT.x, y: DISTANCE_MAP_HOME_POINT.y, accent: '#f59e0b', kind: 'home' },
  { id: 'bus-stop', label: '버스정류장', x: DISTANCE_MAP_BUS_STOP_POINT.x, y: DISTANCE_MAP_BUS_STOP_POINT.y, accent: '#38bdf8', kind: 'reference' },
  { id: 'library', label: '도서관', x: DISTANCE_MAP_LIBRARY_POINT.x, y: DISTANCE_MAP_LIBRARY_POINT.y, accent: '#34d399', kind: 'place' },
  { id: 'police', label: '경찰서', x: DISTANCE_MAP_POLICE_POINT.x, y: DISTANCE_MAP_POLICE_POINT.y, accent: '#fb923c', kind: 'place' },
  { id: 'stadium', label: '축구장', x: DISTANCE_MAP_STADIUM_POINT.x, y: DISTANCE_MAP_STADIUM_POINT.y, accent: '#8b5cf6', kind: 'place' },
  { id: 'science', label: '과학관', x: DISTANCE_MAP_SCIENCE_POINT.x, y: DISTANCE_MAP_SCIENCE_POINT.y, accent: '#ec4899', kind: 'place' },
  { id: 'park', label: '공원', x: DISTANCE_MAP_PARK_POINT.x, y: DISTANCE_MAP_PARK_POINT.y, accent: '#22c55e', kind: 'place' },
];

const DISTANCE_MAP_REFERENCE_ROUTE: DistanceMapPoint[] = [
  DISTANCE_MAP_HOME_POINT,
  { x: 356, y: 104 },
  DISTANCE_MAP_BUS_STOP_POINT,
];

interface DistanceCompareScenarioConfig {
  strategy: 'compare';
  targetLabel: string;
  targetMeters: number;
  targetRoute: DistanceMapPoint[];
}

interface DistanceChunkScenarioConfig {
  strategy: 'chunk';
  targetLabel: string;
  targetMeters: number;
  segments: DistanceChunkSegmentData[];
}

interface DistanceUnitizeScenarioConfig {
  strategy: 'unitize';
  targetLabel: string;
  targetMeters: number;
  targetRoute: DistanceMapPoint[];
}

type DistanceScenarioConfig =
  | DistanceCompareScenarioConfig
  | DistanceChunkScenarioConfig
  | DistanceUnitizeScenarioConfig;

function joinDistanceSegments(segments: DistanceChunkSegmentData[]) {
  return segments.reduce<DistanceMapPoint[]>((acc, segment, index) => {
    if (index === 0) {
      return [...segment.points];
    }

    return [...acc, ...segment.points.slice(1)];
  }, []);
}

function createDistanceMapScenario(config: DistanceScenarioConfig): Problem {
  const estimatedKilometers = Math.round(config.targetMeters / 1000);
  const base = {
    title: '거리 어림',
    question: '그림을 보고 거리를 어림해 보세요.',
    sentence: `집에서 ${config.targetLabel}까지의 거리는 약 □ km입니다.`,
    referenceMeters: DISTANCE_MAP_REFERENCE_METERS,
    targetLabel: config.targetLabel,
    targetMeters: config.targetMeters,
    estimatedKilometers,
    strategy: config.strategy,
    landmarks: DISTANCE_MAP_LANDMARKS,
  } as const;

  if (config.strategy === 'compare') {
    return createDistanceMapProblem({
      ...base,
      strategy: 'compare',
      referenceRoute: DISTANCE_MAP_REFERENCE_ROUTE,
      targetRoute: config.targetRoute,
      compareSlotCount: Math.min(5, Math.max(3, Math.round(config.targetMeters / DISTANCE_MAP_REFERENCE_METERS) + 1)),
    });
  }

  if (config.strategy === 'chunk') {
    return createDistanceMapProblem({
      ...base,
      strategy: 'chunk',
      targetRoute: joinDistanceSegments(config.segments),
      segments: config.segments,
    });
  }

  return createDistanceMapProblem({
    ...base,
    strategy: 'unitize',
    referenceRoute: DISTANCE_MAP_REFERENCE_ROUTE,
    targetRoute: config.targetRoute,
  });
}

const DISTANCE_COMPARE_SCENARIOS: DistanceCompareScenarioConfig[] = [
  {
    strategy: 'compare',
    targetLabel: '도서관',
    targetMeters: 1000,
    targetRoute: [
      DISTANCE_MAP_HOME_POINT,
      { x: 240, y: 116 },
      DISTANCE_MAP_LIBRARY_POINT,
    ],
  },
  {
    strategy: 'compare',
    targetLabel: '공원',
    targetMeters: 2000,
    targetRoute: [
      DISTANCE_MAP_HOME_POINT,
      { x: 362, y: 96 },
      { x: 446, y: 102 },
      DISTANCE_MAP_PARK_POINT,
    ],
  },
  {
    strategy: 'compare',
    targetLabel: '경찰서',
    targetMeters: 1500,
    targetRoute: [
      DISTANCE_MAP_HOME_POINT,
      { x: 238, y: 124 },
      { x: 194, y: 208 },
      DISTANCE_MAP_POLICE_POINT,
    ],
  },
  {
    strategy: 'compare',
    targetLabel: '축구장',
    targetMeters: 2500,
    targetRoute: [
      DISTANCE_MAP_HOME_POINT,
      { x: 352, y: 118 },
      { x: 388, y: 196 },
      { x: 382, y: 276 },
      DISTANCE_MAP_STADIUM_POINT,
    ],
  },
];

const DISTANCE_CHUNK_SCENARIOS: DistanceChunkScenarioConfig[] = [
  {
    strategy: 'chunk',
    targetLabel: '경찰서',
    targetMeters: 2000,
    segments: [
      { id: 'police-1', color: '#fb923c', points: [DISTANCE_MAP_HOME_POINT, { x: 276, y: 150 }], units: 2 },
      { id: 'police-2', color: '#f59e0b', points: [{ x: 276, y: 150 }, { x: 218, y: 242 }], units: 1 },
      { id: 'police-3', color: '#facc15', points: [{ x: 218, y: 242 }, DISTANCE_MAP_POLICE_POINT], units: 1 },
    ],
  },
  {
    strategy: 'chunk',
    targetLabel: '과학관',
    targetMeters: 2000,
    segments: [
      { id: 'science-1', color: '#38bdf8', points: [DISTANCE_MAP_HOME_POINT, { x: 360, y: 110 }, { x: 442, y: 152 }], units: 2 },
      { id: 'science-2', color: '#818cf8', points: [{ x: 442, y: 152 }, { x: 500, y: 208 }], units: 1 },
      { id: 'science-3', color: '#f472b6', points: [{ x: 500, y: 208 }, { x: 528, y: 238 }, DISTANCE_MAP_SCIENCE_POINT], units: 1 },
    ],
  },
  {
    strategy: 'chunk',
    targetLabel: '공원',
    targetMeters: 2500,
    segments: [
      { id: 'park-1', color: '#38bdf8', points: [DISTANCE_MAP_HOME_POINT, { x: 344, y: 102 }, { x: 414, y: 104 }], units: 2 },
      { id: 'park-2', color: '#60a5fa', points: [{ x: 414, y: 104 }, { x: 476, y: 108 }], units: 1 },
      { id: 'park-3', color: '#22c55e', points: [{ x: 476, y: 108 }, DISTANCE_MAP_PARK_POINT], units: 2 },
    ],
  },
  {
    strategy: 'chunk',
    targetLabel: '도서관',
    targetMeters: 1500,
    segments: [
      { id: 'library-1', color: '#f59e0b', points: [DISTANCE_MAP_HOME_POINT, { x: 252, y: 110 }], units: 1 },
      { id: 'library-2', color: '#fbbf24', points: [{ x: 252, y: 110 }, { x: 208, y: 128 }], units: 1 },
      { id: 'library-3', color: '#34d399', points: [{ x: 208, y: 128 }, DISTANCE_MAP_LIBRARY_POINT], units: 1 },
    ],
  },
];

const DISTANCE_UNITIZE_SCENARIOS: DistanceUnitizeScenarioConfig[] = [
  {
    strategy: 'unitize',
    targetLabel: '축구장',
    targetMeters: 2000,
    targetRoute: [
      DISTANCE_MAP_HOME_POINT,
      { x: 346, y: 140 },
      { x: 392, y: 222 },
      { x: 366, y: 292 },
      DISTANCE_MAP_STADIUM_POINT,
    ],
  },
  {
    strategy: 'unitize',
    targetLabel: '과학관',
    targetMeters: 2000,
    targetRoute: [
      DISTANCE_MAP_HOME_POINT,
      { x: 360, y: 110 },
      { x: 442, y: 152 },
      { x: 500, y: 208 },
      DISTANCE_MAP_SCIENCE_POINT,
    ],
  },
  {
    strategy: 'unitize',
    targetLabel: '경찰서',
    targetMeters: 1500,
    targetRoute: [
      DISTANCE_MAP_HOME_POINT,
      { x: 256, y: 122 },
      { x: 214, y: 214 },
      DISTANCE_MAP_POLICE_POINT,
    ],
  },
  {
    strategy: 'unitize',
    targetLabel: '공원',
    targetMeters: 2500,
    targetRoute: [
      DISTANCE_MAP_HOME_POINT,
      { x: 340, y: 102 },
      { x: 410, y: 102 },
      { x: 470, y: 106 },
      { x: 508, y: 110 },
      DISTANCE_MAP_PARK_POINT,
    ],
  },
];

const DISTANCE_STAGE7_SCENARIOS: DistanceScenarioConfig[] = [
  ...DISTANCE_COMPARE_SCENARIOS,
  ...DISTANCE_CHUNK_SCENARIOS,
  ...DISTANCE_UNITIZE_SCENARIOS,
];

const DISTANCE_WORKSHEET_TITLE = '거리 어림';
const DISTANCE_WORKSHEET_INSTRUCTION = '그림을 보고 두 장소 사이의 거리를 어림하여 문장을 완성해 보세요.';

const DISTANCE_WORKSHEET_PROBLEM_SETS: DistanceWorksheetProblemSetData[] = [
  {
    title: DISTANCE_WORKSHEET_TITLE,
    instruction: DISTANCE_WORKSHEET_INSTRUCTION,
    mapVariant: 'meadow',
    dotCount: 7,
    reference: { fromDotIndex: 2, toDotIndex: 3, label: '약 1 km' },
    landmarks: [
      { id: 'bookstore-a', label: '서점', dotIndex: 0, row: 'top', accent: '#60a5fa', icon: 'bookstore' },
      { id: 'station-a', label: '기차역', dotIndex: 1, row: 'bottom', accent: '#38bdf8', icon: 'station' },
      { id: 'market-a', label: '시장', dotIndex: 2, row: 'top', accent: '#7dd3fc', icon: 'market' },
      { id: 'fountain-a', label: '분수대', dotIndex: 3, row: 'top', accent: '#60a5fa', icon: 'fountain' },
      { id: 'park-a', label: '공원', dotIndex: 4, row: 'top', accent: '#86efac', icon: 'park' },
      { id: 'bank-a', label: '은행', dotIndex: 5, row: 'top', accent: '#93c5fd', icon: 'bank' },
      { id: 'school-a', label: '학교', dotIndex: 6, row: 'top', accent: '#bfdbfe', icon: 'school' },
    ],
    prompts: [
      { id: 'a-distance-1', prefix: '분수대에서 은행까지의 거리는 약 ', suffix: '입니다.', answer: '2', kind: 'number', answerUnit: 'km' },
      { id: 'a-distance-2', prefix: '서점에서 공원까지의 거리는 약 ', suffix: '입니다.', answer: '4', kind: 'number', answerUnit: 'km' },
      { id: 'a-distance-3', prefix: '기차역에서 학교까지의 거리는 약 ', suffix: '입니다.', answer: '5', kind: 'number', answerUnit: 'km' },
      { id: 'a-distance-4', prefix: '시장에서 학교까지의 거리는 약 ', suffix: '입니다.', answer: '4', kind: 'number', answerUnit: 'km' },
      { id: 'a-distance-5', prefix: '서점에서 시장까지의 거리는 약 ', suffix: '입니다.', answer: '2', kind: 'number', answerUnit: 'km' },
    ],
  },
  {
    title: DISTANCE_WORKSHEET_TITLE,
    instruction: DISTANCE_WORKSHEET_INSTRUCTION,
    mapVariant: 'town',
    dotCount: 7,
    reference: { fromDotIndex: 1, toDotIndex: 2, label: '약 1 km' },
    landmarks: [
      { id: 'library-b', label: '도서관', dotIndex: 0, row: 'top', accent: '#60a5fa', icon: 'library' },
      { id: 'station-b', label: '버스터미널', dotIndex: 1, row: 'bottom', accent: '#38bdf8', icon: 'station' },
      { id: 'hospital-b', label: '병원', dotIndex: 2, row: 'top', accent: '#fda4af', icon: 'hospital' },
      { id: 'park-b', label: '공원', dotIndex: 3, row: 'top', accent: '#86efac', icon: 'park' },
      { id: 'market-b', label: '마트', dotIndex: 4, row: 'top', accent: '#7dd3fc', icon: 'market' },
      { id: 'bank-b', label: '은행', dotIndex: 5, row: 'top', accent: '#93c5fd', icon: 'bank' },
      { id: 'school-b', label: '학교', dotIndex: 6, row: 'top', accent: '#bfdbfe', icon: 'school' },
    ],
    prompts: [
      { id: 'b-distance-1', prefix: '병원에서 은행까지의 거리는 약 ', suffix: '입니다.', answer: '3', kind: 'number', answerUnit: 'km' },
      { id: 'b-distance-2', prefix: '도서관에서 병원까지의 거리는 약 ', suffix: '입니다.', answer: '2', kind: 'number', answerUnit: 'km' },
      { id: 'b-distance-3', prefix: '버스터미널에서 마트까지의 거리는 약 ', suffix: '입니다.', answer: '3', kind: 'number', answerUnit: 'km' },
      { id: 'b-distance-4', prefix: '공원에서 학교까지의 거리는 약 ', suffix: '입니다.', answer: '3', kind: 'number', answerUnit: 'km' },
      { id: 'b-distance-5', prefix: '마트에서 학교까지의 거리는 약 ', suffix: '입니다.', answer: '2', kind: 'number', answerUnit: 'km' },
    ],
  },
  {
    title: DISTANCE_WORKSHEET_TITLE,
    instruction: DISTANCE_WORKSHEET_INSTRUCTION,
    mapVariant: 'river',
    dotCount: 8,
    reference: { fromDotIndex: 4, toDotIndex: 5, label: '약 1 km' },
    landmarks: [
      { id: 'park-c', label: '공원', dotIndex: 0, row: 'top', accent: '#86efac', icon: 'park' },
      { id: 'market-c', label: '시장', dotIndex: 1, row: 'top', accent: '#7dd3fc', icon: 'market' },
      { id: 'station-c', label: '버스터미널', dotIndex: 2, row: 'bottom', accent: '#38bdf8', icon: 'station' },
      { id: 'library-c', label: '도서관', dotIndex: 3, row: 'top', accent: '#60a5fa', icon: 'library' },
      { id: 'fountain-c', label: '분수대', dotIndex: 4, row: 'top', accent: '#93c5fd', icon: 'fountain' },
      { id: 'hospital-c', label: '병원', dotIndex: 5, row: 'bottom', accent: '#fda4af', icon: 'hospital' },
      { id: 'bank-c', label: '은행', dotIndex: 6, row: 'top', accent: '#fde68a', icon: 'bank' },
      { id: 'school-c', label: '학교', dotIndex: 7, row: 'top', accent: '#bfdbfe', icon: 'school' },
    ],
    prompts: [
      { id: 'c-distance-1', prefix: '도서관에서 학교까지의 거리는 약 ', suffix: '입니다.', answer: '4', kind: 'number', answerUnit: 'km' },
      { id: 'c-distance-2', prefix: '공원에서 도서관까지의 거리는 약 ', suffix: '입니다.', answer: '3', kind: 'number', answerUnit: 'km' },
      { id: 'c-distance-3', prefix: '시장에서 병원까지의 거리는 약 ', suffix: '입니다.', answer: '4', kind: 'number', answerUnit: 'km' },
      { id: 'c-distance-4', prefix: '버스터미널에서 학교까지의 거리는 약 ', suffix: '입니다.', answer: '5', kind: 'number', answerUnit: 'km' },
      { id: 'c-distance-5', prefix: '분수대에서 학교까지의 거리는 약 ', suffix: '입니다.', answer: '3', kind: 'number', answerUnit: 'km' },
    ],
  },
  {
    title: DISTANCE_WORKSHEET_TITLE,
    instruction: DISTANCE_WORKSHEET_INSTRUCTION,
    mapVariant: 'campus',
    dotCount: 6,
    reference: { fromDotIndex: 0, toDotIndex: 1, label: '약 1 km' },
    landmarks: [
      { id: 'bookstore-d', label: '서점', dotIndex: 0, row: 'top', accent: '#60a5fa', icon: 'bookstore' },
      { id: 'park-d', label: '공원', dotIndex: 1, row: 'bottom', accent: '#86efac', icon: 'park' },
      { id: 'bank-d', label: '은행', dotIndex: 2, row: 'top', accent: '#fde68a', icon: 'bank' },
      { id: 'hospital-d', label: '병원', dotIndex: 3, row: 'top', accent: '#fda4af', icon: 'hospital' },
      { id: 'fountain-d', label: '분수대', dotIndex: 4, row: 'bottom', accent: '#93c5fd', icon: 'fountain' },
      { id: 'school-d', label: '학교', dotIndex: 5, row: 'top', accent: '#bfdbfe', icon: 'school' },
    ],
    prompts: [
      { id: 'd-distance-1', prefix: '은행에서 학교까지의 거리는 약 ', suffix: '입니다.', answer: '3', kind: 'number', answerUnit: 'km' },
      { id: 'd-distance-2', prefix: '서점에서 은행까지의 거리는 약 ', suffix: '입니다.', answer: '2', kind: 'number', answerUnit: 'km' },
      { id: 'd-distance-3', prefix: '공원에서 병원까지의 거리는 약 ', suffix: '입니다.', answer: '2', kind: 'number', answerUnit: 'km' },
      { id: 'd-distance-4', prefix: '병원에서 학교까지의 거리는 약 ', suffix: '입니다.', answer: '2', kind: 'number', answerUnit: 'km' },
      { id: 'd-distance-5', prefix: '서점에서 학교까지의 거리는 약 ', suffix: '입니다.', answer: '5', kind: 'number', answerUnit: 'km' },
    ],
  },
  {
    title: DISTANCE_WORKSHEET_TITLE,
    instruction: DISTANCE_WORKSHEET_INSTRUCTION,
    mapVariant: 'orchard',
    dotCount: 8,
    reference: { fromDotIndex: 2, toDotIndex: 3, label: '약 1 km' },
    landmarks: [
      { id: 'library-e', label: '도서관', dotIndex: 0, row: 'top', accent: '#60a5fa', icon: 'library' },
      { id: 'market-e', label: '마트', dotIndex: 1, row: 'top', accent: '#7dd3fc', icon: 'market' },
      { id: 'park-e', label: '공원', dotIndex: 2, row: 'bottom', accent: '#86efac', icon: 'park' },
      { id: 'station-e', label: '버스터미널', dotIndex: 3, row: 'bottom', accent: '#38bdf8', icon: 'station' },
      { id: 'hospital-e', label: '병원', dotIndex: 4, row: 'top', accent: '#fda4af', icon: 'hospital' },
      { id: 'market-outer-e', label: '시장', dotIndex: 5, row: 'top', accent: '#fcd34d', icon: 'market' },
      { id: 'bank-e', label: '은행', dotIndex: 6, row: 'top', accent: '#fde68a', icon: 'bank' },
      { id: 'school-e', label: '학교', dotIndex: 7, row: 'top', accent: '#bfdbfe', icon: 'school' },
    ],
    prompts: [
      { id: 'e-distance-1', prefix: '버스터미널에서 학교까지의 거리는 약 ', suffix: '입니다.', answer: '4', kind: 'number', answerUnit: 'km' },
      { id: 'e-distance-2', prefix: '도서관에서 공원까지의 거리는 약 ', suffix: '입니다.', answer: '2', kind: 'number', answerUnit: 'km' },
      { id: 'e-distance-3', prefix: '마트에서 병원까지의 거리는 약 ', suffix: '입니다.', answer: '3', kind: 'number', answerUnit: 'km' },
      { id: 'e-distance-4', prefix: '공원에서 은행까지의 거리는 약 ', suffix: '입니다.', answer: '4', kind: 'number', answerUnit: 'km' },
      { id: 'e-distance-5', prefix: '시장에서 학교까지의 거리는 약 ', suffix: '입니다.', answer: '2', kind: 'number', answerUnit: 'km' },
    ],
  },
  {
    title: DISTANCE_WORKSHEET_TITLE,
    instruction: DISTANCE_WORKSHEET_INSTRUCTION,
    mapVariant: 'harbor',
    dotCount: 7,
    reference: { fromDotIndex: 3, toDotIndex: 4, label: '약 1 km' },
    landmarks: [
      { id: 'library-f', label: '도서관', dotIndex: 0, row: 'top', accent: '#60a5fa', icon: 'library' },
      { id: 'park-f', label: '공원', dotIndex: 1, row: 'bottom', accent: '#86efac', icon: 'park' },
      { id: 'station-f', label: '버스터미널', dotIndex: 2, row: 'bottom', accent: '#38bdf8', icon: 'station' },
      { id: 'market-f', label: '시장', dotIndex: 3, row: 'top', accent: '#7dd3fc', icon: 'market' },
      { id: 'hospital-f', label: '병원', dotIndex: 4, row: 'top', accent: '#fda4af', icon: 'hospital' },
      { id: 'bank-f', label: '은행', dotIndex: 5, row: 'top', accent: '#fde68a', icon: 'bank' },
      { id: 'school-f', label: '학교', dotIndex: 6, row: 'top', accent: '#bfdbfe', icon: 'school' },
    ],
    prompts: [
      { id: 'f-distance-1', prefix: '버스터미널에서 학교까지의 거리는 약 ', suffix: '입니다.', answer: '4', kind: 'number', answerUnit: 'km' },
      { id: 'f-distance-2', prefix: '도서관에서 시장까지의 거리는 약 ', suffix: '입니다.', answer: '3', kind: 'number', answerUnit: 'km' },
      { id: 'f-distance-3', prefix: '공원에서 병원까지의 거리는 약 ', suffix: '입니다.', answer: '3', kind: 'number', answerUnit: 'km' },
      { id: 'f-distance-4', prefix: '버스터미널에서 은행까지의 거리는 약 ', suffix: '입니다.', answer: '3', kind: 'number', answerUnit: 'km' },
      { id: 'f-distance-5', prefix: '병원에서 학교까지의 거리는 약 ', suffix: '입니다.', answer: '2', kind: 'number', answerUnit: 'km' },
    ],
  },
  {
    title: DISTANCE_WORKSHEET_TITLE,
    instruction: DISTANCE_WORKSHEET_INSTRUCTION,
    mapVariant: 'village',
    dotCount: 8,
    reference: { fromDotIndex: 1, toDotIndex: 2, label: '약 1 km' },
    landmarks: [
      { id: 'bookstore-g', label: '서점', dotIndex: 0, row: 'top', accent: '#60a5fa', icon: 'bookstore' },
      { id: 'fountain-g', label: '분수대', dotIndex: 1, row: 'top', accent: '#93c5fd', icon: 'fountain' },
      { id: 'school-g', label: '학교', dotIndex: 2, row: 'top', accent: '#bfdbfe', icon: 'school' },
      { id: 'park-g', label: '공원', dotIndex: 3, row: 'bottom', accent: '#86efac', icon: 'park' },
      { id: 'hospital-g', label: '병원', dotIndex: 4, row: 'top', accent: '#fda4af', icon: 'hospital' },
      { id: 'bank-g', label: '은행', dotIndex: 5, row: 'top', accent: '#fde68a', icon: 'bank' },
      { id: 'market-g', label: '마트', dotIndex: 6, row: 'top', accent: '#7dd3fc', icon: 'market' },
      { id: 'station-g', label: '버스터미널', dotIndex: 7, row: 'bottom', accent: '#38bdf8', icon: 'station' },
    ],
    prompts: [
      { id: 'g-distance-1', prefix: '공원에서 버스터미널까지의 거리는 약 ', suffix: '입니다.', answer: '4', kind: 'number', answerUnit: 'km' },
      { id: 'g-distance-2', prefix: '서점에서 학교까지의 거리는 약 ', suffix: '입니다.', answer: '2', kind: 'number', answerUnit: 'km' },
      { id: 'g-distance-3', prefix: '분수대에서 병원까지의 거리는 약 ', suffix: '입니다.', answer: '3', kind: 'number', answerUnit: 'km' },
      { id: 'g-distance-4', prefix: '학교에서 은행까지의 거리는 약 ', suffix: '입니다.', answer: '3', kind: 'number', answerUnit: 'km' },
      { id: 'g-distance-5', prefix: '병원에서 버스터미널까지의 거리는 약 ', suffix: '입니다.', answer: '3', kind: 'number', answerUnit: 'km' },
    ],
  },
];

const UNIT3_PROBLEM_FACTORIES: Record<number, Array<() => Problem>> = {
  1: SMALL_MEASUREMENT_FACTORY_CONFIGS.flatMap((config) => createMeasurementFactoryPair(config)),
  2: [
    () => createPromptProblem('1cm는 몇 mm인가요?', 10, 'mm'),
    () => {
      const centimeters = randomInt(2, 9);
      return createPromptProblem(`${centimeters}cm는 몇 mm인가요?`, toMillimeters(centimeters), 'mm');
    },
    () => {
      const centimeters = randomInt(2, 7);
      const millimeters = randomInt(1, 9);
      return createPromptProblem(`${centimeters}cm ${millimeters}mm는 몇 mm인가요?`, toMillimeters(centimeters, millimeters), 'mm');
    },
    () => {
      let totalMillimeters = randomInt(12, 89);
      while (totalMillimeters % 10 === 0) {
        totalMillimeters = randomInt(12, 89);
      }
      return createPromptProblem(
        `${totalMillimeters}mm는 ${Math.floor(totalMillimeters / 10)}cm □mm입니다.\n□에 들어갈 수는?`,
        totalMillimeters % 10,
      );
    },
    () => {
      const centimeters = randomInt(2, 8);
      return createPromptProblem(`${toMillimeters(centimeters)}mm는 □cm입니다.\n□에 들어갈 수는?`, centimeters);
    },
    () => {
      let totalMillimeters = randomInt(21, 87);
      while (totalMillimeters % 10 === 0) {
        totalMillimeters = randomInt(21, 87);
      }
      const centimeters = Math.floor(totalMillimeters / 10);
      const millimeters = totalMillimeters % 10;
      return createPromptProblem(`${totalMillimeters}mm는 □cm ${millimeters}mm입니다.\n□에 들어갈 수는?`, centimeters);
    },
    () => {
      const centimeters = randomInt(2, 8);
      const isCorrect = Math.random() < 0.5;
      const shownMillimeters = isCorrect ? toMillimeters(centimeters) : toMillimeters(centimeters) + sample([1, 2, 3, 4]);
      return createPromptProblem(
        `${centimeters}cm는 ${shownMillimeters}mm와 같습니다.\n맞으면 1, 틀리면 2를 쓰세요.`,
        isCorrect ? 1 : 2,
      );
    },
    () => {
      const centimeters = randomInt(2, 7);
      const millimeters = randomInt(1, 9);
      return createPromptProblem(
        `□cm ${millimeters}mm는 ${toMillimeters(centimeters, millimeters)}mm입니다.\n□에 들어갈 수는?`,
        centimeters,
      );
    },
    () => {
      const totalMillimeters = randomInt(24, 88);
      const correctText = formatLengthAsMixedUnits(totalMillimeters);
      const wrongValues = new Set<number>();
      while (wrongValues.size < 2) {
        const candidate = totalMillimeters + sample([-4, -3, -2, 2, 3, 4]);
        if (candidate > 10 && candidate !== totalMillimeters) {
          wrongValues.add(candidate);
        }
      }
      return createShuffledOptionsProblem(
        `${totalMillimeters}mm와 같은 것을 고르면 몇 번일까요?`,
        [correctText, ...[...wrongValues].map((value) => formatLengthAsMixedUnits(value))],
        correctText,
      );
    },
    () => {
      const shorter = randomInt(2, 6);
      const longer = shorter + randomInt(1, 3);
      const extraMillimeters = randomInt(1, 9);
      return createPromptProblem(
        `${shorter}cm와 ${longer}cm ${extraMillimeters}mm 중 더 긴 것은 몇 mm인가요?`,
        toMillimeters(longer, extraMillimeters),
        'mm',
      );
    },
    () => {
      const centimeters = randomInt(2, 7);
      const millimeters = randomInt(1, 9);
      const totalMillimeters = toMillimeters(centimeters, millimeters);
      const isCorrect = Math.random() < 0.5;
      const shownMillimeters = isCorrect ? totalMillimeters : totalMillimeters + sample([-3, -2, -1, 1, 2, 3]);
      return createPromptProblem(
        `${centimeters}cm ${millimeters}mm는 ${shownMillimeters}mm와 같습니다.\n맞으면 1, 틀리면 2를 쓰세요.`,
        isCorrect ? 1 : 2,
      );
    },
  ],
  3: LARGE_MEASUREMENT_FACTORY_CONFIGS.flatMap((config) => createMeasurementFactoryPair(config)),
  4: [
    () => {
      const [a, b, c] = getDistinctRandomNumbers(3, 118, 149);
      return createPromptProblem(
        `연필은 ${formatLengthValue(a)}, 가위는 ${formatLengthValue(b)}, 사인펜은 ${formatLengthValue(c)}입니다.\n가장 긴 것의 길이는 몇 mm인가요?`,
        Math.max(a, b, c),
        'mm',
      );
    },
    () => {
      const [a, b, c] = getDistinctRandomNumbers(3, 36, 98);
      return createPromptProblem(
        `지우개는 ${formatLengthValue(a)}, 리본은 ${formatLengthValue(b)}, 색연필은 ${formatLengthValue(c)}입니다.\n가장 짧은 것의 길이는 몇 mm인가요?`,
        Math.min(a, b, c),
        'mm',
      );
    },
    () => {
      const shorter = randomInt(45, 88);
      const longer = randomInt(shorter + 5, shorter + 32);
      const options = shuffleValues([
        `막대 ${formatLengthValue(longer)}`,
        `지우개 ${formatLengthValue(shorter)}`,
      ]);
      return createPromptProblem(
        buildNumberedOptionsPrompt('더 긴 것을 고르면 몇 번일까요?', options),
        options.findIndex((option) => option.startsWith('막대')) + 1,
      );
    },
    () => {
      const totalMillimeters = randomInt(48, 156);
      const isCorrect = Math.random() < 0.5;
      const shownMillimeters = isCorrect ? totalMillimeters : totalMillimeters + sample([-3, -2, -1, 1, 2, 3]);
      return createPromptProblem(
        `${formatLengthAsMixedUnits(totalMillimeters)}는 ${shownMillimeters}mm와 같습니다.\n맞으면 1, 틀리면 2를 쓰세요.`,
        isCorrect ? 1 : 2,
      );
    },
    () => {
      const lengths = getDistinctRandomNumbers(3, 55, 142);
      const options = [
        `색연필 ${formatLengthValue(lengths[0])}`,
        `가위 ${formatLengthValue(lengths[1])}`,
        `자 ${formatLengthValue(lengths[2])}`,
      ];
      return createPromptProblem(
        buildNumberedOptionsPrompt('가장 긴 것을 고르면 몇 번일까요?', options),
        lengths.indexOf(Math.max(...lengths)) + 1,
      );
    },
  ],
  5: [
    () => createPromptProblem('1km는 몇 m인가요?', 1000, 'm'),
    () => createPromptProblem('1000m는 몇 km인가요?', 1, 'km'),
    () => {
      const kilometers = randomInt(2, 9);
      return createPromptProblem(`학교에서 공원까지 ${kilometers}km입니다.\n모두 몇 m인가요?`, kilometers * 1000, 'm');
    },
    () => {
      const kilometers = randomInt(2, 8);
      return createPromptProblem(`${toMeters(kilometers)}m는 몇 km인가요?`, kilometers, 'km');
    },
    () => {
      const kilometers = randomInt(2, 8);
      const isCorrect = Math.random() < 0.5;
      const shownMeters = isCorrect ? toMeters(kilometers) : toMeters(kilometers) + sample([100, 200, 300, 400]);
      return createPromptProblem(
        `${kilometers}km는 ${shownMeters}m와 같습니다.\n맞으면 1, 틀리면 2를 쓰세요.`,
        isCorrect ? 1 : 2,
      );
    },
    () => {
      const kilometers = randomInt(2, 9);
      return createPromptProblem(`${kilometers * 1000}m는 □km입니다.\n□에 들어갈 수는?`, kilometers);
    },
    () => {
      const kilometers = randomInt(2, 9);
      return createPromptProblem(`□km는 ${kilometers * 1000}m입니다.\n□에 들어갈 수는?`, kilometers);
    },
    () => {
      const kilometers = randomInt(2, 8);
      const correctText = `${kilometers * 1000}m`;
      return createShuffledOptionsProblem(
        `${kilometers}km와 같은 것을 고르면 몇 번일까요?`,
        [correctText, `${kilometers * 100}m`, `${kilometers}m`],
        correctText,
      );
    },
    () => {
      const shorter = randomInt(2, 5);
      const longer = shorter + randomInt(1, 3);
      return createPromptProblem(`${shorter}km와 ${longer}km 중 더 먼 거리는 몇 m인가요?`, longer * 1000, 'm');
    },
    () => {
      const kilometers = randomInt(2, 8);
      const isCorrect = Math.random() < 0.5;
      const shownKilometers = isCorrect ? kilometers : kilometers + sample([-1, 1]);
      return createPromptProblem(
        `${kilometers * 1000}m는 ${shownKilometers}km입니다.\n맞으면 1, 틀리면 2를 쓰세요.`,
        isCorrect ? 1 : 2,
      );
    },
  ],
  6: [
    () => {
      const kilometers = randomInt(2, 9);
      return createPromptProblem(`${kilometers}km는 몇 m인가요?`, kilometers * 1000, 'm');
    },
    () => {
      const kilometers = randomInt(1, 8);
      const meters = randomInt(20, 980);
      return createPromptProblem(`${kilometers}km ${meters}m는 몇 m인가요?`, kilometers * 1000 + meters, 'm');
    },
    () => {
      const kilometers = randomInt(2, 8);
      const meters = randomInt(10, 980);
      return createPromptProblem(`${kilometers * 1000 + meters}m는 ${kilometers}km □m입니다.\n□에 들어갈 수는?`, meters);
    },
    () => {
      const first = toMeters(randomInt(1, 3), randomInt(120, 880));
      const second = toMeters(randomInt(1, 3), randomInt(120, 880));
      if (first === second) {
        return createPromptProblem(
          `등산로는 ${formatDistanceValue(first)}, 산책로는 ${formatDistanceValue(second + 100)}입니다.\n더 긴 거리는 몇 m인가요?`,
          second + 100,
          'm',
        );
      }

      return createPromptProblem(
        `등산로는 ${formatDistanceValue(first)}, 산책로는 ${formatDistanceValue(second)}입니다.\n더 긴 거리는 몇 m인가요?`,
        Math.max(first, second),
        'm',
      );
    },
    () => {
      const totalMeters = toMeters(randomInt(2, 6), randomInt(50, 980));
      const isCorrect = Math.random() < 0.5;
      const shownMeters = isCorrect ? totalMeters : totalMeters + sample([-200, -100, 100, 200]);
      return createPromptProblem(
        `${formatDistanceAsMixedUnits(totalMeters)}는 ${shownMeters}m와 같습니다.\n맞으면 1, 틀리면 2를 쓰세요.`,
        isCorrect ? 1 : 2,
      );
    },
  ],
  7: [
    ...DISTANCE_WORKSHEET_PROBLEM_SETS.flatMap(({ prompts, ...worksheetBase }) => (
      prompts
        .filter((prompt) => prompt.kind === 'number')
        .map((prompt) => () => createDistanceWorksheetProblem({ ...worksheetBase, prompt }))
    )),
  ],
  8: [
    () => createPromptProblem('1분은 몇 초인가요?', 60, '초'),
    () => createPromptProblem('85초는 1분 □초입니다.\n□에 들어갈 수는?', 25),
    () => createPromptProblem('2분 35초는 몇 초인가요?', 155, '초'),
    () => createPromptProblem('180초는 몇 분인가요?', 3, '분'),
    () => {
      const minutes = randomInt(2, 5);
      return createPromptProblem(`${minutes}분은 몇 초인가요?`, minutes * 60, '초');
    },
    () => {
      const minutes = randomInt(2, 4);
      const seconds = randomInt(5, 55);
      return createPromptProblem(`${minutes}분 ${seconds}초는 몇 초인가요?`, minutes * 60 + seconds, '초');
    },
    () => {
      const minutes = randomInt(2, 5);
      const seconds = randomInt(10, 55);
      return createPromptProblem(`${minutes * 60 + seconds}초는 ${minutes}분 □초입니다.\n□에 들어갈 수는?`, seconds);
    },
    () => {
      const minutes = randomInt(3, 6);
      return createPromptProblem(`${minutes * 60}초는 몇 분인가요?`, minutes, '분');
    },
    () => {
      const minutes = randomInt(2, 6);
      return createPromptProblem(`${minutes * 60}초는 □분입니다.\n□에 들어갈 수는?`, minutes);
    },
    () => {
      const minutes = randomInt(2, 5);
      const seconds = randomInt(5, 55);
      const totalSeconds = minutes * 60 + seconds;
      const correctText = formatDuration(0, minutes, seconds);
      const wrongValues = new Set<number>();
      while (wrongValues.size < 2) {
        const candidate = totalSeconds + sample([-15, -10, -5, 5, 10, 15]);
        if (candidate > 60 && candidate !== totalSeconds) {
          wrongValues.add(candidate);
        }
      }
      return createShuffledOptionsProblem(
        `${totalSeconds}초와 같은 것을 고르면 몇 번일까요?`,
        [correctText, ...[...wrongValues].map((value) => {
          const converted = splitClockSeconds(value);
          return formatDuration(0, converted.minutes, converted.seconds);
        })],
        correctText,
      );
    },
    () => {
      const minutes = randomInt(2, 5);
      const isCorrect = Math.random() < 0.5;
      const shownSeconds = isCorrect ? minutes * 60 : minutes * 60 + sample([-20, -10, 10, 20]);
      return createPromptProblem(
        `${minutes}분은 ${shownSeconds}초입니다.\n맞으면 1, 틀리면 2를 쓰세요.`,
        isCorrect ? 1 : 2,
      );
    },
    () => {
      const minutes = randomInt(2, 5);
      const seconds = randomInt(10, 50);
      return createPromptProblem(
        `${minutes}분 ${seconds}초는 ${minutes}분보다 □초 더 깁니다.\n□에 들어갈 수는?`,
        seconds,
      );
    },
  ],
  9: [createClockReadingVisualProblem],
  10: [
    () => createClockTimeAdditionProblem(1),
    () => createBarModelTimeAdditionProblem(1),
    () => createVerticalTimeAdditionProblem(1),
  ],
  11: [
    () => {
      const secondMinutes = randomInt(2, 4);
      const secondSeconds = randomInt(15, 45);
      const firstMinutes = randomInt(secondMinutes + 2, secondMinutes + 5);
      const firstSeconds = randomInt(10, 55);
      const difference = firstMinutes * 60 + firstSeconds - (secondMinutes * 60 + secondSeconds);
      return createPromptProblem(
        `${firstMinutes}분 ${firstSeconds}초 - ${secondMinutes}분 ${secondSeconds}초 = ${Math.floor(difference / 60)}분 □초입니다.\n□에 들어갈 수는?`,
        difference % 60,
      );
    },
    () => {
      while (true) {
        const endHour = randomInt(2, 12);
        const endMinute = randomInt(8, 58);
        const endSecond = randomInt(10, 55);
        const subtractMinutes = randomInt(1, 18);
        const subtractSeconds = randomInt(10, 45);
        const result = splitClockSeconds(endHour * 3600 + endMinute * 60 + endSecond - (subtractMinutes * 60 + subtractSeconds));

        if (result.hours >= 1) {
          return createPromptProblem(
            `${formatClockTime(endHour, endMinute, endSecond)}에서 ${formatDuration(0, subtractMinutes, subtractSeconds)} 전은 ${result.hours}시 ${result.minutes}분 □초입니다.\n□에 들어갈 수는?`,
            result.seconds,
          );
        }
      }
    },
    () => {
      while (true) {
        const startHour = randomInt(1, 10);
        const startMinute = randomInt(5, 45);
        const startSecond = randomInt(10, 50);
        const durationHours = randomInt(0, 1);
        const durationMinutes = randomInt(20, 48);
        const durationSeconds = randomInt(10, 45);
        const arrival = splitClockSeconds(
          startHour * 3600 + startMinute * 60 + startSecond + durationHours * 3600 + durationMinutes * 60 + durationSeconds,
        );

        if (arrival.hours <= 12) {
          return createPromptProblem(
            `${formatDuration(durationHours, durationMinutes, durationSeconds)} 동안 산책하고 ${formatClockTime(arrival.hours, arrival.minutes, arrival.seconds)}에 집에 도착했습니다.\n산책을 시작한 시각은 ${startHour}시 □분 ${startSecond}초입니다.\n□에 들어갈 수는?`,
            startMinute,
          );
        }
      }
    },
    () => {
      while (true) {
        const hour = randomInt(2, 11);
        const minute = randomInt(10, 55);
        const second = randomInt(10, 55);
        const subtractMinutes = randomInt(1, 15);
        const subtractSeconds = randomInt(5, 40);
        const result = splitClockSeconds(hour * 3600 + minute * 60 + second - (subtractMinutes * 60 + subtractSeconds));

        if (result.hours >= 1) {
          const isCorrect = Math.random() < 0.5;
          const wrongSeconds = result.seconds >= 57 ? result.seconds - 2 : result.seconds + 2;
          return createPromptProblem(
            `${formatClockTime(hour, minute, second)}에서 ${subtractMinutes}분 ${subtractSeconds}초를 빼면 ${result.hours}시 ${result.minutes}분 ${isCorrect ? result.seconds : wrongSeconds}초입니다.\n맞으면 1, 틀리면 2를 쓰세요.`,
            isCorrect ? 1 : 2,
          );
        }
      }
    },
  ],
};

function createUnitSelectionChallenge(level: number): UnitSelectionChallenge {
  const pool = UNIT_SELECTION_CHALLENGE_POOLS[level] ?? UNIT_SELECTION_CHALLENGE_POOLS[11] ?? [];
  return sample(pool);
}

function generateUnit3Problem(level: number, opponentHP: number, problemSequence?: number): Problem {
  if (level === 1) {
    if (problemSequence === 1 || (problemSequence === undefined && opponentHP === 100)) {
      return createMillimeterNeedIntroProblem();
    }

    if (problemSequence === 2) {
      return createMillimeterNeedChoiceProblem();
    }
  }

  if (level === 5) {
    if (problemSequence === 1 || (problemSequence === undefined && opponentHP === 100)) {
      return createKilometerNeedIntroProblem();
    }

    if (problemSequence === 2) {
      return createKilometerNeedChoiceProblem();
    }
  }

  if (level === 8) {
    if (problemSequence === 1 || (problemSequence === undefined && opponentHP === 100)) {
      return createSecondNeedIntroProblem();
    }

    if (problemSequence === 2) {
      return createSecondNeedChoiceProblem();
    }
  }

  if (level === 9) {
    return createClockReadingVisualProblem(getClockReadingDifficulty(problemSequence, opponentHP));
  }

  if (level === 10) {
    return createLevel10TimeAdditionProblem(problemSequence, opponentHP);
  }

  if (level === 11) {
    return createLevel11TimeSubtractionProblem(problemSequence, opponentHP);
  }

  if (level === 12) {
    return createLevel12TimeMixedProblem(problemSequence, opponentHP);
  }

  const factories = UNIT3_PROBLEM_FACTORIES[level] ?? UNIT3_PROBLEM_FACTORIES[11];

  if ((level === 1 || level === 3) && opponentHP >= 50) {
    const zeroStartFactories = factories.filter((_, index) => index % 2 === 0);
    return sample(zeroStartFactories)();
  }

  if (level === 1 || level === 3) {
    const shiftedStartFactories = factories.filter((_, index) => index % 2 === 1);
    return sample(shiftedStartFactories)();
  }

  return sample(factories)();
}

function countCarries(a: number, b: number): number {
  let carries = 0; let carry = 0; let tempA = a; let tempB = b;
  while (tempA > 0 || tempB > 0) {
    const sum = (tempA % 10) + (tempB % 10) + carry;
    if (sum >= 10) { carries++; carry = 1; } else { carry = 0; }
    tempA = Math.floor(tempA / 10); tempB = Math.floor(tempB / 10);
  }
  return carries;
}

function countBorrows(a: number, b: number): number {
  let borrows = 0; let borrow = 0; let tempA = a; let tempB = b;
  while (tempA > 0 || tempB > 0) {
    let diff = (tempA % 10) - (tempB % 10) - borrow;
    if (diff < 0) { borrows++; borrow = 1; } else { borrow = 0; }
    tempA = Math.floor(tempA / 10); tempB = Math.floor(tempB / 10);
  }
  return borrows;
}

function generateStorySeed({
  op,
  aRange,
  bRange,
  validate = () => true,
}: {
  op: '+' | '-';
  aRange: [number, number];
  bRange: [number, number];
  validate?: (a: number, b: number, answer: number) => boolean;
}): GeneratedStoryProblem {
  for (let attempt = 0; attempt < 400; attempt++) {
    const a = randomInt(aRange[0], aRange[1]);
    const b = randomInt(bRange[0], bRange[1]);

    if (op === '-' && a <= b) {
      continue;
    }

    const answer = op === '+' ? a + b : a - b;

    if (validate(a, b, answer)) {
      return { a, b, op, answer };
    }
  }

  if (op === '+') {
    return { a: 428, b: 163, op, answer: 591 };
  }

  return { a: 864, b: 278, op, answer: 586 };
}

const STORY_NUMBER_GENERATORS: Record<number, Array<() => GeneratedStoryProblem>> = {
  8: [
    () =>
      generateStorySeed({
        op: '+',
        aRange: [100, 699],
        bRange: [100, 399],
        validate: (a, b, answer) => answer <= 999 && countCarries(a, b) === 0,
      }),
    () =>
      generateStorySeed({
        op: '+',
        aRange: [140, 799],
        bRange: [100, 499],
        validate: (a, b, answer) => answer <= 999 && countCarries(a, b) === 1,
      }),
    () =>
      generateStorySeed({
        op: '-',
        aRange: [300, 999],
        bRange: [100, 499],
        validate: (a, b, answer) => answer >= 100 && countBorrows(a, b) === 0,
      }),
    () =>
      generateStorySeed({
        op: '-',
        aRange: [300, 999],
        bRange: [100, 699],
        validate: (a, b, answer) => answer >= 100 && countBorrows(a, b) === 1,
      }),
  ],
  9: [
    () =>
      generateStorySeed({
        op: '+',
        aRange: [200, 999],
        bRange: [200, 999],
        validate: (a, b, answer) => {
          const carries = countCarries(a, b);
          return answer <= 1998 && (carries === 2 || carries === 3);
        },
      }),
    () =>
      generateStorySeed({
        op: '+',
        aRange: [350, 999],
        bRange: [250, 999],
        validate: (a, b, answer) => answer >= 1000 && answer <= 1998 && countCarries(a, b) >= 1,
      }),
    () =>
      generateStorySeed({
        op: '-',
        aRange: [400, 999],
        bRange: [100, 899],
        validate: (a, b, answer) => answer >= 100 && countBorrows(a, b) === 2,
      }),
    () =>
      generateStorySeed({
        op: '-',
        aRange: [400, 999],
        bRange: [100, 899],
        validate: (a, b, answer) => answer >= 50 && isZeroTensBorrowCase(a, b),
      }),
  ],
};

function generateStoryProblemNumbers(level: number): GeneratedStoryProblem {
  const generators = STORY_NUMBER_GENERATORS[level] ?? STORY_NUMBER_GENERATORS[9];
  return sample(generators)();
}

function isFinalBuilderTurn(level: number, opponentHP: number) {
  return level <= 6 && opponentHP <= FINAL_BUILDER_HP;
}

function canOfferEstimation(unitId: LearningUnitId, opponentHP: number) {
  return unitId === 'unit2' && opponentHP > ESTIMATION_SAFE_HP;
}

function createBuilderProblem(level: number): Problem {
  const baseTitle = '문제 만들기';
  let builder: BuilderProblemData;

  switch (level) {
    case 1:
      builder = pickBuilderTemplate(level, [
        {
          templateId: 'level1-mid-mid',
          title: baseTitle,
          instruction: '받아올림 없는 덧셈',
          helperText: '칸별 숫자 범위를 확인해 주세요.',
          op: '+',
          topTemplate: '2[a]4',
          bottomTemplate: '3[b]1',
          slots: [
            createBuilderSlot('a', '윗수의 십의 자리', 0, 4),
            createBuilderSlot('b', '아랫수의 십의 자리', 0, 4),
          ],
          invalidMessage: '받아올림이 생기지 않도록 빈칸의 수를 다시 골라 주세요.',
          validate: (left, right) => left + right <= 999 && countCarries(left, right) === 0,
        },
        {
          templateId: 'level1-top-hund-bottom-tens',
          title: baseTitle,
          instruction: '받아올림 없는 덧셈',
          helperText: '칸별 숫자 범위를 확인해 주세요.',
          op: '+',
          topTemplate: '[a]42',
          bottomTemplate: '3[b]1',
          slots: [
            createBuilderSlot('a', '윗수의 백의 자리', 1, 4),
            createBuilderSlot('b', '아랫수의 십의 자리', 0, 4),
          ],
          invalidMessage: '받아올림이 생기지 않도록 빈칸의 수를 다시 골라 주세요.',
          validate: (left, right) => left + right <= 999 && countCarries(left, right) === 0,
        },
        {
          templateId: 'level1-top-ones-bottom-hund',
          title: baseTitle,
          instruction: '받아올림 없는 덧셈',
          helperText: '칸별 숫자 범위를 확인해 주세요.',
          op: '+',
          topTemplate: '24[a]',
          bottomTemplate: '[b]31',
          slots: [
            createBuilderSlot('a', '윗수의 일의 자리', 0, 4),
            createBuilderSlot('b', '아랫수의 백의 자리', 1, 4),
          ],
          invalidMessage: '받아올림이 생기지 않도록 빈칸의 수를 다시 골라 주세요.',
          validate: (left, right) => left + right <= 999 && countCarries(left, right) === 0,
        },
        {
          templateId: 'level1-alt-mid-mid',
          title: baseTitle,
          instruction: '받아올림 없는 덧셈',
          helperText: '칸별 숫자 범위를 확인해 주세요.',
          op: '+',
          topTemplate: '1[a]3',
          bottomTemplate: '2[b]5',
          slots: [
            createBuilderSlot('a', '윗수의 십의 자리', 0, 4),
            createBuilderSlot('b', '아랫수의 십의 자리', 0, 4),
          ],
          invalidMessage: '받아올림이 생기지 않도록 빈칸의 수를 다시 골라 주세요.',
          validate: (left, right) => left + right <= 999 && countCarries(left, right) === 0,
        },
        {
          templateId: 'level1-alt-top-hund-bottom-tens',
          title: baseTitle,
          instruction: '받아올림 없는 덧셈',
          helperText: '칸별 숫자 범위를 확인해 주세요.',
          op: '+',
          topTemplate: '[a]13',
          bottomTemplate: '2[b]4',
          slots: [
            createBuilderSlot('a', '윗수의 백의 자리', 1, 6),
            createBuilderSlot('b', '아랫수의 십의 자리', 0, 4),
          ],
          invalidMessage: '받아올림이 생기지 않도록 빈칸의 수를 다시 골라 주세요.',
          validate: (left, right) => left + right <= 999 && countCarries(left, right) === 0,
        },
        {
          templateId: 'level1-alt-mid-mid-2',
          title: baseTitle,
          instruction: '받아올림 없는 덧셈',
          helperText: '칸별 숫자 범위를 확인해 주세요.',
          op: '+',
          topTemplate: '3[a]2',
          bottomTemplate: '1[b]4',
          slots: [
            createBuilderSlot('a', '윗수의 십의 자리', 0, 4),
            createBuilderSlot('b', '아랫수의 십의 자리', 0, 4),
          ],
          invalidMessage: '받아올림이 생기지 않도록 빈칸의 수를 다시 골라 주세요.',
          validate: (left, right) => left + right <= 999 && countCarries(left, right) === 0,
        },
      ]);
      break;
    case 2:
      builder = pickBuilderTemplate(level, [
        {
          templateId: 'level2-mid-mid',
          title: baseTitle,
          instruction: '받아내림 없는 뺄셈',
          helperText: '칸별 숫자 범위를 확인해 주세요.',
          op: '-',
          topTemplate: '8[a]6',
          bottomTemplate: '4[b]1',
          slots: [
            createBuilderSlot('a', '윗수의 십의 자리', 5, 9),
            createBuilderSlot('b', '아랫수의 십의 자리', 0, 4),
          ],
          invalidMessage: '받아내림이 생기지 않도록 제시된 범위 안에서 다시 만들어 주세요.',
          validate: (left, right) => left > right && countBorrows(left, right) === 0,
        },
        {
          templateId: 'level2-top-hund-bottom-tens',
          title: baseTitle,
          instruction: '받아내림 없는 뺄셈',
          helperText: '칸별 숫자 범위를 확인해 주세요.',
          op: '-',
          topTemplate: '[a]64',
          bottomTemplate: '4[b]1',
          slots: [
            createBuilderSlot('a', '윗수의 백의 자리', 5, 9),
            createBuilderSlot('b', '아랫수의 십의 자리', 0, 4),
          ],
          invalidMessage: '받아내림이 생기지 않도록 제시된 범위 안에서 다시 만들어 주세요.',
          validate: (left, right) => left > right && countBorrows(left, right) === 0,
        },
        {
          templateId: 'level2-top-ones-bottom-hund',
          title: baseTitle,
          instruction: '받아내림 없는 뺄셈',
          helperText: '칸별 숫자 범위를 확인해 주세요.',
          op: '-',
          topTemplate: '86[a]',
          bottomTemplate: '[b]21',
          slots: [
            createBuilderSlot('a', '윗수의 일의 자리', 5, 9),
            createBuilderSlot('b', '아랫수의 백의 자리', 1, 4),
          ],
          invalidMessage: '받아내림이 생기지 않도록 제시된 범위 안에서 다시 만들어 주세요.',
          validate: (left, right) => left > right && countBorrows(left, right) === 0,
        },
        {
          templateId: 'level2-alt-mid-mid',
          title: baseTitle,
          instruction: '받아내림 없는 뺄셈',
          helperText: '칸별 숫자 범위를 확인해 주세요.',
          op: '-',
          topTemplate: '7[a]8',
          bottomTemplate: '2[b]3',
          slots: [
            createBuilderSlot('a', '윗수의 십의 자리', 5, 9),
            createBuilderSlot('b', '아랫수의 십의 자리', 0, 4),
          ],
          invalidMessage: '받아내림이 생기지 않도록 제시된 범위 안에서 다시 만들어 주세요.',
          validate: (left, right) => left > right && countBorrows(left, right) === 0,
        },
        {
          templateId: 'level2-alt-top-hund-bottom-tens',
          title: baseTitle,
          instruction: '받아내림 없는 뺄셈',
          helperText: '칸별 숫자 범위를 확인해 주세요.',
          op: '-',
          topTemplate: '[a]75',
          bottomTemplate: '3[b]2',
          slots: [
            createBuilderSlot('a', '윗수의 백의 자리', 5, 9),
            createBuilderSlot('b', '아랫수의 십의 자리', 0, 6),
          ],
          invalidMessage: '받아내림이 생기지 않도록 제시된 범위 안에서 다시 만들어 주세요.',
          validate: (left, right) => left > right && countBorrows(left, right) === 0,
        },
        {
          templateId: 'level2-alt-top-tens-bottom-hund',
          title: baseTitle,
          instruction: '받아내림 없는 뺄셈',
          helperText: '칸별 숫자 범위를 확인해 주세요.',
          op: '-',
          topTemplate: '9[a]4',
          bottomTemplate: '[b]21',
          slots: [
            createBuilderSlot('a', '윗수의 십의 자리', 2, 9),
            createBuilderSlot('b', '아랫수의 백의 자리', 1, 8),
          ],
          invalidMessage: '받아내림이 생기지 않도록 제시된 범위 안에서 다시 만들어 주세요.',
          validate: (left, right) => left > right && countBorrows(left, right) === 0,
        },
      ]);
      break;
    case 3:
      builder = pickBuilderTemplate(level, [
        {
          templateId: 'level3-mid-mid',
          title: baseTitle,
          instruction: '받아올림 1번 덧셈',
          helperText: '칸별 숫자 범위를 확인해 주세요.',
          op: '+',
          topTemplate: '2[a]4',
          bottomTemplate: '3[b]1',
          slots: [
            createBuilderSlot('a', '윗수의 십의 자리', 5, 9),
            createBuilderSlot('b', '아랫수의 십의 자리', 5, 9),
          ],
          invalidMessage: '받아올림이 꼭 1번만 생기도록 다시 만들어 주세요.',
          validate: (left, right) => left + right <= 999 && countCarries(left, right) === 1,
        },
        {
          templateId: 'level3-top-hund-bottom-ones',
          title: baseTitle,
          instruction: '받아올림 1번 덧셈',
          helperText: '칸별 숫자 범위를 확인해 주세요.',
          op: '+',
          topTemplate: '[a]48',
          bottomTemplate: '31[b]',
          slots: [
            createBuilderSlot('a', '윗수의 백의 자리', 1, 6),
            createBuilderSlot('b', '아랫수의 일의 자리', 5, 9),
          ],
          invalidMessage: '받아올림이 꼭 1번만 생기도록 다시 만들어 주세요.',
          validate: (left, right) => left + right <= 999 && countCarries(left, right) === 1,
        },
        {
          templateId: 'level3-top-ones-bottom-hund',
          title: baseTitle,
          instruction: '받아올림 1번 덧셈',
          helperText: '칸별 숫자 범위를 확인해 주세요.',
          op: '+',
          topTemplate: '24[a]',
          bottomTemplate: '[b]15',
          slots: [
            createBuilderSlot('a', '윗수의 일의 자리', 5, 9),
            createBuilderSlot('b', '아랫수의 백의 자리', 1, 4),
          ],
          invalidMessage: '받아올림이 꼭 1번만 생기도록 다시 만들어 주세요.',
          validate: (left, right) => left + right <= 999 && countCarries(left, right) === 1,
        },
        {
          templateId: 'level3-alt-mid-mid',
          title: baseTitle,
          instruction: '받아올림 1번 덧셈',
          helperText: '칸별 숫자 범위를 확인해 주세요.',
          op: '+',
          topTemplate: '4[a]8',
          bottomTemplate: '2[b]1',
          slots: [
            createBuilderSlot('a', '윗수의 십의 자리', 5, 9),
            createBuilderSlot('b', '아랫수의 십의 자리', 5, 9),
          ],
          invalidMessage: '받아올림이 꼭 1번만 생기도록 다시 만들어 주세요.',
          validate: (left, right) => left + right <= 999 && countCarries(left, right) === 1,
        },
        {
          templateId: 'level3-alt-mid-mid-2',
          title: baseTitle,
          instruction: '받아올림 1번 덧셈',
          helperText: '칸별 숫자 범위를 확인해 주세요.',
          op: '+',
          topTemplate: '5[a]4',
          bottomTemplate: '2[b]5',
          slots: [
            createBuilderSlot('a', '윗수의 십의 자리', 6, 9),
            createBuilderSlot('b', '아랫수의 십의 자리', 4, 5),
          ],
          invalidMessage: '받아올림이 꼭 1번만 생기도록 다시 만들어 주세요.',
          validate: (left, right) => left + right <= 999 && countCarries(left, right) === 1,
        },
        {
          templateId: 'level3-alt-top-tens-bottom-hund',
          title: baseTitle,
          instruction: '받아올림 1번 덧셈',
          helperText: '칸별 숫자 범위를 확인해 주세요.',
          op: '+',
          topTemplate: '1[a]9',
          bottomTemplate: '[b]30',
          slots: [
            createBuilderSlot('a', '윗수의 십의 자리', 7, 9),
            createBuilderSlot('b', '아랫수의 백의 자리', 1, 7),
          ],
          invalidMessage: '받아올림이 꼭 1번만 생기도록 다시 만들어 주세요.',
          validate: (left, right) => left + right <= 999 && countCarries(left, right) === 1,
        },
      ]);
      break;
    case 4:
      builder = pickBuilderTemplate(level, [
        {
          templateId: 'level4-mid-mid',
          title: baseTitle,
          instruction: '받아내림 1번 뺄셈',
          helperText: '칸별 숫자 범위를 확인해 주세요.',
          op: '-',
          topTemplate: '6[a]8',
          bottomTemplate: '4[b]1',
          slots: [
            createBuilderSlot('a', '윗수의 십의 자리', 0, 4),
            createBuilderSlot('b', '아랫수의 십의 자리', 5, 9),
          ],
          invalidMessage: '받아내림이 정확히 1번 생기도록 다시 만들어 주세요.',
          validate: (left, right) => left > right && countBorrows(left, right) === 1,
        },
        {
          templateId: 'level4-top-hund-bottom-ones',
          title: baseTitle,
          instruction: '받아내림 1번 뺄셈',
          helperText: '칸별 숫자 범위를 확인해 주세요.',
          op: '-',
          topTemplate: '[a]30',
          bottomTemplate: '41[b]',
          slots: [
            createBuilderSlot('a', '윗수의 백의 자리', 5, 9),
            createBuilderSlot('b', '아랫수의 일의 자리', 5, 9),
          ],
          invalidMessage: '받아내림이 정확히 1번 생기도록 다시 만들어 주세요.',
          validate: (left, right) => left > right && countBorrows(left, right) === 1,
        },
        {
          templateId: 'level4-top-tens-bottom-hund',
          title: baseTitle,
          instruction: '받아내림 1번 뺄셈',
          helperText: '칸별 숫자 범위를 확인해 주세요.',
          op: '-',
          topTemplate: '6[a]8',
          bottomTemplate: '[b]51',
          slots: [
            createBuilderSlot('a', '윗수의 십의 자리', 0, 4),
            createBuilderSlot('b', '아랫수의 백의 자리', 1, 4),
          ],
          invalidMessage: '받아내림이 정확히 1번 생기도록 다시 만들어 주세요.',
          validate: (left, right) => left > right && countBorrows(left, right) === 1,
        },
        {
          templateId: 'level4-alt-ones-borrow',
          title: baseTitle,
          instruction: '받아내림 1번 뺄셈',
          helperText: '칸별 숫자 범위를 확인해 주세요.',
          op: '-',
          topTemplate: '8[a]2',
          bottomTemplate: '3[b]5',
          slots: [
            createBuilderSlot('a', '윗수의 십의 자리', 6, 9),
            createBuilderSlot('b', '아랫수의 십의 자리', 0, 5),
          ],
          invalidMessage: '받아내림이 정확히 1번 생기도록 다시 만들어 주세요.',
          validate: (left, right) => left > right && countBorrows(left, right) === 1,
        },
        {
          templateId: 'level4-alt-top-hund-bottom-tens',
          title: baseTitle,
          instruction: '받아내림 1번 뺄셈',
          helperText: '칸별 숫자 범위를 확인해 주세요.',
          op: '-',
          topTemplate: '[a]40',
          bottomTemplate: '2[b]7',
          slots: [
            createBuilderSlot('a', '윗수의 백의 자리', 5, 9),
            createBuilderSlot('b', '아랫수의 십의 자리', 0, 3),
          ],
          invalidMessage: '받아내림이 정확히 1번 생기도록 다시 만들어 주세요.',
          validate: (left, right) => left > right && countBorrows(left, right) === 1,
        },
        {
          templateId: 'level4-alt-mid-mid-2',
          title: baseTitle,
          instruction: '받아내림 1번 뺄셈',
          helperText: '칸별 숫자 범위를 확인해 주세요.',
          op: '-',
          topTemplate: '7[a]3',
          bottomTemplate: '4[b]8',
          slots: [
            createBuilderSlot('a', '윗수의 십의 자리', 5, 9),
            createBuilderSlot('b', '아랫수의 십의 자리', 0, 4),
          ],
          invalidMessage: '받아내림이 정확히 1번 생기도록 다시 만들어 주세요.',
          validate: (left, right) => left > right && countBorrows(left, right) === 1,
        },
      ]);
      break;
    case 5:
      builder = pickBuilderTemplate(level, [
        {
          templateId: 'level5-mid-mid',
          title: baseTitle,
          instruction: '받아올림 2번 이상 덧셈',
          helperText: '칸별 숫자 범위를 확인해 주세요.',
          op: '+',
          topTemplate: '4[a]8',
          bottomTemplate: '3[b]5',
          slots: [
            createBuilderSlot('a', '윗수의 십의 자리', 5, 9),
            createBuilderSlot('b', '아랫수의 십의 자리', 5, 9),
          ],
          invalidMessage: '받아올림이 2번 이상 생기도록 다시 만들어 주세요.',
          validate: (left, right) => countCarries(left, right) >= 2,
        },
        {
          templateId: 'level5-top-hund-bottom-tens',
          title: baseTitle,
          instruction: '받아올림 2번 이상 덧셈',
          helperText: '칸별 숫자 범위를 확인해 주세요.',
          op: '+',
          topTemplate: '[a]87',
          bottomTemplate: '3[b]8',
          slots: [
            createBuilderSlot('a', '윗수의 백의 자리', 5, 9),
            createBuilderSlot('b', '아랫수의 십의 자리', 5, 9),
          ],
          invalidMessage: '받아올림이 2번 이상 생기도록 다시 만들어 주세요.',
          validate: (left, right) => countCarries(left, right) >= 2,
        },
        {
          templateId: 'level5-top-ones-bottom-hund',
          title: baseTitle,
          instruction: '받아올림 2번 이상 덧셈',
          helperText: '칸별 숫자 범위를 확인해 주세요.',
          op: '+',
          topTemplate: '48[a]',
          bottomTemplate: '[b]75',
          slots: [
            createBuilderSlot('a', '윗수의 일의 자리', 5, 9),
            createBuilderSlot('b', '아랫수의 백의 자리', 5, 9),
          ],
          invalidMessage: '받아올림이 2번 이상 생기도록 다시 만들어 주세요.',
          validate: (left, right) => countCarries(left, right) >= 2,
        },
        {
          templateId: 'level5-alt-mid-mid',
          title: baseTitle,
          instruction: '받아올림 2번 이상 덧셈',
          helperText: '칸별 숫자 범위를 확인해 주세요.',
          op: '+',
          topTemplate: '5[a]7',
          bottomTemplate: '2[b]6',
          slots: [
            createBuilderSlot('a', '윗수의 십의 자리', 5, 9),
            createBuilderSlot('b', '아랫수의 십의 자리', 5, 9),
          ],
          invalidMessage: '받아올림이 2번 이상 생기도록 다시 만들어 주세요.',
          validate: (left, right) => countCarries(left, right) >= 2,
        },
        {
          templateId: 'level5-alt-top-hund-bottom-tens',
          title: baseTitle,
          instruction: '받아올림 2번 이상 덧셈',
          helperText: '칸별 숫자 범위를 확인해 주세요.',
          op: '+',
          topTemplate: '[a]89',
          bottomTemplate: '1[b]7',
          slots: [
            createBuilderSlot('a', '윗수의 백의 자리', 1, 7),
            createBuilderSlot('b', '아랫수의 십의 자리', 1, 9),
          ],
          invalidMessage: '받아올림이 2번 이상 생기도록 다시 만들어 주세요.',
          validate: (left, right) => countCarries(left, right) >= 2,
        },
        {
          templateId: 'level5-alt-mid-mid-2',
          title: baseTitle,
          instruction: '받아올림 2번 이상 덧셈',
          helperText: '칸별 숫자 범위를 확인해 주세요.',
          op: '+',
          topTemplate: '7[a]9',
          bottomTemplate: '1[b]4',
          slots: [
            createBuilderSlot('a', '윗수의 십의 자리', 5, 9),
            createBuilderSlot('b', '아랫수의 십의 자리', 4, 9),
          ],
          invalidMessage: '받아올림이 2번 이상 생기도록 다시 만들어 주세요.',
          validate: (left, right) => countCarries(left, right) >= 2,
        },
      ]);
      break;
    case 6:
      builder = pickBuilderTemplate(level, [
        {
          templateId: 'level6-top-tens-bottom-hund',
          title: baseTitle,
          instruction: '받아내림 2번 뺄셈',
          helperText: '칸별 숫자 범위를 확인해 주세요.',
          op: '-',
          topTemplate: '5[a]3',
          bottomTemplate: '[b]48',
          slots: [
            createBuilderSlot('a', '윗수의 십의 자리', 0, 4),
            createBuilderSlot('b', '아랫수의 백의 자리', 2, 4),
          ],
          invalidMessage: '받아내림이 2번 생기도록 다시 만들어 주세요.',
          validate: (left, right) => left > right && countBorrows(left, right) === 2,
        },
        {
          templateId: 'level6-top-hund-bottom-hund',
          title: baseTitle,
          instruction: '받아내림 2번 뺄셈',
          helperText: '칸별 숫자 범위를 확인해 주세요.',
          op: '-',
          topTemplate: '[a]30',
          bottomTemplate: '[b]48',
          slots: [
            createBuilderSlot('a', '윗수의 백의 자리', 5, 9),
            createBuilderSlot('b', '아랫수의 백의 자리', 2, 4),
          ],
          invalidMessage: '받아내림이 2번 생기도록 다시 만들어 주세요.',
          validate: (left, right) => left > right && countBorrows(left, right) === 2,
        },
        {
          templateId: 'level6-mid-mid',
          title: baseTitle,
          instruction: '받아내림 2번 뺄셈',
          helperText: '칸별 숫자 범위를 확인해 주세요.',
          op: '-',
          topTemplate: '6[a]2',
          bottomTemplate: '3[b]7',
          slots: [
            createBuilderSlot('a', '윗수의 십의 자리', 0, 4),
            createBuilderSlot('b', '아랫수의 십의 자리', 5, 9),
          ],
          invalidMessage: '받아내림이 2번 생기도록 다시 만들어 주세요.',
          validate: (left, right) => left > right && countBorrows(left, right) === 2,
        },
        {
          templateId: 'level6-alt-mid-mid',
          title: baseTitle,
          instruction: '받아내림 2번 뺄셈',
          helperText: '칸별 숫자 범위를 확인해 주세요.',
          op: '-',
          topTemplate: '7[a]1',
          bottomTemplate: '4[b]8',
          slots: [
            createBuilderSlot('a', '윗수의 십의 자리', 0, 4),
            createBuilderSlot('b', '아랫수의 십의 자리', 5, 9),
          ],
          invalidMessage: '받아내림이 2번 생기도록 다시 만들어 주세요.',
          validate: (left, right) => left > right && countBorrows(left, right) === 2,
        },
        {
          templateId: 'level6-alt-top-hund-bottom-tens',
          title: baseTitle,
          instruction: '받아내림 2번 뺄셈',
          helperText: '칸별 숫자 범위를 확인해 주세요.',
          op: '-',
          topTemplate: '[a]20',
          bottomTemplate: '3[b]6',
          slots: [
            createBuilderSlot('a', '윗수의 백의 자리', 5, 9),
            createBuilderSlot('b', '아랫수의 십의 자리', 5, 9),
          ],
          invalidMessage: '받아내림이 2번 생기도록 다시 만들어 주세요.',
          validate: (left, right) => left > right && countBorrows(left, right) === 2,
        },
        {
          templateId: 'level6-alt-top-hund-bottom-tens-2',
          title: baseTitle,
          instruction: '받아내림 2번 뺄셈',
          helperText: '칸별 숫자 범위를 확인해 주세요.',
          op: '-',
          topTemplate: '[a]41',
          bottomTemplate: '2[b]8',
          slots: [
            createBuilderSlot('a', '윗수의 백의 자리', 4, 9),
            createBuilderSlot('b', '아랫수의 십의 자리', 4, 9),
          ],
          invalidMessage: '받아내림이 2번 생기도록 다시 만들어 주세요.',
          validate: (left, right) => left > right && countBorrows(left, right) === 2,
        },
      ]);
      break;
    case 7:
      builder = sample([
        {
          title: baseTitle,
          instruction: '자유롭게 덧셈 만들기',
          helperText: '칸별 숫자 범위를 확인해 주세요.',
          op: '+',
          topTemplate: '[a]64',
          bottomTemplate: '2[b]7',
          slots: [
            createBuilderSlot('a', '윗수의 백의 자리', 1, 6),
            createBuilderSlot('b', '아랫수의 십의 자리', 0, 9),
          ],
          invalidMessage: '빈칸을 채워 덧셈 문제를 완성해 주세요.',
          validate: (left, right) => left + right <= 999,
        },
        {
          title: baseTitle,
          instruction: '자유롭게 덧셈 만들기',
          helperText: '칸별 숫자 범위를 확인해 주세요.',
          op: '+',
          topTemplate: '36[a]',
          bottomTemplate: '[b]74',
          slots: [
            createBuilderSlot('a', '윗수의 일의 자리', 0, 9),
            createBuilderSlot('b', '아랫수의 백의 자리', 1, 5),
          ],
          invalidMessage: '빈칸을 채워 덧셈 문제를 완성해 주세요.',
          validate: (left, right) => left + right <= 999,
        },
        {
          title: baseTitle,
          instruction: '자유롭게 뺄셈 만들기',
          helperText: '칸별 숫자 범위를 확인해 주세요.',
          op: '-',
          topTemplate: '[a]45',
          bottomTemplate: '3[b]2',
          slots: [
            createBuilderSlot('a', '윗수의 백의 자리', 4, 9),
            createBuilderSlot('b', '아랫수의 십의 자리', 0, 4),
          ],
          invalidMessage: '뺄셈이 되도록 알맞은 수를 넣어 주세요.',
          validate: (left, right) => left > right,
        },
        {
          title: baseTitle,
          instruction: '자유롭게 뺄셈 만들기',
          helperText: '칸별 숫자 범위를 확인해 주세요.',
          op: '-',
          topTemplate: '8[a]4',
          bottomTemplate: '[b]35',
          slots: [
            createBuilderSlot('a', '윗수의 십의 자리', 0, 9),
            createBuilderSlot('b', '아랫수의 백의 자리', 1, 7),
          ],
          invalidMessage: '뺄셈이 되도록 알맞은 수를 넣어 주세요.',
          validate: (left, right) => left > right,
        },
      ]);
      break;
    case 8:
      builder = sample([
        {
          title: '해석형 문항 만들기',
          instruction: '해석형 덧셈 만들기',
          helperText: '칸별 숫자 범위를 확인해 주세요.',
          op: '+',
          topTemplate: '37[a]',
          bottomTemplate: '24[b]',
          slots: [
            createBuilderSlot('a', '윗수의 일의 자리', 0, 9),
            createBuilderSlot('b', '아랫수의 일의 자리', 0, 9),
          ],
          invalidMessage: '빈칸에 숫자를 넣어 해석형 문항을 완성해 주세요.',
          validate: (left, right) => left + right <= 999,
        },
        {
          title: '해석형 문항 만들기',
          instruction: '해석형 덧셈 만들기',
          helperText: '칸별 숫자 범위를 확인해 주세요.',
          op: '+',
          topTemplate: '4[a]6',
          bottomTemplate: '25[b]',
          slots: [
            createBuilderSlot('a', '윗수의 십의 자리', 0, 9),
            createBuilderSlot('b', '아랫수의 일의 자리', 0, 9),
          ],
          invalidMessage: '빈칸에 숫자를 넣어 해석형 문항을 완성해 주세요.',
          validate: (left, right) => left + right <= 999,
        },
        {
          title: '해석형 문항 만들기',
          instruction: '해석형 덧셈 만들기',
          helperText: '칸별 숫자 범위를 확인해 주세요.',
          op: '+',
          topTemplate: '[a]58',
          bottomTemplate: '24[b]',
          slots: [
            createBuilderSlot('a', '윗수의 백의 자리', 1, 6),
            createBuilderSlot('b', '아랫수의 일의 자리', 0, 9),
          ],
          invalidMessage: '빈칸에 숫자를 넣어 해석형 문항을 완성해 주세요.',
          validate: (left, right) => left + right <= 999,
        },
        {
          title: '해석형 문항 만들기',
          instruction: '해석형 덧셈 만들기',
          helperText: '칸별 숫자 범위를 확인해 주세요.',
          op: '+',
          topTemplate: '5[a]0',
          bottomTemplate: '3[b]7',
          slots: [
            createBuilderSlot('a', '윗수의 십의 자리', 0, 5),
            createBuilderSlot('b', '아랫수의 십의 자리', 0, 4),
          ],
          invalidMessage: '빈칸에 숫자를 넣어 해석형 문항을 완성해 주세요.',
          validate: (left, right) => left + right <= 999,
        },
      ]);
      break;
    case 9:
    default:
      builder = sample([
        {
          title: '해석형 문항 만들기',
          instruction: '해석형 뺄셈 만들기',
          helperText: '칸별 숫자 범위를 확인해 주세요.',
          op: '-',
          topTemplate: '94[a]',
          bottomTemplate: '3[b]6',
          slots: [
            createBuilderSlot('a', '윗수의 일의 자리', 0, 9),
            createBuilderSlot('b', '아랫수의 십의 자리', 0, 9),
          ],
          invalidMessage: '뺄셈이 되도록 빈칸의 수를 다시 골라 주세요.',
          validate: (left, right) => left > right,
        },
        {
          title: '해석형 문항 만들기',
          instruction: '해석형 뺄셈 만들기',
          helperText: '칸별 숫자 범위를 확인해 주세요.',
          op: '-',
          topTemplate: '7[a]5',
          bottomTemplate: '[b]38',
          slots: [
            createBuilderSlot('a', '윗수의 십의 자리', 0, 9),
            createBuilderSlot('b', '아랫수의 백의 자리', 1, 6),
          ],
          invalidMessage: '뺄셈이 되도록 빈칸의 수를 다시 골라 주세요.',
          validate: (left, right) => left > right,
        },
        {
          title: '해석형 문항 만들기',
          instruction: '해석형 뺄셈 만들기',
          helperText: '칸별 숫자 범위를 확인해 주세요.',
          op: '-',
          topTemplate: '[a]60',
          bottomTemplate: '2[b]4',
          slots: [
            createBuilderSlot('a', '윗수의 백의 자리', 4, 9),
            createBuilderSlot('b', '아랫수의 십의 자리', 0, 9),
          ],
          invalidMessage: '뺄셈이 되도록 빈칸의 수를 다시 골라 주세요.',
          validate: (left, right) => left > right,
        },
        {
          title: '해석형 문항 만들기',
          instruction: '해석형 뺄셈 만들기',
          helperText: '칸별 숫자 범위를 확인해 주세요.',
          op: '-',
          topTemplate: '93[a]',
          bottomTemplate: '4[b]2',
          slots: [
            createBuilderSlot('a', '윗수의 일의 자리', 0, 9),
            createBuilderSlot('b', '아랫수의 십의 자리', 0, 8),
          ],
          invalidMessage: '뺄셈이 되도록 빈칸의 수를 다시 골라 주세요.',
          validate: (left, right) => left > right,
        },
      ]);
      break;
  }

  return {
    text: '',
    prompt: builder.title,
    answer: 0,
    kind: 'builder',
    builder,
  };
}

interface RegularProblemOptions {
  requireZeroTensBorrow?: boolean;
}

function isZeroTensBorrowCase(minuend: number, subtrahend: number) {
  const tensDigit = Math.floor((minuend % 100) / 10);
  const onesDigit = minuend % 10;
  const subtrahendOnesDigit = subtrahend % 10;

  return tensDigit === 0 && onesDigit < subtrahendOnesDigit;
}

function generateRegularProblem(level: number, options: RegularProblemOptions = {}): Problem {
  const { requireZeroTensBorrow = false } = options;
  let a = 0, b = 0, answer = 0;
  let op: '+' | '-' = '+';
  let valid = false;

  if (level >= 8) {
    const storyProblem = generateStoryProblemNumbers(level);
    return createStoryProblem(level, storyProblem.a, storyProblem.b, storyProblem.op, storyProblem.answer);
  }

  while (!valid) {
    a = Math.floor(Math.random() * 900) + 100; b = Math.floor(Math.random() * 900) + 100;
    if (level === 1) { if (a + b <= 999 && countCarries(a, b) === 0) { valid = true; answer = a + b; op = '+'; } }
    else if (level === 2) { if (a > b && countBorrows(a, b) === 0) { valid = true; answer = a - b; op = '-'; } }
    else if (level === 3) { if (a + b <= 999 && countCarries(a, b) === 1) { valid = true; answer = a + b; op = '+'; } }
    else if (level === 4) { if (a > b && countBorrows(a, b) === 1) { valid = true; answer = a - b; op = '-'; } }
    else if (level === 5) { const carries = countCarries(a, b); if (a + b <= 1998 && (carries === 2 || carries === 3)) { valid = true; answer = a + b; op = '+'; } }
    else if (level === 6) {
      if (
        a > b &&
        countBorrows(a, b) === 2 &&
        (!requireZeroTensBorrow || isZeroTensBorrowCase(a, b))
      ) {
        valid = true; answer = a - b; op = '-';
      }
    }
    else {
      const isAdd = requireZeroTensBorrow ? false : Math.random() > 0.5;
      if (isAdd) { answer = a + b; op = '+'; valid = true; }
      else if (a > b && (!requireZeroTensBorrow || isZeroTensBorrowCase(a, b))) {
        answer = a - b; op = '-'; valid = true;
      }
    }
  }
  return createEquationProblem(a, b, op, answer);
}

function getProblemForTurn(unitId: LearningUnitId, level: number, opponentHP: number, problemSequence?: number): Problem {
  if (unitId === 'unit3') {
    return generateUnit3Problem(level, opponentHP, problemSequence);
  }

  return isFinalBuilderTurn(level, opponentHP) ? createBuilderProblem(level) : generateRegularProblem(level);
}

function fillBuilderTemplate(template: string, slotValues: Record<string, string>, emptyValue = '') {
  return template.replace(/\[([a-z]+)\]/g, (_, slotId: string) => slotValues[slotId] ?? emptyValue);
}

function parseProblemExpression(text: string) {
  const match = text.match(/(\d+)\s*([+-])\s*(\d+)/);

  if (!match) {
    return null;
  }

  return {
    left: Number(match[1]),
    op: match[2] as '+' | '-',
    right: Number(match[3]),
  };
}

function isZeroTensBorrowProblem(problem: Problem) {
  const expression = parseProblemExpression(problem.text);

  if (!expression || expression.op !== '-') {
    return false;
  }

  return isZeroTensBorrowCase(expression.left, expression.right);
}

function evaluateBuilderProblem(problem: Problem, slotValues: Record<string, string>) {
  if (problem.kind !== 'builder' || !problem.builder) {
    return null;
  }

  for (const slot of problem.builder.slots) {
    const value = slotValues[slot.id];

    if (!value) {
      return { status: 'incomplete' as const, message: '빈칸에 숫자를 넣어주세요.' };
    }

    if (!slot.digits.includes(value)) {
      return { status: 'invalid' as const, message: '제시된 범위 안의 숫자만 넣을 수 있어요.' };
    }
  }

  const leftText = fillBuilderTemplate(problem.builder.topTemplate, slotValues);
  const rightText = fillBuilderTemplate(problem.builder.bottomTemplate, slotValues);
  const left = Number(leftText);
  const right = Number(rightText);

  if (!Number.isFinite(left) || !Number.isFinite(right)) {
    return { status: 'invalid' as const, message: '빈칸의 숫자를 다시 확인해 주세요.' };
  }

  if (!problem.builder.validate(left, right)) {
    return { status: 'invalid' as const, message: problem.builder.invalidMessage };
  }

  return {
    status: 'ready' as const,
    text: `${left} ${problem.builder.op} ${right}`,
    answer: problem.builder.op === '+' ? left + right : left - right,
  };
}

function shuffleNumbers(values: number[]) {
  const next = [...values];

  for (let index = next.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [next[index], next[swapIndex]] = [next[swapIndex], next[index]];
  }

  return next;
}

function randomIntInRange(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isEstimationBoundaryValue(value: number) {
  const lastTwoDigits = Math.abs(value) % ESTIMATION_ROUNDING_UNIT;
  return lastTwoDigits >= ESTIMATION_BOUNDARY_RANGE_MIN && lastTwoDigits <= ESTIMATION_BOUNDARY_RANGE_MAX;
}

const PROMPT_EMPHASIS_CLASS_MAP: Record<string, string> = {
  정확하게: 'font-black text-rose-600',
  편하게: 'font-black text-emerald-600',
};

function renderPromptWithHighlight(text: string, shouldHighlight = true) {
  return text
    .split(/(\[\[[^\]]+\]\]|\d+)/)
    .filter((part) => part.length > 0)
    .map((part, index) => {
      const emphasisMatch = part.match(/^\[\[([^\]]+)\]\]$/);

      if (emphasisMatch) {
        const emphasisText = emphasisMatch[1];
        return (
          <span
            key={`${emphasisText}-${index}`}
            className={PROMPT_EMPHASIS_CLASS_MAP[emphasisText] ?? 'font-black text-violet-600'}
          >
            {emphasisText}
          </span>
        );
      }

      if (shouldHighlight && /^\d+$/.test(part)) {
        return (
          <span key={`${part}-${index}`} className="font-black text-sky-600">
            {part}
          </span>
        );
      }

      return <React.Fragment key={`${part}-${index}`}>{part}</React.Fragment>;
    });
}

function getStoryPromptLines(prompt: string) {
  return prompt
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean);
}

function splitStoryPromptSections(prompt: string) {
  const lines = getStoryPromptLines(prompt);
  const optionStartIndex = lines.findIndex((line) => /^\d+\)/.test(line));

  if (optionStartIndex === -1) {
    return {
      introLines: lines,
      optionLines: [] as string[],
    };
  }

  const optionLines = lines.slice(optionStartIndex);
  if (!optionLines.every((line) => /^\d+\)/.test(line))) {
    return {
      introLines: lines,
      optionLines: [] as string[],
    };
  }

  return {
    introLines: lines.slice(0, optionStartIndex),
    optionLines,
  };
}

function formatDigitChoices(digits: string[]) {
  if (digits.length > 1 && Number(digits[digits.length - 1]) - Number(digits[0]) === digits.length - 1) {
    return `${digits[0]}~${digits[digits.length - 1]}`;
  }

  return digits.join(', ');
}

function BuilderNumberRow({
  template,
  slotsById,
  slotValues,
  onSlotChange,
}: {
  template: string;
  slotsById: Record<string, BuildSlotConfig>;
  slotValues: Record<string, string>;
  onSlotChange: (slotId: string, nextValue: string) => void;
}) {
  const tokens = template.match(/\[[a-z]+\]|./g) ?? [];

  return (
    <div className="flex flex-wrap items-center justify-end gap-2 sm:gap-3">
      {tokens.map((token, index) => {
        const slotMatch = token.match(/^\[([a-z]+)\]$/);

        if (slotMatch) {
          const slotId = slotMatch[1];
          const slot = slotsById[slotId];

          if (!slot) {
            return (
              <span
                key={`${slotId}-${index}`}
                className="flex h-14 w-14 items-center justify-center rounded-[22px] border-4 border-rose-200 bg-rose-50 text-3xl font-black text-rose-500 sm:h-20 sm:w-20 sm:rounded-[28px] sm:text-5xl md:h-24 md:w-24 md:text-6xl"
                title="잘못된 빈칸 설정"
              >
                ?
              </span>
            );
          }

          return (
            <input
              key={`${slotId}-${index}`}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={slotValues[slotId] ?? ''}
              onChange={(event) => onSlotChange(slotId, event.target.value)}
              placeholder="?"
              aria-label={slot.label}
              className="h-14 w-14 rounded-[22px] border-4 border-sky-200 bg-sky-50 text-center text-3xl font-black text-sky-700 outline-none transition focus:border-sky-500 sm:h-20 sm:w-20 sm:rounded-[28px] sm:text-5xl md:h-24 md:w-24 md:text-6xl"
              title={`${slot.label}: ${formatDigitChoices(slot.digits)} 중에서 넣기`}
            />
          );
        }

        return (
          <span
            key={`${token}-${index}`}
            className="flex h-14 w-14 items-center justify-center rounded-[22px] border-4 border-slate-200 bg-slate-50 text-3xl font-black text-slate-900 sm:h-20 sm:w-20 sm:rounded-[28px] sm:text-5xl md:h-24 md:w-24 md:text-6xl"
          >
            {token}
          </span>
        );
      })}
    </div>
  );
}

function MeasurementObjectIllustration({
  kind,
  x,
  y,
  width,
}: {
  kind: MeasurementObjectKind;
  label: string;
  x: number;
  y: number;
  width: number;
}) {
  const left = x;
  const right = x + width;

  if (kind === 'seed') {
    const centerY = y + 16;
    const d = [
      `M ${left} ${centerY}`,
      `C ${x + width * 0.16} ${y + 4}, ${x + width * 0.42} ${y + 2}, ${right} ${centerY}`,
      `C ${x + width * 0.42} ${y + 30}, ${x + width * 0.16} ${y + 28}, ${left} ${centerY}`,
      'Z',
    ].join(' ');

    return (
      <g>
        <ellipse cx={x + width / 2} cy={y + 36} rx={Math.max(10, width * 0.26)} ry={3.4} fill="#d7dde5" opacity="0.18" />
        <path d={d} fill="#8f4a25" stroke="#6e3417" strokeWidth="2.4" vectorEffect="non-scaling-stroke" />
        <path
          d={`M ${x + width * 0.22} ${y + 10} C ${x + width * 0.34} ${y + 6}, ${x + width * 0.5} ${y + 6}, ${x + width * 0.68} ${y + 12}`}
          fill="none"
          stroke="#c78861"
          strokeWidth="1.7"
          strokeLinecap="round"
          opacity="0.75"
          vectorEffect="non-scaling-stroke"
        />
      </g>
    );
  }

  if (kind === 'rice') {
    const centerY = y + 18;
    const d = [
      `M ${left} ${centerY}`,
      `C ${x + width * 0.14} ${y + 5}, ${x + width * 0.38} ${y + 3}, ${right} ${centerY}`,
      `C ${x + width * 0.38} ${y + 31}, ${x + width * 0.14} ${y + 29}, ${left} ${centerY}`,
      'Z',
    ].join(' ');

    return (
      <g>
        <ellipse cx={x + width / 2} cy={y + 38} rx={Math.max(9, width * 0.2)} ry={3} fill="#d7dde5" opacity="0.16" />
        <path d={d} fill="#fff8ec" stroke="#d7c7a9" strokeWidth="2.2" vectorEffect="non-scaling-stroke" />
        <path
          d={`M ${x + width * 0.18} ${y + 15} C ${x + width * 0.34} ${y + 11}, ${x + width * 0.54} ${y + 11}, ${x + width * 0.74} ${y + 17}`}
          fill="none"
          stroke="#ffffff"
          strokeWidth="1.6"
          strokeLinecap="round"
          opacity="0.92"
          vectorEffect="non-scaling-stroke"
        />
      </g>
    );
  }

  if (kind === 'paperClip') {
    const outerStroke = 6.2;
    const innerStroke = 5;
    const outerX = x + outerStroke / 2;
    const outerY = y + 8;
    const outerWidth = width - outerStroke;
    const outerHeight = 40;
    const innerX = x + width * 0.22;
    const innerY = y + 17;
    const innerWidth = width * 0.45;
    const innerHeight = 22;
    const outerGapX = outerX + outerWidth;
    const innerGapX = innerX + innerWidth;

    return (
      <g>
        <ellipse cx={x + width / 2} cy={y + 58} rx={width * 0.22} ry={3.1} fill="#d7dde5" opacity="0.16" />
        <rect
          x={outerX}
          y={outerY}
          width={outerWidth}
          height={outerHeight}
          rx="18"
          fill="none"
          stroke="#98a4b7"
          strokeWidth={outerStroke}
          vectorEffect="non-scaling-stroke"
        />
        <rect
          x={innerX}
          y={innerY}
          width={innerWidth}
          height={innerHeight}
          rx="12"
          fill="none"
          stroke="#bcc5d4"
          strokeWidth={innerStroke}
          vectorEffect="non-scaling-stroke"
        />
        <path
          d={`M ${outerGapX} ${outerY + 5} V ${outerY + 19}`}
          stroke="#fbfdff"
          strokeWidth="8"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d={`M ${innerGapX} ${innerY + 5} V ${innerY + 14}`}
          stroke="#fbfdff"
          strokeWidth="7"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
      </g>
    );
  }

  if (kind === 'chocolate') {
    const top = y + 12;
    const height = 24;
    const segmentCount = Math.max(2, Math.min(4, Math.floor(width / 22)));

    return (
      <g>
        <ellipse cx={x + width / 2} cy={y + 41} rx={Math.max(10, width * 0.24)} ry={3.1} fill="#d7dde5" opacity="0.16" />
        <rect x={x} y={top} width={width} height={height} rx="4" fill="#8d4f2e" stroke="#67351a" strokeWidth="2.3" vectorEffect="non-scaling-stroke" />
        <path d={`M ${x + 4} ${top + 4} H ${x + width - 4}`} stroke="#b87752" strokeWidth="1.5" opacity="0.8" vectorEffect="non-scaling-stroke" />
        {Array.from({ length: segmentCount - 1 }, (_, index) => {
          const segmentX = x + ((index + 1) * width) / segmentCount;

          return (
            <line
              key={`chocolate-segment-${index}`}
              x1={segmentX}
              y1={top + 2}
              x2={segmentX}
              y2={top + height - 2}
              stroke="#6c391d"
              strokeWidth="1.7"
              opacity="0.9"
              vectorEffect="non-scaling-stroke"
            />
          );
        })}
      </g>
    );
  }

  if (kind === 'toothpick') {
    const centerY = y + 24;
    const halfHeight = 4.5;
    const tipWidth = Math.max(14, width * 0.035);

    return (
      <g>
        <ellipse cx={x + width / 2} cy={y + 38} rx={width * 0.24} ry={2.6} fill="#d7dde5" opacity="0.12" />
        <path
          d={[
            `M ${left} ${centerY}`,
            `L ${left + tipWidth} ${centerY - halfHeight}`,
            `H ${right - tipWidth}`,
            `L ${right} ${centerY}`,
            `L ${right - tipWidth} ${centerY + halfHeight}`,
            `H ${left + tipWidth}`,
            'Z',
          ].join(' ')}
          fill="#e7c08b"
          stroke="#b9874f"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d={`M ${left + tipWidth + 4} ${centerY - 1.4} H ${right - tipWidth - 4}`}
          stroke="#f6d8aa"
          strokeWidth="1.2"
          opacity="0.9"
          vectorEffect="non-scaling-stroke"
        />
      </g>
    );
  }

  if (kind === 'eraser') {
    const bodyTop = y + 3;
    const bodyHeight = 58;
    const bodyBottom = bodyTop + bodyHeight;
    const wrapperX = x;
    const wrapperWidth = width * 0.84;
    const wrapperTop = y;
    const wrapperHeight = 66;
    const labelX = wrapperX + wrapperWidth * 0.22;
    const labelWidth = wrapperWidth * 0.56;
    const labelY = y + 18;
    const labelHeight = 30;

    return (
      <g>
        <ellipse cx={x + width / 2} cy={y + 73} rx={width * 0.31} ry={5.8} fill="#d7dde5" opacity="0.18" />
        <rect
          x={x}
          y={bodyTop}
          width={width}
          height={bodyHeight}
          rx="14"
          fill="#83c85d"
          stroke="#5d9b3e"
          strokeWidth="2.4"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d={`M ${x + 8} ${bodyTop + 7} H ${x + width - 8}`}
          stroke="#c8eca7"
          strokeWidth="2.3"
          opacity="0.75"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d={`M ${x + 8} ${bodyBottom - 8} H ${x + width - 8}`}
          stroke="#649f42"
          strokeWidth="1.9"
          opacity="0.28"
          vectorEffect="non-scaling-stroke"
        />
        <rect
          x={wrapperX}
          y={wrapperTop}
          width={wrapperWidth}
          height={wrapperHeight}
          rx="8"
          fill="#f5efdf"
          stroke="#cbbb90"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d={`M ${wrapperX + wrapperWidth * 0.08} ${wrapperTop + 5} V ${wrapperTop + wrapperHeight - 5}`}
          stroke="#d7c79e"
          strokeWidth="1.2"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d={`M ${wrapperX + wrapperWidth - wrapperWidth * 0.08} ${wrapperTop + 5} V ${wrapperTop + wrapperHeight - 5}`}
          stroke="#d7c79e"
          strokeWidth="1.2"
          vectorEffect="non-scaling-stroke"
        />
        <rect
          x={labelX}
          y={labelY}
          width={labelWidth}
          height={labelHeight}
          rx="7"
          fill="#98cf6d"
          stroke="#6aa548"
          strokeWidth="1.4"
          vectorEffect="non-scaling-stroke"
        />
        <text
          x={x + width / 2}
          y={labelY + 20}
          textAnchor="middle"
          fontSize={Math.min(16, Math.max(10, width * 0.054))}
          fontWeight="800"
          fill="#5a7c3d"
        >
          지우개
        </text>
      </g>
    );
  }

  if (kind === 'leaf') {
    const centerY = y + 25;
    const d = [
      `M ${left} ${centerY}`,
      `C ${x + width * 0.18} ${y + 4}, ${x + width * 0.42} ${y + 4}, ${x + width * 0.6} ${centerY - 3}`,
      `C ${x + width * 0.75} ${y + 6}, ${x + width * 0.88} ${y + 11}, ${right} ${centerY}`,
      `C ${x + width * 0.88} ${y + 39}, ${x + width * 0.75} ${y + 44}, ${x + width * 0.6} ${centerY + 3}`,
      `C ${x + width * 0.42} ${y + 46}, ${x + width * 0.18} ${y + 46}, ${left} ${centerY}`,
      'Z',
    ].join(' ');

    return (
      <g>
        <ellipse cx={x + width / 2} cy={y + 54} rx={width * 0.28} ry={3.4} fill="#d7dde5" opacity="0.18" />
        <path d={d} fill="#9ad16a" stroke="#5d9938" strokeWidth="2.7" vectorEffect="non-scaling-stroke" />
        <path d={`M ${left + 4} ${centerY} C ${x + width * 0.34} ${centerY - 3}, ${x + width * 0.64} ${centerY - 2}, ${right - 6} ${centerY}`} fill="none" stroke="#6aa547" strokeWidth="2.1" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
        <path d={`M ${x + width * 0.3} ${centerY - 1} C ${x + width * 0.26} ${centerY - 7}, ${x + width * 0.22} ${centerY - 11}, ${x + width * 0.17} ${centerY - 14}`} fill="none" stroke="#84bb58" strokeWidth="1.4" strokeLinecap="round" opacity="0.9" vectorEffect="non-scaling-stroke" />
        <path d={`M ${x + width * 0.55} ${centerY + 1} C ${x + width * 0.58} ${centerY + 7}, ${x + width * 0.64} ${centerY + 12}, ${x + width * 0.71} ${centerY + 14}`} fill="none" stroke="#84bb58" strokeWidth="1.4" strokeLinecap="round" opacity="0.9" vectorEffect="non-scaling-stroke" />
        <path d={`M ${x + width * 0.58} ${centerY - 1} C ${x + width * 0.63} ${centerY - 8}, ${x + width * 0.7} ${centerY - 12}, ${x + width * 0.76} ${centerY - 15}`} fill="none" stroke="#84bb58" strokeWidth="1.4" strokeLinecap="round" opacity="0.9" vectorEffect="non-scaling-stroke" />
      </g>
    );
  }

  if (kind === 'crayon') {
    const top = y + 5;
    const bottom = y + 53;
    const centerY = (top + bottom) / 2;
    const tipWidth = Math.max(22, width * 0.14);
    const tailBevel = Math.max(8, width * 0.035);
    const bodyStart = x + tipWidth;
    const coreStart = x + Math.max(7, tipWidth * 0.28);

    return (
      <g>
        <ellipse cx={x + width / 2} cy={y + 61} rx={width * 0.25} ry={4.4} fill="#d7dde5" opacity="0.16" />
        <path
          d={`M ${x} ${centerY} L ${bodyStart} ${top} L ${bodyStart} ${bottom} Z`}
          fill="#e9cfaa"
          stroke="#bb8e58"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d={[
            `M ${bodyStart} ${top}`,
            `H ${right - tailBevel}`,
            `L ${right} ${centerY}`,
            `L ${right - tailBevel} ${bottom}`,
            `H ${bodyStart}`,
            'Z',
          ].join(' ')}
          fill="#e25858"
          stroke="#b63e3e"
          strokeWidth="2.4"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d={`M ${bodyStart + 8} ${top + 8} H ${right - tailBevel - 8}`}
          stroke="#ffaaaa"
          strokeWidth="2.5"
          opacity="0.78"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d={`M ${bodyStart + 8} ${bottom - 9} H ${right - tailBevel - 8}`}
          stroke="#c84848"
          strokeWidth="2"
          opacity="0.34"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d={`M ${bodyStart + 12} ${top + 4} V ${bottom - 4}`}
          stroke="#cf4a4a"
          strokeWidth="1.5"
          opacity="0.46"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d={`M ${bodyStart + 20} ${top + 3} V ${bottom - 3}`}
          stroke="#cf4a4a"
          strokeWidth="1.3"
          opacity="0.34"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d={`M ${coreStart} ${centerY} L ${x} ${centerY}`}
          stroke="#7a2d2d"
          strokeWidth="2.4"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
      </g>
    );
  }

  if (kind === 'chalk') {
    const top = y + 12;
    const bottom = y + 34;
    const bevel = Math.max(8, width * 0.06);

    return (
      <g>
        <ellipse cx={x + width / 2} cy={y + 41} rx={width * 0.22} ry={3} fill="#d7dde5" opacity="0.14" />
        <path
          d={[
            `M ${left + bevel} ${top}`,
            `H ${right - bevel}`,
            `L ${right} ${y + 23}`,
            `L ${right - bevel} ${bottom}`,
            `H ${left + bevel}`,
            `L ${left} ${y + 23}`,
            'Z',
          ].join(' ')}
          fill="#fbfcff"
          stroke="#cfd8e3"
          strokeWidth="2.1"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d={`M ${left + bevel + 4} ${top + 4} H ${right - bevel - 4}`}
          stroke="#ffffff"
          strokeWidth="1.5"
          opacity="0.95"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d={`M ${left + bevel + 8} ${bottom - 5} H ${right - bevel - 8}`}
          stroke="#dbe4ef"
          strokeWidth="1.3"
          opacity="0.8"
          vectorEffect="non-scaling-stroke"
        />
      </g>
    );
  }

  if (kind === 'paperStrip') {
    const top = y + 11;
    const bottom = y + 33;
    const foldWidth = Math.min(12, width * 0.2);
    const d = [
      `M ${left} ${top}`,
      `H ${right - foldWidth}`,
      `L ${right} ${y + 22}`,
      `L ${right - foldWidth} ${bottom}`,
      `L ${left} ${bottom}`,
      'Z',
    ].join(' ');

    return (
      <g>
        <ellipse cx={x + width / 2} cy={y + 41} rx={width * 0.3} ry={3.1} fill="#d7dde5" opacity="0.16" />
        <path d={d} fill="#ff93b8" stroke="#d95784" strokeWidth="2.3" vectorEffect="non-scaling-stroke" />
        <path d={`M ${left + 3} ${y + 16} H ${right - foldWidth - 3}`} stroke="#ffd0e0" strokeWidth="1.8" opacity="0.95" vectorEffect="non-scaling-stroke" />
        <path d={`M ${right - foldWidth} ${top} L ${right - foldWidth} ${bottom}`} stroke="#e96e98" strokeWidth="1.4" opacity="0.75" vectorEffect="non-scaling-stroke" />
        <path d={`M ${right - foldWidth} ${top} L ${right} ${y + 22} L ${right - foldWidth} ${bottom}`} fill="#ff74a4" opacity="0.82" />
      </g>
    );
  }

  if (kind === 'pencil') {
    const top = y + 4;
    const bottom = y + 50;
    const centerY = (top + bottom) / 2;
    const eraserWidth = Math.max(16, width * 0.17);
    const ferruleWidth = Math.max(10, width * 0.1);
    const tipWidth = Math.max(20, width * 0.16);
    const woodStart = right - tipWidth;
    const leadStart = right - Math.max(6, tipWidth * 0.3);
    const bodyWidth = width - eraserWidth - ferruleWidth - tipWidth;

    return (
      <g>
        <ellipse cx={x + width / 2} cy={y + 58} rx={width * 0.28} ry={4.3} fill="#d7dde5" opacity="0.16" />
        <rect x={x} y={top} width={eraserWidth} height={bottom - top} rx="6" fill="#ee8ea5" stroke="#c96279" strokeWidth="1.9" vectorEffect="non-scaling-stroke" />
        <rect x={x + eraserWidth} y={top} width={ferruleWidth} height={bottom - top} fill="#d7dce4" stroke="#9da7b4" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
        <path d={`M ${x + eraserWidth + ferruleWidth * 0.5} ${top + 1} V ${bottom - 1}`} stroke="#aeb6c1" strokeWidth="1.1" vectorEffect="non-scaling-stroke" />
        <rect
          x={x + eraserWidth + ferruleWidth}
          y={top}
          width={bodyWidth}
          height={bottom - top}
          fill="#f2c347"
          stroke="#c79227"
          strokeWidth="1.9"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d={`M ${x + eraserWidth + ferruleWidth + 6} ${top + 7} H ${woodStart - 7}`}
          stroke="#ffe291"
          strokeWidth="1.9"
          opacity="0.85"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d={`M ${x + eraserWidth + ferruleWidth + 6} ${bottom - 8} H ${woodStart - 7}`}
          stroke="#d49a23"
          strokeWidth="1.7"
          opacity="0.28"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d={`M ${woodStart} ${top} L ${leadStart} ${centerY} L ${woodStart} ${bottom} Z`}
          fill="#ead0a8"
          stroke="#b98949"
          strokeWidth="1.7"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d={`M ${leadStart} ${centerY} L ${right} ${centerY}`}
          stroke="#45484e"
          strokeWidth="2.2"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
      </g>
    );
  }

  if (kind === 'stick') {
    return (
      <g>
        <ellipse cx={x + width / 2} cy={y + 42} rx={width * 0.26} ry={3.1} fill="#d7dde5" opacity="0.16" />
        <rect x={x} y={y + 11} width={width} height="18" rx="5" fill="#d9a067" stroke="#a86c38" strokeWidth="2.4" vectorEffect="non-scaling-stroke" />
        <path d={`M ${x + 4} ${y + 14} H ${x + width - 4}`} stroke="#efc08b" strokeWidth="1.7" opacity="0.7" vectorEffect="non-scaling-stroke" />
        {Array.from({ length: Math.max(3, Math.floor(width / 56)) }, (_, index) => {
          const lineX = x + 16 + index * ((width - 32) / Math.max(1, Math.max(3, Math.floor(width / 56)) - 1));
          return (
            <line
              key={`stick-line-${index}`}
              x1={lineX}
              y1={y + 13}
              x2={lineX}
              y2={y + 27}
              stroke="#bc804d"
              strokeWidth="1.5"
              opacity="0.72"
              vectorEffect="non-scaling-stroke"
            />
          );
        })}
      </g>
    );
  }

  return (
    <g>
      <ellipse cx={x + width / 2} cy={y + 40} rx={Math.max(10, width * 0.25)} ry={3} fill="#d7dde5" opacity="0.16" />
      <rect x={x} y={y + 12} width={width} height="22" rx="4" fill="#cfd9e6" stroke="#7b8ba0" strokeWidth="2" vectorEffect="non-scaling-stroke" />
    </g>
  );
}

function MeasurementProblemCard({ measurement }: { measurement: MeasurementProblemData }) {
  const millimeterWidth = 14.5;
  const leftPadding = 86;
  const rightPadding = 58;
  const rulerWidth = measurement.rulerCm * 10 * millimeterWidth;
  const svgWidth = leftPadding + rulerWidth + rightPadding;
  const svgHeight = 288;
  const rulerX = leftPadding;
  const rulerY = 166;
  const rulerHeight = 82;
  const startX = rulerX + measurement.startMm * millimeterWidth;
  const endX = startX + measurement.lengthMm * millimeterWidth;
  const objectY = 56;
  const gradientIdSuffix = `${measurement.objectKind}-${measurement.startMm}-${measurement.lengthMm}`;
  const rulerFillId = `measurement-ruler-fill-${gradientIdSuffix}`;
  const rulerHighlightId = `measurement-ruler-highlight-${gradientIdSuffix}`;
  const rulerClipId = `measurement-ruler-clip-${gradientIdSuffix}`;
  const rulerPath = [
    `M ${rulerX + 12} ${rulerY}`,
    `H ${rulerX + rulerWidth - 12}`,
    `Q ${rulerX + rulerWidth} ${rulerY} ${rulerX + rulerWidth} ${rulerY + 12}`,
    `V ${rulerY + rulerHeight - 10}`,
    `Q ${rulerX + rulerWidth} ${rulerY + rulerHeight} ${rulerX + rulerWidth - 12} ${rulerY + rulerHeight}`,
    `H ${rulerX + 12}`,
    `Q ${rulerX} ${rulerY + rulerHeight} ${rulerX} ${rulerY + rulerHeight - 10}`,
    `V ${rulerY + 12}`,
    `Q ${rulerX} ${rulerY} ${rulerX + 12} ${rulerY}`,
    'Z',
  ].join(' ');

  return (
    <div className="mx-auto flex w-full max-w-[56rem] flex-col gap-4 text-left text-slate-900 sm:gap-5">
      <div className="rounded-[2rem] border border-slate-200 bg-slate-50/85 px-4 py-4 shadow-sm sm:px-6 sm:py-5 md:px-8 md:py-7">
        <p className="text-[1.1rem] font-black leading-[1.5] text-slate-900 sm:text-[1.4rem] md:text-[1.85rem]">
          {measurement.title}
        </p>

        <div className="mt-4 overflow-hidden rounded-[1.75rem] border border-sky-200 bg-white p-3 shadow-[inset_0_2px_14px_rgba(148,163,184,0.12)] sm:p-4">
          <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="block w-full" role="img" aria-label={`${measurement.objectLabel}와 자가 함께 있는 길이 재기 그림`}>
            <defs>
              <linearGradient id={rulerFillId} x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#e4f5ff" />
                <stop offset="56%" stopColor="#d4ebfb" />
                <stop offset="100%" stopColor="#c5e1f4" />
              </linearGradient>
              <linearGradient id={rulerHighlightId} x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.92" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
              </linearGradient>
              <clipPath id={rulerClipId}>
                <path d={rulerPath} />
              </clipPath>
            </defs>
            <rect x={rulerX - 30} y="26" width={rulerWidth + 60} height="96" rx="22" fill="#fbfdff" stroke="#e3f0f8" strokeWidth="1.6" />
            <line
              x1={startX}
              y1="36"
              x2={startX}
              y2={rulerY - 12}
              stroke="#ff63b3"
              strokeWidth="3.4"
              strokeDasharray="8 7"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
            <line
              x1={endX}
              y1="36"
              x2={endX}
              y2={rulerY - 12}
              stroke="#ff63b3"
              strokeWidth="3.4"
              strokeDasharray="8 7"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />

            <MeasurementObjectIllustration
              kind={measurement.objectKind}
              label={measurement.objectLabel}
              x={startX}
              y={objectY}
              width={measurement.lengthMm * millimeterWidth}
            />

            <path d={rulerPath} fill={`url(#${rulerFillId})`} stroke="#6f96b3" strokeWidth="4.2" vectorEffect="non-scaling-stroke" />
            <g clipPath={`url(#${rulerClipId})`} opacity="0.52">
              {Array.from({ length: measurement.rulerCm }, (_, centimeter) => (
                <rect
                  key={`ruler-band-${centimeter}`}
                  x={rulerX + centimeter * 10 * millimeterWidth}
                  y={rulerY + 2}
                  width={10 * millimeterWidth}
                  height={rulerHeight - 8}
                  fill={centimeter % 2 === 0 ? '#d9eefc' : '#cde5f6'}
                />
              ))}
            </g>
            <path
              d={`M ${rulerX + 8} ${rulerY + 9} H ${rulerX + rulerWidth - 8}`}
              stroke={`url(#${rulerHighlightId})`}
              strokeWidth="5"
              opacity="0.95"
              vectorEffect="non-scaling-stroke"
            />
            <path
              d={`M ${rulerX + 10} ${rulerY + rulerHeight - 21} H ${rulerX + rulerWidth - 10}`}
              stroke="#aac7dc"
              strokeWidth="2.4"
              opacity="0.85"
              vectorEffect="non-scaling-stroke"
            />

            {Array.from({ length: measurement.rulerCm * 10 + 1 }, (_, tickIndex) => {
              const tickX = rulerX + tickIndex * millimeterWidth;
              const isCentimeter = tickIndex % 10 === 0;
              const isHalfCentimeter = tickIndex % 5 === 0;
              const tickHeight = isCentimeter ? 40 : isHalfCentimeter ? 28 : 16;

              return (
                <line
                  key={`tick-${tickIndex}`}
                  x1={tickX}
                  y1={rulerY + 6}
                  x2={tickX}
                  y2={rulerY + 6 + tickHeight}
                  stroke="#264a67"
                  strokeWidth={isCentimeter ? 3 : isHalfCentimeter ? 2.2 : 1.55}
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                />
              );
            })}

            {Array.from({ length: measurement.rulerCm + 1 }, (_, centimeter) => {
              const isFirst = centimeter === 0;
              const isLast = centimeter === measurement.rulerCm;
              const labelX = isFirst
                ? rulerX + 1
                : isLast
                  ? rulerX + centimeter * 10 * millimeterWidth - 1
                  : rulerX + centimeter * 10 * millimeterWidth;

              return (
                <text
                  key={`label-${centimeter}`}
                  x={labelX}
                  y={rulerY + rulerHeight - 12}
                  textAnchor={isFirst ? 'start' : isLast ? 'end' : 'middle'}
                  fontSize="28"
                  fontWeight="900"
                  fill="#254f73"
                  stroke="#f7fbff"
                  strokeWidth="4"
                  paintOrder="stroke"
                >
                  {centimeter}
                </text>
              );
            })}
          </svg>
        </div>

        <div className="mt-4 rounded-[1.5rem] border border-amber-200 bg-amber-50/85 px-4 py-4 shadow-sm sm:px-5">
          <p className="break-keep text-[1.15rem] font-black leading-[1.55] text-slate-900 sm:text-[1.45rem] md:text-[2rem]">
            {renderPromptWithHighlight(measurement.question)}
          </p>
        </div>
      </div>
    </div>
  );
}

function getClockFacePoint(cx: number, cy: number, radius: number, degrees: number) {
  const radians = (degrees - 90) * (Math.PI / 180);
  return {
    x: cx + Math.cos(radians) * radius,
    y: cy + Math.sin(radians) * radius,
  };
}

function AnalogClockFigure({
  hour,
  minute,
  second,
  palette = 'default',
  activeHand = null,
  displayMode = 'real',
  ariaLabel,
}: {
  hour: number;
  minute: number;
  second: number;
  palette?: 'default' | 'result';
  activeHand?: 'minutes' | 'seconds' | null;
  displayMode?: 'real' | 'teaching';
  ariaLabel?: string;
}) {
  const cx = 180;
  const cy = 180;
  const radius = 128;
  const minuteProgress = displayMode === 'real' ? minute + second / 60 : minute;
  const hourProgress = displayMode === 'real' ? (hour % 12) + minuteProgress / 60 : (hour % 12) + minute / 60;
  const hourDegrees = hourProgress * 30;
  const minuteDegrees = minuteProgress * 6;
  const secondDegrees = second * 6;
  const hourPoint = getClockFacePoint(cx, cy, radius * 0.47, hourDegrees);
  const minutePoint = getClockFacePoint(cx, cy, radius * 0.72, minuteDegrees);
  const secondPoint = getClockFacePoint(cx, cy, radius * 0.82, secondDegrees);
  const secondTailPoint = getClockFacePoint(cx, cy, radius * 0.18, secondDegrees + 180);
  const roundedHour = hour === 0 ? 12 : Math.floor(hour);
  const roundedMinute = Math.floor(minute);
  const roundedSecond = Math.floor(second);
  const isResultPalette = palette === 'result';
  const outerFill = isResultPalette ? '#dbeafe' : '#c8e19a';
  const innerStroke = isResultPalette ? '#bfdbfe' : '#dbe6f3';
  const majorTickColor = isResultPalette ? '#60a5fa' : '#111827';
  const minorTickColor = isResultPalette ? '#93c5fd' : '#4b5563';
  const numberColor = isResultPalette ? '#1e3a8a' : '#111827';
  const hourOpacity = activeHand === 'seconds' ? 0.78 : 1;
  const minuteOpacity = activeHand === 'seconds' ? 0.72 : 1;
  const secondOpacity = activeHand === 'minutes' ? 0.65 : 1;
  const minuteWidth = activeHand === 'minutes' ? 8.5 : 7;
  const secondWidth = activeHand === 'seconds' ? 3.2 : 2.4;
  const handHighlightColor = activeHand === 'minutes' ? '#fecaca' : activeHand === 'seconds' ? '#cbd5e1' : '#dbeafe';

  return (
    <svg
      viewBox="0 0 360 360"
      className="block w-full"
      role="img"
      aria-label={ariaLabel ?? `${roundedHour}시 ${roundedMinute}분 ${roundedSecond}초를 가리키는 시계`}
    >
      <circle cx={cx} cy={cy} r="144" fill={outerFill} />
      <circle cx={cx} cy={cy} r="130" fill="#ffffff" stroke={innerStroke} strokeWidth="2" />
      {Array.from({ length: 60 }, (_, tickIndex) => {
        const isHourTick = tickIndex % 5 === 0;
        const outer = getClockFacePoint(cx, cy, radius - 4, tickIndex * 6);
        const inner = getClockFacePoint(cx, cy, isHourTick ? radius - 18 : radius - 11, tickIndex * 6);

        return (
          <line
            key={`clock-tick-${tickIndex}`}
            x1={outer.x}
            y1={outer.y}
            x2={inner.x}
            y2={inner.y}
            stroke={isHourTick ? majorTickColor : minorTickColor}
            strokeWidth={isHourTick ? 3.4 : 1.5}
            strokeLinecap="round"
          />
        );
      })}
      {Array.from({ length: 12 }, (_, index) => {
        const value = index + 1;
        const labelPoint = getClockFacePoint(cx, cy, radius - 38, value * 30);
        return (
          <text
            key={`clock-number-${value}`}
            x={labelPoint.x}
            y={labelPoint.y + 7}
            textAnchor="middle"
            fontSize="31"
            fontWeight="900"
            fill={numberColor}
          >
            {value}
          </text>
        );
      })}
      {activeHand ? (
        <circle cx={cx} cy={cy} r="142" fill="none" stroke={handHighlightColor} strokeWidth="7" opacity="0.75" />
      ) : null}
      <line
        x1={cx}
        y1={cy}
        x2={hourPoint.x}
        y2={hourPoint.y}
        stroke="#23a34a"
        strokeWidth="10"
        strokeLinecap="round"
        opacity={hourOpacity}
      />
      <line
        x1={cx}
        y1={cy}
        x2={minutePoint.x}
        y2={minutePoint.y}
        stroke="#ef4444"
        strokeWidth={minuteWidth}
        strokeLinecap="round"
        opacity={minuteOpacity}
      />
      <line
        x1={secondTailPoint.x}
        y1={secondTailPoint.y}
        x2={secondPoint.x}
        y2={secondPoint.y}
        stroke="#1f2937"
        strokeWidth={secondWidth}
        strokeLinecap="round"
        opacity={secondOpacity}
      />
      <circle cx={cx} cy={cy} r="8.5" fill="#ffd166" stroke="#f59e0b" strokeWidth="2.2" />
      <circle cx={cx} cy={cy} r="2.8" fill="#f8fafc" />
    </svg>
  );
}

function ClockReadingProblemCard({
  clockReading,
  answerValue,
  onAnswerChange,
  onSubmit,
}: {
  clockReading: ClockReadingProblemData;
  answerValue: ClockReadingAnswerInput;
  onAnswerChange: (part: ClockInputPart, value: string) => void;
  onSubmit: () => void;
}) {
  const fields: Array<{ key: ClockInputPart; label: string; placeholder: string }> = [
    { key: 'hours', label: '시', placeholder: '시' },
    { key: 'minutes', label: '분', placeholder: '분' },
    { key: 'seconds', label: '초', placeholder: '초' },
  ];

  return (
    <div className="mx-auto flex w-full max-w-[56rem] flex-col gap-4 text-left text-slate-900 sm:gap-5">
      <div className="rounded-[2rem] border border-slate-200 bg-slate-50/85 px-4 py-4 shadow-sm sm:px-6 sm:py-5 md:px-8 md:py-7">
        <p className="text-[1.1rem] font-black leading-[1.5] text-slate-900 sm:text-[1.4rem] md:text-[1.85rem]">
          {clockReading.title}
        </p>

        <div className="mt-4 grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(15rem,18rem)] lg:items-center">
          <div className="overflow-hidden rounded-[1.75rem] border border-sky-200 bg-white p-3 shadow-[inset_0_2px_14px_rgba(148,163,184,0.12)] sm:p-4">
            <div className="mx-auto w-full max-w-[20rem]">
              <AnalogClockFigure hour={clockReading.hour} minute={clockReading.minute} second={clockReading.second} />
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-emerald-200 bg-emerald-50/85 px-4 py-4 shadow-sm sm:px-5">
            <div className="grid gap-2 text-sm font-bold text-slate-700 sm:text-base">
              <div className="flex items-center gap-2 rounded-2xl bg-white/80 px-3 py-2">
                <span className="inline-block h-3 w-3 rounded-full bg-[#23a34a]" />
                <span>짧고 굵은 초록색은 시침</span>
              </div>
              <div className="flex items-center gap-2 rounded-2xl bg-white/80 px-3 py-2">
                <span className="inline-block h-3 w-3 rounded-full bg-[#ef4444]" />
                <span>길고 굵은 빨간색은 분침</span>
              </div>
              <div className="flex items-center gap-2 rounded-2xl bg-white/80 px-3 py-2">
                <span className="inline-block h-3 w-3 rounded-full bg-[#1f2937]" />
                <span>가늘고 긴 검은색은 초침</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-3 sm:gap-4">
          {fields.map((field) => (
            (() => {
              const isEditable = clockReading.editableParts.includes(field.key);
              const displayValue = isEditable
                ? answerValue[field.key]
                : String(getClockReadingPartValue(clockReading, field.key));

              return (
                <label
                  key={field.key}
                  className={`flex items-center justify-center gap-2 rounded-[1.5rem] border px-3 py-3 shadow-sm sm:gap-3 sm:px-4 sm:py-4 ${
                    isEditable
                      ? 'border-slate-200 bg-white'
                      : 'border-emerald-200 bg-emerald-50/80'
                  }`}
                >
                  <input
                    type="text"
                    inputMode="numeric"
                    autoComplete="off"
                    maxLength={2}
                    value={displayValue}
                    disabled={!isEditable}
                    readOnly={!isEditable}
                    onChange={(event) => onAnswerChange(field.key, event.target.value)}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter' && !event.ctrlKey && !event.altKey) {
                        event.preventDefault();
                        onSubmit();
                      }
                    }}
                    className={`w-full min-w-0 rounded-2xl border-2 px-3 py-3 text-center text-xl font-black text-slate-900 outline-none transition sm:text-2xl ${
                      isEditable
                        ? 'border-slate-200 bg-slate-50 focus:border-sky-400 focus:bg-white'
                        : 'border-emerald-200 bg-white text-emerald-700'
                    }`}
                    placeholder={isEditable ? field.placeholder : ''}
                    aria-label={field.label}
                  />
                  <span className="shrink-0 text-2xl font-black text-slate-900 sm:text-3xl">{field.label}</span>
                </label>
              );
            })()
          ))}
        </div>
      </div>
    </div>
  );
}

function ClockResultPlaceholderFigure() {
  const cx = 180;
  const cy = 180;
  const radius = 128;

  return (
    <svg viewBox="0 0 360 360" className="block w-full" role="img" aria-label="결과 시각을 생각해 보는 시계">
      <circle cx={cx} cy={cy} r="144" fill="#dbeafe" />
      <circle cx={cx} cy={cy} r="130" fill="#ffffff" stroke="#bfdbfe" strokeWidth="3" />
      {Array.from({ length: 60 }, (_, tickIndex) => {
        const isHourTick = tickIndex % 5 === 0;
        const outer = getClockFacePoint(cx, cy, radius - 4, tickIndex * 6);
        const inner = getClockFacePoint(cx, cy, isHourTick ? radius - 18 : radius - 11, tickIndex * 6);

        return (
          <line
            key={`placeholder-tick-${tickIndex}`}
            x1={outer.x}
            y1={outer.y}
            x2={inner.x}
            y2={inner.y}
            stroke={isHourTick ? '#60a5fa' : '#93c5fd'}
            strokeWidth={isHourTick ? 3.2 : 1.5}
            strokeLinecap="round"
          />
        );
      })}
      <circle cx={cx} cy={cy} r="12" fill="#e0f2fe" stroke="#60a5fa" strokeWidth="3" />
      <text x={cx} y={cy + 24} textAnchor="middle" fontSize="88" fontWeight="900" fill="#60a5fa">?</text>
    </svg>
  );
}

function ClockTimeAdditionFigure({
  start,
  add,
  result,
  operation,
  playAnimationSound,
}: {
  start: TimeValue;
  add: TimeValue;
  result: TimeValue;
  operation: TimeArithmeticOperation;
  playAnimationSound?: AnimationSoundPlayer;
}) {
  const problemSignature = `${operation}-${start.hours}:${start.minutes}:${start.seconds}-${add.hours}:${add.minutes}:${add.seconds}-${result.hours}:${result.minutes}:${result.seconds}`;
  const startTotalSeconds = toTotalTimeSeconds(start);
  const minuteDeltaSeconds = add.hours * 3600 + add.minutes * 60;
  const minuteStepTargetSeconds = startTotalSeconds + (operation === '+' ? minuteDeltaSeconds : -minuteDeltaSeconds);
  const finalTargetSeconds = toTotalTimeSeconds(result);
  const animationFrameRef = useRef<number | null>(null);
  const queuedSoundTimeoutIdsRef = useRef<number[]>([]);
  const [displayClockSeconds, setDisplayClockSeconds] = useState(startTotalSeconds);
  const [animationStep, setAnimationStep] = useState<'idle' | 'minutesDone' | 'secondsDone'>('idle');
  const [activeHand, setActiveHand] = useState<'minutes' | 'seconds' | null>(null);
  const [isResultClockVisible, setIsResultClockVisible] = useState(false);

  const clearQueuedAnimationSounds = () => {
    queuedSoundTimeoutIdsRef.current.forEach((timeoutId) => window.clearTimeout(timeoutId));
    queuedSoundTimeoutIdsRef.current = [];
  };

  const stopClockAnimation = () => {
    clearQueuedAnimationSounds();
    if (animationFrameRef.current !== null) {
      window.cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }
  };

  const resetClockAnimation = () => {
    stopClockAnimation();
    setDisplayClockSeconds(startTotalSeconds);
    setAnimationStep('idle');
    setActiveHand(null);
    setIsResultClockVisible(false);
  };

  useEffect(() => {
    resetClockAnimation();

    return () => {
      stopClockAnimation();
    };
  }, [problemSignature]);

  useEffect(() => clearQueuedAnimationSounds, []);

  const animateClockHands = (
    targetSeconds: number,
    hand: 'minutes' | 'seconds',
    nextStep: 'minutesDone' | 'secondsDone',
  ) => {
    stopClockAnimation();
    setIsResultClockVisible(true);
    setActiveHand(hand);

    const initialSeconds = displayClockSeconds;
    const duration = hand === 'minutes' ? 1200 : 900;
    let animationStartTime: number | null = null;
    const tickSchedule =
      hand === 'minutes'
        ? [
            { delay: 0, gainMultiplier: 0.9, detune: operation === '+' ? -120 : -180 },
            { delay: 260, gainMultiplier: 0.82, detune: operation === '+' ? -80 : -140 },
            { delay: 560, gainMultiplier: 0.76, detune: operation === '+' ? -40 : -90 },
            { delay: 860, gainMultiplier: 0.72, detune: operation === '+' ? 0 : -40 },
          ]
        : [
            { delay: 0, gainMultiplier: 0.82, detune: operation === '+' ? 60 : 10 },
            { delay: 180, gainMultiplier: 0.78, detune: operation === '+' ? 100 : 50 },
            { delay: 380, gainMultiplier: 0.74, detune: operation === '+' ? 140 : 90 },
            { delay: 600, gainMultiplier: 0.7, detune: operation === '+' ? 180 : 130 },
          ];

    queuedSoundTimeoutIdsRef.current = tickSchedule.map((entry) =>
      window.setTimeout(() => {
        playAnimationSound?.('tick', {
          gainMultiplier: entry.gainMultiplier,
          detune: entry.detune,
          noisePlaybackRateMultiplier: hand === 'minutes' ? 0.98 : 1.04,
        });
      }, entry.delay),
    );

    const stepAnimation = (timestamp: number) => {
      if (animationStartTime === null) {
        animationStartTime = timestamp;
      }

      const progress = clamp((timestamp - animationStartTime) / duration, 0, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const nextClockSeconds = initialSeconds + (targetSeconds - initialSeconds) * easedProgress;
      setDisplayClockSeconds(nextClockSeconds);

      if (progress < 1) {
        animationFrameRef.current = window.requestAnimationFrame(stepAnimation);
        return;
      }

      animationFrameRef.current = null;
      setDisplayClockSeconds(targetSeconds);
      setActiveHand(null);
      setAnimationStep(nextStep);
    };

    animationFrameRef.current = window.requestAnimationFrame(stepAnimation);
  };

  const animatedClock = splitAnimatedClockSeconds(displayClockSeconds);
  const isAnimating = activeHand !== null;
  const canAnimateMinutes = !isAnimating && animationStep === 'idle';
  const canAnimateSeconds = !isAnimating && animationStep === 'minutesDone';
  const hasCompletedAllSteps = animationStep === 'secondsDone';
  const totalAddText = formatDuration(add.hours, add.minutes, add.seconds);
  const operationLabel = operation === '+' ? '더할 시간' : '뺄 시간';
  return (
    <div className="grid gap-3 xl:grid-cols-[minmax(0,1fr)_minmax(16.5rem,18rem)_minmax(0,1fr)] xl:items-center">
      <div className="rounded-[1.75rem] border border-sky-200 bg-white p-3 shadow-[inset_0_2px_14px_rgba(148,163,184,0.12)] sm:p-4">
        <div className="mx-auto w-full max-w-[18rem]">
          <AnalogClockFigure hour={start.hours} minute={start.minutes} second={start.seconds} displayMode="teaching" />
        </div>
        <div className="mt-3 px-2 text-center text-slate-900">
          <div className="text-[0.78rem] font-black tracking-[0.08em] text-slate-500 sm:text-[0.84rem]">시작 시각</div>
          <div className="mt-1 text-[clamp(1rem,1.4vw,1.18rem)] font-black leading-tight break-keep">
            {formatClockTime(start.hours, start.minutes, start.seconds)}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-2.5">
        <div className="w-full max-w-[17.5rem] rounded-[1.35rem] border-2 border-sky-300 bg-gradient-to-b from-sky-50 to-white px-4 py-2.5 text-center text-sky-900 shadow-[0_10px_24px_rgba(14,165,233,0.14)]">
          <div className="text-[0.76rem] font-black tracking-[0.08em] text-sky-700 sm:text-[0.82rem]">
            {operationLabel}
          </div>
          <div className="mt-1 text-[1.2rem] font-black leading-none sm:text-[1.4rem]">
            {totalAddText}
          </div>
        </div>
        <div className="grid w-full max-w-[16.5rem] grid-cols-2 gap-2">
        <button
          type="button"
          disabled={!canAnimateMinutes}
          onClick={() => animateClockHands(minuteStepTargetSeconds, 'minutes', 'minutesDone')}
          className={`flex min-w-0 items-center justify-between gap-1.5 rounded-[1.15rem] border px-2.5 py-2 text-left shadow-sm transition ${
            canAnimateMinutes
              ? 'border-rose-300 bg-rose-50 text-rose-900 hover:-translate-y-0.5 hover:bg-rose-100'
              : animationStep !== 'idle'
                ? 'border-emerald-300 bg-emerald-50 text-emerald-800'
                : 'cursor-not-allowed border-slate-200 bg-slate-100 text-slate-400'
          }`}
        >
          <div className="flex min-w-0 items-center gap-1.5">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#ef4444]" />
            <div className="min-w-0">
              <div className="text-[0.74rem] font-black sm:text-[0.8rem]">분침</div>
              <div className="mt-0.5 text-[1.05rem] font-black leading-none sm:text-[1.15rem]">{operation} {add.minutes}분</div>
            </div>
          </div>
          {animationStep === 'idle' ? <Play className="h-3.5 w-3.5 shrink-0" /> : <Check className="h-3.5 w-3.5 shrink-0" />}
        </button>

        <button
          type="button"
          disabled={!canAnimateSeconds}
          onClick={() => animateClockHands(finalTargetSeconds, 'seconds', 'secondsDone')}
          className={`flex min-w-0 items-center justify-between gap-1.5 rounded-[1.15rem] border px-2.5 py-2 text-left shadow-sm transition ${
            canAnimateSeconds
              ? 'border-slate-400 bg-slate-100 text-slate-900 hover:-translate-y-0.5 hover:bg-slate-200'
              : hasCompletedAllSteps
                ? 'border-emerald-300 bg-emerald-50 text-emerald-800'
                : 'cursor-not-allowed border-slate-200 bg-slate-100 text-slate-400'
          }`}
        >
          <div className="flex min-w-0 items-center gap-1.5">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#1f2937]" />
            <div className="min-w-0">
              <div className="text-[0.74rem] font-black sm:text-[0.8rem]">초침</div>
              <div className="mt-0.5 text-[1.05rem] font-black leading-none sm:text-[1.15rem]">{operation} {add.seconds}초</div>
            </div>
          </div>
          {hasCompletedAllSteps ? <Check className="h-3.5 w-3.5 shrink-0" /> : <Play className="h-3.5 w-3.5 shrink-0" />}
        </button>

        </div>

        <button
          type="button"
          onClick={resetClockAnimation}
          disabled={!isResultClockVisible && !isAnimating}
          className={`inline-flex w-full max-w-[16.5rem] items-center justify-center gap-2 rounded-full border px-3 py-2 text-sm font-black shadow-sm transition ${
            !isResultClockVisible && !isAnimating
              ? 'cursor-not-allowed border-slate-200 bg-white text-slate-300'
              : 'border-sky-300 bg-sky-50 text-sky-800 hover:-translate-y-0.5 hover:bg-sky-100'
          }`}
        >
          <RotateCcw className="h-4 w-4" />
          다시 보기
        </button>

      </div>

      <div className="rounded-[1.75rem] border border-dashed border-sky-300 bg-sky-50/60 p-3 shadow-[inset_0_2px_14px_rgba(125,211,252,0.1)] sm:p-4">
        <div className="mx-auto w-full max-w-[18rem]">
          <div className="relative">
            <AnalogClockFigure
              hour={animatedClock.hours}
              minute={animatedClock.minutes}
              second={animatedClock.seconds}
              palette="result"
              activeHand={activeHand}
              displayMode="teaching"
              ariaLabel="버튼을 눌러 결과 시각을 확인하는 시계"
            />
            <AnimatePresence>
              {!isResultClockVisible ? (
                <motion.div
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.22, ease: 'easeOut' }}
                  className="absolute inset-0"
                >
                  <ClockResultPlaceholderFigure />
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        </div>
        <p className="mt-3 text-center text-base font-black text-sky-800 sm:text-lg">결과 시각을 써 보세요.</p>
      </div>
    </div>
  );
}

function TimeAdditionBarModelFigure({
  left,
  right,
  result,
  playAnimationSound,
}: {
  left: TimeValue;
  right: TimeValue;
  result: TimeValue;
  playAnimationSound?: AnimationSoundPlayer;
}) {
  const blockSeconds = 10;
  const leftBlocks = Math.floor(toTotalTimeSeconds(left) / blockSeconds);
  const rightBlocks = Math.floor(toTotalTimeSeconds(right) / blockSeconds);
  const totalBlocks = Math.floor(toTotalTimeSeconds(result) / blockSeconds);
  const maxBlocks = Math.max(Math.ceil((totalBlocks + 3) / 6) * 6, 24);
  const blockWidth = maxBlocks > 48 ? 9 : maxBlocks > 36 ? 11 : 13;
  const blockGap = 2;
  const blockHeight = 28;
  const metaX = 8;
  const metaWidth = 126;
  const metaGap = 18;
  const leftPadding = metaX + metaWidth + metaGap;
  const topScaleY = 26;
  const rowStartY = 50;
  const rowGap = 72;
  const totalRowY = rowStartY + rowGap * 2;
  const blockStep = blockWidth + blockGap;
  const chartWidth = maxBlocks * blockWidth + (maxBlocks - 1) * blockGap;
  const width = leftPadding + chartWidth + 18;
  const height = 236;
  const scaleMinutes = maxBlocks / 6;
  const problemSignature = `${left.hours}:${left.minutes}:${left.seconds}-${right.hours}:${right.minutes}:${right.seconds}-${result.hours}:${result.minutes}:${result.seconds}`;
  const [mergeState, setMergeState] = useState<'idle' | 'merging' | 'merged'>('idle');
  const queuedSoundTimeoutIdsRef = useRef<number[]>([]);
  const rows = [
    {
      key: 'left',
      label: '처음 시간',
      valueText: formatDuration(0, left.minutes, left.seconds),
      blocks: leftBlocks,
      y: rowStartY,
      fill: '#f4e2ff',
      stroke: '#9b5cf6',
      text: '#6d28d9',
      glow: 'rgba(192, 132, 252, 0.35)',
      accent: '#fcfaff',
    },
    {
      key: 'right',
      label: '더할 시간',
      valueText: formatDuration(0, right.minutes, right.seconds),
      blocks: rightBlocks,
      y: rowStartY + rowGap,
      fill: '#fee9b8',
      stroke: '#f59e0b',
      text: '#9a3412',
      glow: 'rgba(251, 191, 36, 0.32)',
      accent: '#fffaf0',
    },
    {
      key: 'total',
      label: '합한 시간',
      valueText: formatDuration(0, result.minutes, result.seconds),
      blocks: totalBlocks,
      y: rowStartY + rowGap * 2,
      fill: '#d8ecff',
      stroke: '#0ea5e9',
      text: '#0f766e',
      glow: 'rgba(14, 165, 233, 0.32)',
      accent: '#f7fbff',
    },
  ] as const;

  const clearQueuedAnimationSounds = () => {
    queuedSoundTimeoutIdsRef.current.forEach((timeoutId) => window.clearTimeout(timeoutId));
    queuedSoundTimeoutIdsRef.current = [];
  };

  useEffect(() => {
    clearQueuedAnimationSounds();
    setMergeState('idle');
  }, [problemSignature]);

  useEffect(() => clearQueuedAnimationSounds, []);

  useEffect(() => {
    if (mergeState !== 'merging') {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => {
      setMergeState('merged');
    }, 1200);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [mergeState, problemSignature]);

  const getBlockX = (blockIndex: number) => leftPadding + blockIndex * blockStep;
  const getMinuteBoundaryX = (minuteIndex: number) =>
    minuteIndex === 0 ? leftPadding : leftPadding + minuteIndex * 6 * blockStep - blockGap;
  const getSegmentWidth = (blocks: number) =>
    blocks > 0 ? blocks * blockWidth + Math.max(0, blocks - 1) * blockGap : 0;
  const getSegmentEndX = (blocks: number) => (blocks > 0 ? leftPadding + blocks * blockStep - blockGap : leftPadding);
  const leftSegmentWidth = getSegmentWidth(leftBlocks);
  const rightSegmentWidth = getSegmentWidth(rightBlocks);
  const totalSegmentWidth = getSegmentWidth(totalBlocks);
  const totalEndX = getSegmentEndX(totalBlocks);
  const totalMarkerX = totalEndX + blockGap / 2;
  const leftFadeOpacity = mergeState === 'idle' ? 1 : mergeState === 'merging' ? 0.28 : 0.16;
  const rightFadeOpacity = mergeState === 'idle' ? 1 : mergeState === 'merging' ? 0.28 : 0.16;
  const totalTrackEmphasis = mergeState === 'idle' ? 0.7 : 1;
  const connectorLeft = `M ${leftPadding + leftSegmentWidth * 0.5} ${rowStartY + blockHeight * 0.5} C ${leftPadding + leftSegmentWidth * 0.56} ${rowStartY + 28}, ${leftPadding + leftSegmentWidth * 0.5} ${totalRowY - 26}, ${leftPadding + leftSegmentWidth * 0.5} ${totalRowY + blockHeight * 0.5}`;
  const connectorRight = `M ${leftPadding + rightSegmentWidth * 0.5} ${rowStartY + rowGap + blockHeight * 0.5} C ${leftPadding + rightSegmentWidth * 0.6} ${rowStartY + rowGap + 26}, ${getBlockX(leftBlocks) + rightSegmentWidth * 0.56} ${totalRowY - 24}, ${getBlockX(leftBlocks) + rightSegmentWidth * 0.5} ${totalRowY + blockHeight * 0.5}`;

  const renderFilledCells = (row: (typeof rows)[number], opacity: number) =>
    Array.from({ length: maxBlocks }, (_, blockIndex) => {
      let fill = '#ffffff';
      let stroke = '#d7e3f0';
      let strokeWidth = 1;

      if (row.key === 'left' && blockIndex < leftBlocks) {
        fill = rows[0].fill;
        stroke = rows[0].stroke;
        strokeWidth = 1.3;
      }

      if (row.key === 'right' && blockIndex < rightBlocks) {
        fill = rows[1].fill;
        stroke = rows[1].stroke;
        strokeWidth = 1.3;
      }

      if (row.key === 'total' && mergeState === 'merged' && blockIndex < totalBlocks) {
        const sourceRow = blockIndex < leftBlocks ? rows[0] : rows[1];
        fill = sourceRow.fill;
        stroke = sourceRow.stroke;
        strokeWidth = 1.3;
      }

      const isFilled = fill !== '#ffffff';

      return (
        <rect
          key={`${row.key}-${blockIndex}`}
          x={getBlockX(blockIndex)}
          y={row.y}
          width={blockWidth}
          height={blockHeight}
          rx="5"
          fill={isFilled ? fill : '#fbfdff'}
          fillOpacity={isFilled ? opacity : 0.98}
          stroke={stroke}
          strokeWidth={strokeWidth}
        />
      );
    });

  const renderMovingSegmentCells = (blocks: number, fill: string, stroke: string) =>
    Array.from({ length: blocks }, (_, blockIndex) => (
      <rect
        key={`moving-segment-${fill}-${blockIndex}`}
        x={blockIndex * blockStep}
        y={0}
        width={blockWidth}
        height={blockHeight}
        rx="8"
        fill={fill}
        stroke={stroke}
        strokeWidth="1.2"
      />
    ));

  return (
    <div className="rounded-[1.8rem] border border-slate-200 bg-white p-4 shadow-[0_14px_36px_rgba(148,163,184,0.14)] sm:p-5">
      <div className="flex flex-wrap items-center justify-end gap-2">
        <button
          type="button"
          onClick={() => {
            if (mergeState === 'idle') {
              clearQueuedAnimationSounds();
              playAnimationSound?.('hintStep', { gainMultiplier: 0.88, detune: 10 });
              queuedSoundTimeoutIdsRef.current = [
                window.setTimeout(() => {
                  playAnimationSound?.('hintCarry', { gainMultiplier: 0.96, detune: 26 });
                }, 180),
                window.setTimeout(() => {
                  playAnimationSound?.('hintResolve', { gainMultiplier: 1.02, detune: 42 });
                }, 820),
              ];
              setMergeState('merging');
            }
          }}
          disabled={mergeState !== 'idle'}
          className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-black shadow-sm transition sm:text-base ${
            mergeState === 'idle'
              ? 'border border-sky-500 bg-sky-500 text-white hover:-translate-y-0.5 hover:bg-sky-600'
              : 'cursor-default border border-slate-200 bg-slate-100 text-slate-400'
          }`}
        >
          <Play className="h-4 w-4" />
          합쳐 보기
        </button>
        <button
          type="button"
          onClick={() => {
            clearQueuedAnimationSounds();
            setMergeState('idle');
          }}
          disabled={mergeState === 'idle'}
          className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-black shadow-sm transition sm:text-base ${
            mergeState === 'idle'
              ? 'cursor-default border-slate-200 bg-white text-slate-300'
              : 'border-emerald-300 bg-emerald-50 text-emerald-800 hover:-translate-y-0.5 hover:bg-emerald-100'
          }`}
        >
          <RotateCcw className="h-4 w-4" />
          다시 보기
        </button>
      </div>

      <div className="mt-4 overflow-x-auto pb-2">
        <div style={{ minWidth: `${Math.max(width, 620)}px` }}>
          <svg viewBox={`0 0 ${width} ${height}`} className="block w-full" role="img" aria-label="띠모형으로 표현한 시간 덧셈">
            <defs>
              <filter id="time-bar-glow" x="-30%" y="-30%" width="160%" height="160%">
                <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#38bdf8" floodOpacity="0.18" />
              </filter>
              <linearGradient id="merge-destination-glow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(14,165,233,0.04)" />
                <stop offset="50%" stopColor="rgba(14,165,233,0.18)" />
                <stop offset="100%" stopColor="rgba(14,165,233,0.04)" />
              </linearGradient>
            </defs>

            <line
              x1={leftPadding}
              y1={topScaleY + 4}
              x2={leftPadding + chartWidth - blockGap}
              y2={topScaleY + 4}
              stroke="#e2e8f0"
              strokeWidth="1.2"
            />

            {Array.from({ length: scaleMinutes + 1 }, (_, minuteIndex) => {
              const x = getMinuteBoundaryX(minuteIndex);
              return (
                <g key={`bar-scale-${minuteIndex}`}>
                  <text x={x} y={topScaleY} textAnchor="middle" fontSize="14" fontWeight="900" fill="#475569">
                    {minuteIndex}
                  </text>
                  <line
                    x1={x}
                    y1={rowStartY - 8}
                    x2={x}
                    y2={rowStartY + rowGap * 2 + blockHeight + 6}
                    stroke="#94a3b8"
                    strokeWidth="1.15"
                    strokeDasharray="4 7"
                    opacity="0.72"
                  />
                </g>
              );
            })}
            <text
              x={leftPadding + chartWidth - blockGap + 18}
              y={topScaleY}
              textAnchor="start"
              fontSize="14"
              fontWeight="900"
              fill="#64748b"
            >
              분
            </text>

            {rows.map((row) => {
              const isTotalRow = row.key === 'total';
              const labelOpacity = !isTotalRow
                ? row.key === 'left'
                  ? leftFadeOpacity
                  : rightFadeOpacity
                : 1;
              const totalGlow = isTotalRow && mergeState !== 'idle';
              const showValueText = row.key !== 'total';
              const visibleBlocks = isTotalRow ? (mergeState === 'merged' ? totalBlocks : 0) : row.blocks;
              const segmentWidth = getSegmentWidth(visibleBlocks);
              const segmentTint =
                row.key === 'left'
                  ? 'rgba(168,85,247,0.12)'
                  : row.key === 'right'
                    ? 'rgba(245,158,11,0.12)'
                    : 'rgba(14,165,233,0.14)';

              return (
                <motion.g
                  key={row.key}
                  animate={{
                    opacity: labelOpacity,
                    scale: totalGlow && mergeState === 'merged' ? 1.01 : 1,
                  }}
                  transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                >
                  <circle cx={metaX + 8} cy={showValueText ? row.y + 2 : row.y + 14} r="5" fill={row.stroke} />
                  <text
                    x={metaX + 20}
                    y={showValueText ? row.y + 7 : row.y + 19}
                    textAnchor="start"
                    fontSize="15"
                    fontWeight="900"
                    fill={row.text}
                  >
                    {row.label}
                  </text>

                  {showValueText ? (
                    <>
                      <rect
                        x={metaX + 18}
                        y={row.y + 16}
                        width={metaWidth - 18}
                        height={28}
                        rx="14"
                        fill="#ffffff"
                        stroke={row.stroke}
                        strokeOpacity="0.28"
                        strokeWidth="1.4"
                      />
                      <text
                        x={metaX + 18 + (metaWidth - 18) / 2}
                        y={row.y + 35}
                        textAnchor="middle"
                        fontSize="14"
                        fontWeight="900"
                        fill={row.text}
                      >
                        {row.valueText}
                      </text>
                    </>
                  ) : null}

                  <rect
                    x={leftPadding - 8}
                    y={row.y - 6}
                    width={chartWidth + 16}
                    height={blockHeight + 12}
                    rx="18"
                    fill={row.accent}
                    stroke={isTotalRow && mergeState !== 'idle' ? row.stroke : '#dbe6f2'}
                    strokeWidth={isTotalRow && mergeState !== 'idle' ? 2 : 1.2}
                    opacity={isTotalRow ? totalTrackEmphasis : 0.96}
                  />
                  {segmentWidth > 0 ? (
                    <rect
                      x={leftPadding - 2}
                      y={row.y - 2}
                      width={segmentWidth + 4}
                      height={blockHeight + 4}
                      rx="14"
                      fill={segmentTint}
                      opacity={isTotalRow ? (mergeState === 'merged' ? 0.58 : 0) : 0.62}
                    />
                  ) : null}
                  {isTotalRow && mergeState === 'merging' ? (
                    <motion.rect
                      x={leftPadding - 2}
                      y={row.y - 2}
                      width={Math.max(totalSegmentWidth + 4, 0)}
                      height={blockHeight + 4}
                      rx="16"
                      fill="url(#merge-destination-glow)"
                      initial={{ opacity: 0.18, scaleX: 0.75, transformOrigin: `${leftPadding}px ${row.y}px` }}
                      animate={{ opacity: 0.46, scaleX: 1 }}
                      transition={{ duration: 0.9, ease: 'easeOut' }}
                    />
                  ) : null}
                  {renderFilledCells(
                    row,
                    row.key === 'left' ? leftFadeOpacity : row.key === 'right' ? rightFadeOpacity : 1,
                  )}
                </motion.g>
              );
            })}

            <AnimatePresence>
              {mergeState === 'merged' && totalBlocks > 0 ? (
                <motion.g
                  initial={{ opacity: 0, y: -8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.28, ease: 'easeOut' }}
                >
                  <rect
                    x={totalEndX - 0.5}
                    y={totalRowY - 4}
                    width={blockGap + 1}
                    height={blockHeight + 8}
                    rx="2"
                    fill="#ffffff"
                    stroke={rows[2].stroke}
                    strokeWidth="1"
                  />
                  <line
                    x1={totalMarkerX}
                    y1={totalRowY - 10}
                    x2={totalMarkerX}
                    y2={totalRowY + blockHeight + 8}
                    stroke={rows[2].stroke}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <circle
                    cx={totalMarkerX}
                    cy={totalRowY - 14}
                    r="5"
                    fill="#ffffff"
                    stroke={rows[2].stroke}
                    strokeWidth="1.6"
                  />
                  <circle cx={totalMarkerX} cy={totalRowY - 14} r="2" fill={rows[2].stroke} />
                </motion.g>
              ) : null}
            </AnimatePresence>

            <AnimatePresence>
              {mergeState === 'merging' && (
                <g key={`merge-run-${problemSignature}`}>
                  <motion.path
                    d={connectorLeft}
                    fill="none"
                    stroke={rows[0].stroke}
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray="8 10"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.35 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.46, ease: 'easeOut' }}
                  />
                  <motion.path
                    d={connectorRight}
                    fill="none"
                    stroke={rows[1].stroke}
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray="8 10"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.35 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.46, delay: 0.16, ease: 'easeOut' }}
                  />
                  <motion.g
                    initial={{ x: 0, y: 0, opacity: 0.95 }}
                    animate={{ x: 0, y: totalRowY - rowStartY, opacity: 0.98 }}
                    exit={{ opacity: 0 }}
                    style={{ filter: `drop-shadow(0 8px 14px ${rows[0].glow})` }}
                    transition={{ duration: 0.68, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <g transform={`translate(${leftPadding} ${rowStartY})`}>
                      {renderMovingSegmentCells(leftBlocks, rows[0].fill, rows[0].stroke)}
                    </g>
                  </motion.g>
                  <motion.g
                    initial={{ x: 0, y: 0, opacity: 0.95 }}
                    animate={{
                      x: getBlockX(leftBlocks) - leftPadding,
                      y: totalRowY - (rowStartY + rowGap),
                      opacity: 0.98,
                    }}
                    exit={{ opacity: 0 }}
                    style={{ filter: `drop-shadow(0 8px 14px ${rows[1].glow})` }}
                    transition={{ duration: 0.72, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <g transform={`translate(${leftPadding} ${rowStartY + rowGap})`}>
                      {renderMovingSegmentCells(rightBlocks, rows[1].fill, rows[1].stroke)}
                    </g>
                  </motion.g>
                </g>
              )}
            </AnimatePresence>
          </svg>
        </div>
      </div>
    </div>
  );
}

function TimeSubtractionBarModelFigure({
  left,
  right,
  result,
  playAnimationSound,
}: {
  left: TimeValue;
  right: TimeValue;
  result: TimeValue;
  playAnimationSound?: AnimationSoundPlayer;
}) {
  const blockSeconds = 10;
  const leftBlocks = Math.floor(toTotalTimeSeconds(left) / blockSeconds);
  const rightBlocks = Math.floor(toTotalTimeSeconds(right) / blockSeconds);
  const resultBlocks = Math.floor(toTotalTimeSeconds(result) / blockSeconds);
  const maxBlocks = Math.max(Math.ceil((leftBlocks + 3) / 6) * 6, 24);
  const blockWidth = maxBlocks > 48 ? 9 : maxBlocks > 36 ? 11 : 13;
  const blockGap = 2;
  const blockHeight = 28;
  const metaX = 8;
  const metaWidth = 126;
  const metaGap = 18;
  const leftPadding = metaX + metaWidth + metaGap;
  const topScaleY = 26;
  const rowStartY = 50;
  const rowGap = 72;
  const resultRowY = rowStartY + rowGap * 2;
  const blockStep = blockWidth + blockGap;
  const chartWidth = maxBlocks * blockWidth + (maxBlocks - 1) * blockGap;
  const width = leftPadding + chartWidth + 18;
  const height = 236;
  const scaleMinutes = maxBlocks / 6;
  const problemSignature = `${left.hours}:${left.minutes}:${left.seconds}-${right.hours}:${right.minutes}:${right.seconds}-${result.hours}:${result.minutes}:${result.seconds}`;
  const hatchPatternId = `time-subtraction-hatch-${problemSignature.replace(/[^a-zA-Z0-9]+/g, '-')}`;
  const [subtractionState, setSubtractionState] = useState<'idle' | 'subtracting' | 'subtracted'>('idle');
  const queuedSoundTimeoutIdsRef = useRef<number[]>([]);

  const clearQueuedAnimationSounds = () => {
    queuedSoundTimeoutIdsRef.current.forEach((timeoutId) => window.clearTimeout(timeoutId));
    queuedSoundTimeoutIdsRef.current = [];
  };

  useEffect(() => {
    clearQueuedAnimationSounds();
    setSubtractionState('idle');
  }, [problemSignature]);

  useEffect(() => clearQueuedAnimationSounds, []);

  useEffect(() => {
    if (subtractionState !== 'subtracting') {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => {
      setSubtractionState('subtracted');
    }, 1800);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [subtractionState, problemSignature]);

  const rows = [
    {
      key: 'left',
      label: '처음 시간',
      valueText: formatDuration(0, left.minutes, left.seconds),
      blocks: leftBlocks,
      fill: '#f4e2ff',
      stroke: '#9b5cf6',
      text: '#6d28d9',
      accent: '#fcfaff',
      y: rowStartY,
    },
    {
      key: 'right',
      label: '뺄 시간',
      valueText: formatDuration(0, right.minutes, right.seconds),
      blocks: rightBlocks,
      fill: '#fee9b8',
      stroke: '#f59e0b',
      text: '#8b5c14',
      accent: '#fffaf0',
      y: rowStartY + rowGap,
    },
    {
      key: 'result',
      label: '남은 시간',
      valueText: '',
      blocks: resultBlocks,
      fill: '#d8ecff',
      stroke: '#0ea5e9',
      text: '#0f766e',
      accent: '#f7fbff',
      y: resultRowY,
    },
  ] as const;

  const getBlockX = (blockIndex: number) => leftPadding + blockIndex * blockStep;
  const getMinuteBoundaryX = (minuteIndex: number) =>
    minuteIndex === 0 ? leftPadding : leftPadding + minuteIndex * 6 * blockStep - blockGap;
  const getSegmentWidth = (blocks: number) =>
    blocks > 0 ? blocks * blockWidth + Math.max(0, blocks - 1) * blockGap : 0;
  const resultBoundaryX = resultBlocks > 0 ? getBlockX(resultBlocks) - blockGap / 2 : leftPadding;
  const removalSegmentStartX = getBlockX(resultBlocks);
  const removalSegmentWidth = getSegmentWidth(rightBlocks);
  const removalSegmentEndX = removalSegmentStartX + removalSegmentWidth;
  const bracketY = rowStartY + blockHeight + 12;
  const bracketLabelWidth = Math.min(104, Math.max(72, removalSegmentWidth * 0.48));
  const bracketLabelHalf = bracketLabelWidth / 2;
  const bracketLabelX = Math.min(
    leftPadding + chartWidth - blockGap - bracketLabelHalf,
    Math.max(leftPadding + bracketLabelHalf, removalSegmentStartX + removalSegmentWidth / 2),
  );
  const movingRemovalSegmentOffsetX = removalSegmentStartX - leftPadding;
  const movingRemovalSegmentOffsetY = rowStartY - (rowStartY + rowGap);
  const movingResultSegmentOffsetY = resultRowY - rowStartY;
  const smoothEase: [number, number, number, number] = [0.2, 0.78, 0.24, 1];

  const renderFilledCells = (row: (typeof rows)[number]) =>
    Array.from({ length: maxBlocks }, (_, blockIndex) => {
      let fill = '#fbfdff';
      let stroke = '#d7e3f0';
      let strokeWidth = 1;
      let fillOpacity = 1;
      const shouldFill =
        row.key === 'left'
          ? blockIndex < leftBlocks
          : row.key === 'right'
            ? blockIndex < rightBlocks
            : subtractionState === 'subtracted' && blockIndex < resultBlocks;

      if (shouldFill) {
        fill = row.fill;
        stroke = row.stroke;
        strokeWidth = 1.3;

        if (row.key === 'right' && subtractionState === 'subtracting') {
          fillOpacity = 0.26;
        }
      }

      return (
        <rect
          key={`${row.key}-${blockIndex}`}
          x={getBlockX(blockIndex)}
          y={row.y}
          width={blockWidth}
          height={blockHeight}
          rx="5"
          fill={fill}
          fillOpacity={fillOpacity}
          stroke={stroke}
          strokeWidth={strokeWidth}
        />
      );
    });

  const renderMovingSegmentCells = (blocks: number, fill: string, stroke: string) =>
    Array.from({ length: blocks }, (_, blockIndex) => (
      <rect
        key={`moving-segment-${fill}-${blockIndex}`}
        x={blockIndex * blockStep}
        y={0}
        width={blockWidth}
        height={blockHeight}
        rx="8"
        fill={fill}
        stroke={stroke}
        strokeWidth="1.2"
      />
    ));

  return (
    <div className="rounded-[1.8rem] border border-slate-200 bg-white p-4 shadow-[0_14px_36px_rgba(148,163,184,0.14)] sm:p-5">
      <div className="flex flex-wrap items-center justify-end gap-2">
        <button
          type="button"
          onClick={() => {
            if (subtractionState === 'idle') {
              clearQueuedAnimationSounds();
              playAnimationSound?.('hintBorrow', { gainMultiplier: 0.94, detune: -18 });
              queuedSoundTimeoutIdsRef.current = [
                window.setTimeout(() => {
                  playAnimationSound?.('hintStep', { gainMultiplier: 0.82, detune: -42 });
                }, 680),
                window.setTimeout(() => {
                  playAnimationSound?.('hintResolve', { gainMultiplier: 0.96, detune: -10 });
                }, 1480),
              ];
              setSubtractionState('subtracting');
            }
          }}
          disabled={subtractionState !== 'idle'}
          className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-black shadow-sm transition sm:text-base ${
            subtractionState !== 'idle'
              ? 'cursor-default border border-slate-200 bg-slate-100 text-slate-400'
              : 'border border-sky-500 bg-sky-500 text-white hover:-translate-y-0.5 hover:bg-sky-600'
          }`}
        >
          <Play className="h-4 w-4" />
          남은 시간 보기
        </button>
        <button
          type="button"
          onClick={() => {
            clearQueuedAnimationSounds();
            setSubtractionState('idle');
          }}
          disabled={subtractionState === 'idle'}
          className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-black shadow-sm transition sm:text-base ${
            subtractionState === 'idle'
              ? 'cursor-default border-slate-200 bg-white text-slate-300'
              : 'border-emerald-300 bg-emerald-50 text-emerald-800 hover:-translate-y-0.5 hover:bg-emerald-100'
          }`}
        >
          <RotateCcw className="h-4 w-4" />
          다시 보기
        </button>
      </div>

      <div className="mt-4 overflow-x-auto pb-2">
        <div style={{ minWidth: `${Math.max(width, 620)}px` }}>
          <svg viewBox={`0 0 ${width} ${height}`} className="block w-full" role="img" aria-label="띠모형으로 표현한 시간 뺄셈">
            <defs>
              <pattern id={hatchPatternId} width="12" height="12" patternUnits="userSpaceOnUse" patternTransform="rotate(28)">
                <rect width="12" height="12" fill="#ffeaf2" />
                <line x1="0" y1="0" x2="0" y2="12" stroke="#ff5a95" strokeWidth="3" />
                <line x1="6" y1="0" x2="6" y2="12" stroke="#ff7aa9" strokeWidth="2" opacity="0.92" />
              </pattern>
            </defs>
            <line
              x1={leftPadding}
              y1={topScaleY + 4}
              x2={leftPadding + chartWidth - blockGap}
              y2={topScaleY + 4}
              stroke="#e2e8f0"
              strokeWidth="1.2"
            />

            {Array.from({ length: scaleMinutes + 1 }, (_, minuteIndex) => {
              const x = getMinuteBoundaryX(minuteIndex);
              return (
                <g key={`time-subtraction-bar-scale-${minuteIndex}`}>
                  <text x={x} y={topScaleY} textAnchor="middle" fontSize="14" fontWeight="900" fill="#475569">
                    {minuteIndex}
                  </text>
                  <line
                    x1={x}
                    y1={rowStartY - 8}
                    x2={x}
                    y2={resultRowY + blockHeight + 6}
                    stroke="#94a3b8"
                    strokeWidth="1.15"
                    strokeDasharray="4 7"
                    opacity="0.72"
                  />
                </g>
              );
            })}
            <text
              x={leftPadding + chartWidth - blockGap + 18}
              y={topScaleY}
              textAnchor="start"
              fontSize="14"
              fontWeight="900"
              fill="#64748b"
            >
              분
            </text>

            {rows.map((row) => (
              <g key={row.key}>
                <rect
                  x={metaX}
                  y={row.y - 10}
                  width={metaWidth}
                  height={blockHeight + 20}
                  rx="18"
                  fill={row.accent}
                  stroke={row.stroke}
                  strokeWidth="1.4"
                />
                {row.valueText ? (
                  <>
                    <text x={metaX + 16} y={row.y + 10} textAnchor="start" fontSize="18" fontWeight="900" fill={row.text}>
                      {row.label}
                    </text>
                    <text x={metaX + 16} y={row.y + 29} textAnchor="start" fontSize="15" fontWeight="800" fill={row.text}>
                      {row.valueText}
                    </text>
                  </>
                ) : (
                  <text
                    x={metaX + 16}
                    y={row.y + 14}
                    textAnchor="start"
                    dominantBaseline="middle"
                    fontSize="18"
                    fontWeight="900"
                    fill={row.text}
                  >
                    {row.label}
                  </text>
                )}
                <rect
                  x={leftPadding - 8}
                  y={row.y - 6}
                  width={chartWidth + 16}
                  height={blockHeight + 12}
                  rx="18"
                  fill={row.accent}
                  stroke="#dbe6f2"
                  strokeWidth="1.2"
                />
                {renderFilledCells(row)}
              </g>
            ))}

            <AnimatePresence>
              {subtractionState === 'subtracting' && rightBlocks > 0 ? (
                <motion.g key={`subtracting-group-${problemSignature}`} exit={{ opacity: 0 }} transition={{ duration: 0.24 }}>
                  <motion.g
                    initial={{ x: 0, y: 0, opacity: 0.96 }}
                    animate={{ x: movingRemovalSegmentOffsetX, y: movingRemovalSegmentOffsetY, opacity: 1 }}
                    transition={{ duration: 0.58, ease: smoothEase }}
                    style={{ filter: 'drop-shadow(0 8px 14px rgba(245, 158, 11, 0.22))' }}
                  >
                    <g transform={`translate(${leftPadding} ${rowStartY + rowGap})`}>
                      {renderMovingSegmentCells(rightBlocks, rows[1].fill, rows[1].stroke)}
                    </g>
                  </motion.g>
                  <motion.rect
                    x={removalSegmentStartX}
                    y={rowStartY}
                    width={removalSegmentWidth}
                    height={blockHeight}
                    rx="9"
                    fill="#ffeaf2"
                    stroke="#ff5a95"
                    strokeWidth="1.2"
                    initial={{ opacity: 0, scaleX: 0.2, transformOrigin: `${removalSegmentStartX}px ${rowStartY}px` }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    transition={{ duration: 0.46, delay: 0.52, ease: smoothEase }}
                  />
                  <motion.rect
                    x={removalSegmentStartX}
                    y={rowStartY}
                    width={removalSegmentWidth}
                    height={blockHeight}
                    rx="9"
                    fill={`url(#${hatchPatternId})`}
                    stroke="#ff5a95"
                    strokeWidth="1.25"
                    initial={{ opacity: 0, scaleX: 0.2, transformOrigin: `${removalSegmentStartX}px ${rowStartY}px` }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    transition={{ duration: 0.58, delay: 0.58, ease: smoothEase }}
                  />
                  <motion.path
                    d={`M ${removalSegmentStartX} ${bracketY - 8} V ${bracketY} H ${removalSegmentEndX} V ${bracketY - 8}`}
                    fill="none"
                    stroke="#a16207"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 0.42, delay: 0.82, ease: smoothEase }}
                  />
                  <motion.g
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.34, delay: 0.94, ease: smoothEase }}
                  >
                    <rect
                      x={bracketLabelX - bracketLabelHalf}
                      y={bracketY + 4}
                      width={bracketLabelWidth}
                      height={18}
                      rx="9"
                      fill="#eff7c8"
                      stroke="#b7cd6c"
                      strokeWidth="1.2"
                    />
                    <text
                      x={bracketLabelX}
                      y={bracketY + 17}
                      textAnchor="middle"
                      fontSize="12"
                      fontWeight="900"
                      fill="#6b7b1f"
                    >
                      빼는 부분
                    </text>
                  </motion.g>
                  <motion.g
                    initial={{ x: 0, y: 0, opacity: 0 }}
                    animate={{ x: 0, y: movingResultSegmentOffsetY, opacity: [0, 0.98, 0.16] }}
                    transition={{ duration: 0.62, delay: 1.18, ease: smoothEase }}
                    style={{ filter: 'drop-shadow(0 8px 14px rgba(14, 165, 233, 0.2))' }}
                  >
                    <g transform={`translate(${leftPadding} ${rowStartY})`}>
                      {renderMovingSegmentCells(resultBlocks, rows[2].fill, rows[2].stroke)}
                    </g>
                  </motion.g>
                </motion.g>
              ) : null}
            </AnimatePresence>

            <AnimatePresence>
              {subtractionState === 'subtracted' ? (
                <motion.g
                  initial={{ opacity: 0, y: -8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.34, delay: 0.1, ease: smoothEase }}
                >
                  <line
                    x1={resultBoundaryX}
                    y1={resultRowY - 10}
                    x2={resultBoundaryX}
                    y2={resultRowY + blockHeight + 8}
                    stroke={rows[2].stroke}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <circle
                    cx={resultBoundaryX}
                    cy={resultRowY - 14}
                    r="5"
                    fill="#ffffff"
                    stroke={rows[2].stroke}
                    strokeWidth="1.6"
                  />
                  <circle cx={resultBoundaryX} cy={resultRowY - 14} r="2" fill={rows[2].stroke} />
                </motion.g>
              ) : null}
            </AnimatePresence>
          </svg>
        </div>
      </div>
    </div>
  );
}

function TimeStoryProblemFigure({
  timeAddition,
  condensed = false,
}: {
  timeAddition: TimeAdditionProblemData;
  condensed?: boolean;
}) {
  const storyLines = timeAddition.storyLines ?? [];
  const infoLines = storyLines.length > 1 ? storyLines.slice(0, -1) : [];
  const questionLine = storyLines.length > 1 ? storyLines[storyLines.length - 1] : storyLines[0] ?? '';
  const infoTextClass = condensed
    ? 'text-[1rem] font-bold leading-[1.58] text-slate-700 sm:text-[1.15rem] lg:text-[1.45rem]'
    : 'text-[1.1rem] font-bold leading-[1.72] text-slate-700 sm:text-[1.45rem] md:text-[2rem]';
  const questionTextClass = condensed
    ? 'text-[1.2rem] font-black leading-[1.45] text-slate-900 sm:text-[1.5rem] lg:text-[1.9rem]'
    : 'text-[1.3rem] font-black leading-[1.55] text-slate-900 sm:text-[1.75rem] md:text-[2.45rem]';
  const cardPaddingClass = condensed ? 'px-4 py-3 sm:px-5 sm:py-4' : 'px-4 py-4 sm:px-6 sm:py-5 md:px-8 md:py-7';

  return (
    <div className={`mx-auto flex w-full max-w-[52rem] flex-col text-left text-slate-900 ${
      condensed ? 'gap-3' : 'gap-4 sm:gap-6'
    }`}>
      {infoLines.length > 0 ? (
        <div className={`rounded-[2rem] border border-slate-200 bg-slate-50/85 shadow-sm ${cardPaddingClass}`}>
          <div className={`flex flex-col ${condensed ? 'gap-4' : 'gap-5 md:gap-6'}`}>
            {infoLines.map((line, index) => (
              <p key={`${line}-${index}`} className={`break-keep tracking-[-0.01em] ${infoTextClass}`}>
                {renderPromptWithHighlight(line)}
              </p>
            ))}
          </div>
        </div>
      ) : null}

      {questionLine ? (
        <div className={`rounded-[2rem] border border-amber-200 bg-amber-50/80 shadow-sm ${cardPaddingClass}`}>
          <p className={`break-keep tracking-[-0.01em] ${questionTextClass}`}>{renderPromptWithHighlight(questionLine)}</p>
        </div>
      ) : null}
    </div>
  );
}

function TimeAdditionVerticalFigure({
  left,
  right,
  operation,
  answerValue,
  onAnswerChange,
  onSubmit,
}: {
  left: TimeValue;
  right: TimeValue;
  operation: TimeArithmeticOperation;
  answerValue: ClockReadingAnswerInput;
  onAnswerChange: (part: ClockInputPart, value: string) => void;
  onSubmit: () => void;
}) {
  const columns: Array<{ key: ClockInputPart; label: string }> = [
    { key: 'hours', label: '시간' },
    { key: 'minutes', label: '분' },
    { key: 'seconds', label: '초' },
  ];
  const renderValueText = (value: number, tone: 'slate' | 'amber' = 'slate') => (
    <div
      className={`min-w-[4rem] text-center text-[2rem] font-black leading-none sm:min-w-[4.8rem] sm:text-[2.75rem] ${
        tone === 'amber' ? 'text-amber-900' : 'text-slate-900'
      }`}
    >
      {value}
    </div>
  );

  return (
    <div className="rounded-[1.85rem] border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
      <div className="mx-auto max-w-[34rem]">
        <div className="grid grid-cols-[2.4rem_repeat(3,minmax(0,1fr)_auto)] items-end gap-x-2 gap-y-3 sm:grid-cols-[3rem_repeat(3,minmax(0,1fr)_auto)] sm:gap-x-3">
          <div />
          {columns.map((column) => (
            <React.Fragment key={`top-${column.key}`}>
              {renderValueText(getTimeValuePartValue(left, column.key))}
              <div className="pb-1 text-[2rem] font-black leading-none text-slate-900 sm:text-[2.75rem]">
                {column.label}
              </div>
            </React.Fragment>
          ))}

          <div className="pb-1 text-[2.3rem] font-black leading-none text-slate-900 sm:text-[3.2rem]">{operation}</div>
          {columns.map((column) => (
            <React.Fragment key={`bottom-${column.key}`}>
              {renderValueText(getTimeValuePartValue(right, column.key), 'amber')}
              <div className="pb-1 text-[2rem] font-black leading-none text-slate-900 sm:text-[2.75rem]">
                {column.label}
              </div>
            </React.Fragment>
          ))}

          <div className="col-span-7 mt-1 h-[2px] rounded-full bg-slate-900" />

          <div />
          {columns.map((column) => (
            <React.Fragment key={`answer-${column.key}`}>
              <label className="block">
                <input
                  type="text"
                  inputMode="numeric"
                  autoComplete="off"
                  maxLength={2}
                  value={answerValue[column.key]}
                  onChange={(event) => onAnswerChange(column.key, event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' && !event.ctrlKey && !event.altKey) {
                      event.preventDefault();
                      onSubmit();
                    }
                  }}
                  className="h-[4.2rem] w-full min-w-0 rounded-[0.9rem] border border-slate-400 bg-slate-50 px-2 text-center text-[2rem] font-black text-sky-500 outline-none transition focus:border-sky-400 focus:bg-white sm:h-[4.8rem] sm:text-[2.75rem]"
                  placeholder=""
                  aria-label={column.label}
                />
              </label>
              <div className="pb-1 text-[2rem] font-black leading-none text-slate-900 sm:text-[2.75rem]">
                {column.label}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

function StoryPromptTableCard({
  table,
  condensed = false,
  dense = false,
}: {
  table: StoryPromptTableData;
  condensed?: boolean;
  dense?: boolean;
}) {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
      <table className="w-full table-fixed border-collapse">
        <thead>
          <tr className="bg-emerald-50/90">
            {table.headers.map((header) => (
              <th
                key={header}
                className={`border-b border-slate-200 text-center font-black text-slate-900 ${
                  dense
                    ? 'px-3 py-2 text-[0.95rem] sm:text-[1rem]'
                    : condensed
                      ? 'px-4 py-3 text-[1rem] sm:text-[1.15rem]'
                      : 'px-4 py-3 text-[1.1rem] sm:text-[1.35rem] md:text-[1.6rem]'
                }`}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, rowIndex) => (
            <tr key={`${row.cells.join('-')}-${rowIndex}`} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-slate-50/80'}>
              {row.cells.map((cell, cellIndex) => (
                <td
                  key={`${cell}-${cellIndex}`}
                  className={`text-center font-bold text-slate-800 ${
                    dense
                      ? 'px-3 py-2 text-[0.92rem] leading-[1.32] sm:text-[1rem]'
                      : condensed
                        ? 'px-4 py-3 text-[1rem] leading-[1.45] sm:text-[1.1rem]'
                        : 'px-4 py-3 text-[1.08rem] leading-[1.5] sm:text-[1.3rem] md:text-[1.6rem]'
                  } ${rowIndex > 0 ? 'border-t border-slate-200' : ''} ${cellIndex > 0 ? 'border-l border-slate-200' : ''}`}
                >
                  {renderPromptWithHighlight(cell)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function BattleStructuredTimeInput({
  parts,
  answerValue,
  onAnswerChange,
  onSubmit,
  canSubmit,
  condensed = false,
}: {
  parts: ClockInputPart[];
  answerValue: ClockReadingAnswerInput;
  onAnswerChange: (part: ClockInputPart, value: string) => void;
  onSubmit: () => void;
  canSubmit: boolean;
  condensed?: boolean;
}) {
  const labels: Record<ClockInputPart, string> = { hours: '시', minutes: '분', seconds: '초' };
  const textSizeClass = condensed ? 'text-xl sm:text-2xl' : 'text-2xl sm:text-3xl';

  return (
    <div className={`grid grid-cols-[minmax(0,1fr)_auto] items-stretch ${condensed ? 'gap-2' : 'gap-3'}`}>
      <div
        className={`flex min-w-0 items-center rounded-2xl border-4 border-slate-500 bg-slate-700 px-2 focus-within:border-emerald-500 ${
          condensed ? 'py-1.5' : 'py-2'
        }`}
      >
        <div
          className="grid min-w-0 flex-1"
          style={{ gridTemplateColumns: `repeat(${parts.length}, minmax(0, 1fr))` }}
        >
          {parts.map((part, index) => (
            <label
              key={part}
              className={`flex min-w-0 items-center justify-center gap-2 px-3 ${
                condensed ? 'py-1.5 sm:px-3' : 'py-2 sm:px-4'
              } ${index > 0 ? 'border-l-2 border-slate-500/80' : ''}`}
            >
              <input
                type="text"
                inputMode="numeric"
                autoComplete="off"
                maxLength={2}
                value={answerValue[part]}
                onChange={(event) => onAnswerChange(part, event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' && !event.ctrlKey && !event.altKey) {
                    event.preventDefault();
                    onSubmit();
                  }
                }}
                className={`min-w-0 flex-1 bg-transparent text-center font-black text-slate-100 outline-none placeholder:text-slate-400 ${textSizeClass}`}
                placeholder=""
                aria-label={labels[part]}
              />
              <span className={`shrink-0 font-black text-slate-100 ${textSizeClass}`}>{labels[part]}</span>
            </label>
          ))}
        </div>
      </div>

      <button
        type="button"
        disabled={!canSubmit}
        onClick={onSubmit}
        className={`flex w-full min-w-0 items-center justify-center gap-2 rounded-2xl px-5 py-3 text-lg font-black text-white shadow-lg sm:min-w-[170px] sm:w-auto sm:px-6 sm:text-xl ${
          canSubmit
            ? 'bg-emerald-600 hover:bg-emerald-500'
            : 'cursor-not-allowed bg-slate-500 opacity-60'
        }`}
      >
        <Sword size={22} /> 공격!
      </button>
    </div>
  );
}

function TimeAdditionProblemCard({
  timeAddition,
  answerValue,
  onAnswerChange,
  onSubmit,
  playAnimationSound,
  condensed = false,
  showAnswerFields = true,
}: {
  timeAddition: TimeAdditionProblemData;
  answerValue: ClockReadingAnswerInput;
  onAnswerChange: (part: ClockInputPart, value: string) => void;
  onSubmit: () => void;
  playAnimationSound?: AnimationSoundPlayer;
  condensed?: boolean;
  showAnswerFields?: boolean;
}) {
  const fields: Array<{ key: ClockInputPart; label: string; placeholder: string }> = [
    { key: 'hours', label: '시', placeholder: '시' },
    { key: 'minutes', label: '분', placeholder: '분' },
    { key: 'seconds', label: '초', placeholder: '초' },
  ].filter((field) => timeAddition.editableParts.includes(field.key));
  const isVerticalMode = timeAddition.mode === 'vertical';
  const isStoryMode = timeAddition.mode === 'story';
  const shouldCenterCard = isVerticalMode || timeAddition.mode === 'clock';

  if (isStoryMode) {
    return (
      <div className="mx-auto flex w-full max-w-[58rem] flex-col gap-4 text-left text-slate-900 sm:gap-5">
        <TimeStoryProblemFigure timeAddition={timeAddition} condensed={condensed} />

        {showAnswerFields ? (
          <div
            className="grid gap-3 sm:gap-4"
            style={{ gridTemplateColumns: `repeat(${fields.length}, minmax(0, 1fr))` }}
          >
            {fields.map((field) => (
              <label
                key={field.key}
                className="flex items-center justify-center gap-2 rounded-[1.5rem] border border-slate-200 bg-white px-3 py-3 shadow-sm sm:gap-3 sm:px-4 sm:py-4"
              >
                <input
                  type="text"
                  inputMode="numeric"
                  autoComplete="off"
                  maxLength={2}
                  value={answerValue[field.key]}
                  onChange={(event) => onAnswerChange(field.key, event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' && !event.ctrlKey && !event.altKey) {
                      event.preventDefault();
                      onSubmit();
                    }
                  }}
                  className="w-full min-w-0 rounded-2xl border-2 border-slate-200 bg-slate-50 px-3 py-3 text-center text-xl font-black text-slate-900 outline-none transition focus:border-sky-400 focus:bg-white sm:text-2xl"
                  placeholder={field.placeholder}
                  aria-label={field.label}
                />
                <span className="shrink-0 text-2xl font-black text-slate-900 sm:text-3xl">{field.label}</span>
              </label>
            ))}
          </div>
        ) : null}
      </div>
    );
  }

  return (
    <div
      className={`mx-auto flex w-full flex-col gap-4 text-left text-slate-900 sm:gap-5 ${
        shouldCenterCard ? 'my-auto' : ''
      } ${
        isVerticalMode ? 'max-w-[62rem]' : timeAddition.mode === 'clock' ? 'max-w-[60rem]' : 'max-w-[58rem]'
      }`}
    >
      <div className="rounded-[2rem] border border-slate-200 bg-slate-50/85 px-4 py-4 shadow-sm sm:px-6 sm:py-5 md:px-8 md:py-7">
        <div>
          {timeAddition.mode === 'clock' ? (
            <ClockTimeAdditionFigure
              start={timeAddition.left}
              add={timeAddition.right}
              result={timeAddition.result}
              operation={timeAddition.operation}
              playAnimationSound={playAnimationSound}
            />
          ) : timeAddition.mode === 'bar' ? (
            <div className="overflow-hidden rounded-[1.75rem] border border-sky-200 bg-white p-3 shadow-[inset_0_2px_14px_rgba(148,163,184,0.12)] sm:p-4">
              {timeAddition.operation === '+' ? (
                <TimeAdditionBarModelFigure
                  left={timeAddition.left}
                  right={timeAddition.right}
                  result={timeAddition.result}
                  playAnimationSound={playAnimationSound}
                />
              ) : (
                <TimeSubtractionBarModelFigure
                  left={timeAddition.left}
                  right={timeAddition.right}
                  result={timeAddition.result}
                  playAnimationSound={playAnimationSound}
                />
              )}
            </div>
          ) : (
            <TimeAdditionVerticalFigure
              left={timeAddition.left}
              right={timeAddition.right}
              operation={timeAddition.operation}
              answerValue={answerValue}
              onAnswerChange={onAnswerChange}
              onSubmit={onSubmit}
            />
          )}
        </div>

        {!isVerticalMode && showAnswerFields ? (
          <>
            <div
              className="mt-4 grid gap-3 sm:gap-4"
              style={{ gridTemplateColumns: `repeat(${fields.length}, minmax(0, 1fr))` }}
            >
              {fields.map((field) => (
                <label
                  key={field.key}
                  className="flex items-center justify-center gap-2 rounded-[1.5rem] border border-slate-200 bg-white px-3 py-3 shadow-sm sm:gap-3 sm:px-4 sm:py-4"
                >
                  <input
                    type="text"
                    inputMode="numeric"
                    autoComplete="off"
                    maxLength={2}
                    value={answerValue[field.key]}
                    onChange={(event) => onAnswerChange(field.key, event.target.value)}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter' && !event.ctrlKey && !event.altKey) {
                        event.preventDefault();
                        onSubmit();
                      }
                    }}
                    className="w-full min-w-0 rounded-2xl border-2 border-slate-200 bg-slate-50 px-3 py-3 text-center text-xl font-black text-slate-900 outline-none transition focus:border-sky-400 focus:bg-white sm:text-2xl"
                    placeholder={field.placeholder}
                    aria-label={field.label}
                  />
                  <span className="shrink-0 text-2xl font-black text-slate-900 sm:text-3xl">{field.label}</span>
                </label>
              ))}
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}

function formatDistanceMapPoints(points: DistanceMapPoint[]) {
  return points.map((point) => `${point.x},${point.y}`).join(' ');
}

function getDistanceMapMidpoint(point: DistanceMapPoint, nextPoint: DistanceMapPoint) {
  return {
    x: (point.x + nextPoint.x) / 2,
    y: (point.y + nextPoint.y) / 2,
  };
}

function renderDistanceMapLandmark(landmark: DistanceMapLandmarkData, scale = 1) {
  const transform = scale === 1
    ? undefined
    : `translate(${landmark.x} ${landmark.y}) scale(${scale}) translate(${-landmark.x} ${-landmark.y})`;

  if (landmark.kind === 'home') {
    return (
      <g key={landmark.id} transform={transform}>
        <polygon
          points={`${landmark.x - 18},${landmark.y - 4} ${landmark.x},${landmark.y - 24} ${landmark.x + 18},${landmark.y - 4}`}
          fill="#fb923c"
          stroke="#c2410c"
          strokeWidth="2.4"
          vectorEffect="non-scaling-stroke"
        />
        <rect
          x={landmark.x - 14}
          y={landmark.y - 4}
          width="28"
          height="22"
          rx="5"
          fill="#fff7ed"
          stroke="#c2410c"
          strokeWidth="2.4"
          vectorEffect="non-scaling-stroke"
        />
        <rect x={landmark.x - 4} y={landmark.y + 5} width="8" height="13" rx="2" fill="#fdba74" />
        <text x={landmark.x} y={landmark.y + 38} textAnchor="middle" fontSize="18" fontWeight="900" fill="#7c2d12">
          {landmark.label}
        </text>
      </g>
    );
  }

  if (landmark.kind === 'reference') {
    return (
      <g key={landmark.id} transform={transform}>
        <line
          x1={landmark.x}
          y1={landmark.y - 4}
          x2={landmark.x}
          y2={landmark.y + 18}
          stroke="#0f172a"
          strokeWidth="3.2"
          vectorEffect="non-scaling-stroke"
        />
        <rect
          x={landmark.x - 20}
          y={landmark.y - 20}
          width="40"
          height="20"
          rx="7"
          fill="#e0f2fe"
          stroke="#0284c7"
          strokeWidth="2.4"
          vectorEffect="non-scaling-stroke"
        />
        <text x={landmark.x} y={landmark.y - 6} textAnchor="middle" fontSize="11" fontWeight="900" fill="#0c4a6e">
          BUS
        </text>
        <text x={landmark.x} y={landmark.y + 38} textAnchor="middle" fontSize="18" fontWeight="900" fill="#0c4a6e">
          {landmark.label}
        </text>
      </g>
    );
  }

  return (
    <g key={landmark.id} transform={transform}>
      <rect
        x={landmark.x - 19}
        y={landmark.y - 18}
        width="38"
        height="28"
        rx="8"
        fill={landmark.accent}
        stroke="#334155"
        strokeWidth="2.6"
        vectorEffect="non-scaling-stroke"
      />
      <rect
        x={landmark.x - 11}
        y={landmark.y - 10}
        width="22"
        height="12"
        rx="4"
        fill="rgba(255,255,255,0.6)"
      />
      <text x={landmark.x} y={landmark.y + 30} textAnchor="middle" fontSize="18" fontWeight="900" fill="#1e293b">
        {landmark.label}
      </text>
    </g>
  );
}

const DISTANCE_CARD_VIEWBOX_WIDTH = 640;
const DISTANCE_CARD_VIEWBOX_HEIGHT = 410;
const DISTANCE_ROUTE_LEFT_X = 102;
const DISTANCE_ROUTE_RIGHT_X = 538;
const DISTANCE_ROUTE_Y = 196;
const DISTANCE_LANDMARK_Y = 114;
const DISTANCE_HOME_X = 72;
const DISTANCE_TARGET_X = 568;
const DISTANCE_DISPLAY_LANDMARK_SCALE = 1.18;
const DISTANCE_ROUTE_STROKE_WIDTH = 32;
const DISTANCE_PROGRESS_STROKE_WIDTH = 16;
const DISTANCE_STEP_BUBBLE_RADIUS = 23;

function getDistanceMapPathLength(points: DistanceMapPoint[]) {
  let total = 0;

  for (let index = 0; index < points.length - 1; index += 1) {
    total += Math.hypot(points[index + 1].x - points[index].x, points[index + 1].y - points[index].y);
  }

  return total;
}

function relocateDistanceMapLandmark(landmark: DistanceMapLandmarkData, x: number, y: number): DistanceMapLandmarkData {
  return { ...landmark, x, y };
}

function createHorizontalDistanceRoute(
  units: number,
  leftX = DISTANCE_ROUTE_LEFT_X,
  rightX = DISTANCE_ROUTE_RIGHT_X,
  y = DISTANCE_ROUTE_Y,
) {
  const safeUnits = Math.max(units, 1);
  return Array.from({ length: safeUnits + 1 }, (_, index) => ({
    x: leftX + ((rightX - leftX) * index) / safeUnits,
    y,
  }));
}

function createHorizontalDistanceSegmentLayouts(
  segments: DistanceChunkSegmentData[],
  leftX = DISTANCE_ROUTE_LEFT_X,
  rightX = DISTANCE_ROUTE_RIGHT_X,
  y = DISTANCE_ROUTE_Y,
) {
  const totalUnits = Math.max(1, segments.reduce((sum, segment) => sum + segment.units, 0));
  const totalWidth = rightX - leftX;
  let cursor = leftX;

  return segments.map((segment) => {
    const width = (totalWidth * segment.units) / totalUnits;
    const startX = cursor;
    const endX = startX + width;
    cursor = endX;

    return {
      ...segment,
      width,
      centerX: (startX + endX) / 2,
      points: [
        { x: startX, y },
        { x: endX, y },
      ],
    };
  });
}

function renderDistanceReferenceBadge({
  x,
  y,
  previewWidth,
  fill,
  stroke,
  textColor,
  lineColor,
  lineStroke,
}: {
  x: number;
  y: number;
  previewWidth: number;
  fill: string;
  stroke: string;
  textColor: string;
  lineColor: string;
  lineStroke: string;
}) {
  return (
    <g transform={`translate(${x}, ${y})`} pointerEvents="none">
      <rect width="222" height="78" rx="24" fill="#ffffff" stroke={stroke} strokeWidth="2.8" />
      <text x="18" y="31" fontSize="18" fontWeight="900" fill={textColor}>집→정류장 500m</text>
      <line x1="18" y1="54" x2={18 + previewWidth} y2="54" stroke={lineColor} strokeWidth="12" strokeLinecap="round" />
      <line x1="18" y1="54" x2={18 + previewWidth} y2="54" stroke={lineStroke} strokeWidth="4" strokeLinecap="round" strokeDasharray="11 8" />
      <rect x="0" y="0" width="222" height="78" rx="24" fill="none" stroke={fill} strokeWidth="0.6" opacity="0.01" />
    </g>
  );
}

function getDistanceMapPointAtDistance(points: DistanceMapPoint[], distance: number) {
  if (points.length === 0) {
    return { x: 0, y: 0 };
  }

  if (points.length === 1 || distance <= 0) {
    return points[0];
  }

  let remaining = distance;

  for (let index = 0; index < points.length - 1; index += 1) {
    const start = points[index];
    const end = points[index + 1];
    const segmentLength = Math.hypot(end.x - start.x, end.y - start.y);

    if (segmentLength === 0) {
      continue;
    }

    if (remaining <= segmentLength) {
      const ratio = remaining / segmentLength;
      return {
        x: start.x + (end.x - start.x) * ratio,
        y: start.y + (end.y - start.y) * ratio,
      };
    }

    remaining -= segmentLength;
  }

  return points[points.length - 1];
}

function getDistanceMapPartialPoints(points: DistanceMapPoint[], distance: number) {
  if (points.length === 0) {
    return [];
  }

  if (points.length === 1) {
    return [points[0], points[0]];
  }

  const clampedDistance = clamp(distance, 0, getDistanceMapPathLength(points));

  if (clampedDistance === 0) {
    return [points[0], points[0]];
  }

  const partial: DistanceMapPoint[] = [points[0]];
  let remaining = clampedDistance;

  for (let index = 0; index < points.length - 1; index += 1) {
    const start = points[index];
    const end = points[index + 1];
    const segmentLength = Math.hypot(end.x - start.x, end.y - start.y);

    if (segmentLength === 0) {
      continue;
    }

    if (remaining >= segmentLength) {
      partial.push(end);
      remaining -= segmentLength;
      continue;
    }

    partial.push(getDistanceMapPointAtDistance([start, end], remaining));
    return partial;
  }

  return partial;
}

function getDistanceAlongDistanceMapPath(points: DistanceMapPoint[], point: DistanceMapPoint) {
  if (points.length <= 1) {
    return 0;
  }

  let bestDistance = Number.POSITIVE_INFINITY;
  let bestAlong = 0;
  let traversed = 0;

  for (let index = 0; index < points.length - 1; index += 1) {
    const start = points[index];
    const end = points[index + 1];
    const dx = end.x - start.x;
    const dy = end.y - start.y;
    const lengthSquared = dx * dx + dy * dy;
    const segmentLength = Math.sqrt(lengthSquared);

    if (segmentLength === 0) {
      continue;
    }

    const rawT = ((point.x - start.x) * dx + (point.y - start.y) * dy) / lengthSquared;
    const t = clamp(rawT, 0, 1);
    const projected = {
      x: start.x + dx * t,
      y: start.y + dy * t,
    };
    const distance = Math.hypot(projected.x - point.x, projected.y - point.y);

    if (distance < bestDistance) {
      bestDistance = distance;
      bestAlong = traversed + segmentLength * t;
    }

    traversed += segmentLength;
  }

  return bestAlong;
}

function getDistanceMapClientPoint(svg: SVGSVGElement | null, clientX: number, clientY: number) {
  if (!svg) {
    return null;
  }

  const rect = svg.getBoundingClientRect();

  if (rect.width === 0 || rect.height === 0) {
    return null;
  }

  return {
    x: ((clientX - rect.left) / rect.width) * DISTANCE_CARD_VIEWBOX_WIDTH,
    y: ((clientY - rect.top) / rect.height) * DISTANCE_CARD_VIEWBOX_HEIGHT,
  };
}

function getSnappedDistanceUnits(distance: number, totalLength: number, units: number) {
  if (units <= 0 || totalLength <= 0) {
    return 0;
  }

  const unitLength = totalLength / units;
  return clamp(Math.round(distance / unitLength), 0, units);
}

function getSnappedDistanceLength(totalLength: number, units: number, filledUnits: number) {
  if (units <= 0 || totalLength <= 0) {
    return 0;
  }

  return (totalLength * filledUnits) / units;
}

function createCenteredDistanceRowPositions(count: number, centerX: number, y: number, gap: number) {
  if (count <= 0) {
    return [];
  }

  const startX = centerX - (gap * (count - 1)) / 2;
  return Array.from({ length: count }, (_, index) => ({
    x: startX + gap * index,
    y,
  }));
}

function useDistancePathMeasure({
  points,
  units,
  resetKey,
}: {
  points: DistanceMapPoint[];
  units: number;
  resetKey: string;
}) {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [filledUnits, setFilledUnits] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const totalLength = getDistanceMapPathLength(points);

  useEffect(() => {
    setFilledUnits(0);
    setIsDragging(false);
  }, [resetKey]);

  const updateFromClientPoint = (clientX: number, clientY: number) => {
    const nextPoint = getDistanceMapClientPoint(svgRef.current, clientX, clientY);

    if (!nextPoint) {
      return;
    }

    const nextDistance = getDistanceAlongDistanceMapPath(points, nextPoint);
    setFilledUnits(getSnappedDistanceUnits(nextDistance, totalLength, units));
  };

  const getPathDragProps = () => ({
    onPointerDown: (event: React.PointerEvent<SVGElement>) => {
      event.preventDefault();
      event.currentTarget.setPointerCapture(event.pointerId);
      setIsDragging(true);
      updateFromClientPoint(event.clientX, event.clientY);
    },
    onPointerMove: (event: React.PointerEvent<SVGElement>) => {
      if (!isDragging) {
        return;
      }

      updateFromClientPoint(event.clientX, event.clientY);
    },
    onPointerUp: (event: React.PointerEvent<SVGElement>) => {
      if (event.currentTarget.hasPointerCapture(event.pointerId)) {
        event.currentTarget.releasePointerCapture(event.pointerId);
      }

      updateFromClientPoint(event.clientX, event.clientY);
      setIsDragging(false);
    },
    onPointerCancel: (event: React.PointerEvent<SVGElement>) => {
      if (event.currentTarget.hasPointerCapture(event.pointerId)) {
        event.currentTarget.releasePointerCapture(event.pointerId);
      }

      setIsDragging(false);
    },
  });

  return {
    svgRef,
    filledUnits,
    filledDistance: getSnappedDistanceLength(totalLength, units, filledUnits),
    resetMeasure: () => {
      setFilledUnits(0);
      setIsDragging(false);
    },
    getPathDragProps,
  };
}

function useDistanceSegmentMeasures({
  segments,
  resetKey,
}: {
  segments: DistanceChunkSegmentData[];
  resetKey: string;
}) {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [filledUnitsById, setFilledUnitsById] = useState<Record<string, number>>(() => (
    Object.fromEntries(segments.map((segment) => [segment.id, 0]))
  ));
  const [activeSegmentId, setActiveSegmentId] = useState<string | null>(null);

  useEffect(() => {
    setFilledUnitsById(Object.fromEntries(segments.map((segment) => [segment.id, 0])));
    setActiveSegmentId(null);
  }, [resetKey, segments]);

  const updateSegment = (segment: DistanceChunkSegmentData, clientX: number, clientY: number) => {
    const nextPoint = getDistanceMapClientPoint(svgRef.current, clientX, clientY);

    if (!nextPoint) {
      return;
    }

    const totalLength = getDistanceMapPathLength(segment.points);
    const distance = getDistanceAlongDistanceMapPath(segment.points, nextPoint);
    const nextUnits = getSnappedDistanceUnits(distance, totalLength, segment.units);

    setFilledUnitsById((prev) => (prev[segment.id] === nextUnits ? prev : { ...prev, [segment.id]: nextUnits }));
  };

  const getSegmentDragProps = (segment: DistanceChunkSegmentData) => ({
    onPointerDown: (event: React.PointerEvent<SVGElement>) => {
      event.preventDefault();
      event.currentTarget.setPointerCapture(event.pointerId);
      setActiveSegmentId(segment.id);
      updateSegment(segment, event.clientX, event.clientY);
    },
    onPointerMove: (event: React.PointerEvent<SVGElement>) => {
      if (activeSegmentId !== segment.id) {
        return;
      }

      updateSegment(segment, event.clientX, event.clientY);
    },
    onPointerUp: (event: React.PointerEvent<SVGElement>) => {
      if (event.currentTarget.hasPointerCapture(event.pointerId)) {
        event.currentTarget.releasePointerCapture(event.pointerId);
      }

      updateSegment(segment, event.clientX, event.clientY);
      setActiveSegmentId(null);
    },
    onPointerCancel: (event: React.PointerEvent<SVGElement>) => {
      if (event.currentTarget.hasPointerCapture(event.pointerId)) {
        event.currentTarget.releasePointerCapture(event.pointerId);
      }

      setActiveSegmentId(null);
    },
  });

  return {
    svgRef,
    filledUnitsById,
    resetMeasures: () => {
      setFilledUnitsById(Object.fromEntries(segments.map((segment) => [segment.id, 0])));
      setActiveSegmentId(null);
    },
    getSegmentDragProps,
  };
}

function DistanceProblemShell({
  leftBadge,
  rightBadge,
  onReset,
  panelClassName,
  children,
}: {
  leftBadge?: React.ReactNode;
  rightBadge?: React.ReactNode;
  onReset: () => void;
  panelClassName: string;
  children: React.ReactNode;
}) {
  const hasHeader = Boolean(leftBadge) || Boolean(rightBadge);

  return (
    <div className="mx-auto flex h-full w-full max-w-full flex-col text-left text-slate-900">
      <div className="flex h-full flex-col rounded-[2rem] border border-slate-200 bg-slate-50 px-2 py-2 shadow-sm sm:px-3 sm:py-3">
        {hasHeader ? (
          <div className="flex flex-wrap items-center justify-between gap-2">
            {leftBadge}
            {rightBadge}
          </div>
        ) : null}

        <div className={`${hasHeader ? 'mt-2' : ''} flex min-h-0 flex-1 flex-col overflow-hidden rounded-[1.75rem] border border-slate-200 p-1.5 sm:p-2 ${panelClassName}`}>
          <div className="min-h-0 flex-1 overflow-hidden rounded-[1.45rem] border border-white bg-white/80">
            {children}
          </div>

          <div className="mt-2 flex justify-end">
            <button
              type="button"
              onClick={onReset}
              className="rounded-[1.3rem] border border-slate-300 bg-white px-4 py-2.5 text-sm font-black text-slate-700 transition hover:bg-slate-50 sm:min-w-[6.5rem]"
            >
              다시
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function renderDistanceWorksheetLandmarkIcon(
  landmark: DistanceWorksheetLandmarkData,
  x: number,
  y: number,
) {
  const stroke = '#475569';

  if (landmark.icon === 'fountain') {
    return (
      <g>
        <rect x={x - 18} y={y + 10} width="36" height="8" rx="4" fill="#bfdbfe" stroke={stroke} strokeWidth="2" />
        <path d={`M ${x} ${y - 20} C ${x - 10} ${y - 2}, ${x - 10} ${y + 12}, ${x} ${y + 4} C ${x + 10} ${y + 12}, ${x + 10} ${y - 2}, ${x} ${y - 20}`} fill="#7dd3fc" opacity="0.9" />
        <circle cx={x} cy={y - 24} r="6" fill="#38bdf8" />
      </g>
    );
  }

  if (landmark.icon === 'station') {
    return (
      <g>
        <rect x={x - 26} y={y - 4} width="52" height="22" rx="6" fill="#fca5a5" stroke={stroke} strokeWidth="2" />
        <rect x={x - 18} y={y + 2} width="12" height="16" rx="3" fill="#fff7ed" />
        <rect x={x + 4} y={y + 2} width="14" height="10" rx="3" fill="#dbeafe" />
        <path d={`M ${x - 30} ${y + 20} H ${x + 30}`} stroke="#334155" strokeWidth="3" strokeLinecap="round" />
        <path d={`M ${x - 26} ${y + 26} H ${x + 26}`} stroke="#94a3b8" strokeWidth="4" strokeLinecap="round" />
      </g>
    );
  }

  if (landmark.icon === 'bank') {
    return (
      <g>
        <polygon points={`${x - 24},${y - 8} ${x},${y - 24} ${x + 24},${y - 8}`} fill="#fef3c7" stroke={stroke} strokeWidth="2" />
        <rect x={x - 24} y={y - 8} width="48" height="28" rx="6" fill="#fde68a" stroke={stroke} strokeWidth="2" />
        {[-12, 0, 12].map((offset) => (
          <rect key={offset} x={x + offset - 3} y={y - 2} width="6" height="16" rx="2" fill="#fff7ed" />
        ))}
      </g>
    );
  }

  if (landmark.icon === 'school') {
    return (
      <g>
        <polygon points={`${x - 28},${y - 6} ${x},${y - 28} ${x + 28},${y - 6}`} fill="#f87171" stroke={stroke} strokeWidth="2" />
        <rect x={x - 24} y={y - 6} width="48" height="30" rx="6" fill="#e0f2fe" stroke={stroke} strokeWidth="2" />
        <rect x={x - 6} y={y + 6} width="12" height="18" rx="3" fill="#fff7ed" />
        <circle cx={x} cy={y - 14} r="5" fill="#fde68a" stroke={stroke} strokeWidth="1.5" />
      </g>
    );
  }

  if (landmark.icon === 'market') {
    return (
      <g>
        <rect x={x - 22} y={y - 4} width="44" height="24" rx="6" fill="#bbf7d0" stroke={stroke} strokeWidth="2" />
        <rect x={x - 24} y={y - 14} width="48" height="10" rx="4" fill="#fcd34d" stroke={stroke} strokeWidth="2" />
        {[-16, -4, 8].map((offset) => (
          <rect key={offset} x={x + offset} y={y + 2} width="8" height="8" rx="2" fill="#fff7ed" />
        ))}
      </g>
    );
  }

  if (landmark.icon === 'bookstore' || landmark.icon === 'library') {
    return (
      <g>
        <rect x={x - 24} y={y - 8} width="48" height="30" rx="7" fill="#bae6fd" stroke={stroke} strokeWidth="2" />
        <rect x={x - 18} y={y - 2} width="12" height="12" rx="3" fill="#fff7ed" />
        <rect x={x} y={y - 2} width="14" height="18" rx="3" fill="#fef3c7" />
      </g>
    );
  }

  if (landmark.icon === 'hospital') {
    return (
      <g>
        <rect x={x - 24} y={y - 8} width="48" height="30" rx="7" fill="#fecdd3" stroke={stroke} strokeWidth="2" />
        <rect x={x - 5} y={y - 2} width="10" height="16" rx="2" fill="#ffffff" />
        <rect x={x - 10} y={y + 3} width="20" height="6" rx="2" fill="#ffffff" />
      </g>
    );
  }

  return (
    <g>
      <circle cx={x} cy={y - 4} r="15" fill="#86efac" stroke={stroke} strokeWidth="2" />
      <rect x={x - 4} y={y + 8} width="8" height="14" rx="3" fill="#a16207" />
    </g>
  );
}

function renderDistanceWorksheetMapBackdrop(variant: DistanceWorksheetMapVariant, roadY: number) {
  const roadTopY = roadY - 37;
  const greenBandY = roadY + 27;

  if (variant === 'river') {
    return (
      <>
        <rect x="28" y="26" width="704" height="264" rx="88" fill="#dcfce7" />
        <path
          d="M68 82 C166 42, 262 52, 356 92 C454 134, 574 126, 692 80 L692 150 C586 180, 468 186, 352 154 C246 124, 158 116, 68 146 Z"
          fill="#bfdbfe"
          opacity="0.95"
        />
        <rect x="52" y={roadTopY} width="656" height="58" rx="29" fill="#fde68a" />
        <path
          d="M62 242 C176 220, 294 218, 404 234 C518 250, 610 250, 700 236"
          stroke="#67e8f9"
          strokeWidth="18"
          strokeLinecap="round"
          opacity="0.78"
        />
        <rect x="74" y={greenBandY + 8} width="612" height="10" rx="5" fill="#34d399" opacity="0.74" />
        {[108, 182, 560, 634].map((x, index) => (
          <g key={`river-tree-${index}`} opacity="0.82">
            <circle cx={x} cy={88 + (index % 2) * 16} r="15" fill="#4ade80" />
            <rect x={x - 3} y={99 + (index % 2) * 16} width="6" height="16" rx="3" fill="#a16207" />
          </g>
        ))}
      </>
    );
  }

  if (variant === 'town') {
    return (
      <>
        <rect x="28" y="26" width="704" height="264" rx="88" fill="#dbeafe" />
        <path d="M72 98 C186 62, 304 62, 412 92 C512 118, 610 116, 688 88 L688 154 L72 154 Z" fill="#bfdbfe" opacity="0.82" />
        <rect x="84" y="74" width="86" height="44" rx="18" fill="#fef2f2" opacity="0.88" />
        <rect x="590" y="78" width="92" height="42" rx="18" fill="#e2e8f0" opacity="0.96" />
        <rect x="52" y={roadTopY} width="656" height="62" rx="22" fill="#d6d3d1" />
        <rect x="52" y={greenBandY} width="656" height="20" rx="10" fill="#fca5a5" opacity="0.72" />
        {[0, 1, 2, 3].map((index) => (
          <rect
            key={`town-crosswalk-${index}`}
            x={326 + index * 14}
            y={roadTopY + 14}
            width="8"
            height="34"
            rx="3"
            fill="#f8fafc"
            opacity="0.82"
          />
        ))}
        {[132, 214, 514, 620].map((x, index) => (
          <g key={`town-tree-${index}`} opacity="0.8">
            <circle cx={x} cy={94 + (index % 2) * 14} r="13" fill="#4ade80" />
            <rect x={x - 3} y={104 + (index % 2) * 14} width="6" height="16" rx="3" fill="#a16207" />
          </g>
        ))}
      </>
    );
  }

  if (variant === 'campus') {
    return (
      <>
        <rect x="28" y="26" width="704" height="264" rx="88" fill="#fef3c7" />
        <path
          d="M84 88 C186 42, 314 42, 404 86 C504 136, 606 130, 680 92 L680 168 L84 168 Z"
          fill="#dcfce7"
          opacity="0.96"
        />
        <path d="M110 142 C204 108, 322 104, 430 130 C532 156, 614 154, 670 136" stroke="#f9a8d4" strokeWidth="22" strokeLinecap="round" opacity="0.34" />
        <rect x="52" y={roadTopY} width="656" height="64" rx="32" fill="#fdba74" />
        <rect x="70" y={greenBandY + 2} width="620" height="16" rx="8" fill="#93c5fd" opacity="0.5" />
        {[114, 196, 560, 640].map((x, index) => (
          <g key={`campus-tree-${index}`} opacity="0.82">
            <circle cx={x} cy={90 + (index % 2) * 18} r="15" fill="#4ade80" />
            <rect x={x - 3} y={102 + (index % 2) * 18} width="6" height="16" rx="3" fill="#a16207" />
          </g>
        ))}
        {[154, 604].map((x, index) => (
          <circle key={`campus-flower-${index}`} cx={x} cy={242 + index * 4} r="7" fill="#f9a8d4" opacity="0.7" />
        ))}
      </>
    );
  }

  if (variant === 'orchard') {
    return (
      <>
        <rect x="28" y="26" width="704" height="264" rx="88" fill="#ecfccb" />
        <path
          d="M76 92 C182 50, 292 56, 386 92 C482 126, 586 126, 684 90 L684 158 L76 158 Z"
          fill="#fde68a"
          opacity="0.42"
        />
        <path d="M86 128 C214 150, 330 150, 448 128 C562 108, 638 104, 686 124" stroke="#86efac" strokeWidth="20" strokeLinecap="round" opacity="0.62" />
        <rect x="52" y={roadTopY} width="656" height="60" rx="30" fill="#f5d38e" />
        <rect x="64" y={greenBandY + 2} width="632" height="18" rx="9" fill="#4ade80" opacity="0.7" />
        {[114, 170, 226, 562, 618].map((x, index) => (
          <g key={`orchard-tree-${index}`} opacity="0.84">
            <circle cx={x} cy={88 + (index % 2) * 18} r="14" fill="#4ade80" />
            <rect x={x - 3} y={98 + (index % 2) * 18} width="6" height="16" rx="3" fill="#a16207" />
            <circle cx={x - 7} cy={82 + (index % 2) * 18} r="3" fill="#fb7185" />
            <circle cx={x + 6} cy={92 + (index % 2) * 18} r="3" fill="#f97316" />
          </g>
        ))}
      </>
    );
  }

  if (variant === 'harbor') {
    return (
      <>
        <rect x="28" y="26" width="704" height="264" rx="88" fill="#dbeafe" />
        <path
          d="M70 92 C180 52, 304 56, 410 96 C514 136, 610 136, 688 92 L688 154 L70 154 Z"
          fill="#93c5fd"
          opacity="0.84"
        />
        <path d="M78 246 C188 222, 306 220, 424 238 C538 254, 626 252, 692 238" stroke="#67e8f9" strokeWidth="20" strokeLinecap="round" opacity="0.66" />
        <rect x="52" y={roadTopY} width="656" height="60" rx="30" fill="#fde68a" />
        <rect x="70" y={greenBandY + 2} width="620" height="14" rx="7" fill="#38bdf8" opacity="0.34" />
        {[116, 184, 566, 632].map((x, index) => (
          <g key={`harbor-anchor-${index}`} opacity="0.82">
            <circle cx={x} cy={90 + (index % 2) * 14} r="12" fill="#f8fafc" stroke="#0f172a" strokeWidth="2.3" />
            <path d={`M${x} ${102 + (index % 2) * 14} v18 M${x - 10} ${112 + (index % 2) * 14} q10 10 20 0`} stroke="#0f172a" strokeWidth="2.3" fill="none" strokeLinecap="round" />
          </g>
        ))}
      </>
    );
  }

  if (variant === 'village') {
    return (
      <>
        <rect x="28" y="26" width="704" height="264" rx="88" fill="#fef3c7" />
        <path
          d="M78 90 C186 48, 304 52, 404 88 C506 124, 596 124, 682 88 L682 158 L78 158 Z"
          fill="#bbf7d0"
          opacity="0.9"
        />
        <path d="M98 138 C210 114, 332 112, 448 130 C564 148, 632 146, 682 132" stroke="#f9a8d4" strokeWidth="18" strokeLinecap="round" opacity="0.42" />
        <rect x="52" y={roadTopY} width="656" height="60" rx="30" fill="#fdba74" />
        <rect x="64" y={greenBandY + 2} width="632" height="18" rx="9" fill="#86efac" opacity="0.72" />
        {[112, 170, 228, 554, 612].map((x, index) => (
          <g key={`village-tree-${index}`} opacity="0.84">
            <circle cx={x} cy={88 + (index % 2) * 18} r="14" fill="#4ade80" />
            <rect x={x - 3} y={98 + (index % 2) * 18} width="6" height="16" rx="3" fill="#a16207" />
            <circle cx={x - 8} cy={82 + (index % 2) * 18} r="3" fill="#f59e0b" />
            <circle cx={x + 7} cy={92 + (index % 2) * 18} r="3" fill="#fb7185" />
          </g>
        ))}
      </>
    );
  }

  return (
    <>
      <rect x="28" y="26" width="704" height="264" rx="88" fill="#d9f99d" />
      <path d="M72 92 C180 40, 290 42, 366 84 C450 130, 566 126, 688 72 L688 160 L72 160 Z" fill="#bbf7d0" opacity="0.7" />
      <rect x="52" y={roadTopY} width="656" height="62" rx="31" fill="#f5d38e" />
      <rect x="52" y={greenBandY} width="656" height="20" rx="10" fill="#86efac" opacity="0.85" />
      {[126, 182, 540, 616].map((x, index) => (
        <g key={`meadow-tree-${index}`} opacity="0.82">
          <circle cx={x} cy={86 + (index % 2) * 18} r="14" fill="#4ade80" />
          <rect x={x - 3} y={96 + (index % 2) * 18} width="6" height="16" rx="3" fill="#a16207" />
        </g>
      ))}
    </>
  );
}

function DistanceWorksheetProblemCard({
  distanceWorksheet,
  condensed = false,
}: {
  distanceWorksheet: DistanceWorksheetProblemData;
  condensed?: boolean;
}) {
  const viewBoxWidth = 760;
  const viewBoxHeight = 360;
  const leftX = 90;
  const rightX = 670;
  const roadY = 205;
  const labelBoxHeight = condensed ? 26 : 28;
  const labelFontSize = condensed ? 16 : 18;
  const labelWidthMultiplier = condensed ? 18 : 20;
  const referenceFontSize = condensed ? 22 : 26;
  const dotXs = Array.from({ length: distanceWorksheet.dotCount }, (_, index) => (
    leftX + ((rightX - leftX) * index) / Math.max(distanceWorksheet.dotCount - 1, 1)
  ));

  return (
    <div className={`mx-auto flex w-full flex-col overflow-visible rounded-[2rem] border-4 border-slate-200 bg-white shadow-sm ${
      condensed ? 'max-w-[52rem]' : 'max-w-[58rem]'
    }`}>
      <div className={`border-b border-slate-200 bg-slate-50/90 ${
        condensed ? 'px-3 py-2.5 sm:px-4 sm:py-3' : 'px-4 py-3 sm:px-6'
      }`}>
        <p className={`break-keep font-black text-slate-900 ${
          condensed ? 'text-[0.95rem] sm:text-[1.02rem]' : 'text-base sm:text-[1.15rem]'
        }`}>
          {distanceWorksheet.instruction}
        </p>
      </div>

      <div className={condensed ? 'px-2.5 pt-2.5 sm:px-4 sm:pt-3.5' : 'px-3 pt-3 sm:px-5 sm:pt-5'}>
        <svg viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`} className="block w-full" role="img" aria-label="거리 어림 학습지 그림">
          {renderDistanceWorksheetMapBackdrop(distanceWorksheet.mapVariant, roadY)}

          {distanceWorksheet.landmarks.map((landmark) => {
            const x = dotXs[landmark.dotIndex] ?? leftX;
            const iconY = landmark.row === 'top' ? 126 : 248;
            const labelY = landmark.row === 'top' ? 50 : 286;
            const textY = landmark.row === 'top' ? 70 : 306;
            const labelWidth = Math.min(condensed ? 126 : 134, Math.max(72, landmark.label.length * labelWidthMultiplier));
            return (
              <g key={landmark.id}>
                <rect
                  x={x - labelWidth / 2}
                  y={labelY}
                  width={labelWidth}
                  height={labelBoxHeight}
                  rx="11"
                  fill="#e0f2fe"
                  stroke="#7dd3fc"
                  strokeWidth="2"
                />
                <text x={x} y={textY} textAnchor="middle" fontSize={labelFontSize} fontWeight="900" fill="#1e3a8a">
                  {landmark.label}
                </text>
                {renderDistanceWorksheetLandmarkIcon(landmark, x, iconY)}
              </g>
            );
          })}

          {dotXs.map((x, index) => (
            <circle key={`dot-${index}`} cx={x} cy={roadY} r="4.5" fill="#111827" />
          ))}

          {(() => {
            const fromX = dotXs[distanceWorksheet.reference.fromDotIndex] ?? leftX;
            const toX = dotXs[distanceWorksheet.reference.toDotIndex] ?? rightX;
            return (
              <g>
                <line x1={fromX} y1={182} x2={toX} y2={182} stroke="#ef4444" strokeWidth="4" strokeLinecap="round" />
                <line x1={fromX} y1={182} x2={fromX} y2={roadY} stroke="#ef4444" strokeWidth="3" />
                <line x1={toX} y1={182} x2={toX} y2={roadY} stroke="#ef4444" strokeWidth="3" />
                <text x={(fromX + toX) / 2} y={172} textAnchor="middle" fontSize={referenceFontSize} fontWeight="900" fill="#ca8a04">
                  {distanceWorksheet.reference.label}
                </text>
              </g>
            );
          })()}
        </svg>
      </div>

      <div className={`shrink-0 ${
        condensed ? 'px-3 py-3 sm:px-4 sm:py-4' : 'px-4 py-4 sm:px-6 sm:py-5'
      }`}>
        <div className="flex items-start gap-3">
          <span className="mt-[0.55rem] h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-500" aria-hidden="true" />
          <p className={`min-w-0 break-keep font-black text-slate-900 ${
            condensed ? 'text-[0.94rem] leading-[1.68] sm:text-[1.08rem]' : 'text-[1rem] leading-[1.75] sm:text-[1.2rem]'
          }`}>
            <span>{distanceWorksheet.prompt.prefix}</span>
            <span className={`mx-2 inline-flex rounded-2xl border-2 border-slate-300 bg-white align-middle shadow-sm ${
              condensed
                ? distanceWorksheet.prompt.kind === 'number'
                  ? 'h-10 w-[4.5rem] sm:w-20'
                  : 'h-10 w-24 sm:w-32'
                : distanceWorksheet.prompt.kind === 'number'
                  ? 'h-11 w-20 sm:w-24'
                  : 'h-11 w-28 sm:w-36'
            }`} aria-hidden="true" />
            <span>{distanceWorksheet.prompt.suffix}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function DistanceStrategyBadge({
  label,
  cue,
  containerClassName,
  chipClassName,
  cueClassName,
}: {
  label: string;
  cue: string;
  containerClassName: string;
  chipClassName: string;
  cueClassName: string;
}) {
  return (
    <div className={`flex flex-wrap items-center gap-2 rounded-full px-3 py-2 ${containerClassName}`}>
      <span className={`rounded-full px-3 py-1 text-sm font-black ${chipClassName}`}>{label}</span>
      <span className={`text-sm font-black ${cueClassName}`}>{cue}</span>
    </div>
  );
}

function DistanceSentenceField({
  distanceMap,
  answerValue,
  onAnswerChange,
  onSubmit,
}: {
  distanceMap: DistanceMapProblemData;
  answerValue: string;
  onAnswerChange: (value: string) => void;
  onSubmit: () => void;
}) {
  return (
    <div className="border-t border-slate-200 bg-white/90 px-4 py-4 sm:px-6">
      <p className="break-keep text-[1.05rem] font-black leading-[1.9] text-slate-900 sm:text-[1.35rem]">
        <span>집에서 {distanceMap.targetLabel}까지의 거리는 약 </span>
        <label className="mx-2 inline-flex h-12 w-20 items-center justify-center rounded-2xl border-2 border-slate-400 bg-white align-middle shadow-sm sm:h-14 sm:w-24">
          <span className="sr-only">{distanceMap.targetLabel}까지의 거리</span>
          <input
            type="number"
            inputMode="numeric"
            value={answerValue}
            onChange={(event) => onAnswerChange(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === 'Enter' && !event.ctrlKey && !event.altKey) {
                event.preventDefault();
                onSubmit();
              }
            }}
            className="w-full bg-transparent px-2 text-center text-xl font-black text-slate-900 outline-none placeholder:text-slate-300 sm:text-2xl"
            placeholder="?"
          />
        </label>
        <span>km입니다.</span>
      </p>
    </div>
  );
}

function DistanceWorksheetLayout({
  distanceMap,
  answerValue,
  onAnswerChange,
  onSubmit,
  children,
}: {
  distanceMap: DistanceMapProblemData;
  answerValue: string;
  onAnswerChange: (value: string) => void;
  onSubmit: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full flex-col">
      <div className="border-b border-slate-200 bg-white/80 px-4 py-3 sm:px-5">
        <p className="text-sm font-black text-slate-700 sm:text-base">{distanceMap.question}</p>
      </div>
      <div className="min-h-0 flex-1">
        {children}
      </div>
      <DistanceSentenceField
        distanceMap={distanceMap}
        answerValue={answerValue}
        onAnswerChange={onAnswerChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}

function DistanceCompareProblemCard({
  distanceMap,
  answerValue,
  onAnswerChange,
  onSubmit,
}: {
  distanceMap: DistanceCompareProblemData;
  answerValue: string;
  onAnswerChange: (value: string) => void;
  onSubmit: () => void;
}) {
  const totalSlots = distanceMap.compareSlotCount;
  const targetUnits = Math.max(1, Math.round(distanceMap.targetMeters / distanceMap.referenceMeters));
  const routePoints = createHorizontalDistanceRoute(totalSlots);
  const routeStart = routePoints[0];
  const routeEnd = routePoints[routePoints.length - 1];
  const routeWidth = routeEnd.x - routeStart.x;
  const routeCenters = routePoints.slice(0, -1).map((point, index) => getDistanceMapMidpoint(point, routePoints[index + 1]));
  const referencePreviewWidth = Math.min(routeWidth / totalSlots, 136);
  const homeLandmark = distanceMap.landmarks.find((landmark) => landmark.id === 'home') ?? null;
  const targetLandmark = distanceMap.landmarks.find((landmark) => landmark.label === distanceMap.targetLabel) ?? null;
  const homeDisplayLandmark = homeLandmark ? relocateDistanceMapLandmark(homeLandmark, DISTANCE_HOME_X, DISTANCE_LANDMARK_Y) : null;
  const targetDisplayLandmark = targetLandmark ? relocateDistanceMapLandmark(targetLandmark, DISTANCE_TARGET_X, DISTANCE_LANDMARK_Y) : null;
  const {
    svgRef,
    filledUnits,
    filledDistance,
    resetMeasure,
    getPathDragProps,
  } = useDistancePathMeasure({
    points: routePoints,
    units: totalSlots,
    resetKey: [distanceMap.strategy, distanceMap.targetLabel, distanceMap.targetMeters].join('-'),
  });
  const targetDistance = getSnappedDistanceLength(routeWidth, totalSlots, targetUnits);
  const targetEndX = routeStart.x + targetDistance;
  const filledEndX = routeStart.x + filledDistance;

  return (
    <DistanceProblemShell
      leftBadge={(
        <DistanceStrategyBadge
          label="비교"
          cue="500m 몇 번?"
          containerClassName="bg-sky-50"
          chipClassName="bg-sky-500 text-white"
          cueClassName="text-sky-900"
        />
      )}
      rightBadge={(
        <div className="rounded-full bg-white px-4 py-2 text-lg font-black text-slate-900 sm:text-xl">
          집 → {distanceMap.targetLabel}
        </div>
      )}
      onReset={resetMeasure}
      panelClassName="bg-sky-50"
    >
      <DistanceWorksheetLayout
        distanceMap={distanceMap}
        answerValue={answerValue}
        onAnswerChange={onAnswerChange}
        onSubmit={onSubmit}
      >
        <svg
          ref={svgRef}
          viewBox={'0 0 ' + DISTANCE_CARD_VIEWBOX_WIDTH + ' ' + DISTANCE_CARD_VIEWBOX_HEIGHT}
          className="block h-full w-full touch-none"
          role="img"
          aria-label="comparison distance card"
        >
          <rect x="0" y="0" width="640" height="410" rx="30" fill="#eff6ff" />

          {renderDistanceReferenceBadge({
            x: 28,
            y: 24,
            previewWidth: referencePreviewWidth,
            fill: '#eff6ff',
            stroke: '#93c5fd',
            textColor: '#0c4a6e',
            lineColor: '#7dd3fc',
            lineStroke: '#0369a1',
          })}

          {homeDisplayLandmark ? renderDistanceMapLandmark(homeDisplayLandmark, DISTANCE_DISPLAY_LANDMARK_SCALE) : null}
          {targetDisplayLandmark ? renderDistanceMapLandmark(targetDisplayLandmark, DISTANCE_DISPLAY_LANDMARK_SCALE) : null}

          <line
            x1={routeStart.x}
            y1={DISTANCE_ROUTE_Y}
            x2={routeEnd.x}
            y2={DISTANCE_ROUTE_Y}
            stroke="#dbeafe"
            strokeWidth={DISTANCE_ROUTE_STROKE_WIDTH}
            strokeLinecap="round"
          />
          <line
            x1={routeStart.x}
            y1={DISTANCE_ROUTE_Y}
            x2={targetEndX}
            y2={DISTANCE_ROUTE_Y}
            stroke="#fdba74"
            strokeWidth={DISTANCE_ROUTE_STROKE_WIDTH}
            strokeLinecap="round"
            opacity="0.78"
          />
          <line
            x1={routeStart.x}
            y1={DISTANCE_ROUTE_Y}
            x2={filledEndX}
            y2={DISTANCE_ROUTE_Y}
            stroke="#38bdf8"
            strokeWidth={DISTANCE_PROGRESS_STROKE_WIDTH}
            strokeLinecap="round"
          />

          {routeCenters.map((point, index) => {
            const unitNumber = index + 1;
            const isFilled = filledUnits >= unitNumber;
            const isTargetUnit = unitNumber <= targetUnits;
            return (
              <g key={'compare-slot-' + unitNumber} pointerEvents="none">
                <circle
                  cx={point.x}
                  cy={DISTANCE_ROUTE_Y}
                  r={DISTANCE_STEP_BUBBLE_RADIUS}
                  fill={isFilled ? '#38bdf8' : '#ffffff'}
                  stroke={isTargetUnit ? '#f97316' : '#94a3b8'}
                  strokeWidth="4"
                />
                <text
                  x={point.x}
                  y={DISTANCE_ROUTE_Y + 7}
                  textAnchor="middle"
                  fontSize="21"
                  fontWeight="900"
                  fill={isFilled ? '#ffffff' : isTargetUnit ? '#c2410c' : '#475569'}
                >
                  {unitNumber}
                </text>
              </g>
            );
          })}

          <polyline
            points={formatDistanceMapPoints(routePoints)}
            fill="none"
            stroke="transparent"
            strokeWidth="76"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ touchAction: 'none', cursor: 'grab' }}
            {...getPathDragProps()}
          />
        </svg>
      </DistanceWorksheetLayout>
    </DistanceProblemShell>
  );
}

function DistanceChunkProblemCard({
  distanceMap,
  answerValue,
  onAnswerChange,
  onSubmit,
}: {
  distanceMap: DistanceChunkProblemData;
  answerValue: string;
  onAnswerChange: (value: string) => void;
  onSubmit: () => void;
}) {
  const segmentLayouts = createHorizontalDistanceSegmentLayouts(distanceMap.segments);
  const routeStart = segmentLayouts[0]?.points[0] ?? { x: DISTANCE_ROUTE_LEFT_X, y: DISTANCE_ROUTE_Y };
  const routeEnd = segmentLayouts[segmentLayouts.length - 1]?.points[1] ?? { x: DISTANCE_ROUTE_RIGHT_X, y: DISTANCE_ROUTE_Y };
  const {
    svgRef,
    filledUnitsById,
    resetMeasures,
    getSegmentDragProps,
  } = useDistanceSegmentMeasures({
    segments: segmentLayouts,
    resetKey: [distanceMap.strategy, distanceMap.targetLabel, distanceMap.targetMeters].join('-'),
  });
  const homeLandmark = distanceMap.landmarks.find((landmark) => landmark.id === 'home') ?? null;
  const targetLandmark = distanceMap.landmarks.find((landmark) => landmark.label === distanceMap.targetLabel) ?? null;
  const homeDisplayLandmark = homeLandmark ? relocateDistanceMapLandmark(homeLandmark, DISTANCE_HOME_X, DISTANCE_LANDMARK_Y) : null;
  const targetDisplayLandmark = targetLandmark ? relocateDistanceMapLandmark(targetLandmark, DISTANCE_TARGET_X, DISTANCE_LANDMARK_Y) : null;

  return (
    <DistanceProblemShell
      leftBadge={(
        <DistanceStrategyBadge
          label="묶기"
          cue="500m씩"
          containerClassName="bg-amber-50"
          chipClassName="bg-amber-400 text-amber-950"
          cueClassName="text-amber-900"
        />
      )}
      rightBadge={(
        <div className="rounded-full bg-white px-4 py-2 text-lg font-black text-slate-900 sm:text-xl">
          집 → {distanceMap.targetLabel}
        </div>
      )}
      onReset={resetMeasures}
      panelClassName="bg-amber-50"
    >
      <DistanceWorksheetLayout
        distanceMap={distanceMap}
        answerValue={answerValue}
        onAnswerChange={onAnswerChange}
        onSubmit={onSubmit}
      >
        <svg
          ref={svgRef}
          viewBox={'0 0 ' + DISTANCE_CARD_VIEWBOX_WIDTH + ' ' + DISTANCE_CARD_VIEWBOX_HEIGHT}
          className="block h-full w-full touch-none"
          role="img"
          aria-label="chunk distance card"
        >
          <rect x="0" y="0" width="640" height="410" rx="30" fill="#fffbeb" />

          {homeDisplayLandmark ? renderDistanceMapLandmark(homeDisplayLandmark, DISTANCE_DISPLAY_LANDMARK_SCALE) : null}
          {targetDisplayLandmark ? renderDistanceMapLandmark(targetDisplayLandmark, DISTANCE_DISPLAY_LANDMARK_SCALE) : null}

          <line
            x1={routeStart.x}
            y1={DISTANCE_ROUTE_Y}
            x2={routeEnd.x}
            y2={DISTANCE_ROUTE_Y}
            stroke="#fde68a"
            strokeWidth={DISTANCE_ROUTE_STROKE_WIDTH}
            strokeLinecap="round"
            opacity="0.65"
          />

          {segmentLayouts.map((segment) => {
            const filledCount = filledUnitsById[segment.id] ?? 0;
            const filledDistance = getSnappedDistanceLength(segment.width, segment.units, filledCount);
            const partialPoints = getDistanceMapPartialPoints(segment.points, filledDistance);
            const boxWidth = segment.units >= 2 ? 194 : 146;
            const slotGap = segment.units > 1 ? 60 : 0;

            return (
              <g key={'chunk-segment-' + segment.id}>
                <polyline
                  points={formatDistanceMapPoints(segment.points)}
                  fill="none"
                  stroke={segment.color}
                  strokeWidth={DISTANCE_ROUTE_STROKE_WIDTH}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity="0.32"
                />
                <polyline
                  points={formatDistanceMapPoints(partialPoints)}
                  fill="none"
                  stroke={segment.color}
                  strokeWidth={DISTANCE_PROGRESS_STROKE_WIDTH}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <line
                  x1={segment.centerX}
                  y1={DISTANCE_ROUTE_Y + 28}
                  x2={segment.centerX}
                  y2={248}
                  stroke="#fdba74"
                  strokeWidth="3"
                  strokeDasharray="6 7"
                  opacity="0.8"
                />
                <g transform={'translate(' + (segment.centerX - boxWidth / 2) + ', 248)'}>
                  <rect width={boxWidth} height="96" rx="22" fill="#ffffff" stroke={segment.color} strokeWidth="4" />
                  <rect x="16" y="16" width="42" height="10" rx="5" fill={segment.color} />
                  {Array.from({ length: segment.units }, (_, unitIndex) => {
                    const slotX = boxWidth / 2 - (slotGap * (segment.units - 1)) / 2 + slotGap * unitIndex;
                    const isFilled = unitIndex < filledCount;
                    return (
                      <circle
                        key={segment.id + '-overlay-' + unitIndex}
                        cx={slotX}
                        cy="54"
                        r="18"
                        fill={isFilled ? segment.color : '#fff7ed'}
                        stroke={isFilled ? '#7c2d12' : '#fdba74'}
                        strokeWidth="4"
                        strokeDasharray={isFilled ? undefined : '5 6'}
                      />
                    );
                  })}
                  <text x={boxWidth / 2} y="82" textAnchor="middle" fontSize="20" fontWeight="900" fill="#9a3412">?</text>
                </g>
              </g>
            );
          })}

          {segmentLayouts.map((segment) => (
            <polyline
              key={'chunk-drag-' + segment.id}
              points={formatDistanceMapPoints(segment.points)}
              fill="none"
              stroke="transparent"
              strokeWidth="78"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ touchAction: 'none', cursor: 'grab' }}
              {...getSegmentDragProps(segment)}
            />
          ))}
        </svg>
      </DistanceWorksheetLayout>
    </DistanceProblemShell>
  );
}

function DistanceUnitizeProblemCard({
  distanceMap,
  answerValue,
  onAnswerChange,
  onSubmit,
}: {
  distanceMap: DistanceUnitizeProblemData;
  answerValue: string;
  onAnswerChange: (value: string) => void;
  onSubmit: () => void;
}) {
  const totalUnits = Math.max(1, distanceMap.targetRoute.length - 1);
  const displayRoutePoints = createHorizontalDistanceRoute(totalUnits);
  const routeStart = displayRoutePoints[0];
  const routeEnd = displayRoutePoints[displayRoutePoints.length - 1];
  const routeWidth = routeEnd.x - routeStart.x;
  const {
    svgRef,
    filledUnits,
    filledDistance,
    resetMeasure,
    getPathDragProps,
  } = useDistancePathMeasure({
    points: displayRoutePoints,
    units: totalUnits,
    resetKey: [distanceMap.strategy, distanceMap.targetLabel, distanceMap.targetMeters].join('-'),
  });
  const homeLandmark = distanceMap.landmarks.find((landmark) => landmark.id === 'home') ?? null;
  const targetLandmark = distanceMap.landmarks.find((landmark) => landmark.label === distanceMap.targetLabel) ?? null;
  const homeDisplayLandmark = homeLandmark ? relocateDistanceMapLandmark(homeLandmark, DISTANCE_HOME_X, DISTANCE_LANDMARK_Y) : null;
  const targetDisplayLandmark = targetLandmark ? relocateDistanceMapLandmark(targetLandmark, DISTANCE_TARGET_X, DISTANCE_LANDMARK_Y) : null;
  const referencePreviewWidth = Math.min(routeWidth / totalUnits, 136);
  const unitCenters = displayRoutePoints.slice(0, -1).map((point, index) => getDistanceMapMidpoint(point, displayRoutePoints[index + 1]));
  const filledEndX = routeStart.x + filledDistance;

  return (
    <DistanceProblemShell
      leftBadge={(
        <DistanceStrategyBadge
          label="단위화"
          cue="1칸=500m"
          containerClassName="bg-emerald-50"
          chipClassName="bg-emerald-500 text-white"
          cueClassName="text-emerald-900"
        />
      )}
      rightBadge={(
        <div className="rounded-full bg-white px-4 py-2 text-lg font-black text-slate-900 sm:text-xl">
          집 → {distanceMap.targetLabel}
        </div>
      )}
      onReset={resetMeasure}
      panelClassName="bg-emerald-50"
    >
      <DistanceWorksheetLayout
        distanceMap={distanceMap}
        answerValue={answerValue}
        onAnswerChange={onAnswerChange}
        onSubmit={onSubmit}
      >
        <svg
          ref={svgRef}
          viewBox={'0 0 ' + DISTANCE_CARD_VIEWBOX_WIDTH + ' ' + DISTANCE_CARD_VIEWBOX_HEIGHT}
          className="block h-full w-full touch-none"
          role="img"
          aria-label="unitize distance card"
        >
          <rect x="0" y="0" width="640" height="410" rx="30" fill="#f0fdf4" />

          {renderDistanceReferenceBadge({
            x: 28,
            y: 24,
            previewWidth: referencePreviewWidth,
            fill: '#f0fdf4',
            stroke: '#86efac',
            textColor: '#166534',
            lineColor: '#34d399',
            lineStroke: '#047857',
          })}

          {homeDisplayLandmark ? renderDistanceMapLandmark(homeDisplayLandmark, DISTANCE_DISPLAY_LANDMARK_SCALE) : null}
          {targetDisplayLandmark ? renderDistanceMapLandmark(targetDisplayLandmark, DISTANCE_DISPLAY_LANDMARK_SCALE) : null}

          <line
            x1={routeStart.x}
            y1={DISTANCE_ROUTE_Y}
            x2={routeEnd.x}
            y2={DISTANCE_ROUTE_Y}
            stroke="#d1fae5"
            strokeWidth={DISTANCE_ROUTE_STROKE_WIDTH}
            strokeLinecap="round"
          />
          <line
            x1={routeStart.x}
            y1={DISTANCE_ROUTE_Y}
            x2={filledEndX}
            y2={DISTANCE_ROUTE_Y}
            stroke="#10b981"
            strokeWidth={DISTANCE_PROGRESS_STROKE_WIDTH}
            strokeLinecap="round"
          />

          {unitCenters.map((point, index) => {
            const unitNumber = index + 1;
            const isCompleted = filledUnits >= unitNumber;
            return (
              <g key={'unit-marker-' + unitNumber} pointerEvents="none">
                <circle
                  cx={point.x}
                  cy={DISTANCE_ROUTE_Y}
                  r={DISTANCE_STEP_BUBBLE_RADIUS}
                  fill={isCompleted ? '#10b981' : '#ffffff'}
                  stroke={isCompleted ? '#047857' : '#fb923c'}
                  strokeWidth="4"
                />
                <text
                  x={point.x}
                  y={DISTANCE_ROUTE_Y + 7}
                  textAnchor="middle"
                  fontSize="21"
                  fontWeight="900"
                  fill={isCompleted ? '#ffffff' : '#c2410c'}
                >
                  {unitNumber}
                </text>
              </g>
            );
          })}

          <polyline
            points={formatDistanceMapPoints(displayRoutePoints)}
            fill="none"
            stroke="transparent"
            strokeWidth="76"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ touchAction: 'none', cursor: 'grab' }}
            {...getPathDragProps()}
          />
        </svg>
      </DistanceWorksheetLayout>
    </DistanceProblemShell>
  );
}

function DistanceMapProblemCard({
  distanceMap,
  answerValue,
  onAnswerChange,
  onSubmit,
}: {
  distanceMap: DistanceMapProblemData;
  answerValue: string;
  onAnswerChange: (value: string) => void;
  onSubmit: () => void;
}) {
  if (distanceMap.strategy === 'compare') {
    return (
      <DistanceCompareProblemCard
        distanceMap={distanceMap}
        answerValue={answerValue}
        onAnswerChange={onAnswerChange}
        onSubmit={onSubmit}
      />
    );
  }

  if (distanceMap.strategy === 'chunk') {
    return (
      <DistanceChunkProblemCard
        distanceMap={distanceMap}
        answerValue={answerValue}
        onAnswerChange={onAnswerChange}
        onSubmit={onSubmit}
      />
    );
  }

  return (
    <DistanceUnitizeProblemCard
      distanceMap={distanceMap}
      answerValue={answerValue}
      onAnswerChange={onAnswerChange}
      onSubmit={onSubmit}
    />
  );
}

function createEstimationChoices(answer: number) {
  const roundedAnswer = clamp(
    roundToNearestUnit(answer, ESTIMATION_ROUNDING_UNIT),
    ESTIMATION_MIN_ANSWER,
    ESTIMATION_MAX_ANSWER,
  );
  const candidates = new Set<number>([roundedAnswer]);

  for (let step = 1; candidates.size < 3; step += 1) {
    const lower = roundedAnswer - ESTIMATION_ROUNDING_UNIT * step;
    if (lower >= ESTIMATION_MIN_ANSWER) {
      candidates.add(lower);
    }

    if (candidates.size >= 3) {
      break;
    }

    const upper = roundedAnswer + ESTIMATION_ROUNDING_UNIT * step;
    if (upper <= ESTIMATION_MAX_ANSWER) {
      candidates.add(upper);
    }
  }

  return {
    answer: roundedAnswer,
    options: shuffleNumbers([...candidates]),
  };
}

function createEstimationOperand(anchor: number) {
  const minValue = Math.max(ESTIMATION_MIN_ANSWER, anchor - ESTIMATION_ROUNDING_UNIT / 2 + 1);
  const maxValue = Math.min(999, anchor + ESTIMATION_ROUNDING_UNIT / 2 - 1);
  const candidates: number[] = [];

  for (let value = minValue; value <= maxValue; value += 1) {
    if (isEstimationBoundaryValue(value)) {
      continue;
    }

    if (Math.abs(value - anchor) < ESTIMATION_MIN_DISTANCE_FROM_ANCHOR) {
      continue;
    }

    if (roundToNearestUnit(value, ESTIMATION_ROUNDING_UNIT) !== anchor) {
      continue;
    }

    candidates.push(value);
  }

  if (candidates.length === 0) {
    return anchor;
  }

  return candidates[randomIntInRange(0, candidates.length - 1)];
}

function createEstimationProblem(): EstimationProblem {
  const anchors = Array.from(
    { length: (ESTIMATION_MAX_ANSWER - ESTIMATION_MIN_ANSWER) / ESTIMATION_ROUNDING_UNIT + 1 },
    (_, index) => ESTIMATION_MIN_ANSWER + index * ESTIMATION_ROUNDING_UNIT,
  );

  for (let attempt = 0; attempt < ESTIMATION_MAX_GENERATION_ATTEMPTS; attempt += 1) {
    const leftAnchor = anchors[randomIntInRange(0, anchors.length - 1)];
    const rightAnchor = anchors[randomIntInRange(0, anchors.length - 1)];
    const left = createEstimationOperand(leftAnchor);
    const right = createEstimationOperand(rightAnchor);
    const isAddition = Math.random() > 0.5;

    if (isAddition) {
      const exactAnswer = left + right;
      const estimatedAnswer = leftAnchor + rightAnchor;
      if (
        estimatedAnswer < ESTIMATION_MIN_ANSWER
        || estimatedAnswer > ESTIMATION_MAX_ANSWER
        || exactAnswer > ESTIMATION_MAX_RAW_ANSWER
        || isEstimationBoundaryValue(exactAnswer)
        || roundToNearestUnit(exactAnswer, ESTIMATION_ROUNDING_UNIT) !== estimatedAnswer
      ) {
        continue;
      }

      const choices = createEstimationChoices(exactAnswer);
      return {
        prompt: ESTIMATION_PROMPT,
        question: `${left} + ${right}`,
        options: choices.options,
        answer: choices.answer,
      };
    }

    const largerAnchor = Math.max(leftAnchor, rightAnchor);
    const smallerAnchor = Math.min(leftAnchor, rightAnchor);
    const leftValue = largerAnchor === leftAnchor ? left : right;
    const rightValue = largerAnchor === leftAnchor ? right : left;
    const exactAnswer = leftValue - rightValue;
    const estimatedAnswer = largerAnchor - smallerAnchor;
    if (
      estimatedAnswer < ESTIMATION_MIN_ANSWER
      || estimatedAnswer > ESTIMATION_MAX_ANSWER
      || exactAnswer < ESTIMATION_MIN_ANSWER
      || exactAnswer > ESTIMATION_MAX_RAW_ANSWER
      || isEstimationBoundaryValue(exactAnswer)
      || roundToNearestUnit(exactAnswer, ESTIMATION_ROUNDING_UNIT) !== estimatedAnswer
    ) {
      continue;
    }

    const choices = createEstimationChoices(exactAnswer);
    return {
      prompt: ESTIMATION_PROMPT,
      question: `${leftValue} - ${rightValue}`,
      options: choices.options,
      answer: choices.answer,
    };
  }

  return {
    prompt: ESTIMATION_PROMPT,
    question: '320 + 180',
    options: shuffleNumbers([400, 500, 600]),
    answer: 500,
  };
}

export default function App() {
  const audioEngineRef = useRef<AudioEngine | null>(null);
  const lowHealthPulsePlayedRef = useRef(false);
  const countdownDangerPlayedRef = useRef(false);
  const zeroTensBorrowCoachmarkLevelsRef = useRef(new Set<number>());
  const unitSelectionChallengeLevelsRef = useRef(new Set<number>());
  const unit3ProblemSequenceRef = useRef<Record<number, number>>({});
  const unit3Level12RoundTemplateOrderRef = useRef<Level12TemplateId[] | null>(null);
  const unit3Level12PreviousTemplateOrderRef = useRef<Level12TemplateId[]>([]);
  const developerProblemHistoryRef = useRef<DeveloperProblemSnapshot[]>([]);
  const developerProblemHistoryIndexRef = useRef(-1);
  const isDeveloperShortcutEnabled = true;
  const [isDeveloperMode, setIsDeveloperMode] = useState(false);
  const [gameState, setGameState] = useState<GameState>('start');
  const [playerName, setPlayerName] = useState(DEFAULT_PLAYER_NAME);
  const [pendingPlayerName, setPendingPlayerName] = useState('');
  const [isNamePromptOpen, setIsNamePromptOpen] = useState(false);
  const [specialOpponentSelections, setSpecialOpponentSelections] = useState<SpecialOpponentSelections>(DEFAULT_SPECIAL_OPPONENT_SELECTIONS);
  const [level, setLevel] = useState(1);
  const [problem, setProblem] = useState<Problem>(() => getProblemForTurn(DEFAULT_LEARNING_UNIT_ID, 1, 100));
  const [inputValue, setInputValue] = useState('');
  const [unitInputValue, setUnitInputValue] = useState('');
  const [clockAnswerInput, setClockAnswerInput] = useState<ClockReadingAnswerInput>({ hours: '', minutes: '', seconds: '' });
  const [isUnitMenuOpen, setIsUnitMenuOpen] = useState(false);
  const [builderSlotValues, setBuilderSlotValues] = useState<Record<string, string>>({});
  const [playerHP, setPlayerHP] = useState(100);
  const [opponentHP, setOpponentHP] = useState(100);
  const [message, setMessage] = useState(() => getOpponentEntranceMessage(DEFAULT_LEARNING_UNIT_ID, 1, DEFAULT_SPECIAL_OPPONENT_SELECTIONS));
  const [showMsg, setShowMsg] = useState(true);
  const [problemCoachmark, setProblemCoachmark] = useState<string | null>(null);
  const [battleDifficulty, setBattleDifficulty] = useState<BattleDifficulty>('normal');
  const [selectedLearningUnitId, setSelectedLearningUnitId] = useState<LearningUnitId | null>(null);
  const activeLearningUnitId = selectedLearningUnitId ?? DEFAULT_LEARNING_UNIT_ID;
  const [isEstimation, setIsEstimation] = useState(false);
  const [estimationProblem, setEstimationProblem] = useState<EstimationProblem | null>(null);
  const [isUnitSelectionChallenge, setIsUnitSelectionChallenge] = useState(false);
  const [unitSelectionChallenge, setUnitSelectionChallenge] = useState<UnitSelectionChallenge | null>(null);
  const [isSpecialChallengeResolving, setIsSpecialChallengeResolving] = useState(false);
  const [timeLeft, setTimeLeft] = useState(ESTIMATION_TIME_LIMIT_SECONDS);
  const [isSecretCodePromptOpen, setIsSecretCodePromptOpen] = useState(false);
  const [secretCodeInput, setSecretCodeInput] = useState('');
  const [secretCodeError, setSecretCodeError] = useState('');
  const [pendingLevelTransition, setPendingLevelTransition] = useState<{
    nextLevel: number;
    shouldQueueEstimation: boolean;
  } | null>(null);

  const updateMessage = (msg: string) => {
    setMessage(msg);
    setShowMsg(true);
    setTimeout(() => setShowMsg(false), 2000);
  };

  useEffect(() => {
    const timer = setTimeout(() => setShowMsg(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!message.endsWith('등장!')) {
      return;
    }

    const nextEntranceMessage = getOpponentEntranceMessage(activeLearningUnitId, level, specialOpponentSelections);
    if (message !== nextEntranceMessage) {
      setMessage(nextEntranceMessage);
    }
  }, [activeLearningUnitId, level, message, specialOpponentSelections]);

  useEffect(() => {
    if (!audioEngineRef.current) {
      audioEngineRef.current = createAudioEngine();
    }

    return () => {
      closeAudioEngine(audioEngineRef.current);
      audioEngineRef.current = null;
    };
  }, []);

  const ensureAudioEngine = () => {
    if (
      !audioEngineRef.current ||
      audioEngineRef.current.context.state === 'closed' ||
      audioEngineRef.current.version !== AUDIO_ENGINE_VERSION
    ) {
      closeAudioEngine(audioEngineRef.current);
      audioEngineRef.current = createAudioEngine();
    }

    return audioEngineRef.current;
  };

  const warmAudio = () => {
    const engine = ensureAudioEngine();
    if (!engine || engine.context.state !== 'suspended') {
      return;
    }

    void engine.context.resume().catch(() => undefined);
  };

  const playSound = (effectName: SoundEffectName, options: SoundPlaybackOptions = {}) => {
    const engine = ensureAudioEngine();
    if (!engine) return;

    const startPlayback = () => playEffect(engine, effectName, options);

    if (engine.context.state === 'suspended') {
      void engine.context.resume().then(startPlayback).catch(() => undefined);
      return;
    }

    startPlayback();
  };

  const queueSound = (effectName: SoundEffectName, delayMs: number, options: SoundPlaybackOptions = {}) => {
    window.setTimeout(() => playSound(effectName, options), delayMs);
  };

  const triggerBattleVictory = (detune: number) => {
    setGameState('win');
    playSound('win', { gainMultiplier: 1.14, detune });
    queueSound('levelUp', 240, {
      gainMultiplier: 0.78,
      detune: detune + 42,
    });
  };

  const pushDeveloperProblemSnapshot = (snapshot: DeveloperProblemSnapshot) => {
    const currentHistory = developerProblemHistoryRef.current;
    const currentIndex = developerProblemHistoryIndexRef.current;
    const trimmedHistory =
      currentIndex >= 0 && currentIndex < currentHistory.length - 1
        ? currentHistory.slice(0, currentIndex + 1)
        : currentHistory.slice();

    const lastSnapshot = trimmedHistory[trimmedHistory.length - 1];
    if (
      lastSnapshot &&
      lastSnapshot.level === snapshot.level &&
      lastSnapshot.opponentHP === snapshot.opponentHP &&
      lastSnapshot.problem === snapshot.problem &&
      lastSnapshot.problemCoachmark === snapshot.problemCoachmark
    ) {
      developerProblemHistoryRef.current = trimmedHistory;
      developerProblemHistoryIndexRef.current = trimmedHistory.length - 1;
      return;
    }

    const nextHistory = [...trimmedHistory, snapshot];
    developerProblemHistoryRef.current = nextHistory;
    developerProblemHistoryIndexRef.current = nextHistory.length - 1;
  };

  const resetDeveloperProblemHistory = () => {
    developerProblemHistoryRef.current = [];
    developerProblemHistoryIndexRef.current = -1;
  };

  const getNextProblemForTurn = (targetUnitId: LearningUnitId, targetLevel: number, targetOpponentHP: number) => {
    if (targetUnitId !== 'unit3') {
      return getProblemForTurn(targetUnitId, targetLevel, targetOpponentHP);
    }

    const nextProblemSequence =
      targetOpponentHP === 100
        ? 1
        : (unit3ProblemSequenceRef.current[targetLevel] ?? 1) + 1;

    unit3ProblemSequenceRef.current[targetLevel] = nextProblemSequence;

    if (targetLevel === 12) {
      if (nextProblemSequence === 1 || !unit3Level12RoundTemplateOrderRef.current) {
        const nextTemplateOrder = buildLevel12RoundTemplateOrder(unit3Level12PreviousTemplateOrderRef.current);
        unit3Level12RoundTemplateOrderRef.current = nextTemplateOrder;
        unit3Level12PreviousTemplateOrderRef.current = nextTemplateOrder;
      }

      return createLevel12TimeMixedProblem(
        nextProblemSequence,
        targetOpponentHP,
        unit3Level12RoundTemplateOrderRef.current ?? LEVEL12_DEFAULT_TEMPLATE_ORDER,
      );
    }

    return getProblemForTurn(targetUnitId, targetLevel, targetOpponentHP, nextProblemSequence);
  };

  const setProblemWithCoachmark = (
    nextProblem: Problem,
    nextLevel: number,
    options: {
      opponentHP?: number;
      recordInDeveloperHistory?: boolean;
    } = {},
  ) => {
    const nextOpponentHP = options.opponentHP ?? opponentHP;
    setUnitInputValue('');
    setClockAnswerInput({ hours: '', minutes: '', seconds: '' });
    setIsUnitMenuOpen(false);

    if (activeLearningUnitId !== 'unit2') {
      setProblem(nextProblem);
      setProblemCoachmark(null);
      if (options.recordInDeveloperHistory !== false) {
        pushDeveloperProblemSnapshot({
          level: nextLevel,
          opponentHP: nextOpponentHP,
          problem: nextProblem,
          problemCoachmark: null,
        });
      }
      return;
    }

    const shouldForceZeroTensBorrowProblem =
      zeroTensBorrowCoachmarkLevelsRef.current.size < MAX_ZERO_TENS_BORROW_COACHMARKS &&
      !zeroTensBorrowCoachmarkLevelsRef.current.has(nextLevel) &&
      nextProblem.kind !== 'builder' &&
      (nextLevel === 6 || nextLevel === 7);

    const resolvedProblem =
      shouldForceZeroTensBorrowProblem && !isZeroTensBorrowProblem(nextProblem)
        ? generateRegularProblem(nextLevel, { requireZeroTensBorrow: true })
        : nextProblem;

    setProblem(resolvedProblem);

    const shouldShowZeroTensBorrowCoachmark =
      isZeroTensBorrowProblem(resolvedProblem) &&
      zeroTensBorrowCoachmarkLevelsRef.current.size < MAX_ZERO_TENS_BORROW_COACHMARKS &&
      !zeroTensBorrowCoachmarkLevelsRef.current.has(nextLevel);

    if (shouldShowZeroTensBorrowCoachmark) {
      zeroTensBorrowCoachmarkLevelsRef.current.add(nextLevel);
      setProblemCoachmark(ZERO_TENS_BORROW_COACHMARK_TEXT);
      if (options.recordInDeveloperHistory !== false) {
        pushDeveloperProblemSnapshot({
          level: nextLevel,
          opponentHP: nextOpponentHP,
          problem: resolvedProblem,
          problemCoachmark: ZERO_TENS_BORROW_COACHMARK_TEXT,
        });
      }
      return;
    }

    setProblemCoachmark(null);
    if (options.recordInDeveloperHistory !== false) {
      pushDeveloperProblemSnapshot({
        level: nextLevel,
        opponentHP: nextOpponentHP,
        problem: resolvedProblem,
        problemCoachmark: null,
      });
    }
  };

  const syncCurrentProblemSnapshot = (nextOpponentHP: number) => {
    const currentIndex = developerProblemHistoryIndexRef.current;
    const currentHistory = developerProblemHistoryRef.current;
    const currentSnapshot = currentHistory[currentIndex];

    if (
      currentSnapshot &&
      currentSnapshot.level === level &&
      currentSnapshot.problem === problem &&
      currentSnapshot.problemCoachmark === problemCoachmark
    ) {
      const nextHistory = currentHistory.slice();
      nextHistory[currentIndex] = {
        ...currentSnapshot,
        opponentHP: nextOpponentHP,
      };
      developerProblemHistoryRef.current = nextHistory;
      return;
    }

    pushDeveloperProblemSnapshot({
      level,
      opponentHP: nextOpponentHP,
      problem,
      problemCoachmark,
    });
  };

  const playVisualControlSound = (sound: VisualControlSound) => {
    const effectName: SoundEffectName =
      sound === 'regroup'
        ? 'hintCarry'
        : sound === 'borrow'
          ? 'hintBorrow'
          : sound === 'resolve'
            ? 'hintResolve'
            : 'hintStep';

    playSound(effectName, sound === 'regroup'
      ? { gainMultiplier: 1.04, detune: 24 }
      : sound === 'borrow'
        ? { gainMultiplier: 1.02, detune: -18 }
        : sound === 'resolve'
          ? { gainMultiplier: 1.08, detune: 18 }
          : { gainMultiplier: 1, detune: 8 });
  };

  const [startTime, setStartTime] = useState(Date.now());
  const [isCritical, setIsCritical] = useState(false);
  const [isShortViewport, setIsShortViewport] = useState(() => {
    if (typeof window === 'undefined') {
      return false;
    }

    return window.innerWidth >= 1024 && window.innerHeight <= 820;
  });

  const [isAttacking, setIsAttacking] = useState(false);
  const [isOpponentAttacking, setIsOpponentAttacking] = useState(false);
  const [isOpponentHit, setIsOpponentHit] = useState(false);
  const [isPlayerHit, setIsPlayerHit] = useState(false);
  const unitMenuRef = useRef<HTMLDivElement | null>(null);
  const playerCharacterImage = isPlayerHit
    ? playerHitImage
    : isAttacking
      ? playerAttackImage
      : playerDefaultImage;
  const opponentSpriteSet = getOpponentSpriteSetForLevel(activeLearningUnitId, level, specialOpponentSelections);
  const opponentCharacterImage = opponentSpriteSet
    ? isOpponentHit
      ? opponentSpriteSet.hit
      : isOpponentAttacking
        ? opponentSpriteSet.attack
        : opponentSpriteSet.default
    : null;
  const currentSpecialOpponent = getConfiguredOpponentForUnit(activeLearningUnitId, level, specialOpponentSelections);
  const currentOpponentName = getOpponentNameForLevel(activeLearningUnitId, level, specialOpponentSelections);
  const opponentImageClassName = currentSpecialOpponent?.spriteClassName ?? '';
  const defeatSceneImageClassName = currentSpecialOpponent?.defeatSceneClassName ?? '';
  const displayPlayerName = playerName.trim() || DEFAULT_PLAYER_NAME;
  const trimmedPendingPlayerName = pendingPlayerName.trim();
  const hasPendingPlayerName = trimmedPendingPlayerName.length > 0;
  const selectedLearningUnit = selectedLearningUnitId
    ? LEARNING_UNITS.find((unit) => unit.id === selectedLearningUnitId) ?? null
    : null;
  const levelDescriptions = getLevelDescriptionsForUnit(activeLearningUnitId);
  const totalLevels = getTotalLevelsForUnit(activeLearningUnitId);
  const maxHealth = 100;
  const battleDifficultyConfig = BATTLE_DIFFICULTY_CONFIG[battleDifficulty];
  const regularAttackDamage = battleDifficultyConfig.regularAttackDamage;
  const regularHitDamage = battleDifficultyConfig.regularHitDamage;
  const estimationAttackDamage = battleDifficultyConfig.estimationAttackDamage;
  const estimationHitDamage = battleDifficultyConfig.estimationHitDamage;

  const [showHint, setShowHint] = useState(false);
  const isSpecialChallengeActive = isEstimation || isUnitSelectionChallenge;
  const canUseHint = activeLearningUnitId === 'unit2' && level <= 7;
  const isHintForced = canUseHint && opponentHP > 50;
  const shouldRenderHorizontalEquation = activeLearningUnitId === 'unit2' && level === 7 && !isHintForced && problem.kind === 'equation';
  const isResultScreen = gameState === 'win' || gameState === 'lose';
  const isWinResult = gameState === 'win';
  const defeatSceneImage = gameState === 'lose' ? getDefeatSceneImageForLevel(activeLearningUnitId, level, specialOpponentSelections) : null;
  const processedOpponentCharacterImage = useEdgeBlackTransparentImage(
    opponentCharacterImage,
    currentSpecialOpponent?.removeSpriteBlackBackground ?? false,
  );
  const processedDefeatSceneImage = useEdgeBlackTransparentImage(
    defeatSceneImage,
    currentSpecialOpponent?.removeDefeatSceneBlackBackground ?? false,
  );
  const currentLevelDescription = levelDescriptions[level] ?? `${level}단계`;
  const finalRecordLabel = gameState === 'win' ? `${level}단계 클리어` : `${level}단계 도달`;
  const finalRecordTopic = currentLevelDescription.replace(/^\d+단계:\s*/, '');
  const builderSlotsById =
    problem.kind === 'builder' && problem.builder
      ? Object.fromEntries(problem.builder.slots.map((slot) => [slot.id, slot])) as Record<string, BuildSlotConfig>
      : {};
  const builderEvaluation = evaluateBuilderProblem(problem, builderSlotValues);

  const resetSecretCodePrompt = () => {
    setIsSecretCodePromptOpen(false);
    setSecretCodeInput('');
    setSecretCodeError('');
    setPendingLevelTransition(null);
  };

  const resetDeveloperBattleState = () => {
    setIsAttacking(false);
    setIsOpponentAttacking(false);
    setIsOpponentHit(false);
    setIsPlayerHit(false);
    setIsEstimation(false);
    setEstimationProblem(null);
    setIsUnitSelectionChallenge(false);
    setUnitSelectionChallenge(null);
    setIsSpecialChallengeResolving(false);
    setTimeLeft(ESTIMATION_TIME_LIMIT_SECONDS);
    setInputValue('');
    setUnitInputValue('');
    setClockAnswerInput({ hours: '', minutes: '', seconds: '' });
    setIsUnitMenuOpen(false);
    resetSecretCodePrompt();
  };

  const restoreDeveloperProblemSnapshot = useEffectEvent((historyIndex: number) => {
    const snapshot = developerProblemHistoryRef.current[historyIndex];
    if (!snapshot) {
      updateMessage('이전 문제 기록이 없어요.');
      playSound('ui', { gainMultiplier: 0.78, detune: -14 });
      return;
    }

    resetDeveloperBattleState();
    developerProblemHistoryIndexRef.current = historyIndex;
    setLevel(snapshot.level);
    setOpponentHP(snapshot.opponentHP);
    setProblem(snapshot.problem);
    setProblemCoachmark(snapshot.problemCoachmark);
  });

  const toggleDeveloperMode = useEffectEvent(() => {
    const nextMode = !isDeveloperMode;
    setIsDeveloperMode(nextMode);
    playSound('ui', {
      gainMultiplier: 0.82,
      detune: nextMode ? 18 : -18,
    });
    updateMessage(nextMode ? '개발자 모드 켜짐' : '개발자 모드 꺼짐');
  });

  const moveToDeveloperLevel = useEffectEvent((targetLevel: number) => {
    if (targetLevel < 1 || targetLevel > totalLevels) {
      updateMessage(`현재 단원에는 ${targetLevel}단계가 없어요.`);
      playSound('ui', { gainMultiplier: 0.78, detune: -12 });
      return;
    }

    resetDeveloperBattleState();
    setPlayerHP(100);
    setLevel(targetLevel);
    setOpponentHP(100);
    setProblemWithCoachmark(getNextProblemForTurn(activeLearningUnitId, targetLevel, 100), targetLevel, { opponentHP: 100 });
    playSound('ui', { gainMultiplier: 0.84, detune: 16 });
    updateMessage(`개발자 모드: ${targetLevel}단계로 이동!`);
  });

  const moveToPreviousDeveloperProblem = useEffectEvent(() => {
    const previousIndex = developerProblemHistoryIndexRef.current - 1;
    if (previousIndex < 0) {
      updateMessage('이전 문제는 더 없어요.');
      playSound('ui', { gainMultiplier: 0.78, detune: -14 });
      return;
    }

    restoreDeveloperProblemSnapshot(previousIndex);
    playSound('ui', { gainMultiplier: 0.8, detune: -8 });
    updateMessage('이전 문제로 이동!');
  });

  const moveToNextDeveloperProblem = useEffectEvent(() => {
    const nextIndex = developerProblemHistoryIndexRef.current + 1;
    if (nextIndex < developerProblemHistoryRef.current.length) {
      restoreDeveloperProblemSnapshot(nextIndex);
      playSound('ui', { gainMultiplier: 0.8, detune: 8 });
      updateMessage('다음 문제로 이동!');
      return;
    }

    resetDeveloperBattleState();
    setProblemWithCoachmark(getNextProblemForTurn(activeLearningUnitId, level, opponentHP), level, { opponentHP });
    playSound('ui', { gainMultiplier: 0.8, detune: 8 });
    updateMessage('다음 문제로 이동!');
  });

  const attackAndMoveToNextDeveloperProblem = useEffectEvent(() => {
    if (isSpecialChallengeResolving || isAttacking || isOpponentAttacking || isOpponentHit || isPlayerHit) {
      return;
    }

    if (isEstimation) {
      resolveEstimationResult(true);
      return;
    }

    if (isUnitSelectionChallenge) {
      resolveUnitSelectionResult(true);
      return;
    }

    resolveProblemResult(true, { skipSpecialChallenges: true });
  });

  const hintProblemText =
    problem.kind === 'builder'
      ? builderEvaluation?.status === 'ready'
        ? builderEvaluation.text
        : null
      : problem.text;
  const normalizedInputValue = inputValue.trim();
  const normalizedUnitInputValue = normalizeAnswerUnit(unitInputValue);
  const normalizedSecretCodeInput = normalizeSecretCode(secretCodeInput);
  const parsedInputAnswer = Number.parseInt(normalizedInputValue, 10);
  const isClockReadingProblem = problem.kind === 'clockReading' && problem.clockReading !== undefined;
  const isTimeAdditionProblem = problem.kind === 'timeAddition' && problem.timeAddition !== undefined;
  const parsedClockAnswer = {
    hours: Number.parseInt(clockAnswerInput.hours.trim(), 10),
    minutes: Number.parseInt(clockAnswerInput.minutes.trim(), 10),
    seconds: Number.parseInt(clockAnswerInput.seconds.trim(), 10),
  };
  const editableClockParts =
    problem.kind === 'clockReading' && problem.clockReading
      ? problem.clockReading.editableParts
      : problem.kind === 'timeAddition' && problem.timeAddition
        ? problem.timeAddition.editableParts
        : [];
  const isStructuredTimeAnswerProblem = isClockReadingProblem || isTimeAdditionProblem;
  const hasValidStructuredTimeInput =
    isStructuredTimeAnswerProblem &&
    editableClockParts.every((part) => {
      const value = clockAnswerInput[part].trim();
      return value.length > 0 && !Number.isNaN(Number.parseInt(value, 10));
    });
  const currentTimeAddition = problem.kind === 'timeAddition' ? problem.timeAddition ?? null : null;
  const isVerticalTimeAdditionProblem = currentTimeAddition?.mode === 'vertical';
  const isStoryTimeAdditionProblem = currentTimeAddition?.mode === 'story';
  const usesBattleStructuredTimeInput = activeLearningUnitId === 'unit3' && level === 12 && isStoryTimeAdditionProblem;
  const currentDistanceWorksheetPrompt =
    problem.kind === 'distanceWorksheet' ? problem.distanceWorksheet?.prompt ?? null : null;
  const normalizedDistanceWorksheetInput = currentDistanceWorksheetPrompt
    ? normalizeDistanceWorksheetAnswer(normalizedInputValue, currentDistanceWorksheetPrompt.kind)
    : '';
  const selectedAnswerUnit = problem.kind === 'builder' ? null : problem.answerUnit ?? null;
  const requiresUnitSelection = problem.kind !== 'builder' && problem.requiresUnitSelection === true && selectedAnswerUnit !== null;
  const answerUnitOptions = requiresUnitSelection && selectedAnswerUnit ? getAnswerUnitOptions(selectedAnswerUnit) : [];
  const hasValidUnitInput = requiresUnitSelection ? normalizedUnitInputValue.length > 0 : true;
  const hasValidAnswerInput = normalizedInputValue.length > 0 && !Number.isNaN(parsedInputAnswer) && hasValidUnitInput;
  const hasValidDistanceWorksheetInput =
    currentDistanceWorksheetPrompt !== null &&
    normalizedDistanceWorksheetInput.length > 0 &&
    hasValidUnitInput;
  const hasSecretCodeInput = normalizedSecretCodeInput.length > 0;
  const usesTextAnswerInput = currentDistanceWorksheetPrompt?.kind === 'place';
  const canAttemptAttack =
    isStructuredTimeAnswerProblem
      ? hasValidStructuredTimeInput
      : problem.kind === 'distanceWorksheet'
      ? Boolean(hasValidDistanceWorksheetInput)
      : problem.kind === 'builder'
      ? hasValidAnswerInput && builderEvaluation?.status === 'ready'
      : hasValidAnswerInput;
  const storyPromptSections = problem.kind === 'story' ? splitStoryPromptSections(problem.prompt) : null;
  const hasNumberedStoryOptions = Boolean(storyPromptSections && storyPromptSections.optionLines.length >= 2);
  const storyTableLineSet = problem.storyTable
    ? new Set(
        problem.storyTable.rows
          .filter((row) => row.cells.length >= 2)
          .map((row) => `${row.cells[0]}: ${row.cells[1]}`),
      )
    : null;
  const filteredNumberedStoryIntroLines = storyPromptSections
    ? storyPromptSections.introLines.filter((line) => !storyTableLineSet?.has(line))
    : [];
  const numberedStoryInfoLines =
    problem.storyTable && filteredNumberedStoryIntroLines.length > 1
      ? filteredNumberedStoryIntroLines.slice(0, -1)
      : [];
  const numberedStoryQuestionLine = problem.storyTable
    ? filteredNumberedStoryIntroLines[filteredNumberedStoryIntroLines.length - 1] ?? ''
    : '';
  const shouldHighlightPromptNumbers = !(activeLearningUnitId === 'unit3' && level === 8);
  const shouldUseCompactUnit3Viewport = activeLearningUnitId === 'unit3' && level >= 8 && !isStoryTimeAdditionProblem;
  const isCompactBattleViewport =
    isShortViewport || shouldUseCompactUnit3Viewport || hasNumberedStoryOptions;
  const numberedStoryOptionCount = storyPromptSections?.optionLines.length ?? 0;
  const isDenseNumberedStoryLayout = Boolean(
    isCompactBattleViewport && problem.kind === 'story' && problem.storyTable && numberedStoryOptionCount >= 4,
  );
  const numberedStoryShellGapClass = isDenseNumberedStoryLayout
    ? 'gap-2 sm:gap-2.5'
    : isCompactBattleViewport
      ? 'gap-3'
      : 'gap-4 sm:gap-5';
  const numberedStoryCardPaddingClass = isDenseNumberedStoryLayout
    ? 'px-3 py-2.5 sm:px-4 sm:py-3'
    : isCompactBattleViewport
      ? 'px-4 py-3 sm:px-5 sm:py-4'
      : 'px-5 py-4 sm:px-6 sm:py-5';
  const numberedStoryInfoTextClass = isDenseNumberedStoryLayout
    ? 'text-[0.92rem] font-bold leading-[1.48] text-slate-700 sm:text-[1rem] lg:text-[1.08rem]'
    : isCompactBattleViewport
      ? 'text-[1rem] font-bold leading-[1.62] text-slate-700 sm:text-[1.2rem] lg:text-[1.45rem]'
      : 'text-[1.1rem] font-bold leading-[1.72] text-slate-700 sm:text-[1.35rem] lg:text-[1.75rem]';
  const numberedStoryQuestionTextClass = isDenseNumberedStoryLayout
    ? 'text-[1.05rem] font-black leading-[1.38] text-slate-900 sm:text-[1.18rem] lg:text-[1.35rem]'
    : isCompactBattleViewport
      ? 'text-[1.2rem] font-black leading-[1.45] text-slate-900 sm:text-[1.55rem] lg:text-[1.9rem]'
      : 'text-[1.35rem] font-black leading-[1.52] text-slate-900 sm:text-[1.75rem] lg:text-[2.2rem]';
  const numberedStoryOptionCardPaddingClass = isDenseNumberedStoryLayout
    ? 'px-3 py-2.5 sm:px-4 sm:py-3'
    : isCompactBattleViewport
      ? 'px-4 py-3 sm:px-5'
      : 'px-5 py-4 sm:px-6';
  const numberedStoryOptionTextClass = isDenseNumberedStoryLayout
    ? 'text-[0.98rem] font-black leading-[1.34] text-slate-900 sm:text-[1.08rem] lg:text-[1.2rem]'
    : isCompactBattleViewport
      ? 'text-[1.2rem] font-black leading-[1.42] text-slate-900 sm:text-[1.5rem] lg:text-[1.85rem]'
      : 'text-[1.35rem] font-black leading-[1.48] text-slate-900 sm:text-[1.7rem] lg:text-[2.15rem]';
  const numberedStoryOptionGridClass = isDenseNumberedStoryLayout
    ? 'grid min-h-0 flex-1 auto-rows-fr gap-2 sm:grid-cols-2 sm:gap-3'
    : `grid min-h-0 flex-1 ${isCompactBattleViewport ? 'gap-3' : 'gap-4'}`;
  const battleShellWidthClass = isCompactBattleViewport ? 'max-w-7xl' : 'max-w-[78rem]';
  const battleShellResponsiveClass = isShortViewport
    ? 'lg:h-auto lg:max-h-none lg:gap-2 lg:p-3'
    : isCompactBattleViewport
      ? 'lg:h-[48rem] lg:max-h-[calc(100svh-3rem)] lg:gap-2 lg:p-3'
      : 'lg:h-[47.5rem] lg:max-h-[calc(100svh-2.5rem)] lg:gap-4 lg:p-6';
  const battleSidebarResponsiveClass = isCompactBattleViewport
    ? 'lg:w-[27%] lg:p-2.5'
    : 'lg:w-[29.5%] lg:p-4';
  const battleSectionResponsiveClass = isCompactBattleViewport ? 'p-2.5 sm:p-3' : 'p-3 sm:p-4';
  const battleStageResponsiveClass = isCompactBattleViewport
    ? 'lg:h-[clamp(12rem,25vh,16rem)]'
    : 'lg:h-[clamp(18.5rem,33vh,23rem)]';
  const battleStageImageResponsiveClass = isCompactBattleViewport
    ? 'h-auto max-h-full'
    : 'h-auto max-h-full';
  const battleRightPanelResponsiveClass = isCompactBattleViewport ? 'gap-2' : 'gap-3';
  const battleTopGroupResponsiveClass = isCompactBattleViewport ? 'gap-2' : 'gap-3';
  const battleInputResponsiveClass = isCompactBattleViewport ? 'gap-2' : 'gap-3';

  useEffect(() => {
    setShowHint(isHintForced);
  }, [problem, isHintForced]);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const syncViewportDensity = () => {
      const viewportWidth = window.visualViewport?.width ?? window.innerWidth;
      const viewportHeight = window.visualViewport?.height ?? window.innerHeight;
      setIsShortViewport(viewportWidth >= 1024 && viewportHeight <= 820);
    };

    syncViewportDensity();
    window.addEventListener('resize', syncViewportDensity);

    return () => {
      window.removeEventListener('resize', syncViewportDensity);
    };
  }, []);

  useEffect(() => {
    if (problem.kind === 'builder' && problem.builder) {
      setBuilderSlotValues(Object.fromEntries(problem.builder.slots.map((slot) => [slot.id, ''])));
      return;
    }

    setBuilderSlotValues({});
  }, [problem]);

  useEffect(() => {
    setClockAnswerInput({ hours: '', minutes: '', seconds: '' });
  }, [problem]);

  useEffect(() => {
    if (isSpecialChallengeActive && !isSpecialChallengeResolving && timeLeft > 0) {
      if (timeLeft === 5 && !countdownDangerPlayedRef.current) {
        countdownDangerPlayedRef.current = true;
        playSound('dangerPulse', { gainMultiplier: 0.95, detune: -40 });
      }

      if (timeLeft <= 3) {
        playSound('tick', {
          gainMultiplier: 1 + (3 - timeLeft) * 0.18,
          detune: (3 - timeLeft) * 80,
          noisePlaybackRateMultiplier: 1 + (3 - timeLeft) * 0.03,
        });
      }
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (isSpecialChallengeActive && !isSpecialChallengeResolving && timeLeft === 0) {
      if (isEstimation) {
        checkEstimation(0);
      } else if (isUnitSelectionChallenge) {
        resolveUnitSelectionResult(false);
      }
    } else {
      countdownDangerPlayedRef.current = false;
    }
  }, [isEstimation, isSpecialChallengeActive, isSpecialChallengeResolving, isUnitSelectionChallenge, timeLeft]);

  useEffect(() => {
    const shouldPulseLowHealth = gameState === 'playing' && !isSpecialChallengeActive && playerHP > 0 && playerHP <= 30;
    setIsCritical(shouldPulseLowHealth || (isSpecialChallengeActive && timeLeft <= 5));

    if (shouldPulseLowHealth && !lowHealthPulsePlayedRef.current) {
      lowHealthPulsePlayedRef.current = true;
      playSound('dangerPulse', { gainMultiplier: 1.05, detune: -70 });
      return;
    }

    if (!shouldPulseLowHealth) {
      lowHealthPulsePlayedRef.current = false;
    }
  }, [gameState, isSpecialChallengeActive, playerHP, timeLeft]);

  const toggleHint = () => {
    playSound('ui');
    setShowHint(prev => !prev);
  };

  const changeBattleDifficulty = (nextDifficulty: BattleDifficulty) => {
    playSound('ui');
    setBattleDifficulty(nextDifficulty);
  };

  const completeLevelTransition = (nextLevel: number, shouldQueueEstimation = false) => {
    setIsOpponentHit(false);
    setIsOpponentAttacking(false);
    setLevel(nextLevel);
    setOpponentHP(100);
    setProblemWithCoachmark(getNextProblemForTurn(activeLearningUnitId, nextLevel, 100), nextLevel, { opponentHP: 100 });
    queueSound('levelUp', 180, {
      gainMultiplier: 1 + nextLevel * 0.025,
      detune: Math.min(nextLevel * 10, 90),
    });
    updateMessage(getOpponentEntranceMessage(activeLearningUnitId, nextLevel, specialOpponentSelections));
    if (shouldQueueEstimation) {
      queueEstimationChallenge();
    }
  };

  const requestSecretCodeForNextLevel = (nextLevel: number, shouldQueueEstimation = false) => {
    setIsOpponentHit(false);
    setIsOpponentAttacking(false);
    setSecretCodeInput('');
    setSecretCodeError('');
    setPendingLevelTransition({ nextLevel, shouldQueueEstimation });
    setIsSecretCodePromptOpen(true);
    playSound('alert', { gainMultiplier: 0.94, detune: 12 });
    updateMessage('3단원 8단계로 가려면 비밀암호를 입력해야 해!');
  };

  const submitSecretCode = () => {
    if (!pendingLevelTransition) {
      return;
    }

    if (!hasSecretCodeInput) {
      setSecretCodeError('비밀암호를 입력해 주세요.');
      playSound('ui');
      updateMessage('비밀암호를 입력해야 8단계로 갈 수 있어!');
      return;
    }

    if (normalizedSecretCodeInput !== normalizeSecretCode(UNIT3_SECRET_CODE_GATE.answer)) {
      setSecretCodeError('비밀암호가 맞지 않아요. 다시 입력해 보세요.');
      playSound('wrong', { gainMultiplier: 0.9, detune: -18 });
      updateMessage('비밀암호가 틀렸어. 다시 확인해 보자!');
      return;
    }

    const { nextLevel, shouldQueueEstimation } = pendingLevelTransition;
    resetSecretCodePrompt();
    playSound('submit', { gainMultiplier: 0.82, detune: 18 });
    completeLevelTransition(nextLevel, shouldQueueEstimation);
  };

  const handleBuilderSlotChange = (slotId: string, nextValue: string) => {
    if (problem.kind !== 'builder' || !problem.builder) return;

    const slot = problem.builder.slots.find((item) => item.id === slotId);
    if (!slot) return;

    const sanitized = nextValue.replace(/\D/g, '').slice(-1);
    if (sanitized && !slot.digits.includes(sanitized)) {
      return;
    }

    setBuilderSlotValues((prev) => ({ ...prev, [slotId]: sanitized }));
  };

  const handleClockAnswerChange = (part: ClockInputPart, nextValue: string) => {
    const sanitized = nextValue.replace(/\D/g, '').slice(0, 2);
    setClockAnswerInput((prev) => ({ ...prev, [part]: sanitized }));
  };

  const selectEstimationOption = (selected: number) => {
    if (isSpecialChallengeResolving) {
      return;
    }

    playSound('submit', { gainMultiplier: 0.78, detune: 20 });
    playSound('ui');
    checkEstimation(selected);
  };

  const selectUnitSelectionOption = (selected: string) => {
    if (isSpecialChallengeResolving) {
      return;
    }

    playSound('submit', { gainMultiplier: 0.8, detune: 12 });
    playSound('ui');
    resolveUnitSelectionResult(selected === unitSelectionChallenge?.answer);
  };

  const queueEstimationChallenge = () => {
    window.setTimeout(() => {
      triggerEstimation();
    }, 700);
  };

  const queueUnitSelectionChallenge = (challengeLevel: number) => {
    window.setTimeout(() => {
      triggerUnitSelectionChallenge(challengeLevel);
    }, 700);
  };

  const scheduleNextLevelTransition = (nextLevel: number, shouldQueueEstimation = false) => {
    const currentLevel = level;
    const currentUnitId = activeLearningUnitId;

    window.setTimeout(() => {
      if (requiresSecretCodeForLevelTransition(currentUnitId, currentLevel, nextLevel)) {
        requestSecretCodeForNextLevel(nextLevel, shouldQueueEstimation);
        return;
      }

      completeLevelTransition(nextLevel, shouldQueueEstimation);
    }, HIT_POSE_DURATION_MS);
  };

  const triggerEstimation = () => {
    const nextEstimationProblem = createEstimationProblem();

    playSound('alert', { gainMultiplier: 1.08, detune: 25 });
    setIsSpecialChallengeResolving(false);
    setEstimationProblem(nextEstimationProblem);
    setIsEstimation(true);
    setTimeLeft(ESTIMATION_TIME_LIMIT_SECONDS);
    updateMessage('갑작스러운 어림잡기 도전!');
  };

  const triggerUnitSelectionChallenge = (challengeLevel: number) => {
    const nextChallenge = createUnitSelectionChallenge(challengeLevel);

    playSound('alert', { gainMultiplier: 1.03, detune: 5 });
    setIsSpecialChallengeResolving(false);
    setUnitSelectionChallenge(nextChallenge);
    setIsUnitSelectionChallenge(true);
    setTimeLeft(UNIT_SELECTION_TIME_LIMIT_SECONDS);
    updateMessage('갑작스러운 단위 선택 도전!');
  };

  const resolveEstimationResult = (isCorrectEstimation: boolean) => {
    if (isSpecialChallengeResolving) {
      return;
    }

    setIsSpecialChallengeResolving(true);
    if (isCorrectEstimation) {
      playSound('correct', {
        gainMultiplier: 1.04 + level * 0.02,
        detune: Math.min(level * 8, 60),
      });
      setIsAttacking(true);
      setTimeout(() => {
        setIsAttacking(false);
        setIsOpponentHit(true);
        playSound('enemyHit', {
          gainMultiplier: 1.1 + level * 0.02,
          detune: Math.min(level * 10, 80),
          noisePlaybackRateMultiplier: 1 + level * 0.01,
        });
        setTimeout(() => setIsOpponentHit(false), HIT_POSE_DURATION_MS);

        const newOpponentHP = Math.max(0, opponentHP - estimationAttackDamage);
        setOpponentHP(newOpponentHP);
        updateMessage('정확한 어림잡기! 공격 성공!');

        if (newOpponentHP === 0) {
          if (level < totalLevels) {
            scheduleNextLevelTransition(level + 1);
          } else {
            triggerBattleVictory(20);
          }
        } else {
          syncCurrentProblemSnapshot(newOpponentHP);
        }

        setIsEstimation(false);
        setEstimationProblem(null);
        setIsSpecialChallengeResolving(false);
      }, ATTACK_POSE_DURATION_MS);
    } else {
      playSound('wrong', {
        gainMultiplier: previewRemainingHP(playerHP, estimationHitDamage) <= 30 ? 1.08 : 1,
        detune: -30,
      });
      setIsOpponentAttacking(true);
      setTimeout(() => {
        setIsOpponentAttacking(false);
        setIsPlayerHit(true);
        playSound('playerHit', {
          gainMultiplier: previewRemainingHP(playerHP, estimationHitDamage) <= 30 ? 1.12 : 1.04,
          detune: -Math.min(level * 10, 70),
          noisePlaybackRateMultiplier: 0.98,
        });
        setTimeout(() => setIsPlayerHit(false), HIT_POSE_DURATION_MS);

        const newPlayerHP = Math.max(0, playerHP - estimationHitDamage);
        setPlayerHP(newPlayerHP);
        updateMessage('어림잡기 실패! 반격당했다!');

        if (newPlayerHP === 0) {
          setGameState('lose');
          playSound('lose', { gainMultiplier: 1.06, detune: -20 });
        }

        setIsEstimation(false);
        setEstimationProblem(null);
        setIsSpecialChallengeResolving(false);
      }, ATTACK_POSE_DURATION_MS);
    }
  };

  const checkEstimation = (selected: number) => {
    resolveEstimationResult(selected === estimationProblem?.answer);
  };

  const resolveUnitSelectionResult = (isCorrectSelection: boolean) => {
    if (isSpecialChallengeResolving) {
      return;
    }

    setIsSpecialChallengeResolving(true);
    if (isCorrectSelection) {
      playSound('correct', {
        gainMultiplier: 1.02 + level * 0.02,
        detune: Math.min(level * 7, 55),
      });
      setIsAttacking(true);
      setTimeout(() => {
        setIsAttacking(false);
        setIsOpponentHit(true);
        playSound('enemyHit', {
          gainMultiplier: 1.08 + level * 0.02,
          detune: Math.min(level * 10, 80),
          noisePlaybackRateMultiplier: 1 + level * 0.01,
        });
        setTimeout(() => setIsOpponentHit(false), HIT_POSE_DURATION_MS);

        const newOpponentHP = Math.max(0, opponentHP - estimationAttackDamage);
        setOpponentHP(newOpponentHP);
        updateMessage('알맞은 단위를 골랐다! 추가 공격 성공!');

        if (newOpponentHP === 0) {
          if (level < totalLevels) {
            scheduleNextLevelTransition(level + 1);
          } else {
            triggerBattleVictory(22);
          }
        } else {
          syncCurrentProblemSnapshot(newOpponentHP);
        }

        setIsUnitSelectionChallenge(false);
        setUnitSelectionChallenge(null);
        setIsSpecialChallengeResolving(false);
      }, ATTACK_POSE_DURATION_MS);
      return;
    }

    playSound('wrong', {
      gainMultiplier: previewRemainingHP(playerHP, estimationHitDamage) <= 30 ? 1.08 : 1,
      detune: -24,
    });
    setIsOpponentAttacking(true);
    setTimeout(() => {
      setIsOpponentAttacking(false);
      setIsPlayerHit(true);
      playSound('playerHit', {
        gainMultiplier: previewRemainingHP(playerHP, estimationHitDamage) <= 30 ? 1.12 : 1.04,
        detune: -Math.min(level * 10, 70),
        noisePlaybackRateMultiplier: 0.98,
      });
      setTimeout(() => setIsPlayerHit(false), HIT_POSE_DURATION_MS);

      const newPlayerHP = Math.max(0, playerHP - estimationHitDamage);
      setPlayerHP(newPlayerHP);
      updateMessage('단위 선택 실패! 상대의 반격!');

      if (newPlayerHP === 0) {
        setGameState('lose');
        playSound('lose', { gainMultiplier: 1.06, detune: -20 });
      }

      setIsUnitSelectionChallenge(false);
      setUnitSelectionChallenge(null);
      setIsSpecialChallengeResolving(false);
    }, ATTACK_POSE_DURATION_MS);
  };

  const resolveProblemResult = (
    isCorrect: boolean,
    options: {
      skipSpecialChallenges?: boolean;
    } = {},
  ) => {
    const skipSpecialChallenges = options.skipSpecialChallenges === true;

    if (isCorrect) {
      playSound('correct', {
        gainMultiplier: 1 + level * 0.018,
        detune: Math.min(level * 7, 55),
      });
      setIsAttacking(true);
      setTimeout(() => {
        setIsAttacking(false);
        setIsOpponentHit(true);
        playSound('enemyHit', {
          gainMultiplier: 1.06 + level * 0.02,
          detune: Math.min(level * 10, 80),
          noisePlaybackRateMultiplier: 1 + level * 0.01,
        });
        setTimeout(() => setIsOpponentHit(false), HIT_POSE_DURATION_MS);
        
        const currentUnit3ProblemSequence = unit3ProblemSequenceRef.current[level] ?? 1;
        const newOpponentHP = isUnit3FixedTimeSequenceLevel(activeLearningUnitId, level)
          ? getUnit3FixedTimeOpponentHPAfterCorrect(currentUnit3ProblemSequence)
          : Math.max(0, opponentHP - regularAttackDamage);
        setOpponentHP(newOpponentHP);
        updateMessage('공격 성공! 데미지를 입혔다!');
        
        if (newOpponentHP === 0) {
          if (level < totalLevels) {
            scheduleNextLevelTransition(
              level + 1,
              !skipSpecialChallenges &&
                activeLearningUnitId === 'unit2' &&
                canOfferEstimation(activeLearningUnitId, 100) &&
                Math.random() < 0.15,
            );
          } else {
            triggerBattleVictory(18);
          }
        } else {
          setProblemWithCoachmark(getNextProblemForTurn(activeLearningUnitId, level, newOpponentHP), level, { opponentHP: newOpponentHP });
          if (
            !skipSpecialChallenges &&
            activeLearningUnitId === 'unit2' &&
            canOfferEstimation(activeLearningUnitId, newOpponentHP) &&
            Math.random() < 0.15
          ) {
            queueEstimationChallenge();
          }
          if (
            !skipSpecialChallenges &&
            activeLearningUnitId === 'unit3' &&
            UNIT_SELECTION_CHALLENGE_LEVELS.has(level) &&
            !unitSelectionChallengeLevelsRef.current.has(level)
          ) {
            unitSelectionChallengeLevelsRef.current.add(level);
            queueUnitSelectionChallenge(level);
          }
        }
      }, ATTACK_POSE_DURATION_MS);
    } else {
      playSound('wrong', {
        gainMultiplier: previewRemainingHP(playerHP, regularHitDamage) <= 30 ? 1.06 : 1,
        detune: -24,
      });
      setIsOpponentAttacking(true);
      setTimeout(() => {
        setIsOpponentAttacking(false);
        setIsPlayerHit(true);
        playSound('playerHit', {
          gainMultiplier: previewRemainingHP(playerHP, regularHitDamage) <= 30 ? 1.1 : 1.03,
          detune: -Math.min(level * 10, 70),
          noisePlaybackRateMultiplier: 0.98,
        });
        setTimeout(() => setIsPlayerHit(false), HIT_POSE_DURATION_MS);
        
        const newPlayerHP = Math.max(0, playerHP - regularHitDamage);
        setPlayerHP(newPlayerHP);
        updateMessage('앗! 공격이 빗나갔다! 상대의 반격!');
        if (newPlayerHP === 0) {
          setGameState('lose');
          playSound('lose', { gainMultiplier: 1.06, detune: -18 });
        }
      }, ATTACK_POSE_DURATION_MS);
    }
    setInputValue('');
    setUnitInputValue('');
    setClockAnswerInput({ hours: '', minutes: '', seconds: '' });
  };

  const checkAnswer = () => {
    if (problem.kind === 'clockReading' && problem.clockReading) {
      if (!hasValidStructuredTimeInput) {
        playSound('ui');
        updateMessage('빈칸을 모두 채워야 공격할 수 있어!');
        return;
      }

      const isCorrect = problem.clockReading.editableParts.every((part) => {
        const expectedValue = getClockReadingPartValue(problem.clockReading!, part);
        const answerValue = parsedClockAnswer[part];
        return answerValue === expectedValue;
      });

      playSound('submit', {
        gainMultiplier: 0.9,
        detune: 10,
      });
      resolveProblemResult(isCorrect);
      return;
    }

    if (problem.kind === 'timeAddition' && problem.timeAddition) {
      if (!hasValidStructuredTimeInput) {
        playSound('ui');
        updateMessage('빈칸을 모두 채워야 공격할 수 있어!');
        return;
      }

      const isCorrect = problem.timeAddition.editableParts.every((part) => {
        const expectedValue = getTimeValuePartValue(problem.timeAddition!.result, part);
        const answerValue = parsedClockAnswer[part];
        return answerValue === expectedValue;
      });

      playSound('submit', {
        gainMultiplier: 0.9,
        detune: 10,
      });
      resolveProblemResult(isCorrect);
      return;
    }

    if (problem.kind === 'distanceWorksheet' && problem.distanceWorksheet) {
      if (!hasValidDistanceWorksheetInput) {
        playSound('ui');
        updateMessage(requiresUnitSelection ? '숫자를 쓰고 단위 버튼도 골라야 공격할 수 있어!' : '정답을 입력해야 공격할 수 있어!');
        return;
      }

      let isCorrect =
        normalizeDistanceWorksheetAnswer(normalizedInputValue, problem.distanceWorksheet.prompt.kind)
        === normalizeDistanceWorksheetAnswer(problem.distanceWorksheet.prompt.answer, problem.distanceWorksheet.prompt.kind);

      if (requiresUnitSelection && selectedAnswerUnit) {
        isCorrect = isCorrect && normalizedUnitInputValue === normalizeAnswerUnit(selectedAnswerUnit);
      }

      playSound('submit', {
        gainMultiplier: 0.9,
        detune: 10,
      });
      resolveProblemResult(isCorrect);
      return;
    }

    if (!hasValidAnswerInput) {
      playSound('ui');
      updateMessage(requiresUnitSelection ? '숫자를 쓰고 단위 버튼도 골라야 공격할 수 있어!' : '정답을 입력해야 공격할 수 있어!');
      return;
    }

    let isCorrect = parsedInputAnswer === problem.answer;

    if (problem.kind === 'builder') {
      if (!builderEvaluation || builderEvaluation.status === 'incomplete' || builderEvaluation.status === 'invalid') {
        playSound('ui');
        updateMessage(builderEvaluation?.message ?? '빈칸에 숫자를 넣어주세요.');
        return;
      }

      isCorrect = parsedInputAnswer === builderEvaluation.answer;
    }

    if (requiresUnitSelection && selectedAnswerUnit) {
      isCorrect = isCorrect && normalizedUnitInputValue === normalizeAnswerUnit(selectedAnswerUnit);
    }

    playSound('submit', {
      gainMultiplier: problem.kind === 'builder' ? 0.82 : 0.9,
      detune: problem.kind === 'builder' ? -10 : 10,
    });
    resolveProblemResult(isCorrect);
  };

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (!unitMenuRef.current) {
        return;
      }

      if (!unitMenuRef.current.contains(event.target as Node)) {
        setIsUnitMenuOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsUnitMenuOpen(false);
      }
    };

    window.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('keydown', handleEscape);
    };
  }, []);

  useEffect(() => {
    if (!requiresUnitSelection) {
      setIsUnitMenuOpen(false);
    }
  }, [requiresUnitSelection]);

  useEffect(() => {
    if (!isDeveloperShortcutEnabled) {
      return;
    }

    const handleDeveloperShortcut = (event: KeyboardEvent) => {
      if (event.repeat) {
        return;
      }

      if (event.key === 'Enter' && event.ctrlKey && event.altKey) {
        event.preventDefault();
        toggleDeveloperMode();
        return;
      }

      if (!isDeveloperMode || gameState !== 'playing') {
        return;
      }

      const targetLevel = getDeveloperLevelFromShortcut(event);
      if (targetLevel !== null) {
        event.preventDefault();
        moveToDeveloperLevel(targetLevel);
        return;
      }

      if (!event.ctrlKey && !event.altKey && !event.metaKey && event.key === 'ArrowRight') {
        event.preventDefault();
        attackAndMoveToNextDeveloperProblem();
        return;
      }

      if (!event.ctrlKey && !event.altKey && !event.metaKey && event.key === 'ArrowLeft') {
        event.preventDefault();
        moveToPreviousDeveloperProblem();
      }
    };

    window.addEventListener('keydown', handleDeveloperShortcut);
    return () => window.removeEventListener('keydown', handleDeveloperShortcut);
  }, [gameState, isDeveloperMode, isDeveloperShortcutEnabled]);

  const startGame = () => {
    const nextSpecialOpponentSelections = pickSpecialOpponentSelections();

    warmAudio();
    playSound('start', { gainMultiplier: 0.8, detune: 12 });
    setGameState('playing');
    setIsAttacking(false);
    setIsOpponentAttacking(false);
    setIsOpponentHit(false);
    setIsPlayerHit(false);
    setSpecialOpponentSelections(nextSpecialOpponentSelections);
    setLevel(1);
    setPlayerHP(100);
    setOpponentHP(100);
    resetDeveloperProblemHistory();
    zeroTensBorrowCoachmarkLevelsRef.current.clear();
    unitSelectionChallengeLevelsRef.current.clear();
    unit3ProblemSequenceRef.current = {};
    unit3Level12RoundTemplateOrderRef.current = null;
    setIsEstimation(false);
    setEstimationProblem(null);
    setIsUnitSelectionChallenge(false);
    setUnitSelectionChallenge(null);
    setIsSpecialChallengeResolving(false);
    setTimeLeft(ESTIMATION_TIME_LIMIT_SECONDS);
    resetSecretCodePrompt();
    setProblemWithCoachmark(getNextProblemForTurn(activeLearningUnitId, 1, 100), 1, { opponentHP: 100 });
    setInputValue('');
    setUnitInputValue('');
    setClockAnswerInput({ hours: '', minutes: '', seconds: '' });
    setIsUnitMenuOpen(false);
    updateMessage(getOpponentEntranceMessage(activeLearningUnitId, 1, nextSpecialOpponentSelections));
  };

  const returnToStartScreen = () => {
    warmAudio();
    playSound('ui');
    setGameState('start');
    setIsNamePromptOpen(false);
    setBattleDifficulty('normal');
    setSelectedLearningUnitId(null);
    resetDeveloperProblemHistory();
    zeroTensBorrowCoachmarkLevelsRef.current.clear();
    unitSelectionChallengeLevelsRef.current.clear();
    unit3ProblemSequenceRef.current = {};
    unit3Level12RoundTemplateOrderRef.current = null;
    setIsEstimation(false);
    setEstimationProblem(null);
    setIsUnitSelectionChallenge(false);
    setUnitSelectionChallenge(null);
    setIsSpecialChallengeResolving(false);
    setTimeLeft(ESTIMATION_TIME_LIMIT_SECONDS);
    resetSecretCodePrompt();
    setInputValue('');
    setUnitInputValue('');
    setClockAnswerInput({ hours: '', minutes: '', seconds: '' });
    setIsUnitMenuOpen(false);
  };

  const openNamePrompt = () => {
    warmAudio();
    setPendingPlayerName(playerName === DEFAULT_PLAYER_NAME ? '' : playerName);
    setIsNamePromptOpen(true);
  };

  const closeNamePrompt = () => {
    setIsNamePromptOpen(false);
  };

  const confirmPlayerNameAndContinue = () => {
    if (!trimmedPendingPlayerName) return;

    warmAudio();
    playSound('ui');
    setPlayerName(trimmedPendingPlayerName);
    setIsNamePromptOpen(false);
    setSelectedLearningUnitId(null);
    setGameState('unitSelect');
  };

  const selectLearningUnit = (unitId: LearningUnitId) => {
    const nextUnit = LEARNING_UNITS.find((unit) => unit.id === unitId);
    if (!nextUnit?.isAvailable) {
      return;
    }

    warmAudio();
    playSound('ui');
    setSelectedLearningUnitId(unitId);
  };

  const startSelectedUnit = () => {
    if (!selectedLearningUnitId) {
      return;
    }

    startGame();
  };

  return (
    <div className={`flex min-h-[100svh] flex-col items-center overflow-x-hidden bg-slate-950 font-sans text-white ${
      isResultScreen
        ? 'justify-center overflow-y-hidden p-2 sm:p-3'
        : isShortViewport
          ? 'justify-start overflow-y-auto p-3 sm:p-4 lg:p-4'
          : 'justify-start overflow-y-auto p-3 sm:p-4 lg:justify-center lg:p-6'
    }`}>
      {gameState === 'start' && (
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.28, ease: 'easeOut' }}
          className="relative w-full max-w-5xl overflow-hidden rounded-[2rem] border-4 border-emerald-200/20 bg-[linear-gradient(180deg,rgba(15,23,42,0.98),rgba(30,41,59,0.96))] shadow-[0_30px_80px_rgba(15,23,42,0.48)]"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(45,212,191,0.18),transparent_28%)]" />

          <div className="relative flex flex-col gap-5 p-3 sm:gap-6 sm:p-5 lg:p-6">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.06, duration: 0.28, ease: 'easeOut' }}
              className="relative overflow-hidden rounded-[2rem] shadow-[0_28px_70px_rgba(2,6,23,0.34)]"
            >
              <img
                src={startHeroImage}
                alt="숲속에서 동물 친구들이 숫자와 수학 기호를 들고 있는 수학 게임 인트로 그림"
                className="block w-full rounded-[2rem] object-cover"
                draggable={false}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12, duration: 0.28, ease: 'easeOut' }}
              className="flex flex-col items-center px-2 pb-2 pt-1 text-center"
            >
              <button
                onPointerDown={warmAudio}
                onClick={openNamePrompt}
                className="flex w-full items-center justify-center gap-3 rounded-full bg-yellow-400 px-8 py-4 text-xl font-black text-slate-950 transition hover:scale-[1.01] hover:bg-yellow-300 sm:w-auto sm:min-w-[17rem] sm:px-10 sm:py-5 sm:text-2xl"
              >
                <Play className="h-6 w-6" />
                배틀 시작!
              </button>
            </motion.div>
          </div>

          <AnimatePresence>
            {isNamePromptOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 z-20 flex items-center justify-center bg-slate-950/76 p-4 backdrop-blur-sm sm:p-6"
              >
                <motion.form
                  initial={{ opacity: 0, scale: 0.94, y: 12 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.94, y: 12 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  onSubmit={(event) => {
                    event.preventDefault();
                    confirmPlayerNameAndContinue();
                  }}
                  className="relative w-full max-w-md overflow-hidden rounded-[2rem] border border-emerald-300/20 bg-[linear-gradient(180deg,rgba(15,23,42,0.98),rgba(15,23,42,0.94))] p-5 text-left shadow-[0_24px_80px_rgba(15,23,42,0.45)] sm:p-7"
                >
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(52,211,153,0.18),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(251,191,36,0.18),transparent_28%)]" />

                  <div className="relative">
                    <h2 className="text-3xl font-black text-white">이름 입력</h2>
                    <p className="mt-2 text-sm font-semibold text-slate-300">최대 10글자</p>

                    <input
                      autoFocus
                      type="text"
                      value={pendingPlayerName}
                      onChange={(event) => setPendingPlayerName(event.target.value.slice(0, 10))}
                      placeholder="이름"
                      className="mt-4 w-full rounded-2xl border-2 border-slate-600 bg-slate-950 px-4 py-3 text-xl font-black text-white outline-none transition focus:border-emerald-400 sm:mt-5 sm:px-5 sm:py-4 sm:text-2xl"
                    />
                    <div className={`mt-5 flex flex-col-reverse gap-3 ${
                      hasPendingPlayerName
                        ? 'sm:grid sm:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]'
                        : 'sm:flex sm:justify-end'
                    }`}>
                      <button
                        type="button"
                        onClick={closeNamePrompt}
                        className={`w-full rounded-2xl border border-slate-600 px-5 py-3 text-base font-black text-slate-200 transition hover:bg-slate-800 ${
                          hasPendingPlayerName ? 'sm:w-full' : 'sm:w-auto sm:min-w-[9rem]'
                        }`}
                      >
                        취소
                      </button>
                      <AnimatePresence initial={false}>
                        {hasPendingPlayerName && (
                          <motion.button
                            initial={{ opacity: 0, x: 18, scale: 0.98 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            exit={{ opacity: 0, x: 18, scale: 0.98 }}
                            transition={{ duration: 0.18, ease: 'easeOut' }}
                            type="submit"
                            onPointerDown={warmAudio}
                            className="w-full rounded-2xl bg-emerald-500 px-6 py-3 text-base font-black text-slate-950 transition hover:bg-emerald-400 sm:w-full"
                          >
                            시작
                          </motion.button>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.form>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}

      {gameState === 'unitSelect' && (
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.28, ease: 'easeOut' }}
          className="relative w-full max-w-6xl overflow-hidden rounded-[2.25rem] border border-cyan-100/15 bg-[linear-gradient(180deg,rgba(5,10,22,0.98),rgba(15,23,42,0.97)_38%,rgba(17,24,39,0.96))] shadow-[0_34px_120px_rgba(2,8,23,0.72),inset_0_1px_0_rgba(255,255,255,0.04)]"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(250,204,21,0.14),transparent_24%),radial-gradient(circle_at_top_right,rgba(34,211,238,0.1),transparent_20%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.18),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_26%)]" />
          <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

          <div className="relative flex flex-col gap-5 p-4 sm:gap-6 sm:p-6 lg:gap-7 lg:p-8">
            <div className="flex justify-end">
              <button
                type="button"
                onClick={returnToStartScreen}
                className="rounded-full border border-slate-500/70 bg-slate-950/30 px-5 py-2.5 text-sm font-black text-slate-100 shadow-[0_10px_30px_rgba(2,8,23,0.32)] backdrop-blur-sm transition duration-300 hover:border-cyan-300/45 hover:bg-slate-900/70 hover:text-white"
              >
                처음으로
              </button>
            </div>

            <div className="grid gap-4 lg:gap-5 lg:grid-cols-2">
              {LEARNING_UNITS.map((unit) => (
                <motion.div
                  key={unit.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.24, ease: 'easeOut' }}
                  className={`group relative flex h-full min-h-[16rem] flex-col overflow-hidden rounded-[1.9rem] border p-5 transition duration-300 sm:min-h-[17.25rem] sm:p-6 ${
                    selectedLearningUnitId === unit.id
                      ? 'border-emerald-300/55 bg-[linear-gradient(180deg,rgba(8,15,28,0.98),rgba(10,30,35,0.96)_48%,rgba(9,53,61,0.92))] shadow-[0_28px_72px_rgba(6,182,212,0.12),0_22px_56px_rgba(16,185,129,0.22),inset_0_1px_0_rgba(255,255,255,0.08)] ring-1 ring-emerald-300/20'
                      : unit.isAvailable
                        ? 'border-yellow-300/22 bg-[linear-gradient(180deg,rgba(8,15,28,0.98),rgba(20,29,46,0.96)_48%,rgba(33,42,62,0.94))] shadow-[0_24px_56px_rgba(2,8,23,0.52),inset_0_1px_0_rgba(255,255,255,0.05)] hover:-translate-y-0.5 hover:border-yellow-300/38 hover:shadow-[0_32px_72px_rgba(2,8,23,0.62),0_20px_48px_rgba(250,204,21,0.12),inset_0_1px_0_rgba(255,255,255,0.06)]'
                        : 'border-slate-700/90 bg-[linear-gradient(180deg,rgba(12,18,30,0.96),rgba(30,41,59,0.9))] opacity-80 saturate-75 shadow-[0_18px_42px_rgba(2,8,23,0.36)]'
                  }`}
                >
                  <div className={`pointer-events-none absolute inset-0 ${
                    selectedLearningUnitId === unit.id
                      ? 'bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.22),transparent_40%),radial-gradient(circle_at_top_right,rgba(45,212,191,0.16),transparent_22%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent_24%)]'
                      : unit.isAvailable
                        ? 'bg-[radial-gradient(circle_at_bottom_right,rgba(250,204,21,0.18),transparent_36%),radial-gradient(circle_at_top_left,rgba(34,211,238,0.08),transparent_22%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_24%)]'
                        : 'bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent_24%)]'
                  }`} />
                  <div className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

                  <div className="relative flex h-full flex-col">
                    <div className="flex items-start justify-between gap-4">
                      <div className="max-w-[85%]">
                        <p className={`text-[0.95rem] font-black tracking-[0.22em] ${
                          selectedLearningUnitId === unit.id
                            ? 'text-emerald-200'
                            : unit.isAvailable
                              ? 'text-yellow-200'
                              : 'text-cyan-100/80'
                        }`}>
                          {unit.chapterLabel}
                        </p>
                        <h3 className="mt-3 text-[clamp(2rem,5vw,3.15rem)] font-black leading-[0.98] tracking-[-0.03em] text-white">
                          {unit.title}
                        </h3>
                      </div>
                      <div className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-[1.1rem] border shadow-[0_16px_34px_rgba(15,23,42,0.28)] ${
                        selectedLearningUnitId === unit.id
                          ? 'border-yellow-200/35 bg-[linear-gradient(135deg,rgba(250,204,21,1),rgba(245,158,11,0.94))] text-slate-950 shadow-[0_16px_36px_rgba(250,204,21,0.34)]'
                          : unit.isAvailable
                            ? 'border-yellow-200/20 bg-[linear-gradient(135deg,rgba(250,204,21,0.98),rgba(234,179,8,0.92))] text-slate-950 shadow-[0_14px_34px_rgba(250,204,21,0.26)]'
                            : 'border-cyan-200/20 bg-cyan-300/90 text-slate-950'
                      }`}>
                        {unit.isAvailable ? <Star className="h-5 w-5" /> : <Sparkles className="h-5 w-5" />}
                      </div>
                    </div>

                    <div className="mt-7 flex flex-1 items-end">
                      <button
                        type="button"
                        disabled={!unit.isAvailable}
                        onPointerDown={warmAudio}
                        onClick={() => selectLearningUnit(unit.id)}
                        className={`flex min-h-[4.75rem] w-full items-center justify-center rounded-[1.4rem] border px-6 py-4 text-base font-black tracking-[0.01em] transition duration-300 sm:text-lg ${
                          !unit.isAvailable
                            ? 'cursor-not-allowed border-slate-600 bg-slate-700/80 text-slate-300'
                            : selectedLearningUnitId === unit.id
                              ? 'border-emerald-200/25 bg-[linear-gradient(135deg,rgba(45,212,191,1),rgba(16,185,129,0.94))] text-slate-950 shadow-[0_18px_38px_rgba(16,185,129,0.34),inset_0_1px_0_rgba(255,255,255,0.25)]'
                              : 'border-yellow-200/18 bg-[linear-gradient(135deg,rgba(250,204,21,0.98),rgba(234,179,8,0.92))] text-slate-950 shadow-[0_14px_34px_rgba(250,204,21,0.28)] hover:-translate-y-0.5 hover:border-yellow-100/28 hover:shadow-[0_20px_42px_rgba(250,204,21,0.34)]'
                        }`}
                      >
                        {!unit.isAvailable ? '준비 중' : selectedLearningUnitId === unit.id ? '선택됨' : '선택'}
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <AnimatePresence initial={false}>
              {selectedLearningUnit?.isAvailable && (
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 14 }}
                  transition={{ duration: 0.22, ease: 'easeOut' }}
                  className="relative overflow-hidden rounded-[1.9rem] border border-cyan-200/12 bg-[linear-gradient(180deg,rgba(7,13,25,0.94),rgba(9,15,29,0.88)_55%,rgba(10,23,36,0.92))] p-5 shadow-[0_28px_68px_rgba(2,8,23,0.48),inset_0_1px_0_rgba(255,255,255,0.06)] sm:p-6"
                >
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.16),transparent_34%),radial-gradient(circle_at_top_left,rgba(34,211,238,0.08),transparent_22%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent_22%)]" />
                  <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                  <div className="relative">
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-sm font-black tracking-[0.24em] text-emerald-200">난이도</p>
                      <span className="rounded-full border border-slate-500/70 bg-slate-950/35 px-3 py-1 text-xs font-black text-slate-200 shadow-[0_8px_20px_rgba(2,8,23,0.24)]">
                        {selectedLearningUnit.chapterLabel}
                      </span>
                    </div>

                    <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
                      {BATTLE_DIFFICULTY_ORDER.map((difficultyOption) => {
                        const difficultyOptionConfig = BATTLE_DIFFICULTY_CONFIG[difficultyOption];
                        const isSelectedDifficulty = battleDifficulty === difficultyOption;
                        const selectedDifficultyClass =
                          difficultyOption === 'easy'
                            ? 'border-cyan-300/75 bg-[linear-gradient(135deg,rgba(34,211,238,0.34),rgba(8,47,73,0.96))] text-cyan-50 shadow-[0_18px_40px_rgba(34,211,238,0.2),inset_0_1px_0_rgba(255,255,255,0.14)]'
                            : difficultyOption === 'normal'
                              ? 'border-emerald-300/75 bg-[linear-gradient(135deg,rgba(45,212,191,0.36),rgba(5,150,105,0.96))] text-emerald-50 shadow-[0_18px_40px_rgba(16,185,129,0.24),inset_0_1px_0_rgba(255,255,255,0.14)]'
                              : 'border-yellow-300/85 bg-[linear-gradient(135deg,rgba(250,204,21,0.44),rgba(180,83,9,0.98))] text-slate-950 shadow-[0_18px_40px_rgba(234,179,8,0.28),inset_0_1px_0_rgba(255,255,255,0.18)]';

                        return (
                          <button
                            key={difficultyOption}
                            type="button"
                            onPointerDown={warmAudio}
                            onClick={() => changeBattleDifficulty(difficultyOption)}
                            className={`min-h-[5rem] rounded-[1.35rem] border px-4 py-4 text-left text-base font-black transition duration-300 sm:px-5 sm:py-5 ${
                              isSelectedDifficulty
                                ? selectedDifficultyClass
                                : 'border-slate-600/90 bg-slate-950/50 text-slate-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] hover:-translate-y-0.5 hover:border-slate-400/80 hover:bg-slate-900/80 hover:text-white'
                            }`}
                          >
                            {difficultyOptionConfig.label}
                          </button>
                        );
                      })}
                    </div>

                    <button
                      type="button"
                      onPointerDown={warmAudio}
                      onClick={startSelectedUnit}
                      className="mt-5 flex min-h-[5rem] w-full items-center justify-center rounded-[1.5rem] border border-emerald-100/20 bg-[linear-gradient(135deg,rgba(45,212,191,1),rgba(16,185,129,0.94))] px-6 py-4 text-lg font-black text-slate-950 shadow-[0_28px_56px_rgba(16,185,129,0.38),inset_0_1px_0_rgba(255,255,255,0.24)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_34px_68px_rgba(16,185,129,0.44),inset_0_1px_0_rgba(255,255,255,0.26)] sm:text-xl"
                    >
                      시작
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}

      {gameState === 'playing' && (
        <div className={`flex w-full min-h-0 flex-col gap-3 overflow-visible rounded-3xl border-4 border-slate-700 bg-slate-800 p-3 shadow-2xl sm:p-4 lg:flex-row lg:overflow-hidden ${battleShellWidthClass} ${battleShellResponsiveClass}`}>
          {/* Left: Character Visuals & Messages */}
          <div className={`relative flex w-full min-h-0 flex-col gap-3 overflow-visible rounded-2xl border-2 border-slate-600 bg-slate-900 p-3 lg:overflow-hidden ${battleSidebarResponsiveClass}`}>
            <section className={`flex min-h-0 flex-1 flex-col overflow-hidden rounded-[1.75rem] border border-slate-700/80 bg-slate-950/70 shadow-[inset_0_1px_0_rgba(148,163,184,0.08)] ${battleSectionResponsiveClass}`}>
              <div className="flex items-center justify-between gap-3 text-sm">
                <div className="inline-flex items-center gap-2 font-semibold text-slate-300">
                  <Heart className="h-4 w-4 text-red-400" />
                  HP
                </div>
                <p className="font-black text-slate-100">{opponentHP} / {maxHealth}</p>
              </div>

              <div className="mt-2 h-3.5 w-full overflow-hidden rounded-full bg-slate-700/80">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-rose-400 via-red-500 to-rose-500 shadow-[0_0_16px_rgba(239,68,68,0.35)]"
                  animate={{ width: `${opponentHP}%` }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                />
              </div>

              <div className={`relative mt-3 flex h-[clamp(10.75rem,30vh,16rem)] min-h-0 items-center justify-center overflow-hidden rounded-[1.5rem] border border-red-400/10 bg-[radial-gradient(circle_at_top,rgba(248,113,113,0.14),transparent_52%),linear-gradient(180deg,rgba(15,23,42,0.98),rgba(15,23,42,0.78))] px-2 py-1.5 sm:h-[clamp(13.75rem,32vh,19rem)] sm:px-3 sm:py-2.5 ${battleStageResponsiveClass}`}>
                <p className="pointer-events-none absolute left-4 top-3 z-10 text-sm font-bold text-red-200/85">
                  {currentOpponentName}
                </p>
                <motion.div
                  animate={{
                    x: isOpponentAttacking ? [0, 50, -300, 0] : isOpponentHit ? [0, -20, 20, -20, 0] : 0,
                    rotate: isOpponentAttacking ? [0, 30, -60, 0] : 0,
                    scale: isOpponentAttacking ? [1, 0.7, 2.5, 1] : isOpponentHit ? [1, 0.9, 1] : 1,
                    filter: isOpponentAttacking ? 'brightness(1.06) drop-shadow(0 0 4px rgba(239, 68, 68, 0.22))' : isOpponentHit ? 'brightness(1.75) saturate(1.65)' : 'brightness(1)'
                  }}
                  transition={{ duration: isOpponentAttacking ? ATTACK_MOTION_DURATION_S : HIT_MOTION_DURATION_S, ease: "backOut" }}
                  className="relative flex h-full max-h-full w-full max-w-full items-center justify-center overflow-visible"
                >
                  {opponentSpriteSet && opponentCharacterImage ? (
                    <img
                      src={processedOpponentCharacterImage ?? opponentCharacterImage}
                      alt={`${currentOpponentName} 캐릭터`}
                      className={`${battleStageImageResponsiveClass} w-auto max-w-full translate-y-2 object-contain select-none drop-shadow-[0_18px_24px_rgba(15,23,42,0.35)] ${opponentImageClassName}`}
                      draggable={false}
                    />
                  ) : (
                    <span className="text-[clamp(4rem,10vw,8rem)] leading-none">{getOpponentEmojiForLevel(level)}</span>
                  )}
                  {isOpponentAttacking && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 0.38, scale: 1.1 }}
                        className="pointer-events-none absolute -top-2 -left-2 h-10 w-10 rounded-full bg-red-300 blur-lg"
                    />
                  )}
                </motion.div>
              </div>
            </section>

            <div className="shrink-0 py-1">
              <div className="relative flex items-center justify-center">
                <div className="absolute inset-x-3 top-1/2 h-px -translate-y-1/2 bg-slate-700" />
                <AnimatePresence mode="wait">
                  <motion.div
                    key={showMsg ? message : 'vs'}
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.94 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    className={`relative max-w-[calc(100%-1.5rem)] rounded-full bg-slate-950 text-center ${
                      showMsg
                        ? 'border border-yellow-400/45 px-4 py-2 text-xs font-bold leading-relaxed text-yellow-100 shadow-[0_10px_24px_rgba(15,23,42,0.24)] sm:px-5 sm:text-sm'
                        : 'border border-yellow-500/40 px-3 py-1 text-[10px] font-black tracking-[0.28em] text-yellow-300 sm:px-4 sm:text-xs sm:tracking-[0.35em]'
                    }`}
                  >
                    {showMsg ? message : 'VS'}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <section className={`flex min-h-0 flex-1 flex-col overflow-hidden rounded-[1.75rem] border border-slate-700/80 bg-slate-950/70 shadow-[inset_0_1px_0_rgba(148,163,184,0.08)] ${battleSectionResponsiveClass}`}>
              <div className={`relative flex h-[clamp(10.75rem,30vh,16rem)] min-h-0 items-center justify-center overflow-hidden rounded-[1.5rem] border border-emerald-400/10 bg-[radial-gradient(circle_at_bottom,rgba(16,185,129,0.14),transparent_54%),linear-gradient(180deg,rgba(15,23,42,0.78),rgba(15,23,42,0.98))] px-2 py-1.5 sm:h-[clamp(13.75rem,32vh,19rem)] sm:px-3 sm:py-2.5 ${battleStageResponsiveClass}`}>
                <p
                  className="pointer-events-none absolute left-4 top-3 z-10 max-w-[65%] truncate text-xs font-bold text-emerald-200/85 sm:max-w-[55%] sm:text-sm"
                  title={displayPlayerName}
                >
                  {displayPlayerName}
                </p>
                <motion.div
                  animate={{
                    x: isAttacking ? [0, -100, 300, 0] : isPlayerHit ? [0, -20, 20, -20, 0] : 0,
                    rotate: isAttacking ? [0, -30, 60, 0] : 0,
                    scale: isAttacking ? [1, 0.8, 2, 1] : isPlayerHit ? [1, 0.9, 1] : 1,
                    filter: isAttacking ? 'brightness(3.8) drop-shadow(0 0 22px rgba(16, 185, 129, 0.78))' : isPlayerHit ? 'brightness(1.75) saturate(1.65)' : 'brightness(1)'
                  }}
                  transition={{ duration: isAttacking ? ATTACK_MOTION_DURATION_S : HIT_MOTION_DURATION_S, ease: "backOut" }}
                  className="relative flex h-full max-h-full w-full max-w-full items-center justify-center overflow-visible"
                >
                  <img
                    src={playerCharacterImage}
                    alt="플레이어 캐릭터"
                    className={`${battleStageImageResponsiveClass} w-auto max-w-full translate-y-2 object-contain select-none drop-shadow-[0_18px_24px_rgba(15,23,42,0.35)]`}
                    draggable={false}
                  />
                  {isAttacking && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0, rotate: 0 }}
                        animate={{ opacity: 0.82, scale: 1.75, rotate: 45 }}
                        className="pointer-events-none absolute -top-10 -right-10 h-10 w-40 rounded-full bg-emerald-400 blur-xl"
                    />
                  )}
                </motion.div>
              </div>

              <div className="mt-4 flex items-center justify-between gap-3 text-sm">
                <div className="inline-flex items-center gap-2 font-semibold text-slate-300">
                  <Heart className="h-4 w-4 text-emerald-400" />
                  HP
                </div>
                <p className="font-black text-slate-100">{playerHP} / {maxHealth}</p>
              </div>

              <div className="mt-2 h-3.5 w-full overflow-hidden rounded-full bg-slate-700/80">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-emerald-300 via-emerald-500 to-teal-400 shadow-[0_0_16px_rgba(16,185,129,0.35)]"
                  animate={{ width: `${playerHP}%` }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                />
              </div>
            </section>
          </div>

          {/* Right: Math Problem & Input */}
          <div className={`flex min-h-0 min-w-0 flex-1 flex-col ${battleRightPanelResponsiveClass}`}>
            <div className={`shrink-0 flex flex-col ${battleTopGroupResponsiveClass}`}>
              <div className="min-w-0 flex-1 rounded-2xl border-2 border-slate-700 bg-slate-900 px-3 py-2">
                <div className="flex items-center gap-2 sm:gap-3">
                  <p className="min-w-0 max-w-full truncate text-xs font-black text-yellow-400 sm:max-w-[38%] sm:text-sm" title={currentLevelDescription}>{currentLevelDescription}</p>
                  {isDeveloperShortcutEnabled && isDeveloperMode && (
                    <span className="shrink-0 rounded-full border border-emerald-400/40 bg-emerald-500/15 px-2 py-1 text-[10px] font-black tracking-[0.18em] text-emerald-200">
                      DEV
                    </span>
                  )}
                  <div className="flex flex-1 gap-1 min-w-0">
                  {[...Array(totalLevels)].map((_, i) => (
                      <div key={i} className={`h-2 flex-1 rounded-full ${i < level ? 'bg-yellow-500' : 'bg-slate-700'}`} />
                  ))}
                  </div>
                  <span className="shrink-0 text-xs font-bold text-slate-300 sm:text-sm">{level} / {totalLevels}</span>
                </div>
              </div>{/*

                  <p className="text-xs font-black tracking-[0.18em] text-emerald-300">난이도</p>
              */}{!isSpecialChallengeActive && canUseHint && !isHintForced && (
                <button
                  onClick={toggleHint}
                  className="inline-flex w-full shrink-0 items-center justify-center rounded-2xl border border-blue-400/30 bg-blue-600 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-blue-500 sm:w-auto"
                >
                  {showHint ? '힌트 닫기' : '힌트 보기'}
                </button>
              )}
            </div>

            {!isSpecialChallengeActive && problemCoachmark && (
              <div className="rounded-[28px] border border-sky-200 bg-sky-50 px-4 py-3 shadow-sm sm:px-5 sm:py-4">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-pink-400 text-2xl font-black text-white sm:h-11 sm:w-11">
                    !
                  </div>
                  <div className="min-w-0">
                    <p className="text-2xl font-black text-pink-400 sm:text-[1.9rem]">{ZERO_TENS_BORROW_COACHMARK_TITLE}</p>
                    <p className="mt-1 break-keep text-lg font-bold leading-8 text-slate-700 sm:text-[1.45rem]">
                      {problemCoachmark}
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div className="flex flex-1 min-h-0 flex-col">
              {isEstimation ? (
              <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, ease: "easeOut" }} className="flex min-h-0 flex-1 flex-col items-center justify-center rounded-3xl border-4 border-yellow-500 bg-slate-900 p-5 text-center text-slate-100 shadow-inner sm:p-6 lg:p-8">
                <h2 className="text-4xl font-black text-yellow-400 mb-4">어림잡기 도전! ({timeLeft}초)</h2>
                <p className="mb-3 text-base font-bold text-amber-100 sm:text-lg">{estimationProblem?.prompt}</p>
                <p className="mb-6 text-[clamp(2.5rem,12vw,4.5rem)] font-mono font-bold sm:mb-8">{estimationProblem?.question} = ?</p>
                {isSpecialChallengeResolving && (
                  <p className="mb-4 text-sm font-bold text-yellow-200 sm:text-base">결과를 확인하는 중입니다...</p>
                )}
                <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
                  {estimationProblem?.options.map(opt => (
                    <button
                      key={opt}
                      onClick={() => selectEstimationOption(opt)}
                      disabled={isSpecialChallengeResolving}
                      className="rounded-2xl border-2 border-slate-500 bg-slate-700 p-6 text-3xl font-bold disabled:cursor-wait disabled:opacity-60 enabled:hover:bg-slate-600"
                    >
                      약 {opt}
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : isUnitSelectionChallenge ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="flex min-h-0 flex-1 flex-col items-center justify-center rounded-3xl border-4 border-cyan-400 bg-slate-900 p-5 text-center text-slate-100 shadow-inner sm:p-6 lg:p-8"
              >
                <p className="mb-3 rounded-full bg-cyan-400/15 px-4 py-1 text-sm font-black tracking-[0.08em] text-cyan-200 sm:text-base">
                  {unitSelectionChallenge?.badge} ({timeLeft}초)
                </p>
                <h2 className="mb-4 text-4xl font-black text-cyan-300">단위 선택 도전!</h2>
                <p className="mb-8 max-w-3xl break-keep text-[1.2rem] font-black leading-[1.6] text-slate-100 sm:text-[1.65rem] md:text-[2.15rem]">
                  {unitSelectionChallenge?.prompt}
                </p>
                {isSpecialChallengeResolving && (
                  <p className="mb-4 text-sm font-bold text-cyan-100 sm:text-base">결과를 확인하는 중입니다...</p>
                )}
                <div className={`grid w-full gap-3 ${unitSelectionChallenge && unitSelectionChallenge.options.length === 2 ? 'sm:grid-cols-2' : 'sm:grid-cols-3'} sm:gap-4`}>
                  {unitSelectionChallenge?.options.map((option) => (
                    <button
                      key={option}
                      onClick={() => selectUnitSelectionOption(option)}
                      disabled={isSpecialChallengeResolving}
                      className="rounded-2xl border-2 border-cyan-200/30 bg-slate-700 p-5 text-lg font-black leading-[1.45] text-white transition disabled:cursor-wait disabled:opacity-60 enabled:hover:bg-slate-600 sm:min-h-[7rem] sm:text-2xl"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : canUseHint && showHint ? (
              hintProblemText ? (
                <ErrorBoundary
                  resetKey={hintProblemText}
                  fallbackRender={({ resetError }) => (
                    <div className="flex min-h-0 flex-1 items-center justify-center rounded-3xl border-4 border-amber-300 bg-amber-50 p-5 text-center text-slate-900 sm:p-8">
                      <div className="max-w-2xl">
                        <p className="text-3xl font-black text-amber-700">힌트를 표시하는 중 문제가 생겼어요</p>
                        <p className="mt-3 text-lg font-bold leading-8 text-slate-600">
                          현재 문제는 계속 풀 수 있습니다. 다시 시도하거나 힌트를 닫고 진행해 주세요.
                        </p>
                        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
                          <button
                            type="button"
                            onClick={resetError}
                            className="rounded-full bg-amber-500 px-6 py-3 text-base font-black text-slate-950 transition hover:bg-amber-400"
                          >
                            힌트 다시 시도
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              setShowHint(false);
                              resetError();
                            }}
                            className="rounded-full border border-slate-300 px-6 py-3 text-base font-black text-slate-700 transition hover:bg-white"
                          >
                            문제만 계속하기
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                >
                  <VisualCalculator
                    problemText={hintProblemText}
                    onControlSound={playVisualControlSound}
                    condensed={isCompactBattleViewport}
                  />
                </ErrorBoundary>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="flex min-h-0 flex-1 items-center justify-center rounded-3xl border-4 border-dashed border-sky-300 bg-sky-50 p-5 text-center text-sky-800 sm:p-8"
                >
                  <div className="max-w-2xl">
                    <p className="text-3xl font-black">빈칸에 숫자를 먼저 넣어 주세요.</p>
                    <p className="mt-3 text-lg font-bold leading-8 text-slate-600">문제를 완성하면 단계별 힌트와 모형 계산 화면을 바로 볼 수 있어요.</p>
                  </div>
                </motion.div>
              )
            ) : (
              <motion.div 
                key={`${problem.kind}-${problem.prompt}`} 
                initial={{ opacity: 0, scale: 0.9, y: 10 }} 
                animate={{ opacity: 1, scale: 1, y: 0 }} 
                transition={{ duration: 0.4, ease: "easeOut" }} 
                className={`flex min-h-0 flex-1 rounded-3xl ${isDenseNumberedStoryLayout ? 'border-4' : 'border-8'} border-slate-200 bg-white shadow-inner ${
                  problem.kind === 'distanceMap' || problem.kind === 'distanceWorksheet'
                    ? 'flex flex-col overflow-y-auto p-2 sm:p-3 lg:p-3'
                    : problem.kind === 'timeAddition' && isStoryTimeAdditionProblem
                      ? `flex flex-col justify-center ${isCompactBattleViewport ? 'overflow-hidden p-3 sm:p-4 lg:p-5' : 'overflow-y-auto p-4 sm:p-6 lg:p-8'}`
                    : problem.kind === 'timeAddition' && isVerticalTimeAdditionProblem
                      ? 'flex flex-col items-center justify-center overflow-y-auto p-3 sm:p-4 lg:p-5'
                    : problem.kind === 'clockReading' || problem.kind === 'timeAddition'
                      ? 'flex flex-col overflow-y-auto p-2 sm:p-3 lg:p-3'
                    : hasNumberedStoryOptions
                      ? `flex flex-col overflow-hidden ${isDenseNumberedStoryLayout ? 'p-2 sm:p-3 lg:p-4' : 'p-3 sm:p-4 lg:p-5'}`
                    : problem.kind !== 'equation'
                      ? `flex flex-col justify-center ${isCompactBattleViewport ? 'overflow-hidden p-3 sm:p-4 lg:p-5' : 'overflow-y-auto p-4 sm:p-6 lg:p-8'}`
                      : shouldRenderHorizontalEquation
                      ? 'items-center justify-center overflow-y-auto p-4 text-center text-[clamp(3.6rem,12vw,6.8rem)] leading-tight font-black font-mono text-slate-900 sm:p-6 lg:p-8'
                      : 'flex flex-col items-center justify-center p-4 text-[clamp(3.5rem,18vw,8rem)] leading-none font-black font-mono text-slate-900 sm:p-6 lg:p-8'
                }`}
              >
                {problem.kind === 'distanceWorksheet' && problem.distanceWorksheet ? (
                    <DistanceWorksheetProblemCard
                      distanceWorksheet={problem.distanceWorksheet}
                      condensed={isCompactBattleViewport}
                    />
                ) : problem.kind === 'distanceMap' && problem.distanceMap ? (
                    <DistanceMapProblemCard
                      distanceMap={problem.distanceMap}
                      answerValue={inputValue}
                      onAnswerChange={setInputValue}
                      onSubmit={checkAnswer}
                    />
                ) : problem.kind === 'measurement' && problem.measurement ? (
                  <MeasurementProblemCard measurement={problem.measurement} />
                ) : problem.kind === 'clockReading' && problem.clockReading ? (
                  <ClockReadingProblemCard
                    clockReading={problem.clockReading}
                    answerValue={clockAnswerInput}
                    onAnswerChange={handleClockAnswerChange}
                    onSubmit={checkAnswer}
                  />
                ) : problem.kind === 'timeAddition' && currentTimeAddition ? (
                  <TimeAdditionProblemCard
                    timeAddition={currentTimeAddition}
                    answerValue={clockAnswerInput}
                    onAnswerChange={handleClockAnswerChange}
                    onSubmit={checkAnswer}
                    playAnimationSound={playSound}
                    condensed={isCompactBattleViewport}
                    showAnswerFields={!usesBattleStructuredTimeInput}
                  />
                ) : problem.kind === 'story' ? (
                  hasNumberedStoryOptions && storyPromptSections ? (
                    problem.storyTable ? (
                      <div className={`mx-auto flex h-full w-full max-w-[56rem] flex-col text-left text-slate-900 ${numberedStoryShellGapClass}`}>
                        <div className={`flex shrink-0 flex-col ${numberedStoryShellGapClass}`}>
                          {numberedStoryInfoLines.length > 0 ? (
                            <div
                              className={`rounded-[1.75rem] border border-slate-200 bg-slate-50/85 shadow-sm ${numberedStoryCardPaddingClass}`}
                            >
                              <div className={`flex flex-col ${isDenseNumberedStoryLayout ? 'gap-2' : isCompactBattleViewport ? 'gap-3' : 'gap-4'}`}>
                                {numberedStoryInfoLines.map((line, index) => (
                                  <p
                                    key={`${line}-${index}`}
                                    className={`break-keep tracking-[-0.01em] ${numberedStoryInfoTextClass}`}
                                  >
                                    {renderPromptWithHighlight(line, shouldHighlightPromptNumbers)}
                                  </p>
                                ))}
                              </div>
                            </div>
                          ) : null}
                          <StoryPromptTableCard
                            table={problem.storyTable}
                            condensed={isCompactBattleViewport}
                            dense={isDenseNumberedStoryLayout}
                          />
                          {numberedStoryQuestionLine ? (
                            <div
                              className={`rounded-[1.75rem] border border-amber-200 bg-amber-50/85 shadow-sm ${numberedStoryCardPaddingClass}`}
                            >
                              <p className={`break-keep tracking-[-0.01em] ${numberedStoryQuestionTextClass}`}>
                                {renderPromptWithHighlight(numberedStoryQuestionLine, shouldHighlightPromptNumbers)}
                              </p>
                            </div>
                          ) : null}
                        </div>
                        <div
                          className={numberedStoryOptionGridClass}
                          style={
                            isDenseNumberedStoryLayout
                              ? undefined
                              : { gridTemplateRows: `repeat(${storyPromptSections.optionLines.length}, minmax(0, 1fr))` }
                          }
                        >
                          {storyPromptSections.optionLines.map((line, index) => (
                            <div
                              key={`${line}-${index}`}
                              className={`flex min-h-0 items-center rounded-[1.75rem] border border-slate-200 bg-slate-50/90 shadow-sm ${numberedStoryOptionCardPaddingClass}`}
                            >
                              <p className={`break-keep tracking-[-0.01em] ${numberedStoryOptionTextClass}`}>
                                {renderPromptWithHighlight(line, shouldHighlightPromptNumbers)}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className={`mx-auto flex h-full w-full max-w-[54rem] flex-col text-left text-slate-900 ${isCompactBattleViewport ? 'gap-3' : 'gap-4 sm:gap-5'}`}>
                        <div className={`flex shrink-0 flex-col ${isCompactBattleViewport ? 'gap-3' : 'gap-4 sm:gap-5'}`}>
                          {storyPromptSections.introLines.map((line, index) => {
                            const isQuestionLine = index === storyPromptSections.introLines.length - 1;

                            return (
                              <div
                                key={`${line}-${index}`}
                                className={`rounded-[1.75rem] border shadow-sm ${
                                  isCompactBattleViewport
                                    ? 'px-4 py-3 sm:px-5 sm:py-4'
                                    : 'px-5 py-4 sm:px-6 sm:py-5'
                                } ${
                                  isQuestionLine
                                    ? 'border-amber-200 bg-amber-50/85'
                                    : 'border-slate-200 bg-slate-50/85'
                                }`}
                              >
                                <p
                                  className={`break-keep tracking-[-0.01em] ${
                                    isQuestionLine
                                      ? isCompactBattleViewport
                                        ? 'text-[1.2rem] font-black leading-[1.45] text-slate-900 sm:text-[1.55rem] lg:text-[1.9rem]'
                                        : 'text-[1.35rem] font-black leading-[1.52] text-slate-900 sm:text-[1.75rem] lg:text-[2.2rem]'
                                      : isCompactBattleViewport
                                        ? 'text-[1rem] font-bold leading-[1.62] text-slate-700 sm:text-[1.2rem] lg:text-[1.45rem]'
                                        : 'text-[1.1rem] font-bold leading-[1.72] text-slate-700 sm:text-[1.35rem] lg:text-[1.75rem]'
                                  }`}
                                >
                                  {renderPromptWithHighlight(line, shouldHighlightPromptNumbers)}
                                </p>
                              </div>
                            );
                          })}
                        </div>
                        <div
                          className={`grid min-h-0 flex-1 ${isCompactBattleViewport ? 'gap-3' : 'gap-4'}`}
                          style={{ gridTemplateRows: `repeat(${storyPromptSections.optionLines.length}, minmax(0, 1fr))` }}
                        >
                          {storyPromptSections.optionLines.map((line, index) => (
                            <div
                              key={`${line}-${index}`}
                              className={`flex min-h-0 items-center rounded-[1.75rem] border border-slate-200 bg-slate-50/90 shadow-sm ${
                                isCompactBattleViewport
                                  ? 'px-4 py-3 sm:px-5'
                                  : 'px-5 py-4 sm:px-6'
                              }`}
                            >
                              <p
                                className={`break-keep tracking-[-0.01em] text-slate-900 ${
                                  isCompactBattleViewport
                                    ? 'text-[1.2rem] font-black leading-[1.42] sm:text-[1.5rem] lg:text-[1.85rem]'
                                    : 'text-[1.35rem] font-black leading-[1.48] sm:text-[1.7rem] lg:text-[2.15rem]'
                                }`}
                              >
                                {renderPromptWithHighlight(line, shouldHighlightPromptNumbers)}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )
                  ) : (
                    <div className={`mx-auto flex w-full max-w-[52rem] flex-col text-left text-slate-900 ${
                      isCompactBattleViewport ? 'gap-3' : 'gap-4 sm:gap-6'
                    }`}>
                      {getStoryPromptLines(problem.prompt).map((line, index, lines) => {
                        const isQuestionLine = lines.length === 1 || index === lines.length - 1;

                        return (
                          <div
                            key={`${line}-${index}`}
                            className={`rounded-[2rem] border shadow-sm ${
                              isCompactBattleViewport
                                ? 'px-4 py-3 sm:px-5 sm:py-4'
                                : 'px-4 py-4 sm:px-6 sm:py-5 md:px-8 md:py-7'
                            } ${
                              isQuestionLine
                                ? 'border-amber-200 bg-amber-50/80'
                                : 'border-slate-200 bg-slate-50/85'
                            }`}
                          >
                            <p
                              className={`break-keep tracking-[-0.01em] ${
                                isQuestionLine
                                  ? isCompactBattleViewport
                                    ? 'text-[1.2rem] font-black leading-[1.45] text-slate-900 sm:text-[1.5rem] lg:text-[1.9rem]'
                                    : 'text-[1.3rem] font-black leading-[1.55] text-slate-900 sm:text-[1.75rem] md:text-[2.45rem]'
                                  : isCompactBattleViewport
                                    ? 'text-[1rem] font-bold leading-[1.58] text-slate-700 sm:text-[1.15rem] lg:text-[1.45rem]'
                                    : 'text-[1.1rem] font-bold leading-[1.72] text-slate-700 sm:text-[1.45rem] md:text-[2rem]'
                              }`}
                            >
                              {renderPromptWithHighlight(line, shouldHighlightPromptNumbers)}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  )
                ) : problem.kind === 'builder' && problem.builder ? (
                  <div className="flex h-full w-full flex-col gap-3 text-left text-slate-900 sm:gap-4">
                    <div>
                      <h2 className="text-2xl font-black text-slate-900 sm:text-3xl md:text-[3.5rem]">{problem.builder.title}</h2>
                      <p className="mt-2 break-keep text-lg font-bold leading-[1.45] text-slate-700 sm:text-[1.35rem] md:text-[1.9rem]">
                        {problem.builder.instruction}
                      </p>
                    </div>

                    <div className="grid flex-1 gap-4 xl:grid-cols-[minmax(0,1fr)_220px]">
                      <div className="rounded-[34px] border-4 border-slate-200 bg-slate-50 p-4 sm:p-6 md:p-10">
                        <div className="flex h-full items-center justify-end">
                          <div className="inline-flex flex-col items-end gap-4 sm:gap-6">
                            <BuilderNumberRow
                              template={problem.builder.topTemplate}
                              slotsById={builderSlotsById}
                              slotValues={builderSlotValues}
                              onSlotChange={handleBuilderSlotChange}
                            />
                            <div className="flex items-center justify-end gap-3 sm:gap-5">
                              <span className="text-4xl font-black text-slate-500 sm:text-5xl md:text-7xl">{problem.builder.op}</span>
                              <BuilderNumberRow
                                template={problem.builder.bottomTemplate}
                                slotsById={builderSlotsById}
                                slotValues={builderSlotValues}
                                onSlotChange={handleBuilderSlotChange}
                              />
                            </div>
                            <div className="h-2 w-full rounded-full bg-slate-900" />
                          </div>
                        </div>
                      </div>

                      <div className="rounded-[30px] border border-sky-200 bg-sky-50 p-4 md:p-5">
                        <div className="flex flex-col gap-3">
                          {problem.builder.slots.map((slot) => (
                            <div key={slot.id} className="rounded-2xl border border-sky-200 bg-white px-4 py-4">
                              <div className="text-sm font-black text-slate-500">{slot.label}</div>
                              <div className="mt-1 text-2xl font-black text-sky-700 sm:text-3xl">{formatDigitChoices(slot.digits)}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                  </div>
                ) : shouldRenderHorizontalEquation ? (
                  <div className="flex w-full items-center justify-center text-center">
                    <span>{problem.text}</span>
                  </div>
                ) : (
                  <>
                    <div className="flex flex-col items-end">
                      <span>{problem.text.split(' ')[0]}</span>
                      <div className="flex items-center gap-4">
                        <span>{problem.text.split(' ')[1]}</span>
                        <span>{problem.text.split(' ')[2]}</span>
                      </div>
                    </div>
                    <div className="w-full h-4 bg-slate-900 my-6 rounded-full"></div>
                  </>
                )}
              </motion.div>
            )}
            </div>

            {!isSpecialChallengeActive && (
              <div className={`shrink-0 flex flex-col ${battleInputResponsiveClass}`}>
                {usesBattleStructuredTimeInput ? (
                  <BattleStructuredTimeInput
                    parts={editableClockParts}
                    answerValue={clockAnswerInput}
                    onAnswerChange={handleClockAnswerChange}
                    onSubmit={checkAnswer}
                    canSubmit={canAttemptAttack}
                    condensed={isCompactBattleViewport}
                  />
                ) : isStructuredTimeAnswerProblem ? (
                  <button
                    type="button"
                    disabled={!canAttemptAttack}
                    onClick={checkAnswer}
                    className={`flex w-full min-w-0 items-center justify-center gap-2 rounded-2xl px-5 py-3 text-lg font-black text-white shadow-lg sm:px-6 sm:text-xl ${
                      canAttemptAttack
                        ? 'bg-emerald-600 hover:bg-emerald-500'
                        : 'cursor-not-allowed bg-slate-500 opacity-60'
                    }`}
                  >
                    <Sword size={22} /> 공격!
                  </button>
                ) : (
                  <div className={`grid grid-cols-[minmax(0,1fr)_auto] items-stretch ${isDenseNumberedStoryLayout ? 'gap-2' : battleInputResponsiveClass}`}>
                    <div className={`flex min-w-0 items-center rounded-2xl border-4 border-slate-500 bg-slate-700 px-4 focus-within:border-emerald-500 ${
                      isDenseNumberedStoryLayout
                        ? 'gap-2 py-1'
                        : isCompactBattleViewport
                          ? 'gap-2 py-1.5'
                          : 'gap-3 py-2'
                    }`}>
                      <input
                        type={usesTextAnswerInput ? 'text' : 'number'}
                        inputMode={usesTextAnswerInput ? 'text' : 'numeric'}
                        value={inputValue}
                        onChange={e => setInputValue(e.target.value)}
                        onKeyDown={e => {
                          if (e.key === 'Enter' && !e.ctrlKey && !e.altKey) {
                            e.preventDefault();
                            checkAnswer();
                          }
                        }}
                        className={`min-w-0 flex-1 bg-transparent text-center font-black text-slate-100 outline-none placeholder:text-slate-400 ${
                          isDenseNumberedStoryLayout
                            ? 'py-1 text-lg sm:text-xl'
                            : isCompactBattleViewport
                              ? 'py-1.5 text-xl sm:text-2xl'
                              : 'py-2 text-2xl sm:text-3xl'
                        }`}
                        placeholder={
                          problem.kind === 'builder'
                            ? '답'
                            : problem.kind === 'distanceWorksheet'
                              ? usesTextAnswerInput
                                ? '장소 이름 입력'
                                : '숫자 입력'
                              : requiresUnitSelection
                                ? '숫자 입력'
                                : '정답 입력'
                        }
                      />
                      {requiresUnitSelection && (
                        <div ref={unitMenuRef} className="relative shrink-0 pl-1">
                          <button
                            type="button"
                            onClick={() => setIsUnitMenuOpen((prev) => !prev)}
                            className={`flex min-h-[3.75rem] min-w-[7.75rem] items-center justify-between rounded-2xl border-2 px-4 py-3 text-lg font-black outline-none transition sm:min-h-[4rem] sm:min-w-[8.5rem] sm:text-xl ${
                              unitInputValue
                                ? 'border-cyan-300 bg-[linear-gradient(180deg,#67e8f9,#22d3ee)] text-slate-950 shadow-[0_0_18px_rgba(34,211,238,0.22)]'
                                : 'border-slate-300/60 bg-[linear-gradient(180deg,#334155,#1e293b)] text-slate-50 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]'
                            }`}
                            aria-haspopup="listbox"
                            aria-expanded={isUnitMenuOpen}
                          >
                            <span className="truncate">{unitInputValue || '단위'}</span>
                            <ChevronDown
                              size={20}
                              className={`shrink-0 transition-transform ${isUnitMenuOpen ? 'rotate-180' : ''}`}
                            />
                          </button>
                          <AnimatePresence>
                            {isUnitMenuOpen && (
                              <motion.div
                                initial={{ opacity: 0, y: 10, scale: 0.96 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 8, scale: 0.97 }}
                                transition={{ duration: 0.16, ease: 'easeOut' }}
                                className="absolute bottom-[calc(100%+0.7rem)] right-0 z-30 w-[8.5rem] overflow-hidden rounded-[1.35rem] border-2 border-cyan-200/80 bg-[linear-gradient(180deg,rgba(30,41,59,0.98),rgba(15,23,42,0.98))] p-2 shadow-[0_18px_44px_rgba(15,23,42,0.42)]"
                              >
                                {answerUnitOptions.map((option) => {
                                  const isSelected = normalizeAnswerUnit(unitInputValue) === normalizeAnswerUnit(option);
                                  return (
                                    <button
                                      key={option}
                                      type="button"
                                      onClick={() => {
                                        setUnitInputValue(option);
                                        setIsUnitMenuOpen(false);
                                      }}
                                      className={`flex w-full items-center justify-between rounded-xl px-3 py-3 text-lg font-black transition ${
                                        isSelected
                                          ? 'bg-[linear-gradient(180deg,#3b82f6,#2563eb)] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.18)]'
                                          : 'text-slate-100 hover:bg-white/10'
                                      }`}
                                      role="option"
                                      aria-selected={isSelected}
                                    >
                                      <span>{option}</span>
                                      {isSelected ? <Check size={18} className="shrink-0" /> : <span className="w-[18px]" aria-hidden="true" />}
                                    </button>
                                  );
                                })}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      )}
                    </div>
                    <button
                      type="button"
                      disabled={!canAttemptAttack}
                      onClick={checkAnswer}
                      className={`flex w-full min-w-0 items-center justify-center gap-2 rounded-2xl font-black text-white shadow-lg ${
                        isDenseNumberedStoryLayout
                          ? 'px-4 py-2 text-base sm:min-w-[150px] sm:w-auto sm:px-5 sm:text-lg'
                          : 'px-5 py-3 text-lg sm:min-w-[170px] sm:w-auto sm:px-6 sm:text-xl'
                      } ${
                        canAttemptAttack
                          ? 'bg-emerald-600 hover:bg-emerald-500'
                          : 'cursor-not-allowed bg-slate-500 opacity-60'
                      }`}
                    >
                      <Sword size={22} /> 공격!
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      <AnimatePresence>
        {gameState === 'playing' && isSecretCodePromptOpen && pendingLevelTransition && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/82 p-4 backdrop-blur-sm sm:p-6"
          >
            <motion.form
              initial={{ opacity: 0, scale: 0.94, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 12 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              onSubmit={(event) => {
                event.preventDefault();
                submitSecretCode();
              }}
              className="relative w-full max-w-md overflow-hidden rounded-[2rem] border border-amber-300/30 bg-[linear-gradient(180deg,rgba(15,23,42,0.98),rgba(30,41,59,0.96))] p-5 text-left shadow-[0_24px_80px_rgba(15,23,42,0.48)] sm:p-7"
              role="dialog"
              aria-modal="true"
              aria-labelledby="secret-code-title"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(250,204,21,0.18),transparent_42%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.14),transparent_30%)]" />

              <div className="relative">
                <div className="inline-flex rounded-full border border-amber-200/30 bg-amber-300/10 px-3 py-1 text-xs font-black tracking-[0.18em] text-amber-200">
                  SECRET CODE
                </div>
                <h2 id="secret-code-title" className="mt-4 text-3xl font-black text-white sm:text-[2rem]">
                  3단원 8단계 입장
                </h2>
                <p className="mt-3 break-keep text-base font-bold leading-7 text-slate-200 sm:text-lg">
                  다음 단계로 가려면 비밀암호를 입력하세요.
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-400">띄어쓰기는 달라도 괜찮아요.</p>

                <input
                  autoFocus
                  type="text"
                  value={secretCodeInput}
                  onChange={(event) => {
                    setSecretCodeInput(event.target.value);
                    if (secretCodeError) {
                      setSecretCodeError('');
                    }
                  }}
                  placeholder="비밀암호 입력"
                  className={`mt-5 w-full rounded-2xl border-2 bg-slate-950 px-4 py-3 text-xl font-black text-white outline-none transition sm:px-5 sm:py-4 sm:text-2xl ${
                    secretCodeError ? 'border-rose-400' : 'border-slate-600 focus:border-amber-400'
                  }`}
                />

                <AnimatePresence initial={false}>
                  {secretCodeError && (
                    <motion.p
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      className="mt-3 text-sm font-black text-rose-300 sm:text-base"
                    >
                      {secretCodeError}
                    </motion.p>
                  )}
                </AnimatePresence>

                <button
                  type="submit"
                  onPointerDown={warmAudio}
                  className={`mt-5 flex w-full items-center justify-center rounded-2xl px-6 py-3 text-base font-black transition sm:py-4 sm:text-lg ${
                    hasSecretCodeInput
                      ? 'bg-amber-400 text-slate-950 hover:bg-amber-300'
                      : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                  }`}
                >
                  확인하고 다음 단계로
                </button>
              </div>
            </motion.form>
          </motion.div>
        )}
      </AnimatePresence>

      {isResultScreen && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }} 
          animate={{ opacity: 1, scale: 1 }} 
          className={`relative flex w-full max-w-xl max-h-[calc(100svh-1rem)] flex-col justify-center ${isShortViewport ? 'overflow-x-hidden overflow-y-auto' : 'overflow-hidden'} rounded-[2.5rem] border-4 p-4 text-center shadow-2xl sm:max-w-2xl sm:p-6 lg:p-8 ${
            isWinResult
              ? 'border-yellow-200/35 bg-[radial-gradient(circle_at_top,rgba(250,204,21,0.18),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(34,211,238,0.08),transparent_30%),linear-gradient(180deg,rgba(49,46,129,0.92),rgba(30,41,59,0.98))] shadow-[0_40px_120px_rgba(245,158,11,0.3)]'
              : 'border-slate-600 bg-slate-800'
          }`}
        >
          {isWinResult && (
            <>
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.16),transparent_24%),radial-gradient(circle_at_50%_32%,rgba(250,204,21,0.22),transparent_28%)]" />
              <motion.div
                className="pointer-events-none absolute left-1/2 top-8 h-72 w-72 -translate-x-1/2 rounded-full bg-[conic-gradient(from_0deg,rgba(250,204,21,0),rgba(253,224,71,0.55),rgba(250,204,21,0),rgba(244,114,182,0.35),rgba(250,204,21,0))] blur-[2px]"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 16, ease: 'linear' }}
              />
              <motion.div
                className="pointer-events-none absolute left-1/2 top-10 h-64 w-64 -translate-x-1/2 rounded-full border border-yellow-100/30"
                animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.9, 0.5] }}
                transition={{ repeat: Infinity, duration: 3.6, ease: 'easeInOut' }}
              />
              {VICTORY_CONFETTI.map((item) => (
                <motion.div
                  key={`${item.left}-${item.top}`}
                  className={`pointer-events-none absolute ${item.className}`}
                  style={{ left: item.left, top: item.top }}
                  animate={{
                    y: [0, -10, 0, 8, 0],
                    x: [0, item.drift, 0],
                    rotate: [0, 14, -10, 0],
                    opacity: [0.45, 1, 0.8, 1, 0.45],
                  }}
                  transition={{ repeat: Infinity, duration: item.duration, delay: item.delay, ease: 'easeInOut' }}
                />
              ))}
              {VICTORY_SPARKLES.map((item) => (
                <motion.div
                  key={`${item.left}-${item.top}-sparkle`}
                  className={`pointer-events-none absolute ${item.className}`}
                  style={{ left: item.left, top: item.top }}
                  animate={{ scale: [0.7, 1.18, 0.7], opacity: [0.2, 1, 0.2], rotate: [0, 16, -16, 0] }}
                  transition={{ repeat: Infinity, duration: item.duration, delay: item.delay, ease: 'easeInOut' }}
                >
                  <Sparkles size={item.size} />
                </motion.div>
              ))}
            </>
          )}

          {gameState === 'win' ? (
            <div className="relative mb-4 sm:mb-5">
              <div className="relative mx-auto mb-6 flex h-40 w-40 items-center justify-center sm:h-48 sm:w-48 lg:mb-8 lg:h-56 lg:w-56">
                <motion.div
                  className="absolute inset-0 rounded-full bg-yellow-300/25 blur-3xl"
                  animate={{ scale: [1, 1.18, 1], opacity: [0.55, 0.95, 0.55] }}
                  transition={{ repeat: Infinity, duration: 2.8, ease: 'easeInOut' }}
                />
                <motion.div
                  className="absolute inset-5 rounded-full border border-yellow-100/40 bg-white/10 backdrop-blur-sm"
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 18, ease: 'linear' }}
                />
                <motion.div
                  animate={{ rotate: [0, -10, 12, -8, 0], scale: [1, 1.12, 1] }}
                  transition={{ repeat: Infinity, duration: 3.2, ease: 'easeInOut' }}
                >
                  <Star className="h-28 w-28 fill-current text-yellow-300 drop-shadow-[0_0_35px_rgba(253,224,71,0.75)] sm:h-36 sm:w-36 lg:h-44 lg:w-44" />
                </motion.div>
              </div>
              <motion.p
                className="mb-2 text-sm font-black tracking-[0.55em] text-yellow-100/80 sm:text-base"
                animate={{ letterSpacing: ['0.45em', '0.6em', '0.45em'], opacity: [0.75, 1, 0.75] }}
                transition={{ repeat: Infinity, duration: 2.6, ease: 'easeInOut' }}
              >
                CHAMPION
              </motion.p>
              <motion.h1
                className="text-[clamp(4.2rem,15vw,7.2rem)] font-black leading-none tracking-[-0.08em] text-transparent bg-[linear-gradient(180deg,#fef9c3_0%,#facc15_36%,#fb7185_100%)] bg-clip-text"
                style={{ textShadow: '0 18px 40px rgba(251,191,36,0.22)' }}
                animate={{ scale: [1, 1.04, 1], y: [0, -4, 0] }}
                transition={{ repeat: Infinity, duration: 2.7, ease: 'easeInOut' }}
              >
                배틀 승리!
              </motion.h1>
            </div>
          ) : processedDefeatSceneImage ? (
            <div className="relative mb-4 sm:mb-5">
              <motion.div
                className="mx-auto w-full max-w-[20rem] overflow-hidden rounded-[1.75rem] border border-slate-500/80 bg-slate-900/80 p-2 shadow-[0_22px_60px_rgba(15,23,42,0.4)] sm:max-w-[22rem]"
                animate={{ y: [0, -6, 0], scale: [1, 1.02, 1] }}
                transition={{ repeat: Infinity, duration: 3.4, ease: 'easeInOut' }}
              >
                <img
                  src={processedDefeatSceneImage}
                  alt="1단계 패배 장면"
                  className={`mx-auto aspect-square max-h-[34svh] w-full rounded-[1.35rem] object-contain sm:max-h-[38svh] ${defeatSceneImageClassName}`}
                  draggable={false}
                />
              </motion.div>
              {/*
              <h1 className="text-5xl font-black text-slate-300 sm:text-6xl lg:text-7xl">?꾩쟾 醫낅즺</h1>
            </div>
              */}
            </div>
          ) : (
            <motion.div 
              animate={{ 
                opacity: [1, 0.3, 1],
                y: [0, 20, 0],
                filter: ['grayscale(0%)', 'grayscale(100%)']
              }} 
              transition={{ repeat: Infinity, duration: 3 }}
            >
              <Heart className="mx-auto mb-6 h-28 w-28 fill-current text-slate-500 sm:mb-7 sm:h-36 sm:w-36 lg:mb-8 lg:h-48 lg:w-48" />
              <h1 className="mb-8 text-6xl font-black text-slate-300 sm:text-7xl lg:text-8xl">도전 종료</h1>
            </motion.div>
          )}
          <div className={`mb-4 rounded-[1.75rem] px-4 py-4 shadow-inner sm:px-6 sm:py-5 ${
            isWinResult
              ? 'border border-yellow-100/25 bg-[linear-gradient(180deg,rgba(15,23,42,0.54),rgba(30,41,59,0.74))] shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_0_45px_rgba(250,204,21,0.1)]'
              : 'border border-slate-500/70 bg-slate-900/80'
          }`}>
            <p className={`text-3xl font-black sm:text-4xl ${isWinResult ? 'text-yellow-50' : 'text-white'}`}>{finalRecordLabel}</p>
            <p className={`mt-2 break-keep text-sm font-bold leading-6 sm:text-lg ${isWinResult ? 'text-yellow-100/80' : 'text-slate-300'}`}>
              {finalRecordTopic}
            </p>
          </div>
          <div className="mx-auto flex w-full flex-col gap-2 sm:w-auto sm:min-w-[18rem]">
            <a
              href={RECORD_BOARD_URL}
              target="_blank"
              rel="noreferrer"
              className={`flex w-full items-center justify-center rounded-full px-6 py-3 text-lg font-black transition-all sm:text-xl lg:px-10 lg:py-4 ${
                isWinResult
                  ? 'bg-[linear-gradient(90deg,#facc15_0%,#34d399_100%)] text-slate-950 shadow-[0_18px_40px_rgba(250,204,21,0.28)] hover:scale-[1.01] hover:brightness-105'
                  : 'bg-emerald-500 text-slate-950 hover:bg-emerald-400'
              }`}
            >
              Padlet에 기록 남기기
            </a>
            <button onPointerDown={warmAudio} onClick={returnToStartScreen} className={`flex w-full items-center justify-center gap-3 rounded-full px-6 py-3 text-lg font-black text-white transition-all sm:text-xl lg:gap-4 lg:px-10 lg:py-4 lg:text-2xl ${
              isWinResult
                ? 'border border-white/15 bg-white/14 backdrop-blur-sm hover:bg-white/20'
                : 'bg-slate-600 hover:bg-slate-500'
            }`}><RotateCcw size={28} /> 다시하기</button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
