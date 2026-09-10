import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import CustomCursor from "@/components/layout/CustomCursor";
import Preloader from "@/components/layout/Preloader";
import Navigation from "@/components/layout/Navigation";

import WarningSuppressor from "@/components/layout/WarningSuppressor";

export const metadata: Metadata = {
  title: "Somay Kousis | AI Engineer",
  description:
    "AI engineering portfolio focused on agentic orchestration, retrieval and memory systems, and bounded authority for AI agents. AI Systems Engineer at RYSE Technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <body className="relative min-h-full flex flex-col bg-background text-foreground">
        <WarningSuppressor />
        <Preloader />
        <Navigation />
        <div className="page-field" />
        <div className="cinematic-noise" />
        <CustomCursor />
        <SmoothScroll>
          <div className="relative z-10">
            {children}
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
