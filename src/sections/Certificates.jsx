import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Award, ExternalLink, BadgeCheck, Calendar, Building2 } from "lucide-react";

const CERTIFICATES = [
  {
    id: 1,
    title: "Java Programming",
    issuer: "Infosys Springboard",
    date: "2024",
    category: "Programming",
    credentialId: "INF-JAVA-XXXX",
    skills: ["Java", "OOP", "Data Structures"],
    accent: "rgba(249, 115, 22, 0.7)",
    accentSoft: "rgba(249, 115, 22, 0.12)",
    icon: "☕",
  },
  {
    id: 2,
    title: "Python Programming",
    issuer: "Infosys Springboard",
    date: "2024",
    category: "Programming",
    credentialId: "INF-PY-XXXX",
    skills: ["Python", "Scripting", "Automation"],
    accent: "rgba(234, 179, 8, 0.7)",
    accentSoft: "rgba(234, 179, 8, 0.12)",
    icon: "🐍",
  },
  {
    id: 3,
    title: "Data Structures & Algorithms",
    issuer: "Infosys Springboard",
    date: "2024",
    category: "CS Fundamentals",
    credentialId: "INF-DSA-XXXX",
    skills: ["DSA", "Problem Solving", "Complexity Analysis"],
    accent: "rgba(168, 85, 247, 0.7)",
    accentSoft: "rgba(168, 85, 247, 0.12)",
    icon: "🧠",
  },
  {
    id: 4,
    title: "MERN Stack Development",
    issuer: "Prodigy Infotech",
    date: "2024",
    category: "Full-Stack",
    credentialId: "PI-MERN-XXXX",
    skills: ["MongoDB", "Express", "React", "Node.js"],
    accent: "rgba(59, 130, 246, 0.7)",
    accentSoft: "rgba(59, 130, 246, 0.12)",
    icon: "⚡",
  },
  {
    id: 5,
    title: "Web Development",
    issuer: "CodSoft",
    date: "2024",
    category: "Full-Stack",
    credentialId: "CS-WD-XXXX",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    accent: "rgba(6, 182, 212, 0.7)",
    accentSoft: "rgba(6, 182, 212, 0.12)",
    icon: "🌐",
  },
];

const CATEGORIES = ["All", "Programming", "CS Fundamentals", "Full-Stack"];

const ISSUERS = {
  "Infosys Springboard": { count: 3, accent: "rgba(249,115,22,0.7)", soft: "rgba(249,115,22,0.1)" },
  "Prodigy Infotech":   { count: 1, accent: "rgba(59,130,246,0.7)",  soft: "rgba(59,130,246,0.1)" },
  "CodSoft":            { count: 1, accent: "rgba(6,182,212,0.7)",   soft: "rgba(6,182,212,0.1)"  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Certificates() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("All");
  const [hovered, setHovered] = useState(null);

  const filtered = activeCategory === "All"
    ? CERTIFICATES
    : CERTIFICATES.filter((c) => c.category === activeCategory);

  return (
    <div className="certs-page min-h-screen">
      {/* Background atmosphere */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-blue-600/8 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-cyan-600/8 blur-[100px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_20%,black,transparent)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-12">

        {/* Back */}
        <motion.button
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          onClick={() => navigate(-1)}
          className="back-btn group mb-10 flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-300"
        >
          <ArrowLeft size={15} className="transition-transform duration-300 group-hover:-translate-x-1" />
          Back to Portfolio
        </motion.button>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10"
        >
          <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue-400">
            <BadgeCheck size={13} />
            Verified Credentials
          </div>
          <h1 className="text-4xl font-bold text-white md:text-5xl">
            Certificates &{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Certifications
            </span>
          </h1>
          <p className="mt-3 max-w-xl text-sm text-zinc-400">
            Certifications earned through structured learning programs across programming, algorithms, and full-stack development.
          </p>

          {/* Stats */}
          <div className="mt-6 flex flex-wrap gap-3">
            {[
              { value: `${CERTIFICATES.length}+`, label: "Certifications" },
              { value: Object.keys(ISSUERS).length, label: "Issuers" },
              { value: "2024", label: "Year" },
            ].map((s) => (
              <div key={s.label} className="stat-pill flex items-center gap-2 rounded-xl px-4 py-2">
                <span className="text-sm font-bold text-blue-300">{s.value}</span>
                <span className="text-xs text-zinc-500">{s.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Issuer pills */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.18 }}
          className="mb-8 flex flex-wrap gap-3"
        >
          {Object.entries(ISSUERS).map(([name, { count, accent, soft }]) => (
            <div
              key={name}
              className="flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-medium"
              style={{
                background: soft,
                border: `1px solid ${accent.replace("0.7", "0.25")}`,
                color: accent.replace("0.7", "1"),
              }}
            >
              <Building2 size={11} />
              {name}
              <span
                className="rounded-md px-1.5 py-0.5 text-[10px] font-bold"
                style={{ background: accent.replace("0.7", "0.18") }}
              >
                {count} cert{count > 1 ? "s" : ""}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.24 }}
          className="mb-8 flex flex-wrap gap-2"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`filter-btn rounded-xl px-4 py-2 text-xs font-semibold transition-all duration-300 ${activeCategory === cat ? "filter-btn-active" : ""}`}
            >
              {cat}
              <span className="ml-1.5 text-[10px] opacity-50">
                {cat === "All" ? CERTIFICATES.length : CERTIFICATES.filter(c => c.category === cat).length}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((cert, i) => (
            <motion.div
              key={cert.id}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              onMouseEnter={() => setHovered(cert.id)}
              onMouseLeave={() => setHovered(null)}
              className="cert-card group relative overflow-hidden rounded-2xl border transition-all duration-500"
              style={{
                "--accent": cert.accent,
                "--accent-soft": cert.accentSoft,
                boxShadow: hovered === cert.id
                  ? `0 0 0 1px ${cert.accent}, 0 8px 32px ${cert.accentSoft}, 0 0 48px ${cert.accentSoft}`
                  : undefined,
              }}
            >
              <div className="absolute inset-0 bg-zinc-950/90" />
              <div
                className="absolute -right-10 -top-10 h-32 w-32 rounded-full blur-2xl transition-all duration-500 group-hover:scale-150"
                style={{ background: cert.accentSoft }}
              />

              {/* Preview */}
              <div
                className="relative flex h-32 items-center justify-center overflow-hidden"
                style={{ background: `linear-gradient(135deg, rgba(9,9,11,0.95), ${cert.accentSoft})` }}
              >
                <div
                  className="absolute inset-0 opacity-[0.07]"
                  style={{
                    backgroundImage: `repeating-linear-gradient(45deg, ${cert.accent} 0, ${cert.accent} 1px, transparent 0, transparent 50%)`,
                    backgroundSize: "12px 12px",
                  }}
                />
                <div className="relative flex flex-col items-center gap-2">
                  <span className="text-5xl drop-shadow-lg">{cert.icon}</span>
                  <span
                    className="flex items-center gap-1 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest"
                    style={{ background: cert.accentSoft, color: cert.accent }}
                  >
                    <Award size={9} />
                    {cert.issuer}
                  </span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-zinc-950/75 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                  <span className="rounded-lg border border-dashed border-white/20 px-3 py-1.5 text-xs text-white/40">
                    + Add certificate image
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="relative p-5">
                <div className="mb-1 flex items-start justify-between gap-2">
                  <h3 className="text-sm font-bold leading-snug text-white">{cert.title}</h3>
                  <span
                    className="shrink-0 rounded-lg px-2 py-0.5 text-[10px] font-semibold"
                    style={{ background: cert.accentSoft, color: cert.accent }}
                  >
                    {cert.category}
                  </span>
                </div>

                <div className="mb-3 flex items-center gap-3 text-xs text-zinc-500">
                  <span className="flex items-center gap-1"><Building2 size={10} />{cert.issuer}</span>
                  <span className="flex items-center gap-1"><Calendar size={10} />{cert.date}</span>
                </div>

                <div className="mb-4 flex flex-wrap gap-1.5">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md px-2 py-0.5 text-[10px] font-medium text-zinc-400"
                      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between border-t border-white/5 pt-3">
                  <span className="font-mono text-[10px] text-zinc-700">{cert.credentialId}</span>
                  <button
                    className="flex items-center gap-1 rounded-lg px-2.5 py-1 text-[10px] font-semibold transition-all duration-200 hover:brightness-125"
                    style={{ background: cert.accentSoft, color: cert.accent }}
                    title="Verification link coming soon"
                  >
                    <ExternalLink size={9} />
                    Verify
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="py-20 text-center text-sm text-zinc-600">No certificates in this category.</div>
        )}

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-12 text-center text-xs text-zinc-700"
        >
          Credential IDs and verification links will be added soon.
        </motion.p>
      </div>

      <style jsx>{`
        .certs-page { background: rgb(7,7,10); color: white; }
        .back-btn {
          color: rgba(161,161,170,0.8);
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.06);
        }
        .back-btn:hover { color: white; background: rgba(59,130,246,0.08); border-color: rgba(59,130,246,0.2); }
        .stat-pill { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); }
        .filter-btn {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          color: rgba(161,161,170,0.8);
        }
        .filter-btn:hover { color: white; border-color: rgba(59,130,246,0.3); background: rgba(59,130,246,0.08); }
        .filter-btn-active {
          background: rgba(37,99,235,0.18) !important;
          border-color: rgba(59,130,246,0.45) !important;
          color: rgb(147,197,253) !important;
          box-shadow: 0 0 16px rgba(59,130,246,0.15);
        }
        .cert-card { background: rgba(12,12,18,0.9); border-color: rgba(255,255,255,0.06); }
        .cert-card:hover { border-color: var(--accent); transform: translateY(-3px); }
      `}</style>
    </div>
  );
}