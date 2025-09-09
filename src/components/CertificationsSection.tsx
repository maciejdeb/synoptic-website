import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Shield, Award, CheckCircle } from 'lucide-react';

const CertificationsSection: React.FC = () => {
  const { t } = useLanguage();

  const certifications = [
    {
      id: 'microsoft',
      name: t('certifications.microsoft'),
      image: '/images/certifications/microsoft-cert.png',
      provider: 'Microsoft',
      level: 'Cloud Architect Expert'
    },
    {
      id: 'vmware',
      name: t('certifications.vmware'),
      image: '/images/certifications/vmware-cert.png',
      provider: 'VMware',
      level: 'Advanced Level'
    },
    {
      id: 'aws',
      name: t('certifications.aws'),
      image: '/images/certifications/aws-cert.png',
      provider: 'Amazon Web Services',
      level: 'Professional'
    },
    {
      id: 'gcp',
      name: t('certifications.gcp'),
      image: '/images/certifications/gcp-cert.png',
      provider: 'Google Cloud',
      level: 'Professional Architect'
    }
  ];

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Premium Background with IT-themed effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        {/* Animated particles */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-60"></div>
          <div className="absolute top-3/4 left-3/4 w-1 h-1 bg-blue-300 rounded-full animate-pulse opacity-40 animation-delay-1000"></div>
          <div className="absolute top-1/2 left-1/6 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse opacity-50 animation-delay-2000"></div>
          <div className="absolute top-1/6 right-1/4 w-1 h-1 bg-blue-200 rounded-full animate-pulse opacity-30"></div>
          <div className="absolute bottom-1/4 right-1/6 w-2 h-2 bg-cyan-300 rounded-full animate-pulse opacity-40 animation-delay-1000"></div>
        </div>
        
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" 
             style={{
               backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`
             }}></div>
        
        {/* Gradient overlays for depth */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-blue-900/20 to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-slate-900/30 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-xl mb-6">
            <Award className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            {t('certifications.title')}
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            {t('certifications.subtitle')}
          </p>
        </div>

        {/* Certification Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((cert, index) => (
            <div 
              key={cert.id}
              className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Premium glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
              
              <div className="relative z-10">
                {/* Badge Image */}
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <img 
                      src={cert.image}
                      alt={cert.name}
                      className="w-24 h-24 object-contain drop-shadow-lg group-hover:drop-shadow-2xl transition-all duration-300"
                    />
                    {/* Verification checkmark */}
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center border-2 border-white">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-200 transition-colors">
                    {cert.provider}
                  </h3>
                  <p className="text-blue-100 text-sm mb-3 font-medium">
                    {cert.level}
                  </p>
                  <div className="inline-flex items-center space-x-1 text-xs text-blue-200 bg-white/10 px-3 py-1 rounded-full">
                    <Shield className="w-3 h-3" />
                    <span>Verified</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust statement */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span className="text-white font-medium">
              Certified professionals ready to transform your business
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;