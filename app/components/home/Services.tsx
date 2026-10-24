import Image from "next/image";
import Link from "next/link";
import { services } from "@/app/data/data";
import type { Service } from "@/app/types";
import Icon from "../ui/Icons";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <Reveal delay={(index % 4) * 120} className="h-full">
      <article className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-line bg-white shadow-[0_3px_12px_rgba(15,52,91,0.06)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_45px_-18px_rgba(8,102,178,0.45)]">
        <div className="relative h-[170px] w-full overflow-hidden">
          <Image
            src={service.image}
            alt={service.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </div>

        <div className="relative z-10 -mt-8 ml-5 flex h-[70px] w-[70px] items-center justify-center rounded-full border-[7px] border-white bg-[#e8f3fb]">
          <div
            className={`flex h-[48px] w-[48px] items-center justify-center rounded-full text-white transition-transform duration-700 group-hover:rotate-[360deg] ${
              index % 4 === 1 ? "bg-teal-dark" : "bg-primary"
            }`}
          >
            <Icon name={service.icon} className="h-6 w-6" />
          </div>
        </div>

        <div className="flex flex-1 flex-col px-5 pb-6 pt-1">
          <h3 className="max-w-[230px] text-[18px] font-semibold leading-[1.35] text-navy transition-colors group-hover:text-primary">
            {service.title}
          </h3>
          <p className="mt-2 flex-1 text-[14px] leading-[1.6] text-muted">
            {service.description}
          </p>
          <Link
            href={`/services/${service.slug}`}
            className="mt-4 inline-flex items-center gap-2 text-[14px] font-semibold text-primary transition-colors hover:text-teal-dark"
          >
            Learn More
            <Icon
              name="arrow"
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5"
            />
          </Link>
        </div>

        {/* bottom accent bar */}
        <span className="absolute bottom-0 left-0 h-[3px] w-full origin-left scale-x-0 bg-gradient-to-r from-primary to-teal transition-transform duration-500 group-hover:scale-x-100" />
      </article>
    </Reveal>
  );
}

export default function Services({ all = false }: { all?: boolean }) {
  const list = all ? services : services.slice(0, 4);

  return (
    <section className="py-14 sm:py-16 lg:py-16w-full bg-soft">
      <div className="mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white p-5 shadow-[0_10px_40px_-25px_rgba(16,52,90,0.35)] sm:p-8 lg:p-10">
          <SectionHeading
            label="Our Services"
            title="Comprehensive"
            highlight="Pharmaceutical Solutions"
            description="We offer end-to-end pharmaceutical solutions to meet diverse healthcare needs."
          />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {list.map((service, index) => (
              <ServiceCard key={service.slug} service={service} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
