import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, CheckCircle, Zap, ShieldCheck } from 'lucide-react';

export default function GIDCCoverageVisualizer({ onOpenContact }) {
  const [selectedNode, setSelectedNode] = useState(0);

  const nodes = [
    { name: 'Ankleshwar GIDC Phase 1', status: 'Active Fiber Node', speed: '10 Gbps', latency: '2.2 ms', contention: '1:1 Dedicated', SLA: '99.9%' },
    { name: 'Ankleshwar GIDC Phase 2', status: 'Active Fiber Node', speed: '10 Gbps', latency: '2.4 ms', contention: '1:1 Dedicated', SLA: '99.9%' },
    { name: 'Ankleshwar GIDC Phase 3', status: 'Active Fiber Node', speed: '10 Gbps', latency: '2.1 ms', contention: '1:1 Dedicated', SLA: '99.9%' },
    { name: 'Ankleshwar GIDC Phase 4', status: 'Active Fiber Node', speed: '10 Gbps', latency: '2.5 ms', contention: '1:1 Dedicated', SLA: '99.9%' },
    { name: 'Panoli Industrial Estate', status: 'Active Fiber Node', speed: '1 Gbps', latency: '3.1 ms', contention: '1:1 Dedicated', SLA: '99.9%' },
    { name: 'Bharuch Commercial Hub', status: 'Active Fiber Node', speed: '10 Gbps', latency: '2.8 ms', contention: '1:1 Dedicated', SLA: '99.9%' }
  ];

  const active = nodes[selectedNode];

  return (
    <section className="py-16 bg-[#040814] border-t border-zinc-800 relative">
      <div className="container">
        
        <div className="text-center space-y-3 mb-10">
          <div className="badge-tag">Interactive Optical Fiber Topology</div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
            Ankleshwar & Bharuch <span className="gradient-text">GIDC Optical Nodes</span>
          </h2>
          <p className="text-sm text-slate-400 max-w-xl mx-auto">
            Tap any industrial zone node to verify live latency, optical bandwidth, and contention SLA.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Node Selector Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {nodes.map((node, idx) => (
              <motion.button
                key={idx}
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedNode(idx)}
                className={`p-4 rounded-xl border text-left transition-all flex items-center justify-between ${
                  selectedNode === idx
                    ? 'bg-zinc-900 border-cyan-400 text-white shadow-lg shadow-cyan-500/10'
                    : 'bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800'
                }`}
              >
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <MapPin className={`w-4 h-4 shrink-0 ${selectedNode === idx ? 'text-cyan-400' : 'text-zinc-500'}`} />
                  <span className="text-xs font-bold font-heading truncate">{node.name}</span>
                </div>
                <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0 ml-2"></span>
              </motion.button>
            ))}
          </div>

          {/* Right Selected Node Details Card */}
          <div className="lg:col-span-6">
            <motion.div
              key={selectedNode}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="glass-panel p-6 border border-cyan-500/30 space-y-6 bg-[#080E1E]"
            >
              <div className="flex flex-col sm:flex-row justify-between sm:items-center pb-4 border-b border-zinc-800 gap-2">
                <div className="min-w-0 flex-1">
                  <h3 className="text-base sm:text-xl font-bold text-white font-heading truncate">{active.name}</h3>
                  <p className="text-[11px] sm:text-xs font-mono text-emerald-400 mt-0.5 truncate">{active.status} • Symmetrical Fiber</p>
                </div>
                <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] sm:text-xs font-mono font-bold whitespace-nowrap self-start sm:self-auto shrink-0">
                  100% Serviceable
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 font-mono">
                <div className="bg-zinc-900/80 p-3.5 rounded-xl border border-zinc-800">
                  <div className="text-[10px] text-zinc-400 uppercase">Core Capacity</div>
                  <div className="text-lg font-bold text-cyan-400">{active.speed}</div>
                </div>

                <div className="bg-zinc-900/80 p-3.5 rounded-xl border border-zinc-800">
                  <div className="text-[10px] text-zinc-400 uppercase">Latency</div>
                  <div className="text-lg font-bold text-emerald-400">{active.latency}</div>
                </div>

                <div className="bg-zinc-900/80 p-3.5 rounded-xl border border-zinc-800">
                  <div className="text-[10px] text-zinc-400 uppercase">Contention Ratio</div>
                  <div className="text-lg font-bold text-indigo-400">{active.contention}</div>
                </div>

                <div className="bg-zinc-900/80 p-3.5 rounded-xl border border-zinc-800">
                  <div className="text-[10px] text-zinc-400 uppercase">SLA Guarantee</div>
                  <div className="text-lg font-bold text-purple-400">{active.SLA} Uptime</div>
                </div>
              </div>

              <button
                onClick={onOpenContact}
                className="w-full btn-primary py-3 text-xs uppercase font-bold tracking-wider"
              >
                Request Connection for {active.name} →
              </button>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
