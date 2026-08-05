import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, ShieldCheck, Star, Sparkles, Building2, Home, Headphones, Wifi } from 'lucide-react';

export default function ExecutiveHero({ onOpenContact, onExploreServices, onOpenSpeedTest }) {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-slate-50 dark:bg-[#060B18] border-b border-slate-200 dark:border-zinc-800/80">
      
      {/* Background Gradient Orbs & Subtle Grid */}
      <div className="aurora-bg"></div>
      <div className="tech-grid-bg"></div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Trust Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 dark:bg-cyan-500/10 border border-sky-500/30 dark:border-cyan-500/30 text-sky-700 dark:text-cyan-300 text-xs font-mono font-semibold shadow-sm backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-sky-600 dark:text-cyan-400 animate-pulse" />
              <span className="font-bold text-slate-900 dark:text-white">16+ Years Excellence</span>
              <span className="text-slate-400 dark:text-zinc-600">•</span>
              <span>Ankleshwar GIDC & Bharuch Premier ISP</span>
            </div>

            {/* Clear Business & Executive Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight font-heading leading-tight">
              High-Speed, Reliable Fiber Internet for <span className="gradient-text">Homes & Businesses</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
              Sparkline Technosys provides guaranteed 1:1 dedicated leased lines, ultra-fast home fiber broadband, and 24/7 local engineering support in Ankleshwar & Bharuch.
            </p>

            {/* Key Value Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs sm:text-sm font-semibold text-slate-700 dark:text-zinc-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>99.9% Network SLA Uptime</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-600 dark:text-cyan-400 shrink-0" />
                <span>Same-Day Local Technician Dispatch</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
                <span>1:1 Dedicated Symmetrical Speed</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Truly Unlimited Data (No FUP Caps)</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <button onClick={onOpenContact} className="btn-primary py-4 px-7 text-xs font-bold uppercase tracking-wider">
                <span>Get Installed Today</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button onClick={onExploreServices} className="btn-secondary py-4 px-7 text-xs font-bold uppercase tracking-wider">
                <span>View Simple Plans</span>
              </button>
            </div>

            {/* Social Proof Rating */}
            <div className="pt-6 border-t border-slate-200 dark:border-zinc-800 flex items-center gap-4 text-xs font-mono text-slate-600 dark:text-zinc-400">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div>
                <strong className="text-slate-900 dark:text-white font-bold">4.9 / 5.0 Rating</strong> by 1000+ Corporate & Domestic Clients
              </div>
            </div>

          </motion.div>

          {/* Right Clean Visual Cards Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 space-y-4"
          >
            {/* Corporate Internet Card */}
            <div className="glass-panel p-6 border-slate-200 dark:border-zinc-800 hover:border-sky-500/40 dark:hover:border-cyan-500/40 transition-all flex items-start gap-4">
              <div className="p-3.5 rounded-2xl bg-sky-500/10 dark:bg-cyan-500/10 border border-sky-500/30 dark:border-cyan-500/30 text-sky-600 dark:text-cyan-400 shrink-0">
                <Building2 className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-mono font-bold uppercase text-sky-600 dark:text-cyan-400">Enterprise Solution</span>
                <h3 className="text-base font-bold text-slate-900 dark:text-white font-heading">1:1 Dedicated Leased Lines</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">Guaranteed full speed 24/7 for Ankleshwar GIDC chemical plants & offices.</p>
              </div>
            </div>

            {/* Home Broadband Card */}
            <div className="glass-panel p-6 border-slate-200 dark:border-zinc-800 hover:border-indigo-500/40 transition-all flex items-start gap-4">
              <div className="p-3.5 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-600 dark:text-indigo-400 shrink-0">
                <Home className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-mono font-bold uppercase text-indigo-600 dark:text-indigo-400">Residential FTTH</span>
                <h3 className="text-base font-bold text-slate-900 dark:text-white font-heading">High-Speed Fiber Broadband</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">Buffer-free 4K streaming, gaming, and reliable work-from-home speeds.</p>
              </div>
            </div>

            {/* 24/7 NOC Support Card */}
            <div className="glass-panel p-6 border-slate-200 dark:border-zinc-800 hover:border-emerald-500/40 transition-all flex items-start gap-4">
              <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 shrink-0">
                <Headphones className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-mono font-bold uppercase text-emerald-600 dark:text-emerald-400">Local Ankleshwar NOC</span>
                <h3 className="text-base font-bold text-slate-900 dark:text-white font-heading">24/7 Direct Engineering Support</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">Direct connection to local engineers, not automated call queues.</p>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
