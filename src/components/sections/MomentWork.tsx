"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";

const projects = [
  { title: "MUTINY", meta: "Design / Engineering" },
  { title: "STEELECAREER", meta: "Product / ML" },
  { title: "GHOSTING", meta: "Engineering" },
];

interface ProjectTitleProps {
  title: string;
  href: string;
  meta: string;
}

function ProjectTitle({ title, href, meta }: ProjectTitleProps) {
  const [isHovered, setIsHovered] = useState(false);
  const clipId = `wave-clip-${title.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <div 
      className="relative pointer-events-auto text-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Hidden SVG for dynamic wave mask */}
      <svg className="absolute w-0 h-0" aria-hidden="true">
        <defs>
          <clipPath id={clipId} clipPathUnits="objectBoundingBox">
            <motion.path
              d="M -1 0 Q -0.75 -0.04, -0.5 0 T 0 0 Q 0.25 -0.04, 0.5 0 T 1 0 Q 1.25 -0.04, 1.5 0 T 2 0 L 2 2 L -1 2 Z"
              animate={{
                x: [0, -1],
                y: isHovered ? -0.15 : 1.15,
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  ease: "linear",
                  duration: 4,
                },
                y: {
                  type: "spring",
                  stiffness: 70,
                  damping: 14,
                  mass: 0.7,
                }
              }}
            />
          </clipPath>
        </defs>
      </svg>

      <Link href={href} className="relative block group project-hover-trigger">
        <div className="relative inline-block w-full">
          {/* Base Muted Text */}
          <h2 className="text-[clamp(4rem,12vw,16rem)] font-bold tracking-tighter uppercase text-muted-foreground/30 transition-colors duration-500 selection:bg-transparent">
            {title}
          </h2>
          
          {/* Filled Overlay Text (clipped by rising wave) */}
          <h2 
            className="absolute inset-0 text-[clamp(4rem,12vw,16rem)] font-bold tracking-tighter uppercase text-foreground select-none pointer-events-none selection:bg-transparent"
            style={{ 
              clipPath: `url(#${clipId})`,
              WebkitClipPath: `url(#${clipId})`,
              textShadow: isHovered ? "0 0 20px rgba(228, 228, 230, 0.4)" : "none",
              transition: "text-shadow 0.6s ease",
            }}
          >
            {title}
          </h2>
        </div>

        {/* Meta label */}
        <span className="text-[0.6rem] font-mono uppercase tracking-[0.2em] text-accent mt-8 block opacity-50 group-hover:opacity-100 transition-opacity duration-500">
          {meta}
        </span>
      </Link>
    </div>
  );
}

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
              <ProjectTitle 
                title={project.title}
                href={`/work/${project.title.toLowerCase()}`}
                meta={project.meta}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

