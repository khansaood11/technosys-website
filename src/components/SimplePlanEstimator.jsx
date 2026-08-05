import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Home, Building2, Zap, CheckCircle2, ArrowRight, ShieldCheck, Laptop } from 'lucide-react';

export default function SimplePlanEstimator({ onOpenContact }) {
  const [userType, setUserType] = useState('home'); // home, small-office, enterprise
  const [devices, setDevices] = useState('2-5');

  const options = {
    home: {
      title: 'Residential & WFH Broadband',
      icon: Home,
      tag: 'Home Fiber Plan',
      devices: ['2-5 Devices', '6-10 Devices', '10+ Devices'],
      recommended: {
        speed: '50 Mbps - 100 Mbps',
        price: 'Starting ₹10,999 / 12 months',
        features: [
          'Truly Unlimited Data (No FUP cap)',
          'Dual-band Gigabit Wi-Fi Router included',
          'Smooth 4K UHD video streaming & gaming',
          'Free installation within 3-5 days'
        ]
      }
    },
    'small-office': {
      title: 'Commercial Office Internet',
      icon: Building2,
      tag: 'SME & Office Plan',
      devices: ['5-15 Devices', '15-30 Devices', '30+ Devices'],
      recommended: {
        speed: '100 Mbps Symmetrical',
        price: 'Custom Monthly SLA Quotation',
        features: [
          'High-priority business bandwidth',
          '98.9% Uptime Guarantee for daily operations',
          'Dedicated support hotline with fast local dispatch',
          'Static IP option for server & CCTV remote access'
        ]
      }
    },
    enterprise: {
      title: '1:1 Dedicated Leased Line (ILL)',
      icon: Zap,
      tag: 'GIDC Industrial Plant SLA',
      devices: ['30-100 Devices', '100-500 Devices', '500+ Industrial Nodes'],
      recommended: {
        speed: '100 Mbps - 10 Gbps (1:1 Symmetrical)',
        price: 'Contractual Enterprise SLA',
        features: [
          '1:1 Uncontended Dedicated Bandwidth (Upload = Download)',
          'Contractual 99.9% SLA Uptime with credit backup',
          'Dual-ring fiber topology (Zero single point of failure)',
          '24/7/365 Proactive NOC Monitoring & static IPv4/v6'
        ]
      }
    }
  };

  const active = options[userType];

  return (
    <section className="py-16 bg-slate-100/60 dark:bg-[#070A14] border-y border-slate-200 dark:border-zinc-800 relative">
      <div className="container relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="badge-tag">
            <Zap className="w-3.5 h-3.5" />
            <span>Interactive Plan Selector</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-heading">
            Find the Perfect Connection <span className="gradient-text">In 30 Seconds</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            No complicated jargon. Select your use case below to discover the exact internet plan recommended for your home, office, or plant.
          </p>
        </div>

        {/* User Type Tab Switcher */}
        <div className="flex flex-wrap justify-center gap-3">
          {[
            { id: 'home', label: '🏠 For Home & WFH', sub: 'Streaming & Remote Work' },
            { id: 'small-office', label: '🏢 Small Business & Office', sub: '10-30 Staff Members' },
            { id: 'enterprise', label: '⚡ GIDC Plant / Enterprise', sub: '1:1 Dedicated SLA' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setUserType(tab.id)}
              className={`px-6 py-3.5 rounded-2xl border text-xs sm:text-sm font-bold transition-all flex flex-col items-center gap-1 ${
                userType === tab.id
                  ? 'bg-sky-500 text-white border-sky-500 shadow-lg shadow-sky-500/25 scale-105 dark:bg-cyan-500 dark:text-black dark:border-cyan-400 dark:shadow-cyan-500/20'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50 dark:bg-zinc-900/80 dark:text-zinc-300 dark:border-zinc-800 dark:hover:bg-zinc-800'
              }`}
            >
              <span>{tab.label}</span>
              <span className="text-[10px] font-normal opacity-80">{tab.sub}</span>
            </button>
          ))}
        </div>

        {/* Selected Plan Details Card */}
        <motion.div
          key={userType}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="glass-panel p-6 sm:p-10 border border-slate-200 dark:border-cyan-500/30 max-w-3xl mx-auto space-y-6"
        >
          <div className="flex flex-col sm:flex-row justify-between sm:items-center pb-6 border-b border-slate-200 dark:border-zinc-800 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-sky-500/10 dark:bg-cyan-500/10 border border-sky-500/30 dark:border-cyan-500/30 flex items-center justify-center text-sky-600 dark:text-cyan-400 shrink-0">
                <active.icon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-sky-600 dark:text-cyan-400">{active.tag}</span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-heading">{active.title}</h3>
              </div>
            </div>
            <div className="text-left sm:text-right font-mono">
              <div className="text-xs text-slate-500 dark:text-zinc-400">Recommended Bandwidth</div>
              <div className="text-lg sm:text-xl font-bold text-sky-600 dark:text-emerald-400">{active.recommended.speed}</div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400">What’s Included in This Package:</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {active.recommended.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-zinc-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-slate-200 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-zinc-400 font-mono">
              <ShieldCheck className="w-4 h-4 text-sky-500 dark:text-cyan-400" />
              <span>Free feasibility check included</span>
            </div>
            <button
              onClick={onOpenContact}
              className="btn-primary w-full sm:w-auto py-3.5 px-6 text-xs uppercase font-bold tracking-wider"
            >
              <span>Get Connected Now →</span>
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
