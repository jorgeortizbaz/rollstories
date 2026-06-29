import { useApp } from './context/AppContext';
import { GameProvider } from './context/GameContext';
import MainMenu from './screens/MainMenu';
import CharacterCreation from './screens/CharacterCreation';
import Game from './screens/Game';
import { deleteGame } from './utils/cookies';

function App() {
  const { screen, selectedStory, character, navigateTo } = useApp();

  const handleSelectStory = (story, mode) => {
    if (mode === 'new') {
      deleteGame(story.id);
      navigateTo('characterCreation', { story, mode });
    } else if (mode === 'continue') {
      navigateTo('game', { story, mode });
    }
  };

  return (
    <>
      {screen === 'mainMenu' && (
        <MainMenu onSelectStory={handleSelectStory} />
      )}
      {screen === 'characterCreation' && (
        <CharacterCreation />
      )}
      {screen === 'game' && selectedStory && (
        <GameProvider storyId={selectedStory.id} character={character}>
          <Game />
        </GameProvider>
      )}
    </>
  );
}

export default App;