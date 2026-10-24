import Image from "next/image";
import Link from "next/link";
import { blogs } from "@/app/data/data";
import type { BlogPost } from "@/app/types";
import ButtonLink from "../ui/ButtonLink";
import Icon from "../ui/Icons";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

export function BlogCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <Reveal delay={(index % 3) * 130} className="h-full">
      <article className="group flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-[0_6px_24px_-12px_rgba(16,52,90,0.25)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_45px_-20px_rgba(8,102,178,0.5)]">
        <Link
          href={`/blog/${post.slug}`}
          className="relative block aspect-[16/7.5] overflow-hidden"
        >
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <span className="absolute left-4 top-4 rounded-full bg-teal px-3 py-1 text-[11px] font-semibold text-white shadow">
            {post.category}
          </span>
        </Link>
        <div className="flex flex-1 flex-col px-6 pb-6 pt-4">
          <p className="flex items-center gap-2 text-[13px] text-muted">
            <Icon name="calendar" className="h-4 w-4 text-teal" />
            {post.date}
          </p>
          <h3 className="mt-2 flex-1 text-[18px] font-semibold leading-[1.35] text-navy transition-colors group-hover:text-primary">
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </h3>
          <Link
            href={`/blog/${post.slug}`}
            className="mt-4 inline-flex items-center gap-2 text-[14px] font-semibold text-primary transition-colors hover:text-teal-dark"
          >
            Read More
            <Icon
              name="arrow"
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5"
            />
          </Link>
        </div>
      </article>
    </Reveal>
  );
}

export default function Insights() {
  return (
    <section className="py-14 sm:py-16 lg:py-16 bg-white">
      <div className="mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Latest Blog"
          title="Insights &"
          highlight="Updates"
          description="Stay informed with the latest news, trends and advancements in the pharmaceutical industry."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {blogs.slice(0, 3).map((post, i) => (
            <BlogCard key={post.slug} post={post} index={i} />
          ))}
        </div>

        <Reveal className="mt-10 text-center">
          <ButtonLink href="/blog" className="min-w-[220px]">
            View All Blog
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
