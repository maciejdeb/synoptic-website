import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Target, Users, Award } from 'lucide-react';

const AboutSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center justify-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
                Startup z Bydgoszczy
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                {t('about.title')}
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                {t('about.subtitle')}
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-slate-600 leading-relaxed">
                {t('about.story')}
              </p>
              
              <p className="text-slate-600 leading-relaxed">
                {t('about.mission')}
              </p>
            </div>

            {/* Mission Points */}
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Nasza wizja</h4>
                  <p className="text-slate-600 text-sm">Być pierwszym wyborem dla MŚP w regionie Bydgoszczy szukających nowoczesnych rozwiązań IT</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Nasze wartości</h4>
                  <p className="text-slate-600 text-sm">Uczciwość, transparentność i osobiste podejście do każdego klienta</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Nasze zobowiązanie</h4>
                  <p className="text-slate-600 text-sm">Dostarczanie najwyższej jakości usług w konkurencyjnych cenach</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl p-8 lg:p-12">
              <div className="text-center mb-8">
                <img
                  src="/images/logos/synoptic_logo_vertical.png"
                  alt="Synoptic Logo"
                  className="h-24 w-auto mx-auto mb-6"
                />
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Synoptic</h3>
                <p className="text-slate-600">IT & Cloud Infrastructure Consultancy</p>
              </div>
              
              {/* Company Stats - Honest Numbers */}
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-white rounded-2xl shadow-sm">
                  <div className="text-2xl font-bold text-blue-600 mb-1">2025</div>
                  <div className="text-sm text-slate-600">Rok założenia</div>
                </div>
                
                <div className="text-center p-4 bg-white rounded-2xl shadow-sm">
                  <div className="text-2xl font-bold text-green-600 mb-1">100%</div>
                  <div className="text-sm text-slate-600">Zaangażowanie</div>
                </div>
                
                <div className="text-center p-4 bg-white rounded-2xl shadow-sm col-span-2">
                  <div className="text-2xl font-bold text-purple-600 mb-1">Bydgoszcz</div>
                  <div className="text-sm text-slate-600">Lokalna obecność i wsparcie</div>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;