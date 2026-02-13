import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { PROFILE } from "../data/content";
import { ButtonLink, SectionTitle } from "../lib/ui.jsx";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-16">
      <SectionTitle
        kicker="Let’s talk"
        title="Contact"
        desc="If you’re hiring or want to collaborate, I’d love to chat."
      />

      <div className="rounded-3xl border border-zinc-900 bg-zinc-950/40 p-6 md:p-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <div className="text-lg font-semibold">{PROFILE.name}</div>
            <div className="mt-1 text-sm text-zinc-300">{PROFILE.role}</div>
            <div className="mt-2 text-sm text-zinc-400">{PROFILE.location}</div>
          </div>

          <div className="flex flex-wrap gap-3">
            <ButtonLink href={PROFILE.links.email} icon={Mail}>
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
    </section>
  );
}