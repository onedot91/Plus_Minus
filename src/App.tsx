import React, { useState, useEffect, useRef } from 'react';
import { Sword, Heart, Zap, RotateCcw, Play, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { VisualCalculator } from './components/VisualCalculator';

type GameState = 'start' | 'playing' | 'win' | 'lose';

interface Problem {
  text: string;
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
  | 'ui';

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
    output: 0.95,
    layers: [
      { kind: 'noise', duration: 0.09, gain: 0.016, attack: 0.002, release: 0.06, filter: { type: 'highpass', frequency: 1400, sweepTo: 4200, q: 0.8 }, reverbSend: 0.05, delaySend: 0.03 },
      { kind: 'oscillator', wave: 'triangle', frequency: 280, glideTo: 420, duration: 0.14, gain: 0.05, attack: 0.003, release: 0.1, filter: { type: 'lowpass', frequency: 4200, q: 0.7 }, reverbSend: 0.07 },
      { kind: 'oscillator', wave: 'sine', startAt: 0.05, frequency: 523.25, glideTo: 659.25, duration: 0.22, gain: 0.055, attack: 0.005, release: 0.18, delaySend: 0.08, reverbSend: 0.15, pan: 0.1 },
    ],
  },
  correct: {
    layers: [
      { kind: 'noise', duration: 0.06, gain: 0.014, attack: 0.001, release: 0.045, filter: { type: 'highpass', frequency: 2600, sweepTo: 7200, q: 0.8 }, reverbSend: 0.04 },
      { kind: 'oscillator', wave: 'square', frequency: 720, glideTo: 1120, duration: 0.12, gain: 0.045, attack: 0.002, release: 0.09, detuneJitter: 6, filter: { type: 'lowpass', frequency: 5200, sweepTo: 2600, q: 0.8 }, delaySend: 0.04, reverbSend: 0.08, pan: -0.1, panJitter: 0.08 },
      { kind: 'oscillator', wave: 'triangle', frequency: 380, glideTo: 560, duration: 0.18, gain: 0.05, attack: 0.002, release: 0.12, detuneJitter: 8, filter: { type: 'bandpass', frequency: 1400, sweepTo: 2100, q: 2.5 }, delaySend: 0.05, reverbSend: 0.09, pan: 0.15, panJitter: 0.08 },
      { kind: 'oscillator', wave: 'sine', startAt: 0.015, frequency: 1046.5, duration: 0.12, gain: 0.018, attack: 0.001, release: 0.09, reverbSend: 0.1 },
    ],
  },
  alert: {
    output: 0.9,
    layers: [
      { kind: 'noise', duration: 0.18, gain: 0.012, attack: 0.002, release: 0.15, filter: { type: 'bandpass', frequency: 1800, sweepTo: 2600, q: 1.4 }, delaySend: 0.05, reverbSend: 0.08 },
      { kind: 'oscillator', wave: 'sawtooth', frequency: 460, glideTo: 780, duration: 0.14, gain: 0.03, attack: 0.002, release: 0.08, filter: { type: 'bandpass', frequency: 1200, sweepTo: 1800, q: 3 }, reverbSend: 0.06, pan: -0.25 },
      { kind: 'oscillator', wave: 'square', startAt: 0.08, frequency: 880, glideTo: 720, duration: 0.16, gain: 0.032, attack: 0.002, release: 0.12, filter: { type: 'lowpass', frequency: 4200, sweepTo: 2400, q: 0.8 }, delaySend: 0.08, reverbSend: 0.12, pan: 0.2 },
      { kind: 'oscillator', wave: 'sine', startAt: 0.08, frequency: 220, glideTo: 180, duration: 0.18, gain: 0.028, attack: 0.002, release: 0.14, reverbSend: 0.05 },
    ],
  },
  enemyHit: {
    output: 0.92,
    layers: [
      { kind: 'noise', duration: 0.09, gain: 0.02, attack: 0.001, release: 0.07, filter: { type: 'lowpass', frequency: 2100, sweepTo: 500, q: 0.9 }, reverbSend: 0.03, pan: 0.12 },
      { kind: 'oscillator', wave: 'square', frequency: 190, glideTo: 108, duration: 0.11, gain: 0.026, attack: 0.002, release: 0.08, filter: { type: 'bandpass', frequency: 650, sweepTo: 280, q: 2.4 }, pan: -0.1 },
      { kind: 'oscillator', wave: 'sine', startAt: 0.01, frequency: 98, glideTo: 62, duration: 0.2, gain: 0.05, attack: 0.002, release: 0.16, filter: { type: 'lowpass', frequency: 900, sweepTo: 180, q: 0.8 }, reverbSend: 0.02 },
    ],
  },
  playerHit: {
    output: 0.95,
    layers: [
      { kind: 'noise', duration: 0.12, gain: 0.022, attack: 0.001, release: 0.09, filter: { type: 'bandpass', frequency: 1100, sweepTo: 320, q: 1.7 }, reverbSend: 0.04, pan: -0.18 },
      { kind: 'oscillator', wave: 'sawtooth', frequency: 210, glideTo: 120, duration: 0.16, gain: 0.03, attack: 0.002, release: 0.1, filter: { type: 'lowpass', frequency: 1500, sweepTo: 260, q: 0.9 }, pan: 0.16 },
      { kind: 'oscillator', wave: 'sine', startAt: 0.015, frequency: 120, glideTo: 74, duration: 0.22, gain: 0.052, attack: 0.002, release: 0.18, filter: { type: 'lowpass', frequency: 720, sweepTo: 130, q: 0.8 }, reverbSend: 0.03 },
    ],
  },
  wrong: {
    layers: [
      { kind: 'noise', duration: 0.12, gain: 0.016, attack: 0.001, release: 0.1, filter: { type: 'lowpass', frequency: 1200, sweepTo: 300, q: 0.8 }, reverbSend: 0.04 },
      { kind: 'oscillator', wave: 'sawtooth', frequency: 240, glideTo: 110, duration: 0.24, gain: 0.05, attack: 0.002, release: 0.16, detuneJitter: 10, filter: { type: 'lowpass', frequency: 1800, sweepTo: 320, q: 0.7 }, reverbSend: 0.03 },
      { kind: 'oscillator', wave: 'square', startAt: 0.02, frequency: 160, glideTo: 80, duration: 0.28, gain: 0.035, attack: 0.003, release: 0.18, filter: { type: 'bandpass', frequency: 500, sweepTo: 220, q: 2.2 }, delaySend: 0.02 },
    ],
  },
  levelUp: {
    output: 0.95,
    layers: [
      { kind: 'noise', duration: 0.16, gain: 0.012, attack: 0.002, release: 0.12, filter: { type: 'highpass', frequency: 3200, sweepTo: 7800, q: 0.8 }, reverbSend: 0.16 },
      { kind: 'oscillator', wave: 'triangle', frequency: 587.33, duration: 0.11, gain: 0.028, attack: 0.003, release: 0.08, delaySend: 0.06, reverbSend: 0.12, pan: -0.2 },
      { kind: 'oscillator', wave: 'triangle', startAt: 0.1, frequency: 783.99, duration: 0.12, gain: 0.032, attack: 0.003, release: 0.09, delaySend: 0.07, reverbSend: 0.13, pan: 0.15 },
      { kind: 'oscillator', wave: 'triangle', startAt: 0.22, frequency: 987.77, duration: 0.14, gain: 0.034, attack: 0.003, release: 0.1, delaySend: 0.08, reverbSend: 0.14, pan: -0.05 },
      { kind: 'oscillator', wave: 'sine', startAt: 0.22, frequency: 1975.53, duration: 0.18, gain: 0.015, attack: 0.002, release: 0.12, reverbSend: 0.16, pan: 0.1 },
    ],
  },
  tick: {
    output: 0.78,
    layers: [
      { kind: 'oscillator', wave: 'square', frequency: 1180, glideTo: 1040, duration: 0.07, gain: 0.018, attack: 0.001, release: 0.05, filter: { type: 'lowpass', frequency: 4200, sweepTo: 2500, q: 0.8 }, delaySend: 0.02, pan: -0.04 },
      { kind: 'oscillator', wave: 'sine', startAt: 0.01, frequency: 620, duration: 0.1, gain: 0.014, attack: 0.001, release: 0.07, reverbSend: 0.04, pan: 0.04 },
    ],
  },
  ui: {
    output: 0.7,
    layers: [
      { kind: 'noise', duration: 0.03, gain: 0.008, attack: 0.001, release: 0.02, filter: { type: 'highpass', frequency: 2400, sweepTo: 6200, q: 0.8 } },
      { kind: 'oscillator', wave: 'triangle', frequency: 760, glideTo: 980, duration: 0.055, gain: 0.016, attack: 0.001, release: 0.04, filter: { type: 'bandpass', frequency: 1600, sweepTo: 2200, q: 2.2 }, pan: -0.04 },
      { kind: 'oscillator', wave: 'sine', startAt: 0.01, frequency: 1320, duration: 0.045, gain: 0.01, attack: 0.001, release: 0.035, reverbSend: 0.03, pan: 0.04 },
    ],
  },
  lose: {
    layers: [
      { kind: 'noise', duration: 0.5, gain: 0.018, attack: 0.003, release: 0.32, filter: { type: 'lowpass', frequency: 900, sweepTo: 180, q: 0.7 }, reverbSend: 0.08 },
      { kind: 'oscillator', wave: 'sawtooth', frequency: 220, glideTo: 160, duration: 0.18, gain: 0.04, attack: 0.003, release: 0.12, filter: { type: 'lowpass', frequency: 1800, sweepTo: 500, q: 0.9 }, pan: -0.2 },
      { kind: 'oscillator', wave: 'triangle', startAt: 0.12, frequency: 174.61, glideTo: 130.81, duration: 0.22, gain: 0.042, attack: 0.003, release: 0.16, filter: { type: 'lowpass', frequency: 1400, sweepTo: 380, q: 0.8 }, pan: 0.1 },
      { kind: 'oscillator', wave: 'sine', startAt: 0.28, frequency: 130.81, glideTo: 87.31, duration: 0.34, gain: 0.05, attack: 0.004, release: 0.24, filter: { type: 'lowpass', frequency: 1200, sweepTo: 240, q: 0.7 }, reverbSend: 0.08, delaySend: 0.04 },
    ],
  },
  win: {
    layers: [
      { kind: 'noise', duration: 0.4, gain: 0.013, attack: 0.002, release: 0.26, filter: { type: 'highpass', frequency: 2600, sweepTo: 7200, q: 0.8 }, reverbSend: 0.18 },
      { kind: 'oscillator', wave: 'triangle', frequency: 523.25, duration: 0.16, gain: 0.038, attack: 0.004, release: 0.12, delaySend: 0.06, reverbSend: 0.14, pan: -0.2 },
      { kind: 'oscillator', wave: 'sine', frequency: 1046.5, duration: 0.12, gain: 0.014, attack: 0.002, release: 0.09, reverbSend: 0.16, pan: -0.1 },
      { kind: 'oscillator', wave: 'triangle', startAt: 0.12, frequency: 659.25, duration: 0.16, gain: 0.04, attack: 0.004, release: 0.12, delaySend: 0.07, reverbSend: 0.14, pan: 0.1 },
      { kind: 'oscillator', wave: 'sine', startAt: 0.12, frequency: 1318.5, duration: 0.1, gain: 0.015, attack: 0.002, release: 0.08, reverbSend: 0.16, pan: 0.2 },
      { kind: 'oscillator', wave: 'triangle', startAt: 0.24, frequency: 783.99, duration: 0.18, gain: 0.042, attack: 0.004, release: 0.14, delaySend: 0.08, reverbSend: 0.15, pan: -0.05 },
      { kind: 'oscillator', wave: 'sine', startAt: 0.24, frequency: 1567.98, duration: 0.12, gain: 0.016, attack: 0.002, release: 0.09, reverbSend: 0.18, pan: 0.05 },
      { kind: 'oscillator', wave: 'triangle', startAt: 0.38, frequency: 1046.5, duration: 0.32, gain: 0.05, attack: 0.006, release: 0.24, delaySend: 0.1, reverbSend: 0.2, pan: 0 },
      { kind: 'oscillator', wave: 'sine', startAt: 0.38, frequency: 2093, duration: 0.24, gain: 0.02, attack: 0.003, release: 0.18, reverbSend: 0.24 },
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

function createImpulseResponse(context: AudioContext, duration = 1.8, decay = 2.6) {
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

  output.gain.value = 0.9;
  compressor.threshold.value = -20;
  compressor.knee.value = 16;
  compressor.ratio.value = 4;
  compressor.attack.value = 0.003;
  compressor.release.value = 0.2;
  output.connect(compressor);
  compressor.connect(context.destination);

  convolver.buffer = createImpulseResponse(context);
  reverbHighPass.type = 'highpass';
  reverbHighPass.frequency.value = 180;
  reverbLowPass.type = 'lowpass';
  reverbLowPass.frequency.value = 4200;
  reverbReturn.gain.value = 0.35;
  reverbSend.connect(convolver);
  convolver.connect(reverbHighPass);
  reverbHighPass.connect(reverbLowPass);
  reverbLowPass.connect(reverbReturn);
  reverbReturn.connect(output);

  delay.delayTime.value = 0.18;
  delayFeedback.gain.value = 0.28;
  delayLowPass.type = 'lowpass';
  delayLowPass.frequency.value = 2600;
  delayReturn.gain.value = 0.25;
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

const LEVEL_DESCRIPTIONS = [
  "",
  "1단계: 받아올림 없는 덧셈",
  "2단계: 받아내림 없는 뺄셈",
  "3단계: 받아올림 1번 덧셈",
  "4단계: 받아내림 1번 뺄셈",
  "5단계: 받아올림 2~3번 덧셈",
  "6단계: 받아내림 2번 뺄셈",
  "7단계: 덧셈과 뺄셈 종합"
];

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

function generateProblem(level: number): Problem {
  let a = 0, b = 0, answer = 0, text = '';
  let valid = false;
  while (!valid) {
    a = Math.floor(Math.random() * 900) + 100; b = Math.floor(Math.random() * 900) + 100;
    if (level === 1) { if (a + b <= 999 && countCarries(a, b) === 0) { valid = true; answer = a + b; text = `${a} + ${b}`; } }
    else if (level === 2) { if (a > b && countBorrows(a, b) === 0) { valid = true; answer = a - b; text = `${a} - ${b}`; } }
    else if (level === 3) { if (a + b <= 999 && countCarries(a, b) === 1) { valid = true; answer = a + b; text = `${a} + ${b}`; } }
    else if (level === 4) { if (a > b && countBorrows(a, b) === 1) { valid = true; answer = a - b; text = `${a} - ${b}`; } }
    else if (level === 5) { const carries = countCarries(a, b); if (a + b <= 1998 && (carries === 2 || carries === 3)) { valid = true; answer = a + b; text = `${a} + ${b}`; } }
    else if (level === 6) { if (a > b && countBorrows(a, b) === 2) { valid = true; answer = a - b; text = `${a} - ${b}`; } }
    else { const isAdd = Math.random() > 0.5; if (isAdd) { answer = a + b; text = `${a} + ${b}`; valid = true; } else { if (a > b) { answer = a - b; text = `${a} - ${b}`; valid = true; } } }
  }
  return { text, answer };
}

function shuffleNumbers(values: number[]) {
  const next = [...values];

  for (let index = next.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [next[index], next[swapIndex]] = [next[swapIndex], next[index]];
  }

  return next;
}

function createEstimationChoices(answer: number) {
  const unit = answer < 100 ? 10 : 100;
  const roundedAnswer = Math.max(unit, Math.round(answer / unit) * unit);
  const candidates = new Set<number>([roundedAnswer]);
  const offsets = [-1, 1, -2, 2, -3, 3];

  for (const offset of offsets) {
    const candidate = roundedAnswer + unit * offset;

    if (candidate > 0) {
      candidates.add(candidate);
    }

    if (candidates.size >= 3) break;
  }

  while (candidates.size < 3) {
    candidates.add(roundedAnswer + unit * candidates.size);
  }

  return {
    answer: roundedAnswer,
    options: shuffleNumbers([...candidates].slice(0, 3)),
  };
}

export default function App() {
  const audioEngineRef = useRef<AudioEngine | null>(null);
  const [gameState, setGameState] = useState<GameState>('start');
  const [level, setLevel] = useState(1);
  const [problem, setProblem] = useState<Problem>(generateProblem(1));
  const [inputValue, setInputValue] = useState('');
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

  const [startTime, setStartTime] = useState(Date.now());
  const [isCritical, setIsCritical] = useState(false);

  const [isAttacking, setIsAttacking] = useState(false);
  const [isOpponentAttacking, setIsOpponentAttacking] = useState(false);
  const [isOpponentHit, setIsOpponentHit] = useState(false);
  const [isPlayerHit, setIsPlayerHit] = useState(false);

  const [isEstimation, setIsEstimation] = useState(false);
  const [estimationProblem, setEstimationProblem] = useState<{question: string, options: number[], answer: number} | null>(null);
  const [timeLeft, setTimeLeft] = useState(10);
  const [showHint, setShowHint] = useState(false);
  const isHintForced = level <= 3;

  useEffect(() => {
    if (isHintForced) setShowHint(true);
  }, [problem, level]);

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

  const selectEstimationOption = (selected: number) => {
    playSound('ui');
    checkEstimation(selected);
  };

  const triggerEstimation = () => {
    const a = Math.floor(Math.random() * 800) + 100;
    const b = Math.floor(Math.random() * 800) + 100;
    const isAdd = Math.random() > 0.5;
    
    // 초3 교육과정 준수: 결과가 항상 양수가 되도록 보장
    let answer: number;
    let question: string;
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
    
    const estimationChoices = createEstimationChoices(answer);
    
    playSound('alert');
    setEstimationProblem({
      question,
      options: estimationChoices.options,
      answer: estimationChoices.answer,
    });
    setIsEstimation(true);
    setTimeLeft(10);
    updateMessage('갑작스러운 어림잡기 도전!');
  };

  const checkEstimation = (selected: number) => {
    setIsEstimation(false);
    if (selected === estimationProblem?.answer) {
      playSound('correct');
      setIsAttacking(true);
      setTimeout(() => {
        setIsAttacking(false);
        setIsOpponentHit(true);
        playSound('enemyHit');
        setTimeout(() => setIsOpponentHit(false), 500);

        const newOpponentHP = Math.max(0, opponentHP - 40);
        setOpponentHP(newOpponentHP);
        updateMessage('정확한 어림잡기! 공격 성공!');

        if (newOpponentHP === 0) {
          if (level < 7) {
            setLevel(l => l + 1);
            setOpponentHP(100);
            setProblem(generateProblem(level + 1));
            queueSound('levelUp', 180);
            updateMessage(`다음 몬스터 ${CHARACTER_NAMES[level % CHARACTER_NAMES.length]} 등장!`);
          } else {
            setGameState('win');
            playSound('win');
          }
        }
      }, 500);
    } else {
      playSound('wrong');
      setIsOpponentAttacking(true);
      setTimeout(() => {
        setIsOpponentAttacking(false);
        setIsPlayerHit(true);
        playSound('playerHit');
        setTimeout(() => setIsPlayerHit(false), 500);

        const newPlayerHP = Math.max(0, playerHP - 30);
        setPlayerHP(newPlayerHP);
        updateMessage('어림잡기 실패! 반격당했다!');

        if (newPlayerHP === 0) {
          setGameState('lose');
          playSound('lose');
        }
      }, 500);
    }
  };

  const checkAnswer = () => {
    if (Math.random() < 0.15) { // 15% chance
      triggerEstimation();
      return;
    }
    const isCorrect = parseInt(inputValue) === problem.answer;
    
    if (isCorrect) {
      playSound('correct');
      setIsAttacking(true);
      setTimeout(() => {
        setIsAttacking(false);
        setIsOpponentHit(true);
        playSound('enemyHit');
        setTimeout(() => setIsOpponentHit(false), 500);
        
        const damage = 25; // Fixed damage
        const newOpponentHP = Math.max(0, opponentHP - damage);
        setOpponentHP(newOpponentHP);
        updateMessage('공격 성공! 데미지를 입혔다!');
        
        if (newOpponentHP === 0) {
          if (level < 7) {
            setLevel(l => l + 1);
            setOpponentHP(100);
            setProblem(generateProblem(level + 1));
            queueSound('levelUp', 180);
            updateMessage(`다음 몬스터 ${CHARACTER_NAMES[level % CHARACTER_NAMES.length]} 등장!`);
          } else {
            setGameState('win');
            playSound('win');
          }
        } else {
          setProblem(generateProblem(level));
        }
      }, 500);
    } else {
      playSound('wrong');
      setIsOpponentAttacking(true);
      setTimeout(() => {
        setIsOpponentAttacking(false);
        setIsPlayerHit(true);
        playSound('playerHit');
        setTimeout(() => setIsPlayerHit(false), 500);
        
        const newPlayerHP = Math.max(0, playerHP - 15);
        setPlayerHP(newPlayerHP);
        updateMessage('앗! 공격이 빗나갔다! 상대의 반격!');
        if (newPlayerHP === 0) {
          setGameState('lose');
          playSound('lose');
        }
      }, 500);
    }
    setInputValue('');
  };

  const startGame = () => {
    playSound('start');
    setGameState('playing');
    setLevel(1);
    setPlayerHP(100);
    setOpponentHP(100);
    setProblem(generateProblem(1));
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
                  x: isOpponentAttacking ? [0, 50, -300, 0] : isOpponentHit ? [0, -30, 30, -30, 0] : 0,
                  rotate: isOpponentAttacking ? [0, 30, -60, 0] : isOpponentHit ? [0, -45, 45, -45, 0] : 0,
                  scale: isOpponentAttacking ? [1, 0.7, 2.5, 1] : isOpponentHit ? [1, 1.6, 0.6, 1.3, 1] : 1,
                  filter: isOpponentAttacking ? 'brightness(1.1) drop-shadow(0 0 5px rgba(239, 68, 68, 0.3))' : isOpponentHit ? 'brightness(10) saturate(10) hue-rotate(180deg) blur(4px) invert(0.5)' : 'brightness(1)'
                }} 
                transition={{ duration: isOpponentAttacking ? 0.25 : 0.35, ease: "backOut" }}
                className="text-[8rem] my-2 relative"
              >
                {level % 2 === 0 ? '👾' : '👹'}
                {isOpponentAttacking && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 0.5, scale: 1.2 }}
                    className="absolute -top-2 -left-2 w-10 h-10 bg-red-300 rounded-full blur-lg"
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
              transition={{ duration: isAttacking ? 0.2 : 0.3, ease: "backOut" }}
              className="text-[8rem] mt-2 relative"
            >
              {'🐹'}
              {isAttacking && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0, rotate: 0 }}
                  animate={{ opacity: 1, scale: 2, rotate: 45 }}
                  className="absolute -top-10 -right-10 w-40 h-10 bg-emerald-400 rounded-full blur-xl"
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
            <div className="bg-slate-900 px-3 py-2 rounded-2xl border-2 border-slate-700 shrink-0">
              <div className="flex items-center gap-3">
                <p className="min-w-0 max-w-[38%] truncate text-sm font-black text-yellow-400" title={LEVEL_DESCRIPTIONS[level]}>{LEVEL_DESCRIPTIONS[level]}</p>
                <div className="flex flex-1 gap-1 min-w-0">
                {[...Array(10)].map((_, i) => (
                    <div key={i} className={`h-2 flex-1 rounded-full ${i < level ? 'bg-yellow-500' : 'bg-slate-700'}`} />
                ))}
                </div>
                <span className="shrink-0 text-sm font-bold text-slate-300">{level} / 10</span>
              </div>
            </div>

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
              <VisualCalculator problemText={problem.text} onControlSound={() => playSound('ui')} />
            ) : (
              <motion.div 
                key={problem.text} 
                initial={{ opacity: 0, scale: 0.9, y: 10 }} 
                animate={{ opacity: 1, scale: 1, y: 0 }} 
                transition={{ duration: 0.4, ease: "easeOut" }} 
                className="bg-white border-8 border-slate-200 rounded-3xl p-8 flex flex-col items-center text-[8rem] leading-none font-black font-mono text-slate-900 shadow-inner flex-1 min-h-0 justify-center"
              >
                <div className="flex flex-col items-end">
                  <span>{problem.text.split(' ')[0]}</span>
                  <div className="flex items-center gap-4">
                    <span>{problem.text.split(' ')[1]}</span>
                    <span>{problem.text.split(' ')[2]}</span>
                  </div>
                </div>
                <div className="w-full h-4 bg-slate-900 my-6 rounded-full"></div>
              </motion.div>
            )}

            {!isEstimation && (
              <div className="flex flex-col gap-3 shrink-0">
                <div className="grid grid-cols-[minmax(0,1fr)_auto] gap-3 items-stretch">
                  <input 
                  type="number" 
                  value={inputValue} 
                  onChange={e => setInputValue(e.target.value)} 
                  onKeyDown={e => { if (e.key === 'Enter') checkAnswer(); }}
                  className="min-w-0 text-center text-3xl font-black px-4 py-3 rounded-2xl bg-slate-700 border-4 border-slate-500 outline-none focus:border-emerald-500" 
                  placeholder="정답 입력" 
                />
                  <button onClick={checkAnswer} className="min-w-[170px] px-6 py-3 bg-emerald-600 text-white font-black text-xl rounded-2xl hover:bg-emerald-500 flex items-center justify-center gap-2 shadow-lg"><Sword size={22} /> 공격!</button>
                </div>
                {!isHintForced && (
                  <button onClick={toggleHint} className="w-full py-2 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-500 text-sm">
                    {showHint ? '힌트 닫기' : '힌트 보기'}
                  </button>
                )}
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
