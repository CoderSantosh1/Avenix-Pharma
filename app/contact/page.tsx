import type { Metadata } from "next";
import Image from "next/image";
import ContactImage from "@/public/Contact/contact.jpg";
import { contactInfo } from "@/app/data/data";
import PageBanner from "@/app/components/ui/PageBanner";
import Reveal from "@/app/components/ui/Reveal";
import SectionHeading from "@/app/components/ui/SectionHeading";
import Icon, { type Icon as IconName } from "@/app/components/ui/Icons";
import EnquiryForm from "@/app/components/EnquiryForm";

export const metadata: Metadata = { title: "Contact Us" };

const cards: { title: string; lines: string[]; icon: IconName; href?: string }[] = [
  {
    title: "Call Us",
    lines: [contactInfo.phone, contactInfo.hours],
    icon: "phone",
    href: `tel:${contactInfo.phone.replace(/\s/g, "")}`,
  },
  {
    title: "Email Us",
    lines: [contactInfo.email, "We reply within 24 hours"],
    icon: "mail",
    href: `mailto:${contactInfo.email}`,
  },
  {
    title: "Our Location",
    lines: contactInfo.addressLines,
    icon: "pin",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageBanner title="Contact Us" />

      <section className="bg-soft px-4 py-16 sm:px-6 lg:py-20">
        <div className="mx-auto max-w-[1220px]">
          <SectionHeading
            label="Contact Us"
            title="Get in Touch"
            highlight="With Us"
            description="We are here to help you with all your pharmaceutical product inquiries, partnerships, and support. Feel free to reach out to us anytime."
            className="mb-10"
          />

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {cards.map((card, i) => {
              const body = (
                <>
                  <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#e6f2fa] text-primary transition-all duration-500 group-hover:rotate-[360deg] group-hover:bg-primary group-hover:text-white">
                    <Icon name={card.icon} className="h-7 w-7" />
                  </span>
                  <div>
                    <h3 className="text-[17px] font-bold text-navy">{card.title}</h3>
                    <p className="mt-1 text-[15px] text-navy/80">{card.lines[0]}</p>
                    <p className="text-[13px] text-muted">{card.lines[1]}</p>
                  </div>
                </>
              );
              const cls =
                "group flex h-full items-center gap-5 rounded-2xl bg-white p-6 shadow-[0_8px_30px_-18px_rgba(16,52,90,0.35)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_45px_-20px_rgba(8,102,178,0.5)]";
              return (
                <Reveal key={card.title} delay={i * 120}>
                  {card.href ? (
                    <a href={card.href} className={cls}>
                      {body}
                    </a>
                  ) : (
                    <div className={cls}>{body}</div>
                  )}
                </Reveal>
              );
            })}
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <Reveal variant="left" className="h-full">
              <div className="group relative h-full min-h-[300px] overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src={ContactImage}
                  alt="Pharmaceutical vials and capsules"
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover transition-transform duration-[1500ms] group-hover:scale-105"
                />
              </div>
            </Reveal>

            <Reveal variant="right">
              <div className="rounded-2xl bg-white p-6 shadow-[0_10px_35px_-18px_rgba(16,52,90,0.3)] sm:p-8">
                <span className="block h-[3px] w-12 rounded-full bg-primary" />
                <h3 className="mt-3 text-[24px] font-bold text-navy">Send Us a Message</h3>
                <p className="mb-6 mt-1 text-[14px] text-muted">
                  Have a question or need more information about our products?
                  Fill out the form below and our team will get back to you soon.
                </p>
                <EnquiryForm variant="contact" />
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal variant="up" className="mx-auto mt-8 max-w-[1300px]">
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <iframe
              title="Avenix Pharma location"
              src="https://www.google.com/maps?q=New+Delhi,+India&z=5&output=embed"
              className="h-[420px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </section>
    </>
  );
}
