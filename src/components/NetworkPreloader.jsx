import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function NetworkPreloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 400);
          return 100;
        }
        return prev + 12;
      });
    }, 90);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, transition: { duration: 0.5, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[9999] bg-[#040814] flex flex-col items-center justify-center p-6 select-none overflow-hidden"
        >
          {/* Background Ambient Glow */}
          <div className="absolute w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none animate-pulse"></div>

          <div className="relative flex flex-col items-center space-y-8 max-w-sm w-full text-center">
            
            {/* Lottie-Style Animated SVG Optical Fiber Pulse Loader */}
            <div className="relative w-32 h-32 flex items-center justify-center">
              
              {/* Outer Rotating Dash Ring */}
              <motion.svg
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 100 100"
              >
                <circle cx="50" cy="50" r="46" fill="none" stroke="rgba(0, 240, 255, 0.2)" strokeWidth="2" strokeDasharray="8 6" />
              </motion.svg>

              {/* Counter-Rotating Inner Accent Ring */}
              <motion.svg
                animate={{ rotate: -360 }}
                transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)]"
                viewBox="0 0 100 100"
              >
                <circle cx="50" cy="50" r="42" fill="none" stroke="url(#lottieGrad)" strokeWidth="3" strokeDasharray="25 15" strokeLinecap="round" />
                <defs>
                  <linearGradient id="lottieGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00F0FF" />
                    <stop offset="50%" stopColor="#10B981" />
                    <stop offset="100%" stopColor="#8B5CF6" />
                  </linearGradient>
                </defs>
              </motion.svg>

              {/* Center Pulsing Fiber Node */}
              <motion.div
                animate={{ scale: [0.9, 1.15, 0.9] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                className="w-14 h-14 rounded-2xl bg-cyan-950/80 border border-cyan-500/50 flex items-center justify-center shadow-lg shadow-cyan-500/30 backdrop-blur-md"
              >
                <svg className="w-8 h-8 text-cyan-400 fill-current animate-pulse" viewBox="0 0 24 24">
                  <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.8l6.9 3.5-3.2 1.6-3.7-1.8-3.7 1.8-3.2-1.6L12 4.8z"/>
                </svg>
              </motion.div>

              {/* Orbiting Fiber Data Packets */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 w-full h-full pointer-events-none"
              >
                <div className="w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_10px_#00F0FF] absolute -top-1.5 left-1/2 -translate-x-1/2"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#10B981] absolute -bottom-1 left-1/2 -translate-x-1/2"></div>
              </motion.div>

            </div>

            {/* Title & Status */}
            <div className="space-y-1.5">
              <h2 className="text-xl font-extrabold text-white tracking-wider font-heading uppercase">
                TECHNOSYS <span className="text-cyan-400">TELESERVICES</span>
              </h2>
              <div className="flex items-center justify-center gap-2 text-xs font-mono text-cyan-400">
                <span className="live-indicator"></span>
                <span>Initializing Symmetrical Fiber Network</span>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-slate-900/90 h-2 rounded-full overflow-hidden border border-slate-800 p-0.5">
              <motion.div
                className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-indigo-500 h-full rounded-full"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut' }}
              />
            </div>

            <div className="flex justify-between w-full text-[10px] font-mono text-slate-400 uppercase tracking-widest">
              <span>Node: STPL-ANKLESHWAR-MAIN</span>
              <span>{progress}%</span>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
