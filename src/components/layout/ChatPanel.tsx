"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Message {
  id: string;
  sender: "user" | "bot";
  text: string;
  timestamp: Date;
}

interface ChatPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const SUGGESTED_QUESTIONS = [
  "Who is Somay?",
  "What projects have you built?",
  "Tell me about your Machine Learning systems.",
  "How can I contact you?",
];

export default function ChatPanel({ isOpen, onClose }: ChatPanelProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Add initial bot greeting
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          id: "greeting",
          sender: "bot",
          text: "Hey! I'm self.so, an AI clone of Somay. I talk like him, know his work, and build models with him. What do you want to know about our journey?",
          timestamp: new Date(),
        },
      ]);
    }
  }, [messages]);

  // Scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  // Prevent background scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleSend = async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMsg: Message = {
      id: Math.random().toString(36).substring(7),
      sender: "user",
      text,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question: text }),
      });

      if (!response.ok) {
        throw new Error("Failed to communicate with bot backend");
      }

      const data = await response.json();
      
      const botMsg: Message = {
        id: Math.random().toString(36).substring(7),
        sender: "bot",
        text: data.answer || "Sorry, I couldn't process that response.",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (error) {
      console.error(error);
      const botMsg: Message = {
        id: Math.random().toString(36).substring(7),
        sender: "bot",
        text: "My bad, student yk, so out of free tokens  😭",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[110] bg-[#020202] backdrop-blur-md"
            onClick={onClose}
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 200 }}
            className="fixed top-0 right-0 z-[120] w-full sm:max-w-md h-screen bg-[#050507]/95 border-l border-white/5 backdrop-blur-2xl shadow-2xl flex flex-col font-sans"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/5">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <div className="absolute inset-0 rounded-full bg-emerald-500/50 animate-ping" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[0.7rem] font-mono tracking-[0.2em] text-foreground uppercase">
                    self.so
                  </span>
                  <span className="text-[0.55rem] font-mono tracking-[0.1em] text-muted-foreground uppercase">
                    AI Identity System
                  </span>
                </div>
              </div>
              
              <button
                onClick={onClose}
                className="hover-trigger p-2 text-muted-foreground hover:text-foreground hover:bg-white/5 rounded-full transition-all duration-300 outline-none"
                aria-label="Close chat"
              >
                <X className="w-4 h-4 pointer-events-none" />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 min-h-0 overflow-y-auto px-6 py-6 space-y-6 chat-messages-container">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${
                    msg.sender === "user" ? "items-end" : "items-start"
                  }`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-xs leading-relaxed ${
                      msg.sender === "user"
                        ? "bg-white text-black font-medium"
                        : "bg-white/5 border border-white/5 text-foreground/90 font-light"
                    }`}
                  >
                    {msg.text}
                  </div>
                  <span className="text-[0.55rem] font-mono tracking-wider text-muted-foreground/60 mt-1.5 px-1 uppercase">
                    {msg.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </div>
              ))}

              {/* Bot Loading/Thinking Indicator */}
              {isLoading && (
                <div className="flex flex-col items-start">
                  <div className="bg-white/5 border border-white/5 text-foreground/90 rounded-2xl px-4 py-3 text-xs flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-accent animate-spin" />
                    <span className="font-mono text-[0.6rem] uppercase tracking-wider text-muted-foreground">
                      self.so is retrieving memory...
                    </span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Suggestions (Shown when input is empty and conversation is short) */}
            {messages.length <= 2 && !isLoading && (
              <div className="px-6 py-3 border-t border-white/5 bg-white/[0.01]">
                <span className="text-[0.55rem] font-mono uppercase tracking-[0.15em] text-muted-foreground block mb-2.5">
                  Suggested Queries
                </span>
                <div className="flex flex-wrap gap-2">
                  {SUGGESTED_QUESTIONS.map((q, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSend(q)}
                      className="hover-trigger text-[0.6rem] font-mono text-foreground/70 hover:text-foreground bg-white/5 hover:bg-white/10 border border-white/5 px-2.5 py-1.5 rounded-md transition-all duration-300 text-left uppercase tracking-wider"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Form */}
            <div className="p-6 border-t border-white/5 bg-[#050507]">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend(inputValue);
                }}
                className="flex items-center gap-3 bg-white/[0.02] border border-white/10 rounded-xl px-4 py-2.5 focus-within:border-white/20 transition-all duration-300"
              >
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="ASK SOMETHING..."
                  className="flex-1 bg-transparent text-xs font-mono text-foreground placeholder:text-muted-foreground outline-none border-none uppercase tracking-wider"
                  disabled={isLoading}
                />
                
                <button
                  type="submit"
                  disabled={!inputValue.trim() || isLoading}
                  className="hover-trigger p-1.5 text-muted-foreground hover:text-foreground disabled:opacity-30 disabled:pointer-events-none transition-colors duration-300"
                >
                  <Send className="w-3.5 h-3.5 pointer-events-none" />
                </button>
              </form>
              <div className="mt-3 text-center">
                <span className="text-[0.5rem] font-mono text-muted-foreground uppercase tracking-widest">
                  Powered by LLaMA 3.3 @ self.so
                </span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
