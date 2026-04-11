import React, { useState, useEffect, useRef } from 'react';
import { Sword, Heart, Zap, RotateCcw, Play, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { VisualCalculator, type VisualControlSound } from './components/VisualCalculator';
import playerAttackImage from './assets/player-attack.png';
import playerDefaultImage from './assets/player-default.png';
import playerHitImage from './assets/player-hit.png';
import opponentLevel1AttackImage from './assets/opponent-level1-attack.png';
import opponentLevel1DefaultImage from './assets/opponent-level1-default.png';
import opponentLevel1HitImage from './assets/opponent-level1-hit.png';
import opponentLevel2AttackImage from './assets/opponent-level2-attack.png';
import opponentLevel2DefaultImage from './assets/opponent-level2-default.png';
import opponentLevel2HitImage from './assets/opponent-level2-hit.png';
import opponentLevel3AttackImage from './assets/opponent-level3-attack.png';
import opponentLevel3DefaultImage from './assets/opponent-level3-default.png';
import opponentLevel3HitImage from './assets/opponent-level3-hit.png';
import opponentLevel4AttackImage from './assets/opponent-level4-attack.png';
import opponentLevel4DefaultImage from './assets/opponent-level4-default.png';
import opponentLevel4HitImage from './assets/opponent-level4-hit.png';
import opponentLevel5AttackImage from './assets/opponent-level5-attack.png';
import opponentLevel5DefaultImage from './assets/opponent-level5-default.png';
import opponentLevel5HitImage from './assets/opponent-level5-hit.png';
import opponentLevel6AttackImage from './assets/opponent-level6-attack.png';
import opponentLevel6DefaultImage from './assets/opponent-level6-default.png';
import opponentLevel6HitImage from './assets/opponent-level6-hit.png';
import opponentLevel7AttackImage from './assets/opponent-level7-attack.png';
import opponentLevel7DefaultImage from './assets/opponent-level7-default.png';
import opponentLevel7HitImage from './assets/opponent-level7-hit.png';
import opponentLevel8AttackImage from './assets/opponent-level8-attack.png';
import opponentLevel8DefaultImage from './assets/opponent-level8-default.png';
import opponentLevel8HitImage from './assets/opponent-level8-hit.png';
import opponentLevel9AttackImage from './assets/opponent-level9-attack.png';
import opponentLevel9DefaultImage from './assets/opponent-level9-default.png';
import opponentLevel9HitImage from './assets/opponent-level9-hit.png';

type GameState = 'start' | 'playing' | 'win' | 'lose';

type ProblemKind = 'equation' | 'story' | 'builder';

interface BuildSlotConfig {
  id: string;
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

interface Problem {
  text: string;
  prompt: string;
  answer: number;
  kind: ProblemKind;
  builder?: BuilderProblemData;
}

interface CharacterSpriteSet {
  attack: string;
  default: string;
  hit: string;
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

interface AudioEngine {
  context: AudioContext;
  noiseBuffer: AudioBuffer;
  output: GainNode;
  reverbSend: GainNode;
  delaySend: GainNode;
}

type CompatibleWindow = Window & typeof globalThis & {
  webkitAudioContext?: typeof AudioContext;
};

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
    output: 0.86,
    layers: [
      { kind: 'noise', duration: 0.04, gain: 0.007, attack: 0.001, release: 0.03, filter: { type: 'highpass', frequency: 3400, sweepTo: 9000, q: 0.8 }, reverbSend: 0.02 },
      { kind: 'oscillator', wave: 'triangle', frequency: 660, glideTo: 990, duration: 0.09, gain: 0.032, attack: 0.0015, release: 0.06, detuneJitter: 5, filter: { type: 'lowpass', frequency: 4800, sweepTo: 2800, q: 0.8 }, delaySend: 0.03, reverbSend: 0.05, pan: -0.08, panJitter: 0.04 },
      { kind: 'oscillator', wave: 'sine', startAt: 0.012, frequency: 990, glideTo: 1318.5, duration: 0.12, gain: 0.028, attack: 0.0015, release: 0.08, reverbSend: 0.06, pan: 0.1, panJitter: 0.04 },
      { kind: 'oscillator', wave: 'triangle', startAt: 0.022, frequency: 495, glideTo: 659.25, duration: 0.16, gain: 0.024, attack: 0.002, release: 0.11, filter: { type: 'bandpass', frequency: 1800, sweepTo: 2400, q: 2.2 }, reverbSend: 0.04 },
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
    output: 0.88,
    layers: [
      { kind: 'noise', duration: 0.055, gain: 0.013, attack: 0.001, release: 0.04, filter: { type: 'bandpass', frequency: 1500, sweepTo: 650, q: 1.1 }, reverbSend: 0.02, pan: 0.12 },
      { kind: 'oscillator', wave: 'triangle', frequency: 240, glideTo: 160, duration: 0.09, gain: 0.022, attack: 0.0015, release: 0.06, filter: { type: 'lowpass', frequency: 1800, sweepTo: 420, q: 0.9 }, pan: -0.08 },
      { kind: 'oscillator', wave: 'sine', startAt: 0.008, frequency: 110, glideTo: 72, duration: 0.15, gain: 0.032, attack: 0.001, release: 0.1, filter: { type: 'lowpass', frequency: 820, sweepTo: 180, q: 0.8 }, reverbSend: 0.015 },
      { kind: 'oscillator', wave: 'triangle', startAt: 0.012, frequency: 880, glideTo: 620, duration: 0.05, gain: 0.008, attack: 0.001, release: 0.03, filter: { type: 'lowpass', frequency: 2600, sweepTo: 1200, q: 0.8 }, pan: 0.18 },
    ],
  },
  playerHit: {
    output: 0.84,
    layers: [
      { kind: 'noise', duration: 0.07, gain: 0.014, attack: 0.001, release: 0.055, filter: { type: 'bandpass', frequency: 900, sweepTo: 320, q: 1.4 }, reverbSend: 0.03, pan: -0.14 },
      { kind: 'oscillator', wave: 'triangle', frequency: 180, glideTo: 120, duration: 0.12, gain: 0.024, attack: 0.0015, release: 0.08, filter: { type: 'lowpass', frequency: 1200, sweepTo: 260, q: 0.9 }, pan: 0.12 },
      { kind: 'oscillator', wave: 'sine', startAt: 0.012, frequency: 96, glideTo: 62, duration: 0.19, gain: 0.036, attack: 0.0015, release: 0.13, filter: { type: 'lowpass', frequency: 620, sweepTo: 140, q: 0.8 }, reverbSend: 0.025 },
      { kind: 'oscillator', wave: 'triangle', startAt: 0.004, frequency: 520, glideTo: 360, duration: 0.045, gain: 0.006, attack: 0.001, release: 0.025, filter: { type: 'lowpass', frequency: 1400, sweepTo: 700, q: 0.8 }, pan: 0.08 },
    ],
  },
  wrong: {
    output: 0.82,
    layers: [
      { kind: 'noise', duration: 0.09, gain: 0.009, attack: 0.001, release: 0.07, filter: { type: 'lowpass', frequency: 1600, sweepTo: 450, q: 0.8 }, reverbSend: 0.02 },
      { kind: 'oscillator', wave: 'triangle', frequency: 320, glideTo: 220, duration: 0.18, gain: 0.028, attack: 0.002, release: 0.12, detuneJitter: 6, filter: { type: 'lowpass', frequency: 1500, sweepTo: 520, q: 0.7 }, reverbSend: 0.02, pan: -0.08 },
      { kind: 'oscillator', wave: 'sine', startAt: 0.02, frequency: 246.94, glideTo: 174.61, duration: 0.22, gain: 0.026, attack: 0.002, release: 0.16, filter: { type: 'bandpass', frequency: 540, sweepTo: 280, q: 1.8 }, delaySend: 0.015, pan: 0.06 },
    ],
  },
  levelUp: {
    output: 0.88,
    layers: [
      { kind: 'noise', duration: 0.14, gain: 0.009, attack: 0.002, release: 0.1, filter: { type: 'highpass', frequency: 4000, sweepTo: 9000, q: 0.8 }, reverbSend: 0.12 },
      { kind: 'oscillator', wave: 'triangle', frequency: 523.25, duration: 0.1, gain: 0.022, attack: 0.002, release: 0.07, delaySend: 0.03, reverbSend: 0.09, pan: -0.16 },
      { kind: 'oscillator', wave: 'sine', startAt: 0.09, frequency: 659.25, duration: 0.11, gain: 0.024, attack: 0.002, release: 0.08, delaySend: 0.04, reverbSend: 0.1, pan: 0.12 },
      { kind: 'oscillator', wave: 'triangle', startAt: 0.18, frequency: 783.99, duration: 0.13, gain: 0.026, attack: 0.002, release: 0.09, delaySend: 0.05, reverbSend: 0.11, pan: -0.04 },
      { kind: 'oscillator', wave: 'sine', startAt: 0.28, frequency: 1046.5, duration: 0.18, gain: 0.018, attack: 0.002, release: 0.12, delaySend: 0.06, reverbSend: 0.14, pan: 0.08 },
      { kind: 'oscillator', wave: 'sine', startAt: 0.28, frequency: 1567.98, duration: 0.14, gain: 0.008, attack: 0.001, release: 0.09, reverbSend: 0.14, pan: 0.16 },
    ],
  },
  tick: {
    output: 0.66,
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
    output: 0.9,
    layers: [
      { kind: 'noise', duration: 0.28, gain: 0.009, attack: 0.002, release: 0.18, filter: { type: 'highpass', frequency: 3200, sweepTo: 8800, q: 0.8 }, reverbSend: 0.15 },
      { kind: 'oscillator', wave: 'triangle', frequency: 523.25, duration: 0.12, gain: 0.026, attack: 0.003, release: 0.08, delaySend: 0.04, reverbSend: 0.1, pan: -0.18 },
      { kind: 'oscillator', wave: 'sine', frequency: 1046.5, duration: 0.09, gain: 0.01, attack: 0.002, release: 0.06, reverbSend: 0.12, pan: -0.08 },
      { kind: 'oscillator', wave: 'triangle', startAt: 0.11, frequency: 659.25, duration: 0.12, gain: 0.028, attack: 0.003, release: 0.08, delaySend: 0.04, reverbSend: 0.11, pan: 0.08 },
      { kind: 'oscillator', wave: 'sine', startAt: 0.11, frequency: 1318.5, duration: 0.09, gain: 0.011, attack: 0.002, release: 0.06, reverbSend: 0.12, pan: 0.18 },
      { kind: 'oscillator', wave: 'triangle', startAt: 0.22, frequency: 783.99, duration: 0.15, gain: 0.03, attack: 0.003, release: 0.1, delaySend: 0.05, reverbSend: 0.12, pan: -0.04 },
      { kind: 'oscillator', wave: 'triangle', startAt: 0.34, frequency: 1046.5, duration: 0.22, gain: 0.034, attack: 0.004, release: 0.14, delaySend: 0.06, reverbSend: 0.15, pan: 0.02 },
      { kind: 'oscillator', wave: 'sine', startAt: 0.34, frequency: 1567.98, duration: 0.16, gain: 0.012, attack: 0.002, release: 0.1, reverbSend: 0.18 },
    ],
  },
};

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
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

  output.gain.value = 0.86;
  compressor.threshold.value = -22;
  compressor.knee.value = 16;
  compressor.ratio.value = 3.2;
  compressor.attack.value = 0.003;
  compressor.release.value = 0.18;
  output.connect(compressor);
  compressor.connect(context.destination);

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
    context,
    noiseBuffer: createNoiseBuffer(context),
    output,
    reverbSend,
    delaySend,
  };
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

function scheduleOscillatorLayer(engine: AudioEngine, layer: OscillatorLayer, effectOutput: number, baseTime: number) {
  const startAt = baseTime + (layer.startAt ?? 0);
  const endAt = startAt + layer.duration;
  const oscillator = engine.context.createOscillator();
  const detune = (layer.detune ?? 0) + randomCentered(layer.detuneJitter ?? 0);
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

function scheduleNoiseLayer(engine: AudioEngine, layer: NoiseLayer, effectOutput: number, baseTime: number) {
  const startAt = baseTime + (layer.startAt ?? 0);
  const noise = engine.context.createBufferSource();
  const inputNode = createLayerInput(engine, layer, startAt, effectOutput);

  noise.buffer = engine.noiseBuffer;
  noise.playbackRate.value = layer.playbackRate ?? 1;
  noise.connect(inputNode);
  noise.start(startAt);
  noise.stop(startAt + layer.duration + 0.02);
}

function playEffect(engine: AudioEngine, effectName: SoundEffectName) {
  const effect = SOUND_EFFECTS[effectName];
  const baseTime = engine.context.currentTime + 0.005;
  const effectOutput = effect.output ?? 1;

  for (const layer of effect.layers) {
    if (layer.kind === 'oscillator') {
      scheduleOscillatorLayer(engine, layer, effectOutput, baseTime);
    } else {
      scheduleNoiseLayer(engine, layer, effectOutput, baseTime);
    }
  }
}

const CHARACTER_NAMES = ["몬스터 A", "몬스터 B", "몬스터 C", "몬스터 D", "몬스터 E", "몬스터 F", "몬스터 G"];

const LEVEL_OPPONENT_EMOJIS = ['', '👾', '👹', '👺', '🤖', '👻', '🦖', '🐲', '😈', '👿'];
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
const LEVEL_DESCRIPTIONS = [
  "",
  "1단계: 받아올림 없는 덧셈",
  "2단계: 받아내림 없는 뺄셈",
  "3단계: 받아올림 1번 덧셈",
  "4단계: 받아내림 1번 뺄셈",
  "5단계: 받아올림 2~3번 덧셈",
  "6단계: 받아내림 2번 뺄셈",
  "7단계: 덧셈과 뺄셈 종합",
  "8단계: 텍스트 해석형 문항",
  "9단계: 텍스트 해석형 문항",
];

const TOTAL_LEVELS = LEVEL_DESCRIPTIONS.length - 1;
const FINAL_BUILDER_HP = 25;
const ESTIMATION_SAFE_HP = 40;
const ATTACK_POSE_DURATION_MS = 850;
const HIT_POSE_DURATION_MS = 700;
const ATTACK_MOTION_DURATION_S = 0.4;
const HIT_MOTION_DURATION_S = 0.5;
const ESTIMATION_TIME_LIMIT_SECONDS = 20;
const ESTIMATION_ROUNDING_UNIT = 100;
const ESTIMATION_MIN_ANSWER = 100;
const ESTIMATION_MAX_ANSWER = 900;
const ESTIMATION_MAX_RAW_ANSWER = ESTIMATION_MAX_ANSWER + ESTIMATION_ROUNDING_UNIT / 2 - 1;

function getOpponentEmojiForLevel(level: number) {
  return LEVEL_OPPONENT_EMOJIS[level] ?? LEVEL_OPPONENT_EMOJIS[LEVEL_OPPONENT_EMOJIS.length - 1];
}

function digitRange(min: number, max: number) {
  return Array.from({ length: max - min + 1 }, (_, index) => String(min + index));
}

const ADD_STORY_TEMPLATES = [
  (a: number, b: number) =>
    `연지네 집에서 학교까지 가려면 ${a}걸음을, 학교에서 도서관까지 가려면 ${b}걸음을 걸어야 합니다.\n연지가 집에서 학교를 지나 도서관까지 가려면 모두 몇 걸음을 걸어야 하는지 구해 봅시다.`,
  (a: number, b: number) =>
    `도서관 책 정리 봉사에 오전에는 ${a}권, 오후에는 ${b}권의 책을 제자리에 꽂았습니다.\n하루 동안 모두 몇 권의 책을 정리했는지 구해 봅시다.`,
  (a: number, b: number) =>
    `운동회 응원 점수를 1반은 ${a}점, 2반은 ${b}점 얻었습니다.\n두 반이 얻은 점수는 모두 몇 점인지 구해 봅시다.`,
  (a: number, b: number) =>
    `민준이는 아침에 색종이 ${a}장을 접고, 방과 후에 ${b}장을 더 접었습니다.\n민준이가 접은 색종이는 모두 몇 장인지 구해 봅시다.`,
];

const SUB_STORY_TEMPLATES = [
  (a: number, b: number) =>
    `도윤이네 학교 누리집은 오늘 ${a}명이 방문했고, 어제는 ${b}명이 방문했습니다.\n오늘 누리집을 방문한 사람은 어제보다 몇 명 더 많은지 구해 봅시다.`,
  (a: number, b: number) =>
    `학급문고에 책이 ${a}권 있었는데, 친구들이 ${b}권을 빌려 갔습니다.\n지금 남아 있는 책은 몇 권인지 구해 봅시다.`,
  (a: number, b: number) =>
    `준호는 스티커를 ${a}장 가지고 있었는데, 동생에게 ${b}장을 나누어 주었습니다.\n준호에게 남은 스티커는 몇 장인지 구해 봅시다.`,
  (a: number, b: number) =>
    `체육 시간에 준비한 공은 ${a}개였고, 그중 ${b}개를 사용했습니다.\n아직 사용하지 않은 공은 몇 개인지 구해 봅시다.`,
];

function sample<T>(items: T[]): T {
  return items[Math.floor(Math.random() * items.length)];
}

function createEquationProblem(a: number, b: number, op: '+' | '-', answer: number): Problem {
  const text = `${a} ${op} ${b}`;
  return { text, prompt: text, answer, kind: 'equation' };
}

function createStoryProblem(a: number, b: number, op: '+' | '-', answer: number): Problem {
  const text = `${a} ${op} ${b}`;
  const prompt = (op === '+' ? sample(ADD_STORY_TEMPLATES) : sample(SUB_STORY_TEMPLATES))(a, b);
  return { text, prompt, answer, kind: 'story' };
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

function isFinalBuilderTurn(opponentHP: number) {
  return opponentHP <= FINAL_BUILDER_HP;
}

function canOfferEstimation(opponentHP: number) {
  return opponentHP > ESTIMATION_SAFE_HP;
}

function createBuilderProblem(level: number): Problem {
  const baseTitle = '문제 만들기';
  let builder: BuilderProblemData;

  switch (level) {
    case 1:
      builder = {
        title: baseTitle,
        instruction: '받아올림 없는 덧셈',
        helperText: '0~4',
        op: '+',
        topTemplate: '24[a]',
        bottomTemplate: '31[b]',
        slots: [
          { id: 'a', digits: digitRange(0, 4) },
          { id: 'b', digits: digitRange(0, 4) },
        ],
        invalidMessage: '받아올림이 생기지 않도록 빈칸의 수를 다시 골라 주세요.',
        validate: (left, right) => left + right <= 999 && countCarries(left, right) === 0,
      };
      break;
    case 2:
      builder = {
        title: baseTitle,
        instruction: '받아내림 없는 뺄셈',
        helperText: '5~9 / 0~4',
        op: '-',
        topTemplate: '86[a]',
        bottomTemplate: '41[b]',
        slots: [
          { id: 'a', digits: digitRange(5, 9) },
          { id: 'b', digits: digitRange(0, 4) },
        ],
        invalidMessage: '받아내림이 생기지 않도록 제시된 범위 안에서 다시 만들어 주세요.',
        validate: (left, right) => left > right && countBorrows(left, right) === 0,
      };
      break;
    case 3:
      builder = {
        title: baseTitle,
        instruction: '받아올림 1번 덧셈',
        helperText: '5~9',
        op: '+',
        topTemplate: '24[a]',
        bottomTemplate: '31[b]',
        slots: [
          { id: 'a', digits: digitRange(5, 9) },
          { id: 'b', digits: digitRange(5, 9) },
        ],
        invalidMessage: '받아올림이 꼭 1번만 생기도록 다시 만들어 주세요.',
        validate: (left, right) => left + right <= 999 && countCarries(left, right) === 1,
      };
      break;
    case 4:
      builder = {
        title: baseTitle,
        instruction: '받아내림 1번 뺄셈',
        helperText: '0~4 / 5~9',
        op: '-',
        topTemplate: '63[a]',
        bottomTemplate: '41[b]',
        slots: [
          { id: 'a', digits: digitRange(0, 4) },
          { id: 'b', digits: digitRange(5, 9) },
        ],
        invalidMessage: '받아내림이 정확히 1번 생기도록 다시 만들어 주세요.',
        validate: (left, right) => left > right && countBorrows(left, right) === 1,
      };
      break;
    case 5:
      builder = {
        title: baseTitle,
        instruction: '받아올림 2번 이상 덧셈',
        helperText: '5~9',
        op: '+',
        topTemplate: '48[a]',
        bottomTemplate: '37[b]',
        slots: [
          { id: 'a', digits: digitRange(5, 9) },
          { id: 'b', digits: digitRange(5, 9) },
        ],
        invalidMessage: '받아올림이 2번 이상 생기도록 다시 만들어 주세요.',
        validate: (left, right) => countCarries(left, right) >= 2,
      };
      break;
    case 6:
      builder = {
        title: baseTitle,
        instruction: '받아내림 2번 뺄셈',
        helperText: '0~7 / 3~9',
        op: '-',
        topTemplate: '53[a]',
        bottomTemplate: '2[b]8',
        slots: [
          { id: 'a', digits: digitRange(0, 7) },
          { id: 'b', digits: digitRange(3, 9) },
        ],
        invalidMessage: '받아내림이 2번 생기도록 다시 만들어 주세요.',
        validate: (left, right) => left > right && countBorrows(left, right) === 2,
      };
      break;
    case 7:
      builder = sample([
        {
          title: baseTitle,
          instruction: '자유롭게 덧셈 만들기',
          helperText: '0~9',
          op: '+',
          topTemplate: '36[a]',
          bottomTemplate: '27[b]',
          slots: [
            { id: 'a', digits: digitRange(0, 9) },
            { id: 'b', digits: digitRange(0, 9) },
          ],
          invalidMessage: '빈칸을 채워 덧셈 문제를 완성해 주세요.',
          validate: (left, right) => left + right <= 999,
        },
        {
          title: baseTitle,
          instruction: '자유롭게 뺄셈 만들기',
          helperText: '0~9 / 0~7',
          op: '-',
          topTemplate: '84[a]',
          bottomTemplate: '3[b]5',
          slots: [
            { id: 'a', digits: digitRange(0, 9) },
            { id: 'b', digits: digitRange(0, 7) },
          ],
          invalidMessage: '뺄셈이 되도록 알맞은 수를 넣어 주세요.',
          validate: (left, right) => left > right,
        },
      ]);
      break;
    case 8:
      builder = {
        title: '이야기 문제 만들기',
        instruction: '이야기식 덧셈 만들기',
        helperText: '0~9',
        op: '+',
        topTemplate: '37[a]',
        bottomTemplate: '24[b]',
        slots: [
          { id: 'a', digits: digitRange(0, 9) },
          { id: 'b', digits: digitRange(0, 9) },
        ],
        invalidMessage: '빈칸에 숫자를 넣어 이야기식 문제를 완성해 주세요.',
        validate: (left, right) => left + right <= 999,
      };
      break;
    case 9:
    default:
      builder = {
        title: '이야기 문제 만들기',
        instruction: '이야기식 뺄셈 만들기',
        helperText: '0~9',
        op: '-',
        topTemplate: '94[a]',
        bottomTemplate: '3[b]6',
        slots: [
          { id: 'a', digits: digitRange(0, 9) },
          { id: 'b', digits: digitRange(0, 9) },
        ],
        invalidMessage: '뺄셈이 되도록 빈칸의 수를 다시 골라 주세요.',
        validate: (left, right) => left > right,
      };
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

function generateRegularProblem(level: number): Problem {
  let a = 0, b = 0, answer = 0;
  let op: '+' | '-' = '+';
  let valid = false;

  if (level >= 8) {
    const isAdd = Math.random() > 0.5;

    while (!valid) {
      a = Math.floor(Math.random() * 900) + 100;
      b = Math.floor(Math.random() * 900) + 100;

      if (isAdd) {
        if (a + b <= 1998) {
          answer = a + b;
          op = '+';
          valid = true;
        }
      } else if (a > b) {
        answer = a - b;
        op = '-';
        valid = true;
      }
    }

    return createStoryProblem(a, b, op, answer);
  }

  while (!valid) {
    a = Math.floor(Math.random() * 900) + 100; b = Math.floor(Math.random() * 900) + 100;
    if (level === 1) { if (a + b <= 999 && countCarries(a, b) === 0) { valid = true; answer = a + b; op = '+'; } }
    else if (level === 2) { if (a > b && countBorrows(a, b) === 0) { valid = true; answer = a - b; op = '-'; } }
    else if (level === 3) { if (a + b <= 999 && countCarries(a, b) === 1) { valid = true; answer = a + b; op = '+'; } }
    else if (level === 4) { if (a > b && countBorrows(a, b) === 1) { valid = true; answer = a - b; op = '-'; } }
    else if (level === 5) { const carries = countCarries(a, b); if (a + b <= 1998 && (carries === 2 || carries === 3)) { valid = true; answer = a + b; op = '+'; } }
    else if (level === 6) { if (a > b && countBorrows(a, b) === 2) { valid = true; answer = a - b; op = '-'; } }
    else { const isAdd = Math.random() > 0.5; if (isAdd) { answer = a + b; op = '+'; valid = true; } else { if (a > b) { answer = a - b; op = '-'; valid = true; } } }
  }
  return createEquationProblem(a, b, op, answer);
}

function getProblemForTurn(level: number, opponentHP: number): Problem {
  return isFinalBuilderTurn(opponentHP) ? createBuilderProblem(level) : generateRegularProblem(level);
}

function fillBuilderTemplate(template: string, slotValues: Record<string, string>, emptyValue = '') {
  return template.replace(/\[([a-z]+)\]/g, (_, slotId: string) => slotValues[slotId] ?? emptyValue);
}

function evaluateBuilderProblem(problem: Problem, slotValues: Record<string, string>) {
  if (problem.kind !== 'builder' || !problem.builder) {
    return null;
  }

  for (const slot of problem.builder.slots) {
    const value = slotValues[slot.id];

    if (!value) {
      return { status: 'incomplete' as const, message: '빈칸에 숫자를 먼저 넣어 문제를 완성해 주세요.' };
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

function renderPromptWithHighlight(text: string) {
  return text.split(/(\d+)/).map((part, index) =>
    /^\d+$/.test(part) ? (
      <span key={`${part}-${index}`} className="font-black text-sky-600">
        {part}
      </span>
    ) : (
      <React.Fragment key={`${part}-${index}`}>{part}</React.Fragment>
    ),
  );
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
    <div className="flex flex-wrap items-center justify-end gap-3">
      {tokens.map((token, index) => {
        const slotMatch = token.match(/^\[([a-z]+)\]$/);

        if (slotMatch) {
          const slotId = slotMatch[1];
          const slot = slotsById[slotId];

          return (
            <input
              key={`${slotId}-${index}`}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={slotValues[slotId] ?? ''}
              onChange={(event) => onSlotChange(slotId, event.target.value)}
              placeholder="?"
              aria-label={`${slotId} 빈칸`}
              className="h-20 w-20 rounded-[28px] border-4 border-sky-200 bg-sky-50 text-center text-5xl font-black text-sky-700 outline-none transition focus:border-sky-500 md:h-24 md:w-24 md:text-6xl"
              title={`${formatDigitChoices(slot.digits)} 중에서 넣기`}
            />
          );
        }

        return (
          <span
            key={`${token}-${index}`}
            className="flex h-20 w-20 items-center justify-center rounded-[28px] border-4 border-slate-200 bg-slate-50 text-5xl font-black text-slate-900 md:h-24 md:w-24 md:text-6xl"
          >
            {token}
          </span>
        );
      })}
    </div>
  );
}

function createEstimationChoices(answer: number) {
  const roundedAnswer = clamp(
    Math.round(answer / ESTIMATION_ROUNDING_UNIT) * ESTIMATION_ROUNDING_UNIT,
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

export default function App() {
  const audioEngineRef = useRef<AudioEngine | null>(null);
  const [gameState, setGameState] = useState<GameState>('start');
  const [level, setLevel] = useState(1);
  const [problem, setProblem] = useState<Problem>(() => getProblemForTurn(1, 100));
  const [inputValue, setInputValue] = useState('');
  const [builderSlotValues, setBuilderSlotValues] = useState<Record<string, string>>({});
  const [playerHP, setPlayerHP] = useState(100);
  const [opponentHP, setOpponentHP] = useState(100);
  const [message, setMessage] = useState('야생의 몬스터가 나타났다!');
  const [showMsg, setShowMsg] = useState(true);

  const updateMessage = (msg: string) => {
    setMessage(msg);
    setShowMsg(true);
    setTimeout(() => setShowMsg(false), 2000);
  };

  useEffect(() => {
    const timer = setTimeout(() => setShowMsg(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => () => {
    if (audioEngineRef.current && audioEngineRef.current.context.state !== 'closed') {
      void audioEngineRef.current.context.close();
    }
  }, []);

  const playSound = (effectName: SoundEffectName) => {
    if (!audioEngineRef.current || audioEngineRef.current.context.state === 'closed') {
      audioEngineRef.current = createAudioEngine();
    }

    const engine = audioEngineRef.current;
    if (!engine) return;

    const startPlayback = () => playEffect(engine, effectName);

    if (engine.context.state === 'suspended') {
      void engine.context.resume().then(startPlayback).catch(() => undefined);
      return;
    }

    startPlayback();
  };

  const queueSound = (effectName: SoundEffectName, delayMs: number) => {
    window.setTimeout(() => playSound(effectName), delayMs);
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

    playSound(effectName);
  };

  const [startTime, setStartTime] = useState(Date.now());
  const [isCritical, setIsCritical] = useState(false);

  const [isAttacking, setIsAttacking] = useState(false);
  const [isOpponentAttacking, setIsOpponentAttacking] = useState(false);
  const [isOpponentHit, setIsOpponentHit] = useState(false);
  const [isPlayerHit, setIsPlayerHit] = useState(false);
  const playerCharacterImage = isPlayerHit
    ? playerHitImage
    : isAttacking
      ? playerAttackImage
      : playerDefaultImage;
  const opponentSpriteSet = LEVEL_OPPONENT_SPRITES[level];
  const opponentCharacterImage = opponentSpriteSet
    ? isOpponentHit
      ? opponentSpriteSet.hit
      : isOpponentAttacking
        ? opponentSpriteSet.attack
        : opponentSpriteSet.default
    : null;

  const [isEstimation, setIsEstimation] = useState(false);
  const [estimationProblem, setEstimationProblem] = useState<{question: string, options: number[], answer: number} | null>(null);
  const [timeLeft, setTimeLeft] = useState(ESTIMATION_TIME_LIMIT_SECONDS);
  const [showHint, setShowHint] = useState(false);
  const isHintForced = opponentHP > 50;
  const builderSlotsById =
    problem.kind === 'builder' && problem.builder
      ? Object.fromEntries(problem.builder.slots.map((slot) => [slot.id, slot])) as Record<string, BuildSlotConfig>
      : {};
  const builderEvaluation = evaluateBuilderProblem(problem, builderSlotValues);
  const hintProblemText =
    problem.kind === 'builder'
      ? builderEvaluation?.status === 'ready'
        ? builderEvaluation.text
        : null
      : problem.text;

  useEffect(() => {
    setShowHint(isHintForced);
  }, [problem, isHintForced]);

  useEffect(() => {
    if (problem.kind === 'builder' && problem.builder) {
      setBuilderSlotValues(Object.fromEntries(problem.builder.slots.map((slot) => [slot.id, ''])));
      return;
    }

    setBuilderSlotValues({});
  }, [problem]);

  useEffect(() => {
    if (isEstimation && timeLeft > 0) {
      if (timeLeft <= 3) {
        playSound('tick');
      }
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (isEstimation && timeLeft === 0) {
      checkEstimation(0); // Time out
    }
  }, [isEstimation, timeLeft]);

  const toggleHint = () => {
    playSound('ui');
    setShowHint(prev => !prev);
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

  const selectEstimationOption = (selected: number) => {
    playSound('ui');
    checkEstimation(selected);
  };

  const queueEstimationChallenge = () => {
    window.setTimeout(() => {
      triggerEstimation();
    }, 700);
  };

  const scheduleNextLevelTransition = (nextLevel: number, shouldQueueEstimation = false) => {
    window.setTimeout(() => {
      setIsOpponentHit(false);
      setIsOpponentAttacking(false);
      setLevel(nextLevel);
      setOpponentHP(100);
      setProblem(getProblemForTurn(nextLevel, 100));
      queueSound('levelUp', 180);
      updateMessage(`다음 몬스터 ${CHARACTER_NAMES[(nextLevel - 1) % CHARACTER_NAMES.length]} 등장!`);
      if (shouldQueueEstimation) {
        queueEstimationChallenge();
      }
    }, HIT_POSE_DURATION_MS);
  };

  const triggerEstimation = () => {
    let a = 0;
    let b = 0;
    let isAdd = false;
    
    // 초3 교육과정 준수: 결과가 항상 양수가 되도록 보장
    let answer = 0;
    let question = '';
    do {
      a = Math.floor(Math.random() * 800) + 100;
      b = Math.floor(Math.random() * 800) + 100;
      isAdd = Math.random() > 0.5;
      if (isAdd) {
        answer = a + b;
        question = `${a} + ${b}`;
      } else {
      // 뺄셈인 경우 큰 수에서 작은 수를 뺌
        const max = Math.max(a, b);
        const min = Math.min(a, b);
        answer = max - min;
        question = `${max} - ${min}`;
      }
    } while (answer < ESTIMATION_MIN_ANSWER || answer > ESTIMATION_MAX_RAW_ANSWER);
    
    const estimationChoices = createEstimationChoices(answer);
    
    playSound('alert');
    setEstimationProblem({
      question,
      options: estimationChoices.options,
      answer: estimationChoices.answer,
    });
    setIsEstimation(true);
    setTimeLeft(ESTIMATION_TIME_LIMIT_SECONDS);
    updateMessage('갑작스러운 어림잡기 도전!');
  };

  const checkEstimation = (selected: number) => {
    const isCorrectEstimation = selected === estimationProblem?.answer;
    setIsEstimation(false);
    setEstimationProblem(null);
    if (isCorrectEstimation) {
      playSound('correct');
      setIsAttacking(true);
      setTimeout(() => {
        setIsAttacking(false);
        setIsOpponentHit(true);
        playSound('enemyHit');
        setTimeout(() => setIsOpponentHit(false), HIT_POSE_DURATION_MS);

        const newOpponentHP = Math.max(0, opponentHP - 40);
        setOpponentHP(newOpponentHP);
        updateMessage('정확한 어림잡기! 공격 성공!');

        if (newOpponentHP === 0) {
          if (level < TOTAL_LEVELS) {
            scheduleNextLevelTransition(level + 1);
          } else {
            setGameState('win');
            playSound('win');
          }
        } else {
          setProblem(getProblemForTurn(level, newOpponentHP));
        }
      }, ATTACK_POSE_DURATION_MS);
    } else {
      playSound('wrong');
      setIsOpponentAttacking(true);
      setTimeout(() => {
        setIsOpponentAttacking(false);
        setIsPlayerHit(true);
        playSound('playerHit');
        setTimeout(() => setIsPlayerHit(false), HIT_POSE_DURATION_MS);

        const newPlayerHP = Math.max(0, playerHP - 30);
        setPlayerHP(newPlayerHP);
        updateMessage('어림잡기 실패! 반격당했다!');

        if (newPlayerHP === 0) {
          setGameState('lose');
          playSound('lose');
        }
      }, ATTACK_POSE_DURATION_MS);
    }
  };

  const checkAnswer = () => {
    let isCorrect = parseInt(inputValue, 10) === problem.answer;

    if (problem.kind === 'builder') {
      if (!builderEvaluation || builderEvaluation.status === 'incomplete' || builderEvaluation.status === 'invalid') {
        playSound('ui');
        updateMessage(builderEvaluation?.message ?? '빈칸에 숫자를 먼저 넣어 문제를 완성해 주세요.');
        return;
      }

      isCorrect = parseInt(inputValue, 10) === builderEvaluation.answer;
    }
    
    if (isCorrect) {
      playSound('correct');
      setIsAttacking(true);
      setTimeout(() => {
        setIsAttacking(false);
        setIsOpponentHit(true);
        playSound('enemyHit');
        setTimeout(() => setIsOpponentHit(false), HIT_POSE_DURATION_MS);
        
        const damage = 25; // Fixed damage
        const newOpponentHP = Math.max(0, opponentHP - damage);
        setOpponentHP(newOpponentHP);
        updateMessage('공격 성공! 데미지를 입혔다!');
        
        if (newOpponentHP === 0) {
          if (level < TOTAL_LEVELS) {
            scheduleNextLevelTransition(level + 1, canOfferEstimation(100) && Math.random() < 0.15);
          } else {
            setGameState('win');
            playSound('win');
          }
        } else {
          setProblem(getProblemForTurn(level, newOpponentHP));
          if (canOfferEstimation(newOpponentHP) && Math.random() < 0.15) {
            queueEstimationChallenge();
          }
        }
      }, ATTACK_POSE_DURATION_MS);
    } else {
      playSound('wrong');
      setIsOpponentAttacking(true);
      setTimeout(() => {
        setIsOpponentAttacking(false);
        setIsPlayerHit(true);
        playSound('playerHit');
        setTimeout(() => setIsPlayerHit(false), HIT_POSE_DURATION_MS);
        
        const newPlayerHP = Math.max(0, playerHP - 15);
        setPlayerHP(newPlayerHP);
        updateMessage('앗! 공격이 빗나갔다! 상대의 반격!');
        if (newPlayerHP === 0) {
          setGameState('lose');
          playSound('lose');
        } else if (canOfferEstimation(opponentHP) && Math.random() < 0.15) {
          setProblem(getProblemForTurn(level, opponentHP));
          queueEstimationChallenge();
        }
      }, ATTACK_POSE_DURATION_MS);
    }
    setInputValue('');
  };

  const startGame = () => {
    playSound('start');
    setGameState('playing');
    setIsAttacking(false);
    setIsOpponentAttacking(false);
    setIsOpponentHit(false);
    setIsPlayerHit(false);
    setLevel(1);
    setPlayerHP(100);
    setOpponentHP(100);
    setProblem(getProblemForTurn(1, 100));
    setInputValue('');
    updateMessage('배틀 시작!');
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-4 font-sans text-white overflow-hidden">
      {gameState === 'start' && (
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center bg-slate-800 p-12 rounded-3xl shadow-2xl border-4 border-slate-600">
          <Zap className="w-24 h-24 text-yellow-400 mx-auto mb-6 animate-pulse" />
          <h1 className="text-5xl font-black mb-6">수학 몬스터 배틀</h1>
          <p className="text-xl text-slate-300 mb-10">문제를 풀어 상대 몬스터를 쓰러뜨리세요!</p>
          <button onClick={startGame} className="px-10 py-5 bg-yellow-500 text-slate-900 font-black text-3xl rounded-full hover:bg-yellow-400 transition-all flex items-center gap-4 mx-auto"><Play /> 배틀 시작!</button>
        </motion.div>
      )}

      {gameState === 'playing' && (
        <div className="w-full max-w-7xl bg-slate-800 p-6 rounded-3xl shadow-2xl border-4 border-slate-700 flex gap-4 h-[90vh]">
          {/* Left: Character Visuals & Messages */}
          <div className="w-[29%] flex flex-col items-center justify-between bg-slate-900 rounded-2xl p-4 border-2 border-slate-600 relative">
            <div className="text-center w-full">
              <p className="font-bold text-base text-slate-400 mb-1">상대</p>
              <div className="w-full bg-slate-700 h-3 rounded-full"><motion.div className="bg-red-500 h-3 rounded-full" animate={{ width: `${opponentHP}%` }} /></div>
            </div>
            
            {gameState === 'playing' ? (
              <motion.div 
                animate={{ 
                  x: isOpponentAttacking ? [0, 50, -300, 0] : isOpponentHit ? [0, -20, 20, -20, 0] : 0,
                  rotate: isOpponentAttacking ? [0, 30, -60, 0] : 0,
                  scale: isOpponentAttacking ? [1, 0.7, 2.5, 1] : isOpponentHit ? [1, 0.9, 1] : 1,
                  filter: isOpponentAttacking ? 'brightness(1.1) drop-shadow(0 0 5px rgba(239, 68, 68, 0.3))' : isOpponentHit ? 'brightness(2) saturate(2)' : 'brightness(1)'
                }} 
                transition={{ duration: isOpponentAttacking ? ATTACK_MOTION_DURATION_S : HIT_MOTION_DURATION_S, ease: "backOut" }}
                className={opponentSpriteSet
                  ? "relative my-2 flex h-[13rem] w-full items-center justify-center overflow-visible"
                  : "text-[8rem] my-2 relative"}
              >
                {opponentSpriteSet && opponentCharacterImage ? (
                  <img
                    src={opponentCharacterImage}
                    alt={`Level ${level} opponent character`}
                    className="h-full w-auto object-contain select-none drop-shadow-[0_18px_24px_rgba(15,23,42,0.35)]"
                    draggable={false}
                  />
                ) : (
                  getOpponentEmojiForLevel(level)
                )}
                {isOpponentAttacking && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 0.5, scale: 1.2 }}
                    className="pointer-events-none absolute -top-2 -left-2 w-10 h-10 bg-red-300 rounded-full blur-lg"
                  />
                )}
              </motion.div>
            ) : gameState === 'win' ? (
              <motion.div animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }} transition={{ repeat: Infinity, duration: 1 }} className="text-[12rem]">🏆</motion.div>
            ) : (
              <motion.div animate={{ opacity: [1, 0.5, 1], y: [0, 20, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="text-[12rem]">💀</motion.div>
            )}

            {/* Battle Message Display */}
            <AnimatePresence>
              {showMsg && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="text-center text-base font-bold text-yellow-400 bg-slate-800 p-3 rounded-xl border-2 border-yellow-500 w-full"
                >
                  {message}
                </motion.div>
              )}
            </AnimatePresence>

            <motion.div 
              animate={{ 
                x: isAttacking ? [0, -100, 300, 0] : isPlayerHit ? [0, -20, 20, -20, 0] : 0,
                rotate: isAttacking ? [0, -30, 60, 0] : 0,
                scale: isAttacking ? [1, 0.8, 2, 1] : isPlayerHit ? [1, 0.9, 1] : 1,
                filter: isAttacking ? 'brightness(5) drop-shadow(0 0 30px rgba(16, 185, 129, 1))' : isPlayerHit ? 'brightness(2) saturate(2)' : 'brightness(1)'
              }} 
              transition={{ duration: isAttacking ? ATTACK_MOTION_DURATION_S : HIT_MOTION_DURATION_S, ease: "backOut" }}
              className="relative mt-2 flex h-[13rem] w-full items-center justify-center overflow-visible"
            >
              <img
                src={playerCharacterImage}
                alt="플레이어 캐릭터"
                className="h-full w-auto object-contain select-none drop-shadow-[0_18px_24px_rgba(15,23,42,0.35)]"
                draggable={false}
              />
              {isAttacking && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0, rotate: 0 }}
                  animate={{ opacity: 1, scale: 2, rotate: 45 }}
                  className="pointer-events-none absolute -top-10 -right-10 h-10 w-40 rounded-full bg-emerald-400 blur-xl"
                />
              )}
            </motion.div>

            <div className="text-center w-full">
              <p className="font-bold text-base text-slate-400 mb-1">나</p>
              <div className="w-full bg-slate-700 h-3 rounded-full"><motion.div className="bg-emerald-500 h-3 rounded-full" animate={{ width: `${playerHP}%` }} /></div>
            </div>
          </div>

          {/* Right: Math Problem & Input */}
          <div className="flex-1 min-w-0 flex flex-col gap-3 min-h-0">
            <div className="flex items-center gap-3 shrink-0">
              <div className="min-w-0 flex-1 bg-slate-900 px-3 py-2 rounded-2xl border-2 border-slate-700">
                <div className="flex items-center gap-3">
                  <p className="min-w-0 max-w-[38%] truncate text-sm font-black text-yellow-400" title={LEVEL_DESCRIPTIONS[level]}>{LEVEL_DESCRIPTIONS[level]}</p>
                  <div className="flex flex-1 gap-1 min-w-0">
                  {[...Array(TOTAL_LEVELS)].map((_, i) => (
                      <div key={i} className={`h-2 flex-1 rounded-full ${i < level ? 'bg-yellow-500' : 'bg-slate-700'}`} />
                  ))}
                  </div>
                  <span className="shrink-0 text-sm font-bold text-slate-300">{level} / {TOTAL_LEVELS}</span>
                </div>
              </div>

              {!isEstimation && !isHintForced && (
                <button
                  onClick={toggleHint}
                  className="shrink-0 inline-flex items-center rounded-2xl border border-blue-400/30 bg-blue-600 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-blue-500"
                >
                  {showHint ? '힌트 닫기' : '힌트 보기'}
                </button>
              )}
            </div>

            <div className="flex flex-1 min-h-0 flex-col">
              {isEstimation ? (
              <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, ease: "easeOut" }} className="bg-slate-900 border-4 border-yellow-500 rounded-3xl p-8 flex flex-col items-center text-center text-slate-100 shadow-inner flex-1 min-h-0 justify-center">
                <h2 className="text-4xl font-black text-yellow-400 mb-4">어림잡기 도전! ({timeLeft}초)</h2>
                <p className="text-6xl font-mono font-bold mb-8">{estimationProblem?.question} = ?</p>
                <div className="grid grid-cols-3 gap-4 w-full">
                  {estimationProblem?.options.map(opt => (
                    <button key={opt} onClick={() => selectEstimationOption(opt)} className="bg-slate-700 hover:bg-slate-600 text-3xl font-bold p-6 rounded-2xl border-2 border-slate-500">{opt}쯤</button>
                  ))}
                </div>
              </motion.div>
            ) : showHint ? (
              hintProblemText ? (
                <VisualCalculator
                  problemText={hintProblemText}
                  onControlSound={playVisualControlSound}
                />
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="flex flex-1 min-h-0 items-center justify-center rounded-3xl border-4 border-dashed border-sky-300 bg-sky-50 p-8 text-center text-sky-800"
                >
                  <div className="max-w-2xl">
                    <p className="text-3xl font-black">빈칸에 숫자를 먼저 넣어 주세요.</p>
                    <p className="mt-3 text-lg font-bold leading-8 text-slate-600">문제를 완성하면 단계별 힌트와 블록 계산 화면을 바로 볼 수 있어요.</p>
                  </div>
                </motion.div>
              )
            ) : (
              <motion.div 
                key={`${problem.kind}-${problem.prompt}`} 
                initial={{ opacity: 0, scale: 0.9, y: 10 }} 
                animate={{ opacity: 1, scale: 1, y: 0 }} 
                transition={{ duration: 0.4, ease: "easeOut" }} 
                className={`bg-white border-8 border-slate-200 rounded-3xl p-8 shadow-inner flex-1 min-h-0 ${
                  problem.kind !== 'equation'
                    ? 'flex flex-col justify-center overflow-y-auto'
                    : 'flex flex-col items-center justify-center text-[8rem] leading-none font-black font-mono text-slate-900'
                }`}
              >
                {problem.kind === 'story' ? (
                  <div className="mx-auto flex w-full max-w-4xl flex-col gap-5 text-left text-slate-900">
                    <div className="inline-flex w-fit items-center rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-black tracking-[0.18em] text-sky-700">
                      이야기 문제
                    </div>
                    {problem.prompt.split('\n').map((line, index, lines) => (
                      <p
                        key={`${line}-${index}`}
                        className={`break-keep leading-[1.8] ${
                          index === lines.length - 1
                            ? 'text-[2rem] font-black text-slate-900 md:text-[2.25rem]'
                            : 'text-[1.85rem] font-bold text-slate-700 md:text-[2.1rem]'
                        }`}
                      >
                        {renderPromptWithHighlight(line)}
                      </p>
                    ))}
                  </div>
                ) : problem.kind === 'builder' && problem.builder ? (
                  <div className="flex h-full w-full flex-col gap-4 text-left text-slate-900">
                    <div>
                      <h2 className="text-4xl font-black text-slate-900 md:text-[3.5rem]">{problem.builder.title}</h2>
                      <p className="mt-2 break-keep text-[1.5rem] font-bold leading-[1.4] text-slate-700 md:text-[1.9rem]">
                        {problem.builder.instruction}
                      </p>
                    </div>

                    <div className="grid flex-1 gap-4 lg:grid-cols-[minmax(0,1fr)_220px]">
                      <div className="rounded-[34px] border-4 border-slate-200 bg-slate-50 p-8 md:p-10">
                        <div className="flex h-full flex-col justify-center gap-6">
                          <BuilderNumberRow
                            template={problem.builder.topTemplate}
                            slotsById={builderSlotsById}
                            slotValues={builderSlotValues}
                            onSlotChange={handleBuilderSlotChange}
                          />
                          <div className="flex items-center justify-end gap-5">
                            <span className="text-6xl font-black text-slate-500 md:text-7xl">{problem.builder.op}</span>
                            <BuilderNumberRow
                              template={problem.builder.bottomTemplate}
                              slotsById={builderSlotsById}
                              slotValues={builderSlotValues}
                              onSlotChange={handleBuilderSlotChange}
                            />
                          </div>
                        </div>
                        <div className="mt-8 h-2 rounded-full bg-slate-900" />
                      </div>

                      <div className="rounded-[30px] border border-sky-200 bg-sky-50 p-4 md:p-5">
                        <div className="flex flex-col gap-3">
                          {problem.builder.slots.map((slot, index) => (
                            <div key={slot.id} className="rounded-2xl border border-sky-200 bg-white px-4 py-4">
                              <div className="text-sm font-black text-slate-500">빈칸 {index + 1}</div>
                              <div className="mt-1 text-3xl font-black text-sky-700">{formatDigitChoices(slot.digits)}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

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

            {!isEstimation && (
              <div className="flex flex-col gap-3 shrink-0">
                <div className="grid grid-cols-[minmax(0,1fr)_auto] gap-3 items-stretch">
                  <input 
                  type="number" 
                  value={inputValue} 
                  onChange={e => setInputValue(e.target.value)} 
                  onKeyDown={e => { if (e.key === 'Enter') checkAnswer(); }}
                  className="min-w-0 text-center text-3xl font-black px-4 py-3 rounded-2xl bg-slate-700 border-4 border-slate-500 outline-none focus:border-emerald-500" 
                  placeholder={problem.kind === 'builder' ? '답' : '정답 입력'} 
                />
                  <button onClick={checkAnswer} className="min-w-[170px] px-6 py-3 bg-emerald-600 text-white font-black text-xl rounded-2xl hover:bg-emerald-500 flex items-center justify-center gap-2 shadow-lg"><Sword size={22} /> 공격!</button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {(gameState === 'win' || gameState === 'lose') && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }} 
          animate={{ opacity: 1, scale: 1 }} 
          className="text-center bg-slate-800 p-16 rounded-3xl shadow-2xl border-4 border-slate-600"
        >
          {gameState === 'win' ? (
            <motion.div 
              animate={{ 
                rotate: [0, -10, 10, -10, 0], 
                scale: [1, 1.3, 1],
                filter: ['hue-rotate(0deg)', 'hue-rotate(360deg)']
              }} 
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <Star className="w-48 h-48 text-yellow-400 mx-auto mb-8 fill-current" />
              <h1 className="text-8xl font-black mb-8 text-yellow-400 drop-shadow-lg">배틀 승리!</h1>
            </motion.div>
          ) : (
            <motion.div 
              animate={{ 
                opacity: [1, 0.3, 1],
                y: [0, 20, 0],
                filter: ['grayscale(0%)', 'grayscale(100%)']
              }} 
              transition={{ repeat: Infinity, duration: 3 }}
            >
              <Heart className="w-48 h-48 text-slate-500 mx-auto mb-8 fill-current" />
              <h1 className="text-8xl font-black mb-8 text-slate-400">배틀 패배...</h1>
            </motion.div>
          )}
          <button onClick={startGame} className="px-12 py-6 bg-slate-600 text-white font-black text-4xl rounded-full hover:bg-slate-500 transition-all flex items-center gap-4 mx-auto"><RotateCcw size={40} /> 다시하기</button>
        </motion.div>
      )}
    </div>
  );
}
