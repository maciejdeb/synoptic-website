import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Lightbulb, DollarSign, Heart, MapPin } from 'lucide-react';

const WhyChooseUsSection: React.FC = () => {
  const { t } = useLanguage();

  const advantages = [
    {
      icon: Lightbulb,
      key: 'fresh',
      color: 'bg-yellow-500'
    },
    {
      icon: DollarSign,
      key: 'price',
      color: 'bg-green-500'
    },
    {
      icon: Heart,
      key: 'personal',
      color: 'bg-red-500'
    },
    {
      icon: MapPin,
      key: 'local',
      color: 'bg-blue-500'
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            Nowa firma na rynku
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            {t('why.title')}
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {t('why.subtitle')}
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {advantages.map((advantage) => {
            const IconComponent = advantage.icon;
            return (
              <div
                key={advantage.key}
                className="flex items-start space-x-6 p-8 bg-white rounded-2xl border border-slate-200 hover:shadow-lg transition-all duration-300 group"
              >
                <div className={`w-14 h-14 rounded-2xl ${advantage.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-7 h-7 text-white" />
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-slate-900">
                    {t(`why.${advantage.key}.title`)}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {t(`why.${advantage.key}.desc`)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Startup Journey Visualization */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-8 lg:p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">Nasza podróż startupowa</h3>
            <p className="text-blue-100 text-lg">Budujemy przyszłość IT w Bydgoszczy krok po kroku</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2025</span>
              </div>
              <h4 className="font-semibold mb-2">Start</h4>
              <p className="text-blue-100 text-sm">Założenie firmy i pierwsze projekty</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">...</span>
              </div>
              <h4 className="font-semibold mb-2">Rozwój</h4>
              <p className="text-blue-100 text-sm">Budowanie zespołu i portfela klientów</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">∞</span>
              </div>
              <h4 className="font-semibold mb-2">Przyszłość</h4>
              <p className="text-blue-100 text-sm">Lider transformacji cyfrowej w regionie</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;