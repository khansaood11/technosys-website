import React, { useState } from 'react';
import { Server, Wifi, Shield, Cpu, Tv, Radio, ArrowRight, CheckCircle2, X, Zap, Building, PhoneCall, MapPin, Tag } from 'lucide-react';

export default function ServicesSection({ onOpenContact }) {
  const [selectedService, setSelectedService] = useState(null);
  const [activePlanTab, setActivePlanTab] = useState('broadband'); // broadband, rate-matrix, leased-line

  // Official Technosys Fiber Broadband Rate Card Matrix
  const broadbandRates = [
    { speed: '20 Mbps', m12: '₹8,999', m18: '₹10,999', m24: '₹12,999', popular: false },
    { speed: '50 Mbps', m12: '₹10,999', m18: '₹13,999', m24: '₹16,999', popular: true },
    { speed: '60 Mbps', m12: '₹11,999', m18: '₹14,999', m24: '₹17,999', popular: false },
    { speed: '100 Mbps', m12: '₹16,999', m18: '₹19,999', m24: '₹22,999', popular: true }
  ];

  const services = [
    {
      id: 'leased-line',
      title: 'Internet Leased Line (ILL)',
      category: 'Enterprise Dedicated',
      icon: Server,
      accent: 'from-cyan-500 to-blue-600',
      tag: '1:1 Uncontended Bandwidth',
      desc: 'High-speed dedicated internet connection designed for continuous, mission-critical data transfer with guaranteed SLA.',
      features: [
        'Dedicated 1:1 symmetrical bandwidth (Upload = Download)',
        '99.9% Network Uptime SLA Guarantee with penalty credits',
        'Multiple redundant backbones (Zero single point of failure)',
        'Static IPv4 & IPv6 address allocation included',
        '24/7/365 Proactive NOC Monitoring & priority resolution'
      ],
      idealFor: 'GIDC Industrial Plants, Corporate Offices, IT/SaaS firms & Banking'
    },
    {
      id: 'broadband',
      title: 'Fiber Broadband Services',
      category: 'Home & Business FTTH',
      icon: Wifi,
      accent: 'from-indigo-500 to-purple-600',
      tag: 'Ultra-Fast Symmetrical Speed',
      desc: 'Cutting-edge fiber optic technology delivering high-speed internet for seamless remote work, streaming, and business ops.',
      features: [
        'Ultra-high speeds up to 100 Mbps - 1 Gbps',
        'Low latency & jitter-free for video calls & cloud apps',
        'Zero data throttling & truly unlimited data options',
        'Dual-band Gigabit Wi-Fi Router available',
        'Installation within 3 to 5 working days'
      ],
      idealFor: 'Residential complexes, retail stores, work-from-home pros'
    },
    {
      id: 'surveillance',
      title: 'Smart Surveillance & Security',
      category: 'Infrastructure',
      icon: Shield,
      accent: 'from-emerald-500 to-teal-600',
      tag: 'HD Cloud CCTV System',
      desc: 'Comprehensive smart IP surveillance solutions with remote cloud monitoring and AI activity detection.',
      features: [
        'High Definition 4K IP cameras with night vision',
        'Secure cloud & hybrid NVR storage options',
        'Remote mobile app access anytime, anywhere',
        'Motion detection alerts & automated perimeter security',
        'Full installation, wiring, and maintenance support'
      ],
      idealFor: 'Factories, warehouses, corporate campuses & gated communities'
    },
    {
      id: 'campus-wifi',
      title: 'Campus Wi-Fi (HotSpot)',
      category: 'Institutional High Density',
      icon: Radio,
      accent: 'from-blue-500 to-indigo-600',
      tag: 'High Density Mesh Network',
      desc: 'Robust enterprise Wi-Fi deployments capable of supporting hundreds of simultaneous active users with captive portal auth.',
      features: [
        'Enterprise-grade Wi-Fi Access Points with seamless roaming',
        'Customizable Captive Portal with OTP authentication',
        'Bandwidth throttling & user access control policies',
        'VLAN segmentation for guests & internal staff',
        'Complete coverage audit & RF spectrum mapping'
      ],
      idealFor: 'Colleges, schools, hospitals, hotels & tech parks'
    },
    {
      id: 'connectivity',
      title: 'Managed Connectivity Solutions',
      category: 'Custom Network',
      icon: Cpu,
      accent: 'from-purple-500 to-pink-600',
      tag: 'SD-WAN & Point-to-Point',
      desc: 'Tailored network infrastructure including Point-to-Point wireless bridges, SD-WAN, and cloud interconnects.',
      features: [
        'Point-to-Point (P2P) & Point-to-Multipoint (P2MP) link setup',
        'Managed SD-WAN for branch office interconnectivity',
        'Dual-ISP failover configuration (Active-Active / Active-Standby)',
        'Firewall & Unified Threat Management (UTM) setup',
        'Dedicated network architect consultation'
      ],
      idealFor: 'Multi-branch enterprises, logistics hubs & industrial plants'
    },
    {
      id: 'ott-platforms',
      title: 'OTT Entertainment Bundles',
      category: 'Value Added Service',
      icon: Tv,
      accent: 'from-orange-500 to-amber-600',
      tag: 'Stream 15+ Premium Apps',
      desc: 'Bundled high-speed fiber connectivity with top streaming platforms for all-in-one entertainment.',
      features: [
        'Single bill for High-Speed Broadband + OTT subscriptions',
        'Includes major platforms (Disney+ Hotstar, SonyLIV, Zee5, etc.)',
        'Smooth 4K UHD buffer-free playback guaranteed',
        'Multi-device simultaneous login options'
      ],
      idealFor: 'Homes, executive suites & hospitality rooms'
    }
  ];

  return (
    <section id="services" className="relative section-padding bg-[#070A14]">
      <div className="container relative z-10 space-y-20">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="badge-tag">
            <Server className="w-3.5 h-3.5 text-cyan-400" />
            <span>Our Official Service Portfolio & Rates</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Explore Technosys <span className="gradient-text">Fiber Broadband & ILL Plans</span>
          </h2>
          <p className="text-slate-400 text-base">
            Blazing fast internet at unbeatable prices. From long-term fiber broadband packages to dedicated 1:1 enterprise leased lines across Ankleshwar & Bharuch.
          </p>
        </div>

        {/* Official Fiber Broadband Plans Pricing Table (Transcribed from Rate Card Flyer) */}
        <div className="glass-panel p-6 sm:p-8 border border-cyan-500/30 space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 border-b border-zinc-800">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold mb-2">
                <Tag className="w-3.5 h-3.5" />
                <span>Official Technosys Fiber Rate Card</span>
              </div>
              <h3 className="text-2xl font-bold text-white font-heading">Fiber Broadband Plans & Tenure Matrix</h3>
            </div>
            <button onClick={onOpenContact} className="btn-primary py-2.5 text-xs font-bold">
              <span>Book Connection Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Pricing Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="border-b border-zinc-800 text-xs font-mono text-zinc-400 uppercase bg-zinc-950/60">
                  <th className="py-4 px-4">Speed</th>
                  <th className="py-4 px-4 text-cyan-400">12 Months</th>
                  <th className="py-4 px-4 text-indigo-400">18 Months</th>
                  <th className="py-4 px-4 text-purple-400">24 Months</th>
                  <th className="py-4 px-4">Data & Benefits</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/80">
                {broadbandRates.map((plan, idx) => (
                  <tr key={idx} className="hover:bg-zinc-900/60 transition-colors">
                    <td className="py-4 px-4 font-bold text-white font-mono text-base flex items-center gap-2">
                      <span>{plan.speed}</span>
                      {plan.popular && (
                        <span className="text-[10px] bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 px-2 py-0.5 rounded font-sans">
                          Popular
                        </span>
                      )}
                    </td>
                    <td className="py-4 px-4 font-mono font-bold text-cyan-300 text-base">{plan.m12}</td>
                    <td className="py-4 px-4 font-mono font-bold text-indigo-300 text-base">{plan.m18}</td>
                    <td className="py-4 px-4 font-mono font-bold text-purple-300 text-base">{plan.m24}</td>
                    <td className="py-4 px-4 text-xs text-zinc-300 font-mono">
                      <span className="text-emerald-400 font-semibold">Truly Unlimited Data</span> • 24/7 NOC Support
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Benefits & Terms Notes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-zinc-800 text-xs text-zinc-300 font-mono">
            
            <div className="bg-zinc-900/80 p-4 rounded-xl border border-zinc-800 space-y-2">
              <h4 className="font-bold text-white uppercase text-[11px] text-cyan-400">Benefits Of Technosys Fiber:</h4>
              <ul className="space-y-1.5 text-zinc-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Unlimited Data Usage (No FUP Limit)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>24/7 Dedicated Expert Customer Support</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
                  <span>High Quality Service & Buffer-Free Low Latency</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />
                  <span>Reliable Network Fiber Infrastructure</span>
                </li>
              </ul>
            </div>

            <div className="bg-zinc-900/80 p-4 rounded-xl border border-zinc-800 space-y-2">
              <h4 className="font-bold text-white uppercase text-[11px] text-amber-400">Terms & Conditions:</h4>
              <ul className="space-y-1 list-disc list-inside text-zinc-400 text-[11px]">
                <li>All prices are exclusive of 18% GST.</li>
                <li>Wi-Fi router available at extra charges (if required).</li>
                <li>Price will vary based on fiber feasibility.</li>
                <li>Installation within 3 to 5 working days from payment & documentation.</li>
              </ul>
            </div>

          </div>

          {/* Official Contact & Office Footer Bar */}
          <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 flex flex-wrap justify-between items-center gap-4 text-xs font-mono">
            <div className="flex items-center gap-2 text-zinc-300">
              <PhoneCall className="w-4 h-4 text-cyan-400" />
              <span>Hotline: 95122 25277 / +91 70435 39045</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-300">
              <MapPin className="w-4 h-4 text-emerald-400" />
              <span>315, Golden Square, Valia Rd, Ankleshwar, Dist - Bharuch</span>
            </div>
          </div>

        </div>

        {/* Featured Plans Comparison Grid (Broadband & Leased Line Detailed Cards) */}
        <div className="space-y-8">
          
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-slate-900/60 p-3 rounded-2xl border border-slate-800">
            <div className="text-sm font-bold text-white font-heading px-3">
              Featured Internet & Leased Line Plans
            </div>
            
            <div className="flex gap-2">
              <button
                onClick={() => setActivePlanTab('broadband')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activePlanTab === 'broadband'
                    ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/20'
                    : 'bg-slate-950 text-slate-400 hover:text-white'
                }`}
              >
                Broadband Plans (Domestic & Commercial)
              </button>

              <button
                onClick={() => setActivePlanTab('leased-line')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activePlanTab === 'leased-line'
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/20'
                    : 'bg-slate-950 text-slate-400 hover:text-white'
                }`}
              >
                Leased Line Plans (Semi & Dedicated 1:1)
              </button>
            </div>
          </div>

          {/* Broadband Plans View */}
          {activePlanTab === 'broadband' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fadeIn">
              
              {/* Domestic Broadband Card */}
              <div className="glass-panel p-8 border-cyan-500/30 space-y-6 relative flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-950/80 px-3 py-1 rounded-full border border-cyan-500/30">
                      Residential Plan
                    </span>
                    <Wifi className="w-6 h-6 text-cyan-400" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white font-heading">Domestic Broadband</h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Fast and unlimited internet for your home. Enjoy smooth streaming, gaming, and browsing with reliable service.
                    </p>
                  </div>

                  <ul className="space-y-3 pt-2">
                    <li className="flex items-center gap-2.5 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>High-Speed Internet for your daily streaming & gaming needs</span>
                    </li>
                    <li className="flex items-center gap-2.5 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>Unlimited data for non-stop home entertainment</span>
                    </li>
                    <li className="flex items-center gap-2.5 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>24/7 Support for seamless browsing</span>
                    </li>
                    <li className="flex items-center gap-2.5 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>Easy installation and setup in Ankleshwar</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-6 border-t border-slate-800">
                  <button onClick={onOpenContact} className="btn-primary w-full py-3.5 text-xs uppercase font-bold">
                    <span>Get Started - Connect Domestic</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Commercial Broadband Card */}
              <div className="glass-panel p-8 border-indigo-500/30 space-y-6 relative flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest bg-indigo-950/80 px-3 py-1 rounded-full border border-indigo-500/30">
                      Business Plan
                    </span>
                    <Building className="w-6 h-6 text-indigo-400" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white font-heading">Commercial Broadband</h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Power your business with high-performance internet tailored for SMEs and commercial shops.
                    </p>
                  </div>

                  <ul className="space-y-3 pt-2">
                    <li className="flex items-center gap-2.5 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                      <span>Guaranteed 98.9% uptime for business continuity</span>
                    </li>
                    <li className="flex items-center gap-2.5 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                      <span>Secure, scalable bandwidth solutions for offices</span>
                    </li>
                    <li className="flex items-center gap-2.5 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                      <span>Customizable plans for growing enterprises</span>
                    </li>
                    <li className="flex items-center gap-2.5 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                      <span>24/7 Expert technical monitoring and priority support</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-6 border-t border-slate-800">
                  <button onClick={onOpenContact} className="btn-secondary w-full py-3.5 text-xs uppercase font-bold border-indigo-500/40 text-indigo-300 hover:bg-indigo-500/10">
                    <span>Get Started - Connect Commercial</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          )}

          {/* Leased Line Plans View */}
          {activePlanTab === 'leased-line' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fadeIn">
              
              {/* Semi Leased Line Plan Card */}
              <div className="glass-panel p-8 border-purple-500/30 space-y-6 relative flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-bold text-purple-400 uppercase tracking-widest bg-purple-950/80 px-3 py-1 rounded-full border border-purple-500/30">
                      Semi Leased Line Plan
                    </span>
                    <Zap className="w-6 h-6 text-purple-400" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white font-heading">Semi Leased Line</h3>
                    <p className="text-xs text-slate-400 mt-1">
                      A flexible, cost-effective solution for SMEs seeking high-speed connection with shared bandwidth during non-peak hours.
                    </p>
                  </div>

                  <ul className="space-y-3 pt-2">
                    <li className="flex items-center gap-2.5 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                      <span>High-speed connection with bandwidth sharing during non-peak hours</span>
                    </li>
                    <li className="flex items-center gap-2.5 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                      <span>Scalable options designed specifically for growing SMEs</span>
                    </li>
                    <li className="flex items-center gap-2.5 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                      <span>Cost-effective alternative without full dedicated expense</span>
                    </li>
                    <li className="flex items-center gap-2.5 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                      <span>24/7 Monitoring to maintain steady performance</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-6 border-t border-slate-800">
                  <button onClick={onOpenContact} className="btn-secondary w-full py-3.5 text-xs uppercase font-bold border-purple-500/40 text-purple-300 hover:bg-purple-500/10">
                    <span>Get Started - Semi Leased Line</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Full Dedicated Leased Line Card */}
              <div className="glass-panel p-8 border-cyan-500/40 space-y-6 relative flex flex-col justify-between bg-gradient-to-b from-[#091126] to-[#060913]">
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-950/80 px-3 py-1 rounded-full border border-cyan-500/40">
                      Enterprise Dedicated 1:1
                    </span>
                    <Server className="w-6 h-6 text-cyan-400" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white font-heading">Dedicated Leased Line</h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Fully dedicated, high-performance internet access offering symmetrical speeds, enhanced security, and 99.9% SLA uptime guarantee.
                    </p>
                  </div>

                  <ul className="space-y-3 pt-2">
                    <li className="flex items-center gap-2.5 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>Fully dedicated 1:1 bandwidth for 24/7 mission-critical ops</span>
                    </li>
                    <li className="flex items-center gap-2.5 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>Symmetrical upload and download speeds (Equal Speed)</span>
                    </li>
                    <li className="flex items-center gap-2.5 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>Contractual 99.9% SLA Uptime with credit backup</span>
                    </li>
                    <li className="flex items-center gap-2.5 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>24/7 Expert technical support, static IPs & NOC monitoring</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-6 border-t border-slate-800">
                  <button onClick={onOpenContact} className="btn-primary w-full py-3.5 text-xs uppercase font-bold">
                    <span>Get Started - Dedicated ILL</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          )}

        </div>

        {/* Core Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((srv) => {
            const Icon = srv.icon;
            return (
              <div
                key={srv.id}
                className="glass-panel glass-panel-interactive p-8 flex flex-col justify-between group border-slate-800/80 hover:border-cyan-500/40 relative overflow-hidden"
              >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${srv.accent}`}></div>

                <div className="space-y-6">
                  <div className="flex justify-between items-start">
                    <div className={`w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}>
                      <Icon className="w-7 h-7 text-cyan-400" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 bg-slate-900/80 px-2.5 py-1 rounded-full border border-slate-800">
                      {srv.category}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white font-heading group-hover:text-cyan-300 transition-colors">
                      {srv.title}
                    </h3>
                    <div className="text-xs font-semibold text-cyan-400 mt-1">{srv.tag}</div>
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed">
                    {srv.desc}
                  </p>

                  <ul className="space-y-2 pt-2 border-t border-slate-800/80">
                    {srv.features.slice(0, 3).map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedService(srv)}
                    className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 transition-colors"
                  >
                    <span>View Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={onOpenContact}
                    className="px-3.5 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 text-xs font-semibold transition-colors"
                  >
                    Inquire
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Service Details Modal */}
      {selectedService && (
        <div className="modal-overlay">
          <div className="glass-panel w-full max-w-xl p-6 sm:p-8 relative border border-cyan-500/30 shadow-2xl space-y-6">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <selectedService.icon className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">{selectedService.category}</span>
                <h3 className="text-2xl font-bold text-white font-heading">{selectedService.title}</h3>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              {selectedService.desc}
            </p>

            <div className="space-y-3 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Complete Feature Breakdown</div>
              <ul className="space-y-2.5">
                {selectedService.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-3.5 rounded-xl bg-cyan-950/40 border border-cyan-500/20 text-xs text-cyan-300 flex items-center justify-between">
              <div>
                <span className="font-semibold text-slate-400 block">Recommended Use Case:</span>
                <span className="font-medium text-white">{selectedService.idealFor}</span>
              </div>
            </div>

            <div className="flex gap-4 pt-2">
              <button
                onClick={() => { setSelectedService(null); onOpenContact(); }}
                className="btn-primary w-full py-3.5 text-xs uppercase font-bold"
              >
                Request Service Quote / SLA Proposal
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
