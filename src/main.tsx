import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import { ErrorBoundary } from './components/ErrorBoundary.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary
      fallbackRender={({ resetError }) => (
        <div className="flex min-h-[100svh] items-center justify-center bg-slate-950 p-4 text-white">
          <div className="w-full max-w-xl rounded-[2rem] border border-rose-400/30 bg-slate-900 p-6 text-center shadow-[0_24px_80px_rgba(15,23,42,0.45)] sm:p-8">
            <h1 className="text-3xl font-black text-white sm:text-4xl">문제가 발생했어요</h1>
            <p className="mt-3 text-base font-bold leading-7 text-slate-300 sm:text-lg">
              화면을 다시 열거나 새로고침하면 대부분 바로 복구됩니다.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <button
                type="button"
                onClick={resetError}
                className="rounded-full bg-emerald-500 px-6 py-3 text-base font-black text-slate-950 transition hover:bg-emerald-400"
              >
                다시 열기
              </button>
              <button
                type="button"
                onClick={() => window.location.reload()}
                className="rounded-full border border-slate-600 px-6 py-3 text-base font-black text-slate-200 transition hover:bg-slate-800"
              >
                새로고침
              </button>
            </div>
          </div>
        </div>
      )}
    >
      <App />
    </ErrorBoundary>
  </StrictMode>,
);
