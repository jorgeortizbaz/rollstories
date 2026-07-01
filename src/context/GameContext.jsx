import { createContext, useContext, useState, useEffect } from 'react';
import { saveGame, loadGame } from '../utils/cookies';

const GameContext = createContext(null);

export function GameProvider({ children, storyId, character: characterProp }) {
  const saved = loadGame(storyId);

  const [currentNodeId, setCurrentNodeId] = useState(
    saved?.currentNodeId ?? 'inicio'
  );
  const [flags, setFlags] = useState(saved?.flags ?? {});
  const [clues, setClues] = useState(saved?.clues ?? []);
  const [isInjured, setIsInjured] = useState(saved?.isInjured ?? false);
  const [character] = useState(saved?.character ?? characterProp);
  const [pendingRoll, setPendingRoll] = useState(null);
  const [lastRollResult, setLastRollResult] = useState(null);

  useEffect(() => {
    saveGame(storyId, { currentNodeId, flags, clues, isInjured, character });
  }, [currentNodeId, flags, clues, isInjured]);

  const goToNode = (nodeId) => {
    setCurrentNodeId(nodeId);
    setPendingRoll(null);
    setLastRollResult(null);
  };

  const addClue = (clue) => {
    setClues((prev) => prev.includes(clue) ? prev : [...prev, clue]);
  };

  const setFlag = (flagName, value = true) => {
    setFlags((prev) => ({ ...prev, [flagName]: value }));
  };

  const rollDice = (sides = 20) => {
    return Math.floor(Math.random() * sides) + 1;
  };

  const getAttributeValue = (attributeId) => {
    return character?.attributes?.find((a) => a.id === attributeId)?.value ?? 10;
  };

  const getClueBonus = () => {
    const count = clues.length;
    if (count >= 4) return 2;
    if (count >= 2) return 1;
    return 0;
  };

  return (
    <GameContext.Provider value={{
      currentNodeId, flags, clues, isInjured,
      character,
      pendingRoll, setPendingRoll,
      lastRollResult, setLastRollResult,
      goToNode, addClue, setFlag,
      rollDice, getAttributeValue, getClueBonus,
      setIsInjured,
    }}>
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  const context = useContext(GameContext);
  if (!context) throw new Error('useGame debe usarse dentro de un GameProvider');
  return context;
}