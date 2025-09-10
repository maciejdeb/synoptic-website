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
    'hero.title': 'AI-First IT Consultancy dla Bydgoskich Firm SMB',
    'hero.subtitle': 'Transparentne ceny, lokalna ekspertyza i najnowsze technologie AI dla przyspieszenia rozwoju Twojej firmy. Pomagamy wykorzystać AI i chmurę.',
    'hero.cta': 'Umów bezpłatną konsultację',
    'hero.secondary': 'Poznaj nasze usługi',
    
    // Trust Indicators
    'trust.innovative': 'Transparentne cenniki',
    'trust.competitive': 'Startupowe podejście',
    'trust.personal': 'Bezpośredni kontakt z założycielami',
    'trust.local': 'Ekspertyza w Bydgoszczy',
    
    // Services
    'services.title': 'Nasze Usługi',
    'services.subtitle': 'Specjalizujemy się w rozwiązaniach AI i chmurowych dla małych i średnich firm w Bydgoszczy',
    'services.cloud.title': 'Migracja do Chmury (Microsoft/Google)',
    'services.cloud.desc': 'Bezpieczne przeniesienie do Microsoft Azure lub Google Cloud z pełnym wsparciem i migracją Google Workspace',
    'services.ai.title': 'Rozwiązania AI dla SMB',
    'services.ai.desc': 'Implementacja chatbotów, automatyzacji procesów i analizy danych AI dostosowanej do małych firm',
    'services.office.title': 'Microsoft 365 & Google Workspace',
    'services.office.desc': 'Pełna integracja i migracja do Google Workspace lub Microsoft 365 - jesteśmy ekspertami od obu platform',
    'services.outsourcing.title': 'Outsourcing IT',
    'services.outsourcing.desc': 'Kompleksowa obsługa IT Twojej firmy - od wsparcia użytkowników po zarządzanie infrastrukturą',
    'services.development.title': 'Rozwój w Chmurze',
    'services.development.desc': 'Tworzenie nowoczesnych aplikacji i rozwiązań opartych na technologiach chmurowych',
    'services.administration.title': 'Administracja Chmurą',
    'services.administration.desc': 'Profesjonalne zarządzanie i monitoring Twojej infrastruktury chmurowej',
    
    // Why Choose Us
    'why.title': 'Dlaczego Synoptic?',
    'why.subtitle': 'Cztery kluczowe przewagi konkurencyjne, które wyróżniają nas na rynku bydgoskim',
    'why.fresh.title': 'Transparentne Cenniki',
    'why.fresh.desc': 'Bez niespodzianek. Jako jedyni na rynku podajemy jasne ceny z góry, dzięki czemu możesz planować budżet IT z pewnością. W przeciwieństwie do konkurencji, która ukrywa koszty za konsultacją.',
    'why.price.title': 'Nowoczesne Startupowe Podejście',
    'why.price.desc': 'Nie jesteśmy związani starymi systemami. Jako świeży, dynamiczny zespół wykorzystujemy absolutnie najnowsze technologie AI i chmurowe, aby dać Ci przewagę konkurencyjną.',
    'why.personal.title': 'Bezpośredni Kontakt z Założycielami',
    'why.personal.desc': 'Bez warstw menedżerów obsługi klienta. Otrzymujesz osobistą obsługę i bezpośrednią komunikację z założycielami, którzy są zainteresowani Twoim sukcesem.',
    'why.local.title': 'Lokalna Ekspertyza w Bydgoszczy',
    'why.local.desc': 'Mieszkamy i pracujemy tutaj. Rozumiemy unikalne wyzwania i możliwości małych i średnich firm na rynku bydgoskim.',
    
    // Pricing
    'pricing.title': 'Transparentne Cenniki',
    'pricing.subtitle': 'Jasne ceny bez ukrytych kosztów - planuj budżet IT z pewnością',
    'pricing.currency': 'PLN',
    'pricing.urgency': 'Ograniczona dostępność: Zabezpiecz miejsce na implementację w Q2 2024',
    'pricing.starter.name': 'Pakiet Startowy',
    'pricing.starter.price': 'od 2,999',
    'pricing.starter.range': '2,999 - 4,999 PLN',
    'pricing.starter.desc': 'Dla małych firm (5-20 pracowników) rozpoczynających cyfrową podróż',
    'pricing.business.name': 'Pakiet Biznesowy',
    'pricing.business.price': 'od 8,999',
    'pricing.business.range': '8,999 - 12,999 PLN',
    'pricing.business.desc': 'Dla rozwijających się firm SMB (20-50 pracowników) szukających pełnej transformacji cyfrowej',
    'pricing.enterprise.name': 'Pakiet Rozszerzony',
    'pricing.enterprise.price': 'od 24,999 PLN',
    'pricing.enterprise.desc': 'Dla większych firm SMB (50+ pracowników) potrzebujących rozwiązań na miarę przedsiębiorstwa',
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
    'hero.title': 'AI-First IT Consultancy for Bydgoszcz SMBs',
    'hero.subtitle': 'Transparent pricing, local expertise, and the latest AI technology to accelerate your business growth. We help you leverage AI and the cloud.',
    'hero.cta': 'Book free consultation',
    'hero.secondary': 'Learn about our services',
    
    // Trust Indicators
    'trust.innovative': 'Transparent pricing',
    'trust.competitive': 'Modern startup approach',
    'trust.personal': 'Direct founder access',
    'trust.local': 'Local Bydgoszcz expertise',
    
    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'We specialize in AI and cloud solutions for small and medium businesses in Bydgoszcz',
    'services.cloud.title': 'Cloud Migration (Microsoft/Google)',
    'services.cloud.desc': 'Secure migration to Microsoft Azure or Google Cloud with full support and Google Workspace migration',
    'services.ai.title': 'AI Solutions for SMBs',
    'services.ai.desc': 'Implementation of chatbots, process automation, and AI data analysis tailored for small businesses',
    'services.office.title': 'Microsoft 365 & Google Workspace',
    'services.office.desc': 'Complete integration and migration to Google Workspace or Microsoft 365 - we are experts in both platforms',
    'services.outsourcing.title': 'IT Outsourcing',
    'services.outsourcing.desc': 'Complete IT support for your company - from user support to infrastructure management',
    'services.development.title': 'Cloud Development',
    'services.development.desc': 'Creating modern applications and solutions based on cloud technologies',
    'services.administration.title': 'Cloud Administration',
    'services.administration.desc': 'Professional management and monitoring of your cloud infrastructure',
    
    // Why Choose Us
    'why.title': 'Why Synoptic?',
    'why.subtitle': 'Four key competitive advantages that distinguish us in the Bydgoszcz market',
    'why.fresh.title': 'Transparent Pricing',
    'why.fresh.desc': 'No surprises. We provide clear, upfront pricing so you can budget with confidence, unlike competitors who hide costs behind a consultation.',
    'why.price.title': 'Modern Startup Approach',
    'why.price.desc': 'We\'re not tied to legacy systems. As a fresh, dynamic team, we leverage the absolute latest in AI and cloud technology to give you a competitive edge.',
    'why.personal.title': 'Direct Founder Access',
    'why.personal.desc': 'No layers of account managers. You get personal service and direct communication with the founders who are invested in your success.',
    'why.local.title': 'Local Bydgoszcz Expertise',
    'why.local.desc': 'We live and work here. We understand the unique challenges and opportunities for small and medium businesses in the Bydgoszcz market.',
    
    // Pricing
    'pricing.title': 'Transparent Pricing',
    'pricing.subtitle': 'Clear prices with no hidden costs - budget your IT with confidence',
    'pricing.currency': 'PLN',
    'pricing.urgency': 'Limited availability: Secure your spot for Q2 2024 implementation',
    'pricing.starter.name': 'Starter Package',
    'pricing.starter.price': 'from 2,999',
    'pricing.starter.range': '2,999 - 4,999 PLN',
    'pricing.starter.desc': 'For small businesses (5-20 employees) starting their digital journey',
    'pricing.business.name': 'Business Package',
    'pricing.business.price': 'from 8,999',
    'pricing.business.range': '8,999 - 12,999 PLN',
    'pricing.business.desc': 'For growing SMBs (20-50 employees) seeking complete digital transformation',
    'pricing.enterprise.name': 'Extended Package',
    'pricing.enterprise.price': 'from 24,999 PLN',
    'pricing.enterprise.desc': 'For established SMBs (50+ employees) needing custom, enterprise-grade solutions',
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