import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight, Search, Filter } from "lucide-react";
import { PROJECTS } from "../data/content";
import { fadeUp } from "../lib/motion";
import { ButtonLink, Chip, SectionTitle } from "../lib/ui.jsx";

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
    <section id="projects" className="mx-auto max-w-6xl px-4 py-16">
      <SectionTitle
        kicker="Work"
        title="Featured Projects"
        desc="A few projects that show my full-stack ability, systems thinking, and focus on clean integrations."
      />

      <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex w-full items-center gap-2 rounded-2xl border border-zinc-900 bg-zinc-950/40 px-4 py-3 md:max-w-md">
          <Search size={16} className="text-zinc-400" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects, tech, features..."
            className="w-full bg-transparent text-sm outline-none placeholder:text-zinc-500"
          />
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 rounded-2xl border border-zinc-900 bg-zinc-950/40 px-3 py-2 text-sm text-zinc-300">
            <Filter size={16} className="text-zinc-400" />
            <select
              value={kind}
              onChange={(e) => setKind(e.target.value)}
              className="bg-transparent outline-none"
            >
              {kinds.map((k) => (
                <option key={k} value={k} className="bg-zinc-950">
                  {k}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {filtered.map((p, idx) => (
          <motion.div
            key={p.title}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            className="rounded-3xl border border-zinc-900 bg-zinc-950/40 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <Chip>{p.kind}</Chip>
                </div>
                <p className="mt-2 text-sm text-zinc-300">{p.tagline}</p>
              </div>

              <div className="flex items-center gap-2">
                {p.links?.live ? (
                  <a className="rounded-xl border border-zinc-800 p-2 hover:bg-zinc-900/50" href={p.links.live} target="_blank" rel="noreferrer" aria-label="Live link">
                    <ExternalLink size={18} />
                  </a>
                ) : null}
                {p.links?.repo ? (
                  <a className="rounded-xl border border-zinc-800 p-2 hover:bg-zinc-900/50" href={p.links.repo} target="_blank" rel="noreferrer" aria-label="Repo link">
                    <Github size={18} />
                  </a>
                ) : null}
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <Chip key={s}>{s}</Chip>
              ))}
            </div>

            <ul className="mt-5 list-disc space-y-2 pl-5 text-sm text-zinc-300">
              {p.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>

            <div className="mt-6 flex items-center gap-3">
              {p.links?.live ? (
                <ButtonLink href={p.links.live} icon={ArrowUpRight} variant="primary">
                  Live
                </ButtonLink>
              ) : null}
              {p.links?.repo ? (
                <ButtonLink href={p.links.repo} icon={Github} variant="ghost">
                  Code
                </ButtonLink>
              ) : null}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}