import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';

export default function FAQ({ onOpenContact }) {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: 'How fast can I get installed in Ankleshwar or Bharuch?',
      a: 'For Fiber Broadband & Home/Office FTTH, installation is typically completed within 3 to 5 working days from documentation. For 1:1 Enterprise Leased Lines in GIDC Phase 1-4, Panoli, or Jhagadia, feasibility is completed within 24 hours and deployment within 5-7 business days.'
    },
    {
      q: 'What is the main difference between Fiber Broadband and a Dedicated Leased Line (ILL)?',
      a: 'Fiber Broadband provides ultra-fast shared internet perfect for browsing, streaming, and daily office tasks. An Internet Leased Line (ILL) provides 100% dedicated 1:1 symmetrical bandwidth with contractual 99.9% uptime SLA, static IPs, and zero contention ratio—ideal for mission-critical industrial plants, servers, and ERP operations.'
    },
    {
      q: 'Is customer support available 24/7 in case of technical issues?',
      a: 'Yes! Technosys operates a dedicated local Network Operations Center (NOC) in Ankleshwar. You talk directly to senior network engineers and local field technicians—never an automated distant call center.'
    },
    {
      q: 'Are there any hidden data caps or Fair Usage Policy (FUP) throttling?',
      a: 'No! All Technosys Fiber Broadband and Leased Line packages come with truly unlimited data usage and zero speed throttling.'
    },
    {
      q: 'Can Technosys provide Smart CCTV Camera Surveillance & Campus Wi-Fi?',
      a: 'Absolutely. We provide end-to-end turnkey infrastructure including 4K IP CCTV cloud surveillance, campus Wi-Fi mesh hotspots, and SD-WAN branch interconnections across Gujarat.'
    }
  ];

  return (
    <section className="py-16 bg-white dark:bg-[#050812] border-t border-slate-200 dark:border-zinc-800 relative">
      <div className="container relative z-10 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="badge-tag">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-heading">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Clear, honest answers to help you choose the right internet solution for your home or enterprise.
          </p>
        </div>

        {/* Accordion List */}
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="glass-panel overflow-hidden border border-slate-200 dark:border-zinc-800 transition-all"
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full p-5 text-left flex justify-between items-center gap-4 focus:outline-none"
              >
                <span className="font-bold text-sm sm:text-base text-slate-900 dark:text-white font-heading">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-sky-500 dark:text-cyan-400 shrink-0 transition-transform ${
                    openIdx === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openIdx === idx && (
                <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-zinc-800/80 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Help Bar */}
        <div className="text-center pt-4">
          <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400">
            Still have a question? Our local team in Ankleshwar is ready to help.{' '}
            <button onClick={onOpenContact} className="text-sky-600 dark:text-cyan-400 font-bold hover:underline ml-1">
              Contact Us Directly →
            </button>
          </p>
        </div>

      </div>
    </section>
  );
}
