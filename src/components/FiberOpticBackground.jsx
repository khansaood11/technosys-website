import React from 'react';
import { motion } from 'framer-motion';

export default function FiberOpticBackground() {
  // Configured optical fiber path lines
  const fiberLines = [
    { d: "M -100 120 C 300 80, 600 220, 1400 150", color: "#00F0FF", duration: 6, delay: 0 },
    { d: "M -100 350 C 400 450, 800 280, 1500 380", color: "#10B981", duration: 8, delay: 1 },
    { d: "M -100 650 C 350 550, 750 720, 1400 600", color: "#8B5CF6", duration: 7, delay: 2 },
    { d: "M -100 900 C 500 980, 900 820, 1500 920", color: "#3B82F6", duration: 9, delay: 1.5 }
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-25 select-none">
      <svg className="w-full h-full" viewBox="0 0 1400 1000" fill="none">
        
        {/* Fiber Cable Lines */}
        {fiberLines.map((line, idx) => (
          <g key={idx}>
            {/* Base Fiber Strand */}
            <path
              d={line.d}
              stroke="rgba(255, 255, 255, 0.05)"
              strokeWidth="1.5"
              strokeDasharray="4 4"
            />
            {/* Glowing Light Beam Segment */}
            <path
              d={line.d}
              stroke={line.color}
              strokeWidth="2"
              strokeDasharray="120 600"
              strokeLinecap="round"
              className="animate-fiber-sweep"
              style={{
                animation: `fiberSweep ${line.duration}s linear infinite`,
                animationDelay: `${line.delay}s`
              }}
            />
          </g>
        ))}

        {/* Network Nodes (Pulsing Dots: ●────●────●) */}
        <circle cx="250" cy="110" r="4" fill="#00F0FF" className="animate-ping" />
        <circle cx="250" cy="110" r="3" fill="#00F0FF" />

        <circle cx="620" cy="210" r="4" fill="#10B981" />
        <circle cx="620" cy="210" r="2" fill="#FFFFFF" />

        <circle cx="450" cy="430" r="4" fill="#8B5CF6" className="animate-ping" />
        <circle cx="450" cy="430" r="3" fill="#8B5CF6" />

        <circle cx="850" cy="300" r="4" fill="#00F0FF" />

        <circle cx="380" cy="560" r="4" fill="#10B981" />

        <circle cx="800" cy="710" r="4" fill="#3B82F6" className="animate-ping" />
        <circle cx="800" cy="710" r="3" fill="#3B82F6" />

      </svg>
    </div>
  );
}
