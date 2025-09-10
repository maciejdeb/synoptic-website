import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Check, Star, ArrowRight } from 'lucide-react';

const PricingSection: React.FC = () => {
  const { t } = useLanguage();

  const plans = [
    {
      name: t('pricing.starter.name'),
      price: t('pricing.starter.price'),
      description: t('pricing.starter.desc'),
      features: [
        'Migracja do chmury (Microsoft 365 lub Google Workspace)',
        'Podstawowa automatyzacja AI procesów',
        'Konfiguracja bezpieczeństwa i kopii zapasowych',
        'Wsparcie w aplikacji o dofinansowanie Dig.IT',
        'Wsparcie poimplementacyjne 30 dni',
        'Szkolenie dla zespołu (do 20 osób)',
        'Dokumentacja techniczna'
      ],
      popular: false,
      color: 'border-slate-200 hover:border-blue-300',
      ctaText: 'Zacznij teraz',
      target: '5-20 pracowników'
    },
    {
      name: t('pricing.business.name'),
      price: t('pricing.business.price'),
      description: t('pricing.business.desc'),
      features: [
        'Wszystko z Pakietu Startowego, plus:',
        'Zaawansowana integracja AI (chatboty, analiza danych)',
        'Pełna integracja Google Workspace i Microsoft 365',
        'Konsultacje CRM i ERP',
        'Dedykowany menedżer projektu',
        'Wsparcie poimplementacyjne 60 dni',
        'Miesięczne przeglądy strategiczne',
        'Monitoring i wsparcie 24/7'
      ],
      popular: true,
      color: 'border-blue-500 ring-2 ring-blue-200 relative',
      ctaText: 'Wybierz Biznesowy',
      target: '20-50 pracowników'
    },
    {
      name: t('pricing.enterprise.name'),
      price: t('pricing.enterprise.price'),
      description: t('pricing.enterprise.desc'),
      features: [
        'Wszystko z Pakietu Biznesowego, plus:',
        'Niestandardowe modele AI dla firm',
        'Integracja wieloplatformowa i oprogramowania niestandardowego',
        'Gwarantowane SLA (Service Level Agreement)',
        'Warsztaty strategiczne na poziomie zarządu',
        'Kwartalne przeglądy strategiczne',
        'Wsparcie na miejscu (godziny wliczone w miesięczną opłatę)',
        'Priorytetowe wsparcie 24/7'
      ],
      popular: false,
      color: 'border-slate-200 hover:border-purple-300',
      ctaText: 'Skontaktuj się',
      target: '50+ pracowników'
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
            Transparentne ceny - jedyni na rynku!
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            {t('pricing.title')}
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-4">
            {t('pricing.subtitle')}
          </p>
          
          {/* Urgency Element */}
          <div className="inline-flex items-center justify-center px-6 py-3 bg-orange-100 border border-orange-200 rounded-lg text-orange-800 text-sm font-medium">
            <ArrowRight className="w-4 h-4 mr-2" />
            {t('pricing.urgency')}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-3xl p-8 ${plan.color} transition-all duration-300 hover:shadow-2xl ${
                plan.popular ? 'transform lg:scale-105 lg:z-10' : 'hover:transform hover:scale-102'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center shadow-lg">
                    <Star className="w-4 h-4 mr-1 fill-current" />
                    Najpopularniejszy
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8">
                <div className="text-sm text-slate-500 font-medium mb-2">{plan.target}</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <p className="text-slate-600 text-sm mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                    <span className="text-xl text-slate-600 ml-1">{t('pricing.currency')}</span>
                  </div>
                  {index < 2 && (
                    <div className="text-sm text-slate-500 mt-1">
                      {index === 0 ? t('pricing.starter.range') : t('pricing.business.range')}
                    </div>
                  )}
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className={`text-sm ${featureIndex === 0 && index > 0 ? 'font-semibold text-slate-800' : 'text-slate-600'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              
              <div className="text-center">
                <a
                  href="#contact"
                  className={`w-full inline-flex items-center justify-center px-6 py-4 border border-transparent rounded-lg font-semibold transition-all duration-200 group ${
                    plan.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl'
                      : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                  }`}
                >
                  {plan.ctaText}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* ROI and Value Proposition */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-2xl p-8 border border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Wszystkie pakiety zawierają:</h3>
            <div className="space-y-3 text-sm text-slate-600">
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span>Bezpłatną konsultację i ocenę obecnej infrastruktury</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span>Dokumentację techniczną i przewodniki użytkownika</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span>Szkolenia zespołu z nowych systemów</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span>Pomoc w aplikacji o dotacje rządowe (np. Dig.IT)</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
            <h3 className="text-xl font-bold mb-4">Potencjalny ROI:</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-300 rounded-full flex-shrink-0"></div>
                <span>Zmniejszenie przestojów systemu o 85%</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-300 rounded-full flex-shrink-0"></div>
                <span>Oszczędność 15+ godzin miesięcznie na IT</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-300 rounded-full flex-shrink-0"></div>
                <span>Redukcja kosztów IT do 30% rocznie</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-300 rounded-full flex-shrink-0"></div>
                <span>Zwiększenie produktywności zespołu</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Government Funding Mention */}
        <div className="text-center bg-green-50 border border-green-200 rounded-2xl p-6">
          <h3 className="text-lg font-bold text-green-800 mb-2">Finansowanie rządowe dostępne!</h3>
          <p className="text-green-700 text-sm">
            Zapytaj nas, jak pomożemy Ci wykorzystać programy dofinansowania takie jak Dig.IT dla transformacji cyfrowej.
            Możesz otrzymać do 85% zwrotu kosztów!
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;