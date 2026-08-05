"use client";

import { profile } from "@/lib/portfolio-data";

export default function Footer() {
  const [emailUser, emailDomain] = profile.email.split("@");

  return (
    <footer className="relative w-full min-h-[80vh] py-12 px-6 md:px-12 flex flex-col justify-between items-center overflow-hidden border-t border-muted">
      <div className="w-full flex justify-between items-center text-xs font-mono uppercase tracking-widest text-muted-foreground mb-auto">
        <span>Open for AI engineering work</span>
        <span>2026 © All Rights Reserved</span>
      </div>

      <div className="flex-1 flex flex-col justify-center items-center w-full z-10 py-32">
        <p className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-8">Get in touch</p>
        <a 
          href={`mailto:${profile.email}`} 
          className="hover-trigger relative group text-center block"
        >
          <span className="text-[clamp(3rem,10vw,12rem)] font-bold tracking-tighter text-foreground group-hover:text-accent transition-colors duration-700 block leading-[0.85] uppercase">
            {emailUser}@
          </span>
          <span className="text-[clamp(3rem,10vw,12rem)] font-bold tracking-tighter text-foreground group-hover:text-accent transition-colors duration-700 block leading-[0.85] uppercase">
            {emailDomain}
          </span>
        </a>
      </div>

      <div className="w-full flex flex-col md:flex-row justify-between items-center md:items-end text-xs font-mono uppercase tracking-widest text-muted-foreground mt-auto z-10 gap-8">
        <div className="flex gap-8">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors hover-trigger">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors hover-trigger">LinkedIn</a>
          <a href={profile.leetcode} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors hover-trigger">LeetCode</a>
        </div>
        <span>Designed & Engineered by Somay Kousis</span>
      </div>
    </footer>
  );
}
