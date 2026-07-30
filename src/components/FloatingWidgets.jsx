import React, { useState, useEffect } from 'react';
import { ArrowUp, MessageSquare } from 'lucide-react';

export default function FloatingWidgets() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = "https://wa.me/917043539045?text=" + encodeURIComponent("Hi Technosys Team, I would like to inquire about Fiber Broadband / Dedicated Leased Line services in Ankleshwar/Bharuch.");

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {/* WhatsApp Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        title="Chat with Technosys Support on WhatsApp"
        className="w-12 h-12 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-xl shadow-emerald-500/30 flex items-center justify-center transition-all hover:scale-110 group relative"
      >
        <MessageSquare className="w-6 h-6 fill-current" />
        <span className="absolute right-14 bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg border border-slate-800 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
          Chat on WhatsApp (+91 70435 39045)
        </span>
      </a>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          title="Scroll to Top"
          className="w-12 h-12 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 hover:text-cyan-400 shadow-xl flex items-center justify-center transition-all hover:scale-110"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
