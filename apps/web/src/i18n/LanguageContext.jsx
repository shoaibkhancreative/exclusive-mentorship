import React from 'react';

// Site-wide language switch (English / Bangla).
//
// English is the default for every visitor. If someone flips to Bangla we
// remember that choice for next time via localStorage, but we never persist
// "en" as an explicit override — a fresh visitor (or a cleared cache) always
// lands in English.
//
// Bangla copy throughout the site is written "context aware": trading/product
// terminology (Tier, Add-on, Payment, Chapter, etc.) is deliberately left in
// English inside the Bangla sentences rather than translated, since that's
// how these terms are actually used/searched by the audience. Content files
// under src/i18n/content/ follow that convention — see any of them for the
// pattern before adding new copy.

const STORAGE_KEY = 'em_lang';
const LanguageContext = React.createContext(null);

function readStoredLanguage() {
  if (typeof window === 'undefined') return 'en';
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored === 'bn' ? 'bn' : 'en';
  } catch {
    return 'en';
  }
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = React.useState(readStoredLanguage);

  const setLang = React.useCallback((next) => {
    setLangState(next);
    try {
      if (next === 'bn') {
        window.localStorage.setItem(STORAGE_KEY, 'bn');
      } else {
        window.localStorage.removeItem(STORAGE_KEY);
      }
    } catch {
      // localStorage unavailable (private mode, etc.) — in-memory state still works.
    }
  }, []);

  const toggleLang = React.useCallback(() => {
    setLang(lang === 'bn' ? 'en' : 'bn');
  }, [lang, setLang]);

  React.useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const value = React.useMemo(() => ({ lang, setLang, toggleLang, isBn: lang === 'bn' }), [lang, setLang, toggleLang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = React.useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider');
  return ctx;
}

// Small helper for content objects shaped like { en: ..., bn: ... }.
export function pick(lang, entry) {
  if (entry == null) return entry;
  return entry[lang] ?? entry.en;
}
