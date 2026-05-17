"use client";

import { motion } from "framer-motion";

export default function WorkDetailContent({ slug }: { slug: string }) {
  const formattedTitle = slug.toUpperCase();

  return (
    <main className="relative w-full min-h-screen pt-[30vh] pb-32 flex flex-col z-10">
      
      <div className="px-6 md:px-12 mb-32 mix-blend-difference">
        <motion.div
          initial={{ opacity: 0, filter: "blur(20px)", y: 50 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-[clamp(4rem,15vw,16rem)] font-bold tracking-tighter uppercase text-foreground leading-[0.85]">
            {formattedTitle}
          </h1>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, delay: 1, ease: [0.16, 1, 0.3, 1] }}
        className="w-full h-[70vh] md:h-[100vh] relative mt-12 mb-32"
      >
         <div className="absolute inset-0 bg-[#0a0a0c] flex items-center justify-center border-y border-[#1a1a1f]">
           {/* Abstract Placeholder representing Image Context */}
           <span className="text-[0.6rem] font-mono uppercase tracking-[0.2em] text-muted-foreground mix-blend-difference">Visual Context Layer</span>
         </div>
      </motion.div>

      <div className="px-6 md:px-12 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-24 mix-blend-difference">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="col-span-1 flex flex-col gap-8 text-[0.6rem] font-mono uppercase tracking-[0.2em] text-muted-foreground"
        >
          <div>
            <span className="text-foreground block mb-2 text-xs">Role</span>
            Machine Learning / Architecture
          </div>
          <div>
            <span className="text-foreground block mb-2 text-xs">Year</span>
            2026
          </div>
          <div>
            <span className="text-foreground block mb-2 text-xs">Philosophy</span>
            Invisible functionality.
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="col-span-1 md:col-span-2 text-xl md:text-3xl tracking-tight leading-relaxed text-foreground"
        >
          Building {formattedTitle} required abstracting significant complexity into a fluid, cinematic interaction model. The philosophy was to treat data not as metrics, but as spatial logic—allowing the user to navigate the system intuitively, feeling the architecture rather than just consuming it.
        </motion.div>
      </div>
    </main>
  );
}
