import React from "react";
import { cn } from "./cn.js";

export function Chip({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-sky-400/15 bg-sky-400/5 px-3 py-1 text-xs text-sky-200">
      {children}
    </span>
  );
}

export function SectionTitle({ kicker, title, desc }) {
  return (
    <div className="mb-8">
      {kicker ? (
        <div className="text-xs uppercase tracking-widest text-zinc-400">{kicker}</div>
      ) : null}
      <h2 className="mt-2 text-2xl font-semibold text-zinc-100">{title}</h2>
      {desc ? <p className="mt-2 max-w-2xl text-zinc-300">{desc}</p> : null}
    </div>
  );
}

export function ButtonLink({ href, icon: Icon, children, variant = "primary" }) {
  const base =
    "inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-medium transition active:scale-[0.99]";
  const styles =
    variant === "primary"
      ? "bg-zinc-100 text-zinc-950 hover:bg-white"
      : variant === "ghost"
      ? "border border-zinc-800 bg-zinc-950/40 text-zinc-100 hover:bg-zinc-900/50"
      : "bg-zinc-900 text-zinc-100 hover:bg-zinc-800";

  return (
    <a className={cn(base, styles)} href={href} target="_blank" rel="noreferrer">
      {Icon ? <Icon size={16} /> : null}
      {children}
    </a>
  );
}