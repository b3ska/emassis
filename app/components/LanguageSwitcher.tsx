'use client';

import { useLanguage } from '../context/LanguageContext';
import { Language } from '../i18n/translations';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'bg', label: 'Български', flag: '🇧🇬' },
    { code: 'ru', label: 'Русский', flag: '🇷🇺' },
  ];

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="bg-white rounded-full shadow-lg p-2 flex gap-1">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`
              px-3 py-2 rounded-full font-medium text-sm transition-all duration-200
              ${
                language === lang.code
                  ? 'bg-[#EF7722] text-white shadow-md scale-105'
                  : 'bg-transparent text-gray-600 hover:bg-[#0BA6DF] hover:text-white'
              }
            `}
            aria-label={`Switch to ${lang.label}`}
          >
            <span className="mr-1">{lang.flag}</span>
            <span className="hidden sm:inline">{lang.code.toUpperCase()}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
