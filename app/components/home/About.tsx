import Image from "next/image";
import { assets } from "@/app/data/data";
import ButtonLink from "../ui/ButtonLink";
import Icon, { type Icon as IconName } from "../ui/Icons";
import Reveal from "../ui/Reveal";

const features: { title: string; description: string; icon: IconName }[] = [
  {
    title: "Our Mission",
    description: "To provide affordable and quality medicines.",
    icon: "users",
  },
  {
    title: "Our Vision",
    description: "To be a trusted global pharmaceutical company.",
    icon: "target",
  },
  {
    title: "Our Values",
    description: "Quality, integrity and innovation.",
    icon: "shield",
  },
];

export default function AboutUs({ extended = false }: { extended?: boolean }) {
  return (
    <section className="py-14 sm:py-16 lg:py-16w-full overflow-hidden bg-white">
      <div className="mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-8 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
        {/* Layered images */}
        <Reveal variant="left" className="relative mx-auto w-full max-w-[620px]">
          <div className="relative aspect-[620/520]">
            <div className="absolute left-0 top-0 h-[82%] w-[72%] overflow-hidden rounded-2xl shadow-xl">
              <Image
                src={assets.aboutCompany}
                alt="Avenix Pharma headquarters"
                fill
                sizes="(max-width: 1024px) 70vw, 30vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="absolute bottom-0 right-0 h-[70%] w-[46%] overflow-hidden rounded-2xl border-[6px] border-white shadow-2xl motion-safe:animate-float-slow">
              <Image
                src={assets.aboutLab}
                alt="Scientist using a microscope in the lab"
                fill
                sizes="(max-width: 1024px) 45vw, 20vw"
                className="object-cover"
              />
            </div>

            {/* Experience badge */}
            {/* <div className="absolute bottom-6 left-4 flex items-center gap-3 rounded-2xl bg-primary px-5 py-4 text-white shadow-xl sm:left-8">
              <span className="text-[34px] font-bold leading-none">25+</span>
              <span className="text-[13px] leading-tight">
                Years of
                <br />
                Experience
              </span>
            </div> */}
          </div>
        </Reveal>

        {/* Content */}
        <Reveal variant="right" className="w-full">
          <div className="mb-3 flex items-center gap-4">
            <p className="text-[13px] font-semibold uppercase tracking-[3px] text-teal">
              About Avenix Pharma
            </p>
            <span className="origin-left scale-x-0 transition-transform delay-300 duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-data-[visible=true]/reveal:scale-x-100 h-[2px] w-16 bg-teal" />
          </div>

          <h2 className="text-[28px] font-bold leading-[1.2] tracking-[-0.02em] text-navy sm:text-[34px] lg:text-[40px]">
            A Commitment to
            <br />
            <span className="text-teal-dark">Better Health for All</span>
          </h2>

          <p className="mt-5 text-[15px] leading-[1.75] text-muted sm:text-[16px]">
            Avenix Pharma is a leading pharmaceutical company dedicated to
            developing, manufacturing and delivering high-quality medicines
            that improve lives. With a strong focus on innovation, quality and
            patient well-being, we strive to make healthcare more accessible
            and effective globally.
          </p>
          {extended && (
            <p className="mt-4 text-[15px] leading-[1.75] text-muted sm:text-[16px]">
              From our WHO-GMP certified plants to our research labs, every
              team at Avenix works toward one goal: dependable medicines that
              patients and healthcare professionals can trust, delivered on
              time to more than 50 countries.
            </p>
          )}

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-0">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`group flex items-start gap-3 sm:px-3 lg:px-4 ${
                  index === 0 ? "sm:pl-0" : "sm:border-l sm:border-[#cbd5e1]"
                }`}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#e1f0f7] text-primary transition-all duration-500 group-hover:rotate-[360deg] group-hover:bg-primary group-hover:text-white">
                  <Icon name={feature.icon} className="h-6 w-6" />
                </div>
                <div className="min-w-0 pt-1">
                  <h3 className="text-[15px] font-semibold leading-[1.35] text-navy">
                    {feature.title}
                  </h3>
                  <p className="mt-1 text-[13px] leading-[1.6] text-muted">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {!extended && (
            <ButtonLink href="/about" className="mt-8">
              Learn More
            </ButtonLink>
          )}
        </Reveal>
      </div>
    </section>
  );
}
