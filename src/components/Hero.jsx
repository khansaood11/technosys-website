import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Gauge, CheckCircle2, FileText, Sparkles, Download, Check } from 'lucide-react';

export default function Hero({ onOpenSpeedTest, onOpenContact, onExploreServices }) {
  const [downloadingBrochure, setDownloadingBrochure] = useState(false);

  // Typewriter heading text effect
  const phrases = [
    "Unrivaled Symmetrical Fiber.",
    "1:1 Dedicated Leased Lines.",
    "99.9% SLA Guaranteed Speed.",
    "Ankleshwar GIDC Fiber Node."
  ];

  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[textIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % phrases.length);
      } else {
        setDisplayText(
          currentPhrase.substring(
            0,
            isDeleting ? displayText.length - 1 : displayText.length + 1
          )
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, textIndex]);

  const handleDownloadProfile = () => {
    setDownloadingBrochure(true);
    setTimeout(() => {
      const link = document.createElement('a');
      link.href = 'data:text/plain;charset=utf-8,Technosys%20Teleservices%20(STPL)%20Corporate%20ISP%20Profile%20-%201:1%20Dedicated%20Leased%20Lines%20%26%20GIDC%20Node%20Coverage';
      link.download = 'Technosys_Corporate_ISP_Profile_2026.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setDownloadingBrochure(false);
    }, 1000);
  };

  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-40 md:pb-28 overflow-hidden border-b border-zinc-800/60">
      {/* 1. Animated Slow Aurora Background */}
      <div className="aurora-bg"></div>

      {/* 2. Grid Overlay */}
      <div className="tech-grid-bg"></div>

      {/* 3. Animated Optical Fiber Path in Background (●────●────●────●) */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-30">
        <svg className="w-full h-full" viewBox="0 0 1200 600" fill="none">
          <path d="M 100 200 Q 400 100 700 300 T 1200 250" stroke="rgba(0, 240, 255, 0.2)" strokeWidth="2" strokeDasharray="6 6" />
          <circle cx="100" cy="200" r="4" fill="#00F0FF" className="animate-ping" />
          <circle cx="400" cy="150" r="4" fill="#10B981" />
          <circle cx="700" cy="300" r="4" fill="#00F0FF" />
          <circle cx="1000" cy="220" r="4" fill="#8B5CF6" />
        </svg>
      </div>

      {/* Reduced Glow Orbs */}
      <div className="glow-orb glow-cyan w-[400px] h-[400px] -top-20 -left-20 opacity-15"></div>
      <div className="glow-orb glow-purple w-[350px] h-[350px] bottom-0 -right-20 opacity-15"></div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* 16th Anniversary Flagship Celebration Ribbon */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-500/10 via-cyan-500/10 to-indigo-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono font-medium shadow-lg backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-amber-400 animate-spin" style={{ animationDuration: '8s' }} />
              <span className="font-bold text-white">Celebrating 16 Years</span>
              <span className="text-zinc-500">•</span>
              <span>Trusted Connectivity (2010 — 2026)</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/90 border border-zinc-800 text-zinc-300 text-xs font-mono font-medium shadow-md ml-0 sm:ml-2">
              <span className="live-indicator"></span>
              <span className="truncate max-w-[200px] sm:max-w-none">Ankleshwar GIDC & Bharuch Premier ISP</span>
              <span className="text-zinc-600">|</span>
              <span className="text-cyan-400 font-semibold shrink-0">99.9% SLA</span>
            </div>

            {/* Heading with Fixed Height Typewriter Single Line */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-zinc-50 tracking-tight font-heading space-y-1">
              <div className="text-white block">Dedicated Connectivity.</div>
              <div className="h-[44px] sm:h-[56px] lg:h-[64px] flex items-center overflow-hidden">
                <span className="gradient-text font-mono tracking-normal text-cyan-400 border-r-2 border-cyan-400 pr-1 animate-pulse text-2xl sm:text-3xl lg:text-4xl whitespace-nowrap">
                  {displayText}
                </span>
              </div>
            </h1>

            <p className="text-base sm:text-lg text-zinc-300 max-w-xl font-normal leading-[1.75]">
              Sparkline Technosys Pvt. Ltd. (STPL) powers Ankleshwar & Bharuch enterprises with guaranteed <strong className="text-white font-semibold">1:1 Dedicated Internet Leased Lines</strong>, high-speed FTTH Broadband, and 24/7 Support NOC.
            </p>

            {/* Feature Tags */}
            <div className="flex flex-wrap gap-2 pt-1 text-xs text-zinc-300 font-mono">
              <span className="px-2.5 py-1 rounded-md bg-zinc-900/80 border border-zinc-800 flex items-center gap-1.5 hover:border-cyan-500/40 transition-colors">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                1:1 Symmetrical Bandwidth
              </span>
              <span className="px-2.5 py-1 rounded-md bg-zinc-900/80 border border-zinc-800 flex items-center gap-1.5 hover:border-cyan-500/40 transition-colors">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                Ankleshwar Phase 1-4 Fiber
              </span>
              <span className="px-2.5 py-1 rounded-md bg-zinc-900/80 border border-zinc-800 flex items-center gap-1.5 hover:border-cyan-500/40 transition-colors">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                24/7 Dedicated Support
              </span>
            </div>

            {/* Action CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <button onClick={onOpenContact} className="btn-primary w-full sm:w-auto">
                <span>Request 1:1 Site Survey & Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button onClick={onExploreServices} className="btn-secondary w-full sm:w-auto">
                <span>View Plans & Services</span>
              </button>

              <button
                onClick={handleDownloadProfile}
                className="px-4 py-3 rounded-xl bg-zinc-900/90 border border-zinc-700 hover:border-emerald-500/50 text-emerald-400 text-xs font-semibold flex items-center justify-center gap-2 transition-all hover:scale-105 w-full sm:w-auto"
              >
                {downloadingBrochure ? (
                  <Check className="w-4 h-4 text-emerald-400 animate-bounce" />
                ) : (
                  <Download className="w-4 h-4 text-emerald-400" />
                )}
                <span>{downloadingBrochure ? 'Downloading...' : 'Corporate Profile (PDF)'}</span>
              </button>

              <button onClick={onOpenSpeedTest} className="px-4 py-3 rounded-xl bg-zinc-900/90 border border-zinc-800 hover:border-cyan-500/40 text-cyan-400 text-xs font-semibold flex items-center justify-center gap-2 transition-all hover:scale-105 w-full sm:w-auto">
                <Gauge className="w-4 h-4 text-cyan-400 animate-pulse" />
                <span>Run Speed Test</span>
              </button>
            </div>

            {/* Floating Statistics Counter Strip */}
            <div className="pt-6 border-t border-zinc-800/80 grid grid-cols-3 gap-4 sm:gap-6">
              <motion.div whileHover={{ scale: 1.04, y: -2 }} className="cursor-pointer">
                <div className="text-lg sm:text-2xl font-bold text-amber-300 font-mono flex items-center">
                  <span>16</span>
                  <span className="text-xs text-amber-400 ml-1 font-sans">Years</span>
                </div>
                <div className="text-[11px] sm:text-xs text-zinc-400">Serving Gujarat Since 2010</div>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04, y: -2 }} className="cursor-pointer">
                <div className="text-lg sm:text-2xl font-bold text-cyan-400 font-mono">
                  <span>10 Gbps</span>
                </div>
                <div className="text-[11px] sm:text-xs text-zinc-400">Optical Core Capacity</div>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04, y: -2 }} className="cursor-pointer">
                <div className="text-lg sm:text-2xl font-bold text-emerald-400 font-mono">
                  <span>99.9%</span>
                </div>
                <div className="text-[11px] sm:text-xs text-zinc-400">Guaranteed SLA Uptime</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Vercel-Style Live Terminal & Network Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="glass-panel p-5 sm:p-6 border border-zinc-800 space-y-4 hover:border-cyan-500/40 transition-all">
              
              {/* Single-Line Terminal Window Header Bar */}
              <div className="flex items-center justify-between pb-3 border-b border-zinc-800 gap-2">
                <div className="flex items-center gap-1.5 overflow-hidden">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80 shrink-0"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 shrink-0"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 shrink-0"></div>
                  <span className="text-[10px] sm:text-xs font-mono text-zinc-400 ml-1 truncate">stpl-node-ankleshwar.sys</span>
                </div>
                <span className="text-[9px] sm:text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30 whitespace-nowrap shrink-0">
                  ONLINE • 2.4ms Ping
                </span>
              </div>

              {/* Terminal Details */}
              <div className="bg-black/90 p-4 rounded-lg border border-zinc-800/80 font-mono text-xs text-zinc-300 space-y-2">
                <div className="text-zinc-500 text-[10px]">// Technosys Optical Fiber Backbone Diagnostics</div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">&gt; ISP Node:</span>
                  <span className="text-zinc-100">STPL Ankleshwar GIDC Main PoP</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">&gt; Connection Type:</span>
                  <span className="text-cyan-400">1:1 Symmetrical Dedicated Fiber</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">&gt; Optical Link SLA:</span>
                  <span className="text-emerald-400">99.9% Contention-Free</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">&gt; Symmetrical Speed:</span>
                  <span className="text-white font-bold">100 Mbps - 10 Gbps</span>
                </div>
              </div>

              {/* Quick Action */}
              <button
                onClick={onOpenSpeedTest}
                className="w-full py-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-cyan-400 font-mono font-semibold text-xs transition-colors flex items-center justify-center gap-2"
              >
                <Gauge className="w-4 h-4 text-cyan-400" />
                <span>Test Real Network Speed →</span>
              </button>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
