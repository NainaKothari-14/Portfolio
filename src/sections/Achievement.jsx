import React from "react";
import { ACHIEVEMENTS } from "../data/content";
import { SectionTitle } from "../lib/ui.jsx";
import { Award, Trophy, Star, Target } from "lucide-react";

export default function Achievements() {
  // Different icons for variety
  const icons = [Trophy, Award, Star, Target];

  return (
    <section id="achievements" className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
      <SectionTitle
        kicker="Recognition"
        title="Achievements & Milestones"
        desc="Highlighting key accomplishments and recognition in my development journey."
      />

      <div className="grid gap-4 sm:gap-6 sm:grid-cols-1 md:grid-cols-2">
        {ACHIEVEMENTS.map((achievement, index) => {
          const Icon = icons[index % icons.length];
          
          return (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-950/90 to-zinc-900/50 p-6 sm:p-8 transition-all duration-700"
              style={{
                animation: `fadeInScale 0.6s ease-out ${index * 0.15}s both`,
              }}
              onMouseEnter={(el) => {
                el.currentTarget.style.boxShadow = '0 0 50px rgba(59, 130, 246, 0.3), 0 0 100px rgba(59, 130, 246, 0.15)';
                el.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
              }}
              onMouseLeave={(el) => {
                el.currentTarget.style.boxShadow = 'none';
                el.currentTarget.style.transform = 'translateY(0) scale(1)';
              }}
            >
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/5 to-purple-500/5 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
              
              {/* Top right decorative orb */}
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-blue-500/10 opacity-0 blur-3xl transition-all duration-700 group-hover:opacity-100 group-hover:scale-150" />
              
              {/* Bottom left decorative orb */}
              <div className="absolute -bottom-12 -left-12 h-32 w-32 rounded-full bg-purple-500/10 opacity-0 blur-3xl transition-all duration-700 group-hover:opacity-100 group-hover:scale-150" />

              {/* Content container */}
              <div className="relative z-10">
                {/* Icon with animated border */}
                <div className="mb-4 sm:mb-6 flex items-center justify-between">
                  <div 
                    className="relative flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-xl sm:rounded-2xl border-2 border-zinc-700 bg-zinc-900/80 transition-all duration-500 group-hover:border-blue-500 group-hover:bg-blue-500/10 group-hover:rotate-6 group-hover:scale-110"
                    style={{
                      boxShadow: '0 0 0px rgba(59, 130, 246, 0)',
                      transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    }}
                    onMouseEnter={(el) => {
                      el.style.boxShadow = '0 0 30px rgba(59, 130, 246, 0.6), 0 0 60px rgba(59, 130, 246, 0.3)';
                    }}
                    onMouseLeave={(el) => {
                      el.style.boxShadow = '0 0 0px rgba(59, 130, 246, 0)';
                    }}
                  >
                    <Icon 
                      className="text-blue-400 transition-all duration-500 group-hover:scale-110 group-hover:text-blue-300" 
                      size={24}
                      strokeWidth={2}
                    />
                    
                    {/* Rotating ring effect */}
                    <div 
                      className="absolute inset-0 rounded-xl sm:rounded-2xl border-2 border-blue-500/0 transition-all duration-700 group-hover:border-blue-500/50 group-hover:scale-125"
                      style={{
                        animation: 'spin 8s linear infinite',
                      }}
                    />
                  </div>

                  {/* Number badge */}
                  <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg bg-zinc-800/50 text-xs font-bold text-zinc-400 transition-all duration-300 group-hover:bg-blue-500/20 group-hover:text-blue-400">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>

                {/* Achievement text */}
                <div className="space-y-2 sm:space-y-3">
                  <p className="text-base sm:text-lg leading-relaxed text-zinc-200 transition-colors duration-300 group-hover:text-white">
                    {achievement}
                  </p>

                  {/* Decorative bottom elements */}
                  <div className="flex items-center gap-2 sm:gap-3">
                    {/* Animated progress bar */}
                    <div className="relative h-1 flex-1 overflow-hidden rounded-full bg-zinc-800">
                      <div 
                        className="h-full w-0 rounded-full bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400 transition-all duration-1000 ease-out group-hover:w-full"
                        style={{
                          boxShadow: '0 0 10px rgba(59, 130, 246, 0.5), 0 0 20px rgba(59, 130, 246, 0.3)',
                        }}
                      />
                      {/* Shimmer effect */}
                      <div 
                        className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full"
                        style={{
                          transform: 'translateX(-100%)',
                        }}
                      />
                    </div>

                    {/* Status indicator */}
                    <div className="flex items-center gap-2">
                      <div 
                        className="h-2 w-2 rounded-full bg-blue-400 opacity-0 transition-all duration-500 group-hover:opacity-100"
                        style={{
                          boxShadow: '0 0 8px rgba(59, 130, 246, 0.8)',
                          animation: 'pulseGlow 2s ease-in-out infinite',
                        }}
                      />
                      <span className="text-xs font-medium text-zinc-500 opacity-0 transition-all duration-500 group-hover:text-blue-400 group-hover:opacity-100">
                        Achieved
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Corner accent lines */}
              <div className="absolute right-0 top-0 h-20 w-20 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute right-0 top-0 h-px w-12 bg-gradient-to-l from-blue-500 to-transparent" />
                <div className="absolute right-0 top-0 h-12 w-px bg-gradient-to-b from-blue-500 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 h-20 w-20 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute bottom-0 left-0 h-px w-12 bg-gradient-to-r from-blue-500 to-transparent" />
                <div className="absolute bottom-0 left-0 h-12 w-px bg-gradient-to-t from-blue-500 to-transparent" />
              </div>

              {/* Shine sweep effect */}
              <div 
                className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 transition-all duration-1000 group-hover:translate-x-full group-hover:opacity-100"
                style={{
                  transform: 'translateX(-100%) skewX(-15deg)',
                }}
              />
            </div>
          );
        })}
      </div>

      {/* Bottom decorative element */}
      <div className="mt-8 sm:mt-12 flex justify-center">
        <div className="flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950/50 px-4 sm:px-6 py-2 sm:py-3 backdrop-blur-sm">
          <Star className="text-blue-400" size={18} />
          <span className="text-xs sm:text-sm text-zinc-400">More achievements coming soon</span>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes pulseGlow {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
            box-shadow: 0 0 8px rgba(59, 130, 246, 0.8), 0 0 16px rgba(59, 130, 246, 0.4);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.2);
            box-shadow: 0 0 16px rgba(59, 130, 246, 1), 0 0 32px rgba(59, 130, 246, 0.6);
          }
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
}