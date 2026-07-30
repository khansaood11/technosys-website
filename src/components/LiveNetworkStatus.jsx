import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Activity, ShieldCheck, Wifi, Users, Server } from 'lucide-react';

export default function LiveNetworkStatus() {
  const [latency, setLatency] = useState(2.4);
  const [activeUsers, setActiveUsers] = useState(5214);

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate live micro-fluctuations
      setLatency((prev) => +(2.2 + Math.random() * 0.4).toFixed(1));
      setActiveUsers((prev) => prev + Math.floor(Math.random() * 3) - 1);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="container my-8"
    >
      <div className="glass-panel p-4 border border-zinc-800 bg-[#0A0F1D]/90 backdrop-blur-xl rounded-2xl shadow-xl flex flex-wrap items-center justify-between gap-4">
        
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
            <Activity className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-white font-heading uppercase tracking-wider">Live Network Status</span>
              <span className="live-indicator"></span>
            </div>
            <p className="text-[11px] font-mono text-zinc-400">STPL Ankleshwar GIDC Main Fiber Hub</p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 text-left font-mono">
          <div>
            <div className="text-[10px] text-zinc-400 uppercase tracking-widest flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-cyan-400" /> Uptime
            </div>
            <div className="text-sm font-bold text-emerald-400">99.97% SLA</div>
          </div>

          <div>
            <div className="text-[10px] text-zinc-400 uppercase tracking-widest flex items-center gap-1">
              <Wifi className="w-3 h-3 text-emerald-400" /> Latency
            </div>
            <div className="text-sm font-bold text-cyan-400">{latency} ms</div>
          </div>

          <div>
            <div className="text-[10px] text-zinc-400 uppercase tracking-widest flex items-center gap-1">
              <Server className="w-3 h-3 text-indigo-400" /> Packet Loss
            </div>
            <div className="text-sm font-bold text-white">0.00%</div>
          </div>

          <div>
            <div className="text-[10px] text-zinc-400 uppercase tracking-widest flex items-center gap-1">
              <Users className="w-3 h-3 text-purple-400" /> Subscribers
            </div>
            <div className="text-sm font-bold text-purple-300">{activeUsers.toLocaleString()}</div>
          </div>
        </div>

      </div>
    </motion.div>
  );
}
