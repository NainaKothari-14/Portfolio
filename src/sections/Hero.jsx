import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Download, Github } from "lucide-react";
import { PROFILE } from "../data/content";
import { fadeUp } from "../lib/motion";
import { ButtonLink, Chip } from "../lib/ui.jsx";

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      {/* background blobs */}
      <div className="pointer-events-none absolute inset-0 opacity-80">
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-sky-400/10 blur-3xl" />
        <div className="absolute -bottom-28 right-10 h-72 w-72 rounded-full bg-sky-400/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-14">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.6 }}
          className="grid gap-10 md:grid-cols-[1.3fr_0.7fr]"
        >
          {/* LEFT */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/15 bg-zinc-950/50 px-4 py-2 text-xs text-zinc-200 shadow-[0_0_0_1px_rgba(56,189,248,0.06)]">
              <span className="h-2 w-2 rounded-full bg-sky-400" />
              Open to internships / full-time roles
            </div>

            <h1 className="mt-5 text-4xl font-semibold leading-tight text-zinc-100 md:text-5xl">
              {PROFILE.role}
            </h1>

            <p className="mt-4 max-w-2xl text-zinc-300">{PROFILE.headline}</p>
            <p className="mt-4 max-w-2xl text-zinc-400">{PROFILE.about}</p>

            <div className="mt-7 flex flex-wrap gap-3">
              <ButtonLink href="#projects" icon={ArrowUpRight}>
                View Projects
              </ButtonLink>
              <ButtonLink href={PROFILE.links.resume} icon={Download} variant="ghost">
                Download Resume
              </ButtonLink>
              <ButtonLink href={PROFILE.links.github} icon={Github} variant="secondary">
                GitHub
              </ButtonLink>
            </div>

            <div className="mt-7 flex flex-wrap gap-2">
              <Chip>MERN</Chip>
              <Chip>Microservices</Chip>
              <Chip>Real-time (Socket.IO + Redis)</Chip>
              <Chip>PostgreSQL + MongoDB</Chip>
            </div>
          </div>

          {/* RIGHT - Circular Photo Card */}
          <div className="rounded-3xl border border-sky-400/15 bg-zinc-950/35 p-6 shadow-[0_0_0_1px_rgba(56,189,248,0.06)]">
            <div className="text-sm text-zinc-300">About Me</div>

            <div className="mt-5 flex flex-col items-center text-center">
              {/* Neon ring */}
              <div className="relative">
                {/* outer glow */}
                <div className="absolute inset-0 rounded-full blur-2xl bg-sky-400/20" />

                {/* ring */}
                <div className="relative grid place-items-center rounded-full p-[3px] bg-gradient-to-b from-sky-300/70 via-sky-400/30 to-sky-300/10 shadow-[0_0_35px_rgba(56,189,248,0.20)]">
                  {/* inner border */}
                  <div className="rounded-full bg-zinc-950/80 p-[4px]">
                    {/* image */}
                    <img
                      src="IMAGELINK"
                      alt="Profile"
                      className="h-44 w-44 rounded-full object-cover md:h-52 md:w-52"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-5 text-lg font-semibold text-zinc-100">
                {PROFILE.name}
              </div>
              <div className="mt-1 text-sm text-sky-200/80">
                {PROFILE.location}
              </div>

              <div className="mt-4 rounded-2xl border border-sky-400/10 bg-zinc-950/40 px-4 py-3 text-sm text-zinc-300">
                Backend-focused full-stack dev who loves building auth, real-time systems,
                and clean microservices.
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}