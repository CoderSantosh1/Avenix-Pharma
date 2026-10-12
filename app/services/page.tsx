import type { Metadata } from "next";
import PageBanner from "@/app/components/ui/PageBanner";
import Services from "@/app/components/home/Services";


export const metadata: Metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <>
      <PageBanner title="Services" />
      <Services all />
  
    </>
  );
}
