import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Gauge, Menu, X, ArrowRight, MessageSquare } from 'lucide-react';
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
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${scrolled ? 'bg-[#09090B]/95 backdrop-blur-md border-b border-zinc-800 py-3 shadow-xl' : 'bg-[#09090B]/80 backdrop-blur-sm py-4 border-b border-zinc-900'}`}>
      
      {/* Top Info Bar */}
      <div className="hidden lg:block border-b border-zinc-900 pb-2 mb-2 text-xs text-zinc-400 font-mono">
        <div className="w-full px-6 flex justify-between items-center max-w-[1440px] mx-auto">
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

      <div className="w-full px-4 sm:px-8 max-w-[1440px] mx-auto flex items-center justify-between gap-4">
        
        {/* Brand Logo */}
        <button onClick={() => setActiveTab('home')} className="text-left focus:outline-none shrink-0">
          <TechnosysLogo />
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 text-xs font-semibold text-zinc-300 bg-zinc-900/90 p-1.5 rounded-xl border border-zinc-800">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`px-3.5 py-1.5 rounded-lg transition-all ${
                activeTab === item.id
                  ? 'bg-zinc-100 text-zinc-950 font-bold shadow-sm'
                  : 'text-zinc-300 hover:text-white hover:bg-zinc-800/80'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Header Controls: Speed Test & SEPARATELY DESIGNED CONNECT NOW BUTTON */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          
          {/* Speed Test Button */}
          <button
            onClick={onOpenSpeedTest}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-cyan-400 text-xs font-semibold tracking-wide transition-all hover:border-cyan-500/40"
          >
            <Gauge className="w-4 h-4 text-cyan-400" />
            <span>Speed Test</span>
          </button>

          {/* SEPARATELY DESIGNED "CONNECT NOW" HIGH-IMPACT GRADIENT CTA BUTTON */}
          <button
            onClick={() => setActiveTab('contact')}
            className={`relative p-[1.5px] rounded-xl transition-all duration-300 hover:scale-105 ${
              activeTab === 'contact'
                ? 'ring-2 ring-cyan-400 ring-offset-2 ring-offset-black'
                : 'hover:shadow-lg hover:shadow-cyan-500/25'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-red-500 to-indigo-500 rounded-xl animate-gradient-x"></div>
            <div className="relative px-4 py-2 bg-zinc-950 rounded-[10px] flex items-center gap-2 font-bold text-xs text-white group">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
              <span className="gradient-text font-heading">Connect Now</span>
              <ArrowRight className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>

        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

      </div>

      {/* Full-Width Animated Mobile Drawer Side Slide Effect */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="md:hidden bg-[#09090B] border-b border-zinc-800 px-6 py-6 flex flex-col gap-2.5 text-zinc-200 shadow-2xl w-full"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => { setActiveTab(item.id); setMobileMenuOpen(false); }}
                className={`text-left py-3 px-4 rounded-xl text-sm font-semibold transition-all ${
                  activeTab === item.id ? 'bg-zinc-800 text-cyan-400 border border-cyan-500/30' : 'hover:text-white hover:bg-zinc-900'
                }`}
              >
                {item.label}
              </button>
            ))}

            {/* SEPARATELY DESIGNED "CONNECT NOW" MOBILE CTA BUTTON */}
            <div className="pt-2">
              <button
                onClick={() => { setActiveTab('contact'); setMobileMenuOpen(false); }}
                className="w-full relative p-[1.5px] rounded-xl overflow-hidden shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-red-500 to-indigo-500"></div>
                <div className="relative py-3 px-4 bg-zinc-950 rounded-[10px] flex items-center justify-center gap-2 font-bold text-sm text-white">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  <MessageSquare className="w-4 h-4 text-cyan-400" />
                  <span className="gradient-text font-heading">Connect Now</span>
                  <ArrowRight className="w-4 h-4 text-cyan-400" />
                </div>
              </button>
            </div>

            <div className="pt-3 border-t border-zinc-800/80 flex flex-col gap-2.5">
              <a
                href="tel:+917043539045"
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold text-xs"
              >
                <Phone className="w-4 h-4" />
                <span>Call Hotline: +91 70435 39045</span>
              </a>

              <button
                onClick={() => { setMobileMenuOpen(false); onOpenSpeedTest(); }}
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-zinc-900 border border-zinc-700 text-cyan-400 font-semibold text-xs"
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
