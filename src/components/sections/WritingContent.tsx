"use client";

import { motion } from "framer-motion";
import { labNotes } from "@/lib/portfolio-data";

export default function WritingContent() {
  return (
    <main className="relative z-10 min-h-screen w-full px-6 pb-24 pt-32 md:px-12 md:pb-28 md:pt-36">
      <div className="mx-auto w-full max-w-screen-2xl">
        <motion.header
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <span className="mb-5 block text-[0.65rem] font-mono uppercase tracking-[0.25em] text-accent">
            Lab Notes
          </span>
          <h1 className="max-w-5xl text-[clamp(2.4rem,5.6vw,5.2rem)] font-bold uppercase leading-[0.92] tracking-tighter">
            Things I only learned by getting them wrong first.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed tracking-tight text-foreground/85">
            Each note came out of a specific decision in a specific system, and names the project it came from. None of them are opinions I held before the code disagreed with me.
          </p>
        </motion.header>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {labNotes.map((note) => (
            <motion.article
              key={note.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col border border-[var(--rule)] bg-[var(--surface)] p-6 md:p-8"
            >
              <div className="mb-8 flex items-center justify-between gap-4">
                <span className="text-[0.6rem] font-mono uppercase tracking-[0.2em] text-muted-foreground">
                  {note.date}
                </span>
                {note.source && (
                  <span className="text-[0.55rem] font-mono uppercase tracking-[0.18em] text-accent">
                    {note.source}
                  </span>
                )}
              </div>
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
