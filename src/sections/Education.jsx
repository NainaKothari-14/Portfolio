import React from "react";
import { EDUCATION } from "../data/content";
import { SectionTitle } from "../lib/ui.jsx";

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
      <SectionTitle
        kicker="Background"
        title="Education"
        desc="Academic background and qualifications."
      />

      <div className="grid gap-4 sm:gap-6 sm:grid-cols-1 md:grid-cols-2">
        {EDUCATION.map((e, index) => (
          <div 
            key={e.title} 
            className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-zinc-800 bg-zinc-950/40 p-5 sm:p-6 transition-all duration-500 hover:border-blue-500/50 hover:bg-zinc-900/40"
            style={{
              animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
            }}
            onMouseEnter={(el) => {
              el.currentTarget.style.boxShadow = '0 0 30px rgba(59, 130, 246, 0.2), 0 0 60px rgba(59, 130, 246, 0.1)';
            }}
            onMouseLeave={(el) => {
              el.currentTarget.style.boxShadow = 'none';
            }}
          >
            {/* Blue glow orb effect */}
            <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-blue-500/10 opacity-0 blur-3xl transition-all duration-700 group-hover:opacity-100" />
            
            {/* Content */}
            <div className="relative">
              <div className="flex flex-col sm:flex-row items-start justify-between gap-3 sm:gap-4">
                <div className="flex-1">
                  <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-blue-400/70 transition-colors group-hover:text-blue-400">
                    {e.time}
                  </div>
                  <div className="text-lg sm:text-xl font-semibold transition-colors group-hover:text-white">
                    {e.title}
                  </div>
                  <div className="mt-1 text-sm sm:text-base text-zinc-300 transition-colors group-hover:text-blue-300">
                    {e.org}
                  </div>
                </div>
                
                {/* Decorative element */}
                <div className="h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0 rounded-xl sm:rounded-2xl border border-zinc-800 bg-zinc-900/50 transition-all duration-300 group-hover:border-blue-500/50 group-hover:bg-blue-500/10 group-hover:rotate-12">
                  <div className="flex h-full w-full items-center justify-center text-xl sm:text-2xl">
                    🎓
                  </div>
                </div>
              </div>
              
              {e.meta && (
                <div className="mt-3 sm:mt-4 rounded-lg sm:rounded-xl border border-zinc-800/50 bg-zinc-900/30 p-2.5 sm:p-3 text-xs sm:text-sm text-zinc-400 transition-all duration-300 group-hover:border-blue-500/20 group-hover:bg-blue-500/5">
                  {e.meta}
                </div>
              )}
            </div>

            {/* Bottom blue line accent */}
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 transition-all duration-500 group-hover:w-full" 
              style={{
                boxShadow: '0 0 10px rgba(59, 130, 246, 0.5)',
              }}
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}