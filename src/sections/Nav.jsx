import React, { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Menu, X, Sun, Moon } from "lucide-react";
import { PROFILE } from "../data/content";

export default function Nav({ theme, setTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  // Debug: Log theme changes
  useEffect(() => {
    console.log("Current theme:", theme);
  }, [theme]);

  const items = [
    { label: "Home", href: "#home" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" },
    { label: "Achievements", href: "#achievements" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = items.map(item => item.href.substring(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      setActiveSection(current || "");
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileMenuOpen(false);
    }
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <div 
        className={`nav-container sticky top-0 z-50 border-b transition-all duration-500 ${
          scrolled ? 'nav-scrolled' : ''
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          {/* Logo */}
          <a 
            href="#" 
            className="group relative flex items-center gap-2"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            {/* Glow effect behind logo */}
            <div className="nav-logo-glow absolute -inset-2 rounded-3xl opacity-0 blur-xl transition-all duration-500 group-hover:opacity-100" />
            
            <div className="nav-logo-box relative grid h-8 w-8 place-items-center rounded-2xl font-semibold transition-all duration-300 group-hover:rounded-xl group-hover:scale-110">
              NK
            </div>
            
            <div className="relative leading-tight transition-transform duration-300 group-hover:translate-x-1">
              <div className="nav-logo-name text-sm font-semibold transition-colors">
                {PROFILE.name}
              </div>
              <div className="nav-logo-location text-xs transition-colors">
                {PROFILE.location}
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden gap-1 md:flex">
            {items.map((item, index) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  onMouseEnter={() => setHoveredItem(index)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className="nav-link relative px-4 py-2 text-sm transition-colors duration-300"
                  style={{
                    opacity: hoveredItem !== null && hoveredItem !== index ? 0.5 : 1,
                    transform: hoveredItem === index ? "translateY(-1px)" : "translateY(0)",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                  data-active={isActive}
                >
                  {item.label}
                  
                  {/* Glowing underline */}
                  <span 
                    className="nav-link-underline absolute bottom-0 left-0 h-[2px] rounded-full transition-all duration-300"
                    style={{
                      width: isActive ? "100%" : hoveredItem === index ? "100%" : "0%",
                      opacity: isActive ? 1 : hoveredItem === index ? 0.8 : 0,
                    }}
                  />
                  
                  {/* Active indicator dot */}
                  {isActive && (
                    <span className="nav-link-dot absolute -top-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full" />
                  )}
                </a>
              );
            })}
          </div>

          {/* Right side: Theme toggle + Social Icons */}
          <div className="flex items-center gap-2">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="theme-toggle group relative rounded-xl border p-2 transition-all duration-300 hover:scale-110"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun size={18} className="transition-all duration-300 group-hover:rotate-45" />
              ) : (
                <Moon size={18} className="transition-all duration-300 group-hover:-rotate-12" />
              )}
            </button>

            {/* Social Icons */}
            <a 
              className="social-icon group relative rounded-xl border p-2 transition-all duration-300 hover:scale-110" 
              href={PROFILE.links.github} 
              target="_blank" 
              rel="noreferrer" 
              aria-label="GitHub"
            >
              <Github size={18} className="transition-all duration-300 group-hover:rotate-12" />
            </a>
            
            <a 
              className="social-icon group relative rounded-xl border p-2 transition-all duration-300 hover:scale-110" 
              href={PROFILE.links.linkedin} 
              target="_blank" 
              rel="noreferrer" 
              aria-label="LinkedIn"
            >
              <Linkedin size={18} className="transition-all duration-300 group-hover:scale-110" />
            </a>
            
            <a 
              className="social-icon group relative rounded-xl border p-2 transition-all duration-300 hover:scale-110" 
              href={PROFILE.links.email} 
              aria-label="Email"
            >
              <Mail size={18} className="transition-all duration-300 group-hover:-rotate-12" />
            </a>

            {/* Mobile menu button */}
            <button
              className="mobile-menu-btn ml-2 rounded-xl border p-2 transition-all duration-300 md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              data-open={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`mobile-menu fixed inset-x-0 top-[57px] z-40 overflow-hidden border-b backdrop-blur-xl transition-all duration-500 ease-in-out md:hidden ${
          mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="space-y-1 px-4 py-4">
          {items.map((item, index) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="mobile-menu-item flex items-center gap-3 rounded-xl px-4 py-3 text-sm transition-all duration-300"
                style={{
                  transform: mobileMenuOpen ? "translateX(0)" : "translateX(-20px)",
                  opacity: mobileMenuOpen ? 1 : 0,
                  transitionDelay: mobileMenuOpen ? `${index * 50}ms` : "0ms",
                }}
                data-active={isActive}
              >
                {isActive && <span className="mobile-menu-dot h-2 w-2 rounded-full" />}
                {item.label}
              </a>
            );
          })}
        </div>
      </div>

      {/* Mobile menu backdrop */}
      {mobileMenuOpen && (
        <div
          className="mobile-backdrop fixed inset-0 z-30 backdrop-blur-sm md:hidden"
          onClick={() => setMobileMenuOpen(false)}
          style={{
            animation: "fadeIn 0.3s ease-in-out",
          }}
        />
      )}

      <style jsx>{`
        /* Dark theme (default) */
        .nav-container {
          border-color: var(--nav-border, rgb(39 39 42));
          background: var(--nav-bg, rgba(9, 9, 11, 0.7));
          backdrop-filter: blur(10px);
          box-shadow: none;
        }

        .nav-container.nav-scrolled {
          box-shadow: var(--nav-shadow, 0 0 40px rgba(59, 130, 246, 0.15), 0 0 80px rgba(59, 130, 246, 0.05));
        }

        .nav-logo-glow {
          background: var(--logo-glow, rgb(59 130 246 / 0.2));
        }

        .nav-logo-box {
          background: var(--logo-bg, rgb(244 244 245));
          color: var(--logo-color, rgb(9 9 11));
          box-shadow: var(--logo-shadow, inset 0 0 20px rgba(59, 130, 246, 0));
        }

        .nav-logo-box:hover {
          background: var(--logo-hover-bg, rgb(255 255 255));
          box-shadow: var(--logo-hover-shadow, inset 0 0 20px rgba(59, 130, 246, 0.3), 0 0 20px rgba(59, 130, 246, 0.4));
        }

        .nav-logo-name {
          color: var(--text-primary, rgb(244 244 245));
        }

        .group:hover .nav-logo-name {
          color: var(--text-hover, rgb(255 255 255));
        }

        .nav-logo-location {
          color: var(--text-secondary, rgb(161 161 170));
        }

        .group:hover .nav-logo-location {
          color: var(--text-accent, rgb(96 165 250));
        }

        .nav-link {
          color: var(--link-color, rgb(161 161 170));
        }

        .nav-link[data-active="true"] {
          color: var(--link-active, rgb(255 255 255));
        }

        .nav-link:hover {
          color: var(--link-hover, rgb(96 165 250));
        }

        .nav-link-underline {
          background: var(--underline-bg, linear-gradient(to right, rgb(96 165 250), rgb(59 130 246), rgb(96 165 250)));
          box-shadow: var(--underline-shadow, 0 0 10px rgba(59, 130, 246, 0.8), 0 0 20px rgba(59, 130, 246, 0.4));
        }

        .nav-link-dot {
          background: var(--dot-bg, rgb(96 165 250));
          box-shadow: var(--dot-shadow, 0 0 8px rgba(59, 130, 246, 0.8), 0 0 12px rgba(59, 130, 246, 0.5));
          animation: pulseGlow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .theme-toggle {
          border-color: var(--icon-border, rgb(39 39 42));
          color: var(--icon-color, rgb(161 161 170));
          background: var(--icon-bg, transparent);
        }

        .theme-toggle:hover {
          border-color: var(--icon-hover-border, rgb(59 130 246 / 0.5));
          background: var(--icon-hover-bg, rgb(59 130 246 / 0.1));
          color: var(--icon-hover-color, rgb(96 165 250));
          box-shadow: var(--icon-hover-shadow, 0 0 20px rgba(59, 130, 246, 0.4), 0 0 40px rgba(59, 130, 246, 0.2));
        }

        .social-icon {
          border-color: var(--icon-border, rgb(39 39 42));
          color: var(--icon-color, rgb(161 161 170));
          background: var(--icon-bg, transparent);
        }

        .social-icon:hover {
          border-color: var(--icon-hover-border, rgb(59 130 246 / 0.5));
          background: var(--icon-hover-bg, rgb(59 130 246 / 0.1));
          color: var(--icon-hover-color, rgb(96 165 250));
          box-shadow: var(--icon-hover-shadow, 0 0 20px rgba(59, 130, 246, 0.4), 0 0 40px rgba(59, 130, 246, 0.2));
        }

        .mobile-menu-btn {
          border-color: var(--icon-border, rgb(39 39 42));
          color: var(--icon-color, rgb(161 161 170));
          background: var(--icon-bg, transparent);
        }

        .mobile-menu-btn:hover {
          border-color: var(--icon-hover-border, rgb(59 130 246 / 0.5));
          background: var(--icon-hover-bg, rgb(59 130 246 / 0.1));
        }

        .mobile-menu-btn[data-open="true"] {
          color: var(--icon-hover-color, rgb(96 165 250));
          box-shadow: var(--mobile-menu-shadow, 0 0 20px rgba(59, 130, 246, 0.4));
        }

        .mobile-menu {
          border-color: var(--mobile-border, rgb(59 130 246 / 0.2));
          background: var(--mobile-bg, rgba(9, 9, 11, 0.98));
          box-shadow: var(--mobile-shadow, 0 10px 40px rgba(59, 130, 246, 0.15));
        }

        .mobile-menu-item {
          color: var(--link-color, rgb(161 161 170));
        }

        .mobile-menu-item:hover {
          background: var(--mobile-item-hover, rgb(59 130 246 / 0.1));
        }

        .mobile-menu-item[data-active="true"] {
          color: var(--link-active, rgb(255 255 255));
          box-shadow: var(--mobile-item-active-shadow, 0 0 20px rgba(59, 130, 246, 0.2));
        }

        .mobile-menu-dot {
          background: var(--dot-bg, rgb(96 165 250));
          box-shadow: var(--dot-shadow, 0 0 8px rgba(59, 130, 246, 0.8), 0 0 12px rgba(59, 130, 246, 0.5));
          animation: pulseGlow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .mobile-backdrop {
          background: var(--backdrop-bg, rgba(9, 9, 11, 0.7));
        }

        /* Light theme overrides */
        :global([data-theme="light"]) .nav-container {
          --nav-border: rgb(228 228 231);
          --nav-bg: rgba(255, 255, 255, 0.8);
          --nav-shadow: 0 0 40px rgba(59, 130, 246, 0.1), 0 0 80px rgba(59, 130, 246, 0.03);
        }

        :global([data-theme="light"]) .nav-logo-glow {
          --logo-glow: rgb(59 130 246 / 0.15);
        }

        :global([data-theme="light"]) .nav-logo-box {
          --logo-bg: rgb(24 24 27);
          --logo-color: rgb(244 244 245);
          --logo-hover-bg: rgb(0 0 0);
          --logo-hover-shadow: inset 0 0 20px rgba(59, 130, 246, 0.2), 0 0 20px rgba(59, 130, 246, 0.3);
        }

        :global([data-theme="light"]) .nav-logo-name {
          --text-primary: rgb(24 24 27);
          --text-hover: rgb(0 0 0);
        }

        :global([data-theme="light"]) .nav-logo-location {
          --text-secondary: rgb(113 113 122);
          --text-accent: rgb(37 99 235);
        }

        :global([data-theme="light"]) .nav-link {
          --link-color: rgb(113 113 122);
          --link-active: rgb(0 0 0);
          --link-hover: rgb(37 99 235);
        }

        :global([data-theme="light"]) .nav-link-underline {
          --underline-bg: linear-gradient(to right, rgb(59 130 246), rgb(37 99 235), rgb(59 130 246));
          --underline-shadow: 0 0 10px rgba(59, 130, 246, 0.5), 0 0 20px rgba(59, 130, 246, 0.2);
        }

        :global([data-theme="light"]) .nav-link-dot {
          --dot-bg: rgb(59 130 246);
          --dot-shadow: 0 0 8px rgba(59, 130, 246, 0.6), 0 0 12px rgba(59, 130, 246, 0.3);
        }

        :global([data-theme="light"]) .theme-toggle,
        :global([data-theme="light"]) .social-icon,
        :global([data-theme="light"]) .mobile-menu-btn {
          --icon-border: rgb(228 228 231);
          --icon-color: rgb(63 63 70);
          --icon-bg: transparent;
          --icon-hover-border: rgb(59 130 246 / 0.5);
          --icon-hover-bg: rgb(59 130 246 / 0.1);
          --icon-hover-color: rgb(37 99 235);
          --icon-hover-shadow: 0 0 20px rgba(59, 130, 246, 0.3), 0 0 40px rgba(59, 130, 246, 0.15);
        }

        :global([data-theme="light"]) .mobile-menu {
          --mobile-border: rgb(59 130 246 / 0.2);
          --mobile-bg: rgba(255, 255, 255, 0.98);
          --mobile-shadow: 0 10px 40px rgba(59, 130, 246, 0.1);
        }

        :global([data-theme="light"]) .mobile-menu-item {
          --link-color: rgb(113 113 122);
          --link-active: rgb(0 0 0);
          --mobile-item-hover: rgb(59 130 246 / 0.08);
          --mobile-item-active-shadow: 0 0 20px rgba(59, 130, 246, 0.15);
        }

        :global([data-theme="light"]) .mobile-menu-dot {
          --dot-bg: rgb(59 130 246);
          --dot-shadow: 0 0 8px rgba(59, 130, 246, 0.6), 0 0 12px rgba(59, 130, 246, 0.3);
        }

        :global([data-theme="light"]) .mobile-backdrop {
          --backdrop-bg: rgba(255, 255, 255, 0.7);
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes pulseGlow {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.1);
          }
        }
      `}</style>
    </>
  );
}