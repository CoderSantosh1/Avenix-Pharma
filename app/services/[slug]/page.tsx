import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { services } from "@/app/data/data";
import PageBanner from "@/app/components/ui/PageBanner";
import Reveal from "@/app/components/ui/Reveal";
import Icon from "@/app/components/ui/Icons";
import ButtonLink from "@/app/components/ui/ButtonLink";
import SidebarList, { SidebarBox } from "@/app/components/ui/SidebarCard";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  return { title: services.find((s) => s.slug === slug)?.title ?? "Service" };
}

export default async function ServiceDetailPage({
  params,
}: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const [first, ...rest] = service.title.split(" ");

  return (
    <>
      <PageBanner title="Service Detail" crumbs={[{ name: "Services", href: "/services" }]} />

      <section className="py-14 sm:py-16 lg:py-16bg-soft">
        <div className="mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-8 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_360px] lg:gap-10">
          <div>
            <Reveal>
              <div className="mb-3 flex items-center gap-4">
                <p className="text-[13px] font-semibold uppercase tracking-[3px] text-teal">
                  Service Detail
                </p>
                <span className="origin-left scale-x-0 transition-transform delay-300 duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-data-[visible=true]/reveal:scale-x-100 h-[2px] w-14 bg-teal" />
              </div>
              <h2 className="text-[28px] font-bold leading-[1.2] tracking-[-0.02em] text-navy sm:text-[34px] lg:text-[40px]">
                {first}
                <br />
                <span className="text-teal">{rest.join(" ")}</span>
              </h2>
            </Reveal>

            <Reveal variant="zoom" className="mt-6">
              <div className="group relative aspect-[16/10] sm:aspect-[16/7] lg:aspect-[790/310] overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src={service.heroImage}
                  alt={service.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 800px"
                  className="object-cover transition-transform duration-[1500ms] group-hover:scale-105"
                />
              </div>
            </Reveal>

            <div className="mt-6 space-y-4 text-[15px] leading-[1.75] text-muted sm:text-[16px]">
              {[...service.body, ...service.body].map((p, i) => (
                <Reveal key={i} delay={(i % 3) * 80}>
                  <p>{p}</p>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-8">
              <h3 className="text-[20px] font-bold leading-[1.3] text-navy sm:text-[22px]">Key Highlights</h3>
              <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {service.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 text-[15px] font-medium text-navy shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal text-white">
                      <Icon name="check" className="h-4 w-4" />
                    </span>
                    {h}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <aside className="space-y-8 lg:sticky lg:top-28 lg:self-start">
            <SidebarBox title="Our Services">
              <SidebarList
                items={services.map((s) => ({
                  href: `/services/${s.slug}`,
                  title: s.title,
                  image: s.image,
                  active: s.slug === service.slug,
                }))}
              />
            </SidebarBox>

            <Reveal variant="right" delay={150}>
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-teal-dark p-7 text-white">
                <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full border-[18px] border-white/10 motion-safe:animate-spin-slow" />
                <h3 className="text-[20px] font-bold leading-[1.3] sm:text-[22px]">Need this service?</h3>
                <p className="mt-2 text-[14px] text-white/85">
                  Talk to our experts and get a tailored proposal.
                </p>
                <ButtonLink href="/contact" variant="teal" className="mt-5">
                  Contact Us
                </ButtonLink>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>
    </>
  );
}
