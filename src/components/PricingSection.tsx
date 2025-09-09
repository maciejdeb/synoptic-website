import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Check, Star } from 'lucide-react';

const PricingSection: React.FC = () => {
  const { t } = useLanguage();

  const plans = [
    {
      name: t('pricing.starter.name'),
      price: t('pricing.starter.price'),
      description: t('pricing.starter.desc'),
      features: [
        'Podstawowa migracja do chmury',
        'Konfiguracja Microsoft 365',
        'Wsparcie techniczne przez 30 dni',
        'Szkolenie dla 5 użytkowników',
        'Dokumentacja techniczna'
      ],
      popular: false,
      color: 'border-slate-200 hover:border-blue-300'
    },
    {
      name: t('pricing.business.name'),
      price: t('pricing.business.price'),
      description: t('pricing.business.desc'),
      features: [
        'Pełna migracja infrastruktury',
        'Implementacja rozwiązań AI',
        'Outsourcing IT na 6 miesięcy',
        'Szkolenia dla całego zespołu',
        'Monitoring i wsparcie 24/7',
        'Optymalizacja kosztów',
        'Raportowanie miesięczne'
      ],
      popular: true,
      color: 'border-blue-500 ring-2 ring-blue-200'
    },
    {
      name: t('pricing.enterprise.name'),
      price: t('pricing.enterprise.price'),
      description: t('pricing.enterprise.desc'),
      features: [
        'Dedykowane rozwiązania',
        'Pełna transformacja cyfrowa',
        'Własny zespół projektowy',
        'Integracje z systemami ERP',
        'Bezpieczeństwo na najwyższym poziomie',
        'SLA gwarantowane',
        'Wsparcie strategiczne'
      ],
      popular: false,
      color: 'border-slate-200 hover:border-purple-300'
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
            Transparentne ceny
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            {t('pricing.title')}
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {t('pricing.subtitle')}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-3xl p-8 ${plan.color} transition-all duration-300 hover:shadow-2xl ${plan.popular ? 'transform lg:scale-105' : 'hover:transform hover:scale-105'}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center">
                    <Star className="w-4 h-4 mr-1 fill-current" />
                    Najpopularniejszy
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <p className="text-slate-600 text-sm mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  {plan.price === t('pricing.enterprise.price') ? (
                    <div className="text-3xl font-bold text-slate-900">{plan.price}</div>
                  ) : (
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                      <span className="text-xl text-slate-600 ml-1">{t('pricing.currency')}</span>
                    </div>
                  )}
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="text-center">
                <a
                  href="#consultation"
                  className={`w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-lg text-sm font-semibold transition-colors duration-200 ${
                    plan.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                  }`}
                >
                  {t('pricing.contact')}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center bg-white rounded-2xl p-8 border border-slate-200">
          <h3 className="text-xl font-bold text-slate-900 mb-4">Wszystkie ceny zawierają:</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-slate-600">
            <div className="flex items-center justify-center space-x-2">
              <Check className="w-4 h-4 text-green-500" />
              <span>Bezpłatną konsultację</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Check className="w-4 h-4 text-green-500" />
              <span>Dokumentację techniczną</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Check className="w-4 h-4 text-green-500" />
              <span>Wsparcie poimplementacyjne</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;