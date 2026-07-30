import React, { useState, useEffect } from 'react';
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
import { LayoutGrid, Sparkles } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('home'); // home, services, plans, coverage, portal, about, contact
  const [theme, setTheme] = useState('cyber'); // cyber, executive, synthwave
  const [layoutMode, setLayoutMode] = useState('rich'); // rich, compact
  const [speedTestOpen, setSpeedTestOpen] = useState(false);
  const [policyModalOpen, setPolicyModalOpen] = useState(false);
  const [activePolicyDoc, setActivePolicyDoc] = useState('Terms & Conditions');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const handleOpenPolicy = (docName) => {
    setActivePolicyDoc(docName || 'Terms & Conditions');
    setPolicyModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[var(--bg-dark)] text-[var(--text-main)] selection:bg-cyan-500 selection:text-black flex flex-col justify-between overflow-x-hidden transition-colors duration-300">
      
      {/* Navbar with Tab Controller & Theme Switcher */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenSpeedTest={() => setSpeedTestOpen(true)}
        onOpenPolicy={handleOpenPolicy}
        currentTheme={theme}
        setTheme={setTheme}
      />

      {/* Main View Router */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <div className="animate-fadeIn">
            
            {/* View Style Mode Switcher Bar */}
            <div className="pt-24 pb-2 container flex justify-end">
              <div className="inline-flex items-center gap-2 bg-slate-900/80 border border-slate-800 p-1 rounded-xl text-xs font-bold">
                <span className="px-2 text-slate-400 text-[10px] uppercase font-mono">Layout Style:</span>
                <button
                  onClick={() => setLayoutMode('rich')}
                  className={`px-3 py-1 rounded-lg flex items-center gap-1.5 transition-all ${
                    layoutMode === 'rich' ? 'bg-cyan-500 text-black font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Futuristic Hero</span>
                </button>
                <button
                  onClick={() => setLayoutMode('compact')}
                  className={`px-3 py-1 rounded-lg flex items-center gap-1.5 transition-all ${
                    layoutMode === 'compact' ? 'bg-cyan-500 text-black font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <LayoutGrid className="w-3.5 h-3.5" />
                  <span>Executive Grid</span>
                </button>
              </div>
            </div>

            {layoutMode === 'rich' ? (
              <Hero
                onOpenSpeedTest={() => setSpeedTestOpen(true)}
                onOpenContact={() => setActiveTab('contact')}
                onExploreServices={() => setActiveTab('services')}
              />
            ) : (
              /* Executive Compact Dashboard Style View */
              <div className="container py-12 space-y-12">
                <div className="text-center space-y-4 max-w-3xl mx-auto">
                  <div className="badge-tag">Technosys Executive Overview</div>
                  <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
                    Next-Gen ISP Solutions for <span className="gradient-text">Ankleshwar GIDC</span>
                  </h1>
                  <p className="text-slate-300 text-base">
                    Symmetrical Gigabit Fiber Broadband, 1:1 Dedicated Leased Lines, and 24/7 Enterprise SLA Support.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="glass-panel p-6 space-y-4 border-cyan-500/30 hover:border-cyan-400 transition-all hover:-translate-y-2">
                    <div className="text-3xl">🚀</div>
                    <h3 className="text-xl font-bold text-white">Dedicated ILL</h3>
                    <p className="text-xs text-slate-300">1:1 Unthrottled Symmetrical Bandwidth with 99.9% SLA Guarantee.</p>
                    <button onClick={() => setActiveTab('services')} className="text-xs font-bold text-cyan-400 hover:underline">View Leased Line →</button>
                  </div>
                  <div className="glass-panel p-6 space-y-4 border-purple-500/30 hover:border-purple-400 transition-all hover:-translate-y-2">
                    <div className="text-3xl">📡</div>
                    <h3 className="text-xl font-bold text-white">Gigabit FTTH</h3>
                    <p className="text-xs text-slate-300">Ultra-fast Fiber optic broadband up to 1000 Mbps for home & commercial.</p>
                    <button onClick={() => setActiveTab('services')} className="text-xs font-bold text-purple-400 hover:underline">View Broadband →</button>
                  </div>
                  <div className="glass-panel p-6 space-y-4 border-emerald-500/30 hover:border-emerald-400 transition-all hover:-translate-y-2">
                    <div className="text-3xl">⚡</div>
                    <h3 className="text-xl font-bold text-white">Live Speed Test</h3>
                    <p className="text-xs text-slate-300">Instant latency & bandwidth diagnostics powered by HTML5 engine.</p>
                    <button onClick={() => setSpeedTestOpen(true)} className="text-xs font-bold text-emerald-400 hover:underline">Launch Test Now →</button>
                  </div>
                  <div className="glass-panel p-6 space-y-4 border-indigo-500/30 hover:border-indigo-400 transition-all hover:-translate-y-2">
                    <div className="text-3xl">🏢</div>
                    <h3 className="text-xl font-bold text-white">GIDC Coverage</h3>
                    <p className="text-xs text-slate-300">Feasibility checker for Ankleshwar Phase 1-4, Panoli & Bharuch.</p>
                    <button onClick={() => setActiveTab('coverage')} className="text-xs font-bold text-indigo-400 hover:underline">Check Pincode →</button>
                  </div>
                </div>
              </div>
            )}

            {/* Quick Teaser Cards Strip */}
            <div className="container py-8 pb-16">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                <button
                  onClick={() => setActiveTab('services')}
                  className="glass-panel glass-panel-interactive p-6 text-left space-y-2 border-cyan-500/20 group"
                >
                  <div className="text-xs font-bold uppercase tracking-wider text-cyan-400">Our Services</div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">Leased Line & Fiber →</h3>
                  <p className="text-xs text-slate-400">1:1 Dedicated Symmetrical Bandwidth & High Speed FTTH</p>
                </button>

                <button
                  onClick={() => setActiveTab('plans')}
                  className="glass-panel glass-panel-interactive p-6 text-left space-y-2 border-purple-500/20 group"
                >
                  <div className="text-xs font-bold uppercase tracking-wider text-purple-400">Bandwidth Estimator</div>
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">Find Your Plan →</h3>
                  <p className="text-xs text-slate-400">Calculate exact speed requirements for home or enterprise</p>
                </button>

                <button
                  onClick={() => setActiveTab('coverage')}
                  className="glass-panel glass-panel-interactive p-6 text-left space-y-2 border-emerald-500/20 group"
                >
                  <div className="text-xs font-bold uppercase tracking-wider text-emerald-400">Feasibility Checker</div>
                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">Ankleshwar GIDC Fiber →</h3>
                  <p className="text-xs text-slate-400">Instant serviceability lookup for Phase 1-4 & Bharuch</p>
                </button>

              </div>
            </div>
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

      {/* PWA Install Notification Prompt */}
      <PWAInstallBanner />
    </div>
  );
}
