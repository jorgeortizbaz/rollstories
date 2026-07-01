import { useState } from 'react';
import { useGame } from '../../context/GameContext';
import { useLanguage } from '../../context/LanguageContext';
import './NodeRoll.css';

function NodeRoll({ node, character, flags, clues, isInjured, resolvedText }) {
  const { rollDice, getAttributeValue, goToNode } = useGame();
  const { t } = useLanguage();
  const [rolling, setRolling] = useState(false);
  const [result, setResult] = useState(null);
  const [total, setTotal] = useState(null);
  const [outcome, setOutcome] = useState(null);
  const [displayNumber, setDisplayNumber] = useState(null);

  const modifier = node.roll.modifier
    ? node.roll.modifier(character, flags, clues, isInjured)
    : 0;

  const attrValue = getAttributeValue(node.roll.attribute);
  const attrBonus = Math.floor((attrValue - 10) / 2);
  const attrName = t(`attributes.${node.roll.attribute}.name`);
  const rollLabel = `${t('game.rollOf')} ${attrName}`;

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
        const totalResult = roll + attrBonus + modifier;
        setDisplayNumber(roll);
        setResult(roll);
        setTotal(totalResult);
        setRolling(false);

        const matched = [...node.roll.outcomes]
          .sort((a, b) => b.min - a.min)
          .find((o) => totalResult >= o.min);
        setOutcome(matched);
      }
    }, 80);
  };

  return (
    <div className="node-roll">
      <p className="node-text">{resolvedText}</p>

      <div className="roll-info">
        <span className="roll-attr-label">{rollLabel}</span>
        <div className="roll-modifiers">
          <span>{t('game.attributeLabel')}: <strong>{attrValue}</strong> ({t('game.bonusLabel')} {attrBonus >= 0 ? `+${attrBonus}` : attrBonus})</span>
          {modifier !== 0 && (
            <span>{t('game.modifierLabel')}: <strong>{modifier >= 0 ? `+${modifier}` : modifier}</strong></span>
          )}
        </div>
      </div>

      <div className="dice-area">
        <div
          className={`dice d20 ${rolling ? 'rolling' : ''} ${result !== null ? 'done' : ''}`}
          onClick={handleRoll}
        >
          <span className="dice-number">
            {result === null && !rolling && '?'}
            {rolling && displayNumber}
            {result !== null && displayNumber}
          </span>
        </div>
        {result === null && !rolling && (
          <p className="dice-hint">{t('game.rollHint')}</p>
        )}
        {result !== null && (
          <div className="roll-result">
            <p className="roll-total">
              {t('game.totalLabel')}: <strong>{total}</strong>
              <span className="roll-breakdown">
                ({result} {attrBonus >= 0 ? `+${attrBonus}` : attrBonus}
                {modifier !== 0 ? (modifier >= 0 ? ` +${modifier}` : ` ${modifier}`) : ''})
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

export default NodeRoll;