import React, { useState, useEffect } from 'react';
import { Phone, Gauge, Menu, X } from 'lucide-react';
import TechnosysLogo from './TechnosysLogo';
import ThemeSwitcher from './ThemeSwitcher';

export default function Navbar({ activeTab, setActiveTab, onOpenSpeedTest, onOpenPolicy, currentTheme, setTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'plans', label: 'Plan Estimator' },
    { id: 'coverage', label: 'Coverage' },
    { id: 'portal', label: 'My Portal' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Connect Now' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#060913]/95 backdrop-blur-md border-b border-cyan-500/20 py-3 shadow-2xl' : 'bg-[#060913]/80 backdrop-blur-sm py-4 border-b border-white/5'}`}>
      
      {/* Top Info Bar */}
      <div className="hidden lg:block border-b border-white/5 pb-2 mb-2 text-xs text-slate-400">
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <span className="live-indicator"></span>
              <span className="text-slate-300 font-medium">STPL Status: <span className="text-emerald-400 font-bold">100% Operational (99.9% SLA)</span></span>
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400">Ankleshwar GIDC & Bharuch District Premier ISP</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="tel:+917043539045" className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors font-mono font-bold text-white">
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              <span>+91 70435 39045</span>
            </a>
            <a href="mailto:sales@technosysonline.com" className="hover:text-cyan-400 transition-colors">
              sales@technosysonline.com
            </a>
            <button onClick={() => onOpenPolicy('Terms & Conditions')} className="hover:text-cyan-400 transition-colors">
              Terms & Security
            </button>
          </div>
        </div>
      </div>

      <div className="container flex items-center justify-between">
        
        {/* Brand Logo with Redefined T Mark */}
        <button onClick={() => setActiveTab('home')} className="text-left focus:outline-none">
          <TechnosysLogo />
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 text-sm font-medium text-slate-300 bg-slate-900/60 p-1.5 rounded-xl border border-slate-800">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all ${
                activeTab === item.id
                  ? 'bg-cyan-500 text-black shadow-md shadow-cyan-500/20 scale-105'
                  : 'text-slate-300 hover:text-cyan-400 hover:bg-slate-800/60'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Header Controls: Theme Switcher + Speed Test */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeSwitcher currentTheme={currentTheme} setTheme={setTheme} />

          <button
            onClick={onOpenSpeedTest}
            className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20 text-xs font-semibold tracking-wide transition-all hover:scale-105"
          >
            <Gauge className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span>Speed Test</span>
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeSwitcher currentTheme={currentTheme} setTheme={setTheme} />
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel mt-3 mx-4 p-5 flex flex-col gap-2 text-slate-200 animate-fadeIn border border-cyan-500/20">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => { setActiveTab(item.id); setMobileMenuOpen(false); }}
              className={`text-left py-2.5 px-3 rounded-lg text-sm font-semibold transition-colors ${
                activeTab === item.id ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' : 'hover:text-cyan-400'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <a
              href="tel:+917043539045"
              className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold text-xs"
            >
              <Phone className="w-4 h-4" />
              <span>Call +91 70435 39045</span>
            </a>

            <button
              onClick={() => { setMobileMenuOpen(false); onOpenSpeedTest(); }}
              className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-medium text-xs"
            >
              <Gauge className="w-4 h-4" />
              <span>Launch Live Speed Test</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
