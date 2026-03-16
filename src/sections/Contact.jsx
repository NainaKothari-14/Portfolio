import React, { useState } from "react";
import { Github, Linkedin, Mail, Send, CheckCircle2, XCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import { PROFILE } from "../data/content";
import { ButtonLink } from "../lib/ui.jsx";

// ─── 🔑 EmailJS credentials from .env ─────────────────────────────────────────
const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
// ──────────────────────────────────────────────────────────────────────────────

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:    formData.name,
          from_email:   formData.email,
          message:      formData.message,
          to_name:      PROFILE.name,   // used in email template greeting
          reply_to:     formData.email,
        },
        EMAILJS_PUBLIC_KEY
      );

      setStatus("sent");
      setTimeout(() => {
        setStatus("idle");
        setFormData({ name: "", email: "", message: "" });
      }, 3000);
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-16">
      {/* Heading */}
      <div className="mb-12 text-center">
        <div className="mb-3 text-sm font-medium uppercase tracking-wider text-blue-400">
          Let's talk
        </div>
        <h2 className="mb-4 text-3xl font-bold text-zinc-100 md:text-4xl lg:text-5xl">
          Contact
        </h2>
        <p className="mx-auto max-w-2xl text-zinc-400">
          If you're hiring or want to collaborate, I'd love to chat.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* ── Contact Info Card ── */}
        <div className="group relative">
          <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 blur-xl transition duration-500 group-hover:opacity-30" />

          <div className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-950 p-8">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />

            <div className="relative">
              <div className="mb-8">
                <div className="mb-2 text-2xl font-bold text-zinc-100">{PROFILE.name}</div>
                <div className="text-blue-400">{PROFILE.role}</div>
                <div className="mt-1 text-sm text-zinc-400">{PROFILE.location}</div>
              </div>

              <div className="space-y-4">
                {[
                  { Icon: Mail,     label: "Email",    value: PROFILE.links.email.replace("mailto:", "") },
                  { Icon: Github,   label: "GitHub",   value: "View Profile" },
                  { Icon: Linkedin, label: "LinkedIn", value: "Connect" },
                ].map(({ Icon, label, value }) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 backdrop-blur-sm transition-all hover:border-blue-500/50 hover:bg-zinc-900/80"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10">
                      <Icon className="h-5 w-5 text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs text-zinc-400">{label}</div>
                      <div className="text-sm text-zinc-200">{value}</div>
                    </div>
                  </div>
                ))}
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

        {/* ── Contact Form ── */}
        <div className="group relative">
          <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 blur-xl transition duration-500 group-hover:opacity-30" />

          <div className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-950 to-zinc-900 p-8">
            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
            <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="relative">
              <h3 className="mb-6 text-xl font-semibold text-zinc-100">Send a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm text-zinc-300">Name</label>
                  <input
                    type="text" id="name" name="name"
                    value={formData.name} onChange={handleChange} required
                    className="w-full rounded-xl border border-zinc-800 bg-zinc-900/50 px-4 py-3 text-zinc-100 backdrop-blur-sm transition-all placeholder:text-zinc-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm text-zinc-300">Email</label>
                  <input
                    type="email" id="email" name="email"
                    value={formData.email} onChange={handleChange} required
                    className="w-full rounded-xl border border-zinc-800 bg-zinc-900/50 px-4 py-3 text-zinc-100 backdrop-blur-sm transition-all placeholder:text-zinc-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                    placeholder="their@email.com"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm text-zinc-300">Message</label>
                  <textarea
                    id="message" name="message"
                    value={formData.message} onChange={handleChange} required rows={5}
                    className="w-full resize-none rounded-xl border border-zinc-800 bg-zinc-900/50 px-4 py-3 text-zinc-100 backdrop-blur-sm transition-all placeholder:text-zinc-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>

                {/* Error banner */}
                {status === "error" && (
                  <div className="flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                    <XCircle className="h-4 w-4 shrink-0" />
                    Something went wrong. Please try again or email me directly.
                  </div>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === "sending" || status === "sent"}
                  className="group/btn relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 px-6 py-3 font-medium text-white transition-all hover:from-blue-500 hover:to-cyan-500 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 blur-xl transition-opacity group-hover/btn:opacity-20" />
                  <span className="relative flex items-center justify-center gap-2">
                    {status === "idle" && (<>Send Message <Send className="h-4 w-4" /></>)}
                    {status === "sending" && (
                      <>Sending... <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" /></>
                    )}
                    {status === "sent" && (<>Message Sent! <CheckCircle2 className="h-4 w-4" /></>)}
                    {status === "error" && (<>Try Again <Send className="h-4 w-4" /></>)}
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