"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { labNotes, technicalCore } from "@/lib/portfolio-data";

export default function MomentSystems() {
  return (
    <section className="relative w-full px-6 md:px-12 py-28 md:py-36">
      <div className="mx-auto grid w-full max-w-screen-2xl grid-cols-1 gap-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-28">
        <div className="lg:sticky lg:top-36 lg:self-start">
          <span className="mb-5 block text-[0.65rem] font-mono uppercase tracking-[0.25em] text-accent">
            Technical Core
          </span>
          <h2 className="mb-8 max-w-xl text-4xl font-bold uppercase leading-[0.9] tracking-tighter md:text-7xl">
            ML depth, applied AI, and product systems.
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            The portfolio is intentionally weighted toward what hiring teams can evaluate: tools, project choices, implementation tradeoffs, and communication.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {technicalCore.map((cluster, index) => (
            <motion.div
              key={cluster.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
              className="border border-black/10 bg-black/[0.02] p-6 md:p-8"
            >
              <span className="mb-6 block text-[0.6rem] font-mono uppercase tracking-[0.2em] text-muted-foreground">
                0{index + 1} / Cluster
              </span>
              <h3 className="mb-8 text-2xl font-bold uppercase tracking-tight text-foreground">
                {cluster.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cluster.items.map((item) => (
                  <span
                    key={item}
                    className="border border-black/10 px-3 py-2 text-[0.62rem] font-mono uppercase tracking-[0.16em] text-foreground/80"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-28 w-full max-w-screen-2xl">
        <div className="mb-10 flex flex-col gap-4 border-t border-black/10 pt-10 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="mb-4 block text-[0.65rem] font-mono uppercase tracking-[0.25em] text-accent">
              Lab Notes
            </span>
            <h2 className="text-3xl font-bold uppercase tracking-tighter md:text-5xl">
              Short thinking samples.
            </h2>
          </div>
          <Link
            href="/writing"
            className="hover-trigger text-[0.65rem] font-mono uppercase tracking-[0.2em] text-foreground transition-colors hover:text-accent"
          >
            View all notes
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {labNotes.map((note) => (
            <article key={note.title} className="border border-black/10 bg-black/[0.02] p-6">
              <span className="mb-5 block text-[0.6rem] font-mono uppercase tracking-[0.18em] text-muted-foreground">
                {note.date}
              </span>
              <h3 className="mb-4 text-xl font-bold uppercase tracking-tight text-foreground">
                {note.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {note.summary}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
