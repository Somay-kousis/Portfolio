"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { profile, proofPoints } from "@/lib/portfolio-data";

const ctas = [
  { label: "GitHub", href: profile.github },
  { label: "LinkedIn", href: profile.linkedin },
  { label: "Email", href: `mailto:${profile.email}` },
  { label: "Resume", href: profile.resume },
];

export default function MomentArrival() {
  return (
    <section className="relative w-full min-h-screen px-6 md:px-12 pt-24 md:pt-24 pb-16 flex flex-col justify-center">
      <div className="w-full max-w-screen-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, filter: "blur(12px)", y: 24 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 lg:gap-20 items-end"
        >
          <div>
            <p className="mb-7 kicker text-accent">
              AI Engineer / Agentic Systems / Retrieval & Memory / Full-Stack Products
            </p>
            <h1 className="max-w-5xl text-[clamp(2.6rem,6.4vw,6.5rem)] font-bold uppercase leading-[0.88] tracking-[-0.035em] text-foreground">
              I build the version that survives contact.
            </h1>
          </div>

          <div className="flex flex-col gap-8">
            <div className="grid grid-cols-[88px_1fr] items-end gap-4 border border-[var(--rule)] bg-[var(--surface)] p-3">
              <div className="relative aspect-square overflow-hidden bg-black/[0.04]">
                <Image
                  src={profile.image}
                  alt="Somay Kousis"
                  fill
                  priority
                  sizes="88px"
                  className="object-cover"
                />
              </div>
              <div className="pb-1">
                <span className="mb-2 block text-[0.55rem] font-mono uppercase tracking-[0.18em] text-muted-foreground">
                  AI Systems Engineer @ RYSE
                </span>
                <p className="text-[0.65rem] font-mono uppercase tracking-[0.18em] text-foreground">
                  Somay Kousis / Co-Founder, Something
                </p>
              </div>
            </div>
            <p className="text-base md:text-lg leading-relaxed tracking-tight text-foreground/90">
              I build stateful multi-agent systems, retrieval and memory pipelines, and product-grade software. The work I care about is the part that holds up under contention, cost limits, and being wrong, not the demo that runs once.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {ctas.map((cta) => (
                <a
                  key={cta.label}
                  href={cta.href}
                  target={cta.href.startsWith("http") ? "_blank" : undefined}
                  rel={cta.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="hover-trigger border border-[var(--rule)] px-4 py-3 text-[0.65rem] font-mono uppercase tracking-[0.18em] text-foreground transition-colors duration-300 hover:border-[var(--rule-strong)] hover:bg-black/5"
                >
                  {cta.label}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 grid grid-cols-1 md:grid-cols-3 border-t-2 border-b border-[var(--rule-strong)]"
        >
          {proofPoints.map((point, index) => (
            <div
              key={point}
              className="border-b border-[var(--rule)] py-5 md:border-b-0 md:border-r md:last:border-r-0 md:px-6 first:md:pl-0 last:md:pr-0"
            >
              <span className="mb-4 block kicker text-muted-foreground">
                0{index + 1} / Proof
              </span>
              <p className="max-w-sm text-[0.8rem] leading-relaxed text-foreground/80">
                {point}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
