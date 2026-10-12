import type { Metadata } from "next";
import BlogIndex from "@/app/components/BlogIndex";

export const metadata: Metadata = { title: "Blog" };

export default function BlogPage() {
  return <BlogIndex page={1} />;
}
