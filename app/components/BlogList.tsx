import Link from "next/link";
import { blogs } from "@/app/data/data";
import { BlogCard } from "./home/Insights";
import Icon from "./ui/Icons";

export const BLOG_PAGE_SIZE = 6;
export const blogTotalPages = Math.ceil(blogs.length / BLOG_PAGE_SIZE);

const pageHref = (n: number) => (n === 1 ? "/blog" : `/blog/page/${n}`);

const boxClass =
  "flex h-[42px] w-[42px] items-center justify-center rounded-md text-[15px] font-medium transition-all duration-300";
const idleClass =
  "bg-white text-navy shadow-[0_2px_10px_rgba(16,52,90,0.08)] hover:-translate-y-0.5 hover:bg-teal hover:text-white";

/** One page of blog cards plus link-based pagination (/blog, /blog/page/2, ...). */
export default function BlogList({ page = 1 }: { page?: number }) {
  const posts = blogs.slice((page - 1) * BLOG_PAGE_SIZE, page * BLOG_PAGE_SIZE);

  return (
    <div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, i) => (
          <BlogCard key={post.slug} post={post} index={i} />
        ))}
      </div>

      {blogTotalPages > 1 && (
        <nav
          aria-label="Blog pagination"
          className="mt-10 flex flex-wrap items-center justify-center gap-2.5"
        >
          {page > 1 ? (
            <Link href={pageHref(page - 1)} aria-label="Previous page" className={`${boxClass} ${idleClass}`}>
              <Icon name="chevron-left" className="h-4 w-4" />
            </Link>
          ) : (
            <span aria-hidden="true" className={`${boxClass} bg-white text-navy opacity-40`}>
              <Icon name="chevron-left" className="h-4 w-4" />
            </span>
          )}

          {Array.from({ length: blogTotalPages }, (_, i) => i + 1).map((n) =>
            n === page ? (
              <span
                key={n}
                aria-current="page"
                className={`${boxClass} bg-teal text-white shadow-[0_8px_18px_-8px_rgba(8,169,197,0.9)]`}
              >
                {n}
              </span>
            ) : (
              <Link key={n} href={pageHref(n)} aria-label={`Page ${n}`} className={`${boxClass} ${idleClass}`}>
                {n}
              </Link>
            ),
          )}

          {page < blogTotalPages ? (
            <Link href={pageHref(page + 1)} aria-label="Next page" className={`${boxClass} ${idleClass}`}>
              <Icon name="chevron" className="h-4 w-4" />
            </Link>
          ) : (
            <span aria-hidden="true" className={`${boxClass} bg-white text-navy opacity-40`}>
              <Icon name="chevron" className="h-4 w-4" />
            </span>
          )}
        </nav>
      )}
    </div>
  );
}
