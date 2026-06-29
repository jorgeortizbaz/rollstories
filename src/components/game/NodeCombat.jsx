import { useState } from 'react';
import { useGame } from '../../context/GameContext';
import './NodeCombat.css';

function NodeCombat({ node, character, flags, clues, isInjured }) {
  const { rollDice, getAttributeValue, goToNode, setIsInjured } = useGame();
  const [rolling, setRolling] = useState(false);
  const [result, setResult] = useState(null);
  const [total, setTotal] = useState(null);
  const [outcome, setOutcome] = useState(null);
  const [displayNumber, setDisplayNumber] = useState(null);

  const text = typeof node.text === 'function'
    ? node.text(character, flags)
    : node.text;

  const modifier = node.combat.modifier
    ? node.combat.modifier(character, flags, clues, isInjured)
    : 0;

  const attrValue = getAttributeValue(node.combat.attribute);
  const attrBonus = Math.floor((attrValue - 10) / 2);
  const totalModifier = modifier;

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
        <span className="combat-label"> {node.combat.label}</span>
        {isInjured && (
          <span className="combat-injured">🩸 Malherido (-2)</span>
        )}
      </div>

      <p className="node-text">{text}</p>

      <div className="roll-info">
        <span className="roll-attr-label">
          {node.combat.attribute === 'strength' ? 'Tirada de Fuerza' : 'Tirada de Destreza'}
        </span>
        <div className="roll-modifiers">
          <span>Atributo: <strong>{attrValue}</strong> (bonus {attrBonus >= 0 ? `+${attrBonus}` : attrBonus})</span>
          {totalModifier !== 0 && (
            <span>Modificadores: <strong>{totalModifier >= 0 ? `+${totalModifier}` : totalModifier}</strong></span>
          )}
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
          <p className="dice-hint">Haz clic para combatir</p>
        )}
        {result !== null && (
          <div className="roll-result">
            <p className="roll-total">
              Total: <strong>{total}</strong>
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
          Continuar →
        </button>
      )}
    </div>
  );
}

export default NodeCombat;