import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Gauge, Menu, X, ArrowRight, MessageSquare, Sun, Moon } from 'lucide-react';
import TechnosysLogo from './TechnosysLogo';

export default function Navbar({
  activeTab,
  setActiveTab,
  onOpenSpeedTest,
  onOpenPolicy,
  theme,
  toggleTheme
}) {
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
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
      scrolled
        ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 py-3 shadow-sm'
        : 'bg-white/90 backdrop-blur-sm py-3.5 border-b border-slate-200/80'
    }`}>
      
      {/* Top Info Bar */}
      <div className="hidden lg:block border-b border-slate-200/80 pb-2 mb-2 text-xs text-slate-600 font-mono">
        <div className="w-full px-6 flex justify-between items-center max-w-[1280px] mx-auto">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <span className="live-indicator"></span>
              <span className="text-slate-800">STPL Network: <span className="text-emerald-600 font-bold">100% Operational (99.9% SLA)</span></span>
            </span>
            <span className="text-slate-300">|</span>
            <span className="text-slate-600">Ankleshwar GIDC & Bharuch District Premier ISP</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="tel:+917043539045" className="flex items-center gap-1.5 hover:text-blue-600 transition-colors font-bold text-slate-900">
              <Phone className="w-3.5 h-3.5 text-blue-600" />
              <span>+91 70435 39045</span>
            </a>
            <a href="mailto:sales@technosysonline.com" className="hover:text-blue-600 transition-colors">
              sales@technosysonline.com
            </a>
            <button onClick={() => onOpenPolicy('Terms & Conditions')} className="hover:text-blue-600 transition-colors">
              Terms & Policy
            </button>
          </div>
        </div>
      </div>

      <div className="w-full px-4 sm:px-6 max-w-[1280px] mx-auto flex items-center justify-between gap-4">
        
        {/* Brand Logo */}
        <button onClick={() => setActiveTab('home')} className="text-left focus:outline-none shrink-0">
          <TechnosysLogo />
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 text-xs font-semibold text-slate-700 bg-slate-100/90 p-1.5 rounded-xl border border-slate-200/80">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`px-3.5 py-1.5 rounded-lg transition-all ${
                activeTab === item.id
                  ? 'bg-white text-blue-600 font-bold shadow-sm border border-slate-200/80'
                  : 'text-slate-700 hover:text-slate-900 hover:bg-white/60'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Header Controls: Speed Test & CONNECT NOW CTA */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          
          {/* Light / Dark Mode Toggle Button */}
          <button
            onClick={toggleTheme}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-xs font-bold text-slate-700 transition-all"
            title="Toggle Light / Dark Mode Theme"
          >
            {theme === 'light' ? (
              <>
                <Sun className="w-4 h-4 text-amber-500 fill-amber-400" />
                <span>Light</span>
              </>
            ) : (
              <>
                <Moon className="w-4 h-4 text-blue-600 fill-blue-600" />
                <span>Dark</span>
              </>
            )}
          </button>

          {/* Speed Test Button */}
          <button
            onClick={onOpenSpeedTest}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-blue-600 text-xs font-semibold tracking-wide transition-all"
          >
            <Gauge className="w-4 h-4" />
            <span>Speed Test</span>
          </button>

          {/* CONNECT NOW CTA BUTTON */}
          <button
            onClick={() => setActiveTab('contact')}
            className="btn-primary py-2 px-4 text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Connect Now</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-700"
          >
            {theme === 'light' ? <Sun className="w-4 h-4 text-amber-500" /> : <Moon className="w-4 h-4 text-blue-600" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Full-Width Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="md:hidden bg-white border-b border-slate-200 px-6 py-6 flex flex-col gap-2.5 text-slate-900 shadow-xl w-full"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => { setActiveTab(item.id); setMobileMenuOpen(false); }}
                className={`text-left py-3 px-4 rounded-xl text-sm font-semibold transition-all ${
                  activeTab === item.id
                    ? 'bg-slate-100 text-blue-600 border border-slate-200 font-bold'
                    : 'hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}

            {/* CONNECT NOW MOBILE CTA */}
            <div className="pt-2">
              <button
                onClick={() => { setActiveTab('contact'); setMobileMenuOpen(false); }}
                className="w-full btn-primary py-3 px-4 text-sm font-bold flex items-center justify-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <MessageSquare className="w-4 h-4" />
                <span>Connect Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="pt-3 border-t border-slate-200 flex flex-col gap-2.5">
              <a
                href="tel:+917043539045"
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 font-bold text-xs"
              >
                <Phone className="w-4 h-4" />
                <span>Call Hotline: +91 70435 39045</span>
              </a>

              <button
                onClick={() => { setMobileMenuOpen(false); onOpenSpeedTest(); }}
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-100 border border-slate-200 text-blue-600 font-semibold text-xs"
              >
                <Gauge className="w-4 h-4" />
                <span>Launch Live Speed Test</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
