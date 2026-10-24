import type { Metadata } from "next";
import PageBanner from "@/app/components/ui/PageBanner";
import SectionHeading from "@/app/components/ui/SectionHeading";
import GalleryGrid from "@/app/components/GalleryGrid";

export const metadata: Metadata = { title: "Gallery" };

export default function GalleryPage() {
  return (
    <>
      <PageBanner title="Gallery" />
      <section className="py-14 sm:py-16 lg:py-16bg-soft">
        <div className="mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Gallery"
            title="Our"
            highlight="Gallery"
            description="A glimpse of our facilities, products and commitment to better healthcare."
          />
          <GalleryGrid />
        </div>
      </section>
    </>
  );
}
