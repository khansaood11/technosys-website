import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Radio } from 'lucide-react';

export default function NetworkPreloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 300);
          return 100;
        }
        return prev + 15;
      });
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
          className="fixed inset-0 z-[9999] bg-[#030712] flex flex-col items-center justify-center p-6 select-none"
        >
          <div className="relative flex flex-col items-center space-y-6 max-w-sm w-full text-center">
            
            {/* Animated Fiber Node Icon */}
            <div className="relative flex items-center justify-center">
              <motion.div
                animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                className="w-20 h-20 rounded-2xl border-2 border-cyan-500/40 border-t-cyan-400 bg-cyan-950/20"
              />
              <Radio className="w-8 h-8 text-cyan-400 absolute animate-pulse" />
            </div>

            {/* Title & Status */}
            <div className="space-y-1">
              <h2 className="text-xl font-black text-white tracking-wider font-heading uppercase">
                TECHNOSYS <span className="text-cyan-400">TELESERVICES</span>
              </h2>
              <p className="text-xs font-mono text-slate-400 tracking-widest uppercase">
                Initializing Symmetrical Optical Fiber Network...
              </p>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden border border-slate-800">
              <motion.div
                className="bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 h-full"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut' }}
              />
            </div>

            <div className="flex justify-between w-full text-[10px] font-mono text-slate-500 uppercase">
              <span>Node: STPL-ANK-GIDC-01</span>
              <span>{progress}%</span>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
