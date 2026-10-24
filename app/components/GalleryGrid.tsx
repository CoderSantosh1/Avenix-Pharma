"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import categoryData from "@/app/data/category.json";
import type { CategoryConfig, GalleryCategory } from "@/app/types";
import Icon from "./ui/Icons";
import Reveal from "./ui/Reveal";

const categoryConfig = categoryData as unknown as CategoryConfig;
const galleryConfig =
  categoryConfig.categories.Pharma.sections.Gallery.variants.PharmaGallery1;
const categories = galleryConfig.categories;
const gallery = galleryConfig.items;

export default function GalleryGrid() {
  const [filter, setFilter] = useState<GalleryCategory>("All");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items = filter === "All" ? gallery : gallery.filter((g) => g.category === filter);

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(null);
      if (e.key === "ArrowRight") setOpenIndex((i) => (i! + 1) % items.length);
      if (e.key === "ArrowLeft") setOpenIndex((i) => (i! - 1 + items.length) % items.length);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [openIndex, items.length]);

  const active = openIndex !== null ? items[openIndex] : null;

  return (
    <>
      <div className="mb-10 flex flex-wrap justify-center gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setFilter(cat)}
            className={`rounded-full px-5 py-2 text-[14px] font-medium transition-all duration-300 ${
              filter === cat
                ? "bg-primary text-white shadow-[0_10px_20px_-10px_rgba(8,102,178,0.8)]"
                : "bg-white text-navy hover:-translate-y-0.5 hover:text-primary hover:shadow"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <Reveal key={`${filter}-${item.caption}`} variant="zoom" delay={(i % 3) * 120}>
            <button
              type="button"
              onClick={() => setOpenIndex(i)}
              className="group relative block aspect-[4/3.3] w-full overflow-hidden rounded-2xl shadow-[0_10px_30px_-15px_rgba(16,52,90,0.4)]"
            >
              <Image
                src={item.src}
                alt={item.caption}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <span className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-t from-[#0a3d6e]/85 via-[#0866b2]/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <span className="flex h-14 w-14 scale-50 items-center justify-center rounded-full bg-white text-primary transition-transform duration-500 group-hover:scale-100">
                  <Icon name="search" className="h-6 w-6" />
                </span>
                <span className="mt-4 translate-y-4 text-[17px] font-semibold text-white transition-transform duration-500 group-hover:translate-y-0">
                  {item.caption}
                </span>
                <span className="translate-y-4 text-[13px] text-white/80 transition-transform delay-75 duration-500 group-hover:translate-y-0">
                  {item.category}
                </span>
              </span>
            </button>
          </Reveal>
        ))}
      </div>

      {/* Lightbox */}
      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.caption}
          onClick={() => setOpenIndex(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#04182f]/90 px-4 py-20 backdrop-blur-sm animate-zoom-in"
        >
          {/* Close button pinned to the viewport so it is always visible */}
          <button
            type="button"
            aria-label="Close"
            onClick={() => setOpenIndex(null)}
            className="fixed right-4 top-4 z-[110] flex h-12 w-12 items-center justify-center rounded-full bg-white text-navy shadow-lg ring-2 ring-white/40 transition hover:rotate-90 hover:bg-teal hover:text-white sm:right-6 sm:top-6"
          >
            <Icon name="close" className="h-6 w-6" />
          </button>

          <div
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              key={openIndex}
              className="relative mx-auto aspect-[4/3] max-h-[calc(100vh-11rem)] w-full max-w-[calc((100vh-11rem)*4/3)] overflow-hidden rounded-2xl animate-zoom-in"
            >
              <Image
                src={active.src}
                alt={active.caption}
                fill
                sizes="(max-width: 900px) 100vw, 900px"
                className="object-cover"
              />
            </div>
            <p className="mt-4 text-center text-[16px] font-medium text-white">
              {active.caption}
              <span className="ml-3 text-white/60">
                {openIndex! + 1} / {items.length}
              </span>
            </p>

            <button
              type="button"
              aria-label="Previous image"
              onClick={() => setOpenIndex((i) => (i! - 1 + items.length) % items.length)}
              className="absolute left-2 top-[45%] flex h-12 w-12 items-center justify-center rounded-full bg-white/85 text-navy transition hover:bg-teal hover:text-white xl:-left-16"
            >
              <Icon name="chevron-left" className="h-6 w-6" />
            </button>
            <button
              type="button"
              aria-label="Next image"
              onClick={() => setOpenIndex((i) => (i! + 1) % items.length)}
              className="absolute right-2 top-[45%] flex h-12 w-12 items-center justify-center rounded-full bg-white/85 text-navy transition hover:bg-teal hover:text-white xl:-right-16"
            >
              <Icon name="chevron" className="h-6 w-6" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
