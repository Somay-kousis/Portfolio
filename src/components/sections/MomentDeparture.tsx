"use client";

import { motion } from "framer-motion";

export default function MomentDeparture() {
  return (
    <div className="relative w-full h-[150vh] flex flex-col justify-end pb-32">
      <motion.div 
        initial={{ opacity: 0, filter: "blur(20px)" }}
        whileInView={{ opacity: 1, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-20%" }}
        transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
        className="w-full flex justify-center mix-blend-difference"
      >
        <a href="mailto:somaykaush@gmail.com" className="hover-trigger relative inline-block pointer-events-auto">
          <span className="text-[clamp(1.5rem,6vw,8rem)] font-bold tracking-tighter text-muted-foreground hover:text-foreground transition-colors duration-1000">
            SOMAYKAUSH@GMAIL.COM
          </span>
        </a>
      </motion.div>
      
      <div className="absolute bottom-12 left-6 md:left-12 flex flex-col gap-2 text-[0.6rem] font-mono uppercase tracking-[0.2em] text-muted-foreground mix-blend-difference z-10 pointer-events-auto">
        <a href="https://www.linkedin.com/in/somay-kousis-630ab1313/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground hover-trigger transition-colors">LinkedIn</a>
        <a href="https://github.com/Somay-kousis" target="_blank" rel="noopener noreferrer" className="hover:text-foreground hover-trigger transition-colors">GitHub</a>
        <a href="https://leetcode.com/u/oeuvre/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground hover-trigger transition-colors">LeetCode</a>
      </div>
      
      <div className="absolute bottom-12 right-6 md:right-12 text-[0.6rem] font-mono uppercase tracking-[0.2em] text-muted-foreground mix-blend-difference pointer-events-none text-right">
        Location: Global <br/>
        Status: Active
      </div>
    </div>
  );
}
