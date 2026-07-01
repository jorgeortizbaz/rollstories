import { useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { useGame } from '../context/GameContext';
import { useLanguage } from '../context/LanguageContext';
import { GNOMABANDISTAS_NODES } from '../data/systems/dnd/stories/gnomabandistas';
import { GNOMABANDISTAS_TEXTS } from '../data/systems/dnd/stories/gnomabandistas_texts';
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
  const { selectedStory } = useApp();
  const { currentNodeId, goToNode, addClue, setFlag, setIsInjured, flags, clues, isInjured, character } = useGame();
  const { language } = useLanguage();

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

  const resolveText = (node) => {
    const langTexts = GNOMABANDISTAS_TEXTS[language];
    const textFn = langTexts?.[node.id];
    if (textFn) return textFn(character, flags);
    const fallback = node.text;
    return typeof fallback === 'function' ? fallback(character, flags) : fallback;
  };

  const resolveChoices = (node) => {
    if (node.type !== 'choice') return null;
    const langChoices = GNOMABANDISTAS_TEXTS[language]?.choices?.[node.id];
    if (!langChoices) return node.choices.map((c) => c.text);
    return node.choices.map((c, i) => langChoices[i] ?? c.text);
  };

  return (
    <div className="game-wrapper">
      <div
        className="game-scene"
        style={sceneImage ? { '--scene-bg': `url(${sceneImage})` } : {}}
      >
        {sceneImage && (
          <div
            className="game-scene-blur"
            style={{ backgroundImage: `url(${sceneImage})` }}
          />
        )}
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
          <NodeNarration node={node} character={character} flags={flags} resolvedText={resolveText(node)} onNext={() => goToNode(node.next)} />
        )}
        {node.type === 'choice' && (
          <NodeChoice node={node} character={character} flags={flags} resolvedText={resolveText(node)} resolvedChoices={resolveChoices(node)} onChoice={(next) => goToNode(next)} />
        )}
        {node.type === 'roll' && (
          <NodeRoll node={node} character={character} flags={flags} clues={clues} isInjured={isInjured} resolvedText={resolveText(node)} />
        )}
        {node.type === 'combat' && (
          <NodeCombat node={node} character={character} flags={flags} clues={clues} isInjured={isInjured} resolvedText={resolveText(node)} />
        )}
      </div>

      <CharacterPortrait character={character} />
    </div>
  );
}

export default Game;