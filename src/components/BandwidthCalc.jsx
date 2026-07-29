import React, { useState } from 'react';
import { Sliders, Cpu, Users, Wifi, Check, ArrowRight, ShieldCheck } from 'lucide-react';

export default function BandwidthCalc({ onOpenContact }) {
  const [profile, setProfile] = useState('enterprise'); // home, sme, enterprise, campus
  const [devices, setDevices] = useState(25);
  const [priority, setPriority] = useState('symmetrical'); // basic, cloud, symmetrical, multi-site

  // Dynamic recommendation logic
  const calculateRecommendation = () => {
    if (profile === 'enterprise' || devices > 40) {
      return {
        speed: '500 Mbps - 1 Gbps',
        type: 'Internet Leased Line (ILL)',
        ratio: '1:1 Dedicated Symmetrical',
        sla: '99.9% SLA Guarantee',
        setup: 'Same-Day Dedicated Optical Fiber',
        recommendation: 'STPL Enterprise Leased Line'
      };
    } else if (profile === 'sme' || devices > 15) {
      return {
        speed: '300 Mbps',
        type: 'Business Fiber Symmetrical',
        ratio: 'High-Priority SME Fiber',
        sla: '99.5% Network SLA',
        setup: 'Express 24-Hour Fiber Link',
        recommendation: 'STPL Business Ultra Broadband'
      };
    } else if (profile === 'campus') {
      return {
        speed: '1 Gbps Dedicated + Mesh Wi-Fi',
        type: 'Campus Hotspot + Leased Ring',
        ratio: '1:1 Multi-VLAN Core',
        sla: '99.9% Campus SLA',
        setup: 'Custom Managed Infrastructure',
        recommendation: 'STPL Smart Campus Wi-Fi & ILL'
      };
    } else {
      return {
        speed: '100 - 200 Mbps',
        type: 'Home Fiber Broadband',
        ratio: 'Unlimited Fiber',
        sla: '99% Standard Fiber',
        setup: 'Same-Day Home Connection',
        recommendation: 'STPL Home Fiber Max'
      };
    }
  };

  const rec = calculateRecommendation();

  return (
    <section id="bandwidth-calc" className="relative section-padding bg-[#050812]">
      <div className="container relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="badge-tag">
            <Sliders className="w-3.5 h-3.5 text-cyan-400" />
            <span>Interactive Bandwidth Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Find Your Ideal <span className="gradient-text">Speed & SLA Package</span>
          </h2>
          <p className="text-slate-400 text-base">
            Adjust your organization profile and connected devices to receive an instant custom ISP bandwidth recommendation tailored for Ankleshwar & Bharuch businesses.
          </p>
        </div>

        {/* Calculator Widget */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Inputs Panel */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 space-y-8 border-slate-800">
            
            {/* Step 1: Profile Selection */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                1. Select Usage Profile
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { id: 'home', label: 'Home / Pro', desc: '1-10 users' },
                  { id: 'sme', label: 'SME Office', desc: '10-30 users' },
                  { id: 'enterprise', label: 'GIDC Enterprise', desc: 'Industrial Plant' },
                  { id: 'campus', label: 'Smart Campus', desc: 'High Density' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setProfile(item.id)}
                    className={`p-3.5 rounded-xl border text-left transition-all ${
                      profile === item.id
                        ? 'bg-cyan-500/10 border-cyan-500 text-cyan-300 shadow-lg shadow-cyan-500/10'
                        : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <div className="text-xs font-bold text-white">{item.label}</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">{item.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Device Slider */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                  2. Number of Active Connected Devices
                </label>
                <span className="text-lg font-black text-cyan-400 font-mono px-3 py-1 bg-cyan-950/60 rounded-lg border border-cyan-500/30">
                  {devices} {devices === 100 ? '100+' : 'Devices'}
                </span>
              </div>

              <input
                type="range"
                min="1"
                max="100"
                value={devices}
                onChange={(e) => setDevices(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />

              <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                <span>1 Device</span>
                <span>25 Devices</span>
                <span>50 Devices</span>
                <span>100+ Devices</span>
              </div>
            </div>

            {/* Step 3: Primary Workload */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                3. Critical Requirement Priority
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { id: 'symmetrical', label: '1:1 Symmetrical SLA (ILL)', sub: 'Zero packet loss & low ping' },
                  { id: 'cloud', label: 'Cloud ERP & Video Conferencing', sub: 'High uptime for Zoom & Office 365' },
                  { id: 'surveillance', label: '24/7 CCTV & Media Uploads', sub: 'Heavy continuous upload streams' },
                  { id: 'basic', label: 'General Web & Streaming', sub: 'Standard web browsing & emails' }
                ].map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setPriority(p.id)}
                    className={`p-3.5 rounded-xl border text-left transition-all ${
                      priority === p.id
                        ? 'bg-cyan-500/10 border-cyan-500 text-cyan-300'
                        : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <div className="text-xs font-bold text-white">{p.label}</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">{p.sub}</div>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Recommendation Result Box */}
          <div className="lg:col-span-5 glass-panel p-6 sm:p-8 flex flex-col justify-between border-cyan-500/30 relative overflow-hidden bg-gradient-to-b from-[#0B1224] to-[#060A17]">
            <div className="space-y-6">
              
              <div className="flex justify-between items-center pb-4 border-b border-slate-800">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-cyan-400" />
                  Optimal ISP Match
                </span>
                <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                  Recommended
                </span>
              </div>

              <div>
                <span className="text-xs text-slate-400 uppercase font-mono">Suggested Package</span>
                <h3 className="text-2xl font-extrabold text-white font-heading mt-1">{rec.recommendation}</h3>
              </div>

              {/* Specs Box */}
              <div className="space-y-3 bg-slate-900/80 p-5 rounded-2xl border border-slate-800">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-slate-400">Bandwidth Speed:</span>
                  <span className="text-base font-extrabold text-cyan-400 font-mono">{rec.speed}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-slate-400">Contention Ratio:</span>
                  <span className="text-xs font-bold text-white">{rec.ratio}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-slate-400">Uptime SLA:</span>
                  <span className="text-xs font-bold text-emerald-400">{rec.sla}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-slate-400">Installation Time:</span>
                  <span className="text-xs font-bold text-indigo-400">{rec.setup}</span>
                </div>
              </div>

              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Free optical fiber feasibility survey in Ankleshwar</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Dedicated Account Manager & 24/7 Priority Support</span>
                </li>
              </ul>

            </div>

            <div className="pt-6 mt-6 border-t border-slate-800">
              <button
                onClick={onOpenContact}
                className="btn-primary w-full py-4 text-xs uppercase font-bold tracking-wider"
              >
                <span>Book Free Feasibility & Demo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
