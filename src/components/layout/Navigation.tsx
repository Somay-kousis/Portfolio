"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { profile } from "@/lib/portfolio-data";

export default function Navigation() {
  const pathname = usePathname();
  const links = [
    { href: "/#experience", label: "Experience", active: false },
    { href: "/#projects", label: "Projects", active: false },
    { href: "/about", label: "About", active: pathname === "/about" },
    { href: "/writing", label: "Notes", active: pathname === "/writing" },
    { href: profile.resume, label: "Resume", active: false },
  ];

  return (
    <nav className="fixed top-0 left-0 z-[100] w-full border-b border-[var(--rule-strong)] bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-screen-2xl items-stretch justify-between px-6 md:px-12">
        <Link
          href="/"
          className="hover-trigger flex flex-col justify-center py-3 kicker text-foreground transition-colors hover:text-accent"
        >
          <span>Somay Kousis</span>
          <span className="text-muted-foreground">AI Systems Engineer</span>
        </Link>

        <div className="-mr-4 flex items-stretch md:-mr-5">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className={`hover-trigger hidden items-center px-4 kicker transition-colors sm:flex md:px-5 ${
                link.active
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#projects"
            className="hover-trigger flex items-center px-4 kicker text-foreground transition-colors hover:text-accent sm:hidden"
          >
            Projects
          </Link>
        </div>
      </div>
    </nav>
  );
}
