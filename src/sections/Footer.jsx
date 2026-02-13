import React from "react";
import { PROFILE } from "../data/content";
import { Heart, Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" },
    { label: "Achievements", href: "#achievements" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="footer-container relative overflow-hidden border-t">
      {/* Animated background gradient */}
      <div className="footer-glow-1 absolute -left-40 top-0 h-60 w-60 rounded-full opacity-30 blur-3xl" />
      <div className="footer-glow-2 absolute -right-40 top-0 h-60 w-60 rounded-full opacity-30 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-16">
        {/* Main Footer Content */}
        <div className="grid gap-8 sm:gap-12 md:grid-cols-3">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="footer-logo grid h-10 w-10 sm:h-12 sm:w-12 place-items-center rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg transition-all duration-300 hover:scale-110 hover:rotate-6">
                NK
              </div>
              <div>
                <div className="footer-brand-name text-base sm:text-lg font-semibold">
                  {PROFILE.name}
                </div>
                <div className="footer-brand-role text-xs sm:text-sm">
                  Full Stack Developer
                </div>
              </div>
            </div>
            <p className="footer-description text-xs sm:text-sm leading-relaxed">
              Building scalable full-stack applications with focus on real-time systems and backend architecture.
            </p>
            <div className="flex items-center gap-2 text-xs sm:text-sm">
              <span className="footer-made-text">Made with</span>
              <Heart className="footer-heart h-3 w-3 sm:h-4 sm:w-4 fill-current" />
              <span className="footer-made-text">using Vite + React</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="footer-heading text-sm font-semibold uppercase tracking-wider">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-2 sm:gap-3">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="footer-link group inline-flex items-center gap-2 text-sm transition-all duration-300 hover:translate-x-1"
                >
                  <span className="footer-link-dot h-1 w-1 rounded-full opacity-0 transition-all duration-300 group-hover:opacity-100" />
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Connect Section */}
          <div className="space-y-4">
            <h3 className="footer-heading text-sm font-semibold uppercase tracking-wider">
              Connect
            </h3>
            <div className="flex flex-wrap gap-3">
              <a
                href={PROFILE.links.github}
                target="_blank"
                rel="noreferrer"
                className="footer-social group relative flex items-center gap-2 rounded-xl border px-4 py-2 text-sm transition-all duration-300 hover:scale-105"
                aria-label="GitHub"
              >
                <Github size={16} className="transition-all duration-300 group-hover:rotate-12" />
                <span className="hidden sm:inline">GitHub</span>
              </a>
              <a
                href={PROFILE.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="footer-social group relative flex items-center gap-2 rounded-xl border px-4 py-2 text-sm transition-all duration-300 hover:scale-105"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} className="transition-all duration-300 group-hover:scale-110" />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
              <a
                href={PROFILE.links.email}
                className="footer-social group relative flex items-center gap-2 rounded-xl border px-4 py-2 text-sm transition-all duration-300 hover:scale-105"
                aria-label="Email"
              >
                <Mail size={16} className="transition-all duration-300 group-hover:-rotate-12" />
                <span className="hidden sm:inline">Email</span>
              </a>
            </div>
            
            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="footer-scroll-top group mt-4 flex items-center gap-2 rounded-xl border px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105"
              aria-label="Back to top"
            >
              <ArrowUp size={16} className="transition-all duration-300 group-hover:-translate-y-1" />
              Back to Top
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-divider mt-8 sm:mt-12 h-px w-full" />
        
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm">
          <div className="footer-copyright text-center sm:text-left">
            © {currentYear} {PROFILE.name}. All rights reserved.
          </div>
          <div className="footer-location flex items-center gap-2">
            <span className="footer-location-dot h-2 w-2 rounded-full" />
            <span>Based in {PROFILE.location}</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Dark theme (default) */
        .footer-container {
          border-color: var(--footer-border, rgb(39 39 42));
          background: var(--footer-bg, rgba(49, 49, 59, 0.36));
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }

        .footer-glow-1 {
          background: var(--glow-1, rgb(59 130 246 / 0.1));
        }

        .footer-glow-2 {
          background: var(--glow-2, rgb(6 182 212 / 0.1));
        }

        .footer-logo {
          background: var(--logo-bg, rgb(244 244 245));
          color: var(--logo-color, rgb(9 9 11));
          box-shadow: var(--logo-shadow, 0 0 20px rgba(59, 130, 246, 0.2));
        }

        .footer-logo:hover {
          box-shadow: var(--logo-hover-shadow, 0 0 30px rgba(59, 130, 246, 0.4));
        }

        .footer-brand-name {
          color: var(--text-primary, rgb(244 244 245));
        }

        .footer-brand-role {
          color: var(--text-secondary, rgb(161 161 170));
        }

        .footer-description {
          color: var(--text-muted, rgb(161 161 170));
        }

        .footer-made-text {
          color: var(--text-muted, rgb(161 161 170));
        }

        .footer-heart {
          color: var(--heart-color, rgb(239 68 68));
          animation: heartbeat 2s ease-in-out infinite;
        }

        .footer-heading {
          color: var(--heading-color, rgb(244 244 245));
        }

        .footer-link {
          color: var(--link-color, rgb(161 161 170));
        }

        .footer-link:hover {
          color: var(--link-hover, rgb(96 165 250));
        }

        .footer-link-dot {
          background: var(--dot-bg, rgb(96 165 250));
        }

        .footer-social {
          border-color: var(--social-border, rgb(39 39 42));
          background: var(--social-bg, transparent);
          color: var(--social-color, rgb(161 161 170));
        }

        .footer-social:hover {
          border-color: var(--social-hover-border, rgb(59 130 246 / 0.5));
          background: var(--social-hover-bg, rgb(59 130 246 / 0.1));
          color: var(--social-hover-color, rgb(96 165 250));
          box-shadow: var(--social-hover-shadow, 0 0 20px rgba(59, 130, 246, 0.3));
        }

        .footer-scroll-top {
          border-color: var(--social-border, rgb(39 39 42));
          background: var(--social-bg, transparent);
          color: var(--social-color, rgb(161 161 170));
        }

        .footer-scroll-top:hover {
          border-color: var(--social-hover-border, rgb(59 130 246 / 0.5));
          background: var(--social-hover-bg, rgb(59 130 246 / 0.1));
          color: var(--social-hover-color, rgb(96 165 250));
          box-shadow: var(--social-hover-shadow, 0 0 20px rgba(59, 130, 246, 0.3));
        }

        .footer-divider {
          background: var(--divider-bg, linear-gradient(to right, transparent, rgb(59 130 246 / 0.2), transparent));
        }

        .footer-copyright {
          color: var(--text-muted, rgb(113 113 122));
        }

        .footer-location {
          color: var(--text-muted, rgb(161 161 170));
        }

        .footer-location-dot {
          background: var(--dot-bg, rgb(34 197 94));
          box-shadow: var(--dot-shadow, 0 0 8px rgba(34, 197, 94, 0.6));
          animation: pulse 2s ease-in-out infinite;
        }

        /* Light theme */
        :global([data-theme="light"]) .footer-container {
          --footer-border: rgb(228 228 231);
          --footer-bg: rgba(255, 255, 255, 0.5);
        }

        :global([data-theme="light"]) .footer-glow-1 {
          --glow-1: rgb(59 130 246 / 0.05);
        }

        :global([data-theme="light"]) .footer-glow-2 {
          --glow-2: rgb(6 182 212 / 0.05);
        }

        :global([data-theme="light"]) .footer-logo {
          --logo-bg: rgb(24 24 27);
          --logo-color: rgb(244 244 245);
          --logo-shadow: 0 0 20px rgba(59, 130, 246, 0.15);
          --logo-hover-shadow: 0 0 30px rgba(59, 130, 246, 0.3);
        }

        :global([data-theme="light"]) .footer-brand-name {
          --text-primary: rgb(24 24 27);
        }

        :global([data-theme="light"]) .footer-brand-role,
        :global([data-theme="light"]) .footer-description,
        :global([data-theme="light"]) .footer-made-text {
          --text-secondary: rgb(113 113 122);
          --text-muted: rgb(113 113 122);
        }

        :global([data-theme="light"]) .footer-heart {
          --heart-color: rgb(239 68 68);
        }

        :global([data-theme="light"]) .footer-heading {
          --heading-color: rgb(24 24 27);
        }

        :global([data-theme="light"]) .footer-link {
          --link-color: rgb(113 113 122);
          --link-hover: rgb(37 99 235);
        }

        :global([data-theme="light"]) .footer-link-dot {
          --dot-bg: rgb(59 130 246);
        }

        :global([data-theme="light"]) .footer-social,
        :global([data-theme="light"]) .footer-scroll-top {
          --social-border: rgb(228 228 231);
          --social-bg: transparent;
          --social-color: rgb(63 63 70);
          --social-hover-border: rgb(59 130 246 / 0.5);
          --social-hover-bg: rgb(59 130 246 / 0.1);
          --social-hover-color: rgb(37 99 235);
          --social-hover-shadow: 0 0 20px rgba(59, 130, 246, 0.2);
        }

        :global([data-theme="light"]) .footer-divider {
          --divider-bg: linear-gradient(to right, transparent, rgb(59 130 246 / 0.15), transparent);
        }

        :global([data-theme="light"]) .footer-copyright,
        :global([data-theme="light"]) .footer-location {
          --text-muted: rgb(113 113 122);
        }

        :global([data-theme="light"]) .footer-location-dot {
          --dot-bg: rgb(34 197 94);
          --dot-shadow: 0 0 8px rgba(34, 197, 94, 0.4);
        }

        @keyframes heartbeat {
          0%, 100% {
            transform: scale(1);
          }
          10%, 30% {
            transform: scale(1.1);
          }
          20%, 40% {
            transform: scale(1);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
    </footer>
  );
}