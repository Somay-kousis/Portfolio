import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import CustomCursor from "@/components/layout/CustomCursor";
import Preloader from "@/components/layout/Preloader";
import GlobalScene from "@/components/3d/GlobalScene";
import Navigation from "@/components/layout/Navigation";
import FloatingBot from "@/components/layout/FloatingBot";

import WarningSuppressor from "@/components/layout/WarningSuppressor";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Somay Kousis | Builder",
  description: "Digital identity of Somay Kousis, Machine Learning & Product-focused builder.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} antialiased`}
    >
      <body className="relative min-h-full flex flex-col bg-background text-foreground">
        <WarningSuppressor />
        <Preloader />
        <Navigation />
        <div className="cinematic-noise" />
        <CustomCursor />
        <GlobalScene />
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
