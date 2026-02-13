import React, { useState } from "react";
import { Github, Linkedin, Mail, Send, CheckCircle2 } from "lucide-react";
import { PROFILE } from "../data/content";
import { ButtonLink, SectionTitle } from "../lib/ui.jsx";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState("idle"); // idle, sending, sent

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setStatus("sent");
    setTimeout(() => {
      setStatus("idle");
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-16">
      {/* Custom heading with bigger "Contact" */}
      <div className="mb-12 text-center">
        <div className="mb-3 text-sm font-medium uppercase tracking-wider text-blue-400">
          Let's talk
        </div>
        <h2 className="mb-4 text-6xl font-bold text-zinc-100 md:text-7xl lg:text-8xl">
          Contact
        </h2>
        <p className="mx-auto max-w-2xl text-zinc-400">
          If you're hiring or want to collaborate, I'd love to chat.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Contact Info Card with Blue Glow */}
        <div className="group relative">
          {/* Blue glow effect */}
          <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 blur-xl transition duration-500 group-hover:opacity-30"></div>
          
          <div className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-950 p-8">
            {/* Animated blue orb background */}
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl"></div>
            
            <div className="relative">
              <div className="mb-8">
                <div className="mb-2 text-2xl font-bold text-zinc-100">
                  {PROFILE.name}
                </div>
                <div className="text-blue-400">{PROFILE.role}</div>
                <div className="mt-1 text-sm text-zinc-400">{PROFILE.location}</div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 backdrop-blur-sm transition-all hover:border-blue-500/50 hover:bg-zinc-900/80">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10">
                    <Mail className="h-5 w-5 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-zinc-400">Email</div>
                    <div className="text-sm text-zinc-200">{PROFILE.links.email.replace('mailto:', '')}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 backdrop-blur-sm transition-all hover:border-blue-500/50 hover:bg-zinc-900/80">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10">
                    <Github className="h-5 w-5 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-zinc-400">GitHub</div>
                    <div className="text-sm text-zinc-200">View Profile</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 backdrop-blur-sm transition-all hover:border-blue-500/50 hover:bg-zinc-900/80">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10">
                    <Linkedin className="h-5 w-5 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-zinc-400">LinkedIn</div>
                    <div className="text-sm text-zinc-200">Connect</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink 
                  href={PROFILE.links.email} 
                  icon={Mail}
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500"
                >
                  Email Me
                </ButtonLink>
                <ButtonLink href={PROFILE.links.github} icon={Github} variant="ghost">
                  GitHub
                </ButtonLink>
                <ButtonLink href={PROFILE.links.linkedin} icon={Linkedin} variant="ghost">
                  LinkedIn
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form with Blue Glow */}
        <div className="group relative">
          {/* Blue glow effect */}
          <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 blur-xl transition duration-500 group-hover:opacity-30"></div>
          
          <div className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-950 to-zinc-900 p-8">
            {/* Animated blue orb background */}
            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl"></div>
            <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl"></div>
            
            <div className="relative">
              <h3 className="mb-6 text-xl font-semibold text-zinc-100">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm text-zinc-300">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-zinc-800 bg-zinc-900/50 px-4 py-3 text-zinc-100 backdrop-blur-sm transition-all placeholder:text-zinc-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm text-zinc-300">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-zinc-800 bg-zinc-900/50 px-4 py-3 text-zinc-100 backdrop-blur-sm transition-all placeholder:text-zinc-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm text-zinc-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full resize-none rounded-xl border border-zinc-800 bg-zinc-900/50 px-4 py-3 text-zinc-100 backdrop-blur-sm transition-all placeholder:text-zinc-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending" || status === "sent"}
                  className="group/btn relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 px-6 py-3 font-medium text-white transition-all hover:from-blue-500 hover:to-cyan-500 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 blur-xl transition-opacity group-hover/btn:opacity-20"></div>
                  <span className="relative flex items-center justify-center gap-2">
                    {status === "idle" && (
                      <>
                        Send Message
                        <Send className="h-4 w-4" />
                      </>
                    )}
                    {status === "sending" && (
                      <>
                        Sending...
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                      </>
                    )}
                    {status === "sent" && (
                      <>
                        Message Sent!
                        <CheckCircle2 className="h-4 w-4" />
                      </>
                    )}
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}