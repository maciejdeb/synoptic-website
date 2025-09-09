import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <img
                src="/images/logos/synoptic_logo_dark.png"
                alt="Synoptic Logo"
                className="h-8 w-auto mb-4 filter brightness-0 invert"
              />
              <p className="text-slate-300 leading-relaxed mb-4">
                Nowoczesne rozwiązania IT i chmurowe dla małych i średnich firm w Bydgoszczy. 
                Jako nowa firma oferujemy świeże podejście i konkurencyjne ceny.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-blue-400" />
                <a href="tel:+48518575025" className="text-slate-300 hover:text-white transition-colors">
                  +48 518 575 025
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-400" />
                <a href="mailto:info@synoptic.pl" className="text-slate-300 hover:text-white transition-colors">
                  info@synoptic.pl
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span className="text-slate-300">Bydgoszcz, Polska</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t('footer.services')}</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-slate-300 hover:text-white transition-colors">
                  Migracja do Chmury
                </a>
              </li>
              <li>
                <a href="#services" className="text-slate-300 hover:text-white transition-colors">
                  Implementacja AI
                </a>
              </li>
              <li>
                <a href="#services" className="text-slate-300 hover:text-white transition-colors">
                  Microsoft 365
                </a>
              </li>
              <li>
                <a href="#services" className="text-slate-300 hover:text-white transition-colors">
                  Outsourcing IT
                </a>
              </li>
              <li>
                <a href="#services" className="text-slate-300 hover:text-white transition-colors">
                  Rozwiązania Chmurowe
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t('footer.company')}</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-slate-300 hover:text-white transition-colors">
                  O nas
                </a>
              </li>
              <li>
                <a href="#why-us" className="text-slate-300 hover:text-white transition-colors">
                  Dlaczego my?
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-slate-300 hover:text-white transition-colors">
                  Cennik
                </a>
              </li>
              <li>
                <a href="#consultation" className="text-slate-300 hover:text-white transition-colors">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-slate-400 text-sm mb-4 md:mb-0">
              © {currentYear} Synoptic. {t('footer.rights')}
            </div>
            <div className="text-slate-400 text-sm">
              {t('footer.created')}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;