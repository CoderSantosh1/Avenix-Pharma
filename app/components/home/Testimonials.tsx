"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { testimonials } from "@/app/data/data";
import Icon from "../ui/Icons";
import SectionHeading from "../ui/SectionHeading";

function usePerView() {
  const [perView, setPerView] = useState(3);

  useEffect(() => {
    const update = () =>
      setPerView(window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return perView;
}

export default function Testimonials() {
  const perView = usePerView();
  const pages = Math.max(1, testimonials.length - perView + 1);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const current = Math.min(index, pages - 1);
  const next = useCallback(() => setIndex((i) => (Math.min(i, pages - 1) + 1) % pages), [pages]);
  const prev = () => setIndex((i) => (Math.min(i, pages - 1) - 1 + pages) % pages);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 4500);
    return () => clearInterval(id);
  }, [next, paused]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f2f8fc] to-white py-16 lg:py-20">
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-teal/10 blur-3xl animate-float-slow" />

      <div className="mx-auto max-w-[1270px] px-4 sm:px-6">
        <SectionHeading
          label="Testimonials"
          title="What Our"
          highlight="Clients Say"
          description="Trusted by healthcare professionals and partners worldwide for our quality and commitment."
          className="mb-10"
        />

        <div
          className="relative px-2 sm:px-12"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ transform: `translateX(-${(current * 100) / perView}%)` }}
            >
              {testimonials.map((t, i) => (
                <div
                  key={`${t.name}-${i}`}
                  className="shrink-0 px-2.5 py-4"
                  style={{ width: `${100 / perView}%` }}
                >
                  <article
                    className={`group h-full rounded-2xl bg-white p-6 shadow-[0_10px_30px_-15px_rgba(16,52,90,0.3)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_45px_-20px_rgba(8,102,178,0.5)] ${
                      i >= current && i < current + perView
                        ? "opacity-100"
                        : "opacity-40"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <Image
                        src={t.avatar}
                        alt={t.name}
                        className="h-[70px] w-[70px] shrink-0 rounded-full object-cover ring-4 ring-[#e6f2fa] transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="min-w-0 flex-1">
                        <h3 className="text-[16px] font-bold text-navy">{t.name}</h3>
                        <p className="text-[13px] text-muted">{t.role}</p>
                        <p className="text-[12px] text-muted">{t.location}</p>
                      </div>
                      <Icon
                        name="quote"
                        className="h-9 w-9 shrink-0 text-teal/50 transition-transform duration-500 group-hover:rotate-12 group-hover:text-teal"
                      />
                    </div>
                    <p className="mt-5 text-[14px] leading-[1.7] text-[#4d5d72]">
                      “{t.quote}”
                    </p>
                    <div className="mt-4 flex gap-1 text-amber-400">
                      {Array.from({ length: 5 }).map((_, s) => (
                        <Icon key={s} name="star" className="h-5 w-5" />
                      ))}
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={prev}
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-navy shadow-md transition hover:bg-primary hover:text-white sm:flex"
          >
            <Icon name="chevron-left" className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-navy shadow-md transition hover:bg-primary hover:text-white sm:flex"
          >
            <Icon name="chevron" className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {Array.from({ length: pages }).map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === current ? "w-8 bg-teal" : "w-2.5 bg-[#b9dcea] hover:bg-teal/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
