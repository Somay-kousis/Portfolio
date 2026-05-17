"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AboutContent() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 30%"]
  });

  const text = "I am Somay Kousis, a product-focused builder working at the intersection of machine learning systems, interaction design, and startup engineering. I believe functionality should feel invisible, and architecture should feel human.";
  const words = text.split(" ");

  return (
    <main className="flex flex-col items-center w-full relative z-10 pt-[30vh]">
      <div className="w-full px-6 md:px-12 max-w-7xl">
        <motion.h1 
          initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-[0.6rem] font-mono uppercase tracking-[0.2em] text-accent mb-32 mix-blend-difference"
        >
          Identity / Philosophy
        </motion.h1>

        <section ref={containerRef} className="max-w-5xl flex flex-wrap gap-x-4 gap-y-2 mb-48 mix-blend-difference">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + (1 / words.length);
            return <Word key={i} word={word} progress={scrollYProgress} range={[start, end]} />;
          })}
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-24 mb-48 text-[0.6rem] font-mono uppercase tracking-[0.2em] leading-loose text-muted-foreground mix-blend-difference">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="text-foreground mb-8 text-xs">Core Competencies</h3>
            <ul className="flex flex-col gap-2">
              <li>Machine Learning Architecture</li>
              <li>Product & Systems Thinking</li>
              <li>Frontend & Interaction Design</li>
              <li>Startup Engineering</li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="text-foreground mb-8 text-xs">Current State</h3>
            <p>
              Available for select opportunities.<br/>
              Building startups from zero to one.
            </p>
          </motion.div>
        </section>
      </div>
    </main>
  );
}

function Word({ word, progress, range }: { word: string, progress: any, range: number[] }) {
  const opacity = useTransform(progress, range, [0.1, 1]);
  return (
    <motion.span 
      className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tight text-foreground"
      style={{ opacity }}
    >
      {word}
    </motion.span>
  );
}
