import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import CustomCursor from "@/components/layout/CustomCursor";
import Preloader from "@/components/layout/Preloader";
import Navigation from "@/components/layout/Navigation";
import FloatingBot from "@/components/layout/FloatingBot";
import AgentField from "@/components/layout/AgentField";

import WarningSuppressor from "@/components/layout/WarningSuppressor";

export const metadata: Metadata = {
  title: "Somay Kousis | AI/ML Engineer",
  description: "AI/ML engineering portfolio focused on retrieval, prediction, semantic search, and product-grade ML systems.",
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
        <AgentField />
        <div className="cinematic-noise" />
        <CustomCursor />
        <FloatingBot />
        <SmoothScroll>
          <div className="relative z-10">
            {children}
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
