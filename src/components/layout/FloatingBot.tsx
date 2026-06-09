"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import ChatPanel from "./ChatPanel";

export default function FloatingBot() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsChatOpen(true)}
        className={`hover-trigger fixed bottom-5 right-5 z-[100] flex items-center gap-3 border border-black/10 bg-background/80 px-4 py-3 text-[0.62rem] font-mono uppercase tracking-[0.18em] text-foreground shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-black/30 hover:bg-black/5 md:bottom-8 md:right-8 ${
          isChatOpen ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
        aria-label="Ask portfolio AI"
      >
        <MessageCircle className="h-4 w-4" />
        <span className="hidden sm:inline">Ask portfolio AI</span>
      </button>

      <ChatPanel isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </>
  );
}
