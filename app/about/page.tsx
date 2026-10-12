import type { Metadata } from "next";
import PageBanner from "@/app/components/ui/PageBanner";
import AboutUs from "@/app/components/home/About";
import Choose from "@/app/components/home/Choose";

import Products from "@/app/components/home/Products";


export const metadata: Metadata = { title: "About Us" };

export default function AboutPage() {
  return (
    <>
      <PageBanner title="About" />
      <AboutUs extended />
      <Choose />
      <Products />
    </>
  );
}
