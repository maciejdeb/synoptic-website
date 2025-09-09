import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowRight, CheckCircle } from 'lucide-react';

const HeroSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative py-20 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fadeInUp">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                <span className="text-premium-gradient">{t('hero.title').split(' ')[0]} {t('hero.title').split(' ')[1]}</span>
                <span className="block text-slate-900">{t('hero.title').split(' ').slice(2).join(' ')}</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-700 leading-relaxed max-w-2xl">
                {t('hero.subtitle')}
              </p>
            </div>

            {/* Trust Indicators with premium styling */}
            <div className="grid grid-cols-2 gap-4 py-6">
              <div className="flex items-center space-x-2 glass-morphism p-3 animate-scaleIn animation-delay-200">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm font-medium text-slate-700">{t('trust.innovative')}</span>
              </div>
              <div className="flex items-center space-x-2 glass-morphism p-3 animate-scaleIn animation-delay-400">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm font-medium text-slate-700">{t('trust.competitive')}</span>
              </div>
              <div className="flex items-center space-x-2 glass-morphism p-3 animate-scaleIn animation-delay-600">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm font-medium text-slate-700">{t('trust.personal')}</span>
              </div>
              <div className="flex items-center space-x-2 glass-morphism p-3 animate-scaleIn animation-delay-800">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm font-medium text-slate-700">{t('trust.local')}</span>
              </div>
            </div>

            {/* CTA Buttons with premium effects */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp animation-delay-1000">
              <a
                href="#contact"
                className="btn-premium inline-flex items-center justify-center px-8 py-4 font-semibold rounded-lg group"
              >
                {t('hero.cta')}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center px-8 py-4 glass-morphism text-slate-700 font-semibold rounded-lg hover:glass-morphism-dark hover:text-white transition-all duration-300"
              >
                {t('hero.secondary')}
              </a>
            </div>
          </div>

          {/* Enhanced Visual Element */}
          <div className="relative lg:pl-8 animate-fadeInUp animation-delay-400">
            <div className="relative">
              {/* Floating decorative elements */}
              <div className="absolute -top-8 -left-8 w-24 h-24 bg-gradient-premium-blue rounded-full opacity-20 animate-float"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-premium-cyan rounded-full opacity-15 animate-float animation-delay-1000"></div>
              
              <div className="card-premium p-8 text-slate-800 transform rotate-2 hover:rotate-1 transition-transform duration-300">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-premium-gradient">Synoptic</div>
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="glass-morphism p-4 rounded-lg hover:glass-morphism-dark hover:text-white transition-all duration-300">
                        <div className="text-2xl font-bold text-premium-gradient">24h</div>
                        <div className="text-sm opacity-90">Response Time</div>
                      </div>
                      <div className="glass-morphism p-4 rounded-lg hover:glass-morphism-dark hover:text-white transition-all duration-300">
                        <div className="text-2xl font-bold text-premium-gradient">100%</div>
                        <div className="text-sm opacity-90">Local Support</div>
                      </div>
                    </div>
                    
                    <div className="glass-morphism p-4 rounded-lg">
                      <div className="text-lg font-semibold mb-2 text-premium-gradient">Bydgoszcz, Poland</div>
                      <div className="text-sm opacity-90">Serving SMBs across the region</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;