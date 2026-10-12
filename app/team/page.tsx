import type { Metadata } from "next";
import PageBanner from "@/app/components/ui/PageBanner";
import TeamGrid from "@/app/components/TeamGrid";

export const metadata: Metadata = { title: "Our Team" };

export default function TeamPage() {
  return (
    <>
      <PageBanner title="Our Team" />
      <TeamGrid />
   
    </>
  );
}
