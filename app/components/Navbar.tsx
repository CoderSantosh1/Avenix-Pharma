"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "@/public/logo_nav.png";
import { navLinks } from "@/app/data/data";
import Icon from "./ui/Icons";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(window.scrollY > 20);
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu after navigating.
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-nav/95 shadow-[0_8px_30px_-12px_rgba(6,40,80,0.6)] backdrop-blur-md"
          : "bg-nav"
      }`}
    >
      <nav
        className={`mx-auto flex w-full items-center justify-between px-5 transition-all duration-300 md:px-10 lg:px-[60px] ${
          scrolled ? "min-h-[70px]" : "min-h-[88px]"
        }`}
      >
        <Link href="/" className="shrink-0 transition-transform hover:scale-105">
          <Image
            src={Logo}
            alt="Avenix Pharma"
            priority
            className={`h-auto object-contain transition-all duration-300 ${
              scrolled ? "w-[140px]" : "w-[160px]"
            }`}
          />
        </Link>

        <div className="hidden items-center gap-6 lg:flex xl:gap-9">
          {navLinks.map((link) => {
            const active = isActive(pathname, link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`group relative py-3 text-[16px] font-medium text-white transition-colors hover:text-cyan-200 ${
                  active ? "text-white" : ""
                }`}
              >
                {link.name}
                <span
                  className={`absolute bottom-0 left-0 h-[4px] w-full origin-left rounded-full bg-aqua transition-transform duration-300 ${
                    active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        <Link
          href="/enquiry"
          className="shine group hidden h-[43px] min-w-[176px] items-center justify-center gap-3 rounded-full border-2 border-white bg-gradient-to-r from-[#00bfae] to-[#00a7bd] px-6 text-[15px] font-semibold text-white transition-all hover:-translate-y-0.5 hover:brightness-110 lg:flex"
        >
          Enquiry
          <Icon
            name="arrow"
            className="h-4 w-4 transition-transform group-hover:translate-x-1"
          />
        </Link>

        {/* Hamburger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="relative flex h-11 w-11 items-center justify-center rounded-full border border-white/60 lg:hidden"
        >
          <span
            className={`absolute h-[2px] w-5 bg-white transition-all duration-300 ${
              open ? "rotate-45" : "-translate-y-[6px]"
            }`}
          />
          <span
            className={`absolute h-[2px] w-5 bg-white transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`absolute h-[2px] w-5 bg-white transition-all duration-300 ${
              open ? "-rotate-45" : "translate-y-[6px]"
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden bg-[#0763a8] transition-[max-height] duration-500 ease-in-out lg:hidden ${
          open ? "max-h-[600px]" : "max-h-0"
        }`}
      >
        <div className="flex flex-col px-5 pb-6 pt-2">
          {navLinks.map((link, i) => (
            <Link
              key={link.name}
              href={link.href}
              style={{ animationDelay: `${i * 50}ms` }}
              className={`${open ? "animate-slide-down" : ""} flex items-center justify-between border-b border-white/10 py-3 text-[16px] font-medium ${
                isActive(pathname, link.href) ? "text-aqua" : "text-white"
              }`}
            >
              {link.name}
              <Icon name="chevron" className="h-4 w-4 opacity-60" />
            </Link>
          ))}
          <Link
            href="/enquiry"
            className="mt-5 flex h-12 items-center justify-center gap-2 rounded-full border-2 border-white bg-gradient-to-r from-[#00bfae] to-[#00a7bd] font-semibold text-white"
          >
            Enquiry <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Scroll progress bar */}
      <span
        className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-aqua to-teal transition-[width] duration-150"
        style={{ width: `${progress}%` }}
        aria-hidden="true"
      />
    </header>
  );
}
