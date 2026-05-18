"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface ProjectDetail {
  title: string;
  role: string;
  year: string;
  philosophy: string;
  description: string;
  tags: string[];
  heroImage: string;
  secondaryImages: string[];
}

const projectsData: Record<string, ProjectDetail> = {
  mutiny: {
    title: "MUTINY",
    role: "Lead Interface & Design Engineer",
    year: "2026",
    philosophy: "Atmospheric brutalism.",
    description: "Mutiny is a design-centric platform built to challenge standard modular layouts. It leverages aggressive grid structures, high-contrast brutalist typography, and fluid, spatial animation layers to create a sensory digital workspace.",
    tags: ["WebGL", "TailwindCSS", "Framer Motion", "Next.js"],
    heroImage: "/images/projects/mutiny-hero.png",
    secondaryImages: [
      "/images/projects/mutiny-detail-1.png",
      "/images/projects/mutiny-detail-2.png"
    ]
  },
  steelecareer: {
    title: "STEELECAREER",
    role: "Product Designer & ML Engineer",
    year: "2026",
    philosophy: "Invisible functionality.",
    description: "SteeleCareer completely modernizes the talent matching ecosystem. By injecting deep semantic search, customized matches based on neural alignment models, and a sleek Hinge-style onboarding flow, it strips away the friction of job discovery.",
    tags: ["PyTorch", "Semantic Search", "TypeScript", "Next.js"],
    heroImage: "/images/projects/steelecareer-hero.png",
    secondaryImages: [
      "/images/projects/steelecareer-detail-1.png",
      "/images/projects/steelecareer-detail-2.png"
    ]
  },
  zuuush: {
    title: "ZUUUSH",
    role: "Full-Stack & Interaction Engineer",
    year: "2026",
    philosophy: "Emotional resonance through digital form.",
    description: "Zuuush is a digital mental health platform built around high-fidelity micro-interactions and empathetic styling. Focused on calming animations, intuitive navigation, and high performance, it aims to create an emotional safe haven online.",
    tags: ["React Native", "TailwindCSS", "Node.js", "Interaction Design"],
    heroImage: "/images/projects/zuuush-hero.png",
    secondaryImages: [
      "/images/projects/zuuush-detail-1.png",
      "/images/projects/zuuush-detail-2.png"
    ]
  }
};

interface ImageSlotProps {
  src: string;
  label: string;
  aspectRatio: string;
  isLight?: boolean;
}

function ImageSlot({ src, label, aspectRatio, isLight = false }: ImageSlotProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className={`w-full ${aspectRatio} relative overflow-hidden group border transition-all duration-[1.5s] ease-[0.16,1,0.3,1] ${
      isLight 
        ? "border-[#e5e5ea] bg-white shadow-[0_32px_64px_rgba(0,0,0,0.03)]" 
        : "border-[#1a1a1f] bg-[#08080a]"
    }`}>
      {/* Dynamic Grid Overlay to feel like a high-tech UI canvas */}
      <div 
        className={`absolute inset-0 pointer-events-none transition-all duration-[1.5s] ${
          isLight
            ? "bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:32px_32px] opacity-[0.03]"
            : "bg-[linear-gradient(to_right,#8b8b99_1px,transparent_1px),linear-gradient(to_bottom,#8b8b99_1px,transparent_1px)] bg-[size:32px_32px] opacity-10"
        }`} 
      />
      
      {!imageError ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={label}
          onError={() => setImageError(true)}
          className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[0.16,1,0.3,1] group-hover:scale-105"
        />
      ) : null}

      {/* Blueprint Fallback Wireframe when actual screenshot is missing */}
      {(imageError) && (
        <div className={`absolute inset-0 flex flex-col justify-between p-8 md:p-12 transition-all duration-[1.5s] ${
          isLight 
            ? "text-[#8e8e93] hover:bg-[#fafafb]" 
            : "text-muted-foreground hover:bg-[#0a0a0d]"
        }`}>
          {/* Top Info */}
          <div className="flex justify-between items-start w-full text-[0.55rem] font-mono tracking-widest uppercase">
            <span>[ SLOT_ACTIVE ]</span>
            <span>SPEC: 1920 X 1080</span>
          </div>

          {/* Center Blueprint Graphics */}
          <div className="flex flex-col items-center justify-center gap-4 py-8">
            <div className={`w-16 h-10 border border-dashed relative flex items-center justify-center opacity-40 ${
              isLight ? "border-[#8e8e93]/40" : "border-muted-foreground/30"
            }`}>
              <div className={`absolute inset-0 border rotate-[15deg] scale-105 ${isLight ? "border-[#8e8e93]/10" : "border-muted-foreground/10"}`} />
              <div className={`absolute inset-0 border -rotate-[15deg] scale-105 ${isLight ? "border-[#8e8e93]/10" : "border-muted-foreground/10"}`} />
            </div>
            <span className={`text-[0.6rem] font-mono uppercase tracking-[0.2em] text-center max-w-xs ${
              isLight ? "text-[#515154]" : "text-accent"
            }`}>
              {label}
            </span>
          </div>

          {/* Bottom Placement Guide */}
          <div className="w-full text-center">
            <p className={`text-[0.5rem] font-mono uppercase tracking-[0.15em] leading-relaxed ${
              isLight ? "text-[#8e8e93]/80" : "text-muted-foreground/60"
            }`}>
              Place screenshot here:<br/>
              <code className={`lowercase select-all px-2 py-0.5 mt-2 inline-block rounded border ${
                isLight 
                  ? "bg-[#f2f2f7] text-[#1d1d1f]/80 border-[#e5e5ea]" 
                  : "bg-black/40 text-foreground/80 border-white/5"
              }`}>
                public{src}
              </code>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function WorkDetailContent({ slug }: { slug: string }) {
  const isLight = slug.toLowerCase() === "zuuush";

  const project = projectsData[slug.toLowerCase()] || {
    title: slug.toUpperCase(),
    role: "Lead Engineer / Architect",
    year: "2026",
    philosophy: "Digital structuralism.",
    description: `Exploring the boundaries of spatial structure and fluid interface design in the context of ${slug.toUpperCase()}.`,
    tags: ["React", "CSS", "Motion"],
    heroImage: `/images/projects/${slug}-hero.png`,
    secondaryImages: [
      `/images/projects/${slug}-detail-1.png`,
      `/images/projects/${slug}-detail-2.png`
    ]
  };

  return (
    <main className={`relative w-full min-h-screen pt-[25vh] pb-48 flex flex-col z-10 transition-colors duration-[1.5s] ease-[0.16,1,0.3,1] ${
      isLight ? "bg-[#f5f6f8] text-[#1d1d1f]" : "bg-transparent text-foreground"
    }`}>
      
      {/* Title Header */}
      <div className={`px-6 md:px-12 mb-20 ${isLight ? "" : "mix-blend-difference"}`}>
        <motion.div
          initial={{ opacity: 0, filter: "blur(20px)", y: 50 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className={`text-[0.55rem] font-mono uppercase tracking-[0.25em] mb-4 block ${
            isLight ? "text-[#8e8e93]" : "text-accent"
          }`}>
            PROJECT DETAIL // ARCHIVE
          </span>
          <h1 className={`text-[clamp(3.5rem,12vw,14rem)] font-bold tracking-tighter uppercase leading-[0.85] ${
            isLight ? "text-[#1d1d1f]" : "text-foreground"
          }`}>
            {project.title}
          </h1>
        </motion.div>
      </div>

      {/* Hero Showcase Slot (Large Landscape Screenshot) */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="w-full relative my-12"
      >
        <ImageSlot 
          src={project.heroImage} 
          label={`${project.title} Hero UI Showcase`} 
          aspectRatio="h-[60vh] md:h-[90vh]" 
          isLight={isLight}
        />
      </motion.div>

      {/* Project Meta and Description */}
      <div className={`px-6 md:px-12 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24 my-24 ${
        isLight ? "" : "mix-blend-difference"
      }`}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className={`col-span-1 flex flex-col gap-8 text-[0.6rem] font-mono uppercase tracking-[0.2em] ${
            isLight ? "text-[#6e6e73]" : "text-muted-foreground"
          }`}
        >
          <div>
            <span className={`block mb-2 text-xs ${isLight ? "text-[#1d1d1f] font-medium" : "text-foreground"}`}>Role</span>
            {project.role}
          </div>
          <div>
            <span className={`block mb-2 text-xs ${isLight ? "text-[#1d1d1f] font-medium" : "text-foreground"}`}>Year</span>
            {project.year}
          </div>
          <div>
            <span className={`block mb-2 text-xs ${isLight ? "text-[#1d1d1f] font-medium" : "text-foreground"}`}>Philosophy</span>
            {project.philosophy}
          </div>
          <div>
            <span className={`block mb-2 text-xs ${isLight ? "text-[#1d1d1f] font-medium" : "text-foreground"}`}>Stack</span>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.tags.map((tag) => (
                <span key={tag} className={`px-2 py-0.5 text-[0.5rem] border ${
                  isLight 
                    ? "border-[#e5e5ea] bg-white text-[#1d1d1f] shadow-sm rounded-sm" 
                    : "border-white/10 text-foreground"
                }`}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className={`col-span-1 md:col-span-2 text-xl md:text-3xl tracking-tight leading-relaxed font-light ${
            isLight ? "text-[#2c2c2e]" : "text-foreground/90"
          }`}
        >
          {project.description}
        </motion.div>
      </div>

      {/* Grid of Secondary Screenshots (Detail Screens) */}
      <div className="px-6 md:px-12 w-full max-w-7xl mx-auto mt-24">
        <div className={`border-t pt-12 mb-16 ${
          isLight ? "border-[#e5e5ea]" : "border-[#1a1a1f]"
        }`}>
          <span className={`text-[0.55rem] font-mono uppercase tracking-[0.25em] ${
            isLight ? "text-[#8e8e93]" : "text-accent"
          }`}>
            INTERFACE ARCHITECTURE // DETAILS
          </span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {project.secondaryImages.map((imgUrl, index) => (
            <motion.div
              key={imgUrl}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1.5, delay: index * 0.15 }}
            >
              <ImageSlot 
                src={imgUrl} 
                label={`${project.title} Detail View ${index + 1}`} 
                aspectRatio="aspect-video" 
                isLight={isLight}
              />
            </motion.div>
          ))}
        </div>
      </div>

    </main>
  );
}

