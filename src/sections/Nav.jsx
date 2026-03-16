import React, { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { PROFILE } from "../data/content";
import { Link, useLocation } from "react-router-dom";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const location = useLocation();
  const isHome = location.pathname === "/";

  const scrollItems = [
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
      if (!isHome) return;
      const sections = scrollItems.map((item) => item.href.substring(1));
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      setActiveSection(current || "");
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const el = document.getElementById(href.substring(1));
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileMenuOpen(false);
    }
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <>
      <nav
        onMouseMove={handleMouseMove}
        className={`nav-root sticky top-0 z-50 transition-all duration-700 ${scrolled ? "nav-scrolled" : ""}`}
      >
        <div className="nav-spotlight" style={{ "--mx": `${mousePos.x}px`, "--my": `${mousePos.y}px` }} />
        <div className="nav-topline" />

        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 relative z-10">

          {/* Logo */}
          <Link to="/" className="logo-wrap group relative flex items-center gap-3">
            <div className="logo-badge relative grid h-9 w-9 place-items-center rounded-xl text-sm font-bold tracking-tight transition-all duration-300 group-hover:rounded-2xl group-hover:scale-110">
              NK
              <div className="logo-badge-ring" />
            </div>
            <div className="leading-tight">
              <div className="logo-name text-sm font-semibold tracking-wide">{PROFILE.name}</div>
              <div className="logo-sub text-[10px] tracking-widest uppercase">{PROFILE.location}</div>
            </div>
          </Link>

          {/* Desktop Nav Pills */}
          <div className="nav-pill-wrap hidden md:flex items-center gap-0.5 rounded-2xl px-2 py-1.5">
            {isHome ? (
              scrollItems.map((item, i) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    onMouseEnter={() => setHoveredItem(i)}
                    onMouseLeave={() => setHoveredItem(null)}
                    className={`nav-item relative px-3.5 py-1.5 text-xs font-medium rounded-xl transition-all duration-300 ${isActive ? "nav-item-active" : ""}`}
                    style={{
                      opacity: hoveredItem !== null && hoveredItem !== i && !isActive ? 0.4 : 1,
                      transform: hoveredItem === i ? "translateY(-1px)" : "translateY(0)",
                    }}
                  >
                    {isActive && <span className="nav-active-bg" />}
                    <span className="relative z-10">{item.label}</span>
                    {isActive && <span className="nav-active-dot" />}
                  </a>
                );
              })
            ) : (
              <Link to="/" className="nav-item relative px-3.5 py-1.5 text-xs font-medium rounded-xl transition-all duration-300">
                ← Home
              </Link>
            )}
          </div>

          {/* Right: Social */}
          <div className="flex items-center gap-1.5">
            {[
              { href: PROFILE.links.github, icon: Github, label: "GitHub", rotate: true },
              { href: PROFILE.links.linkedin, icon: Linkedin, label: "LinkedIn", rotate: false },
              { href: PROFILE.links.email, icon: Mail, label: "Email", rotate: true },
            ].map(({ href, icon: Icon, label, rotate }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noreferrer"
                aria-label={label}
                className="social-btn group relative grid h-9 w-9 place-items-center rounded-xl transition-all duration-300 hover:scale-110"
              >
                <Icon size={16} className={`transition-all duration-300 ${rotate ? "group-hover:rotate-12" : "group-hover:scale-110"}`} />
              </a>
            ))}

            <button
              className="mobile-btn ml-1 grid h-9 w-9 place-items-center rounded-xl transition-all duration-300 md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={17} /> : <Menu size={17} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu fixed inset-x-0 top-[57px] z-40 overflow-hidden border-b transition-all duration-500 ease-in-out md:hidden ${mobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="space-y-1 px-4 py-4">
          {isHome && scrollItems.map((item, i) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`mobile-item flex items-center gap-3 rounded-xl px-4 py-3 text-sm transition-all duration-300 ${isActive ? "mobile-item-active" : ""}`}
                style={{
                  transform: mobileMenuOpen ? "translateX(0)" : "translateX(-16px)",
                  opacity: mobileMenuOpen ? 1 : 0,
                  transitionDelay: mobileMenuOpen ? `${i * 40}ms` : "0ms",
                }}
              >
                {isActive && <span className="h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.9)]" />}
                {item.label}
              </a>
            );
          })}
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 backdrop-blur-sm bg-black/50 md:hidden" onClick={() => setMobileMenuOpen(false)} />
      )}

      <style jsx>{`
        .nav-root {
          background: rgba(7,7,10,0.6);
          backdrop-filter: blur(20px) saturate(180%);
          border-bottom: 1px solid rgba(255,255,255,0.04);
        }
        .nav-root.nav-scrolled {
          background: rgba(7,7,10,0.85);
          border-bottom-color: rgba(59,130,246,0.15);
          box-shadow: 0 1px 0 rgba(59,130,246,0.08), 0 8px 32px rgba(0,0,0,0.4), 0 0 60px rgba(59,130,246,0.05);
        }
        .nav-spotlight {
          position: absolute; inset: 0; pointer-events: none;
          background: radial-gradient(180px circle at var(--mx,50%) var(--my,50%), rgba(59,130,246,0.06) 0%, transparent 70%);
        }
        .nav-topline {
          position: absolute; top: 0; left: 10%; right: 10%; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(59,130,246,0.4), rgba(6,182,212,0.4), transparent);
          opacity: 0; transition: opacity 0.5s;
        }
        .nav-scrolled .nav-topline { opacity: 1; }

        .logo-badge {
          background: linear-gradient(135deg, rgb(29 78 216), rgb(6 182 212));
          color: white;
          border: 1px solid rgba(96,165,250,0.4);
          box-shadow: 0 0 14px rgba(59,130,246,0.35), inset 0 1px 0 rgba(255,255,255,0.15);
        }
        .logo-wrap:hover .logo-badge {
          border-color: rgba(96,165,250,0.7);
          box-shadow: 0 0 28px rgba(59,130,246,0.7), 0 0 56px rgba(59,130,246,0.3), inset 0 1px 0 rgba(255,255,255,0.2);
        }
        .logo-badge-ring {
          position: absolute; inset: -3px; border-radius: inherit;
          border: 1px solid transparent;
          background: linear-gradient(135deg, rgba(96,165,250,0.5), rgba(6,182,212,0.5)) border-box;
          -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: destination-out; mask-composite: exclude;
          opacity: 0; transition: opacity 0.3s;
        }
        .logo-wrap:hover .logo-badge-ring { opacity: 1; }
        .logo-name { color: rgba(255,255,255,1); transition: color 0.3s; }
        .logo-sub { color: rgba(186,207,250,0.75); }

        .nav-pill-wrap {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.06);
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.03);
        }
        .nav-item { color: rgba(210,210,225,0.85); letter-spacing: 0.01em; text-decoration: none; }
        .nav-item:hover { color: rgba(255,255,255,1); }
        .nav-item-active { color: white; }

        .nav-active-bg {
          position: absolute; inset: 0; border-radius: inherit;
          background: linear-gradient(135deg, rgba(37,99,235,0.2), rgba(6,182,212,0.15));
          border: 1px solid rgba(59,130,246,0.25);
          box-shadow: inset 0 1px 0 rgba(96,165,250,0.1), 0 0 16px rgba(59,130,246,0.1);
        }
        .nav-active-dot {
          position: absolute; bottom: 3px; left: 50%; transform: translateX(-50%);
          width: 3px; height: 3px; border-radius: 50%;
          background: rgb(96,165,250);
          box-shadow: 0 0 6px rgba(96,165,250,1), 0 0 12px rgba(96,165,250,0.6);
          animation: dotPulse 2s ease-in-out infinite;
        }

        .social-btn { color: rgba(200,200,215,0.75); border: 1px solid transparent; }
        .social-btn:hover {
          color: rgb(147,197,253);
          background: rgba(37,99,235,0.1);
          border-color: rgba(59,130,246,0.2);
          box-shadow: 0 0 16px rgba(59,130,246,0.2);
        }
        .mobile-btn {
          color: rgba(161,161,170,0.7);
          border: 1px solid rgba(255,255,255,0.06);
          background: rgba(255,255,255,0.03);
        }
        .mobile-btn:hover { color: rgb(147,197,253); border-color: rgba(59,130,246,0.2); background: rgba(37,99,235,0.1); }

        .mobile-menu {
          background: rgba(7,7,10,0.97);
          border-color: rgba(59,130,246,0.12);
          box-shadow: 0 16px 48px rgba(0,0,0,0.5), 0 0 40px rgba(59,130,246,0.08);
          backdrop-filter: blur(24px);
        }
        .mobile-item { color: rgba(210,210,225,0.9); text-decoration: none; }
        .mobile-item:hover { color: white; background: rgba(59,130,246,0.08); }
        .mobile-item-active { color: white; background: rgba(37,99,235,0.1); border: 1px solid rgba(59,130,246,0.15); }

        @keyframes dotPulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 6px rgba(96,165,250,1), 0 0 12px rgba(96,165,250,0.6); }
          50% { opacity: 0.6; box-shadow: 0 0 3px rgba(96,165,250,0.7), 0 0 6px rgba(96,165,250,0.3); }
        }
      `}</style>
    </>
  );
}