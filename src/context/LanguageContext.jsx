import { createContext, useContext, useState } from 'react';
import es from '../i18n/es';
import en from '../i18n/en';
import ru from '../i18n/ru';

const translations = { es, en, ru };

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('es');
  const availableLanguages = Object.keys(translations);

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    for (const k of keys) {
      value = value?.[k];
    }
    return value ?? key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, availableLanguages }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage debe usarse dentro de un LanguageProvider');
  }
  return context;
}

export const LANGUAGE_INFO = {
  es: { label: 'Español', flag: 'fi-es' },
  en: { label: 'English', flag: 'fi-gb' },
  ru: { label: 'Русский', flag: 'fi-ru' },
};