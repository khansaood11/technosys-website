import React from 'react';
import { ShieldCheck, Zap, Server, Activity, ArrowRight, Gauge, CheckCircle2, Radio } from 'lucide-react';

export default function Hero({ onOpenSpeedTest, onOpenContact, onExploreServices }) {
  return (
    <section id="home" className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Background Gradients & Orbs */}
      <div className="tech-grid-bg"></div>
      <div className="glow-orb glow-cyan w-[500px] h-[500px] -top-32 -left-32"></div>
      <div className="glow-orb glow-purple w-[600px] h-[600px] top-1/4 -right-40"></div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
              <Radio className="w-4 h-4 text-cyan-400 animate-pulse" />
              <span>Ankleshwar & Bharuch's Premier ISP</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              Unrivaled Speed. <br />
              <span className="gradient-text">Dedicated Connectivity.</span>
            </h1>

            <p className="text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
              Sparkline Technosys Pvt. Ltd. (STPL) powers enterprises, SMEs, and modern homes across Ankleshwar & Bharuch with guaranteed <strong className="text-cyan-400 font-semibold">1:1 Dedicated Leased Lines</strong>, ultra-fast Symmetrical Fiber Broadband, and enterprise security.
            </p>

            {/* Core Feature Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-200 bg-slate-900/60 border border-slate-800 p-2.5 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>99.9% SLA Uptime</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-200 bg-slate-900/60 border border-slate-800 p-2.5 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>1:1 Symmetrical ILL</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-200 bg-slate-900/60 border border-slate-800 p-2.5 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>Same Day Dispatch</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button onClick={onOpenContact} className="btn-primary py-4 px-8 text-sm">
                <span>Get Connected Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button onClick={onExploreServices} className="btn-secondary py-4 px-6 text-sm">
                <span>Explore Services</span>
              </button>

              <button onClick={onOpenSpeedTest} className="px-4 py-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 text-cyan-400 text-xs font-bold flex items-center gap-2 transition-all">
                <Gauge className="w-4 h-4" />
                <span>Run Speed Test</span>
              </button>
            </div>

            {/* Quick Metrics Counter */}
            <div className="pt-8 border-t border-slate-800/80 grid grid-cols-3 gap-6">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-heading">15+</div>
                <div className="text-xs text-slate-400 font-medium">Years ISP Expertise</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-heading">10 Gbps</div>
                <div className="text-xs text-slate-400 font-medium">Backbone Capacity</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-indigo-400 font-heading">24/7</div>
                <div className="text-xs text-slate-400 font-medium">Dedicated Support NOC</div>
              </div>
            </div>
          </div>

          {/* Right Hero Speed Meter / Network Card */}
          <div className="lg:col-span-5 relative">
            <div className="glass-panel p-6 sm:p-8 relative z-10 border border-cyan-500/20 shadow-2xl space-y-6">
              
              {/* Card Header */}
              <div className="flex justify-between items-center pb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-cyan-400 animate-ping"></div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-300">Live Network Monitor</span>
                </div>
                <span className="text-xs text-cyan-400 font-mono bg-cyan-950/60 px-2.5 py-1 rounded border border-cyan-500/30">Ankleshwar Node</span>
              </div>

              {/* Dynamic Speed Meter Graphic */}
              <div className="relative flex flex-col items-center justify-center p-6 bg-[#070B16] rounded-2xl border border-slate-800 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 via-transparent to-transparent"></div>
                
                {/* SVG Gauge Graphic */}
                <div className="relative w-48 h-48 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="42" stroke="rgba(255,255,255,0.06)" strokeWidth="8" fill="none" />
                    <circle cx="50" cy="50" r="42" stroke="url(#cyanGlow)" strokeWidth="8" fill="none" 
                            strokeDasharray="264" strokeDashoffset="50" strokeLinecap="round" />
                    <defs>
                      <linearGradient id="cyanGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#00F0FF" />
                        <stop offset="100%" stopColor="#7000FF" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute flex flex-col items-center">
                    <span className="text-xs text-slate-400 uppercase tracking-widest font-mono">Download</span>
                    <span className="text-4xl font-black text-white font-heading tracking-tight">948.5</span>
                    <span className="text-xs font-bold text-cyan-400">Mbps Symmetrical</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 w-full mt-4 text-center border-t border-slate-800/80 pt-4">
                  <div className="bg-slate-900/50 p-2.5 rounded-xl border border-slate-800">
                    <div className="text-[10px] uppercase text-slate-400">Latency (Ping)</div>
                    <div className="text-lg font-bold text-emerald-400 font-mono">2.4 ms</div>
                  </div>
                  <div className="bg-slate-900/50 p-2.5 rounded-xl border border-slate-800">
                    <div className="text-[10px] uppercase text-slate-400">Jitter</div>
                    <div className="text-lg font-bold text-cyan-400 font-mono">0.6 ms</div>
                  </div>
                </div>
              </div>

              {/* Action Trigger inside Card */}
              <button
                onClick={onOpenSpeedTest}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 border border-cyan-500/40 text-cyan-300 font-bold text-xs uppercase tracking-wider hover:bg-cyan-500/30 transition-all flex items-center justify-center gap-2"
              >
                <Gauge className="w-4 h-4 text-cyan-400" />
                <span>Test Connection Speed Now</span>
              </button>

              <div className="text-center">
                <span className="text-[11px] text-slate-400">
                  ⚡ Verified STPL Gigabit Fiber Optic Node • 1:1 Contention SLA
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
