"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const projects = [
  { title: "MUTINY", meta: "Design / Engineering" },
  { title: "STEELECAREER", meta: "Product / ML" },
  { title: "ZUUUSH", meta: "Engineering" },
];

export default function MomentWork() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <div ref={containerRef} className="relative w-full h-[300vh]">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        {projects.map((project, i) => {
          const start = 0.2 + (i * 0.2);
          const end = start + 0.15;
          
          const y = useTransform(scrollYProgress, [start - 0.1, start, end, end + 0.1], [200, 0, 0, -200]);
          const opacity = useTransform(scrollYProgress, [start - 0.1, start, end, end + 0.1], [0, 1, 1, 0]);
          const blur = useTransform(scrollYProgress, [start - 0.1, start, end, end + 0.1], ["blur(30px)", "blur(0px)", "blur(0px)", "blur(30px)"]);
          const scale = useTransform(scrollYProgress, [start - 0.1, start, end, end + 0.1], [0.8, 1, 1, 1.2]);

          return (
            <motion.div
              key={project.title}
              className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none mix-blend-difference"
              style={{ y, opacity, filter: blur, scale }}
            >
              <Link href={`/work/${project.title.toLowerCase()}`} className="pointer-events-auto hover-trigger text-center group">
                <h2 className="text-[clamp(4rem,12vw,16rem)] font-bold tracking-tighter uppercase text-foreground group-hover:text-accent transition-colors duration-700">
                  {project.title}
                </h2>
                <span className="text-[0.6rem] font-mono uppercase tracking-[0.2em] text-accent mt-8 block opacity-50 group-hover:opacity-100 transition-opacity">
                  {project.meta}
                </span>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
