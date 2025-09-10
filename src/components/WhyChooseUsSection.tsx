import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { DollarSign, Zap, Users, MapPin, Star, TrendingUp } from 'lucide-react';

const WhyChooseUsSection: React.FC = () => {
  const { t } = useLanguage();

  const advantages = [
    {
      icon: DollarSign,
      key: 'fresh', // Maps to 'Transparent Pricing'
      color: 'bg-green-500',
      highlight: 'Jedyni na rynku!'
    },
    {
      icon: Zap,
      key: 'price', // Maps to 'Modern Startup Approach'
      color: 'bg-purple-500',
      highlight: 'Najnowsze technologie'
    },
    {
      icon: Users,
      key: 'personal', // Maps to 'Direct Founder Access'
      color: 'bg-blue-500',
      highlight: 'Bezpośredni kontakt'
    },
    {
      icon: MapPin,
      key: 'local', // Maps to 'Local Expertise'
      color: 'bg-orange-500',
      highlight: 'Lokalni eksperci'
    }
  ];

  const marketStats = [
    {
      icon: TrendingUp,
      stat: '71%',
      desc: 'firm SMB używa chmury',
      detail: 'ale tylko 28% AI'
    },
    {
      icon: Star,
      stat: '13%',
      desc: 'firm ma strategię cyfrową',
      detail: 'ogromna szansa!'
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            Przełomowe podejście na rynku bydgoskim
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            {t('why.title')}
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {t('why.subtitle')}
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {advantages.map((advantage) => {
            const IconComponent = advantage.icon;
            return (
              <div
                key={advantage.key}
                className="group relative bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-xl hover:bg-white transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start space-x-6">
                  <div className={`w-16 h-16 rounded-2xl ${advantage.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="space-y-3 flex-1">
                    <div className="flex items-center space-x-3">
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {t(`why.${advantage.key}.title`)}
                      </h3>
                      <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-semibold rounded-full">
                        {advantage.highlight}
                      </span>
                    </div>
                    <p className="text-slate-600 leading-relaxed">
                      {t(`why.${advantage.key}.desc`)}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Market Opportunity Section */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-8 lg:p-12 text-white mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">Ogromna szansa rynkowa w Polsce</h3>
            <p className="text-slate-300 text-lg max-w-3xl mx-auto">
              Analiza rynku pokazuje gigantyczną lukę w cyfryzacji polskich firm SMB - to nasza przewaga!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {marketStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-blue-300" />
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-blue-300 mb-2">{stat.stat}</div>
                  <h4 className="font-semibold text-lg mb-1">{stat.desc}</h4>
                  <p className="text-slate-400 text-sm font-medium">{stat.detail}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Competitive Comparison */}
        <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
              Synoptic vs. Konkurencja w Bydgoszczy
            </h3>
            <p className="text-slate-600 text-lg">
              Zobacz, jak wyróżniamy się na tle 14+ lokalnych firm IT
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-slate-900 mb-4">Konkurencja:</h4>
              <div className="space-y-3 text-slate-600">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <span>"Skontaktuj się w sprawie wyceny"</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <span>Ograniczone specjalizacje AI</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <span>Brak równej pozycji Google Workspace</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <span>Warstwy menedżerów obsługi</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-slate-900 mb-4">Synoptic:</h4>
              <div className="space-y-3 text-slate-600">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="font-semibold">Transparentne ceny od 2,999 PLN</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="font-semibold">AI-First podejście dla SMB</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="font-semibold">Równa ekspertyza Microsoft & Google</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="font-semibold">Bezpośredni kontakt z założycielami</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;