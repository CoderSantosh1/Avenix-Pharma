import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { assets } from "@/app/data/data";
import { blogCategories, blogs } from "@/app/data/data";
import PageBanner from "@/app/components/ui/PageBanner";
import Reveal from "@/app/components/ui/Reveal";
import Icon from "@/app/components/ui/Icons";
import SidebarList, { SidebarBox } from "@/app/components/ui/SidebarCard";

export function generateStaticParams() {
  return blogs.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  return { title: blogs.find((b) => b.slug === slug)?.title ?? "Blog" };
}

export default async function BlogDetailPage({
  params,
}: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = blogs.find((b) => b.slug === slug);
  if (!post) notFound();

  const recent = blogs.filter((b) => b.slug !== post.slug).slice(0, 3);

  return (
    <>
      <PageBanner title="Blog Detail" crumbs={[{ name: "Blog", href: "/blog" }]} />

      <section className="py-14 sm:py-16 lg:py-16 bg-soft">
        <div className="mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-8 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_360px] lg:gap-10">
          <article>
            <Reveal>
              <div className="mb-3 flex items-center gap-4">
                <p className="text-[13px] font-semibold uppercase tracking-[3px] text-teal">
                  Blog Details
                </p>
                <span className="origin-left scale-x-0 transition-transform delay-300 duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-data-[visible=true]/reveal:scale-x-100 h-[2px] w-14 bg-teal" />
              </div>
              <h2 className="text-[28px] font-bold leading-[1.2] tracking-[-0.02em] text-navy sm:text-[34px] lg:text-[40px]">
                {post.title}
              </h2>
              <div className="mt-3 flex flex-wrap gap-6 text-[14px] text-muted">
                <span className="flex items-center gap-2">
                  <Icon name="calendar" className="h-4 w-4 text-teal" />
                  {post.date}
                </span>
                <span className="flex items-center gap-2">
                  <Icon name="user" className="h-4 w-4 text-teal" />
                  Admin
                </span>
                <span className="flex items-center gap-2">
                  <Icon name="folder" className="h-4 w-4 text-teal" />
                  {post.category}
                </span>
              </div>
            </Reveal>

            <Reveal variant="zoom" className="mt-6">
              <div className="group relative aspect-[16/10] sm:aspect-[16/7] lg:aspect-[800/280] overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 800px"
                  className="object-cover transition-transform duration-[1500ms] group-hover:scale-105"
                />
              </div>
            </Reveal>

            <Reveal>
              <p className="mt-6 text-[15px] leading-[1.75] text-muted sm:text-[16px]">
                The pharmaceutical industry is constantly evolving, driven by
                advancements in science, technology, and a commitment to better
                healthcare. Innovation plays a vital role in developing new
                treatments, improving existing medications, and enhancing
                patient outcomes worldwide.
              </p>
            </Reveal>

            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-[1fr_190px]">
              <div className="space-y-6">
                <Reveal>
                  <h3 className="text-[20px] font-bold leading-[1.3] text-navy sm:text-[22px]">The Role of Innovation</h3>
                  <p className="mt-2 text-[15px] leading-[1.75] text-muted sm:text-[16px]">
                    Innovation helps in the discovery of new drugs, advanced
                    drug delivery systems, and more effective treatment
                    solutions. With the use of modern research techniques and
                    technology, pharmaceutical companies are now able to
                    address complex health challenges and improve the quality
                    of life for millions of people.
                  </p>
                </Reveal>
                <Reveal>
                  <h3 className="text-[20px] font-bold leading-[1.3] text-navy sm:text-[22px]">Advancements in Research</h3>
                  <p className="mt-2 text-[15px] leading-[1.75] text-muted sm:text-[16px]">
                    Modern research and development are focused on precision
                    medicine, biologics, and personalized treatments. These
                    advancements allow for more targeted therapies with fewer
                    side effects, leading to better patient care and improved
                    treatment results.
                  </p>
                </Reveal>
              </div>
              <Reveal variant="right">
                <div className="relative h-full min-h-[200px] overflow-hidden rounded-2xl motion-safe:animate-float-slow">
                  <Image src={assets.blogInline} alt="" fill sizes="190px" className="object-cover" />
                </div>
              </Reveal>
            </div>

            <Reveal className="mt-6">
              <blockquote className="relative rounded-2xl border-l-4 border-teal bg-white p-6 text-[17px] italic leading-relaxed text-navy shadow-sm">
                <Icon name="quote" className="absolute right-5 top-4 h-10 w-10 text-teal/25" />
                Collaboration, research, and technology will remain key in
                building a healthier world for generations to come.
              </blockquote>
            </Reveal>

            <Reveal className="mt-6">
              <h3 className="text-[20px] font-bold leading-[1.3] text-navy sm:text-[22px]">A Healthier Tomorrow</h3>
              <p className="mt-2 text-[15px] leading-[1.75] text-muted sm:text-[16px]">
                As the industry continues to innovate, the future looks
                promising with more effective, safe, and accessible medicines.
                Collaboration, research, and technology will remain key in
                building a healthier world for generations to come.
              </p>
            </Reveal>
          </article>

          <aside className="space-y-8 lg:sticky lg:top-28 lg:self-start">
            <SidebarBox title="Recent Posts">
              <SidebarList
                items={recent.map((b) => ({
                  href: `/blog/${b.slug}`,
                  title: b.title,
                  image: b.image,
                  meta: b.date,
                }))}
              />
            </SidebarBox>

            <SidebarBox title="Categories" delay={120}>
              <ul className="divide-y divide-line">
                {blogCategories.map((c) => (
                  <li key={c.name}>
                    <Link
                      href="/blog"
                      className="group flex items-center gap-3 py-3 text-[15px] text-navy transition-colors hover:text-teal-dark"
                    >
                      <span className="h-0 w-0 border-y-[5px] border-l-[7px] border-y-transparent border-l-primary transition-transform group-hover:translate-x-1" />
                      <span className="flex-1">{c.name}</span>
                      <span className="rounded-full bg-[#e3f4f8] px-3 py-0.5 text-[12px] font-semibold text-teal-dark">
                        {String(c.count).padStart(2, "0")}
                      </span>
                      <Icon name="chevron" className="h-4 w-4" />
                    </Link>
                  </li>
                ))}
              </ul>
            </SidebarBox>
          </aside>
        </div>
      </section>
    </>
  );
}
