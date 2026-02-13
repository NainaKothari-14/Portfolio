import React from "react";
import { SKILLS } from "../data/content";
import { SectionTitle } from "../lib/ui.jsx";
import { Code2, Database, Wrench, Monitor, Radio } from "lucide-react";

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
  } from "react-icons/si";

/* -------- Category icons (top-left card icon) -------- */
const CATEGORY_ICONS = {
  Frontend: Monitor,
  Backend: Code2,
  Databases: Database,
  "Real-Time & Messaging": Radio,
  Tools: Wrench,
  Languages: Code2,
};

/* -------- Skill → Brand Icon map -------- */
const SKILL_ICONS = {
  React: SiReact,
  "Next.js": SiNextdotjs,
  "Tailwind CSS": SiTailwindcss,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  Python: SiPython,

  "Node.js": SiNodedotjs,
  Express: SiExpress,

  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  Redis: SiRedis,
  Firebase: SiFirebase,

  "Socket.IO": SiSocketdotio,
  Kafka: SiApachekafka,
  Elasticsearch: SiElasticsearch,

  Git: SiGit,
  GitHub: SiGithub,
  Postman: SiPostman,
  Vercel: SiVercel,
  "REST APIs": SiPostman, // Fallback icon
};

/* -------- Brand colors for each skill -------- */
const SKILL_COLORS = {
  React: "#61DAFB",
  "Next.js": "#000000",
  "Tailwind CSS": "#06B6D4",
  TypeScript: "#3178C6",
  JavaScript: "#F7DF1E",
  Python: "#3776AB",
  "Node.js": "#339933",
  Express: "#000000",
  PostgreSQL: "#4169E1",
  MongoDB: "#47A248",
  Redis: "#DC382D",
  Firebase: "#FFCA28",
  "Socket.IO": "#010101",
  Kafka: "#231F20",
  Elasticsearch: "#005571",
  Git: "#F05032",
  GitHub: "#181717",
  Postman: "#FF6C37",
  Vercel: "#000000",
};

function SkillCard({ label, items, index }) {
  const CategoryIcon = CATEGORY_ICONS[label] || Code2;

  return (
    <div 
      className="skill-card group relative overflow-hidden rounded-2xl sm:rounded-3xl border p-6 sm:p-8 transition-all duration-700"
      style={{
        animation: `fadeInScale 0.6s ease-out ${index * 0.1}s both`,
      }}
    >
      {/* Animated gradient background orbs */}
      <div className="skill-card-orb-1 absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-all duration-700 group-hover:opacity-100 group-hover:scale-125" />
      <div className="skill-card-orb-2 absolute -bottom-16 -left-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-all duration-700 group-hover:opacity-100 group-hover:scale-125" />

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="mb-4 sm:mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Category icon with glow */}
            <div 
              className="skill-card-icon flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl sm:rounded-2xl border-2 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110"
              style={{
                transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
              }}
            >
              <CategoryIcon className="skill-card-icon-inner transition-all duration-500 group-hover:scale-110" size={20} />
            </div>
            
            <div>
              <div className="skill-card-title text-base sm:text-lg font-semibold transition-colors">
                {label}
              </div>
              <div className="skill-card-subtitle text-xs transition-colors">
                {items.length} technologies
              </div>
            </div>
          </div>

          {/* Skill count badge */}
          <div className="skill-card-badge flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg sm:rounded-xl text-xs sm:text-sm font-bold transition-all duration-300">
            {items.length}
          </div>
        </div>

        {/* Divider with gradient */}
        <div className="skill-card-divider mb-4 sm:mb-6 h-px w-full transition-all duration-500" />

        {/* Skills grid with prominent logos */}
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {items.map((skill, skillIndex) => {
            const Icon = SKILL_ICONS[skill];
            const brandColor = SKILL_COLORS[skill] || "#3b82f6";

            return (
              <div
                key={skill}
                className="skill-badge group/skill relative overflow-hidden rounded-lg sm:rounded-xl border backdrop-blur-sm px-3 py-2 sm:px-4 sm:py-3 transition-all duration-300 hover:scale-105"
                style={{
                  animation: `fadeIn 0.4s ease-out ${skillIndex * 0.05}s both`,
                }}
                onMouseEnter={(el) => {
                  el.style.boxShadow = `0 0 20px ${brandColor}40, 0 0 40px ${brandColor}20`;
                }}
                onMouseLeave={(el) => {
                  el.style.boxShadow = 'none';
                }}
              >
                {/* Hover glow effect */}
                <div 
                  className="absolute inset-0 opacity-0 blur-xl transition-opacity duration-300 group-hover/skill:opacity-100"
                  style={{
                    background: `radial-gradient(circle at center, ${brandColor}15, transparent)`,
                  }}
                />

                {/* Content */}
                <div className="relative flex items-center gap-2 sm:gap-3">
                  {Icon ? (
                    <div className="relative flex-shrink-0">
                      {/* Icon with brand color */}
                      <Icon 
                        className="transition-all duration-300 group-hover/skill:scale-110" 
                        size={18}
                        style={{
                          color: brandColor,
                          filter: 'brightness(1.2)',
                        }}
                      />
                      
                      {/* Pulsing ring around icon */}
                      <div 
                        className="absolute inset-0 -m-1 rounded-full opacity-0 transition-all duration-500 group-hover/skill:opacity-100"
                        style={{
                          border: `2px solid ${brandColor}40`,
                          animation: 'pulse 2s ease-in-out infinite',
                        }}
                      />
                    </div>
                  ) : null}
                  
                  <span className="skill-badge-text text-xs sm:text-sm font-medium transition-colors duration-300">
                    {skill}
                  </span>
                </div>

                {/* Bottom accent line */}
                <div 
                  className="absolute bottom-0 left-0 h-0.5 w-0 transition-all duration-300 group-hover/skill:w-full"
                  style={{
                    background: `linear-gradient(90deg, ${brandColor}, ${brandColor}80)`,
                    boxShadow: `0 0 8px ${brandColor}60`,
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Corner accents */}
      <div className="skill-card-corner absolute right-0 top-0 h-20 w-20 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="skill-card-corner-line absolute right-0 top-0 h-px w-10" />
        <div className="skill-card-corner-line absolute right-0 top-0 h-10 w-px" />
      </div>

      {/* Shine effect */}
      <div 
        className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 transition-all duration-1000 group-hover:translate-x-full group-hover:opacity-100"
        style={{
          transform: 'translateX(-100%) skewX(-15deg)',
        }}
      />
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
      <SectionTitle
        kicker="Expertise"
        title="Technical Skills"
        desc="A focused toolkit built around backend systems, scalable services, and real-time applications."
      />

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
        {SKILLS.map((group, index) => (
          <SkillCard
            key={group.label}
            label={group.label}
            items={group.items}
            index={index}
          />
        ))}
      </div>

      <style jsx>{`
        /* Theme-aware styles using CSS variables */
        .skill-card {
          border-color: var(--border-color, rgb(39 39 42));
          background: var(--card-bg, linear-gradient(to bottom right, rgb(9 9 11 / 0.9), rgb(24 24 27 / 0.5)));
        }

        .skill-card:hover {
          box-shadow: var(--card-hover-shadow, 0 0 50px rgba(59, 130, 246, 0.25), 0 0 100px rgba(59, 130, 246, 0.12));
          transform: translateY(-8px) scale(1.01);
        }

        .skill-card-orb-1 {
          background: var(--orb-1-bg, rgb(59 130 246 / 0.1));
        }

        .skill-card-orb-2 {
          background: var(--orb-2-bg, rgb(6 182 212 / 0.1));
        }

        .skill-card-icon {
          border-color: var(--icon-border, rgb(63 63 70));
          background: var(--icon-bg, rgb(24 24 27 / 0.8));
        }

        .skill-card:hover .skill-card-icon {
          border-color: var(--icon-hover-border, rgb(59 130 246));
          background: var(--icon-hover-bg, rgb(59 130 246 / 0.1));
          box-shadow: var(--icon-hover-shadow, 0 0 30px rgba(59, 130, 246, 0.6), 0 0 60px rgba(59, 130, 246, 0.3));
        }

        .skill-card-icon-inner {
          color: var(--icon-color, rgb(96 165 250));
        }

        .skill-card-title {
          color: var(--title-color, rgb(244 244 245));
        }

        .skill-card:hover .skill-card-title {
          color: var(--title-hover-color, rgb(255 255 255));
        }

        .skill-card-subtitle {
          color: var(--subtitle-color, rgb(113 113 122));
        }

        .skill-card:hover .skill-card-subtitle {
          color: var(--subtitle-hover-color, rgb(96 165 250));
        }

        .skill-card-badge {
          background: var(--badge-bg, rgb(39 39 42 / 0.5));
          color: var(--badge-color, rgb(161 161 170));
        }

        .skill-card:hover .skill-card-badge {
          background: var(--badge-hover-bg, rgb(59 130 246 / 0.2));
          color: var(--badge-hover-color, rgb(96 165 250));
        }

        .skill-card-divider {
          background: var(--divider-bg, linear-gradient(to right, transparent, rgb(63 63 70), transparent));
        }

        .skill-card:hover .skill-card-divider {
          background: var(--divider-hover-bg, linear-gradient(to right, transparent, rgb(59 130 246 / 0.3), transparent));
        }

        .skill-badge {
          border-color: var(--skill-border, rgb(39 39 42));
          background: var(--skill-bg, rgb(24 24 27 / 0.5));
        }

        .skill-badge:hover {
          border-color: var(--skill-hover-border, rgb(59 130 246 / 0.5));
          background: var(--skill-hover-bg, rgb(59 130 246 / 0.1));
        }

        .skill-badge-text {
          color: var(--skill-text, rgb(212 212 216));
        }

        .skill-badge:hover .skill-badge-text {
          color: var(--skill-text-hover, rgb(255 255 255));
        }

        .skill-card-corner-line {
          background: var(--corner-line-bg, linear-gradient(to left, rgb(59 130 246), transparent));
        }

        /* Light theme overrides - add data-theme="light" to parent */
        :global([data-theme="light"]) .skill-card {
          --border-color: rgb(228 228 231);
          --card-bg: linear-gradient(to bottom right, rgb(255 255 255 / 0.9), rgb(250 250 250 / 0.5));
          --card-hover-shadow: 0 0 50px rgba(59, 130, 246, 0.15), 0 0 100px rgba(59, 130, 246, 0.08);
        }

        :global([data-theme="light"]) .skill-card-orb-1 {
          --orb-1-bg: rgb(59 130 246 / 0.08);
        }

        :global([data-theme="light"]) .skill-card-orb-2 {
          --orb-2-bg: rgb(6 182 212 / 0.08);
        }

        :global([data-theme="light"]) .skill-card-icon {
          --icon-border: rgb(212 212 216);
          --icon-bg: rgb(244 244 245 / 0.8);
          --icon-hover-border: rgb(59 130 246);
          --icon-hover-bg: rgb(59 130 246 / 0.15);
          --icon-hover-shadow: 0 0 30px rgba(59, 130, 246, 0.4), 0 0 60px rgba(59, 130, 246, 0.2);
        }

        :global([data-theme="light"]) .skill-card-icon-inner {
          --icon-color: rgb(37 99 235);
        }

        :global([data-theme="light"]) .skill-card-title {
          --title-color: rgb(24 24 27);
          --title-hover-color: rgb(0 0 0);
        }

        :global([data-theme="light"]) .skill-card-subtitle {
          --subtitle-color: rgb(113 113 122);
          --subtitle-hover-color: rgb(37 99 235);
        }

        :global([data-theme="light"]) .skill-card-badge {
          --badge-bg: rgb(244 244 245 / 0.8);
          --badge-color: rgb(113 113 122);
          --badge-hover-bg: rgb(59 130 246 / 0.15);
          --badge-hover-color: rgb(37 99 235);
        }

        :global([data-theme="light"]) .skill-card-divider {
          --divider-bg: linear-gradient(to right, transparent, rgb(212 212 216), transparent);
          --divider-hover-bg: linear-gradient(to right, transparent, rgb(59 130 246 / 0.3), transparent);
        }

        :global([data-theme="light"]) .skill-badge {
          --skill-border: rgb(228 228 231);
          --skill-bg: rgb(255 255 255 / 0.8);
          --skill-hover-border: rgb(59 130 246 / 0.5);
          --skill-hover-bg: rgb(59 130 246 / 0.1);
        }

        :global([data-theme="light"]) .skill-badge-text {
          --skill-text: rgb(63 63 70);
          --skill-text-hover: rgb(0 0 0);
        }

        :global([data-theme="light"]) .skill-card-corner-line {
          --corner-line-bg: linear-gradient(to left, rgb(59 130 246), transparent);
        }

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

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
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
            opacity: 0.5;
            transform: scale(1.2);
          }
        }
      `}</style>
    </section>
  );
}