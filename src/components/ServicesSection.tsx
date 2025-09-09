import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import {
  Cloud,
  Brain,
  Users,
  Settings,
  Code,
  Shield
} from 'lucide-react';

const ServicesSection: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Cloud,
      key: 'cloud',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Brain,
      key: 'ai',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Users,
      key: 'office',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Settings,
      key: 'outsourcing',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Code,
      key: 'development',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: Shield,
      key: 'administration',
      color: 'from-teal-500 to-teal-600'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            {t('services.title')}
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.key}
                className="group bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-2xl hover:border-blue-300 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} p-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {t(`services.${service.key}.title`)}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {t(`services.${service.key}.desc`)}
                  </p>
                </div>
                
                <div className="mt-6 pt-6 border-t border-slate-100">
                  <div className="flex items-center text-blue-600 font-medium group-hover:translate-x-2 transition-transform">
                    <span className="text-sm">Dowiedz się więcej</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;