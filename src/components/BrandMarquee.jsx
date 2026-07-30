import React from 'react';

export default function BrandMarquee() {
  const brands = [
    { name: 'Cisco Systems', label: 'ENTERPRISE ROUTING' },
    { name: 'Juniper Networks', label: 'CORE BACKBONE' },
    { name: 'Syrotech Fiber', label: 'GPON / EPON OLT' },
    { name: 'TP-Link Business', label: 'OPTICAL HARDWARE' },
    { name: 'MikroTik', label: 'ISP GATEWAY' },
    { name: 'Ubiquiti UniFi', label: 'ENTERPRISE WIFI' },
    { name: 'D-Link Telecom', label: 'FIBER NETWORKING' },
    { name: 'Huawei Optics', label: 'FTTH HARDWARE' }
  ];

  return (
    <div className="w-full py-8 bg-[#050813]/80 border-y border-slate-800/80 overflow-hidden relative select-none">
      <div className="container mb-4 text-center">
        <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400 font-semibold">
          Powered By Enterprise-Grade Optical Hardware & Core Routing Partners
        </span>
      </div>

      <div className="flex w-full overflow-hidden mask-gradient">
        {/* Infinite Loop Container */}
        <div className="flex gap-12 animate-marquee whitespace-nowrap items-center">
          {[...brands, ...brands, ...brands].map((brand, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 px-5 py-2.5 rounded-xl bg-slate-900/60 border border-slate-800/90 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/30 transition-all shrink-0"
            >
              <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
              <span className="text-sm font-bold font-heading tracking-wide text-white">{brand.name}</span>
              <span className="text-[9px] font-mono bg-slate-800 text-slate-400 px-1.5 py-0.5 rounded border border-slate-700">{brand.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
