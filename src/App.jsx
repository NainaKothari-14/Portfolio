import React, { useState, useEffect } from "react";

import Nav from "./sections/Nav.jsx";
import Hero from "./sections/Hero.jsx";
import Projects from "./sections/Projects.jsx";
import Skills from "./sections/Skills.jsx";
import Education from "./sections/Education.jsx";
import Achievements from "./sections/Achievement.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";

export default function App() {
  // Initialize theme from localStorage or default to 'dark'
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      return savedTheme || 'dark';
    }
    return 'dark';
  });

  // Update localStorage, document, and body class when theme changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', theme);
      document.documentElement.setAttribute('data-theme', theme);
      document.body.setAttribute('data-theme', theme);
      
      // Also update body class for easier targeting
      if (theme === 'light') {
        document.body.classList.add('light-theme');
        document.body.classList.remove('dark-theme');
      } else {
        document.body.classList.add('dark-theme');
        document.body.classList.remove('light-theme');
      }
      
      console.log('Theme changed to:', theme);
    }
  }, [theme]);

  return (
    <>
      <style jsx global>{`
        /* Base dark theme */
        body,
        [data-theme="dark"] {
          background: rgb(9 9 11);
          color: rgb(244 244 245);
        }

        /* Light theme */
        [data-theme="light"] {
          background: rgb(255 255 255);
          color: rgb(24 24 27);
        }

        body {
          transition: background 0.3s ease, color 0.3s ease;
        }
      `}</style>

      <div data-theme={theme} className="min-h-screen">
        <Nav theme={theme} setTheme={setTheme} />
        <Hero />
        <Projects />
        <Skills />
        <Education />
        <Achievements />
        <Contact />
        <Footer />
      </div>
    </>
  );
}