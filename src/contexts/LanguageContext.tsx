import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'pl' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

// Professional Polish business translations with SMB focus
const translations = {
  pl: {
    // Navigation
    'nav.home': 'Strona główna',
    'nav.services': 'Usługi',
    'nav.about': 'O nas',
    'nav.contact': 'Kontakt',
    'nav.consultation': 'Bezpłatna konsultacja',
    
    // Hero Section
    'hero.title': 'Transformacja Cyfrowa dla Małych i Średnich Firm',
    'hero.subtitle': 'Nowoczesne rozwiązania IT i chmurowe dla rozwoju Twojego biznesu w Bydgoszczy',
    'hero.cta': 'Umów bezpłatną konsultację',
    'hero.secondary': 'Poznaj nasze usługi',
    
    // Trust Indicators
    'trust.innovative': 'Innowacyjne podejście',
    'trust.competitive': 'Konkurencyjne ceny',
    'trust.personal': 'Osobiste podejście',
    'trust.local': 'Lokalna obecność w Bydgoszczy',
    
    // Services
    'services.title': 'Nasze Usługi',
    'services.subtitle': 'Kompleksowe rozwiązania IT dostosowane do potrzeb małych i średnich firm',
    'services.cloud.title': 'Migracja do Chmury',
    'services.cloud.desc': 'Bezpieczne przeniesienie Twoich danych i aplikacji do chmury z pełnym wsparciem technicznym',
    'services.ai.title': 'Implementacja AI',
    'services.ai.desc': 'Automatyzacja procesów biznesowych przy użyciu sztucznej inteligencji',
    'services.office.title': 'Microsoft 365 / Google Workspace',
    'services.office.desc': 'Pełna integracja i konfiguracja narzędzi biurowych dla Twojego zespołu',
    'services.outsourcing.title': 'Outsourcing IT',
    'services.outsourcing.desc': 'Kompleksowa obsługa IT Twojej firmy - od wsparcia użytkowników po zarządzanie infrastrukturą',
    'services.development.title': 'Rozwój w Chmurze',
    'services.development.desc': 'Tworzenie nowoczesnych aplikacji i rozwiązań opartych na technologiach chmurowych',
    'services.administration.title': 'Administracja Chmurą',
    'services.administration.desc': 'Profesjonalne zarządzanie i monitoring Twojej infrastruktury chmurowej',
    
    // Why Choose Us
    'why.title': 'Dlaczego Synoptic?',
    'why.subtitle': 'Jako nowa firma na rynku, oferujemy świeże podejście i konkurencyjne ceny',
    'why.fresh.title': 'Świeże podejście',
    'why.fresh.desc': 'Jako startup, nie jesteśmy ograniczeni przestarzałymi metodami. Stosujemy najnowsze technologie i rozwiązania.',
    'why.price.title': 'Konkurencyjne ceny',
    'why.price.desc': 'Oferujemy atrakcyjne ceny dostosowane do budżetu małych i średnich firm. Transparentna wycena bez ukrytych kosztów.',
    'why.personal.title': 'Osobisty kontakt',
    'why.personal.desc': 'Bezpośrednia komunikacja z właścicielami firmy. Każdy klient ma dedykowanego opiekuna projektu.',
    'why.local.title': 'Lokalna obecność',
    'why.local.desc': 'Jesteśmy z Bydgoszczy i znamy potrzeby lokalnych firm. Szybka reakcja i wsparcie na miejscu.',
    
    // Pricing
    'pricing.title': 'Cennik',
    'pricing.subtitle': 'Transparentne ceny dostosowane do budżetu małych i średnich firm',
    'pricing.currency': 'zł',
    'pricing.starter.name': 'Pakiet Startowy',
    'pricing.starter.price': '1 500',
    'pricing.starter.desc': 'Idealny dla małych firm rozpoczynających cyfrową transformację',
    'pricing.business.name': 'Pakiet Biznesowy',
    'pricing.business.price': '3 500',
    'pricing.business.desc': 'Kompleksowe rozwiązania dla rozwijających się firm',
    'pricing.enterprise.name': 'Pakiet Rozszerzony',
    'pricing.enterprise.price': 'Wycena indywidualna',
    'pricing.enterprise.desc': 'Dedykowane rozwiązania dla większych przedsiębiorstw',
    'pricing.contact': 'Skontaktuj się z nami',
    
    // About
    'about.title': 'O Synoptic',
    'about.subtitle': 'Młoda, ambitna firma IT z Bydgoszczy',
    'about.story': 'Synoptic to nowa firma konsultingowa specjalizująca się w rozwiązaniach IT i chmurowych dla małych i średnich przedsiębiorstw. Powstaliśmy z przekonania, że każda firma, niezależnie od rozmiaru, zasługuje na nowoczesne, efektywne rozwiązania technologiczne.',
    'about.mission': 'Naszą misją jest pomoc lokalnym firmom w cyfrowej transformacji poprzez dostarczanie innowacyjnych rozwiązań w przystępnych cenach.',
    
    // Contact
    'contact.title': 'Kontakt',
    'contact.subtitle': 'Skontaktuj się z nami - odpowiemy w ciągu 24 godzin',
    'contact.phone': 'Telefon',
    'contact.email': 'Email',
    'contact.address': 'Adres',
    'contact.city': 'Bydgoszcz, Polska',
    'contact.form.title': 'Napisz do nas',
    'contact.form.name': 'Imię i nazwisko',
    'contact.form.email': 'Adres email',
    'contact.form.phone': 'Telefon',
    'contact.form.company': 'Nazwa firmy',
    'contact.form.message': 'Wiadomość',
    'contact.form.send': 'Wyślij wiadomość',
    
    // Certifications
    'certifications.title': 'Certyfikacje',
    'certifications.subtitle': 'Nasze zespół posiada profesjonalne certyfikaty z wiodących platform technologicznych',
    'certifications.microsoft': 'Microsoft Certified Professional',
    'certifications.vmware': 'VMware Certified Professional',
    'certifications.aws': 'AWS Solutions Architect',
    'certifications.gcp': 'Google Cloud Professional Architect',
    
    // Footer
    'footer.services': 'Usługi',
    'footer.company': 'Firma',
    'footer.contact': 'Kontakt',
    'footer.rights': 'Wszystkie prawa zastrzeżone.',
    'footer.created': 'Stworzone przez MiniMax Agent'
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.consultation': 'Free Consultation',
    
    // Hero Section
    'hero.title': 'Digital Transformation for Small & Medium Businesses',
    'hero.subtitle': 'Modern IT and cloud solutions for your business growth in Bydgoszcz',
    'hero.cta': 'Book free consultation',
    'hero.secondary': 'Learn about our services',
    
    // Trust Indicators
    'trust.innovative': 'Innovative approach',
    'trust.competitive': 'Competitive prices',
    'trust.personal': 'Personal approach',
    'trust.local': 'Local presence in Bydgoszcz',
    
    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Comprehensive IT solutions tailored for small and medium businesses',
    'services.cloud.title': 'Cloud Migration',
    'services.cloud.desc': 'Secure migration of your data and applications to the cloud with full technical support',
    'services.ai.title': 'AI Implementation',
    'services.ai.desc': 'Business process automation using artificial intelligence',
    'services.office.title': 'Microsoft 365 / Google Workspace',
    'services.office.desc': 'Complete integration and configuration of office tools for your team',
    'services.outsourcing.title': 'IT Outsourcing',
    'services.outsourcing.desc': 'Complete IT support for your company - from user support to infrastructure management',
    'services.development.title': 'Cloud Development',
    'services.development.desc': 'Creating modern applications and solutions based on cloud technologies',
    'services.administration.title': 'Cloud Administration',
    'services.administration.desc': 'Professional management and monitoring of your cloud infrastructure',
    
    // Why Choose Us
    'why.title': 'Why Synoptic?',
    'why.subtitle': 'As a new company on the market, we offer a fresh approach and competitive prices',
    'why.fresh.title': 'Fresh approach',
    'why.fresh.desc': 'As a startup, we are not limited by outdated methods. We use the latest technologies and solutions.',
    'why.price.title': 'Competitive prices',
    'why.price.desc': 'We offer attractive prices tailored to small and medium business budgets. Transparent pricing with no hidden costs.',
    'why.personal.title': 'Personal contact',
    'why.personal.desc': 'Direct communication with company owners. Every client has a dedicated project manager.',
    'why.local.title': 'Local presence',
    'why.local.desc': 'We are from Bydgoszcz and know the needs of local companies. Quick response and on-site support.',
    
    // Pricing
    'pricing.title': 'Pricing',
    'pricing.subtitle': 'Transparent prices tailored to small and medium business budgets',
    'pricing.currency': 'PLN',
    'pricing.starter.name': 'Starter Package',
    'pricing.starter.price': '1,500',
    'pricing.starter.desc': 'Perfect for small businesses starting digital transformation',
    'pricing.business.name': 'Business Package',
    'pricing.business.price': '3,500',
    'pricing.business.desc': 'Comprehensive solutions for growing companies',
    'pricing.enterprise.name': 'Enterprise Package',
    'pricing.enterprise.price': 'Custom quote',
    'pricing.enterprise.desc': 'Dedicated solutions for larger enterprises',
    'pricing.contact': 'Contact us',
    
    // About
    'about.title': 'About Synoptic',
    'about.subtitle': 'Young, ambitious IT company from Bydgoszcz',
    'about.story': 'Synoptic is a new consulting company specializing in IT and cloud solutions for small and medium enterprises. We were founded with the belief that every company, regardless of size, deserves modern, efficient technological solutions.',
    'about.mission': 'Our mission is to help local companies in digital transformation by providing innovative solutions at affordable prices.',
    
    // Contact
    'contact.title': 'Contact',
    'contact.subtitle': 'Get in touch with us - we will respond within 24 hours',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.address': 'Address',
    'contact.city': 'Bydgoszcz, Poland',
    'contact.form.title': 'Write to us',
    'contact.form.name': 'Full name',
    'contact.form.email': 'Email address',
    'contact.form.phone': 'Phone',
    'contact.form.company': 'Company name',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send message',
    
    // Certifications
    'certifications.title': 'Certifications',
    'certifications.subtitle': 'Our team holds professional certifications from leading technology platforms',
    'certifications.microsoft': 'Microsoft Certified Professional',
    'certifications.vmware': 'VMware Certified Professional',
    'certifications.aws': 'AWS Solutions Architect',
    'certifications.gcp': 'Google Cloud Professional Architect',
    
    // Footer
    'footer.services': 'Services',
    'footer.company': 'Company',
    'footer.contact': 'Contact',
    'footer.rights': 'All rights reserved.',
    'footer.created': 'Created by MiniMax Agent'
  }
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pl'); // Polish as default

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['pl']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};