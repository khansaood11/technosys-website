import React, { useState, useEffect } from 'react';
import { Phone, Gauge, Menu, X } from 'lucide-react';
import TechnosysLogo from './TechnosysLogo';

export default function Navbar({ activeTab, setActiveTab, onOpenSpeedTest, onOpenPolicy }) {
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${scrolled ? 'bg-[#09090B]/95 backdrop-blur-md border-b border-zinc-800 py-3 shadow-xl' : 'bg-[#09090B]/80 backdrop-blur-sm py-4 border-b border-zinc-900'}`}>
      
      {/* Top Info Bar */}
      <div className="hidden lg:block border-b border-zinc-900 pb-2 mb-2 text-xs text-zinc-400 font-mono">
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <span className="live-indicator"></span>
              <span className="text-zinc-300">STPL Network: <span className="text-emerald-400 font-bold">100% Operational (99.9% SLA)</span></span>
            </span>
            <span className="text-zinc-800">|</span>
            <span>Ankleshwar GIDC & Bharuch District Premier ISP</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="tel:+917043539045" className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors font-bold text-white">
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              <span>+91 70435 39045</span>
            </a>
            <a href="mailto:sales@technosysonline.com" className="hover:text-cyan-400 transition-colors">
              sales@technosysonline.com
            </a>
            <button onClick={() => onOpenPolicy('Terms & Conditions')} className="hover:text-cyan-400 transition-colors">
              Terms & Policy
            </button>
          </div>
        </div>
      </div>

      <div className="container flex items-center justify-between">
        
        {/* Brand Logo */}
        <button onClick={() => setActiveTab('home')} className="text-left focus:outline-none">
          <TechnosysLogo />
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 text-xs font-semibold text-zinc-300 bg-zinc-900/80 p-1.5 rounded-xl border border-zinc-800">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeTab === item.id
                  ? 'bg-zinc-100 text-zinc-950 font-bold shadow-sm'
                  : 'text-zinc-300 hover:text-white hover:bg-zinc-800/80'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Header Controls: Speed Test & Hotline */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenSpeedTest}
            className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-cyan-400 text-xs font-semibold tracking-wide transition-all"
          >
            <Gauge className="w-4 h-4 text-cyan-400" />
            <span>Speed Test</span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel mt-3 mx-4 p-5 flex flex-col gap-2 text-zinc-200 animate-fadeIn border border-zinc-800">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => { setActiveTab(item.id); setMobileMenuOpen(false); }}
              className={`text-left py-2.5 px-3 rounded-lg text-sm font-semibold transition-colors ${
                activeTab === item.id ? 'bg-zinc-800 text-cyan-400 border border-zinc-700' : 'hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-3 border-t border-zinc-800 flex flex-col gap-2">
            <a
              href="tel:+917043539045"
              className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold text-xs"
            >
              <Phone className="w-4 h-4" />
              <span>Call +91 70435 39045</span>
            </a>

            <button
              onClick={() => { setMobileMenuOpen(false); onOpenSpeedTest(); }}
              className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-zinc-900 border border-zinc-700 text-cyan-400 font-semibold text-xs"
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
