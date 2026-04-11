import React, { useState, useMemo, useEffect } from 'react';
import { ChevronRight, ChevronLeft, RotateCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

function genAdd(n1: number, n2: number) {
  const s = [];
  let h1 = Math.floor(n1/100), t1 = Math.floor((n1%100)/10), o1 = n1%10;
  let h2 = Math.floor(n2/100), t2 = Math.floor((n2%100)/10), o2 = n2%10;
  let hc = 0, tc = 0;
  let hc_pos = 't', tc_pos = 'o';
  let hr: number | string = '', tr: number | string = '', or: number | string = '';

  const push = (msg: string, col: string) => s.push({ 
    msg, h1, t1, o1, h2, t2, o2, hc, tc, hc_pos, tc_pos, 
    borrow_h: 0, borrow_t: 0, borrow_h_pos: 'h', borrow_t_pos: 't', 
    hr, tr, or, col, removeH: 0, removeT: 0, removeO: 0, crossH: false, crossT: false 
  });

  push("계산을 시작합니다.", 'none');
  push("일의 자리를 더합니다.", 'o');
  
  let sumO = o1 + o2;
  o1 = 0; o2 = 0; or = sumO;
  push("일 모형을 합칩니다.", 'o');

  if (sumO >= 10) {
    tc = 1;
    tc_pos = 'o';
    or = sumO - 10;
    push("일 모형 10개를 십 모형 1개로 바꿉니다.", 'o');
    tc_pos = 't';
    push("십의 자리로 받아올림합니다.", 't');
  }
  push("일의 자리 계산 완료.", 'o');

  push("십의 자리를 더합니다.", 't');
  let sumT = t1 + t2 + tc;
  t1 = 0; t2 = 0; tc = 0; tr = sumT;
  push("십 모형을 합칩니다.", 't');

  if (sumT >= 10) {
    hc = 1;
    hc_pos = 't';
    tr = sumT - 10;
    push("십 모형 10개를 백 모형 1개로 바꿉니다.", 't');
    hc_pos = 'h';
    push("백의 자리로 받아올림합니다.", 'h');
  }
  push("십의 자리 계산 완료.", 't');

  push("백의 자리를 더합니다.", 'h');
  let sumH = h1 + h2 + hc;
  h1 = 0; h2 = 0; hc = 0; hr = sumH;
  push("백 모형을 합칩니다.", 'h');

  push("계산이 완료되었습니다!", 'none');

  return s;
}

function genSub(n1: number, n2: number) {
  const s = [];
  let h1 = Math.floor(n1/100), t1 = Math.floor((n1%100)/10), o1 = n1%10;
  let h2 = Math.floor(n2/100), t2 = Math.floor((n2%100)/10), o2 = n2%10;
  let hr: number | string = '', tr: number | string = '', or: number | string = '';
  let crossH = false, crossT = false;
  let removeH = 0, removeT = 0, removeO = 0;
  let borrow_h = 0, borrow_t = 0;
  let borrow_h_pos = 'h', borrow_t_pos = 't';

  const push = (msg: string, col: string) => s.push({ 
    msg, h1, t1, o1, h2, t2, o2, hc: 0, tc: 0, hc_pos: 't', tc_pos: 'o', 
    borrow_h, borrow_t, borrow_h_pos, borrow_t_pos, 
    removeH, removeT, removeO, hr, tr, or, col, crossH, crossT 
  });

  push("계산을 시작합니다.", 'none');
  push("일의 자리를 뺍니다.", 'o');
  if (o1 < o2) {
    push("일 모형이 부족하여 십 모형 1개를 빌려옵니다.", 't');
    t1 -= 1;
    borrow_t = 1;
    borrow_t_pos = 't';
    crossT = true;
    push("십 모형을 일의 자리로 가져옵니다.", 'o');
    borrow_t_pos = 'o';
    push("십 모형 1개가 일 모형 10개로 바뀌었습니다.", 'o');
    borrow_t = 0;
    o1 += 10;
  }
  push(`${o2}개를 뺍니다.`, 'o');
  o1 -= o2;
  removeO = o2;
  push("일의 자리 계산 완료.", 'o');
  removeO = 0;
  or = o1;

  push("십의 자리를 뺍니다.", 't');
  if (t1 < t2) {
    push("십 모형이 부족하여 백 모형 1개를 빌려옵니다.", 'h');
    h1 -= 1;
    borrow_h = 1;
    borrow_h_pos = 'h';
    crossH = true;
    push("백 모형을 십의 자리로 가져옵니다.", 't');
    borrow_h_pos = 't';
    push("백 모형 1개가 십 모형 10개로 바뀌었습니다.", 't');
    borrow_h = 0;
    t1 += 10;
  }
  push(`${t2}개를 뺍니다.`, 't');
  t1 -= t2;
  removeT = t2;
  push("십의 자리 계산 완료.", 't');
  removeT = 0;
  tr = t1;

  push("백의 자리를 뺍니다.", 'h');
  push(`${h2}개를 뺍니다.`, 'h');
  h1 -= h2;
  removeH = h2;
  push("백의 자리 계산 완료.", 'h');
  removeH = 0;
  hr = h1;

  push("계산이 완료되었습니다!", 'none');
  return s;
}

export const VisualCalculator: React.FC<{ problemText: string }> = ({ problemText }) => {
  const parts = problemText.split(' ');
  const n1 = parseInt(parts[0]);
  const op = parts[1];
  const n2 = parseInt(parts[2]);

  const steps = useMemo(() => {
    if (op === '+') return genAdd(n1, n2);
    else return genSub(n1, n2);
  }, [n1, op, n2]);

  const [stepIdx, setStepIdx] = useState(0);

  useEffect(() => {
    setStepIdx(0);
  }, [problemText]);

  const step = steps[stepIdx];

  const next = () => setStepIdx(s => Math.min(s + 1, steps.length - 1));
  const prev = () => setStepIdx(s => Math.max(s - 1, 0));
  const reset = () => setStepIdx(0);

  const renderBlocks = (count: number, type: 100 | 10 | 1, prefix: string, isRemove = false, idOffset = 0) => {
    const blocks = [];
    const baseClass = type === 100 ? "w-10 h-10 bg-blue-500 border-2 border-blue-600" :
                      type === 10 ? "w-3 h-10 bg-green-500 border-2 border-green-600" :
                                    "w-3 h-3 bg-yellow-400 border-2 border-yellow-500";

    for(let i=0; i<count; i++) {
      const blockId = idOffset + i;
      const layoutId = `${prefix}-${type}-${blockId}`;
      
      blocks.push(
        <motion.div 
          key={layoutId}
          layout
          layoutId={layoutId}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ 
            opacity: isRemove ? 0.8 : 1, 
            scale: isRemove ? 0.8 : 1,
            y: isRemove ? 10 : 0
          }}
          exit={{ opacity: 0, scale: 0, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className={`${baseClass} ${isRemove ? '!bg-red-500 !border-red-600' : ''} rounded-sm shadow-sm relative flex items-center justify-center overflow-hidden transition-colors duration-300`} 
        >
          {isRemove && (
            <motion.div 
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-[140%] h-[2px] bg-white/90 rotate-45 absolute" />
              <div className="w-[140%] h-[2px] bg-white/90 -rotate-45 absolute" />
            </motion.div>
          )}
        </motion.div>
      );
    }
    return blocks;
  };

  const renderSpecialBlock = (type: 100 | 10 | 1, layoutId: string, isCarry = false, isBorrow = false) => {
    const baseClass = type === 100 ? "w-10 h-10 bg-blue-500 border-2 border-blue-600" :
                      type === 10 ? "w-3 h-10 bg-green-500 border-2 border-green-600" :
                                    "w-3 h-3 bg-yellow-400 border-2 border-yellow-500";
    const extraClass = isCarry ? "ring-2 ring-white z-10" : isBorrow ? "ring-2 ring-red-500 ring-offset-2 ring-offset-slate-800 z-10 !bg-red-500/80" : "";
    
    return (
      <motion.div 
        key={layoutId}
        layout
        layoutId={layoutId}
        initial={{ opacity: 0, y: isCarry ? 20 : -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className={`${baseClass} ${extraClass} rounded-sm shadow-sm`} 
      />
    );
  };

  return (
    <motion.div layout className="bg-slate-900 border-4 border-slate-700 rounded-2xl p-4 flex flex-col shadow-inner flex-grow">
      {/* Header & Controls */}
      <div className="flex justify-between items-center mb-4 bg-slate-800 p-3 rounded-lg border border-slate-600">
        <motion.h3 key={step.msg} initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="text-lg font-black text-yellow-400 flex-1">{step.msg}</motion.h3>
        <div className="flex gap-1">
          <button onClick={prev} disabled={stepIdx === 0} className="p-2 bg-slate-700 text-white rounded-lg disabled:opacity-50 hover:bg-slate-600 font-bold flex items-center gap-1 text-sm"><ChevronLeft size={16} /> 이전</button>
          <button onClick={next} disabled={stepIdx === steps.length - 1} className="p-2 bg-blue-600 text-white rounded-lg disabled:opacity-50 hover:bg-blue-500 font-bold flex items-center gap-1 text-sm">다음 <ChevronRight size={16} /></button>
          <button onClick={reset} className="p-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600"><RotateCcw size={16} /></button>
        </div>
      </div>

      <div className="flex gap-4 flex-grow">
        {/* Vertical Math Formula */}
        <div className="w-1/4 bg-slate-800 rounded-xl p-4 flex items-center justify-center border border-slate-600">
          <div className="grid grid-cols-4 gap-x-2 gap-y-2 text-4xl font-mono font-black text-white text-right">
            {/* Carries / Borrows row */}
            <div className="text-2xl text-red-400"></div>
            <div className="text-2xl text-red-400">{op === '+' ? (step.hc ? '1' : '') : (step.crossH ? step.h1 : '')}</div>
            <div className="text-2xl text-red-400">{op === '+' ? (step.tc ? '1' : '') : (step.crossT ? step.t1 : '')}</div>
            <div className="text-2xl text-red-400">{op === '-' && step.crossT ? '10' : ''}</div>

            {/* Num 1 */}
            <div></div>
            <div className={op === '-' && step.crossH ? 'line-through text-slate-500' : ''}>{Math.floor(n1/100) || ''}</div>
            <div className={op === '-' && step.crossT ? 'line-through text-slate-500' : ''}>{Math.floor((n1%100)/10) || (n1>99?'0':'')}</div>
            <div>{n1%10}</div>

            {/* Num 2 */}
            <div className="text-yellow-400">{op}</div>
            <div>{Math.floor(n2/100) || ''}</div>
            <div>{Math.floor((n2%100)/10) || (n2>99?'0':'')}</div>
            <div>{n2%10}</div>

            {/* Divider */}
            <div className="col-span-4 h-1 bg-slate-600 my-1 rounded-full"></div>

            {/* Result - Hidden */}
            <div className="col-span-4 h-8"></div>
          </div>
        </div>

        {/* Blocks Visualization */}
        <div className="w-3/4 bg-slate-800 rounded-xl p-3 flex gap-2 border border-slate-600">
          {/* Hundreds */}
          <div className={`flex-1 flex flex-col gap-1 p-2 rounded-lg transition-colors ${step.col === 'h' ? 'bg-slate-700 ring-2 ring-yellow-400' : 'bg-slate-900/50'}`}>
            <div className="text-center font-bold text-slate-400 text-xs">백</div>
            <div className="flex flex-wrap content-start gap-0.5 min-h-[60px]">
              <AnimatePresence>{renderBlocks(step.h1, 100, op === '+' ? 'shared-h' : 'sub-h', false, 0)}</AnimatePresence>
              <AnimatePresence>{op === '-' && renderBlocks(step.removeH, 100, 'sub-h', true, step.h1)}</AnimatePresence>
              <AnimatePresence>{step.hc > 0 && step.hc_pos === 'h' && renderSpecialBlock(100, 'carry-h', true)}</AnimatePresence>
              <AnimatePresence>{step.borrow_h > 0 && step.borrow_h_pos === 'h' && renderSpecialBlock(100, `sub-h-100-${step.h1}`, false, true)}</AnimatePresence>
            </div>
            {op === '+' && (
              <div className="flex flex-wrap content-start gap-0.5 min-h-[60px] border-t border-slate-600 pt-1 mt-1">
                <AnimatePresence>{renderBlocks(step.h2, 100, 'shared-h', false, Math.floor(n1/100))}</AnimatePresence>
              </div>
            )}
            {op === '+' && (
              <div className="flex flex-wrap content-start gap-0.5 min-h-[60px] border-t border-slate-600 pt-1 mt-1 bg-slate-800/50 rounded p-1">
                <AnimatePresence>{renderBlocks(step.hr as number, 100, 'shared-h', false, 0)}</AnimatePresence>
              </div>
            )}
          </div>

          {/* Tens */}
          <div className={`flex-1 flex flex-col gap-1 p-2 rounded-lg transition-colors ${step.col === 't' ? 'bg-slate-700 ring-2 ring-yellow-400' : 'bg-slate-900/50'}`}>
            <div className="text-center font-bold text-slate-400 text-xs">십</div>
            <div className="flex flex-wrap content-start gap-0.5 min-h-[60px]">
              <AnimatePresence>{renderBlocks(step.t1, 10, op === '+' ? 'shared-t' : 'sub-t', false, 0)}</AnimatePresence>
              <AnimatePresence>{op === '-' && renderBlocks(step.removeT, 10, 'sub-t', true, step.t1)}</AnimatePresence>
              <AnimatePresence>{step.tc > 0 && step.tc_pos === 't' && renderSpecialBlock(10, 'carry-t', true)}</AnimatePresence>
              <AnimatePresence>{step.hc > 0 && step.hc_pos === 't' && renderSpecialBlock(100, 'carry-h', true)}</AnimatePresence>
              <AnimatePresence>{step.borrow_t > 0 && step.borrow_t_pos === 't' && renderSpecialBlock(10, `sub-t-10-${step.t1}`, false, true)}</AnimatePresence>
              <AnimatePresence>{step.borrow_h > 0 && step.borrow_h_pos === 't' && renderSpecialBlock(100, `sub-h-100-${step.h1}`, false, true)}</AnimatePresence>
            </div>
            {op === '+' && (
              <div className="flex flex-wrap content-start gap-0.5 min-h-[60px] border-t border-slate-600 pt-1 mt-1">
                <AnimatePresence>{renderBlocks(step.t2, 10, 'shared-t', false, Math.floor((n1%100)/10))}</AnimatePresence>
              </div>
            )}
            {op === '+' && (
              <div className="flex flex-wrap content-start gap-0.5 min-h-[60px] border-t border-slate-600 pt-1 mt-1 bg-slate-800/50 rounded p-1">
                <AnimatePresence>{renderBlocks(step.tr as number, 10, 'shared-t', false, 0)}</AnimatePresence>
              </div>
            )}
          </div>

          {/* Ones */}
          <div className={`flex-1 flex flex-col gap-1 p-2 rounded-lg transition-colors ${step.col === 'o' ? 'bg-slate-700 ring-2 ring-yellow-400' : 'bg-slate-900/50'}`}>
            <div className="text-center font-bold text-slate-400 text-xs">일</div>
            <div className="flex flex-wrap content-start gap-0.5 min-h-[60px]">
              <AnimatePresence>{renderBlocks(step.o1, 1, op === '+' ? 'shared-o' : 'sub-o', false, 0)}</AnimatePresence>
              <AnimatePresence>{op === '-' && renderBlocks(step.removeO, 1, 'sub-o', true, step.o1)}</AnimatePresence>
              <AnimatePresence>{step.tc > 0 && step.tc_pos === 'o' && renderSpecialBlock(10, 'carry-t', true)}</AnimatePresence>
              <AnimatePresence>{step.borrow_t > 0 && step.borrow_t_pos === 'o' && renderSpecialBlock(10, `sub-t-10-${step.t1}`, false, true)}</AnimatePresence>
            </div>
            {op === '+' && (
              <div className="flex flex-wrap content-start gap-0.5 min-h-[60px] border-t border-slate-600 pt-1 mt-1">
                <AnimatePresence>{renderBlocks(step.o2, 1, 'shared-o', false, n1%10)}</AnimatePresence>
              </div>
            )}
            {op === '+' && (
              <div className="flex flex-wrap content-start gap-0.5 min-h-[60px] border-t border-slate-600 pt-1 mt-1 bg-slate-800/50 rounded p-1">
                <AnimatePresence>{renderBlocks(step.or as number, 1, 'shared-o', false, 0)}</AnimatePresence>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
