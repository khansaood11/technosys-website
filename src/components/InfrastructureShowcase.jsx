import React from 'react';
import { motion } from 'framer-motion';
import { Server, Activity, ShieldCheck, Cpu, HardDrive, ShieldAlert, CheckCircle2 } from 'lucide-react';

export default function InfrastructureShowcase({ onOpenContact }) {
  const infraSpecs = [
    {
      title: 'Optical Core Data Center & PoP Nodes',
      desc: 'High-density fiber distribution PoPs in Ankleshwar GIDC & Bharuch equipped with dual redundant UPS backup and fiber ring topology.',
      icon: Server,
      tag: '10 Gbps Capacity',
      metrics: ['Ring Architecture', 'BGP Peer Redundancy', 'Cisco & Juniper Core']
    },
    {
      title: '24/7/365 Proactive NOC Operations',
      desc: 'Real-time telemetry and network operations center monitoring link latency, jitter, and link health 24 hours a day.',
      icon: Activity,
      tag: '99.9% SLA Guarantee',
      metrics: ['Automatic Failover', '< 2.5ms Local Latency', 'Proactive Alerts']
    },
    {
      title: 'Dedicated Industrial Fiber Feasibility',
      desc: 'Over 150+ km of underground and aerial fiber optic cables deployed across Phase 1, Phase 2, Phase 3, Phase 4, Panoli & Jhagadia.',
      icon: HardDrive,
      tag: '1:1 Uncontended Bandwidth',
      metrics: ['Symmetrical Speeds', 'Zero FUP Limits', 'Rapid 3-5 Day Install']
    }
  ];

  return (
    <section className="py-20 bg-[#040713] border-t border-b border-zinc-800/80 relative">
      <div className="container">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="badge-tag">Physical Network Backbone</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading">
            Built On Real <span className="gradient-text">Telecom Infrastructure</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400">
            Backed by 16 years of telecom engineering. We own and operate dedicated optical fiber PoPs, Cisco core switching, and a round-the-clock Network Operations Center (NOC).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {infraSpecs.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-panel p-8 border border-zinc-800 hover:border-cyan-500/40 transition-all hover:-translate-y-2 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div className="p-3.5 rounded-2xl bg-cyan-950/80 border border-cyan-500/30 text-cyan-400">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-cyan-400 bg-cyan-950 px-2.5 py-1 rounded border border-cyan-500/30 uppercase">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white font-heading">{item.title}</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">{item.desc}</p>

                  <div className="space-y-2 pt-2 border-t border-zinc-800/80">
                    {item.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="flex items-center gap-2 text-xs font-mono text-zinc-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{m}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={onOpenContact}
                  className="w-full py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-cyan-400 text-xs font-mono font-semibold transition-colors"
                >
                  Request Technical SLA Audit →
                </button>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
