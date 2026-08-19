"use client";

import { motion } from "framer-motion";
import { achievements, leadership, education, experience } from "@/lib/portfolio-data";

export default function MomentExperience() {
  return (
    <section id="experience" className="relative w-full px-6 md:px-12 py-20 md:py-28">
      <div className="mx-auto grid w-full max-w-screen-2xl grid-cols-1 gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div className="lg:sticky lg:top-36 lg:self-start">
          <span className="mb-5 block text-[0.65rem] font-mono uppercase tracking-[0.25em] text-accent">
            Experience
          </span>
          <h2 className="mb-8 max-w-xl text-4xl font-bold uppercase leading-[0.9] tracking-tighter md:text-6xl">
            Shipping in production, not in slides.
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            Orchestration at scale, a company I co-founded, and client work delivered end to end. Each one is listed with the part that was actually hard.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {experience.map((role, index) => (
            <motion.article
              key={role.company}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="border border-[var(--rule)] bg-[var(--surface)] p-6 md:p-8"
            >
              <div className="mb-8 flex flex-wrap items-start justify-between gap-4">
                <div>
                  <span className="mb-3 block text-[0.6rem] font-mono uppercase tracking-[0.2em] text-muted-foreground">
                    0{index + 1} / {role.location}
                  </span>
                  <h3 className="text-2xl font-bold uppercase tracking-tighter text-foreground md:text-4xl">
                    {role.company}
                  </h3>
                  <p className="mt-2 text-[0.65rem] font-mono uppercase tracking-[0.18em] text-accent">
                    {role.role}
                  </p>
                </div>
                <span className="shrink-0 text-[0.6rem] font-mono uppercase tracking-[0.18em] text-muted-foreground">
                  {role.period}
                </span>
              </div>

              <p className="mb-7 max-w-2xl text-lg leading-relaxed tracking-tight text-foreground/85">
                {role.summary}
              </p>

              <div className="mb-7 flex flex-col gap-3 border-t border-[var(--rule)] pt-6">
                {role.detail.map((item) => (
                  <div key={item} className="grid grid-cols-[18px_1fr] gap-3">
                    <span className="pt-2 text-[0.6rem] font-mono text-muted-foreground">/</span>
                    <p className="text-sm leading-relaxed text-foreground/80">{item}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {role.stack.map((item) => (
                  <span
                    key={item}
                    className="border border-[var(--rule)] px-2.5 py-1 text-[0.55rem] font-mono uppercase tracking-[0.16em] text-muted-foreground"
                  >
                    {item}
                  </span>
                ))}
                {role.href && (
                  <a
                    href={role.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover-trigger border border-[var(--rule)] px-2.5 py-1 text-[0.55rem] font-mono uppercase tracking-[0.16em] text-foreground transition-colors hover:border-[var(--rule-strong)] hover:bg-black/5"
                  >
                    Repository
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-20 w-full max-w-screen-2xl border-t-2 border-[var(--rule-strong)] pt-14">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <article className="border border-[var(--rule)] bg-[var(--surface)] p-6 md:p-8">
            <span className="mb-6 block text-[0.6rem] font-mono uppercase tracking-[0.2em] text-accent">
              Education
            </span>
            <h3 className="text-xl font-bold uppercase leading-tight tracking-tight text-foreground">
              {education.institution}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-foreground/80">{education.degree}</p>
            <p className="mt-2 text-[0.6rem] font-mono uppercase tracking-[0.18em] text-muted-foreground">
              {education.period} / {education.location}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {education.coursework.map((item) => (
                <span
                  key={item}
                  className="border border-[var(--rule)] px-2.5 py-1 text-[0.55rem] font-mono uppercase tracking-[0.16em] text-muted-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </article>

          <article className="border border-[var(--rule)] bg-[var(--surface)] p-6 md:p-8">
            <span className="mb-6 block text-[0.6rem] font-mono uppercase tracking-[0.2em] text-accent">
              Achievements
            </span>
            <div className="flex flex-col gap-5">
              {achievements.map((item) => (
                <div key={item.title} className="border-b border-[var(--rule)] pb-5 last:border-b-0 last:pb-0">
                  <h3 className="mb-2 text-sm font-bold uppercase tracking-tight text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="border border-[var(--rule)] bg-[var(--surface)] p-6 md:p-8">
            <span className="mb-6 block text-[0.6rem] font-mono uppercase tracking-[0.2em] text-accent">
              Leadership & Community
            </span>
            <div className="flex flex-col gap-5">
              {leadership.map((item) => (
                <div key={item.title} className="border-b border-[var(--rule)] pb-5 last:border-b-0 last:pb-0">
                  <h3 className="mb-2 text-sm font-bold uppercase leading-snug tracking-tight text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
