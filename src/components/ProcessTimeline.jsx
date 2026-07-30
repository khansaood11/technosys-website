import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, MapPin, Wrench, CheckCircle } from 'lucide-react';

export default function ProcessTimeline({ onOpenContact }) {
  const steps = [
    {
      num: '01',
      title: 'Contact & Inquiry',
      desc: 'Submit your requirement or call +91 70435 39045 for instant plan recommendation.',
      icon: PhoneCall,
      color: 'text-cyan-400 border-cyan-500/30 bg-cyan-950/30'
    },
    {
      num: '02',
      title: 'Feasibility Survey',
      desc: 'Our engineers conduct optical power level checks across Ankleshwar GIDC & Bharuch nodes.',
      icon: MapPin,
      color: 'text-purple-400 border-purple-500/30 bg-purple-950/30'
    },
    {
      num: '03',
      title: 'Fiber Installation',
      desc: 'Precision optical fiber drop cable deployment, fusion splicing, and ONT setup.',
      icon: Wrench,
      color: 'text-indigo-400 border-indigo-500/30 bg-indigo-950/30'
    },
    {
      num: '04',
      title: 'Gigabit Activation',
      desc: 'Speed test verification, SLA handover, and 24/7 dedicated NOC monitoring enabled.',
      icon: CheckCircle,
      color: 'text-emerald-400 border-emerald-500/30 bg-emerald-950/30'
    }
  ];

  return (
    <section className="py-16 bg-[#040711] border-t border-slate-800/80 relative">
      <div className="container">
        
        <div className="text-center space-y-3 mb-12">
          <div className="badge-tag">Seamless Onboarding Process</div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
            How To Get <span className="gradient-text">Connected In 4 Steps</span>
          </h2>
          <p className="text-sm text-slate-400 max-w-xl mx-auto">
            From initial consultation to symmetrical fiber activation in Ankleshwar & Bharuch.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="glass-panel p-6 relative border border-slate-800 hover:border-cyan-500/40 transition-all hover:-translate-y-2 space-y-4 group"
              >
                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded-xl border ${step.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-2xl font-black text-slate-700 group-hover:text-cyan-400 font-mono transition-colors">
                    {step.num}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white font-heading group-hover:text-cyan-300 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mt-2">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <button onClick={onOpenContact} className="btn-primary py-3 px-8 text-xs font-bold uppercase tracking-wider">
            Start Your Connection Request
          </button>
        </div>

      </div>
    </section>
  );
}
