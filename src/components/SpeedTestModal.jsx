import React, { useState } from 'react';
import { X, Gauge, RefreshCw, Server } from 'lucide-react';

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
          className="absolute top-5 right-5 p-2 rounded-xl bg-zinc-800/80 text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors z-20"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-zinc-800/80 pb-4 pr-12">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
              <Gauge className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white font-heading flex items-center gap-2">
                <span>Technosys Network Speedtest</span>
                <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/80 px-2.5 py-0.5 rounded border border-cyan-500/30">
                  Real-Time SLA Test
                </span>
              </h3>
              <p className="text-xs text-zinc-400">Direct bandwidth, latency & packet loss testing</p>
            </div>
          </div>

          <button
            onClick={handleRefresh}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 text-xs font-semibold transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Reload Test</span>
          </button>
        </div>

        {/* Real Speed Test Engine Window with Perfect Dark Integration */}
        <div className="flex-1 my-4 bg-[#060B18] rounded-2xl border border-zinc-800/80 overflow-hidden relative shadow-inner flex items-center justify-center">
          <iframe
            key={iframeKey}
            src="https://openspeedtest.com/speedtest?theme=dark"
            title="Technosys Network Speed Test"
            className="w-full h-full border-0 rounded-2xl filter contrast-[1.05] brightness-[0.98]"
            allow="autoplay; encrypted-media"
          ></iframe>
        </div>

        {/* Modal Footer Controls with Proper Clean Alignment */}
        <div className="pt-3 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 text-xs text-zinc-400 font-mono">
            <Server className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>Server Node: Auto-Selected Nearest Technosys Fiber POP</span>
          </div>

          <div className="flex gap-3 w-full sm:w-auto justify-end">
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
