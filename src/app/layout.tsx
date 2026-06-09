import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Somay Kousis | AI Engineer",
  description:
    "AI Engineer building agentic systems, memory architectures, and AI products. Focused on LangGraph, RAG, and production-grade AI systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased bg-background`}>
      <body className="relative min-h-full flex flex-col bg-background text-foreground">
        <Navigation />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
