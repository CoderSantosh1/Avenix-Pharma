import Image from "next/image";
import Link from "next/link";
import { products } from "@/app/data/data";
import type { Product } from "@/app/types";
import ButtonLink from "../ui/ButtonLink";
import Icon from "../ui/Icons";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

export function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <Reveal variant="flip" delay={(index % 6) * 90} className="h-full">
      <Link
        href={`/products/${product.slug}`}
        className="group block h-full overflow-hidden rounded-xl bg-white shadow-[0_4px_16px_rgba(15,52,91,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_22px_40px_-18px_rgba(8,102,178,0.5)]"
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-[#eef3f8]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
          />
          <span className="absolute right-3 top-3 flex h-9 w-9 translate-y-[-8px] items-center justify-center rounded-full bg-white/90 text-primary opacity-0 shadow transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <Icon name="search" className="h-4 w-4" />
          </span>
        </div>
        <div className="px-4 py-4">
          <h3 className="heading-sm">{product.name}</h3>
          <span className="mt-1 inline-flex items-center gap-1 text-[13px] font-medium text-primary transition-colors group-hover:text-teal-dark">
            View Products
            <Icon
              name="arrow"
              className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
            />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}

export default function Products() {
  return (
    <section className="w-full bg-white section-y px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1270px]">
        <SectionHeading
          label="Our Products"
          title="Quality Medicines for a"
          highlight="Healthier Tomorrow"
          description="We offer a wide range of pharmaceutical products across various therapeutic segments."
          className="mb-10"
        />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-6">
          {products.slice(0, 6).map((product, i) => (
            <ProductCard key={product.slug} product={product} index={i} />
          ))}
        </div>

        <Reveal className="mt-10 text-center">
          <ButtonLink href="/products" className="min-w-[230px]">
            View All Products
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
