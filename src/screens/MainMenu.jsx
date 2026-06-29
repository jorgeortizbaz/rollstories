import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { LANGUAGE_INFO } from '../data/languages';
import { STORY_LIST } from '../data/storyList';
import { hasSavedGame } from '../utils/cookies';
import { THEMES } from '../data/themes';
import { getSceneImage } from '../assets/scenes/index.js';
import logo from '../assets/RollForge.png';
import rollStoriesLogo from '../assets/RollStories.png';
import './MainMenu.css';

function MainMenu({ onSelectStory }) {
  const { language, setLanguage, t, availableLanguages } = useLanguage();
  const [expandedStoryId, setExpandedStoryId] = useState(null);

  const toggleExpand = (storyId) => {
    setExpandedStoryId((current) => (current === storyId ? null : storyId));
  };

  const expandedStory = STORY_LIST.find((s) => s.id === expandedStoryId);
  const bgImage = expandedStory?.menuScene
    ? getSceneImage(expandedStory.menuScene)
    : null;

  // En el JSX, siempre renderiza el div, no condicionalmente:
  <div
    className={`main-menu-bg ${bgImage ? 'visible' : ''}`}
    style={bgImage ? { backgroundImage: `url(${bgImage})` } : {}}
  />

  return (
    <div className="main-menu">
      {bgImage && (
        <div
          className={`main-menu-bg ${expandedStoryId ? 'visible' : ''}`}
          style={{ backgroundImage: `url(${bgImage})` }}
        />
      )}

      <header className="navbar">
        <a href="/" className="navbar-logo">
          <img src={logo} alt="RollForge" />
        </a>
        <span className="navbar-brand">RollStories</span>
        <div className="language-selector">
          {availableLanguages.map((lang) => (
            <button
              key={lang}
              className={lang === language ? 'active' : ''}
              onClick={() => setLanguage(lang)}
            >
              <span className={`fi ${LANGUAGE_INFO[lang].flag}`}></span>
              {LANGUAGE_INFO[lang].label}
            </button>
          ))}
        </div>
      </header>

      <div className="story-list">
        {STORY_LIST.map((story) => (
          <div
            key={story.id}
            className={`story-card theme-${story.theme} ${expandedStoryId === story.id ? 'expanded' : ''}`}
            onClick={() => toggleExpand(story.id)}
            style={expandedStoryId === story.id ? THEMES[story.theme] : {}}
          >
            <div className="story-card-face">
              <p className="system">{t(`systems.${story.system}`)}</p>
              <span className="duration">{story.duration} min</span>
            </div>

            <div className="story-card-overlay">
              <h2>{t(`stories.${story.id}.title`)}</h2>
              <p className="description">{t(`stories.${story.id}.description`)}</p>
              <div className="story-card-actions">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectStory(story, 'new');
                  }}
                >
                  {t('common.newGame')}
                </button>
                {hasSavedGame(story.id) && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectStory(story, 'continue');
                    }}
                  >
                    {t('common.continueGame')}
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainMenu;