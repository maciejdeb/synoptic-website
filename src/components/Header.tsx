import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageToggle from './LanguageToggle';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" onClick={(e) => handleSmoothScroll(e, 'home')} className="flex items-center group">
              <div className="text-logo">
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent hover:from-blue-500 hover:via-purple-500 hover:to-blue-700 transition-all duration-300 tracking-tight">
                  Synoptic
                </span>
                <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 mt-0.5"></div>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              onClick={(e) => handleSmoothScroll(e, 'home')}
              className="text-slate-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              {t('nav.home')}
            </a>
            <a
              href="#services"
              onClick={(e) => handleSmoothScroll(e, 'services')}
              className="text-slate-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              {t('nav.services')}
            </a>
            <a
              href="#about"
              onClick={(e) => handleSmoothScroll(e, 'about')}
              className="text-slate-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              {t('nav.about')}
            </a>
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, 'contact')}
              className="text-slate-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
            >
              {t('nav.contact')}
            </a>
          </nav>

          {/* Desktop CTA and Language */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageToggle />
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, 'contact')}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200"
            >
              {t('nav.consultation')}
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <LanguageToggle />
            <button
              onClick={toggleMenu}
              className="text-slate-600 hover:text-slate-900 p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-200 py-4">
            <div className="flex flex-col space-y-4">
              <a
                href="#home"
                className="text-slate-700 hover:text-blue-600 px-3 py-2 text-base font-medium"
                onClick={(e) => handleSmoothScroll(e, 'home')}
              >
                {t('nav.home')}
              </a>
              <a
                href="#services"
                className="text-slate-700 hover:text-blue-600 px-3 py-2 text-base font-medium"
                onClick={(e) => handleSmoothScroll(e, 'services')}
              >
                {t('nav.services')}
              </a>
              <a
                href="#about"
                className="text-slate-700 hover:text-blue-600 px-3 py-2 text-base font-medium"
                onClick={(e) => handleSmoothScroll(e, 'about')}
              >
                {t('nav.about')}
              </a>
              <a
                href="#contact"
                className="text-slate-700 hover:text-blue-600 px-3 py-2 text-base font-medium"
                onClick={(e) => handleSmoothScroll(e, 'contact')}
              >
                {t('nav.contact')}
              </a>
              <a
                href="#contact"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg text-base font-medium text-center hover:bg-blue-700 transition-colors duration-200 mt-4"
                onClick={(e) => handleSmoothScroll(e, 'contact')}
              >
                {t('nav.consultation')}
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;