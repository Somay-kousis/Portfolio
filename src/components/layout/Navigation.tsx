"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();
  const links = [
    { href: "/", label: "Home", active: pathname === "/" },
    { href: "/#projects", label: "Projects", active: false },
    { href: "/about", label: "About", active: pathname === "/about" },
    { href: "/writing", label: "Notes", active: pathname === "/writing" },
    { href: "/resume.pdf", label: "Resume", active: false },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full p-6 md:p-12 z-[100] flex justify-between items-start pointer-events-none">
      <Link href="/" className="pointer-events-auto text-[0.6rem] font-mono uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors hover-trigger">
        Somay Kousis <br/>
        AI/ML Engineer
      </Link>
      
      <div className="flex flex-col gap-4 text-right pointer-events-auto">
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className={`text-[0.6rem] font-mono uppercase tracking-[0.2em] transition-colors hover-trigger ${link.active ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
