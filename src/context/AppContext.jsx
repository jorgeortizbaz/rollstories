import { createContext, useContext, useState } from 'react';

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [screen, setScreen] = useState('mainMenu');
  const [selectedStory, setSelectedStory] = useState(null);
  const [gameMode, setGameMode] = useState(null);
  const [character, setCharacter] = useState(null);

  const navigateTo = (screenName, options = {}) => {
    if (options.story) setSelectedStory(options.story);
    if (options.mode) setGameMode(options.mode);
    if (options.character) setCharacter(options.character);
    setScreen(screenName);
  };

  return (
    <AppContext.Provider value={{ screen, selectedStory, gameMode, character, navigateTo }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp debe usarse dentro de un AppProvider');
  }
  return context;
}