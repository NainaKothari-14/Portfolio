import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Download, Github, Sparkles, Code2, Zap } from "lucide-react";
import { PROFILE } from "../data/content";
import { fadeUp } from "../lib/motion";
import { ButtonLink, Chip } from "../lib/ui.jsx";

const typingTexts = [
  "MERN Stack",
  "Microservices",
  "Real-time Systems",
  "Socket.IO + Redis",
  "PostgreSQL + MongoDB",
  "RESTful APIs",
  "Authentication Systems",
];

export default function Hero() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = typingTexts[currentTextIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayText.length < currentFullText.length) {
          setDisplayText(currentFullText.slice(0, displayText.length + 1));
        } else {
          // Finished typing, pause then start deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(currentFullText.slice(0, displayText.length - 1));
        } else {
          // Finished deleting, move to next text
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % typingTexts.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentTextIndex]);

  return (
    <div className="relative overflow-hidden">
      {/* Enhanced animated background with multiple layers */}
      <div className="pointer-events-none absolute inset-0">
        {/* Main gradient orbs */}
        <div className="absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-gradient-to-br from-blue-500/20 via-cyan-500/15 to-transparent blur-3xl animate-pulse-slow" />
        <div className="absolute -bottom-32 right-1/4 h-96 w-96 rounded-full bg-gradient-to-br from-cyan-500/20 via-blue-500/15 to-transparent blur-3xl animate-pulse-slow" 
             style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-transparent blur-3xl animate-pulse-slow" 
             style={{ animationDelay: '2s' }} />
        
        {/* Floating particles */}
        <div className="absolute top-20 left-10 h-2 w-2 rounded-full bg-blue-400/40 animate-float" />
        <div className="absolute top-40 right-20 h-3 w-3 rounded-full bg-cyan-400/40 animate-float" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-32 left-1/3 h-2 w-2 rounded-full bg-purple-400/40 animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-10 h-2 w-2 rounded-full bg-blue-400/40 animate-float" style={{ animationDelay: '1.5s' }} />
        
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-14 relative z-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.6 }}
          className="grid gap-10 md:grid-cols-[1.3fr_0.7fr] md:items-start"
        >
          {/* LEFT */}
          <div>
            {/* Enhanced status badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-blue-400/20 bg-gradient-to-r from-blue-950/50 via-cyan-950/30 to-blue-950/50 px-4 py-2 text-xs text-zinc-200 backdrop-blur-sm"
            >
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 animate-shimmer" />
              
              {/* Pulsing dot with rings */}
              <div className="relative">
                <span className="relative z-10 flex h-2 w-2 rounded-full bg-blue-400" />
                <span className="absolute inset-0 animate-ping rounded-full bg-blue-400/75" />
                <span className="absolute inset-0 animate-pulse rounded-full bg-blue-400/50 blur-sm" />
              </div>
              
              <span className="relative z-10 font-medium">Open to internships / full-time roles</span>
              <Sparkles className="h-3 w-3 text-blue-400 animate-pulse" />
            </motion.div>

            {/* Enhanced heading with gradient */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-5 text-5xl font-bold leading-tight md:text-6xl lg:text-7xl"
            >
              <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                {PROFILE.role}
              </span>
            </motion.h1>

            {/* Enhanced description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-6 max-w-2xl text-lg text-zinc-300 leading-relaxed"
            >
              {PROFILE.headline}
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-4 max-w-2xl text-zinc-400 leading-relaxed"
            >
              {PROFILE.about}
            </motion.p>

            {/* Enhanced buttons with glassmorphism */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              
              <a href="#projects"
                className="group relative overflow-hidden rounded-xl border border-blue-500/50 bg-gradient-to-r from-blue-600 to-cyan-600 px-6 py-3 font-semibold text-white shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] hover:scale-105 inline-flex items-center gap-2"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View Projects
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 blur-xl transition-opacity group-hover:opacity-30" />
              </a>
              
              
              <a href={PROFILE.links.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-xl border border-zinc-700 bg-zinc-900/50 backdrop-blur-sm px-6 py-3 font-semibold text-zinc-200 transition-all hover:border-blue-500/50 hover:bg-blue-950/30 hover:text-white hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] hover:scale-105 inline-flex items-center gap-2"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Resume
                  <Download className="h-4 w-4 transition-transform group-hover:translate-y-1" />
                </span>
              </a>
              
              
              <a href={PROFILE.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-xl border border-zinc-700 bg-zinc-900/50 backdrop-blur-sm px-6 py-3 font-semibold text-zinc-200 transition-all hover:border-blue-500/50 hover:bg-blue-950/30 hover:text-white hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] hover:scale-105 inline-flex items-center gap-2"
              >
                <span className="relative z-10 flex items-center gap-2">
                  GitHub
                  <Github className="h-4 w-4 transition-transform group-hover:rotate-12" />
                </span>
              </a>
            </motion.div>

            {/* Robotic typing text - clean and minimal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mt-8"
            >
              <div className="flex items-center gap-2">
                <span className="font-mono text-2xl font-bold tracking-tight text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">
                  {displayText}
                  <span className="animate-blink ml-1 inline-block h-6 w-0.5 bg-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.8)]"></span>
                </span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT - Enhanced Glass Card - Positioned lower */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="group relative overflow-hidden rounded-3xl border border-blue-400/20 bg-gradient-to-br from-white/[0.07] via-white/[0.03] to-transparent backdrop-blur-xl shadow-[0_0_50px_rgba(59,130,246,0.15)] p-8 md:mt-20"
          >
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-cyan-500/5 to-purple-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            
            {/* Floating orbs inside card */}
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl transition-all duration-700 group-hover:scale-150" />
            <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl transition-all duration-700 group-hover:scale-150" />

            <div className="relative z-10">
              <div className="flex items-center gap-2 text-sm font-medium text-zinc-300">
                <Sparkles className="h-4 w-4 text-blue-400" />
                About Me
              </div>

              <div className="mt-6 flex flex-col items-center text-center">
                {/* Enhanced neon ring with multiple layers */}
                <div className="relative">
                  {/* Outer glow layers */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/30 via-cyan-400/20 to-purple-400/10 blur-3xl animate-pulse-slow" />
                  <div className="absolute inset-0 rounded-full bg-blue-400/20 blur-2xl" />

                  {/* Main ring with enhanced gradient */}
                  <div className="relative grid place-items-center rounded-full p-[3px] bg-gradient-to-br from-blue-300/80 via-cyan-400/60 to-purple-300/40 shadow-[0_0_50px_rgba(59,130,246,0.4)] transition-all duration-500 group-hover:shadow-[0_0_80px_rgba(59,130,246,0.6)] group-hover:scale-105">
                    {/* Secondary ring */}
                    <div className="rounded-full bg-gradient-to-br from-zinc-900 via-zinc-950 to-zinc-900 p-[2px]">
                      {/* Inner border */}
                      <div className="rounded-full bg-zinc-950/90 p-[3px] backdrop-blur-sm">
                        {/* Image container */}
                        <div className="relative overflow-hidden rounded-full">
                          <img
                            src="IMAGELINK"
                            alt="Profile"
                            className="h-48 w-48 rounded-full object-cover md:h-56 md:w-56 transition-transform duration-500 group-hover:scale-110"
                            loading="lazy"
                          />
                          {/* Overlay gradient on hover */}
                          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 via-transparent to-cyan-500/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Rotating ring effect */}
                  <div className="absolute inset-0 -m-2 animate-spin-slow opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="h-full w-full rounded-full border-2 border-dashed border-blue-400/30" />
                  </div>
                </div>

                <div className="mt-6 text-xl font-bold text-white">
                  {PROFILE.name}
                </div>
                <div className="mt-1 flex items-center gap-2 text-sm font-medium text-cyan-300">
                  <div className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  {PROFILE.location}
                </div>

                {/* Enhanced description card */}
                <div className="mt-6 rounded-2xl border border-blue-400/20 bg-gradient-to-br from-blue-950/50 to-cyan-950/30 backdrop-blur-sm px-5 py-4 text-sm leading-relaxed text-zinc-300 shadow-[0_0_20px_rgba(59,130,246,0.1)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] hover:border-blue-400/30">
                  Backend-focused full-stack dev who loves building auth, real-time systems,
                  and clean microservices.
                </div>
              </div>
            </div>

            {/* Corner accents */}
            <div className="absolute right-0 top-0 h-20 w-20 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <div className="absolute right-0 top-0 h-px w-10 bg-gradient-to-l from-blue-400 to-transparent" />
              <div className="absolute right-0 top-0 h-10 w-px bg-gradient-to-b from-blue-400 to-transparent" />
            </div>
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.5;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes blink {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-shimmer {
          animation: shimmer 3s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }

        .animate-blink {
          animation: blink 1s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}