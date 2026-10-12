import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import BlogIndex from "@/app/components/BlogIndex";
import { blogTotalPages } from "@/app/components/BlogList";

export function generateStaticParams() {
  return Array.from({ length: Math.max(blogTotalPages - 1, 1) }, (_, i) => ({
    page: String(i + 2),
  }));
}

export async function generateMetadata({
  params,
}: PageProps<"/blog/page/[page]">): Promise<Metadata> {
  const { page } = await params;
  return { title: `Blog - Page ${page}` };
}

export default async function BlogPagedPage({
  params,
}: PageProps<"/blog/page/[page]">) {
  const { page } = await params;
  const n = Number(page);

  if (n === 1) redirect("/blog");
  if (!Number.isInteger(n) || n < 1 || n > blogTotalPages) notFound();

  return <BlogIndex page={n} />;
}
