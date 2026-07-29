import React from 'react';
import { Wifi, Download, ExternalLink, Code2, Heart } from 'lucide-react';

export default function Footer({ setActiveTab, onOpenPolicy, onOpenContact, onOpenSpeedTest }) {
  return (
    <footer className="relative bg-[#04060E] border-t border-slate-800 text-slate-400 pt-12 pb-8 mt-12">
      <div className="container space-y-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-10 border-b border-slate-800/80">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <button onClick={() => setActiveTab('home')} className="flex items-center gap-3 text-left">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                <Wifi className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-2xl text-white">TECHNOSYS</span>
                <span className="text-[10px] text-slate-400 uppercase font-medium">Sparkline Technosys Private Limited</span>
              </div>
            </button>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Technosys is Ankleshwar's premier Internet Service Provider, delivering high-speed 1:1 dedicated Leased Lines, Symmetrical Fiber, Smart Surveillance, and Enterprise IT solutions with guaranteed SLA.
            </p>

            {/* App Store Mockup Buttons */}
            <div className="pt-1">
              <div className="text-[11px] font-bold text-slate-300 uppercase mb-2">Get Subscriber Mobile App</div>
              <div className="flex flex-wrap gap-2">
                <button onClick={onOpenContact} className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs hover:border-cyan-500/40 transition-colors">
                  <Download className="w-4 h-4 text-cyan-400" />
                  <div className="text-left leading-tight">
                    <div className="text-[9px] text-slate-400">GET IT ON</div>
                    <div className="font-bold text-xs">Google Play</div>
                  </div>
                </button>

                <button onClick={onOpenContact} className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs hover:border-cyan-500/40 transition-colors">
                  <Download className="w-4 h-4 text-indigo-400" />
                  <div className="text-left leading-tight">
                    <div className="text-[9px] text-slate-400">DOWNLOAD ON THE</div>
                    <div className="font-bold text-xs">App Store</div>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Connectivity Services */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-heading">Services</h4>
            <ul className="space-y-2 text-xs">
              <li><button onClick={() => setActiveTab('services')} className="hover:text-cyan-400 transition-colors">Leased Line (1:1 ILL)</button></li>
              <li><button onClick={() => setActiveTab('services')} className="hover:text-cyan-400 transition-colors">Broadband Services</button></li>
              <li><button onClick={() => setActiveTab('services')} className="hover:text-cyan-400 transition-colors">Fiber Optic (FTTH)</button></li>
              <li><button onClick={() => setActiveTab('services')} className="hover:text-cyan-400 transition-colors">Smart Surveillance</button></li>
              <li><button onClick={() => setActiveTab('services')} className="hover:text-cyan-400 transition-colors">Campus Wi-Fi (Hotspot)</button></li>
              <li><button onClick={() => setActiveTab('services')} className="hover:text-cyan-400 transition-colors">OTT Platform Bundles</button></li>
            </ul>
          </div>

          {/* Compliance & Policies */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-heading">Policies & Governance</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onOpenPolicy('Privacy Policy')} className="hover:text-cyan-400 transition-colors text-left">
                  Privacy Policy (2025)
                </button>
              </li>
              <li>
                <button onClick={() => onOpenPolicy('Terms & Conditions')} className="hover:text-cyan-400 transition-colors text-left">
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button onClick={() => onOpenPolicy('Refund & Cancellation Policy')} className="hover:text-cyan-400 transition-colors text-left">
                  Refund & Cancellation Policy
                </button>
              </li>
              <li>
                <button onClick={() => onOpenPolicy('Terms & Conditions')} className="hover:text-cyan-400 transition-colors text-left">
                  Security & Acceptable Use
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Tools */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-heading">Tools & Portal</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={onOpenSpeedTest} className="hover:text-cyan-400 transition-colors flex items-center gap-1 text-cyan-300">
                  <span>Run Live Speed Test</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </li>
              <li><button onClick={() => setActiveTab('plans')} className="hover:text-cyan-400 transition-colors">Plan Estimator</button></li>
              <li><button onClick={() => setActiveTab('coverage')} className="hover:text-cyan-400 transition-colors">Check GIDC Feasibility</button></li>
              <li><button onClick={() => setActiveTab('portal')} className="hover:text-cyan-400 transition-colors">Subscriber Self-Care</button></li>
              <li><button onClick={() => setActiveTab('about')} className="hover:text-cyan-400 transition-colors">About STPL</button></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 pt-2">
          <div>
            Copyright © 2026 Technosys (Sparkline Technosys Private Limited). All Rights Reserved.
          </div>

          {/* Designer & Developer Credit */}
          <div className="flex items-center gap-2 bg-slate-900/80 px-3.5 py-1.5 rounded-full border border-slate-800 text-slate-400">
            <Code2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>Designed & Developed by</span>
            <a
              href="https://portfolio.khansaood.online/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-cyan-300 hover:text-cyan-200 underline decoration-cyan-500/50 hover:decoration-cyan-400 transition-colors flex items-center gap-1"
            >
              Saood Khan
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
