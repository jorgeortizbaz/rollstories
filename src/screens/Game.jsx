import { useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { useGame } from '../context/GameContext';
import { useLanguage } from '../context/LanguageContext';
import { GNOMABANDISTAS_NODES } from '../data/systems/dnd/stories/gnomabandistas';
import { GNOMABANDISTAS_TEXTS } from '../data/systems/dnd/stories/gnomabandistas_texts';
import { GNOMABANDISTAS_CREDITS } from '../data/systems/dnd/stories/gnomabandistas_credits';
import { SANGRE_NODES } from '../data/systems/vampire/stories/sangre_que_nos_une';
import { getSceneImage } from '../assets/scenes/index.js';
import { getNpcImage } from '../assets/npcs/index.js';
import NodeNarration from '../components/game/NodeNarration';
import NodeChoice from '../components/game/NodeChoice';
import NodeRoll from '../components/game/NodeRoll';
import NodeCombat from '../components/game/NodeCombat';
import NodePoolRoll from '../components/game/NodePoolRoll';
import CharacterPortrait from '../components/game/CharacterPortrait';
import './Game.css';
import { THEMES } from '../data/themes';
import { GAME_THEMES } from '../data/themes';

const STORY_NODES = {
  gnomabandistas: GNOMABANDISTAS_NODES,
  'vampire-masquerade': SANGRE_NODES,
};

const STORY_TEXTS = {
  gnomabandistas: GNOMABANDISTAS_TEXTS,
};

const STORY_CREDITS = {
  gnomabandistas: GNOMABANDISTAS_CREDITS,
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

  const sceneName = typeof node.scene === 'function' ? node.scene(character) : node.scene;
  const sceneImage = sceneName ? getSceneImage(sceneName) : null;
  const npcImages = (node.npcs ?? []).map(getNpcImage).filter(Boolean);

  const resolveText = (node) => {
    try {
      const storyTexts = STORY_TEXTS[selectedStory.id];
      const langTexts = storyTexts?.[language];
      const textFn = langTexts?.[node.id];
      if (textFn) return textFn(character, flags);
      const fallback = typeof node.text === 'function' ? node.text(character, flags) : node.text;
      return fallback ?? '';
    } catch (e) {
      console.error('Error resolviendo texto para nodo:', node.id, e);
      try {
        const fallback = typeof node.text === 'function' ? node.text(character, flags) : node.text;
        return fallback ?? '';
      } catch {
        return '';
      }
    }
  };

  const resolveChoices = (node) => {
    if (node.type !== 'choice') return null;
    try {
      const storyTexts = STORY_TEXTS[selectedStory.id];
      const langChoices = storyTexts?.[language]?.choices?.[node.id];
      if (!langChoices) return node.choices.map((c) => c.text);
      return node.choices.map((c, i) => langChoices[i] ?? c.text);
    } catch (e) {
      console.error('Error resolviendo choices para nodo:', node.id, e);
      return node.choices.map((c) => c.text);
    }
  };

  return (
    <div className="game-wrapper" style={GAME_THEMES[selectedStory.theme] ?? {}}>
      <div
        className="game-scene"
        style={sceneImage ? { '--scene-bg': `url(${sceneImage})` } : {}}
      >
        {sceneImage && <div className="game-scene-blur" style={{ backgroundImage: `url(${sceneImage})` }} />}
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
          <NodeNarration
            key={node.id}
            node={node}
            character={character}
            flags={flags}
            resolvedText={resolveText(node)}
            onNext={() => goToNode(node.next)}
            credits={STORY_CREDITS[selectedStory.id]}
            language={language}
          />
        )}
        {node.type === 'choice' && (
          <NodeChoice
            key={node.id}
            node={node}
            character={character}
            flags={flags}
            resolvedText={resolveText(node)}
            resolvedChoices={resolveChoices(node)}
            onChoice={(next) => goToNode(next)}
          />
        )}
        {node.type === 'roll' && (
          <NodeRoll key={node.id} node={node} character={character} flags={flags} clues={clues} isInjured={isInjured} resolvedText={resolveText(node)} />
        )}
        {node.type === 'combat' && (
          <NodeCombat key={node.id} node={node} character={character} flags={flags} clues={clues} isInjured={isInjured} resolvedText={resolveText(node)} />
        )}
        {node.type === 'poolRoll' && (
          <NodePoolRoll key={node.id} node={node} character={character} flags={flags} clues={clues} isInjured={isInjured} resolvedText={resolveText(node)} />
        )}
      </div>

      <CharacterPortrait character={character} />
    </div>
  );
}

export default Game;