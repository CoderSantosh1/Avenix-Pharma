import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import Reveal from "./Reveal";

type Item = {
  href: string;
  title: string;
  image: string;
  meta?: string;
  active?: boolean;
};

export function SidebarBox({
  title,
  children,
  delay = 0,
}: {
  title: string;
  children: ReactNode;
  delay?: number;
}) {
  return (
    <Reveal variant="right" delay={delay}>
      <div className="rounded-2xl bg-white p-6 shadow-[0_10px_35px_-18px_rgba(16,52,90,0.3)]">
        <h3 className="text-[20px] font-bold leading-[1.3] text-navy sm:text-[22px]">{title}</h3>
        <span className="mb-5 mt-3 block h-[3px] w-14 rounded-full bg-teal" />
        {children}
      </div>
    </Reveal>
  );
}

/** Thumbnail list used in detail-page sidebars (services, products, posts). */
export default function SidebarList({ items }: { items: Item[] }) {
  return (
    <ul className="divide-y divide-line">
      {items.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            className={`group flex items-center gap-4 rounded-lg py-3 transition-all duration-300 hover:translate-x-1 ${
              item.active ? "translate-x-1" : ""
            }`}
          >
            <span className="relative h-[66px] w-[86px] shrink-0 overflow-hidden rounded-lg">
              <Image
                src={item.image}
                alt=""
                fill
                sizes="86px"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </span>
            <span className="min-w-0">
              {item.meta && (
                <span className="block text-[12px] text-muted">{item.meta}</span>
              )}
              <span
                className={`block text-[15px] font-semibold leading-snug transition-colors group-hover:text-teal-dark ${
                  item.active ? "text-teal-dark" : "text-navy"
                }`}
              >
                {item.title}
              </span>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
