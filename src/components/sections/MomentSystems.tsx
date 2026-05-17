"use client";

import { motion } from "framer-motion";

export default function MomentSystems() {
  return (
    <div className="relative w-full min-h-[200vh] flex flex-col items-center justify-center pointer-events-none mix-blend-difference">
      
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <h2 className="text-[clamp(10rem,35vw,40rem)] font-bold tracking-tighter text-muted-foreground whitespace-nowrap">
          SYSTEMS
        </h2>
      </div>

      <div className="relative z-10 w-full max-w-7xl px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24 lg:gap-12 mt-[50vh]">
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-6"
        >
          <span className="text-[0.6rem] font-mono uppercase tracking-[0.2em] text-accent">01 / Logic</span>
          <p className="text-xs uppercase tracking-widest leading-loose text-foreground max-w-[200px]">
            Neural Style Transfer.
            Transformer Distillation.
            Latent Space Interpolation.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 1.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-6 lg:mt-32"
        >
          <span className="text-[0.6rem] font-mono uppercase tracking-[0.2em] text-accent">02 / Infrastructure</span>
          <p className="text-xs uppercase tracking-widest leading-loose text-foreground max-w-[200px]">
            A100 / RTX 4090 / TPU v4.
            Distributed Training.
            High-Performance Inference.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-6"
        >
          <span className="text-[0.6rem] font-mono uppercase tracking-[0.2em] text-accent">03 / State</span>
          <p className="text-xs uppercase tracking-widest leading-loose text-foreground max-w-[200px]">
            Exploring the bounds of generative boundaries. Building models that understand, adapt, and create.
          </p>
        </motion.div>

      </div>
    </div>
  );
}
