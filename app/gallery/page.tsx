import type { Metadata } from "next";
import PageBanner from "@/app/components/ui/PageBanner";
import SectionHeading from "@/app/components/ui/SectionHeading";
import GalleryGrid from "@/app/components/GalleryGrid";

export const metadata: Metadata = { title: "Gallery" };

export default function GalleryPage() {
  return (
    <>
      <PageBanner title="Gallery" />
      <section className="bg-soft section-y px-4 sm:px-6">
        <div className="mx-auto max-w-[1240px]">
          <SectionHeading
            label="Our Gallery"
            title="Our"
            highlight="Gallery"
            description="A glimpse of our facilities, products and commitment to better healthcare."
            className="mb-10"
          />
          <GalleryGrid />
        </div>
      </section>
    </>
  );
}
