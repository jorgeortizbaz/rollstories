import { useState } from 'react';
import { useGame } from '../../context/GameContext';
import { useLanguage } from '../../context/LanguageContext';
import { CLASSES } from '../../data/systems/dnd/classes';
import { getEnemyModifier } from '../../data/systems/dnd/enemies';
import './NodeCombat.css';

const INJURY_PENALTY = -2;

const getTargetNumber = (outcomes) => {
  const nonZero = outcomes.map((o) => o.min).filter((m) => m > 0);
  if (nonZero.length === 0) return 0;
  return Math.min(...nonZero);
};

function NodeCombat({ node, character, flags, clues, isInjured, resolvedText }) {
  const { rollDice, getAttributeValue, goToNode, setIsInjured } = useGame();
  const { t } = useLanguage();
  const [rolling, setRolling] = useState(false);
  const [result, setResult] = useState(null);
  const [total, setTotal] = useState(null);
  const [outcome, setOutcome] = useState(null);
  const [displayNumber, setDisplayNumber] = useState(null);

  const classDef = CLASSES.find((c) => c.id === character.class);
  const combatAttribute = classDef?.combatAttribute ?? 'strength';

  const situationalModifier = node.combat.modifier
    ? node.combat.modifier(character, flags, clues, isInjured)
    : 0;
  const injuryPenalty = isInjured ? INJURY_PENALTY : 0;
  const enemyModifier = getEnemyModifier(node.combat.enemyId ?? node.id);
  const totalModifier = situationalModifier + injuryPenalty + enemyModifier;

  const attrValue = getAttributeValue(combatAttribute);
  const attrBonus = Math.floor((attrValue - 10) / 2);
  const attrName = t(`attributes.${combatAttribute}.name`);
  const rollLabel = `${t('game.rollOf')} ${attrName}`;
  const target = getTargetNumber(node.combat.outcomes);

  const handleRoll = () => {
    if (rolling || result !== null) return;
    setRolling(true);

    let counter = 0;
    const interval = setInterval(() => {
      setDisplayNumber(Math.floor(Math.random() * 20) + 1);
      counter++;
      if (counter >= 12) {
        clearInterval(interval);
        const roll = rollDice(20);
        const totalResult = roll + attrBonus + totalModifier;
        setDisplayNumber(roll);
        setResult(roll);
        setTotal(totalResult);
        setRolling(false);

        const matched = [...node.combat.outcomes]
          .sort((a, b) => b.min - a.min)
          .find((o) => totalResult >= o.min);

        if (matched?.injured) setIsInjured(true);
        setOutcome(matched);
      }
    }, 80);
  };

  return (
    <div className="node-combat">
      <div className="combat-header">
        <span className="combat-label">⚔️ {t('game.combatLabel')}</span>
        {isInjured && (
          <span className="combat-injured">{t('game.injuredLabel')}</span>
        )}
      </div>

      <p className="node-text">{resolvedText}</p>

      <div className="roll-info">
        <span className="roll-attr-label">{rollLabel}</span>
        <div className="roll-modifiers">
          <span>{t('game.attributeLabel')}: <strong>{attrValue}</strong> ({t('game.bonusLabel')} {attrBonus >= 0 ? `+${attrBonus}` : attrBonus})</span>
          {situationalModifier !== 0 && (
            <span>{t('game.modifiersLabel')}: <strong>{situationalModifier >= 0 ? `+${situationalModifier}` : situationalModifier}</strong></span>
          )}
          {isInjured && (
            <span className="injury-line">{t('game.injuredLabel')}: <strong>{injuryPenalty}</strong></span>
          )}
          <span className="roll-target">{t('game.targetLabel')}: <strong>{target}</strong></span>
        </div>
      </div>

      <div className="dice-area">
        <div
          className={`dice d20 ${rolling ? 'rolling' : ''} ${result !== null ? 'done' : ''}`}
          onClick={handleRoll}
        >
          <span className="dice-number">
            {result === null && !rolling && '⚔'}
            {rolling && displayNumber}
            {result !== null && displayNumber}
          </span>
        </div>
        {result === null && !rolling && (
          <p className="dice-hint">{t('game.combatHint')}</p>
        )}
        {result !== null && (
          <div className="roll-result">
            <p className="roll-total">
              {t('game.totalLabel')}: <strong>{total}</strong>
              <span className="roll-breakdown">
                ({result} {attrBonus >= 0 ? `+${attrBonus}` : attrBonus}
                {totalModifier !== 0 ? (totalModifier >= 0 ? ` +${totalModifier}` : ` ${totalModifier}`) : ''})
              </span>
            </p>
          </div>
        )}
      </div>

      {outcome && (
        <button className="node-btn" onClick={() => goToNode(outcome.next)}>
          {t('game.continueLabel')}
        </button>
      )}
    </div>
  );
}

export default NodeCombat;