import React from "react";
import { SKILLS } from "../data/content";
import { SectionTitle } from "../lib/ui.jsx";
import { Code2, Database, Wrench, Monitor } from "lucide-react";

// Brand icons
import {
    SiReact,
    SiNextdotjs,
    SiTailwindcss,
    SiTypescript,
    SiJavascript,
    SiPython,
    SiNodedotjs,
    SiExpress,
    SiPostgresql,
    SiMongodb,
    SiRedis,
    SiSocketdotio,
    SiApachekafka,
    SiElasticsearch,
    SiGit,
    SiGithub,
    SiPostman,
    SiVercel,
    SiFirebase,
    SiDocker,
    SiGnubash,
    SiHtml5,
    SiCss3,
  } from "react-icons/si";

/* -------- Category icons (top-left card icon) -------- */
const CATEGORY_ICONS = {
  Frontend: Monitor,
  Backend: Code2,
  "Databases & Languages": Database,
  Tools: Wrench,
};

/* -------- Skill → Brand Icon map -------- */
const SKILL_ICONS = {
  React: SiReact,
  "Next.js": SiNextdotjs,
  "Tailwind CSS": SiTailwindcss,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  HTML: SiHtml5,
  CSS: SiCss3,
  Python: SiPython,

  "Node.js": SiNodedotjs,
  Express: SiExpress,
  "Socket.IO": SiSocketdotio,
  Kafka: SiApachekafka,

  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  Redis: SiRedis,
  Firebase: SiFirebase,
  Elasticsearch: SiElasticsearch,

  Git: SiGit,
  GitHub: SiGithub,
  Docker: SiDocker,
  Bash: SiGnubash,
  Vercel: SiVercel,
  Postman: SiPostman,
  "REST APIs": SiPostman,
};

/* -------- Brand colors for each skill -------- */
const SKILL_COLORS = {
  React: "#61DAFB",
  "Next.js": "#000000",
  "Tailwind CSS": "#06B6D4",
  TypeScript: "#3178C6",
  JavaScript: "#F7DF1E",
  HTML: "#E34F26",
  CSS: "#1572B6",
  Python: "#3776AB",
  "Node.js": "#339933",
  Express: "#000000",
  "Socket.IO": "#010101",
  Kafka: "#231F20",
  PostgreSQL: "#4169E1",
  MongoDB: "#47A248",
  Redis: "#DC382D",
  Firebase: "#FFCA28",
  Elasticsearch: "#005571",
  Git: "#F05032",
  GitHub: "#181717",
  Docker: "#2496ED",
  Bash: "#4EAA25",
  Vercel: "#000000",
  Postman: "#FF6C37",
};

// Reorganize skills into 4 categories
const REORGANIZED_SKILLS = [
  {
    label: "Frontend",
    items: ["React", "Next.js", "HTML", "CSS", "Tailwind CSS", "TypeScript", "JavaScript"]
  },
  {
    label: "Backend",
    items: ["Node.js", "Express", "Socket.IO", "Kafka", "REST APIs"]
  },
  {
    label: "Databases & Languages",
    items: ["PostgreSQL", "MongoDB", "Redis", "Firebase", "Elasticsearch", "TypeScript", "JavaScript", "Python"]
  },
  {
    label: "Tools",
    items: ["Git", "GitHub", "Docker", "Bash", "Vercel", "Postman"]
  }
];

function SkillCard({ label, items, index }) {
  const CategoryIcon = CATEGORY_ICONS[label] || Code2;

  return (
    <div 
      className="skill-card group relative overflow-hidden rounded-3xl border p-8 transition-all duration-700"
      style={{
        animation: `fadeInScale 0.6s ease-out ${index * 0.15}s both`,
      }}
    >
      {/* Enhanced animated gradient background orbs with default glow */}
      <div className="skill-card-orb-1 absolute -right-20 -top-20 h-48 w-48 rounded-full blur-3xl transition-all duration-700 group-hover:scale-150" />
      <div className="skill-card-orb-2 absolute -bottom-20 -left-20 h-48 w-48 rounded-full blur-3xl transition-all duration-700 group-hover:scale-150" />
      <div className="skill-card-orb-3 absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl transition-all duration-700 group-hover:opacity-100" />

      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-white/[0.02] to-transparent"></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Enhanced Header */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Enhanced Category icon with default and hover glow */}
            <div 
              className="skill-card-icon relative flex h-16 w-16 items-center justify-center rounded-2xl border-2 transition-all duration-500 group-hover:rotate-12 group-hover:scale-125"
              style={{
                transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
              }}
            >
              {/* Default glow ring */}
              <div className="absolute inset-0 rounded-2xl transition-all duration-500" 
                   style={{ boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)' }} />
              
              {/* Hover glow ring (stronger) */}
              <div className="absolute inset-0 rounded-2xl opacity-0 transition-all duration-500 group-hover:opacity-100" 
                   style={{ boxShadow: '0 0 50px rgba(59, 130, 246, 0.7), 0 0 80px rgba(59, 130, 246, 0.4)' }} />
              
              <CategoryIcon className="skill-card-icon-inner relative z-10 transition-all duration-500 group-hover:scale-125" size={28} />
              
              {/* Animated pulse ring */}
              <div className="absolute inset-0 -m-2 rounded-2xl border-2 border-blue-500/30 opacity-0 transition-all duration-700 group-hover:opacity-100 group-hover:scale-125" 
                   style={{ animation: 'pulse 2s ease-in-out infinite' }} />
            </div>
            
            <div>
              <div className="skill-card-title text-2xl font-bold transition-colors">
                {label}
              </div>
              <div className="skill-card-subtitle text-sm transition-colors">
                {items.length} {items.length === 1 ? 'technology' : 'technologies'}
              </div>
            </div>
          </div>

          {/* Enhanced Skill count badge with default and hover glow */}
          <div className="skill-card-badge relative flex h-12 w-12 items-center justify-center rounded-xl text-base font-bold transition-all duration-300">
            {/* Default glow */}
            <div className="absolute inset-0 rounded-xl blur-xl transition-opacity duration-300" 
                 style={{ background: 'radial-gradient(circle, rgba(59, 130, 246, 0.2), transparent)' }} />
            {/* Hover glow (stronger) */}
            <div className="absolute inset-0 rounded-xl opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" 
                 style={{ background: 'radial-gradient(circle, rgba(59, 130, 246, 0.5), transparent)' }} />
            <span className="relative z-10">{items.length}</span>
          </div>
        </div>

        {/* Enhanced Divider with default subtle glow and animated gradient on hover */}
        <div className="skill-card-divider relative mb-6 h-px w-full overflow-hidden transition-all duration-500">
          {/* Hover animated gradient */}
          <div className="absolute inset-0 h-full w-full opacity-0 transition-opacity duration-700 group-hover:opacity-100" 
               style={{ 
                 background: 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.8), transparent)',
                 animation: 'shimmer 3s ease-in-out infinite'
               }} />
        </div>

        {/* Enhanced Skills grid with default and hover glow */}
        <div className="grid grid-cols-2 gap-3">
          {items.map((skill, skillIndex) => {
            const Icon = SKILL_ICONS[skill];
            const brandColor = SKILL_COLORS[skill] || "#3b82f6";

            return (
              <div
                key={skill}
                className="skill-badge group/skill relative overflow-hidden rounded-xl border backdrop-blur-sm px-4 py-3.5 transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                style={{
                  animation: `fadeIn 0.4s ease-out ${skillIndex * 0.05}s both`,
                  boxShadow: `0 0 15px ${brandColor}20, 0 0 30px ${brandColor}10`, // Default glow
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 30px ${brandColor}60, 0 0 60px ${brandColor}35`; // Stronger hover glow
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 15px ${brandColor}20, 0 0 30px ${brandColor}10`; // Back to default glow
                }}
              >
                {/* Glassmorphism overlay for skill badges */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent"></div>

                {/* Default hover glow effect (subtle) */}
                <div 
                  className="absolute inset-0 blur-xl transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle at center, ${brandColor}08, transparent)`,
                  }}
                />

                {/* Enhanced hover glow effect (strong) */}
                <div 
                  className="absolute inset-0 opacity-0 blur-xl transition-opacity duration-300 group-hover/skill:opacity-100"
                  style={{
                    background: `radial-gradient(circle at center, ${brandColor}25, transparent)`,
                  }}
                />

                {/* Animated border gradient */}
                <div 
                  className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover/skill:opacity-100"
                  style={{
                    background: `linear-gradient(135deg, ${brandColor}30, transparent)`,
                    mixBlendMode: 'overlay',
                  }}
                />

                {/* Content */}
                <div className="relative flex items-center gap-3">
                  {Icon ? (
                    <div className="relative flex-shrink-0">
                      {/* Icon with brand color and enhanced effects */}
                      <Icon 
                        className="transition-all duration-300 group-hover/skill:scale-125 group-hover/skill:rotate-6" 
                        size={20}
                        style={{
                          color: brandColor,
                          filter: 'brightness(1.2) drop-shadow(0 0 6px currentColor)', // Default glow
                        }}
                      />
                      
                      {/* Default pulsing ring around icon (subtle) */}
                      <div 
                        className="absolute inset-0 -m-1.5 rounded-full transition-all duration-500"
                        style={{
                          border: `2px solid ${brandColor}20`,
                        }}
                      />

                      {/* Enhanced pulsing ring on hover (strong) */}
                      <div 
                        className="absolute inset-0 -m-1.5 rounded-full opacity-0 transition-all duration-500 group-hover/skill:opacity-100"
                        style={{
                          border: `2px solid ${brandColor}60`,
                          animation: 'pulse 2s ease-in-out infinite',
                        }}
                      />

                      {/* Secondary glow ring */}
                      <div 
                        className="absolute inset-0 -m-3 rounded-full opacity-0 blur-sm transition-all duration-700 group-hover/skill:opacity-60"
                        style={{
                          background: `radial-gradient(circle, ${brandColor}40, transparent)`,
                        }}
                      />
                    </div>
                  ) : null}
                  
                  <span className="skill-badge-text text-sm font-semibold transition-colors duration-300">
                    {skill}
                  </span>
                </div>

                {/* Enhanced bottom accent line with default and hover glow */}
                <div 
                  className="absolute bottom-0 left-0 h-1 w-0 transition-all duration-300 group-hover/skill:w-full"
                  style={{
                    background: `linear-gradient(90deg, ${brandColor}, ${brandColor}80)`,
                    boxShadow: `0 0 12px ${brandColor}70, 0 2px 8px ${brandColor}50`,
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Enhanced corner accents with glow */}
      <div className="skill-card-corner absolute right-0 top-0 h-24 w-24 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="skill-card-corner-line absolute right-0 top-0 h-px w-12" 
             style={{ boxShadow: '0 0 8px rgba(59, 130, 246, 0.6)' }} />
        <div className="skill-card-corner-line absolute right-0 top-0 h-12 w-px" 
             style={{ boxShadow: '0 0 8px rgba(59, 130, 246, 0.6)' }} />
      </div>

      {/* Enhanced shine effect */}
      <div 
        className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-all duration-1000 group-hover:translate-x-full group-hover:opacity-100"
        style={{
          transform: 'translateX(-100%) skewX(-15deg)',
        }}
      />

      {/* Particle effect on hover */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-blue-400"
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 20}%`,
              animation: `float ${2 + i * 0.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
      <SectionTitle
        kicker="Expertise"
        title="Technical Skills"
        desc="A comprehensive toolkit for building modern, scalable web applications and backend systems."
      />

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {REORGANIZED_SKILLS.map((group, index) => (
          <SkillCard
            key={group.label}
            label={group.label}
            items={group.items}
            index={index}
          />
        ))}
      </div>

      <style jsx>{`
        /* Enhanced glassmorphism theme-aware styles */
        .skill-card {
          border-color: var(--border-color, rgba(255, 255, 255, 0.1));
          background: var(--card-bg, 
            linear-gradient(135deg, 
              rgba(255, 255, 255, 0.05), 
              rgba(255, 255, 255, 0.02)
            )
          );
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          /* Default card glow */
          box-shadow: var(--card-default-shadow, 
            0 0 30px rgba(59, 130, 246, 0.15), 
            0 0 60px rgba(59, 130, 246, 0.08),
            0 10px 40px rgba(0, 0, 0, 0.3),
            inset 0 0 0 1px rgba(255, 255, 255, 0.05)
          );
        }

        .skill-card:hover {
          box-shadow: var(--card-hover-shadow, 
            0 0 70px rgba(59, 130, 246, 0.5), 
            0 0 140px rgba(59, 130, 246, 0.25),
            0 20px 60px rgba(0, 0, 0, 0.4),
            inset 0 0 0 1px rgba(255, 255, 255, 0.1)
          );
          transform: translateY(-12px) scale(1.02);
          border-color: rgba(59, 130, 246, 0.4);
        }

        .skill-card-orb-1 {
          background: var(--orb-1-bg, radial-gradient(circle, rgb(59 130 246 / 0.25), transparent));
          opacity: 0.6; /* Default visible */
        }

        .skill-card:hover .skill-card-orb-1 {
          opacity: 1; /* Full opacity on hover */
        }

        .skill-card-orb-2 {
          background: var(--orb-2-bg, radial-gradient(circle, rgb(6 182 212 / 0.25), transparent));
          opacity: 0.6; /* Default visible */
        }

        .skill-card:hover .skill-card-orb-2 {
          opacity: 1; /* Full opacity on hover */
        }

        .skill-card-orb-3 {
          background: var(--orb-3-bg, radial-gradient(circle, rgb(147 51 234 / 0.18), transparent));
          opacity: 0.4; /* Default subtle */
        }

        .skill-card-icon {
          border-color: var(--icon-border, rgba(255, 255, 255, 0.1));
          background: var(--icon-bg, 
            linear-gradient(135deg, 
              rgba(255, 255, 255, 0.08), 
              rgba(255, 255, 255, 0.03)
            )
          );
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }

        .skill-card:hover .skill-card-icon {
          border-color: var(--icon-hover-border, rgba(96, 165, 250, 0.5));
          background: var(--icon-hover-bg, 
            linear-gradient(135deg, 
              rgba(59, 130, 246, 0.2), 
              rgba(6, 182, 212, 0.1)
            )
          );
        }

        .skill-card-icon-inner {
          color: var(--icon-color, rgb(147 197 253));
          filter: drop-shadow(0 0 8px currentColor);
        }

        .skill-card-title {
          color: var(--title-color, rgb(255 255 255));
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
        }

        .skill-card:hover .skill-card-title {
          color: var(--title-hover-color, rgb(255 255 255));
          text-shadow: 0 0 20px rgba(96, 165, 250, 0.6);
        }

        .skill-card-subtitle {
          color: var(--subtitle-color, rgb(161 161 170));
        }

        .skill-card:hover .skill-card-subtitle {
          color: var(--subtitle-hover-color, rgb(147 197 253));
        }

        .skill-card-badge {
          background: var(--badge-bg, 
            linear-gradient(135deg, 
              rgba(255, 255, 255, 0.08), 
              rgba(255, 255, 255, 0.03)
            )
          );
          color: var(--badge-color, rgb(212 212 216));
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }

        .skill-card:hover .skill-card-badge {
          background: var(--badge-hover-bg, 
            linear-gradient(135deg, 
              rgba(59, 130, 246, 0.25), 
              rgba(6, 182, 212, 0.15)
            )
          );
          color: var(--badge-hover-color, rgb(255 255 255));
          border-color: rgba(96, 165, 250, 0.4);
        }

        .skill-card-divider {
          background: var(--divider-bg, 
            linear-gradient(to right, 
              transparent, 
              rgba(255, 255, 255, 0.1), 
              transparent
            )
          );
          /* Default subtle glow */
          box-shadow: 0 0 10px rgba(59, 130, 246, 0.2);
        }

        .skill-card:hover .skill-card-divider {
          background: var(--divider-hover-bg, 
            linear-gradient(to right, 
              transparent, 
              rgba(96, 165, 250, 0.5), 
              transparent
            )
          );
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
        }

        .skill-badge {
          border-color: var(--skill-border, rgba(255, 255, 255, 0.08));
          background: var(--skill-bg, 
            linear-gradient(135deg, 
              rgba(255, 255, 255, 0.05), 
              rgba(255, 255, 255, 0.02)
            )
          );
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }

        .skill-badge:hover {
          border-color: var(--skill-hover-border, rgba(96, 165, 250, 0.5));
          background: var(--skill-hover-bg, 
            linear-gradient(135deg, 
              rgba(59, 130, 246, 0.15), 
              rgba(6, 182, 212, 0.08)
            )
          );
        }

        .skill-badge-text {
          color: var(--skill-text, rgb(228 228 231));
        }

        .skill-badge:hover .skill-badge-text {
          color: var(--skill-text-hover, rgb(255 255 255));
          text-shadow: 0 0 10px rgba(96, 165, 250, 0.5);
        }

        .skill-card-corner-line {
          background: var(--corner-line-bg, linear-gradient(to left, rgb(96 165 250), transparent));
        }

        /* Light theme overrides - lighter glass effect */
        :global([data-theme="light"]) .skill-card {
          --border-color: rgba(0, 0, 0, 0.1);
          --card-bg: linear-gradient(135deg, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.5));
          --card-default-shadow: 0 0 30px rgba(59, 130, 246, 0.12), 0 0 60px rgba(59, 130, 246, 0.06), 0 10px 40px rgba(0, 0, 0, 0.1), inset 0 0 0 1px rgba(255, 255, 255, 0.8);
          --card-hover-shadow: 0 0 70px rgba(59, 130, 246, 0.3), 0 0 140px rgba(59, 130, 246, 0.15), 0 20px 60px rgba(0, 0, 0, 0.15), inset 0 0 0 1px rgba(255, 255, 255, 0.9);
        }

        :global([data-theme="light"]) .skill-card-orb-1 {
          --orb-1-bg: radial-gradient(circle, rgb(59 130 246 / 0.15), transparent);
        }

        :global([data-theme="light"]) .skill-card-orb-2 {
          --orb-2-bg: radial-gradient(circle, rgb(6 182 212 / 0.15), transparent);
        }

        :global([data-theme="light"]) .skill-card-orb-3 {
          --orb-3-bg: radial-gradient(circle, rgb(147 51 234 / 0.12), transparent);
        }

        :global([data-theme="light"]) .skill-card-icon {
          --icon-border: rgba(0, 0, 0, 0.1);
          --icon-bg: linear-gradient(135deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.6));
          --icon-hover-border: rgb(59 130 246);
          --icon-hover-bg: linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(6, 182, 212, 0.15));
        }

        :global([data-theme="light"]) .skill-card-icon-inner {
          --icon-color: rgb(37 99 235);
        }

        :global([data-theme="light"]) .skill-card-title {
          --title-color: rgb(0 0 0);
          --title-hover-color: rgb(0 0 0);
        }

        :global([data-theme="light"]) .skill-card-subtitle {
          --subtitle-color: rgb(113 113 122);
          --subtitle-hover-color: rgb(37 99 235);
        }

        :global([data-theme="light"]) .skill-card-badge {
          --badge-bg: linear-gradient(135deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.6));
          --badge-color: rgb(63 63 70);
          --badge-hover-bg: linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(6, 182, 212, 0.15));
          --badge-hover-color: rgb(0 0 0);
        }

        :global([data-theme="light"]) .skill-card-divider {
          --divider-bg: linear-gradient(to right, transparent, rgba(0, 0, 0, 0.1), transparent);
          --divider-hover-bg: linear-gradient(to right, transparent, rgb(59 130 246 / 0.4), transparent);
        }

        :global([data-theme="light"]) .skill-badge {
          --skill-border: rgba(0, 0, 0, 0.08);
          --skill-bg: linear-gradient(135deg, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.5));
          --skill-hover-border: rgba(59, 130, 246, 0.5);
          --skill-hover-bg: linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(6, 182, 212, 0.1));
        }

        :global([data-theme="light"]) .skill-badge-text {
          --skill-text: rgb(24 24 27);
          --skill-text-hover: rgb(0 0 0);
        }

        :global([data-theme="light"]) .skill-card-corner-line {
          --corner-line-bg: linear-gradient(to left, rgb(59 130 246), transparent);
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(30px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.3);
          }
        }

        @keyframes shimmer {
          0%, 100% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(100%);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          50% {
            transform: translateY(-20px) translateX(10px);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}