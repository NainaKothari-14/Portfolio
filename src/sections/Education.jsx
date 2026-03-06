import React, { useState } from "react";
import { EDUCATION } from "../data/content";
import vcetLogo from "../assets/logo/vcet.jpg";
import collegeLogo from "../assets/logo/college.jpg";
import schoolLogo from "../assets/logo/school .webp";

const cardConfigs = [
  { logo: vcetLogo,    from: "#3b82f6", to: "#06b6d4" },
  { logo: collegeLogo, from: "#8b5cf6", to: "#6366f1" },
  { logo: schoolLogo,  from: "#f59e0b", to: "#f97316" },
];

function EducationCard({ e, index }) {
  const [hovered, setHovered] = useState(false);
  const cfg = cardConfigs[index] || cardConfigs[0];
  const accent = cfg.from;
  const accentTo = cfg.to;

  return (
    <div
      className="relative overflow-hidden rounded-3xl border p-6 backdrop-blur-sm transition-all duration-500 cursor-default"
      style={{
        borderColor: hovered ? `${accent}50` : "rgba(63,63,70,0.8)",
        background: "rgba(24,24,27,0.6)",
        boxShadow: hovered
          ? `0 0 60px ${accent}30, 0 0 120px ${accent}10, 0 20px 50px rgba(0,0,0,0.4)`
          : "0 4px 20px rgba(0,0,0,0.3)",
        transform: hovered ? "translateY(-6px) scale(1.01)" : "none",
        gridColumn: index === 0 ? "1 / -1" : "auto",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Orbs */}
      <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full blur-3xl transition-all duration-700"
        style={{
          background: `radial-gradient(circle, ${accent}25, transparent)`,
          opacity: hovered ? 0.9 : 0.12,
          transform: hovered ? "scale(1.5)" : "scale(1)",
        }} />
      <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full blur-3xl transition-all duration-700"
        style={{
          background: `radial-gradient(circle, ${accentTo}20, transparent)`,
          opacity: hovered ? 0.7 : 0.08,
          transform: hovered ? "scale(1.5)" : "scale(1)",
        }} />

      {/* Top shimmer line */}
      <div className="absolute -top-px left-0 right-0 h-px transition-opacity duration-500"
        style={{
          background: `linear-gradient(90deg, transparent, ${accent}90, transparent)`,
          opacity: hovered ? 1 : 0,
        }} />

      {/* Bottom fill line */}
      <div className="absolute bottom-0 left-0 h-0.5 transition-all duration-500"
        style={{
          background: `linear-gradient(to right, ${accent}, ${accentTo})`,
          boxShadow: `0 0 10px ${accent}80`,
          width: hovered ? "100%" : "0%",
        }} />

      {/* Shine sweep */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transition-all duration-1000"
        style={{
          opacity: hovered ? 1 : 0,
          transform: hovered ? "translateX(100%) skewX(-15deg)" : "translateX(-100%) skewX(-15deg)",
        }} />

      {/* Floating particles */}
      <div className="pointer-events-none absolute inset-0 transition-opacity duration-700"
        style={{ opacity: hovered ? 1 : 0 }}>
        {[...Array(4)].map((_, i) => (
          <div key={i} className="absolute h-1 w-1 rounded-full"
            style={{
              background: accent,
              top: `${15 + i * 20}%`,
              right: `${8 + i * 5}%`,
              animation: `floatParticle ${1.5 + i * 0.4}s ease-in-out infinite`,
              animationDelay: `${i * 0.15}s`,
              opacity: 0.6,
            }} />
        ))}
      </div>

      {/* Corner accent */}
      <div className="absolute right-0 top-0 h-20 w-20 transition-opacity duration-500"
        style={{ opacity: hovered ? 1 : 0 }}>
        <div className="absolute right-0 top-0 h-px w-10"
          style={{ background: `linear-gradient(to left, ${accent}, transparent)` }} />
        <div className="absolute right-0 top-0 h-10 w-px"
          style={{ background: `linear-gradient(to bottom, ${accent}, transparent)` }} />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            {/* Year badge */}
            <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-wider transition-all duration-300"
              style={{
                borderColor: hovered ? `${accent}45` : "rgba(63,63,70,1)",
                color: hovered ? accent : "#71717a",
                background: hovered ? `${accent}12` : "rgba(39,39,42,0.6)",
                boxShadow: hovered ? `0 0 12px ${accent}25` : "none",
              }}>
              {e.time}
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold leading-snug transition-all duration-300"
              style={{
                color: hovered ? "transparent" : "#fff",
                backgroundImage: hovered ? `linear-gradient(to right, #fff, ${accent})` : "none",
                WebkitBackgroundClip: hovered ? "text" : "unset",
                backgroundClip: hovered ? "text" : "unset",
              }}>
              {e.title}
            </h3>

            {/* Org */}
            <p className="mt-1 text-sm transition-colors duration-300"
              style={{ color: hovered ? `${accent}cc` : "#a1a1aa" }}>
              {e.org}
            </p>
          </div>

          {/* Logo box */}
          <div className="flex-shrink-0 flex h-14 w-14 items-center justify-center rounded-2xl border-2 overflow-hidden transition-all duration-500"
            style={{
              borderColor: hovered ? `${accent}50` : "rgba(63,63,70,0.8)",
              background: hovered
                ? `linear-gradient(135deg, ${accent}20, ${accentTo}10)`
                : "rgba(39,39,42,0.6)",
              transform: hovered ? "rotate(6deg) scale(1.1)" : "none",
              boxShadow: hovered ? `0 0 25px ${accent}40` : `0 0 12px ${accent}15`,
            }}>
            <img
              src={cfg.logo}
              alt="Institution logo"
              className="h-10 w-10 rounded-xl object-contain transition-all duration-500"
              style={{
                filter: hovered ? "brightness(1.1)" : "brightness(0.85) grayscale(0.3)",
              }}
            />
          </div>
        </div>

        {/* Meta box */}
        {e.meta && (
          <div className="mt-4 rounded-xl border p-3 text-xs leading-relaxed transition-all duration-300"
            style={{
              borderColor: hovered ? `${accent}25` : "rgba(39,39,42,0.8)",
              background: hovered ? `${accent}08` : "rgba(24,24,27,0.6)",
              color: hovered ? "#d4d4d8" : "#71717a",
            }}>
            {e.meta}
          </div>
        )}
      </div>
    </div>
  );
}

export default function Education() {
  return (
    <section id="education" className="relative mx-auto max-w-6xl px-4 py-16">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/4 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-blue-500/8 blur-[100px]" />
        <div className="absolute left-1/4 bottom-1/3 h-64 w-64 rounded-full bg-violet-500/6 blur-3xl" />
        <div className="absolute right-1/4 top-1/3 h-64 w-64 rounded-full bg-cyan-500/6 blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Section heading */}
        <div className="mb-10">
          <p className="mb-2 text-xs font-medium uppercase tracking-widest text-blue-400">Background</p>
          <h2 className="text-4xl font-bold md:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(59,130,246,0.35)]">
              Education
            </span>
          </h2>
          <p className="mt-3 max-w-xl text-sm text-zinc-400">
            Academic background and qualifications.
          </p>
        </div>

        {/* Grid — first card full width, rest 2-col */}
        <div className="grid gap-5 md:grid-cols-2">
          {EDUCATION.map((e, index) => (
            <EducationCard key={e.title} e={e} index={index} />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes floatParticle {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0; }
          50% { transform: translateY(-16px) translateX(-8px); opacity: 0.7; }
        }
      `}</style>
    </section>
  );
}