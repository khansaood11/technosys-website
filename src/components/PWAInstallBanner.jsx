import React, { useState, useEffect } from 'react';
import { Download, X, Smartphone, CheckCircle } from 'lucide-react';

export default function PWAInstallBanner() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showBanner, setShowBanner] = useState(false);
  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    // Check if already in standalone mode
    if (window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone) {
      setInstalled(true);
      return;
    }

    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowBanner(true);
    };

    const handleAppInstalled = () => {
      setInstalled(true);
      setShowBanner(false);
      setDeferredPrompt(null);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    // Show prompt preview for demo / iOS users if not dismissed
    const dismissed = localStorage.getItem('technosys_pwa_dismissed');
    if (!dismissed && !installed) {
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 3000);
      return () => clearTimeout(timer);
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, [installed]);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setInstalled(true);
      }
      setDeferredPrompt(null);
      setShowBanner(false);
    } else {
      // iOS / Chrome manual instruction toast
      alert('To install Technosys App:\n1. Tap the Share icon in browser\n2. Select "Add to Home Screen"');
    }
  };

  const handleDismiss = () => {
    setShowBanner(false);
    localStorage.setItem('technosys_pwa_dismissed', 'true');
  };

  if (!showBanner || installed) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50 animate-bounce-subtle">
      <div className="glass-panel p-4 rounded-2xl border border-cyan-500/40 shadow-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 relative flex items-center justify-between gap-3">
        
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
            <Smartphone className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h4 className="text-sm font-bold text-white font-heading">Technosys App</h4>
              <span className="text-[10px] bg-cyan-500/20 text-cyan-300 font-mono px-1.5 py-0.2 rounded border border-cyan-500/30">PWA</span>
            </div>
            <p className="text-xs text-slate-300">Install for instant Fiber management & Speed Test</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleInstallClick}
            className="btn-primary py-2 px-3.5 text-xs font-bold flex items-center gap-1.5 shrink-0"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Install</span>
          </button>
          <button
            onClick={handleDismiss}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
