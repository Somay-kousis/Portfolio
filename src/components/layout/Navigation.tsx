"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 w-full p-6 md:p-12 z-[100] flex justify-between items-start pointer-events-none mix-blend-difference">
      <Link href="/" className="pointer-events-auto text-[0.6rem] font-mono uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors hover-trigger">
        Somay Kousis <br/>
        Identity
      </Link>
      
      <div className="flex flex-col gap-4 text-right pointer-events-auto">
        <Link href="/" className={`text-[0.6rem] font-mono uppercase tracking-[0.2em] transition-colors hover-trigger ${pathname === '/' ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}>
          Home
        </Link>
        <Link href="/about" className={`text-[0.6rem] font-mono uppercase tracking-[0.2em] transition-colors hover-trigger ${pathname === '/about' ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}>
          About
        </Link>
        <Link href="/writing" className={`text-[0.6rem] font-mono uppercase tracking-[0.2em] transition-colors hover-trigger ${pathname === '/writing' ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}>
          Writing
        </Link>
      </div>
    </nav>
  );
}
