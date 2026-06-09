import { Metadata } from "next";
import AboutContent from "@/components/sections/AboutContent";

export const metadata: Metadata = {
  title: "About | Somay Kousis",
  description: "Career narrative and AI/ML engineering focus for Somay Kousis.",
};

export default function AboutPage() {
  return <AboutContent />;
}
