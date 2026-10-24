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

      <section className="py-14 sm:py-16 lg:py-16bg-soft">
        <div className="mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <SectionHeading
            align="left"
            label="Our Products"
            title="Quality Medicines for a"
            highlight="Healthier Tomorrow"
            description="We offer a wide range of pharmaceutical products across various therapeutic segments."
          />

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-6">
            {products.map((product, i) => (
              <ProductCard key={product.slug} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
