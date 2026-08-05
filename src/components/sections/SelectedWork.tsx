"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
  { id: "01", title: "RabbitHole", role: "Agentic AI / LangGraph", year: "2026" },
  { id: "02", title: "Co-Founder Memory", role: "Memory / RAG", year: "2026" },
  { id: "03", title: "PaperPlanes", role: "Bi-temporal Memory", year: "2026" },
  { id: "04", title: "Something", role: "AI Personas / Platform", year: "2026" },
];

export default function SelectedWork() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <section className="relative w-full min-h-screen py-32 px-6 md:px-12 max-w-screen-2xl mx-auto flex flex-col justify-center">
      <div className="flex justify-between items-end mb-24 md:mb-40">
        <h2 className="text-sm uppercase tracking-widest text-muted-foreground">Selected Work</h2>
        <span className="text-xs font-mono opacity-50">(01 — 04)</span>
      </div>

      <div className="flex flex-col w-full relative z-10">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="group flex flex-col md:flex-row justify-between items-start md:items-center py-12 md:py-16 border-t border-muted hover-trigger cursor-pointer"
            onMouseEnter={() => setHoveredProject(project.title)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="flex flex-col md:flex-row gap-4 md:gap-12 md:items-center">
              <span className="text-xs font-mono text-muted-foreground opacity-50 block md:hidden">{project.id}</span>
              <h3 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter uppercase group-hover:text-accent transition-colors duration-500">
                {project.title}
              </h3>
            </div>
            <div className="mt-4 md:mt-0 flex gap-12 md:gap-24 text-xs font-mono uppercase tracking-widest text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden md:flex">
              <span>{project.role}</span>
              <span>{project.year}</span>
            </div>
          </motion.div>
        ))}
        <div className="border-t border-muted w-full" />
      </div>

      {/* Atmospheric hover effect background */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 flex items-center justify-center opacity-0 transition-opacity duration-1000 ease-in-out mix-blend-screen"
        style={{ opacity: hoveredProject ? 0.08 : 0 }}
      >
         <div className="w-[50vw] h-[50vh] bg-accent rounded-full blur-[120px]" />
      </div>
    </section>
  );
}
