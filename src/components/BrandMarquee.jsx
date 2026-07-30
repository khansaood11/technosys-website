import React from 'react';

export default function BrandMarquee() {
  const brands = [
    {
      name: 'Cisco Systems',
      role: 'Enterprise Core Routing',
      logoUrl: 'https://cdn.simpleicons.org/cisco/00F0FF',
      fallbackSvg: (
        <svg className="w-8 h-8 text-cyan-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 3v4.5M6 6v4.5M18 6v4.5M9 9v4.5M15 9v4.5M3 12v4.5M21 12v4.5M4 19.5h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      name: 'Juniper Networks',
      role: 'Core Optical Backbone',
      logoUrl: 'https://cdn.simpleicons.org/junipernetworks/10B981',
      fallbackSvg: (
        <svg className="w-8 h-8 text-emerald-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.8l6.9 3.5-3.2 1.6-3.7-1.8-3.7 1.8-3.2-1.6L12 4.8z"/>
        </svg>
      )
    },
    {
      name: 'TP-Link Business',
      role: 'Optical Hardware',
      logoUrl: 'https://cdn.simpleicons.org/tplink/38BDF8',
      fallbackSvg: (
        <svg className="w-8 h-8 text-sky-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 3a9 9 0 0 0-9 9 9 9 0 0 0 9 9 9 9 0 0 0 9-9 9 9 0 0 0-9-9zm0 16a7 7 0 1 1 0-14 7 7 0 0 1 0 14z"/>
        </svg>
      )
    },
    {
      name: 'MikroTik RouterOS',
      role: 'ISP Core Gateway',
      logoUrl: 'https://cdn.simpleicons.org/mikrotik/A855F7',
      fallbackSvg: (
        <svg className="w-8 h-8 text-purple-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 3h18v18H3V3zm4 4v10h10V7H7zm2 2h6v2H9V9zm0 4h6v2H9v-2z"/>
        </svg>
      )
    },
    {
      name: 'Ubiquiti Networks',
      role: 'Enterprise UniFi Mesh',
      logoUrl: 'https://cdn.simpleicons.org/ubiquiti/00F0FF',
      fallbackSvg: (
        <svg className="w-8 h-8 text-cyan-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2a10 10 0 0 0-10 10c0 5.52 4.48 10 10 10s10-4.48 10-10A10 10 0 0 0 12 2zm0 15a5 5 0 0 1-5-5V7h2.5v5a2.5 2.5 0 0 0 5 0V7H17v5a5 5 0 0 1-5 5z"/>
        </svg>
      )
    },
    {
      name: 'Syrotech Fiber',
      role: 'GPON / EPON OLT',
      logoUrl: null,
      fallbackSvg: (
        <svg className="w-8 h-8 text-emerald-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 12l10 10 10-10L12 2zm0 4.5l6.5 6.5-6.5 6.5-6.5-6.5L12 6.5z"/>
        </svg>
      )
    },
    {
      name: 'D-Link Telecom',
      role: 'Optical Switches',
      logoUrl: 'https://cdn.simpleicons.org/dlink/F59E0B',
      fallbackSvg: (
        <svg className="w-8 h-8 text-amber-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M4 4h6a8 8 0 0 1 8 8 8 8 0 0 1-8 8H4V4zm4 4v8h2a4 4 0 0 0 4-4 4 4 0 0 0-4-4H8z"/>
        </svg>
      )
    },
    {
      name: 'Huawei Optics',
      role: 'FTTH Infrastructure',
      logoUrl: 'https://cdn.simpleicons.org/huawei/EF4444',
      fallbackSvg: (
        <svg className="w-8 h-8 text-rose-500" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2c.5 2.5 2 4.5 4.5 5-2.5.5-4.5 2-5 4.5-.5-2.5-2.5-4-5-4.5 2.5-.5 4-2.5 5.5-5zm0 20c-.5-2.5-2-4.5-4.5-5 2.5-.5 4.5-2 5-4.5.5 2.5 2.5 4 5 4.5-2.5.5-4 2.5-5.5 5z"/>
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
              <div className="w-10 h-10 p-2 rounded-xl bg-zinc-800/80 border border-zinc-700/50 flex items-center justify-center shrink-0">
                {brand.logoUrl ? (
                  <img
                    src={brand.logoUrl}
                    alt={brand.name}
                    className="w-full h-full object-contain filter drop-shadow"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling.style.display = 'block';
                    }}
                  />
                ) : null}
                <div style={{ display: brand.logoUrl ? 'none' : 'block' }}>
                  {brand.fallbackSvg}
                </div>
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
