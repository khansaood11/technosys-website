import React from 'react';
import { ShieldCheck, Zap, Clock, Headphones, Award, Check, X, ArrowRight } from 'lucide-react';

export default function WhyChooseUs({ onOpenContact }) {
  return (
    <section id="about" className="relative section-padding bg-[#050812]">
      <div className="container relative z-10 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="badge-tag">
            <Award className="w-3.5 h-3.5 text-cyan-400" />
            <span>Why Technosys Stands Out</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Our Unique <span className="gradient-text">Value Proposition</span>
          </h2>
          <p className="text-slate-400 text-base">
            Growing businesses need guaranteed performance. Discover why Technosys is the trusted ISP partner for over 15 years in Ankleshwar.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Zap,
              title: 'Dedicated 1:1 Bandwidth',
              desc: 'No shared contention ratios. You get 100% of your allocated bandwidth 24/7 with symmetrical upload and download speeds.'
            },
            {
              icon: ShieldCheck,
              title: '99.9% Uptime Guarantee',
              desc: 'Built on dual redundant optical fiber rings with automated failover and formal Service Level Agreements (SLA).'
            },
            {
              icon: Headphones,
              title: '24/7 Local NOC Support',
              desc: 'Direct access to engineers in Ankleshwar, not automated call centers. Immediate resolution for any technical ticket.'
            },
            {
              icon: Clock,
              title: 'Same-Day Service Guarantee',
              desc: 'Rapid technician dispatch for new installations, link upgrades, and emergency field service in Bharuch district.'
            }
          ].map((item, idx) => (
            <div key={idx} className="glass-panel glass-panel-interactive p-6 space-y-4 border-slate-800">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white font-heading">{item.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Comparison Matrix: Dedicated Leased Line vs Shared Broadband */}
        <div className="glass-panel p-8 border-slate-800 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <h3 className="text-xl font-bold text-white font-heading">Internet Leased Line vs Shared Broadband</h3>
              <p className="text-xs text-slate-400">Why enterprise businesses choose Technosys 1:1 Leased Lines</p>
            </div>
            <span className="text-xs font-mono text-cyan-400 bg-cyan-950/60 px-3 py-1 rounded border border-cyan-500/30">STPL SLA Standard</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 font-mono">
                  <th className="py-3 px-4">Feature Comparison</th>
                  <th className="py-3 px-4 text-cyan-400 font-bold bg-cyan-950/20">Technosys 1:1 Dedicated Leased Line</th>
                  <th className="py-3 px-4 text-slate-400">Standard Shared Broadband</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-slate-300">
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-white">Contention Ratio</td>
                  <td className="py-3.5 px-4 font-bold text-emerald-400 bg-cyan-950/20">1:1 Dedicated (Guaranteed Full Speed)</td>
                  <td className="py-3.5 px-4 text-slate-400">1:20 to 1:50 Shared (Fluctuates at Peak Hours)</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-white">Speed Symmetry</td>
                  <td className="py-3.5 px-4 font-bold text-emerald-400 bg-cyan-950/20">Symmetrical (Equal Upload & Download)</td>
                  <td className="py-3.5 px-4 text-slate-400">Asymmetrical (Slow Uploads)</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-white">Network SLA Uptime</td>
                  <td className="py-3.5 px-4 font-bold text-emerald-400 bg-cyan-950/20">99.9% Contractual SLA</td>
                  <td className="py-3.5 px-4 text-slate-400">Best Effort (No Credit Guarantee)</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-white">Static IP Addresses</td>
                  <td className="py-3.5 px-4 font-bold text-emerald-400 bg-cyan-950/20">Multiple Public IPs Included (/29, /28)</td>
                  <td className="py-3.5 px-4 text-slate-400">Dynamic IP only</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-white">Support SLA</td>
                  <td className="py-3.5 px-4 font-bold text-emerald-400 bg-cyan-950/20">24/7 Dedicated Account Engineer</td>
                  <td className="py-3.5 px-4 text-slate-400">Standard Queue Support</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="pt-4 text-center">
            <button onClick={onOpenContact} className="btn-primary py-3.5 px-8 text-xs font-bold uppercase">
              <span>Upgrade Your Enterprise Connection Today</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
