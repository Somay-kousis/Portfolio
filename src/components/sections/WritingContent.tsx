"use client";

import { motion } from "framer-motion";
import { labNotes } from "@/lib/portfolio-data";

export default function WritingContent() {
  return (
    <main className="relative z-10 min-h-screen w-full px-6 pb-28 pt-36 md:px-12 md:pb-36 md:pt-44">
      <div className="mx-auto w-full max-w-screen-2xl">
        <motion.header
          initial={{ opacity: 0, filter: "blur(16px)", y: 28 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <span className="mb-5 block text-[0.65rem] font-mono uppercase tracking-[0.25em] text-accent">
            Lab Notes
          </span>
          <h1 className="max-w-5xl text-[clamp(3.5rem,10vw,10rem)] font-bold uppercase leading-[0.84] tracking-tighter">
            Short notes on systems, data, and product judgment.
          </h1>
        </motion.header>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {labNotes.map((note, index) => (
            <motion.article
              key={note.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="border border-black/10 bg-black/[0.02] p-6 md:p-8"
            >
              <span className="mb-8 block text-[0.6rem] font-mono uppercase tracking-[0.2em] text-muted-foreground">
                {note.date}
              </span>
              <h2 className="mb-6 text-2xl font-bold uppercase leading-tight tracking-tight text-foreground">
                {note.title}
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {note.summary}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </main>
  );
}
