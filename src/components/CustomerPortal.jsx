import React, { useState } from 'react';
import { User, CreditCard, Activity, ExternalLink, ShieldCheck, LogIn, Lock } from 'lucide-react';

export default function CustomerPortal({ onOpenContact }) {
  const [activeTab, setActiveTab] = useState('overview');
  const [paid, setPaid] = useState(false);

  return (
    <section id="portal" className="relative section-padding bg-[#070A14]">
      <div className="container relative z-10 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="badge-tag">
            <User className="w-3.5 h-3.5 text-cyan-400" />
            <span>Netzur IMBS Subscriber Portal</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Manage Your Account <span className="gradient-text">Online</span>
          </h2>
          <p className="text-slate-400 text-base">
            Access your official Technosys Teleservices Netzur subscriber account, view traffic graphs, pay bills, and manage data plans directly through our secure RADIUS system.
          </p>

          {/* Official Login CTA Button Banner */}
          <div className="pt-4 flex justify-center">
            <a
              href="https://tts.janitornetwork.com/subscriber_login"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary py-4 px-8 text-sm font-bold uppercase tracking-wider flex items-center gap-3 shadow-xl shadow-cyan-500/25 hover:scale-105 transition-all"
            >
              <LogIn className="w-5 h-5 text-black" />
              <span>Log In to Official Subscriber Portal (tts.janitornetwork.com)</span>
              <ExternalLink className="w-4 h-4 text-black" />
            </a>
          </div>
        </div>

        {/* Portal Window Frame Preview */}
        <div className="glass-panel border-cyan-500/30 overflow-hidden shadow-2xl">
          
          {/* Top Bar */}
          <div className="bg-[#0A0E1F] p-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold">
                ST
              </div>
              <div>
                <div className="text-sm font-bold text-white flex items-center gap-2">
                  <span>Netzur Subscriber Portal Preview</span>
                  <span className="text-[10px] font-mono bg-emerald-950 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded">Active SLA</span>
                </div>
                <div className="text-xs text-slate-400">Technosys Teleservices • JanitorRadius Core</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${activeTab === 'overview' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40' : 'text-slate-400 hover:text-white'}`}
              >
                Usage Overview
              </button>
              <button
                onClick={() => setActiveTab('billing')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${activeTab === 'billing' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40' : 'text-slate-400 hover:text-white'}`}
              >
                Quick Pay
              </button>
              <a
                href="https://tts.janitornetwork.com/subscriber_login"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-lg bg-cyan-500 text-black text-xs font-bold flex items-center gap-1.5 hover:bg-cyan-400 transition-colors"
              >
                <span>Portal Login</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Portal Content Body */}
          <div className="p-6 sm:p-8 space-y-8 bg-[#060913]/90">
            
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                    <div className="text-xs text-slate-400">Subscribed Speed</div>
                    <div className="text-2xl font-black text-cyan-400 font-heading">500 Mbps</div>
                    <div className="text-[11px] text-emerald-400 mt-1">1:1 Dedicated Symmetrical</div>
                  </div>
                  <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                    <div className="text-xs text-slate-400">Monthly Usage</div>
                    <div className="text-2xl font-black text-white font-heading">4.2 TB</div>
                    <div className="text-[11px] text-slate-400 mt-1">Unlimited Symmetrical Plan</div>
                  </div>
                  <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                    <div className="text-xs text-slate-400">Assigned Static IP</div>
                    <div className="text-xl font-bold text-indigo-300 font-mono">103.240.112.44</div>
                    <div className="text-[11px] text-slate-400 mt-1">Dual Stack IPv4 / IPv6</div>
                  </div>
                </div>

                {/* Simulated Traffic Graph */}
                <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                      <Activity className="w-4 h-4 text-cyan-400" />
                      Live Traffic Stream (JanitorRadius Engine)
                    </span>
                    <span className="text-xs font-mono text-emerald-400">Zero Packet Loss</span>
                  </div>

                  <div className="h-32 flex items-end gap-1.5 pt-4">
                    {[40, 65, 55, 80, 95, 70, 85, 90, 60, 75, 88, 92, 100, 85, 78, 90, 65, 80, 95, 70].map((h, i) => (
                      <div key={i} className="flex-1 bg-gradient-to-t from-cyan-500 to-indigo-600 rounded-t opacity-80 hover:opacity-100 transition-opacity" style={{ height: `${h}%` }}></div>
                    ))}
                  </div>

                  <div className="flex justify-between text-[10px] text-slate-500 font-mono pt-2 border-t border-slate-900">
                    <span>00:00</span>
                    <span>06:00</span>
                    <span>12:00</span>
                    <span>18:00</span>
                    <span>24:00</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'billing' && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-slate-900/80 p-5 rounded-xl border border-slate-800">
                  <div>
                    <div className="text-xs text-slate-400">Current Invoice (STPL Netzur System)</div>
                    <div className="text-3xl font-black text-white font-heading mt-1">₹ 14,750 <span className="text-xs font-normal text-slate-400">incl. GST</span></div>
                    <div className="text-xs text-slate-400 mt-1 font-mono">Due Date: 10th Aug 2026</div>
                  </div>

                  <a
                    href="https://tts.janitornetwork.com/subscriber_login"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary py-3 px-6 text-xs uppercase font-bold flex items-center gap-2"
                  >
                    <CreditCard className="w-4 h-4 text-black" />
                    <span>Pay Invoice on Netzur Portal</span>
                    <ExternalLink className="w-3.5 h-3.5 text-black" />
                  </a>
                </div>
              </div>
            )}

          </div>
        </div>

      </div>
    </section>
  );
}
