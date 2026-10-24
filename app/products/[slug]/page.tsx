import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { products } from "@/app/data/data";
import PageBanner from "@/app/components/ui/PageBanner";
import Reveal from "@/app/components/ui/Reveal";
import Icon from "@/app/components/ui/Icons";
import SidebarList, { SidebarBox } from "@/app/components/ui/SidebarCard";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/products/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  return { title: products.find((p) => p.slug === slug)?.name ?? "Product" };
}

const features = [
  "Manufactured in WHO-GMP certified facilities",
  "Tested for purity, potency and stability",
  "Available in multiple strengths and pack sizes",
  "Suitable for domestic and export markets",
];

export default async function ProductDetailPage({
  params,
}: PageProps<"/products/[slug]">) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const related = products.filter((p) => p.slug !== product.slug).slice(0, 6);

  return (
    <>
      <PageBanner title="Product Detail" crumbs={[{ name: "Products", href: "/products" }]} />

      <section className="bg-soft section-y px-4 sm:px-6">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-10 lg:grid-cols-[1fr_370px]">
          <div>
            <Reveal>
              <div className="mb-3 flex items-center gap-4">
                <p className="eyebrow">
                  Product Detail
                </p>
                <span className="grow-line h-[2px] w-14 bg-primary" />
              </div>
              <h2 className="heading-section">
                {product.name}
              </h2>
            </Reveal>

            <Reveal variant="zoom" className="mt-6">
              <div className="group relative aspect-[830/350] min-h-[240px] overflow-hidden rounded-2xl bg-white shadow-lg">
                <Image
                  src={product.heroImage ?? product.image}
                  alt={product.name}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 830px"
                  className="object-cover transition-transform duration-[1500ms] group-hover:scale-105"
                />
              </div>
            </Reveal>

            <div className="mt-6 space-y-4 text-body">
              <Reveal>
                <p>
                  {product.summary} These products combine the benefits of
                  modern pharmaceutical science with rigorous quality control to
                  support overall health and wellness.
                </p>
              </Reveal>
              <Reveal delay={80}>
                <p>
                  Manufactured under strict quality standards, our{" "}
                  {product.name.toLowerCase()} are safe, effective, and
                  formulated with high-quality ingredients to meet diverse
                  health needs. We focus on innovation and research to develop
                  science-backed formulations that promote better health and
                  well-being for people of all age groups.
                </p>
              </Reveal>
              <Reveal delay={160}>
                <p>
                  Whether it’s for daily wellness, nutritional support, or
                  specific health goals, our range offers reliable and effective
                  solutions to help you live a healthier, more active life.
                </p>
              </Reveal>
            </div>

            <Reveal className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {features.map((f) => (
                <div
                  key={f}
                  className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 text-[15px] font-medium text-navy shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                    <Icon name="check" className="h-4 w-4" />
                  </span>
                  {f}
                </div>
              ))}
            </Reveal>
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <SidebarBox title="Related Products">
              <SidebarList
                items={related.map((p) => ({
                  href: `/products/${p.slug}`,
                  title: p.name,
                  image: p.image,
                }))}
              />
            </SidebarBox>
          </aside>
        </div>
      </section>
    </>
  );
}
