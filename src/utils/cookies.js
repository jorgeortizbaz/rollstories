import Cookies from 'js-cookie';

const COOKIE_PREFIX = 'rollstories_';
const COOKIE_EXPIRY_DAYS = 30;

export const saveGame = (storyId, gameState) => {
  const key = `${COOKIE_PREFIX}${storyId}`;
  const data = {
    currentNodeId: gameState.currentNodeId,
    flags: gameState.flags,
    clues: gameState.clues,
    isInjured: gameState.isInjured,
    savedAt: new Date().toISOString(),
  };
  Cookies.set(key, JSON.stringify(data), { expires: COOKIE_EXPIRY_DAYS });
};

export const loadGame = (storyId) => {
  const key = `${COOKIE_PREFIX}${storyId}`;
  const raw = Cookies.get(key);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
};

export const deleteGame = (storyId) => {
  Cookies.remove(`${COOKIE_PREFIX}${storyId}`);
};

export const hasSavedGame = (storyId) => {
  return loadGame(storyId) !== null;
};