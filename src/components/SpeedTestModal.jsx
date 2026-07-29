import React, { useState } from 'react';
import { X, Gauge, ExternalLink, RefreshCw, Server } from 'lucide-react';

export default function SpeedTestModal({ isOpen, onClose, onConnect }) {
  const [iframeKey, setIframeKey] = useState(0);

  if (!isOpen) return null;

  const handleRefresh = () => {
    setIframeKey(prev => prev + 1);
  };

  return (
    <div className="modal-overlay">
      <div className="glass-panel w-full max-w-3xl h-[88vh] sm:h-[82vh] p-6 sm:p-8 relative border border-cyan-500/30 shadow-2xl flex flex-col justify-between overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors z-20"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4 pr-10">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
              <Gauge className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white font-heading flex items-center gap-2">
                <span>Real HTML5 Speedtest Engine</span>
                <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-500/30">
                  Ookla / OpenSpeedtest Powered
                </span>
              </h3>
              <p className="text-xs text-slate-400">Direct real-time bandwidth, latency & packet loss testing</p>
            </div>
          </div>

          <button
            onClick={handleRefresh}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Reload Test</span>
          </button>
        </div>

        {/* Real HTML5 Speed Test Engine Window with Seamless Dark Integration */}
        <div className="flex-1 my-4 bg-[#050812] rounded-2xl border border-slate-800 overflow-hidden relative shadow-inner flex items-center justify-center">
          <iframe
            key={iframeKey}
            src="https://openspeedtest.com/speedtest?theme=dark"
            title="Real Network Speed Test"
            className="w-full h-full border-0 rounded-2xl filter contrast-[1.05] brightness-[0.95]"
            allow="autoplay; encrypted-media"
          ></iframe>
        </div>

        {/* Modal Footer Controls */}
        <div className="pt-3 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-xs text-slate-400">
            <Server className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>Server Node: Auto-Selected Nearest ISP Server</span>
            <a
              href="https://www.speedtest.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline flex items-center gap-1 text-[11px] font-semibold"
            >
              <span>Open Ookla Speedtest</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="flex gap-3 w-full sm:w-auto">
            <button
              onClick={() => { onClose(); onConnect(); }}
              className="btn-primary w-full sm:w-auto py-2.5 px-6 text-xs uppercase font-bold tracking-wider"
            >
              Upgrade to Technosys Symmetrical Fiber
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
