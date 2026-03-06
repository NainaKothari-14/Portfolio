import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./sections/Nav.jsx";
import Hero from "./sections/Hero.jsx";
import Projects from "./sections/Projects.jsx";
import Skills from "./sections/Skills.jsx";
import Education from "./sections/Education.jsx";
import Achievements from "./sections/Achievement.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";
import Certificates from "./sections/Certificates.jsx";

function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Skills />
      <Education />
      <Achievements />
      <Contact />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <style jsx global>{`
        body {
          background: rgb(9 9 11);
          color: rgb(244 244 245);
        }
      `}</style>

      <div className="min-h-screen bg-[rgb(9,9,11)] text-zinc-100">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/certificates" element={<Certificates />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}