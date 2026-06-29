import { useApp } from '../../context/AppContext';
import { useLanguage } from '../../context/LanguageContext';
import './NodeNarration.css';

function NodeNarration({ node, character, flags, onNext }) {
  const { navigateTo } = useApp();
  const { t } = useLanguage();

  const text = typeof node.text === 'function'
    ? node.text(character, flags)
    : node.text;

  return (
    <div className="node-narration">
      <p className="node-text">{text}</p>
      {node.next !== null && (
        <button className="node-btn" onClick={onNext}>
          Continuar →
        </button>
      )}
      {node.next === null && (
        <div className="node-end">
          <p className="node-end-label">— Fin —</p>
          <button className="node-btn" onClick={() => navigateTo('mainMenu')}>
            Volver al menú principal
          </button>
        </div>
      )}
    </div>
  );
}

export default NodeNarration;