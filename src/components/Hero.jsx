import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Gauge, CheckCircle2, Radio, Activity, Zap, Server } from 'lucide-react';

export default function Hero({ onOpenSpeedTest, onOpenContact, onExploreServices }) {
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

  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-zinc-800/80">
      {/* Background Gradients & Grid */}
      <div className="tech-grid-bg"></div>
      <div className="glow-orb glow-cyan w-[500px] h-[500px] -top-20 -left-20 animate-pulse"></div>
      <div className="glow-orb glow-purple w-[400px] h-[400px] bottom-0 -right-20"></div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-mono font-medium">
              <span className="live-indicator"></span>
              <span>Ankleshwar GIDC & Bharuch Premier ISP</span>
              <span className="text-zinc-600">|</span>
              <span className="text-cyan-400 font-semibold">99.9% SLA Uptime</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-zinc-50 tracking-tight leading-[1.08] font-heading min-h-[140px] sm:min-h-[160px]">
              Dedicated Connectivity. <br />
              <span className="gradient-text font-mono tracking-normal text-cyan-400 border-r-2 border-cyan-400 pr-1 animate-pulse">
                {displayText}
              </span>
            </h1>

            <p className="text-base sm:text-lg text-zinc-400 max-w-xl font-normal leading-relaxed">
              Sparkline Technosys Pvt. Ltd. (STPL) powers Ankleshwar & Bharuch enterprises with guaranteed <strong className="text-zinc-200 font-semibold">1:1 Dedicated Internet Leased Lines</strong>, high-speed FTTH Broadband, and 24/7 Support NOC.
            </p>

            {/* Feature Tags */}
            <div className="flex flex-wrap gap-2 pt-1 text-xs text-zinc-300 font-mono">
              <span className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 flex items-center gap-1.5 hover:border-cyan-500/40 transition-colors">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                1:1 Symmetrical Bandwidth
              </span>
              <span className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 flex items-center gap-1.5 hover:border-cyan-500/40 transition-colors">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                Ankleshwar Phase 1-4 Fiber
              </span>
              <span className="px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 flex items-center gap-1.5 hover:border-cyan-500/40 transition-colors">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                24/7 Dedicated Support
              </span>
            </div>

            {/* Action CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <button onClick={onOpenContact} className="btn-primary">
                <span>Connect Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button onClick={onExploreServices} className="btn-secondary">
                <span>View Plans & Services</span>
              </button>

              <button onClick={onOpenSpeedTest} className="px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-cyan-500/40 text-cyan-400 text-xs font-semibold flex items-center gap-2 transition-all hover:scale-105">
                <Gauge className="w-4 h-4 text-cyan-400 animate-pulse" />
                <span>Run Speed Test</span>
              </button>
            </div>

            {/* Animated Statistics Counter Strip */}
            <div className="pt-6 border-t border-zinc-800/80 grid grid-cols-3 gap-6">
              <motion.div whileHover={{ scale: 1.03 }}>
                <div className="text-xl sm:text-2xl font-bold text-zinc-100 font-mono flex items-center">
                  <span>15+</span>
                  <span className="text-xs text-cyan-400 ml-1 font-sans">Years</span>
                </div>
                <div className="text-xs text-zinc-400">ISP Telecom Expertise</div>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }}>
                <div className="text-xl sm:text-2xl font-bold text-cyan-400 font-mono">
                  <span>10 Gbps</span>
                </div>
                <div className="text-xs text-zinc-400">Optical Core Capacity</div>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }}>
                <div className="text-xl sm:text-2xl font-bold text-emerald-400 font-mono">
                  <span>99.9%</span>
                </div>
                <div className="text-xs text-zinc-400">Guaranteed SLA Uptime</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Vercel-Style Live Terminal & Network Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="glass-panel p-6 border border-zinc-800 space-y-4 hover:border-cyan-500/40 transition-all hover:-translate-y-1">
              
              {/* Terminal Window Bar */}
              <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  <span className="text-xs font-mono text-zinc-400 ml-2">stpl-node-ankleshwar.sys</span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
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
