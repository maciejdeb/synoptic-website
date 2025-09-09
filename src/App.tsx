import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import EnhancedBackground from './components/EnhancedBackground';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import CertificationsSection from './components/CertificationsSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import AboutSection from './components/AboutSection';
import PricingSection from './components/PricingSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <LanguageProvider>
      <div className="App relative">
        <EnhancedBackground />
        <div className="relative z-10">
          <Header />
          <main>
            <HeroSection />
            <ServicesSection />
            <CertificationsSection />
            <WhyChooseUsSection />
            <AboutSection />
            <PricingSection />
            <ContactSection />
          </main>
          <Footer />
        </div>
      </div>
    </LanguageProvider>
  );
}

export default App;