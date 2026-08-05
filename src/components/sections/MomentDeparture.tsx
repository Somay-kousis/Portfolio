"use client";

import { motion } from "framer-motion";
import { profile } from "@/lib/portfolio-data";

const links = [
  { label: "LinkedIn", href: profile.linkedin },
  { label: "GitHub", href: profile.github },
  { label: "LeetCode", href: profile.leetcode },
];

export default function MomentDeparture() {
  return (
    <section className="relative w-full px-6 md:px-12 py-20 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        viewport={{ once: true, amount: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto grid w-full max-w-screen-2xl grid-cols-1 gap-16 border-t border-[var(--rule)] pt-16 md:grid-cols-[1fr_420px]"
      >
        <div>
          <span className="mb-5 block text-[0.65rem] font-mono uppercase tracking-[0.25em] text-accent">
            The short version
          </span>
          <h2 className="max-w-5xl text-[clamp(2.4rem,5.4vw,5rem)] font-bold uppercase leading-[0.92] tracking-tighter text-foreground">
            Start with the projects. The proof is in the repos.
          </h2>
        </div>

        <div className="flex flex-col justify-between gap-10">
          <p className="text-lg leading-relaxed tracking-tight text-foreground/85">
            I am open to AI engineering work where agentic workflows, retrieval, and product implementation meet. Every claim on this site traces to a case study and a repository, so the fastest way to evaluate me is to read one and then go check it.
          </p>
          <div className="flex flex-col gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="hover-trigger border border-[var(--rule)] px-4 py-3 text-[0.65rem] font-mono uppercase tracking-[0.18em] text-foreground transition-colors hover:border-[var(--rule-strong)] hover:bg-black/5"
            >
              {profile.email}
            </a>
            <div className="grid grid-cols-3 gap-3">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-trigger border border-[var(--rule)] px-4 py-3 text-center text-[0.6rem] font-mono uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:border-[var(--rule-strong)] hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
