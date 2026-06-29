import { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { useLanguage } from '../context/LanguageContext';
import { ATTRIBUTES, BASE_ATTRIBUTE_VALUE } from '../data/systems/dnd/attributes';
import { RACES } from '../data/systems/dnd/races';
import { CLASSES } from '../data/systems/dnd/classes';
import { getCharacterImage } from '../assets/characters/index.js';
import './CharacterCreation.css';

function CharacterCreation() {
  const { navigateTo } = useApp();
  const { t } = useLanguage();

  const [step, setStep] = useState(1);
  const [selectedRace, setSelectedRace] = useState(RACES[0].id);
  const [selectedSex, setSelectedSex] = useState('male');
  const [selectedClass, setSelectedClass] = useState(CLASSES[0].id);

  useEffect(() => {
  window.scrollTo(0, 0);
}, [step]);

  const currentRace = RACES.find((r) => r.id === selectedRace);
  const currentClass = CLASSES.find((c) => c.id === selectedClass);
  const characterImage = step === 1
    ? getCharacterImage(selectedRace, selectedSex)
    : getCharacterImage(selectedRace, selectedSex, selectedClass);

  const computeAttributes = () => {
    return ATTRIBUTES.map((attr) => {
      const raceMod = currentRace?.attributeModifiers?.[attr.id] ?? 0;
      const classMod = currentClass?.attributeModifiers?.[attr.id] ?? 0;
      return {
        id: attr.id,
        name: t(`attributes.${attr.id}.name`),
        value: BASE_ATTRIBUTE_VALUE + raceMod + classMod,
        raceMod,
        classMod,
      };
    });
  };

  const handleStart = () => {
  const finalImage = getCharacterImage(selectedRace, selectedSex, selectedClass);
  navigateTo('game', {
    character: {
      race: selectedRace,
      class: selectedClass,
      sex: selectedSex,
      attributes: computeAttributes(),
      portrait: finalImage,
    },
  });
  

  
};

  return (
    <div className="cc-wrapper">
      <header className="cc-header">
        <button className="cc-back" onClick={() => step === 1 ? navigateTo('mainMenu') : setStep(1)}>
          ← {t('characterCreation.back')}
        </button>
        <h1>{t('characterCreation.title')}</h1>
        <div className="cc-steps">
          <span className={step === 1 ? 'active' : ''}>1. {t('characterCreation.step1')}</span>
          <span className="cc-steps-divider">›</span>
          <span className={step === 2 ? 'active' : ''}>2. {t('characterCreation.step2')}</span>
        </div>
      </header>

      {step === 1 && (
        <div className="cc-step1">
          <div className="cc-race-list">
            <h2>{t('characterCreation.selectRace')}</h2>
            {RACES.map((race) => (
              <div
                key={race.id}
                className={`cc-race-card ${selectedRace === race.id ? 'selected' : ''}`}
                onClick={() => setSelectedRace(race.id)}
              >
                <h3>{t(`races.${race.id}.name`)}</h3>
                <p>{t(`races.${race.id}.description`)}</p>
              </div>
            ))}
          </div>

          <div className="cc-character-panel">
            <div className="cc-sex-selector">
              <h2>{t('characterCreation.selectSex')}</h2>
              <div className="cc-sex-options">
                {['male', 'female'].map((sex) => (
                  <button
                    key={sex}
                    className={selectedSex === sex ? 'active' : ''}
                    onClick={() => setSelectedSex(sex)}
                  >
                    {t(`sex.${sex}`)}
                  </button>
                ))}
              </div>
            </div>

            <div className="cc-image-container">
              {characterImage
                ? <img src={characterImage} alt={`${selectedRace} ${selectedSex}`} />
                : <div className="cc-image-placeholder">?</div>
              }
            </div>
          </div>

          <div className="cc-race-info">
            <h2>{t(`races.${selectedRace}.name`)}</h2>

            <div className="cc-info-block">
              <h3>⚔ {t('characterCreation.strengths')}</h3>
              <p>{t(`races.${selectedRace}.strengths`)}</p>
            </div>

            <div className="cc-info-block">
              <h3>🛡 {t('characterCreation.weaknesses')}</h3>
              <p>{t(`races.${selectedRace}.weaknesses`)}</p>
            </div>

            <div className="cc-info-block">
              <h3>💬 {t('characterCreation.npcAttitude')}</h3>
              <p>{t(`races.${selectedRace}.npcAttitude`)}</p>
            </div>

            <div className="cc-info-block">
              <h3>🤝 {t('characterCreation.relations')}</h3>
              <p>{t(`races.${selectedRace}.relations.friendly`)}</p>
              <p>{t(`races.${selectedRace}.relations.hostile`)}</p>
            </div>

            <div className="cc-info-block">
              <h3>✨ {t('characterCreation.recommendedClasses')}</h3>
              <p>{currentRace.recommendedClasses.map((c) => t(`classes.${c}.name`)).join(', ')}</p>
            </div>

            <button className="cc-next-btn" onClick={() => setStep(2)}>
              {t('characterCreation.next')} →
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="cc-step2">
          <div className="cc-class-list">
            <h2>{t('characterCreation.selectClass')}</h2>
            {CLASSES.map((cls) => (
              <div
                key={cls.id}
                className={`cc-class-card ${selectedClass === cls.id ? 'selected' : ''}`}
                onClick={() => setSelectedClass(cls.id)}
              >
                <h3>{t(`classes.${cls.id}.name`)}</h3>
                <p>{t(`classes.${cls.id}.description`)}</p>
                <p className="cc-tip">
                   {t('classRecommendation.label')}{' '}
                  {cls.recommendedRaces.map((r) => t(`races.${r}.name`)).join(', ')}
                </p>
              </div>
            ))}
          </div>

          <div className="cc-attributes-panel">
            <div className="cc-image-container small">
              {characterImage
                ? <img src={characterImage} alt={`${selectedRace} ${selectedSex}`} />
                : <div className="cc-image-placeholder">?</div>
              }
            </div>
            <h2>{t('characterCreation.attributesPreview')}</h2>
            <div className="cc-attributes">
              {computeAttributes().map((attr) => (
                <div key={attr.id} className="cc-attr-row">
                  <span className="cc-attr-name">{attr.name}</span>
                  <span className="cc-attr-value">{attr.value}</span>
                  <span className="cc-attr-mods">
                    {attr.raceMod !== 0 && (
                      <span className={attr.raceMod > 0 ? 'positive' : 'negative'}>
                        {attr.raceMod > 0 ? `+${attr.raceMod}` : attr.raceMod} raza
                      </span>
                    )}
                    {attr.classMod !== 0 && (
                      <span className={attr.classMod > 0 ? 'positive' : 'negative'}>
                        {attr.classMod > 0 ? `+${attr.classMod}` : attr.classMod} clase
                      </span>
                    )}
                  </span>
                </div>
              ))}
            </div>
            <button className="cc-next-btn" onClick={handleStart}>
              {t('characterCreation.startGame')} →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CharacterCreation;