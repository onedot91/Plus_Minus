import React, { useState, useEffect, useMemo } from 'react';
import { Sword, Heart, Zap, RotateCcw, Play, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Howl } from 'howler';
import { VisualCalculator } from './components/VisualCalculator';

type GameState = 'start' | 'playing' | 'win' | 'lose';

interface Problem {
  text: string;
  answer: number;
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

export default function App() {
  const sounds = useMemo(() => ({
    correct: new Howl({ src: ['https://actions.google.com/sounds/v1/ui/positive_button.ogg'], html5: true }),
    wrong: new Howl({ src: ['https://actions.google.com/sounds/v1/ui/negative_button.ogg'], html5: true }),
    win: new Howl({ src: ['https://actions.google.com/sounds/v1/ui/menu_tap.ogg'], html5: true }),
    lose: new Howl({ src: ['https://actions.google.com/sounds/v1/ui/error.ogg'], html5: true }),
    start: new Howl({ src: ['https://actions.google.com/sounds/v1/ui/button_toggle.ogg'], html5: true }),
  }), []);
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
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (isEstimation && timeLeft === 0) {
      checkEstimation(0); // Time out
    }
  }, [isEstimation, timeLeft]);

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
    
    const roundedAnswer = Math.round(answer / 100) * 100;
    // 옵션도 양수만 포함하도록 필터링
    const options = [roundedAnswer - 100, roundedAnswer, roundedAnswer + 100].filter(o => o > 0).sort(() => Math.random() - 0.5);
    
    setEstimationProblem({ question, options, answer: roundedAnswer });
    setIsEstimation(true);
    setTimeLeft(10);
    setMessage('갑작스러운 어림잡기 도전!');
  };

  const checkEstimation = (selected: number) => {
    setIsEstimation(false);
    if (selected === estimationProblem?.answer) {
      setMessage('정확한 어림잡기! 공격 성공!');
      setIsOpponentHit(true);
      setTimeout(() => setIsOpponentHit(false), 500);
      setOpponentHP(Math.max(0, opponentHP - 40));
    } else {
      setMessage('어림잡기 실패! 반격당했다!');
      setIsPlayerHit(true);
      setTimeout(() => setIsPlayerHit(false), 500);
      setPlayerHP(Math.max(0, playerHP - 30));
    }
  };

  const checkAnswer = () => {
    if (Math.random() < 0.15) { // 15% chance
      triggerEstimation();
      return;
    }
    const isCorrect = parseInt(inputValue) === problem.answer;
    
    if (isCorrect) {
      sounds.correct.play();
      setIsAttacking(true);
      setTimeout(() => {
        setIsAttacking(false);
        setIsOpponentHit(true);
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
            updateMessage(`다음 몬스터 ${CHARACTER_NAMES[level % CHARACTER_NAMES.length]} 등장!`);
          } else {
            setGameState('win');
            sounds.win.play();
          }
        } else {
          setProblem(generateProblem(level));
        }
      }, 500);
    } else {
      sounds.wrong.play();
      setIsOpponentAttacking(true);
      setTimeout(() => {
        setIsOpponentAttacking(false);
        setIsPlayerHit(true);
        setTimeout(() => setIsPlayerHit(false), 500);
        
        const newPlayerHP = Math.max(0, playerHP - 15);
        setPlayerHP(newPlayerHP);
        updateMessage('앗! 공격이 빗나갔다! 상대의 반격!');
        if (newPlayerHP === 0) {
          setGameState('lose');
          sounds.lose.play();
        }
      }, 500);
    }
    setInputValue('');
  };

  const startGame = () => {
    sounds.start.play();
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
        <div className="w-full max-w-7xl bg-slate-800 p-6 rounded-3xl shadow-2xl border-4 border-slate-700 flex gap-6 h-[90vh]">
          {/* Left: Character Visuals & Messages */}
          <div className="w-1/3 flex flex-col items-center justify-between bg-slate-900 rounded-2xl p-4 border-2 border-slate-600 relative">
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
          <div className="w-2/3 flex flex-col justify-between gap-4">
            <div className="flex flex-col gap-2 bg-slate-900 p-4 rounded-2xl border-2 border-slate-700">
              <div className="flex justify-between items-center text-sm font-bold text-slate-400">
                <span>진척도</span>
                <span>{level} / 10</span>
              </div>
              <div className="flex gap-1">
                {[...Array(10)].map((_, i) => (
                  <div key={i} className={`h-3 flex-1 rounded-full ${i < level ? 'bg-yellow-500' : 'bg-slate-700'}`} />
                ))}
              </div>
              <span className="text-lg font-bold text-yellow-400 text-center mt-1">{LEVEL_DESCRIPTIONS[level]}</span>
            </div>

            {isEstimation ? (
              <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, ease: "easeOut" }} className="bg-slate-900 border-4 border-yellow-500 rounded-3xl p-8 flex flex-col items-center text-center text-slate-100 shadow-inner flex-grow justify-center">
                <h2 className="text-4xl font-black text-yellow-400 mb-4">어림잡기 도전! ({timeLeft}초)</h2>
                <p className="text-6xl font-mono font-bold mb-8">{estimationProblem?.question} = ?</p>
                <div className="grid grid-cols-3 gap-4 w-full">
                  {estimationProblem?.options.map(opt => (
                    <button key={opt} onClick={() => checkEstimation(opt)} className="bg-slate-700 hover:bg-slate-600 text-3xl font-bold p-6 rounded-2xl border-2 border-slate-500">{opt}쯤</button>
                  ))}
                </div>
              </motion.div>
            ) : showHint ? (
              <VisualCalculator problemText={problem.text} />
            ) : (
              <motion.div 
                key={problem.text} 
                initial={{ opacity: 0, scale: 0.9, y: 10 }} 
                animate={{ opacity: 1, scale: 1, y: 0 }} 
                transition={{ duration: 0.4, ease: "easeOut" }} 
                className="bg-white border-8 border-slate-200 rounded-3xl p-8 flex flex-col items-center text-[8rem] leading-none font-black font-mono text-slate-900 shadow-inner flex-grow justify-center"
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
              <div className="flex flex-col gap-3">
                <input 
                type="number" 
                value={inputValue} 
                onChange={e => setInputValue(e.target.value)} 
                onKeyDown={e => { if (e.key === 'Enter') checkAnswer(); }}
                className="w-full text-center text-4xl font-black p-4 rounded-2xl bg-slate-700 border-4 border-slate-500 outline-none focus:border-emerald-500" 
                placeholder="정답 입력" 
              />
                <button onClick={checkAnswer} className="w-full py-4 bg-emerald-600 text-white font-black text-2xl rounded-2xl hover:bg-emerald-500 flex items-center justify-center gap-2 shadow-lg"><Sword size={24} /> 공격!</button>
                {!isHintForced && (
                  <button onClick={() => setShowHint(!showHint)} className="w-full py-2 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-500">
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
