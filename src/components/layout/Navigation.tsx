"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 w-full bg-background border-b border-gray-200 z-50">
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-xl font-semibold text-foreground hover:text-accent transition-colors"
        >
          Somay Kousis
        </Link>

        <div className="flex gap-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
