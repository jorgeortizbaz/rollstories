import './NodeChoice.css';

function NodeChoice({ node, character, flags, resolvedText, resolvedChoices, onChoice }) {
  const availableChoices = node.choices
    .map((choice, i) => ({ ...choice, label: resolvedChoices[i] }))
    .filter((choice) => (choice.condition ? choice.condition(character, flags) : true));

  return (
    <div className="node-choice">
      <p className="node-text">{resolvedText}</p>
      <div className="node-choices">
        {availableChoices.map((choice, i) => (
          <button key={i} className="node-btn" onClick={() => onChoice(choice.next)}>
            {choice.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default NodeChoice;