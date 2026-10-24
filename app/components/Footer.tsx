import Image from "next/image";
import Link from "next/link";
import { assets, contactInfo, footer, services } from "@/app/data/data";
import Icon, { type Icon as IconName } from "./ui/Icons";
import Reveal from "./ui/Reveal";

function FooterHeading({ children }: { children: string }) {
  return (
    <div className="mb-6">
      <h3 className="text-[19px] font-semibold text-white">{children}</h3>
      <span className="mt-3 block h-[4px] w-7 rounded-full bg-teal" />
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-deep text-white">
      {/* animated decorative rings */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full border-[40px] border-white/[0.03] animate-spin-slow" />
      <div className="pointer-events-none absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-teal/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-[1300px] grid-cols-1 gap-10 px-6 pb-10 pt-16 sm:grid-cols-2 lg:grid-cols-[1.25fr_0.8fr_1.1fr_1fr] lg:px-10">
        <Reveal className="lg:border-r lg:border-white/15 lg:pr-10">
          <Image
            src={assets.logoNav}
            alt={footer.logoAlt}
            width={1560}
            height={470}
            className="h-auto w-[230px]"
          />
          <p className="mt-6 max-w-[330px] text-[15px] leading-[1.75] text-white/85">
            {footer.description}
          </p>
        </Reveal>

        <Reveal delay={100}>
          <FooterHeading>{footer.quickLinksTitle}</FooterHeading>
          <ul className="space-y-3">
            {footer.quickLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="group inline-flex items-center gap-3 text-[15px] text-white/90 transition hover:text-aqua"
                >
                  <Icon
                    name={footer.quickLinkIcon as IconName}
                    className="h-4 w-4 text-aqua transition-transform group-hover:translate-x-1"
                  />
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={200}>
          <FooterHeading>{footer.servicesTitle}</FooterHeading>
          <ul className="space-y-2">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group inline-flex items-center gap-3 text-[15px] text-white/90 transition hover:text-aqua"
                >
                  <Icon
                    name={footer.servicesLinkIcon as IconName}
                    className="h-4 w-4 text-aqua transition-transform group-hover:translate-x-1"
                  />
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={300}>
          <FooterHeading>{footer.contactTitle}</FooterHeading>
          <ul className="space-y-5 text-[15px]">
            <li className="flex items-center gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0e4f7f] transition hover:bg-teal">
                <Icon name={footer.contactIcons.address as IconName} className="h-5 w-5" />
              </span>
              <span className="leading-relaxed hover:text-aqua ">
                {contactInfo.addressLines.map((line, index) => (
                  <span key={`${line}-${index}`} className="block">{line}</span>
                ))}
              </span>
            </li>
            <li>
              <a
                href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-4 transition hover:text-aqua"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0e4f7f] transition hover:bg-teal hover:text-white">
                  <Icon name={footer.contactIcons.phone as IconName} className="h-5 w-5" />
                </span>
                {contactInfo.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-4 transition hover:text-aqua"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0e4f7f] transition hover:bg-teal hover:text-white">
                  <Icon name={footer.contactIcons.email as IconName} className="h-5 w-5" />
                </span>
                {contactInfo.email}
              </a>
            </li>
          </ul>
        </Reveal>
      </div>

      <div className="relative mx-auto flex max-w-[1300px] flex-col items-center justify-between gap-5 border-t border-white/15 px-6 py-7 sm:flex-row lg:px-10">
        <p className="text-[15px] text-white/90">
          {footer.copyrightText}
        </p>
        <div className="flex gap-4">
          {footer.socialLinks.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.name}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-teal"
            >
              <Icon name={s.name as IconName} className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
