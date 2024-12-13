import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setLanguage('ar')}
        className={`w-8 h-8 rounded-full overflow-hidden ${
          language === 'ar' ? 'ring-2 ring-primary' : 'opacity-50'
        }`}
      >
        <img src="/assets/flags/sd.png" alt="Arabic" className="w-full h-full object-cover" />
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`w-8 h-8 rounded-full overflow-hidden ${
          language === 'en' ? 'ring-2 ring-primary' : 'opacity-50'
        }`}
      >
        <img src="/assets/flags/gb.png" alt="English" className="w-full h-full object-cover" />
      </button>
    </div>
  );
};