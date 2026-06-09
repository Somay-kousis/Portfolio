"use client";

import { motion } from "framer-motion";
import { profile, technicalCore } from "@/lib/portfolio-data";

const fit = [
  "Applied AI and ML engineering roles where retrieval, prediction, and product implementation overlap.",
  "Teams that need someone comfortable moving from messy data or vague product intent into a working system.",
  "Early-stage environments where modeling judgment, interface clarity, and shipping discipline all matter.",
];

export default function AboutContent() {
  return (
    <main className="relative z-10 w-full px-6 pb-28 pt-36 md:px-12 md:pb-36 md:pt-44">
      <div className="mx-auto w-full max-w-screen-2xl">
        <motion.header
          initial={{ opacity: 0, filter: "blur(16px)", y: 28 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24 grid grid-cols-1 gap-12 lg:grid-cols-[1fr_420px]"
        >
          <div>
            <span className="mb-5 block text-[0.65rem] font-mono uppercase tracking-[0.25em] text-accent">
              About / Career Narrative
            </span>
            <h1 className="max-w-6xl text-[clamp(3.5rem,10vw,10rem)] font-bold uppercase leading-[0.84] tracking-tighter">
              I build AI systems that survive contact with users.
            </h1>
          </div>
          <p className="self-end text-lg leading-relaxed tracking-tight text-foreground/85">
            I am Somay Kousis, an AI/ML engineer focused on retrieval systems, prediction workflows, and product-grade implementation. My strongest work sits where model behavior, data shape, and user experience have to agree.
          </p>
        </motion.header>

        <section className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {[
            ["How I work", "I start from the user problem, make the system inspectable, and avoid hiding weak evidence behind big language."],
            ["What I build", "RAG flows, semantic matching, supervised prediction projects, and deployment-ready product systems."],
            ["Current state", "Available for AI/ML engineering opportunities and continuing to build applied AI systems in public."],
          ].map(([title, copy]) => (
            <article key={title} className="border border-black/10 bg-black/[0.02] p-6 md:p-8">
              <span className="mb-5 block text-[0.6rem] font-mono uppercase tracking-[0.2em] text-accent">
                {title}
              </span>
              <p className="text-sm leading-relaxed text-foreground/85">{copy}</p>
            </article>
          ))}
        </section>

        <section className="my-24 grid grid-cols-1 gap-16 border-y border-black/10 py-16 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <span className="mb-5 block text-[0.65rem] font-mono uppercase tracking-[0.25em] text-accent">
              Role fit
            </span>
            <h2 className="text-4xl font-bold uppercase leading-[0.9] tracking-tighter md:text-6xl">
              Where I make sense.
            </h2>
          </div>

          <div className="flex flex-col gap-5">
            {fit.map((item, index) => (
              <div key={item} className="grid grid-cols-[56px_1fr] gap-4 border-b border-black/10 pb-5 last:border-b-0">
                <span className="text-[0.6rem] font-mono uppercase tracking-[0.2em] text-muted-foreground">
                  0{index + 1}
                </span>
                <p className="text-lg leading-relaxed tracking-tight text-foreground/85">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {technicalCore.map((cluster) => (
            <article key={cluster.title} className="border border-black/10 bg-black/[0.02] p-6">
              <h3 className="mb-6 text-lg font-bold uppercase tracking-tight text-foreground">
                {cluster.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cluster.items.map((item) => (
                  <span key={item} className="border border-black/10 px-2.5 py-1 text-[0.55rem] font-mono uppercase tracking-[0.16em] text-muted-foreground">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </section>

        <section className="mt-24 flex flex-col gap-4 border-t border-black/10 pt-12 md:flex-row md:items-center md:justify-between">
          <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
            For the quickest evaluation, review the project case studies first, then cross-check the linked repositories.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="hover-trigger border border-black/10 px-4 py-3 text-[0.65rem] font-mono uppercase tracking-[0.18em] text-foreground transition-colors hover:border-black/30 hover:bg-black/5"
          >
            {profile.email}
          </a>
        </section>
      </div>
    </main>
  );
}
