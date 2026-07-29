import React, { useState } from 'react';

export default function TechnosysLogo({ className = "", size = "normal" }) {
  const [imgError, setImgError] = useState(false);
  const isSmall = size === "small";

  return (
    <div className={`flex items-center gap-3 group ${className}`}>
      {!imgError ? (
        <img
          src="https://technosysonline.com/wp-content/uploads/2024/08/logo-footer-00-png-scaled-1024x300.webp"
          alt="Technosys"
          onError={() => setImgError(true)}
          className={`${isSmall ? 'h-9' : 'h-11'} w-auto object-contain drop-shadow-[0_0_12px_rgba(0,240,255,0.3)] group-hover:scale-105 transition-transform duration-300`}
        />
      ) : (
        /* Redefined Vector SVG Logo Fallback */
        <div className="flex items-center gap-3">
          <svg
            viewBox="0 0 100 100"
            className={`${isSmall ? 'w-8 h-8' : 'w-10 h-10'} drop-shadow-[0_0_12px_rgba(0,240,255,0.4)] group-hover:scale-105 transition-transform duration-300`}
          >
            <defs>
              <linearGradient id="logoCyan" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00F0FF" />
                <stop offset="100%" stopColor="#00A3FF" />
              </linearGradient>
              <linearGradient id="logoPurple" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6366F1" />
                <stop offset="100%" stopColor="#4338CA" />
              </linearGradient>
            </defs>

            <path d="M 16 20 L 58 20 L 52 36 L 16 36 Z" fill="url(#logoCyan)" />
            <path d="M 30 36 L 46 36 L 28 84 L 12 84 Z" fill="url(#logoCyan)" />
            <path d="M 64 20 L 82 20 L 76 48 L 58 48 Z" fill="url(#logoPurple)" />
            <path d="M 54 56 L 72 56 L 66 84 L 48 84 Z" fill="url(#logoPurple)" />
          </svg>
          <div className="flex flex-col text-left leading-none">
            <span className="font-heading font-extrabold text-2xl tracking-tight text-white group-hover:text-cyan-300 transition-colors">
              Technosys
            </span>
            <span className="text-xs font-semibold text-cyan-400 tracking-wide mt-1 font-['Caveat',cursive] italic">
              ... way to web
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
