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
        ? 'bg-white/95 dark:bg-[#09090B]/95 backdrop-blur-md border-b border-slate-200 dark:border-zinc-800 py-3 shadow-xl'
        : 'bg-white/80 dark:bg-[#09090B]/80 backdrop-blur-sm py-4 border-b border-slate-200 dark:border-zinc-900'
    }`}>
      
      {/* Top Info Bar */}
      <div className="hidden lg:block border-b border-slate-200 dark:border-zinc-900 pb-2 mb-2 text-xs text-slate-600 dark:text-zinc-400 font-mono">
        <div className="w-full px-6 flex justify-between items-center max-w-[1440px] mx-auto">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <span className="live-indicator"></span>
              <span className="text-slate-800 dark:text-zinc-300">STPL Network: <span className="text-emerald-600 dark:text-emerald-400 font-bold">100% Operational (99.9% SLA)</span></span>
            </span>
            <span className="text-slate-300 dark:text-zinc-800">|</span>
            <span>Ankleshwar GIDC & Bharuch District Premier ISP</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="tel:+917043539045" className="flex items-center gap-1.5 hover:text-sky-600 dark:hover:text-cyan-400 transition-colors font-bold text-slate-900 dark:text-white">
              <Phone className="w-3.5 h-3.5 text-sky-600 dark:text-cyan-400" />
              <span>+91 70435 39045</span>
            </a>
            <a href="mailto:sales@technosysonline.com" className="hover:text-sky-600 dark:hover:text-cyan-400 transition-colors">
              sales@technosysonline.com
            </a>
            <button onClick={() => onOpenPolicy('Terms & Conditions')} className="hover:text-sky-600 dark:hover:text-cyan-400 transition-colors">
              Terms & Policy
            </button>
          </div>
        </div>
      </div>

      <div className="w-full px-4 sm:px-8 max-w-[1440px] mx-auto flex items-center justify-between gap-4">
        
        {/* Brand Logo */}
        <button onClick={() => setActiveTab('home')} className="text-left focus:outline-none shrink-0">
          <TechnosysLogo />
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 text-xs font-semibold text-slate-700 dark:text-zinc-300 bg-slate-100/80 dark:bg-zinc-900/90 p-1.5 rounded-xl border border-slate-200 dark:border-zinc-800">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`px-3.5 py-1.5 rounded-lg transition-all ${
                activeTab === item.id
                  ? 'bg-slate-900 text-white dark:bg-zinc-100 dark:text-zinc-950 font-bold shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 dark:text-zinc-300 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-zinc-800/80'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Header Controls: Light/Dark Theme Switcher, Speed Test & Connect Now CTA */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          
          {/* Light / Dark Mode Toggle Button */}
          <button
            onClick={toggleTheme}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 border border-slate-200 dark:border-zinc-700 text-xs font-bold text-slate-700 dark:text-amber-300 transition-all"
            title="Toggle Light / Dark Mode Theme"
          >
            {theme === 'light' ? (
              <>
                <Sun className="w-4 h-4 text-amber-500 fill-amber-400" />
                <span>Light</span>
              </>
            ) : (
              <>
                <Moon className="w-4 h-4 text-cyan-400 fill-cyan-400" />
                <span>Dark</span>
              </>
            )}
          </button>

          {/* Speed Test Button */}
          <button
            onClick={onOpenSpeedTest}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-zinc-900 hover:bg-slate-200 dark:hover:bg-zinc-800 border border-slate-200 dark:border-zinc-700 text-sky-600 dark:text-cyan-400 text-xs font-semibold tracking-wide transition-all"
          >
            <Gauge className="w-4 h-4" />
            <span>Speed Test</span>
          </button>

          {/* CONNECT NOW GRADIENT CTA BUTTON */}
          <button
            onClick={() => setActiveTab('contact')}
            className={`relative p-[1.5px] rounded-xl transition-all duration-300 hover:scale-105 ${
              activeTab === 'contact'
                ? 'ring-2 ring-sky-500 dark:ring-cyan-400 ring-offset-2 ring-offset-white dark:ring-offset-black'
                : 'hover:shadow-lg hover:shadow-sky-500/25 dark:hover:shadow-cyan-500/25'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-500 dark:from-cyan-500 dark:via-red-500 dark:to-indigo-500 rounded-xl animate-gradient-x"></div>
            <div className="relative px-4 py-2 bg-slate-900 dark:bg-zinc-950 rounded-[10px] flex items-center gap-2 font-bold text-xs text-white group">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
              <span className="gradient-text font-heading">Connect Now</span>
              <ArrowRight className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>

        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-700 dark:text-amber-300"
          >
            {theme === 'light' ? <Sun className="w-4 h-4 text-amber-500" /> : <Moon className="w-4 h-4 text-cyan-400" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-700 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-white"
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
            className="md:hidden bg-white dark:bg-[#09090B] border-b border-slate-200 dark:border-zinc-800 px-6 py-6 flex flex-col gap-2.5 text-slate-900 dark:text-zinc-200 shadow-2xl w-full"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => { setActiveTab(item.id); setMobileMenuOpen(false); }}
                className={`text-left py-3 px-4 rounded-xl text-sm font-semibold transition-all ${
                  activeTab === item.id
                    ? 'bg-slate-100 dark:bg-zinc-800 text-sky-600 dark:text-cyan-400 border border-slate-200 dark:border-cyan-500/30 font-bold'
                    : 'hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-zinc-900'
                }`}
              >
                {item.label}
              </button>
            ))}

            {/* CONNECT NOW MOBILE CTA */}
            <div className="pt-2">
              <button
                onClick={() => { setActiveTab('contact'); setMobileMenuOpen(false); }}
                className="w-full relative p-[1.5px] rounded-xl overflow-hidden shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-500 dark:from-cyan-500 dark:via-red-500 dark:to-indigo-500"></div>
                <div className="relative py-3 px-4 bg-slate-900 dark:bg-zinc-950 rounded-[10px] flex items-center justify-center gap-2 font-bold text-sm text-white">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  <MessageSquare className="w-4 h-4 text-cyan-400" />
                  <span className="gradient-text font-heading">Connect Now</span>
                  <ArrowRight className="w-4 h-4 text-cyan-400" />
                </div>
              </button>
            </div>

            <div className="pt-3 border-t border-slate-200 dark:border-zinc-800/80 flex flex-col gap-2.5">
              <a
                href="tel:+917043539045"
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 font-bold text-xs"
              >
                <Phone className="w-4 h-4" />
                <span>Call Hotline: +91 70435 39045</span>
              </a>

              <button
                onClick={() => { setMobileMenuOpen(false); onOpenSpeedTest(); }}
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 text-sky-600 dark:text-cyan-400 font-semibold text-xs"
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
