"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"]
  });

  const text = "I am a product-focused builder and machine learning engineer. I design systems that abstract complexity and create digital experiences that feel quietly unforgettable. Bridging the gap between intelligent architecture and premium aesthetics.";
  const words = text.split(" ");

  return (
    <section ref={containerRef} className="relative w-full min-h-screen py-32 px-6 md:px-12 max-w-screen-xl mx-auto flex flex-col justify-center items-center">
      <div className="max-w-4xl text-center flex flex-wrap justify-center gap-x-4 gap-y-2 md:gap-x-6 md:gap-y-4">
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + (1 / words.length);
          
          return (
            <Word key={i} word={word} progress={scrollYProgress} range={[start, end]} />
          );
        })}
      </div>
      
      <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-12 w-full text-xs font-mono uppercase tracking-widest text-muted-foreground border-t border-muted pt-12">
        <div className="flex flex-col gap-4">
          <span className="text-foreground">Core Competencies</span>
          <span>Machine Learning</span>
          <span>Full-Stack Engineering</span>
          <span>Product Design</span>
        </div>
        <div className="flex flex-col gap-4">
          <span className="text-foreground">Current Stack</span>
          <span>PyTorch, TensorFlow</span>
          <span>Next.js, TypeScript</span>
          <span>Three.js, WebGL</span>
        </div>
        <div className="flex flex-col gap-4">
          <span className="text-foreground">Location</span>
          <span>Remote / Global</span>
          <span>Available for select opportunities</span>
        </div>
      </div>
    </section>
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
