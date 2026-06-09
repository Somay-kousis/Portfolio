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
    <section className="relative w-full min-h-screen px-6 md:px-12 pt-36 md:pt-44 pb-24 flex items-center">
      <div className="w-full max-w-screen-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, filter: "blur(16px)", y: 32 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 1.4, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-16 lg:gap-24 items-end"
        >
          <div>
            <p className="mb-8 text-[0.65rem] font-mono uppercase tracking-[0.25em] text-accent">
              AI/ML Engineer / Retrieval / Prediction / Product Systems
            </p>
            <h1 className="max-w-6xl text-[clamp(3.6rem,10vw,11rem)] font-bold uppercase leading-[0.82] tracking-tighter text-foreground">
              Building ML systems recruiters can verify.
            </h1>
          </div>

          <div className="flex flex-col gap-8">
            <div className="grid grid-cols-[88px_1fr] items-end gap-4 border border-black/10 bg-black/[0.02] p-3">
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
                  Candidate profile
                </span>
                <p className="text-[0.65rem] font-mono uppercase tracking-[0.18em] text-foreground">
                  Somay Kousis / AI-ML Systems
                </p>
              </div>
            </div>
            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-foreground/90">
              I build retrieval, prediction, and product-grade ML systems with enough implementation detail to inspect and enough product sense to ship.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {ctas.map((cta) => (
                <a
                  key={cta.label}
                  href={cta.href}
                  target={cta.href.startsWith("http") ? "_blank" : undefined}
                  rel={cta.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="hover-trigger border border-black/10 px-4 py-3 text-[0.65rem] font-mono uppercase tracking-[0.18em] text-foreground transition-colors duration-300 hover:border-black/30 hover:bg-black/5"
                >
                  {cta.label}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 border-y border-black/10"
        >
          {proofPoints.map((point, index) => (
            <div
              key={point}
              className="border-b border-black/10 py-6 md:border-b-0 md:border-r md:last:border-r-0 md:px-6 first:md:pl-0 last:md:pr-0"
            >
              <span className="mb-5 block text-[0.6rem] font-mono uppercase tracking-[0.2em] text-muted-foreground">
                0{index + 1} / Proof
              </span>
              <p className="max-w-sm text-sm leading-relaxed text-foreground/80">
                {point}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
