import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
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
import ProcessTimeline from './components/ProcessTimeline';
import LiveNetworkStatus from './components/LiveNetworkStatus';
import GIDCCoverageVisualizer from './components/GIDCCoverageVisualizer';

export default function App() {
  const [activeTab, setActiveTab] = useState('home'); // home, services, plans, coverage, portal, about, contact
  const [speedTestOpen, setSpeedTestOpen] = useState(false);
  const [policyModalOpen, setPolicyModalOpen] = useState(false);
  const [activePolicyDoc, setActivePolicyDoc] = useState('Terms & Conditions');

  const handleOpenPolicy = (docName) => {
    setActivePolicyDoc(docName || 'Terms & Conditions');
    setPolicyModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#060B18] text-[#FAFAFA] selection:bg-cyan-500 selection:text-black flex flex-col justify-between overflow-x-hidden relative">
      
      {/* 1. Initial Network Preloader Animation */}
      <NetworkPreloader />

      {/* 2. Top Scroll Progress Indicator */}
      <ScrollProgress />

      {/* 3. Mouse Spotlight Glow Following Cursor */}
      <MouseSpotlight />

      {/* Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenSpeedTest={() => setSpeedTestOpen(true)}
        onOpenPolicy={handleOpenPolicy}
      />

      {/* Main View Router */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <div className="animate-fadeIn space-y-4">
            
            {/* Hero Section with Aurora & Fiber Node Animations */}
            <Hero
              onOpenSpeedTest={() => setSpeedTestOpen(true)}
              onOpenContact={() => setActiveTab('contact')}
              onExploreServices={() => setActiveTab('services')}
            />

            {/* Live ISP Network Health Bar */}
            <LiveNetworkStatus />

            {/* Partner Hardware Marquee Carousel */}
            <BrandMarquee />

            {/* Vercel-Style Feature Grid */}
            <div className="container py-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                <button
                  onClick={() => setActiveTab('services')}
                  className="glass-panel glass-panel-interactive p-6 text-left space-y-3 border-zinc-800 group"
                >
                  <div className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-400">01 / Services</div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">Leased Line & Fiber →</h3>
                  <p className="text-xs text-zinc-400">1:1 Dedicated Symmetrical Bandwidth & High Speed FTTH Broadband</p>
                </button>

                <button
                  onClick={() => setActiveTab('plans')}
                  className="glass-panel glass-panel-interactive p-6 text-left space-y-3 border-zinc-800 group"
                >
                  <div className="text-xs font-mono font-semibold uppercase tracking-wider text-purple-400">02 / Estimator</div>
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">Bandwidth Calculator →</h3>
                  <p className="text-xs text-zinc-400">Calculate exact internet speed requirements for home or enterprise</p>
                </button>

                <button
                  onClick={() => setActiveTab('coverage')}
                  className="glass-panel glass-panel-interactive p-6 text-left space-y-3 border-zinc-800 group"
                >
                  <div className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-400">03 / Feasibility</div>
                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">Ankleshwar GIDC Fiber →</h3>
                  <p className="text-xs text-zinc-400">Instant serviceability & optical node lookup for Phase 1-4 & Bharuch</p>
                </button>

              </div>
            </div>

            {/* Interactive Ankleshwar GIDC Coverage Map Topology Visualizer */}
            <GIDCCoverageVisualizer onOpenContact={() => setActiveTab('contact')} />

            {/* 4-Step Animated Connection Process Timeline */}
            <ProcessTimeline onOpenContact={() => setActiveTab('contact')} />

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
          </div>
        )}

        {activeTab === 'contact' && (
          <div className="pt-24 animate-fadeIn">
            <ContactSection />
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
