const READING_ACTIVITY_BLOCK_WINDOWS = [
  { startHour: 8, startMinute: 0, endHour: 8, endMinute: 50 },
] as const;

const BLOCKER_ELEMENT_ID = 'reading-activity-blocker';
const BLOCKER_STYLE_ID = 'reading-activity-blocker-style';
const BLOCKER_IMAGE_SRC = '/reading-activity-warning.png';

type ReadingActivityBlockerWindow = Window & {
  __readingActivityBlockerCleanup?: () => void;
};

function isReadingActivityBlockedNow(date = new Date()) {
  const minutes = date.getHours() * 60 + date.getMinutes();

  return READING_ACTIVITY_BLOCK_WINDOWS.some((blockWindow) => {
    const start = blockWindow.startHour * 60 + blockWindow.startMinute;
    const end = blockWindow.endHour * 60 + blockWindow.endMinute;

    if (start <= end) {
      return minutes >= start && minutes < end;
    }

    return minutes >= start || minutes < end;
  });
}

function ensureReadingActivityBlockerStyle() {
  if (document.getElementById(BLOCKER_STYLE_ID)) {
    return;
  }

  const style = document.createElement('style');
  style.id = BLOCKER_STYLE_ID;
  style.textContent = `
    #${BLOCKER_ELEMENT_ID} {
      position: fixed;
      inset: 0;
      z-index: 2147483647;
      display: none;
      align-items: center;
      justify-content: center;
      overflow-y: auto;
      box-sizing: border-box;
      padding: 24px;
      background: rgba(2, 6, 23, 0.9);
      backdrop-filter: blur(12px);
    }

    #${BLOCKER_ELEMENT_ID}.is-active {
      display: flex;
    }

    #${BLOCKER_ELEMENT_ID} .reading-activity-blocker-panel {
      width: min(100%, 672px);
      box-sizing: border-box;
      overflow: hidden;
      border: 4px solid rgba(252, 165, 165, 0.75);
      border-radius: 28px;
      padding: 24px;
      text-align: center;
      color: white;
      background: linear-gradient(180deg, rgba(127, 29, 29, 0.98), rgba(15, 23, 42, 0.98));
      box-shadow: 0 32px 100px rgba(0, 0, 0, 0.68);
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    }

    #${BLOCKER_ELEMENT_ID} img {
      display: block;
      width: 100%;
      max-height: 52svh;
      object-fit: contain;
      border: 1px solid rgba(255, 255, 255, 0.15);
      border-radius: 20px;
      box-shadow: 0 18px 48px rgba(0, 0, 0, 0.38);
      user-select: none;
    }

    #${BLOCKER_ELEMENT_ID} h1 {
      margin: 20px 0 0;
      font-size: clamp(32px, 7vw, 56px);
      line-height: 1.1;
      font-weight: 900;
      letter-spacing: 0;
      word-break: keep-all;
    }
  `;
  document.head.append(style);
}

function ensureReadingActivityBlockerElement() {
  const existingBlocker = document.getElementById(BLOCKER_ELEMENT_ID);
  if (existingBlocker) {
    return existingBlocker;
  }

  const blocker = document.createElement('div');
  blocker.id = BLOCKER_ELEMENT_ID;
  blocker.setAttribute('role', 'alertdialog');
  blocker.setAttribute('aria-modal', 'true');
  blocker.setAttribute('aria-labelledby', 'reading-activity-blocker-title');
  blocker.hidden = true;
  blocker.innerHTML = `
    <div class="reading-activity-blocker-panel">
      <img src="${BLOCKER_IMAGE_SRC}" alt="잡았다 요놈 경고 이미지" draggable="false" />
      <h1 id="reading-activity-blocker-title">지금은 독서시간입니다.</h1>
    </div>
  `;
  document.body.append(blocker);

  return blocker;
}

export function installReadingActivityBlocker() {
  const blockerWindow = window as ReadingActivityBlockerWindow;
  blockerWindow.__readingActivityBlockerCleanup?.();

  ensureReadingActivityBlockerStyle();
  const blocker = ensureReadingActivityBlockerElement();

  const refreshBlocker = () => {
    const blocked = isReadingActivityBlockedNow();
    blocker.hidden = !blocked;
    blocker.classList.toggle('is-active', blocked);
  };

  refreshBlocker();
  const intervalId = window.setInterval(refreshBlocker, 500);
  window.addEventListener('focus', refreshBlocker);
  document.addEventListener('visibilitychange', refreshBlocker);

  blockerWindow.__readingActivityBlockerCleanup = () => {
    window.clearInterval(intervalId);
    window.removeEventListener('focus', refreshBlocker);
    document.removeEventListener('visibilitychange', refreshBlocker);
  };
}
