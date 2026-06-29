import './CharacterPortrait.css';

function CharacterPortrait({ character }) {
  if (!character) return null;

  return (
    <div className="portrait">
      {character.portrait && (
        <img src={character.portrait} alt="Tu personaje" className="portrait-img" />
      )}
      <div className="portrait-stats">
        {character.attributes?.map((attr) => (
          <div key={attr.id} className="portrait-stat">
            <span className="portrait-stat-name">{attr.name.slice(0, 3).toUpperCase()}</span>
            <span className="portrait-stat-value">{attr.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CharacterPortrait;