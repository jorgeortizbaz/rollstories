import { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { useLanguage } from '../context/LanguageContext';
import { SYSTEM_CONFIGS } from '../data/systems/registry';
import './CharacterCreation.css';
import { GAME_THEMES } from '../data/themes';

function CharacterCreation() {
  const { navigateTo, selectedStory } = useApp();
  const { t } = useLanguage();

  const config = SYSTEM_CONFIGS[selectedStory.system];
  const { origin, role, attributes: ATTRIBUTES, baseAttributeValue, sexOptions, getCharacterImage } = config;

  const [step, setStep] = useState(1);
  const [selectedOriginId, setSelectedOriginId] = useState(origin.list[0].id);
  const [selectedSex, setSelectedSex] = useState(sexOptions[0]);
  const [selectedRoleId, setSelectedRoleId] = useState(role.list[0].id);

  useEffect(() => {
    document.getElementById('root').scrollTop = 0;
  }, [step]);

  const currentOrigin = origin.list.find((o) => o.id === selectedOriginId);
  const currentRole = role.list.find((r) => r.id === selectedRoleId);

  const characterImage = step === 1
    ? getCharacterImage(selectedOriginId, selectedSex)
    : getCharacterImage(selectedOriginId, selectedSex, selectedRoleId);

  const computeAttributes = () => {
    return ATTRIBUTES.map((attr) => {
      const originMod = currentOrigin?.attributeModifiers?.[attr.id] ?? 0;
      const roleMod = currentRole?.attributeModifiers?.[attr.id] ?? 0;
      return {
        id: attr.id,
        name: t(`attributes.${attr.id}.name`),
        value: baseAttributeValue + originMod + roleMod,
        raceMod: originMod,
        classMod: roleMod,
      };
    });
  };

  const handleStart = () => {
  const finalImage = getCharacterImage(selectedOriginId, selectedSex, selectedRoleId);
  document.getElementById('root').scrollTop = 0;
  navigateTo('game', {
    character: {
      race: selectedOriginId,
      class: selectedRoleId,
      sex: selectedSex,
      attributes: computeAttributes(),
      portrait: finalImage,
    },
  });
};

  return (
    <div className="cc-wrapper" style={GAME_THEMES[selectedStory.theme] ?? {}}>
      <header className="cc-header">
        <button className="cc-back" onClick={() => { document.getElementById('root').scrollTop = 0; step === 1 ? navigateTo('mainMenu') : setStep(1); }}>
          ← {t('characterCreation.back')}
        </button>
        <h1>{t('characterCreation.title')}</h1>
        <div className="cc-steps">
          <span className={step === 1 ? 'active' : ''}>1. {t(origin.stepLabelKey)}</span>
          <span className="cc-steps-divider">›</span>
          <span className={step === 2 ? 'active' : ''}>2. {t(role.stepLabelKey)}</span>
        </div>
      </header>

      {step === 1 && (
        <div className="cc-step1">
          <div className="cc-race-list">
            <h2>{t(origin.selectLabelKey)}</h2>
            {origin.list.map((item) => (
              <div
                key={item.id}
                className={`cc-race-card ${selectedOriginId === item.id ? 'selected' : ''}`}
                onClick={() => setSelectedOriginId(item.id)}
              >
                <div className="cc-race-card-header">
                  {origin.getSymbol && origin.getSymbol(item.id) && (
                    <img src={origin.getSymbol(item.id)} alt="" className="cc-clan-symbol" />
                  )}
                  <h3>{t(`${origin.i18nNamespace}.${item.id}.name`)}</h3>
                </div>
                <p>{t(`${origin.i18nNamespace}.${item.id}.description`)}</p>
              </div>
            ))}
          </div>

          <div className="cc-character-panel">
            <div className="cc-sex-selector">
              <h2>{t('characterCreation.selectSex')}</h2>
              <div className="cc-sex-options">
                {sexOptions.map((sex) => (
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
                ? <img src={characterImage} alt={`${selectedOriginId} ${selectedSex}`} />
                : <div className="cc-image-placeholder">?</div>
              }
            </div>
          </div>

          <div className="cc-race-info">
            <h2>{t(`${origin.i18nNamespace}.${selectedOriginId}.name`)}</h2>

            <div className="cc-info-block">
              <h3>⚔ {t('characterCreation.strengths')}</h3>
              <p>{t(`${origin.i18nNamespace}.${selectedOriginId}.strengths`)}</p>
            </div>

            <div className="cc-info-block">
              <h3>🛡 {t('characterCreation.weaknesses')}</h3>
              <p>{t(`${origin.i18nNamespace}.${selectedOriginId}.weaknesses`)}</p>
            </div>

            <div className="cc-info-block">
              <h3>💬 {t('characterCreation.npcAttitude')}</h3>
              <p>{t(`${origin.i18nNamespace}.${selectedOriginId}.npcAttitude`)}</p>
            </div>

            <div className="cc-info-block">
              <h3>🤝 {t('characterCreation.relations')}</h3>
              <p>{t(`${origin.i18nNamespace}.${selectedOriginId}.relations.friendly`)}</p>
              <p>{t(`${origin.i18nNamespace}.${selectedOriginId}.relations.hostile`)}</p>
            </div>

            <div className="cc-info-block">
              <h3>✨ {t('characterCreation.recommendedClasses')}</h3>
              <p>
                {(currentOrigin[origin.recommendsField] ?? [])
                  .map((roleId) => t(`${role.i18nNamespace}.${roleId}.name`))
                  .join(', ')}
              </p>
            </div>

            <button className="cc-next-btn" onClick={() => { document.getElementById('root').scrollTop = 0; setStep(2); }}>
              {t('characterCreation.next')} →
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="cc-step2">
          <div className="cc-class-list">
            <h2>{t(role.selectLabelKey)}</h2>
            {role.list.map((item) => (
              <div
                key={item.id}
                className={`cc-class-card ${selectedRoleId === item.id ? 'selected' : ''}`}
                onClick={() => setSelectedRoleId(item.id)}
              >
                <h3>{t(`${role.i18nNamespace}.${item.id}.name`)}</h3>
                <p>{t(`${role.i18nNamespace}.${item.id}.description`)}</p>
                <p className="cc-tip">
                  ✨ {t('classRecommendation.label')}{' '}
                  {(item[role.recommendsField] ?? [])
                    .map((originId) => t(`${origin.i18nNamespace}.${originId}.name`))
                    .join(', ')}
                </p>
              </div>
            ))}
          </div>

          <div className="cc-attributes-panel">
            <div className="cc-image-container small">
              {characterImage
                ? <img src={characterImage} alt={`${selectedOriginId} ${selectedSex}`} />
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
                        {attr.raceMod > 0 ? `+${attr.raceMod}` : attr.raceMod} {t(origin.modifierLabelKey)}
                      </span>
                    )}
                    {attr.classMod !== 0 && (
                      <span className={attr.classMod > 0 ? 'positive' : 'negative'}>
                        {attr.classMod > 0 ? `+${attr.classMod}` : attr.classMod} {t(role.modifierLabelKey)}
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