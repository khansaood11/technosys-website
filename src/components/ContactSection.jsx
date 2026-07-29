import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Building, MessageSquare } from 'lucide-react';

export default function ContactSection({ isOpenModal, onCloseModal }) {
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

  const formContent = (
    <div className="space-y-6">
      {submitted ? (
        <div className="p-8 text-center bg-cyan-950/40 rounded-2xl border border-cyan-500/40 space-y-4 animate-fadeIn">
          <div className="w-14 h-14 rounded-full bg-cyan-500/20 text-cyan-400 mx-auto flex items-center justify-center">
            <CheckCircle2 className="w-8 h-8 text-emerald-400" />
          </div>
          <h3 className="text-2xl font-bold text-white font-heading">Thank You!</h3>
          <p className="text-slate-300 text-sm max-w-md mx-auto">
            Your connection inquiry has been received by our Ankleshwar Sales & NOC Team. A Senior Network Architect will call you at <strong className="text-cyan-400">+91 70435 39045</strong> within 30 minutes.
          </p>
          <div className="pt-2 font-mono text-xs text-cyan-400">Reference Ticket ID: #STPL-REQ-2026</div>
          <button
            onClick={() => setSubmitted(false)}
            className="btn-secondary py-2.5 px-6 text-xs uppercase font-bold mt-4"
          >
            Submit Another Request
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">Full Name *</label>
              <input
                type="text"
                required
                placeholder="e.g. Rajesh Shah"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-slate-200 text-sm focus:border-cyan-400 focus:outline-none"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">Company / Plant Name</label>
              <input
                type="text"
                placeholder="e.g. Chemicals Pvt Ltd"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-slate-200 text-sm focus:border-cyan-400 focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">Mobile Number *</label>
              <input
                type="tel"
                required
                placeholder="+91 70435 39045"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-slate-200 text-sm focus:border-cyan-400 focus:outline-none font-mono"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">Email Address</label>
              <input
                type="email"
                placeholder="name@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-slate-200 text-sm focus:border-cyan-400 focus:outline-none"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">Service Required</label>
            <select
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-slate-200 text-sm focus:border-cyan-400 focus:outline-none"
            >
              <option value="Internet Leased Line (1:1 ILL)">Internet Leased Line (1:1 Dedicated SLA)</option>
              <option value="High Speed Fiber Broadband">High Speed Fiber Broadband (FTTH)</option>
              <option value="Smart Surveillance & CCTV">Smart Surveillance & CCTV Security</option>
              <option value="Campus Wi-Fi (HotSpot)">Campus Wi-Fi (HotSpot Deployment)</option>
              <option value="Managed IT & SD-WAN">Managed IT & SD-WAN Connectivity</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">Installation Address / Area</label>
            <input
              type="text"
              placeholder="Plot No / GIDC Phase / Street Address, Ankleshwar"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-slate-200 text-sm focus:border-cyan-400 focus:outline-none"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">Additional Requirements</label>
            <textarea
              rows="3"
              placeholder="Tell us about your required speed (e.g. 100 Mbps / 1 Gbps) or setup date..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-slate-200 text-sm focus:border-cyan-400 focus:outline-none"
            ></textarea>
          </div>

          <button type="submit" className="btn-primary w-full py-4 text-xs font-bold uppercase tracking-wider">
            <Send className="w-4 h-4" />
            <span>Submit Connection Request</span>
          </button>
        </form>
      )}
    </div>
  );

  return (
    <section id="contact" className="relative section-padding bg-[#070A14]">
      <div className="container relative z-10 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="badge-tag">
            <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
            <span>Connect Now</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Upgrade Your Internet Experience <span className="gradient-text">Today</span>
          </h2>
          <p className="text-slate-400 text-base">
            Contact Sparkline Technosys now to discover unparalleled internet solutions tailored to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Office Contact Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Primary Hotline Highlight */}
            <div className="glass-panel p-6 border-cyan-500/40 bg-gradient-to-r from-cyan-950/40 to-indigo-950/40 space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-cyan-400">Primary Contact Hotline</div>
              <a href="tel:+917043539045" className="text-2xl font-black text-white font-mono hover:text-cyan-300 transition-colors flex items-center gap-3">
                <Phone className="w-6 h-6 text-cyan-400 animate-pulse" />
                <span>+91 70435 39045</span>
              </a>
              <p className="text-xs text-slate-400">Instant sales inquiry, optical feasibility & support line</p>
            </div>

            {/* Corporate Office */}
            <div className="glass-panel p-6 border-slate-800 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Building className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider">Corporate Office</div>
                  <h3 className="text-base font-bold text-white">Technosys Golden Square Hub</h3>
                </div>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                315, Golden Square, Valia Road, Near Jayaben Modi Hospital, Ankleshwar – 393002, Gujarat, India.
              </p>
            </div>

            {/* Registered Office */}
            <div className="glass-panel p-6 border-slate-800 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-indigo-400 uppercase tracking-wider">Registered Office</div>
                  <h3 className="text-base font-bold text-white">Amardeep Complex Office</h3>
                </div>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                C-18/19, First Floor, Amardeep Complex, Rajpipla Road, Ankleshwar – 393002, Gujarat, India.
              </p>
            </div>

            {/* Email Card */}
            <div className="glass-panel p-5 border-slate-800">
              <a href="mailto:sales@technosysonline.com" className="flex items-center gap-3 text-slate-200 hover:text-cyan-400 transition-colors text-xs">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span className="font-semibold">sales@technosysonline.com</span>
              </a>
            </div>

          </div>

          {/* Form */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 border-cyan-500/30">
            <div className="border-b border-slate-800 pb-4 mb-6">
              <h3 className="text-xl font-bold text-white font-heading">Send Us a Direct Connection Inquiry</h3>
              <p className="text-xs text-slate-400">Receive a customized SLA proposal and optical feasibility check</p>
            </div>
            {formContent}
          </div>

        </div>

      </div>
    </section>
  );
}
