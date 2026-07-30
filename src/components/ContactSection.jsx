import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Building, MessageSquare, ShieldCheck, ExternalLink, Clock, Sparkles } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    service: 'Internet Leased Line (1:1 ILL)',
    address: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative section-padding bg-[#050814] min-h-screen">
      
      {/* Standalone Canvas Background Glow */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="glow-orb glow-cyan w-[600px] h-[600px] top-10 left-10 opacity-10"></div>
        <div className="glow-orb glow-purple w-[500px] h-[500px] bottom-10 right-10 opacity-10"></div>
      </div>

      <div className="container relative z-10 space-y-12 sm:space-y-16">
        
        {/* Dedicated Standalone Canvas Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold shadow-lg">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>Instant 1:1 Feasibility & SLA Consultation</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight font-heading">
            Connect With Technosys <span className="gradient-text">NOC Team</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Get instant optical feasibility checks, custom 1:1 dedicated leased line proposals, or direct 24/7 hotline assistance from our Ankleshwar telecom NOC engineers.
          </p>
        </div>

        {/* 2-Column Standalone Canvas Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Direct Official Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Hotline Call Card */}
            <div className="glass-panel p-6 border-cyan-500/40 bg-gradient-to-r from-cyan-950/50 via-indigo-950/30 to-black space-y-3 relative overflow-hidden group">
              <div className="flex justify-between items-center">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">24/7 NOC Direct Hotline</div>
                <span className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-500/30">
                  <span className="live-indicator"></span>
                  <span>ONLINE</span>
                </span>
              </div>

              <a
                href="tel:+917043539045"
                className="text-2xl sm:text-3xl font-black text-white font-mono hover:text-cyan-300 transition-colors flex items-center gap-3"
              >
                <Phone className="w-7 h-7 text-cyan-400 animate-pulse shrink-0" />
                <span>+91 70435 39045</span>
              </a>

              <div className="text-xs text-zinc-400 font-mono pt-1 flex items-center gap-2">
                <span>Secondary: 95122 25277</span>
                <span>•</span>
                <span className="text-emerald-400 font-semibold">Immediate Response</span>
              </div>
            </div>

            {/* Corporate Headquarters Hub Card */}
            <div className="glass-panel p-6 border-zinc-800 space-y-4 hover:border-cyan-500/40 transition-colors">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 shrink-0">
                  <Building className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider">Corporate Headquarters</div>
                  <h3 className="text-base font-bold text-white font-heading">Technosys Golden Square Hub</h3>
                </div>
              </div>

              <p className="text-xs text-zinc-300 leading-relaxed font-mono">
                315, Golden Square, Valia Road, Near Jayaben Modi Hospital, Ankleshwar – 393002, Dist - Bharuch, Gujarat.
              </p>

              <a
                href="https://maps.google.com/?q=Ankleshwar+Valia+Rd"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <span>Open in Google Maps Navigation</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Registered Office Card */}
            <div className="glass-panel p-6 border-zinc-800 space-y-3 hover:border-indigo-500/40 transition-colors">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-indigo-950/80 border border-indigo-500/30 text-indigo-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-indigo-400 uppercase tracking-wider">Registered Office</div>
                  <h3 className="text-base font-bold text-white font-heading">Amardeep Complex Office</h3>
                </div>
              </div>

              <p className="text-xs text-zinc-300 leading-relaxed font-mono">
                C-18/19, First Floor, Amardeep Complex, Rajpipla Road, Ankleshwar – 393002, Gujarat, India.
              </p>
            </div>

            {/* Email & Business Hours Card */}
            <div className="glass-panel p-5 border-zinc-800 flex flex-col gap-2.5 text-xs font-mono">
              <a href="mailto:sales@techosysonline.com" className="flex items-center gap-2.5 text-zinc-200 hover:text-cyan-400 transition-colors">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="font-semibold">sales@techosysonline.com</span>
              </a>
              <div className="flex items-center gap-2.5 text-zinc-400">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Working Hours: Mon - Sat (9:00 AM - 8:00 PM)</span>
              </div>
            </div>

          </div>

          {/* Right Column: Standalone Direct Connection Request Form Canvas */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 border-cyan-500/30 space-y-6">
            
            <div className="border-b border-zinc-800 pb-4">
              <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">Request Feasibility Survey & SLA Proposal</h3>
              <p className="text-xs text-zinc-400 mt-1">Fill out your details for immediate optical fiber node lookup and customized rate quotation.</p>
            </div>

            {submitted ? (
              <div className="p-8 text-center bg-cyan-950/40 rounded-2xl border border-cyan-500/40 space-y-4 animate-fadeIn">
                <div className="w-14 h-14 rounded-full bg-cyan-500/20 text-cyan-400 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold text-white font-heading">Inquiry Ticket Received!</h3>
                <p className="text-zinc-300 text-sm max-w-md mx-auto">
                  Your connection request has been logged. Our Senior Network Architect will contact you at <strong className="text-cyan-400">{formData.phone || '+91 70435 39045'}</strong> within 30 minutes.
                </p>
                <div className="pt-2 font-mono text-xs text-cyan-400 bg-zinc-900 py-2 px-4 rounded border border-zinc-800 inline-block">
                  Reference Ticket ID: #STPL-REQ-2026-99
                </div>
                <div className="pt-3">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-secondary py-2.5 px-6 text-xs uppercase font-bold"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh Shah"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-zinc-900 border border-zinc-700 rounded-xl p-3 text-zinc-200 text-sm focus:border-cyan-400 focus:outline-none"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider">Company / Industrial Plant Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Asian Paints / Pharma Unit"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-zinc-900 border border-zinc-700 rounded-xl p-3 text-zinc-200 text-sm focus:border-cyan-400 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider">Mobile Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 70435 39045"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-zinc-900 border border-zinc-700 rounded-xl p-3 text-zinc-200 text-sm focus:border-cyan-400 focus:outline-none font-mono"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider">Email Address</label>
                    <input
                      type="email"
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-zinc-900 border border-zinc-700 rounded-xl p-3 text-zinc-200 text-sm focus:border-cyan-400 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider">Required Telecom Solution</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-xl p-3 text-zinc-200 text-sm focus:border-cyan-400 focus:outline-none"
                  >
                    <option value="Internet Leased Line (1:1 ILL)">Internet Leased Line (1:1 Dedicated SLA Guarantee)</option>
                    <option value="High Speed Fiber Broadband">High Speed Fiber Broadband (FTTH)</option>
                    <option value="Smart Surveillance & CCTV">Smart IP Surveillance & CCTV Cloud System</option>
                    <option value="Campus Wi-Fi (HotSpot)">High-Density Campus Wi-Fi & HotSpot Setup</option>
                    <option value="Managed IT & SD-WAN">Managed IT, SD-WAN & P2P Interconnects</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider">Installation Location / Area</label>
                  <input
                    type="text"
                    placeholder="e.g. Plot No, Ankleshwar GIDC Phase 1-4 / Panoli / Jhagadia"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-xl p-3 text-zinc-200 text-sm focus:border-cyan-400 focus:outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider">Additional Bandwidth / SLA Requirements</label>
                  <textarea
                    rows="3"
                    placeholder="Specify target speed (e.g. 100 Mbps / 1 Gbps) or preferred installation timeline..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-xl p-3 text-zinc-200 text-sm focus:border-cyan-400 focus:outline-none"
                  ></textarea>
                </div>

                <div className="space-y-2 pt-2">
                  <button type="submit" className="btn-primary w-full py-4 text-xs font-bold uppercase tracking-wider">
                    <Send className="w-4 h-4" />
                    <span>Submit Connection Inquiry →</span>
                  </button>

                  <div className="flex items-center justify-center gap-1.5 text-[10px] font-mono text-zinc-400 pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Protected by Technosys Anti-Spam & 256-bit SSL Encryption Shield</span>
                  </div>
                </div>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
