"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/lib/portfolio-data";

function ImageSlot({ src, alt, aspectRatio = "2048 / 1078" }: { src?: string; alt: string; aspectRatio?: string }) {
  if (!src) {
    return (
      <div className="flex h-[44vh] min-h-80 w-full items-center justify-center border border-black/10 bg-black/[0.02]">
        <div className="max-w-sm px-6 text-center">
          <span className="mb-4 block text-[0.6rem] font-mono uppercase tracking-[0.2em] text-accent">
            Screenshot pending
          </span>
          <p className="text-sm leading-relaxed text-muted-foreground">
            This project is represented through technical notes and repository evidence rather than invented visuals.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative min-h-80 w-full overflow-hidden border border-black/10 bg-black/[0.02]"
      style={{ aspectRatio }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 80vw, 100vw"
        className="object-contain p-3 md:p-6"
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#8b8b99_1px,transparent_1px),linear-gradient(to_bottom,#8b8b99_1px,transparent_1px)] bg-[size:32px_32px] opacity-10" />
    </div>
  );
}

export default function WorkDetailContent({ slug }: { slug: string }) {
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <main className="relative z-10 flex min-h-screen w-full items-center px-6 md:px-12">
        <div className="">
          <span className="mb-5 block text-[0.65rem] font-mono uppercase tracking-[0.25em] text-accent">
            Project not found
          </span>
          <h1 className="mb-8 text-5xl font-bold uppercase tracking-tighter md:text-8xl">
            No case study for {slug}.
          </h1>
          <Link href="/#projects" className="hover-trigger text-[0.65rem] font-mono uppercase tracking-[0.2em] text-foreground">
            Back to projects
          </Link>
        </div>
      </main>
    );
  }

  const evidenceLinks = [
    project.repoUrl ? { label: "Repository", href: project.repoUrl } : null,
    project.demoUrl ? { label: "Demo / Source", href: project.demoUrl } : null,
  ].filter(Boolean) as { label: string; href: string }[];

  return (
    <main className="relative z-10 w-full px-6 pb-28 pt-36 md:px-12 md:pb-36 md:pt-44">
      <div className="mx-auto w-full max-w-screen-2xl">
        <motion.header
          initial={{ opacity: 0, filter: "blur(16px)", y: 28 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 grid grid-cols-1 gap-12 lg:grid-cols-[1fr_420px]"
        >
          <div>
            <span className="mb-5 block text-[0.65rem] font-mono uppercase tracking-[0.25em] text-accent">
              Case Study / {project.status}
            </span>
            <h1 className="mb-8 text-[clamp(4rem,12vw,13rem)] font-bold uppercase leading-[0.82] tracking-tighter">
              {project.title}
            </h1>
            <p className="max-w-4xl text-xl leading-relaxed tracking-tight text-foreground/85 md:text-3xl">
              {project.problem}
            </p>
          </div>

          <aside className="grid content-end gap-8 text-[0.65rem] font-mono uppercase tracking-[0.18em] text-muted-foreground">
            <div>
              <span className="mb-2 block text-foreground">Focus</span>
              {project.label}
            </div>
            <div>
              <span className="mb-2 block text-foreground">Year</span>
              {project.year}
            </div>
            <div>
              <span className="mb-2 block text-foreground">Stack</span>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="border border-black/10 px-2.5 py-1 text-[0.55rem]">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </motion.header>

        <ImageSlot
          src={project.heroImage}
          alt={`${project.title} project screenshot`}
          aspectRatio={project.heroImageAspect}
        />

        <section className="my-20 grid grid-cols-1 gap-4 md:grid-cols-3">
          {[
            ["Approach", project.approach],
            ["Model / System", project.modelOrSystem],
            ["Result", project.result],
          ].map(([title, copy]) => (
            <article key={title} className="border border-black/10 bg-black/[0.02] p-6 md:p-8">
              <span className="mb-5 block text-[0.6rem] font-mono uppercase tracking-[0.2em] text-accent">
                {title}
              </span>
              <p className="text-sm leading-relaxed text-foreground/85">{copy}</p>
            </article>
          ))}
        </section>

        <section className="grid grid-cols-1 gap-16 border-t border-black/10 pt-14 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <span className="mb-5 block text-[0.65rem] font-mono uppercase tracking-[0.25em] text-accent">
              Technical highlights
            </span>
            <h2 className="text-4xl font-bold uppercase leading-[0.9] tracking-tighter md:text-6xl">
              What to inspect.
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            {project.technicalHighlights.map((highlight, index) => (
              <div key={highlight} className="grid grid-cols-[56px_1fr] gap-4 border-b border-black/10 pb-4">
                <span className="text-[0.6rem] font-mono uppercase tracking-[0.2em] text-muted-foreground">
                  0{index + 1}
                </span>
                <p className="text-base leading-relaxed text-foreground/85">{highlight}</p>
              </div>
            ))}

            {evidenceLinks.length > 0 && (
              <div className="mt-8 flex flex-wrap gap-3">
                {evidenceLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover-trigger border border-black/10 px-4 py-3 text-[0.65rem] font-mono uppercase tracking-[0.18em] text-foreground transition-colors hover:border-black/30 hover:bg-black/5"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </section>

        {project.secondaryImages && (
          <section className="mt-20 grid grid-cols-1 gap-4 md:grid-cols-2">
            {project.secondaryImages.map((image, index) => (
              <ImageSlot
                key={image}
                src={image}
                alt={`${project.title} detail screenshot ${index + 1}`}
              />
            ))}
          </section>
        )}
      </div>
    </main>
  );
}
