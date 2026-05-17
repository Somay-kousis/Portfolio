import { Metadata } from "next";
import WritingContent from "@/components/sections/WritingContent";

export const metadata: Metadata = {
  title: "Writing | Somay Kousis",
  description: "Fragmented reflections.",
};

export default function WritingPage() {
  return <WritingContent />;
}
