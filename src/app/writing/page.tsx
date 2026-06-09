import { Metadata } from "next";
import WritingContent from "@/components/sections/WritingContent";

export const metadata: Metadata = {
  title: "Lab Notes | Somay Kousis",
  description: "Short notes on AI systems, data, and product judgment.",
};

export default function WritingPage() {
  return <WritingContent />;
}
