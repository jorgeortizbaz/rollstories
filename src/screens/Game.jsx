import { useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { useGame } from '../context/GameContext';
import { GNOMABANDISTAS_NODES } from '../data/systems/dnd/stories/gnomabandistas';
import { getSceneImage } from '../assets/scenes/index.js';
import { getNpcImage } from '../assets/npcs/index.js';
import NodeNarration from '../components/game/NodeNarration';
import NodeChoice from '../components/game/NodeChoice';
import NodeRoll from '../components/game/NodeRoll';
import NodeCombat from '../components/game/NodeCombat';
import CharacterPortrait from '../components/game/CharacterPortrait';
import './Game.css';

const STORY_NODES = {
  gnomabandistas: GNOMABANDISTAS_NODES,
};

function Game() {
  const { selectedStory, character } = useApp();
  const { currentNodeId, goToNode, addClue, setFlag, setIsInjured, flags, clues, isInjured } = useGame();

  const nodes = STORY_NODES[selectedStory.id];
  const node = nodes[currentNodeId];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentNodeId]);

  useEffect(() => {
    if (node?.onEnter) {
      node.onEnter({ addClue, setFlag, setIsInjured, character });
    }
  }, [currentNodeId]);

  if (!node) return <p>Nodo no encontrado: {currentNodeId}</p>;

  const sceneImage = node.scene ? getSceneImage(node.scene) : null;
  const npcImages = (node.npcs ?? []).map(getNpcImage).filter(Boolean);

  return (
    <div className="game-wrapper">
      <div
        className="game-scene"
        style={sceneImage ? { '--scene-bg': `url(${sceneImage})` } : {}}
      >
        {sceneImage && <div className="game-scene-blur" />}
        {sceneImage && (
          <img src={sceneImage} alt="" className="game-scene-bg" />
        )}
        <div className="game-scene-overlay" />
        <div className="game-npcs">
          {npcImages.map((url, i) => (
            <img key={i} src={url} alt="" className="game-npc" />
          ))}
        </div>
      </div>

      <div className="game-ui">
        {node.type === 'narration' && (
          <NodeNarration node={node} character={character} flags={flags} onNext={() => goToNode(node.next)} />
        )}
        {node.type === 'choice' && (
          <NodeChoice node={node} character={character} flags={flags} onChoice={(next) => goToNode(next)} />
        )}
        {node.type === 'roll' && (
          <NodeRoll node={node} character={character} flags={flags} clues={clues} isInjured={isInjured} />
        )}
        {node.type === 'combat' && (
          <NodeCombat node={node} character={character} flags={flags} clues={clues} isInjured={isInjured} />
        )}
      </div>

      <CharacterPortrait character={character} />
    </div>
  );
}

export default Game;