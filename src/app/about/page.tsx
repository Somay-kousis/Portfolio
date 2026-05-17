import { Metadata } from "next";
import AboutContent from "@/components/sections/AboutContent";

export const metadata: Metadata = {
  title: "About | Somay Kousis",
  description: "Identity and Philosophy of Somay Kousis.",
};

export default function AboutPage() {
  return <AboutContent />;
}
