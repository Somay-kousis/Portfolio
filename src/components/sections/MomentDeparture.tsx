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
    <section className="relative w-full px-6 md:px-12 py-28 md:py-36">
      <motion.div
        initial={{ opacity: 0, filter: "blur(18px)", y: 24 }}
        whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto grid w-full max-w-screen-2xl grid-cols-1 gap-16 border-t border-black/10 pt-16 md:grid-cols-[1fr_420px]"
      >
        <div>
          <span className="mb-5 block text-[0.65rem] font-mono uppercase tracking-[0.25em] text-accent">
            Recruiter path
          </span>
          <h2 className="max-w-5xl text-[clamp(3rem,8vw,9rem)] font-bold uppercase leading-[0.86] tracking-tighter text-foreground">
            Want the short version? Start with the projects.
          </h2>
        </div>

        <div className="flex flex-col justify-between gap-10">
          <p className="text-lg leading-relaxed tracking-tight text-foreground/85">
            I am available for AI/ML engineering opportunities where retrieval, agentic workflows, and product implementation meet. The fastest way to evaluate me is through the case studies and GitHub work.
          </p>
          <div className="flex flex-col gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="hover-trigger border border-black/10 px-4 py-3 text-[0.65rem] font-mono uppercase tracking-[0.18em] text-foreground transition-colors hover:border-black/30 hover:bg-black/5"
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
                  className="hover-trigger border border-black/10 px-4 py-3 text-center text-[0.6rem] font-mono uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:border-black/30 hover:text-foreground"
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
