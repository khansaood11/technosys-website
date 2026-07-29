import React, { useState } from 'react';
import { MapPin, Search, CheckCircle2, AlertCircle, Building2, Radio, ArrowRight } from 'lucide-react';

export default function FeasibilityChecker({ onOpenContact }) {
  const [selectedZone, setSelectedZone] = useState('');
  const [pincode, setPincode] = useState('');
  const [searchResult, setSearchResult] = useState(null);

  const zones = [
    { name: 'GIDC Ankleshwar Phase 1-4', pin: '393002', status: 'Direct Symmetrical Fiber Ring (10 Gbps Node)', distance: '< 50m to backbone' },
    { name: 'Rajpipla Road (Amardeep Complex Area)', pin: '393002', status: 'HQ Fiber Node Active', distance: 'Direct Feeder' },
    { name: 'Valia Road (Golden Square Hub)', pin: '393002', status: 'Corporate Fiber Ring Active', distance: 'Direct Feeder' },
    { name: 'Panoli GIDC Industrial Estate', pin: '394116', status: 'Enterprise Leased Line Ring Available', distance: 'Low Latency Link' },
    { name: 'Jhagadia GIDC Industrial Park', pin: '393110', status: 'Enterprise P2P & Fiber Leased Line', distance: 'Dedicated Ring' },
    { name: 'Bharuch City & Railway Station Area', pin: '392001', status: 'Gigabit FTTH & Business Fiber Available', distance: 'City Ring' }
  ];

  const handleCheck = (e) => {
    e.preventDefault();
    if (!selectedZone && !pincode) return;

    const matched = zones.find(z => z.name === selectedZone || z.pin === pincode.trim());
    if (matched) {
      setSearchResult({
        found: true,
        zone: matched.name,
        pin: matched.pin,
        status: matched.status,
        distance: matched.distance
      });
    } else {
      setSearchResult({
        found: true,
        zone: selectedZone || `Pincode ${pincode}`,
        pin: pincode || '393002',
        status: 'Custom Fiber Drop Available (Same-Day Feasibility Survey)',
        distance: 'Rapid Extension Node'
      });
    }
  };

  return (
    <section id="feasibility" className="relative section-padding bg-[#070A14]">
      <div className="container relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Info */}
          <div className="lg:col-span-6 space-y-6">
            <div className="badge-tag">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              <span>Network Feasibility Hub</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Connectivity in Every Corner of <span className="gradient-text">Ankleshwar & Bharuch</span>
            </h2>

            <p className="text-slate-300 text-base leading-relaxed">
              Sparkline Technosys operates an extensive high-density fiber optic ring across Ankleshwar GIDC, industrial zones, commercial hubs, and residential blocks. Our technicians guarantee rapid same-day site verification.
            </p>

            {/* Location Badges */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-800 flex items-center gap-3">
                <Building2 className="w-5 h-5 text-cyan-400 shrink-0" />
                <div>
                  <div className="text-xs font-bold text-white">GIDC Industrial Belt</div>
                  <div className="text-[10px] text-slate-400">Phase 1 to 4 Full Coverage</div>
                </div>
              </div>

              <div className="bg-slate-900/60 p-3.5 rounded-xl border border-slate-800 flex items-center gap-3">
                <Radio className="w-5 h-5 text-indigo-400 shrink-0" />
                <div>
                  <div className="text-xs font-bold text-white">Panoli & Jhagadia</div>
                  <div className="text-[10px] text-slate-400">High Speed Enterprise P2P</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Feasibility Checker Form */}
          <div className="lg:col-span-6 glass-panel p-6 sm:p-8 border-cyan-500/30 space-y-6">
            <div className="border-b border-slate-800 pb-4">
              <h3 className="text-xl font-bold text-white font-heading">Check Fiber Serviceability</h3>
              <p className="text-xs text-slate-400">Select your industrial zone or enter your pincode</p>
            </div>

            <form onSubmit={handleCheck} className="space-y-4">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">Select Industrial / Commercial Zone</label>
                <select
                  value={selectedZone}
                  onChange={(e) => { setSelectedZone(e.target.value); setPincode(''); }}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3.5 text-slate-200 text-sm focus:border-cyan-400 focus:outline-none"
                >
                  <option value="">-- Choose Location Zone --</option>
                  {zones.map((z, idx) => (
                    <option key={idx} value={z.name}>{z.name} ({z.pin})</option>
                  ))}
                </select>
              </div>

              <div className="flex items-center gap-3 text-xs text-slate-500 my-2">
                <span className="h-[1px] bg-slate-800 flex-1"></span>
                <span>OR ENTER PINCODE</span>
                <span className="h-[1px] bg-slate-800 flex-1"></span>
              </div>

              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="e.g. 393002"
                  value={pincode}
                  onChange={(e) => { setPincode(e.target.value); setSelectedZone(''); }}
                  className="flex-1 bg-slate-900 border border-slate-700 rounded-xl p-3.5 text-slate-200 text-sm focus:border-cyan-400 focus:outline-none font-mono"
                />
                <button type="submit" className="btn-primary px-6 text-xs uppercase font-bold">
                  <Search className="w-4 h-4" />
                  <span>Check</span>
                </button>
              </div>
            </form>

            {/* Feasibility Result Display */}
            {searchResult && (
              <div className="p-5 rounded-2xl bg-cyan-950/40 border border-cyan-500/40 space-y-3 animate-fadeIn">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span className="text-sm font-bold text-white">Fiber Coverage Ready for {searchResult.zone}</span>
                </div>
                <div className="text-xs text-cyan-300 space-y-1 pl-7">
                  <div><strong>Node Status:</strong> {searchResult.status}</div>
                  <div><strong>Backbone Distance:</strong> {searchResult.distance}</div>
                </div>
                <div className="pt-2 pl-7">
                  <button
                    onClick={onOpenContact}
                    className="btn-primary py-2.5 px-4 text-xs uppercase font-bold"
                  >
                    <span>Request Free Connection Feasibility Survey</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
