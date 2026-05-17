"use client";

import { motion } from "framer-motion";

export default function MomentArrival() {
  return (
    <div className="relative w-full min-h-[150vh] flex flex-col pt-[30vh]">
      <div className="px-6 md:px-12 w-full">
        <motion.div
          initial={{ opacity: 0, filter: "blur(20px)", y: 50 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 2.5, delay: 2.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 mix-blend-difference"
        >
          <h1 className="text-[clamp(6rem,20vw,24rem)] font-bold uppercase leading-[0.75] tracking-tighter text-foreground ml-[-2vw]">
            MACHINE
          </h1>
          <h1 className="text-[clamp(6rem,20vw,24rem)] font-bold uppercase leading-[0.75] tracking-tighter text-muted-foreground ml-[15vw]">
            LATENT
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 4 }}
          className="absolute top-[50vh] right-[10vw] max-w-[200px]"
        >
          <p className="text-[0.6rem] font-mono uppercase tracking-[0.2em] leading-relaxed text-muted-foreground">
            Abstracting complexity. <br/>
            Designing spatial logic. <br/>
            01 / 2026.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
