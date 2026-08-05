import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ExecutiveHero from './components/ExecutiveHero';
import SimplePlanEstimator from './components/SimplePlanEstimator';
import FAQ from './components/FAQ';
import SpeedTestModal from './components/SpeedTestModal';
import ServicesSection from './components/ServicesSection';
import BandwidthCalc from './components/BandwidthCalc';
import FeasibilityChecker from './components/FeasibilityChecker';
import WhyChooseUs from './components/WhyChooseUs';
import CustomerPortal from './components/CustomerPortal';
import Testimonials from './components/Testimonials';
import PolicyModal from './components/PolicyModal';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import PWAInstallBanner from './components/PWAInstallBanner';

// Motion & Interactive Components
import NetworkPreloader from './components/NetworkPreloader';
import ScrollProgress from './components/ScrollProgress';
import MouseSpotlight from './components/MouseSpotlight';
import FloatingWidgets from './components/FloatingWidgets';
import BrandMarquee from './components/BrandMarquee';
import CorporateClients from './components/CorporateClients';
import FiberOpticBackground from './components/FiberOpticBackground';

export default function App() {
  const [activeTab, setActiveTab] = useState('home'); // home, services, plans, coverage, portal, about, contact
  const [speedTestOpen, setSpeedTestOpen] = useState(false);
  const [policyModalOpen, setPolicyModalOpen] = useState(false);
  const [activePolicyDoc, setActivePolicyDoc] = useState('Terms & Conditions');

  // Light / Dark Theme State (Defaults to Light mode for clean business presentation, togglable to dark)
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('technosys-theme') || 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('technosys-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const handleOpenPolicy = (docName) => {
    setActivePolicyDoc(docName || 'Terms & Conditions');
    setPolicyModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#060B18] text-slate-900 dark:text-[#FAFAFA] selection:bg-cyan-500 selection:text-black flex flex-col justify-between overflow-x-hidden relative transition-colors duration-300">
      
      {/* 1. Initial Network Preloader Animation */}
      <NetworkPreloader />

      {/* 2. Top Scroll Progress Indicator */}
      <ScrollProgress />

      {/* 3. Mouse Spotlight Glow Following Cursor */}
      <MouseSpotlight />

      {/* 4. Global Animated Optical Fiber Background */}
      <FiberOpticBackground />

      {/* Clean Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenSpeedTest={() => setSpeedTestOpen(true)}
        onOpenPolicy={handleOpenPolicy}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      {/* Main Single Streamlined View */}
      <main className="flex-1 relative z-10">
        {activeTab === 'home' && (
          <div className="animate-fadeIn space-y-4">
            {/* 1. Clean & Catchy Executive Hero Section */}
            <ExecutiveHero
              onOpenContact={() => setActiveTab('contact')}
              onExploreServices={() => setActiveTab('services')}
              onOpenSpeedTest={() => setSpeedTestOpen(true)}
            />

            {/* 2. Partner Hardware Marquee Carousel */}
            <BrandMarquee />

            {/* 3. Simple Device & Location Plan Estimator */}
            <SimplePlanEstimator onOpenContact={() => setActiveTab('contact')} />

            {/* 4. Verified Corporate & Industrial Clients Showcase */}
            <CorporateClients />

            {/* 5. Services Section */}
            <ServicesSection onOpenContact={() => setActiveTab('contact')} />

            {/* 6. Why Choose Us Highlight */}
            <WhyChooseUs onOpenContact={() => setActiveTab('contact')} />

            {/* 7. Customer Endorsements & Testimonials */}
            <Testimonials />

            {/* 8. Frequently Asked Questions */}
            <FAQ onOpenContact={() => setActiveTab('contact')} />
          </div>
        )}

        {activeTab === 'services' && (
          <div className="pt-24 animate-fadeIn">
            <ServicesSection onOpenContact={() => setActiveTab('contact')} />
          </div>
        )}

        {activeTab === 'plans' && (
          <div className="pt-24 animate-fadeIn">
            <BandwidthCalc onOpenContact={() => setActiveTab('contact')} />
          </div>
        )}

        {activeTab === 'coverage' && (
          <div className="pt-24 animate-fadeIn">
            <FeasibilityChecker onOpenContact={() => setActiveTab('contact')} />
          </div>
        )}

        {activeTab === 'portal' && (
          <div className="pt-24 animate-fadeIn">
            <CustomerPortal onOpenContact={() => setActiveTab('contact')} />
          </div>
        )}

        {activeTab === 'about' && (
          <div className="pt-24 animate-fadeIn space-y-12">
            <WhyChooseUs onOpenContact={() => setActiveTab('contact')} />
            <Testimonials />
            <FAQ onOpenContact={() => setActiveTab('contact')} />
          </div>
        )}

        {activeTab === 'contact' && (
          <div className="animate-fadeIn">
            <ContactSection onBackToHome={() => setActiveTab('home')} />
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer
        setActiveTab={setActiveTab}
        onOpenPolicy={handleOpenPolicy}
        onOpenContact={() => setActiveTab('contact')}
        onOpenSpeedTest={() => setSpeedTestOpen(true)}
      />

      {/* Modals */}
      <SpeedTestModal
        isOpen={speedTestOpen}
        onClose={() => setSpeedTestOpen(false)}
        onConnect={() => { setSpeedTestOpen(false); setActiveTab('contact'); }}
      />

      <PolicyModal
        isOpen={policyModalOpen}
        initialPolicy={activePolicyDoc}
        onClose={() => setPolicyModalOpen(false)}
      />

      {/* Floating WhatsApp & Scroll to Top Buttons */}
      <FloatingWidgets />

      {/* PWA Install Notification Prompt */}
      <PWAInstallBanner />
    </div>
  );
}
