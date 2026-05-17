import WorkDetailContent from "@/components/sections/WorkDetailContent";

export default async function WorkPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <WorkDetailContent slug={slug} />;
}
