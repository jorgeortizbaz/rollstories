import { useState } from 'react';
import { useGame } from '../../context/GameContext';
import { useLanguage } from '../../context/LanguageContext';
import './NodePoolRoll.css';

const getSuccessCount = (dice) => dice.filter((d) => d >= 6).length;

const getTargetThresholds = (outcomes) => {
  const positives = [...new Set(outcomes.map((o) => o.min))]
    .filter((m) => m > 0)
    .sort((a, b) => a - b);
  const avoidFail = positives[0] ?? 0;
  const clean = positives[1] ?? avoidFail;
  return { avoidFail, clean };
};

function NodePoolRoll({ node, character, flags, clues, isInjured, resolvedText }) {
  const { getAttributeValue, goToNode, rollD10Pool, willpowerUsed, setWillpowerUsed, setIsInjured } = useGame();
  const { t } = useLanguage();

  const [rolling, setRolling] = useState(false);
  const [dice, setDice] = useState(null);
  const [outcome, setOutcome] = useState(null);
  const [usedWillpowerThisRoll, setUsedWillpowerThisRoll] = useState(false);

  const { attribute, outcomes, bonusDice } = node.poolRoll;
  const attrValue = getAttributeValue(attribute);
  const bonus = bonusDice ? bonusDice(character, flags, clues, isInjured) : 0;
  const injuryPenalty = isInjured ? -1 : 0;
  const poolSize = Math.max(1, attrValue + bonus + injuryPenalty);
  const attrName = t(`attributes.${attribute}.name`);
  const { avoidFail: targetAvoidFail, clean: targetClean } = getTargetThresholds(outcomes);

  const resolveOutcome = (diceResults) => {
    const successes = getSuccessCount(diceResults);
    const matched = [...outcomes]
      .sort((a, b) => b.min - a.min)
      .find((o) => successes >= o.min);
    if (matched?.injured) setIsInjured(true);
    setOutcome(matched);
  };

  const handleRoll = () => {
    if (rolling || dice !== null) return;
    setRolling(true);

    setTimeout(() => {
      const results = rollD10Pool(poolSize);
      setDice(results);
      setRolling(false);
      resolveOutcome(results);
    }, 900);
  };

  const handleWillpower = () => {
    if (willpowerUsed || !dice) return;
    let lowestIndex = -1;
    let lowestValue = 11;
    dice.forEach((value, i) => {
      if (value < 6 && value < lowestValue) {
        lowestValue = value;
        lowestIndex = i;
      }
    });
    if (lowestIndex === -1) return;

    const [newValue] = rollD10Pool(1);
    const newDice = [...dice];
    newDice[lowestIndex] = newValue;
    setDice(newDice);
    setWillpowerUsed(true);
    setUsedWillpowerThisRoll(true);
    resolveOutcome(newDice);
  };

  const successes = dice ? getSuccessCount(dice) : null;
  const canUseWillpower = dice !== null && !willpowerUsed && successes < targetAvoidFail;

  return (
    <div className="node-pool-roll">
      {isInjured && (
        <div className="pool-injured-badge">{t('game.injuredLabel')}</div>
      )}

      <p className="node-text">{resolvedText}</p>

      <div className="roll-info">
        <span className="roll-attr-label">{t('game.rollOf')} {attrName}</span>
        <div className="roll-modifiers">
          <span>{t('game.attributeLabel')}: <strong>{attrValue}</strong>{bonus !== 0 && ` (+${bonus})`}</span>
          {isInjured && (
            <span className="injury-line">{t('game.injuredLabel')}: <strong>-1 {t('game.diceWord')}</strong></span>
          )}
          {targetClean !== targetAvoidFail ? (
            <>
              <span className="roll-target">{t('game.targetMinLabel')}: <strong>{targetAvoidFail}</strong></span>
              <span className="roll-target">{t('game.targetCleanLabel')}: <strong>{targetClean}</strong></span>
            </>
          ) : (
            <span className="roll-target">{t('game.targetSuccessesLabel')}: <strong>{targetAvoidFail}</strong></span>
          )}
        </div>
      </div>

      <div className="pool-dice-area">
        {dice === null && !rolling && (
          <button className="pool-roll-trigger" onClick={handleRoll}>
            {t('game.poolRollHint')}
          </button>
        )}

        {rolling && (
          <div className="pool-dice-row">
            {Array.from({ length: poolSize }).map((_, i) => (
              <div key={i} className="pool-die rolling">
                <span>{Math.floor(Math.random() * 10) + 1}</span>
              </div>
            ))}
          </div>
        )}

        {dice !== null && !rolling && (
          <>
            <div className="pool-dice-row">
              {dice.map((value, i) => (
                <div key={i} className={`pool-die ${value >= 6 ? 'success' : ''}`}>
                  <span>{value}</span>
                </div>
              ))}
            </div>
            <p className="pool-successes">
              {t('game.successesLabel')}: <strong>{successes}</strong> / {targetAvoidFail}
            </p>
          </>
        )}
      </div>

      {canUseWillpower && (
        <button className="node-btn willpower-btn" onClick={handleWillpower}>
          {t('game.willpowerButton')}
        </button>
      )}
      {usedWillpowerThisRoll && (
        <p className="willpower-used-note">{t('game.willpowerUsedLabel')}</p>
      )}

      {outcome && (
        <button className="node-btn" onClick={() => goToNode(outcome.next)}>
          {t('game.continueLabel')}
        </button>
      )}
    </div>
  );
}

export default NodePoolRoll;