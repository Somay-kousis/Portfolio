"use client";

import { motion } from "framer-motion";
import Atmosphere from "@/components/3d/Atmosphere";

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden">
      <Atmosphere />
      
      <div className="z-10 w-full px-6 md:px-12 max-w-screen-2xl mx-auto flex flex-col items-start justify-center h-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-full flex flex-col"
        >
          <div className="flex flex-col gap-0 leading-[0.85] tracking-tighter w-full">
            <h1 className="text-[clamp(4rem,15vw,16rem)] font-bold uppercase text-foreground">
              Machine
            </h1>
            <h1 className="text-[clamp(4rem,15vw,16rem)] font-bold uppercase text-muted-foreground ml-auto md:ml-0 md:pl-[10vw]">
              Learning
            </h1>
          </div>
          
          <div className="mt-12 md:mt-24 flex flex-col md:flex-row justify-between items-end w-full gap-8">
            <p className="text-muted-foreground max-w-sm text-sm uppercase tracking-widest leading-relaxed">
              Product-focused builder. Designing systems and digital experiences that feel quietly unforgettable.
            </p>
            <p className="text-foreground text-xs font-mono uppercase tracking-widest opacity-50">
              Scroll to explore ↓
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
