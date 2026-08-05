import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Star, Sparkles, Building2, Home, Shield, Headphones } from 'lucide-react';

export default function ExecutiveHero({ onOpenContact, onExploreServices }) {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-white dark:bg-[#060B18] border-b border-slate-100 dark:border-zinc-800/80">
      
      {/* Background Subtle Gradient & Grid */}
      <div className="aurora-bg"></div>
      <div className="tech-grid-bg"></div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Trust Pill Badge */}
            <div className="badge-tag">
              <Sparkles className="w-3.5 h-3.5" />
              <span>16+ Years Trusted Connectivity • Ankleshwar & Bharuch</span>
            </div>

            {/* Clear Business Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight font-heading leading-[1.15]">
              Reliable High-Speed Internet for <span className="gradient-text">Homes & Businesses</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
              Sparkline Technosys provides guaranteed 1:1 dedicated leased lines, ultra-fast home fiber broadband, and 24/7 local engineering support in Ankleshwar & Bharuch.
            </p>

            {/* Simple Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs sm:text-sm font-semibold text-slate-700 dark:text-zinc-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4.5 h-4.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>99.9% Network SLA Uptime</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4.5 h-4.5 text-blue-600 dark:text-cyan-400 shrink-0" />
                <span>Same-Day Local Technician Support</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4.5 h-4.5 text-indigo-600 dark:text-indigo-400 shrink-0" />
                <span>1:1 Dedicated Symmetrical Speed</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4.5 h-4.5 text-amber-500 shrink-0" />
                <span>Truly Unlimited Data (No FUP Caps)</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-3">
              <button onClick={onOpenContact} className="btn-primary py-3.5 px-7 text-xs font-bold uppercase tracking-wider">
                <span>Get Installed Today</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button onClick={onExploreServices} className="btn-secondary py-3.5 px-7 text-xs font-bold uppercase tracking-wider">
                <span>View Simple Plans</span>
              </button>
            </div>

            {/* Rating & Social Proof */}
            <div className="pt-6 border-t border-slate-100 dark:border-zinc-800 flex items-center gap-3 text-xs text-slate-600 dark:text-zinc-400">
              <div className="flex items-center gap-0.5 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div>
                <strong className="text-slate-900 dark:text-white font-bold">4.9 / 5 Rating</strong> by 1000+ Corporate & Domestic Customers
              </div>
            </div>

          </motion.div>

          {/* Right Clean Visual Cards Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 space-y-4"
          >
            {/* Corporate Internet Card */}
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-zinc-900/90 border border-slate-200/80 dark:border-zinc-800 hover:border-blue-500/40 transition-all flex items-start gap-4 shadow-sm hover:shadow-md">
              <div className="p-3.5 rounded-xl bg-blue-50 dark:bg-cyan-500/10 text-blue-600 dark:text-cyan-400 shrink-0 border border-blue-100 dark:border-cyan-500/20">
                <Building2 className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase text-blue-600 dark:text-cyan-400 tracking-wider">For Business & GIDC</span>
                <h3 className="text-base font-bold text-slate-900 dark:text-white font-heading">1:1 Dedicated Leased Lines</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">Guaranteed full speed 24/7 for offices and chemical plants.</p>
              </div>
            </div>

            {/* Home Broadband Card */}
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-zinc-900/90 border border-slate-200/80 dark:border-zinc-800 hover:border-indigo-500/40 transition-all flex items-start gap-4 shadow-sm hover:shadow-md">
              <div className="p-3.5 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 shrink-0 border border-indigo-100 dark:border-indigo-500/20">
                <Home className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase text-indigo-600 dark:text-indigo-400 tracking-wider">For Home & WFH</span>
                <h3 className="text-base font-bold text-slate-900 dark:text-white font-heading">High-Speed Fiber Broadband</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">Buffer-free 4K streaming, gaming, and reliable work-from-home speeds.</p>
              </div>
            </div>

            {/* Smart CCTV & Support Card */}
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-zinc-900/90 border border-slate-200/80 dark:border-zinc-800 hover:border-emerald-500/40 transition-all flex items-start gap-4 shadow-sm hover:shadow-md">
              <div className="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0 border border-emerald-100 dark:border-emerald-500/20">
                <Shield className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase text-emerald-600 dark:text-emerald-400 tracking-wider">Security & Support</span>
                <h3 className="text-base font-bold text-slate-900 dark:text-white font-heading">Smart CCTV & 24/7 Local NOC</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">Cloud surveillance cameras and direct access to local engineers.</p>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
