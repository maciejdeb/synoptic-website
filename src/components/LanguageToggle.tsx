import React from 'react';
import { useLanguage, Language } from '../contexts/LanguageContext';
import { Globe } from 'lucide-react';

const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'pl' ? 'en' : 'pl');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 px-3 py-2 rounded-lg border border-slate-300 hover:border-blue-500 hover:bg-blue-50 transition-all duration-200"
      aria-label={`Switch to ${language === 'pl' ? 'English' : 'Polish'}`}
    >
      <Globe className="w-4 h-4 text-slate-600" />
      <span className="text-sm font-medium text-slate-700">
        {language.toUpperCase()}
      </span>
    </button>
  );
};

export default LanguageToggle;