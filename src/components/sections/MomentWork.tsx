"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/lib/portfolio-data";

export default function MomentWork() {
  return (
    <section id="projects" className="relative w-full px-6 md:px-12 py-28 md:py-36">
      <div className="mx-auto w-full max-w-screen-2xl">
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="mb-5 block text-[0.65rem] font-mono uppercase tracking-[0.25em] text-accent">
              Selected ML Systems
            </span>
            <h2 className="max-w-4xl text-4xl font-bold uppercase leading-[0.9] tracking-tighter md:text-7xl">
              Case studies with a visible technical path.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            Each project is written for a fast scan first, then a deeper read: problem, approach, system, stack, and proof.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group border border-black/10 bg-black/[0.02] p-6 transition-colors duration-500 hover:border-black/25 hover:bg-black/[0.04] md:p-8"
            >
              <Link href={`/work/${project.slug}`} className="hover-trigger block">
                <div className="mb-10 flex items-start justify-between gap-8">
                  <div>
                    <span className="mb-3 block text-[0.6rem] font-mono uppercase tracking-[0.2em] text-muted-foreground">
                      0{index + 1} / {project.status}
                    </span>
                    <h3 className="text-3xl font-bold uppercase tracking-tighter text-foreground transition-colors duration-500 group-hover:text-accent md:text-5xl">
                      {project.title}
                    </h3>
                  </div>
                  <span className="shrink-0 text-[0.6rem] font-mono uppercase tracking-[0.18em] text-muted-foreground">
                    {project.year}
                  </span>
                </div>

                <p className="mb-8 max-w-2xl text-lg leading-relaxed tracking-tight text-foreground/85">
                  {project.problem}
                </p>

                <div className="mb-8 flex flex-wrap gap-2">
                  {project.stack.slice(0, 5).map((item) => (
                    <span
                      key={item}
                      className="border border-black/10 px-2.5 py-1 text-[0.55rem] font-mono uppercase tracking-[0.16em] text-muted-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between border-t border-black/10 pt-5 text-[0.65rem] font-mono uppercase tracking-[0.18em]">
                  <span className="text-muted-foreground">{project.label}</span>
                  <span className="text-foreground">Read case study</span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
