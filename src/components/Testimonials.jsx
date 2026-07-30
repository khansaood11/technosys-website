import React from 'react';
import { Star, Quote, CheckCircle2, MessageSquare } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Sumit Bhatt',
      role: 'Enterprise Business Owner',
      location: 'Bharuch District',
      comment: 'Best Internet Service in Bharuch District. Smooth & uninterrupted connectivity!',
      rating: 5
    },
    {
      name: 'Neha Agrawal',
      role: 'IT Director',
      location: 'Ankleshwar GIDC',
      comment: 'Technosys Teleservices delivers exceptional internet solutions. Highly recommended for reliable service!',
      rating: 5
    },
    {
      name: 'Jatin Shrivastav',
      role: 'Plant Manager',
      location: 'Gujarat Industrial Belt',
      comment: 'Outstanding connectivity with Technosys Teleservices! Dependable internet provider in Gujarat.',
      rating: 5
    },
    {
      name: 'Mihir Patil',
      role: 'Commercial Subscriber',
      location: 'Bharuch District',
      comment: 'Best Internet Service in Bharuch District. Dedicated bandwidth and fast technician response.',
      rating: 5
    }
  ];

  return (
    <section className="relative section-padding bg-[#050812]">
      <div className="container relative z-10 space-y-12 sm:space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="badge-tag">
            <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
            <span>Client Endorsements</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Trusted by Enterprises Across <span className="gradient-text">Gujarat</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            See what plant managers, corporate IT directors, and home subscribers say about Technosys connectivity.
          </p>
        </div>

        {/* Reviews Mobile Horizontal Snap-Scroll Stack Carousel & Desktop Grid */}
        <div className="flex sm:grid sm:grid-cols-2 gap-6 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 sm:mx-0 sm:px-0">
          {reviews.map((rev, idx) => (
            <div key={idx} className="glass-panel glass-panel-interactive p-6 sm:p-8 space-y-6 border-slate-800 relative shrink-0 w-[85vw] sm:w-auto snap-center flex flex-col justify-between">
              <Quote className="absolute top-5 right-5 w-8 h-8 text-cyan-500/10" />

              <div className="space-y-4">
                {/* Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-slate-200 text-sm sm:text-base font-medium leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-800/80">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-500 to-indigo-600 p-[2px] shrink-0">
                  <div className="w-full h-full bg-[#090D1C] rounded-full flex items-center justify-center font-bold text-white text-xs">
                    {rev.name.charAt(0)}
                  </div>
                </div>
                <div className="min-w-0">
                  <div className="font-bold text-white text-xs sm:text-sm flex items-center gap-1.5 truncate">
                    <span>{rev.name}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  </div>
                  <div className="text-[11px] sm:text-xs text-slate-400 truncate">{rev.role} • {rev.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
