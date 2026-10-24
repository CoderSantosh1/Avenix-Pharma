import Image from "next/image";
import Link from "next/link";
import { assets } from "@/app/data/data";

type Crumb = { name: string; href?: string };

/** Inner-page hero: pill background image with title and breadcrumb. */
export default function PageBanner({
  title,
  crumbs = [],
}: {
  title: string;
  crumbs?: Crumb[];
}) {
  const trail: Crumb[] = [{ name: "Home", href: "/" }, ...crumbs];

  return (
    <section className="relative isolate flex min-h-[240px] items-center justify-center overflow-hidden bg-[#4a97d2] py-16 sm:min-h-[320px]">
      {/* Background image; shifted up slightly to hide the dark strip on its top edge */}
      <div className="absolute inset-x-0 -top-3 bottom-0 -z-10">
        <Image
          src={assets.pageBanner}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-bottom motion-safe:animate-kenburns"
        />
      </div>

      {/* Subtle dark overlay for depth and text contrast */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-[#04203a]/55 via-[#04203a]/35 to-[#04203a]/55"
      />

      <div className="relative z-10 px-4 text-center text-white">
        <h1 className="animate-fade-up text-[36px] font-bold tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)] sm:text-[48px] lg:text-[56px]">
          {title}
        </h1>

        <nav
          aria-label="Breadcrumb"
          className="animate-fade-up mt-3 [animation-delay:150ms]"
        >
          <ol className="flex flex-wrap items-center justify-center gap-3 text-[15px] drop-shadow-[0_1px_4px_rgba(0,0,0,0.25)] sm:text-[17px]">
            {trail.map((crumb, i) => (
              <li key={crumb.name} className="flex items-center gap-3">
                {i > 0 && <span className="text-white/70">/</span>}
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="text-white/90 transition hover:text-aqua"
                  >
                    {crumb.name}
                  </Link>
                ) : (
                  <span className="text-white">{crumb.name}</span>
                )}
              </li>
            ))}
            <li className="flex items-center gap-3">
              <span className="text-white/70">/</span>
              <span>{title}</span>
            </li>
          </ol>
        </nav>
      </div>
    </section>
  );
}
