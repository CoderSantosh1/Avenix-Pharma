import type { Metadata } from "next";
import { products } from "@/app/data/data";
import PageBanner from "@/app/components/ui/PageBanner";
import SectionHeading from "@/app/components/ui/SectionHeading";
import { ProductCard } from "@/app/components/home/Products";

export const metadata: Metadata = { title: "Products" };

export default function ProductsPage() {
  return (
    <>
      <PageBanner title="Product" />

      <section className="bg-soft px-4 py-16 sm:px-6 lg:py-20">
        <div className="mx-auto max-w-[1220px]">
          <SectionHeading
            align="left"
            label="Our Products"
            title="Quality Medicines for a"
            highlight="Healthier Tomorrow"
            description="We offer a wide range of pharmaceutical products across various therapeutic segments."
            className="mb-10"
          />

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-6">
            {products.map((product, i) => (
              <ProductCard key={product.slug} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
