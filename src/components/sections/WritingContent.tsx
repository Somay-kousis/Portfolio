"use client";

import { motion } from "framer-motion";

const thoughts = [
  { date: "2026.05.17", title: "Invisible Functionality", abstract: "When systems are built correctly, they disappear. The UI should not feel like an interface, but rather a membrane between the user and the logic." },
  { date: "2026.04.12", title: "The Latent Product", abstract: "Approaching machine learning from a product perspective changes the architecture. You stop optimizing for accuracy and start optimizing for agency." },
  { date: "2025.11.03", title: "Brutalism in Data", abstract: "Why we need to stop decorating data and start exposing its structure. Elegance is found in the raw constraint of the information itself." },
];

export default function WritingContent() {
  return (
    <main className="flex flex-col items-center w-full relative z-10 pt-[30vh] min-h-screen pb-32">
      <div className="w-full px-6 md:px-12 max-w-7xl">
        <motion.h1 
          initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-sm font-mono uppercase tracking-[0.2em] text-accent mb-32 mix-blend-difference"
        >
          Notes / Fragments
        </motion.h1>

        <div className="flex flex-col gap-32">
          {thoughts.map((thought, i) => (
            <motion.article 
              key={thought.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group cursor-pointer mix-blend-difference"
            >
              <span className="text-[0.6rem] font-mono uppercase tracking-[0.2em] text-muted-foreground block mb-6">
                {thought.date}
              </span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground group-hover:text-accent transition-colors duration-500 mb-8 max-w-2xl leading-tight">
                {thought.title}
              </h2>
              <p className="text-xs uppercase tracking-widest leading-loose text-muted-foreground max-w-lg">
                {thought.abstract}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </main>
  );
}
