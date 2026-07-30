import React from 'react';
import { motion } from 'framer-motion';
import { Building2, GraduationCap, Factory, ShieldCheck } from 'lucide-react';

export default function CorporateClients() {
  const clientCategories = [
    {
      category: 'Major Industrial & Pharma Leaders',
      zone: 'Ankleshwar GIDC Hub',
      icon: Factory,
      color: 'text-cyan-400 border-cyan-500/30 bg-cyan-950/30',
      clients: ['Asian Paints', 'Sajjan India (Unit 1 & 2)', 'Intas Pharmaceuticals', 'Reine Lifescience']
    },
    {
      category: 'Panoli Industrial Zone Clients',
      zone: 'Panoli GIDC Cluster',
      icon: Building2,
      color: 'text-emerald-400 border-emerald-500/30 bg-emerald-950/30',
      clients: ['Bajaj Healthcare', 'Nagindas Bhayani', 'BR Agro', 'Shree Ganesh Lifescience', 'Sawariya Group']
    },
    {
      category: 'Jhagadia Industrial Hub Leaders',
      zone: 'Jhagadia GIDC Belt',
      icon: ShieldCheck,
      color: 'text-indigo-400 border-indigo-500/30 bg-indigo-950/30',
      clients: ['Saint-Gobain', 'Evonik Silica', 'Panoli Intermediate', 'V Transport', 'Aiedan', 'Modheshwari Industries', 'Rang Chemical', 'Suratan Petroleum']
    },
    {
      category: 'Educational & Academic Institutions',
      zone: 'School & Campus Network',
      icon: GraduationCap,
      color: 'text-purple-400 border-purple-500/30 bg-purple-950/30',
      clients: ['Candrabala Modi Academy', 'Chanakya Vidhalay', 'Swami School']
    }
  ];

  return (
    <section className="py-16 bg-[#040713] border-t border-zinc-800/80 relative">
      <div className="container">
        
        <div className="text-center space-y-3 mb-12">
          <div className="badge-tag">Trusted Enterprise Network</div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
            Trusted By <span className="gradient-text">Industrial & Corporate Giants</span>
          </h2>
          <p className="text-sm text-zinc-400 max-w-2xl mx-auto">
            Powering mission-critical 1:1 dedicated optical fiber lines for premier enterprises across Ankleshwar, Panoli, Jhagadia & Bharuch.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {clientCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-panel p-5 sm:p-6 border border-zinc-800 hover:border-cyan-500/40 transition-all hover:-translate-y-1 space-y-4"
              >
                <div className="flex items-center justify-between pb-3 border-b border-zinc-800/80 gap-2">
                  <div className="flex items-center gap-2.5 overflow-hidden">
                    <div className={`p-2 rounded-xl border shrink-0 ${cat.color}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-sm sm:text-base font-bold text-white font-heading truncate">{cat.category}</h3>
                      <p className="text-[10px] sm:text-[11px] font-mono text-zinc-400 truncate">{cat.zone}</p>
                    </div>
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-mono bg-zinc-800 text-cyan-400 px-2 py-0.5 rounded border border-zinc-700 whitespace-nowrap shrink-0">
                    1:1 ILL SLA
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  {cat.clients.map((client, cIdx) => (
                    <span
                      key={cIdx}
                      className="px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg bg-zinc-900/90 border border-zinc-800 text-[11px] sm:text-xs font-semibold text-zinc-200 hover:text-white hover:border-zinc-700 transition-colors flex items-center gap-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0"></span>
                      <span className="whitespace-nowrap">{client}</span>
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
