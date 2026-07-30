import React from 'react';

export default function BrandMarquee() {
  const brands = [
    {
      name: 'Cisco Systems',
      role: 'Enterprise Routing',
      svg: (
        <svg className="w-8 h-8 text-cyan-400 fill-current" viewBox="0 0 24 24">
          <path d="M12 3a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 12 3zm-6 3a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 6 6zm12 0a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 18 6zm-9 3a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 9 9zm6 0a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 15 9zm-12 3a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 3 12zm18 0a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 21 12zm-3 6.5a1.5 1.5 0 0 1-3 0h-3a1.5 1.5 0 0 1-3 0H6a.75.75 0 0 1 0-1.5h12a.75.75 0 0 1 0 1.5z"/>
        </svg>
      )
    },
    {
      name: 'Juniper Networks',
      role: 'Core Optical Backbone',
      svg: (
        <svg className="w-8 h-8 text-emerald-400 fill-current" viewBox="0 0 24 24">
          <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.8l6.9 3.5-3.2 1.6-3.7-1.8-3.7 1.8-3.2-1.6L12 4.8zm-8 4.3l7 3.5v7l-7-3.5V9.1zm16 7l-7 3.5v-7l7-3.5v7z"/>
        </svg>
      )
    },
    {
      name: 'Syrotech Fiber',
      role: 'GPON / EPON OLT',
      svg: (
        <svg className="w-8 h-8 text-indigo-400 fill-current" viewBox="0 0 24 24">
          <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14.5h-2v-5h2zm0-7h-2V7h2z"/>
        </svg>
      )
    },
    {
      name: 'TP-Link Business',
      role: 'Optical Hardware',
      svg: (
        <svg className="w-8 h-8 text-teal-400 fill-current" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>
        </svg>
      )
    },
    {
      name: 'MikroTik RouterOS',
      role: 'ISP Core Gateway',
      svg: (
        <svg className="w-8 h-8 text-purple-400 fill-current" viewBox="0 0 24 24">
          <path d="M4 4h16v16H4V4zm2 2v12h12V6H6zm2 2h8v2H8V8zm0 4h8v2H8v-2z"/>
        </svg>
      )
    },
    {
      name: 'Ubiquiti Networks',
      role: 'Enterprise UniFi Mesh',
      svg: (
        <svg className="w-8 h-8 text-blue-400 fill-current" viewBox="0 0 24 24">
          <path d="M12 2a10 10 0 0 0-10 10c0 5.52 4.48 10 10 10s10-4.48 10-10A10 10 0 0 0 12 2zm0 16a6 6 0 1 1 0-12 6 6 0 0 1 0 12z"/>
        </svg>
      )
    },
    {
      name: 'D-Link Telecom',
      role: 'Optical Switches',
      svg: (
        <svg className="w-8 h-8 text-amber-400 fill-current" viewBox="0 0 24 24">
          <path d="M12 2L1 21h22L12 2zm0 3.5L19.5 19h-15L12 5.5z"/>
        </svg>
      )
    },
    {
      name: 'Huawei Optics',
      role: 'FTTH Node Infrastructure',
      svg: (
        <svg className="w-8 h-8 text-rose-400 fill-current" viewBox="0 0 24 24">
          <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 14.5h-2v-5h2zm0-7h-2V7h2z"/>
        </svg>
      )
    }
  ];

  return (
    <div className="w-full py-10 bg-[#060913] border-y border-zinc-800/80 overflow-hidden relative select-none">
      
      <div className="container mb-6 text-center">
        <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 font-bold flex items-center justify-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
          <span>Enterprise Optical Fiber Hardware & Core Routing Partners</span>
        </span>
      </div>

      {/* Infinite Moving Marquee Container */}
      <div className="flex w-full overflow-hidden relative">
        <div className="flex gap-8 animate-marquee whitespace-nowrap items-center">
          {[...brands, ...brands, ...brands].map((brand, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 px-6 py-3.5 rounded-2xl bg-zinc-900/90 border border-zinc-800 text-zinc-300 hover:text-white hover:border-cyan-500/40 transition-all hover:scale-105 shrink-0 shadow-lg"
            >
              <div className="p-2 rounded-xl bg-zinc-800/80 border border-zinc-700/50 shrink-0">
                {brand.svg}
              </div>
              <div className="flex flex-col text-left">
                <span className="text-base font-extrabold font-heading text-white tracking-tight">{brand.name}</span>
                <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider">{brand.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
