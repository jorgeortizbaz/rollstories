import './NodeChoice.css';

function NodeChoice({ node, character, flags, onChoice }) {
  const text = typeof node.text === 'function'
    ? node.text(character, flags)
    : node.text;

  const availableChoices = node.choices.filter((choice) =>
    choice.condition ? choice.condition(character, flags) : true
  );

  return (
    <div className="node-choice">
      <p className="node-text">{text}</p>
      <div className="node-choices">
        {availableChoices.map((choice, i) => (
          <button key={i} className="node-btn" onClick={() => onChoice(choice.next)}>
            {choice.text}
          </button>
        ))}
      </div>
    </div>
  );
}

export default NodeChoice;
