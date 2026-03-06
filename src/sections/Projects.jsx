import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight, Search, Layers, Zap, Globe, Code2 } from "lucide-react";
import { PROJECTS } from "../data/content";
import { fadeUp } from "../lib/motion";

const kindIcons = {
  "Microservice": Zap,
  "Full-Stack": Layers,
  "Real-Time System": Globe,
};

const kindColors = {
  "Microservice":     { from: "#f59e0b", to: "#f97316" },
  "Full-Stack":       { from: "#8b5cf6", to: "#6366f1" },
  "Real-Time System": { from: "#06b6d4", to: "#3b82f6" },
};

const stackColors = {
  "Node.js":        "#339933",
  "React":          "#61DAFB",
  "Next.js":        "#a3a3a3",
  "TypeScript":     "#3178C6",
  "PostgreSQL":     "#4169E1",
  "MongoDB":        "#47A248",
  "Redis":          "#DC382D",
  "Socket.IO":      "#00bcd4",
  "Kafka":          "#8b5cf6",
  "Elasticsearch":  "#005571",
  "Express":        "#a3a3a3",
  "pdf-lib":        "#f59e0b",
  "Nodemailer":     "#22c55e",
};

// Individual card with hover state
function ProjectCard({ p, idx }) {
  const [hovered, setHovered] = useState(false);
  const KindIcon = kindIcons[p.kind] || Code2;
  const kc = kindColors[p.kind] || { from: "#3b82f6", to: "#06b6d4" };
  const accentColor = kc.from;

  return (
    <motion.div
      layout
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      exit={{ opacity: 0, scale: 0.95 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.4, delay: idx * 0.06 }}
      className="group relative overflow-hidden rounded-3xl border backdrop-blur-sm p-6 transition-all duration-500 cursor-default"
      style={{
        borderColor: hovered ? `${accentColor}50` : "rgba(63,63,70,0.8)",
        background: "rgba(24,24,27,0.6)",
        boxShadow: hovered
          ? `0 0 60px ${accentColor}30, 0 0 120px ${accentColor}10, 0 20px 50px rgba(0,0,0,0.4)`
          : "0 4px 20px rgba(0,0,0,0.3)",
        transform: hovered ? "translateY(-6px) scale(1.01)" : "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Animated orbs — faint default, vivid on hover */}
      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full blur-3xl transition-all duration-700"
        style={{
          background: `radial-gradient(circle, ${accentColor}25, transparent)`,
          opacity: hovered ? 0.9 : 0.15,
          transform: hovered ? "scale(1.5)" : "scale(1)",
        }} />
      <div className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full blur-3xl transition-all duration-700"
        style={{
          background: `radial-gradient(circle, ${kc.to}20, transparent)`,
          opacity: hovered ? 0.7 : 0.1,
          transform: hovered ? "scale(1.5)" : "scale(1)",
        }} />

      {/* Top shimmer line — only on hover */}
      <div className="absolute -top-px left-0 right-0 h-px transition-opacity duration-500"
        style={{
          background: `linear-gradient(90deg, transparent, ${accentColor}90, transparent)`,
          opacity: hovered ? 1 : 0,
        }} />

      {/* Shine sweep */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transition-all duration-1000"
        style={{
          opacity: hovered ? 1 : 0,
          transform: hovered ? "translateX(100%) skewX(-15deg)" : "translateX(-100%) skewX(-15deg)",
        }} />

      {/* Floating particles — only on hover */}
      <div className="pointer-events-none absolute inset-0 transition-opacity duration-700"
        style={{ opacity: hovered ? 1 : 0 }}>
        {[...Array(4)].map((_, i) => (
          <div key={i} className="absolute h-1 w-1 rounded-full"
            style={{
              background: accentColor,
              top: `${15 + i * 20}%`,
              right: `${8 + i * 5}%`,
              animation: `floatParticle ${1.5 + i * 0.4}s ease-in-out infinite`,
              animationDelay: `${i * 0.15}s`,
              opacity: 0.6,
            }} />
        ))}
      </div>

      <div className="relative z-10">
        {/* Kind badge — grey default, colored on hover */}
        <div
          className="mb-3 inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-wider transition-all duration-300"
          style={{
            borderColor: hovered ? `${accentColor}45` : "rgba(63,63,70,1)",
            color: hovered ? accentColor : "#71717a",
            background: hovered ? `${accentColor}12` : "rgba(39,39,42,0.6)",
            boxShadow: hovered ? `0 0 12px ${accentColor}25` : "none",
          }}
        >
          <KindIcon size={10} />
          {p.kind}
        </div>

        {/* Title + links */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <h3 className="text-base font-bold leading-snug transition-all duration-300"
              style={{ color: hovered ? "transparent" : "#fff",
                backgroundImage: hovered ? `linear-gradient(to right, #fff, ${accentColor})` : "none",
                WebkitBackgroundClip: hovered ? "text" : "unset",
                backgroundClip: hovered ? "text" : "unset",
              }}>
              {p.title}
            </h3>
            <p className="mt-1.5 text-sm text-zinc-400 leading-relaxed">{p.tagline}</p>
          </div>
          <div className="flex items-center gap-1.5 flex-shrink-0">
            {p.links?.live && (
              <a href={p.links.live} target="_blank" rel="noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-xl border border-zinc-700 text-zinc-400 transition-all hover:border-blue-500/40 hover:bg-blue-950/30 hover:text-blue-400 hover:scale-110">
                <ExternalLink size={14} />
              </a>
            )}
            {p.links?.demo && (
              <a href={p.links.demo} target="_blank" rel="noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-xl border border-zinc-700 text-zinc-400 transition-all hover:border-blue-500/40 hover:bg-blue-950/30 hover:text-blue-400 hover:scale-110">
                <ExternalLink size={14} />
              </a>
            )}
            {p.links?.repo && (
              <a href={p.links.repo} target="_blank" rel="noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-xl border border-zinc-700 text-zinc-400 transition-all hover:border-blue-500/40 hover:bg-blue-950/30 hover:text-blue-400 hover:scale-110">
                <Github size={14} />
              </a>
            )}
          </div>
        </div>

        {/* Stack chips — grey default, brand color on hover */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {p.stack.map((s) => {
            const sc = stackColors[s] || "#6b7280";
            return (
              <span key={s}
                className="rounded-full border px-2.5 py-0.5 text-[11px] font-medium transition-all duration-300"
                style={{
                  borderColor: hovered ? `${sc}40` : "rgba(63,63,70,0.8)",
                  color: hovered ? sc : "#a1a1aa",
                  background: hovered ? `${sc}12` : "rgba(39,39,42,0.5)",
                  boxShadow: hovered ? `0 0 8px ${sc}20` : "none",
                }}>
                {s}
              </span>
            );
          })}
        </div>

        {/* Divider — grey default, accent on hover */}
        <div className="my-4 h-px transition-all duration-500"
          style={{
            background: hovered
              ? `linear-gradient(to right, transparent, ${accentColor}50, transparent)`
              : "rgba(63,63,70,0.6)",
          }} />

        {/* Highlights — grey dot default, accent on hover */}
        <ul className="space-y-2">
          {p.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2 text-xs text-zinc-300 leading-relaxed">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full transition-all duration-300"
                style={{
                  background: hovered ? accentColor : "#52525b",
                  boxShadow: hovered ? `0 0 6px ${accentColor}` : "none",
                }} />
              {h}
            </li>
          ))}
        </ul>

        {/* Footer CTA */}
        {(p.links?.live || p.links?.demo || p.links?.repo) && (
          <div className="mt-5 flex items-center gap-2">
            {(p.links?.live || p.links?.demo) && (
              <a href={p.links.live || p.links.demo} target="_blank" rel="noreferrer"
                className="group/btn inline-flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-semibold text-white transition-all hover:scale-105"
                style={{
                  background: `linear-gradient(to right, ${kc.from}, ${kc.to})`,
                  boxShadow: hovered ? `0 0 18px ${kc.from}45` : `0 0 8px ${kc.from}20`,
                }}>
                Live Demo
                <ArrowUpRight size={12} className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </a>
            )}
            {p.links?.repo && (
              <a href={p.links.repo} target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl border border-zinc-700 bg-zinc-800/50 px-4 py-2 text-xs font-semibold text-zinc-300 transition-all hover:border-zinc-600 hover:text-white hover:scale-105">
                <Github size={12} />
                View Code
              </a>
            )}
          </div>
        )}
      </div>

      {/* Corner accent — only on hover */}
      <div className="absolute right-0 top-0 h-20 w-20 transition-opacity duration-500"
        style={{ opacity: hovered ? 1 : 0 }}>
        <div className="absolute right-0 top-0 h-px w-10"
          style={{ background: `linear-gradient(to left, ${accentColor}, transparent)` }} />
        <div className="absolute right-0 top-0 h-10 w-px"
          style={{ background: `linear-gradient(to bottom, ${accentColor}, transparent)` }} />
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [query, setQuery] = useState("");
  const [kind, setKind] = useState("All");

  const kinds = useMemo(() => {
    const set = new Set(PROJECTS.map((p) => p.kind));
    return ["All", ...Array.from(set)];
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PROJECTS.filter((p) => {
      const matchQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q) ||
        p.stack.join(" ").toLowerCase().includes(q);
      const matchKind = kind === "All" || p.kind === kind;
      return matchQuery && matchKind;
    });
  }, [query, kind]);

  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-4 py-16">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute left-1/4 top-1/3 h-72 w-72 rounded-full bg-blue-600/8 blur-3xl" />
        <div className="absolute right-1/4 bottom-1/3 h-72 w-72 rounded-full bg-cyan-500/8 blur-3xl" />
        <div className="absolute right-1/3 top-1/2 h-48 w-48 rounded-full bg-indigo-500/6 blur-2xl" />
      </div>

      <div className="relative z-10">
        {/* Section heading */}
        <div className="mb-10">
          <p className="mb-2 text-xs font-medium uppercase tracking-widest text-blue-400">Work</p>
          <h2 className="text-4xl font-bold md:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(59,130,246,0.35)]">
              Featured Projects
            </span>
          </h2>
          <p className="mt-3 max-w-xl text-sm text-zinc-400">
            A few projects that show my full-stack ability, systems thinking, and focus on clean integrations.
          </p>
        </div>

        {/* Search + Filter */}
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="group flex w-full items-center gap-3 rounded-2xl border border-zinc-700 bg-zinc-900/60 px-4 py-3 backdrop-blur-sm transition-all focus-within:border-blue-500/40 focus-within:shadow-[0_0_20px_rgba(59,130,246,0.15)] md:max-w-sm">
            <Search size={15} className="text-zinc-400 transition-colors group-focus-within:text-blue-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects or tech..."
              className="w-full bg-transparent text-sm text-zinc-200 outline-none placeholder:text-zinc-500"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {kinds.map((k) => {
              const kc = kindColors[k];
              return (
                <button key={k} onClick={() => setKind(k)}
                  className="rounded-full px-4 py-1.5 text-xs font-medium transition-all duration-300"
                  style={kind === k ? {
                    background: kc ? `linear-gradient(to right, ${kc.from}, ${kc.to})` : "linear-gradient(to right,#2563eb,#06b6d4)",
                    color: "#fff",
                    boxShadow: kc ? `0 0 18px ${kc.from}50` : "0 0 18px rgba(59,130,246,0.4)",
                  } : {
                    border: "1px solid rgba(63,63,70,0.8)",
                    background: "rgba(24,24,27,0.4)",
                    color: "#71717a",
                  }}>
                  {k}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid gap-5 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, idx) => (
              <ProjectCard key={p.title} p={p} idx={idx} />
            ))}
          </AnimatePresence>
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="mt-8 flex flex-col items-center justify-center rounded-2xl border border-zinc-700 bg-zinc-900/40 py-16 text-center">
            <Search size={32} className="text-zinc-600 mb-3" />
            <p className="text-sm text-zinc-400">No projects match your search.</p>
            <button onClick={() => { setQuery(""); setKind("All"); }} className="mt-3 text-xs text-blue-400 hover:underline">
              Clear filters
            </button>
          </motion.div>
        )}
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