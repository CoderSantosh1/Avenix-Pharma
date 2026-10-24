import Image from "next/image";
import Link from "next/link";
import { team } from "@/app/data/data";
import Icon, { type Icon as IconName } from "./ui/Icons";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";

const socials: IconName[] = ["facebook", "linkedin", "twitter"];

export default function TeamGrid() {
  return (
    <section className="py-14 sm:py-16 lg:py-16bg-soft">
      <div className="mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Our Team"
          title="Meet Our"
          highlight="Experts"
          description="Experienced professionals dedicated to high-quality pharmaceutical care and support."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, i) => (
            <Reveal key={member.slug} variant="up" delay={i * 130}>
              <article className="group relative overflow-hidden rounded-2xl bg-white p-8 text-center shadow-[0_10px_30px_-15px_rgba(16,52,90,0.3)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_45px_-20px_rgba(8,102,178,0.5)]">
                <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-r from-primary to-teal transition-all duration-500 group-hover:h-28" />
                <div className="relative mx-auto h-32 w-32 overflow-hidden rounded-full border-[5px] border-white shadow-lg">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="128px"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <h3 className="mt-5 text-[18px] font-semibold leading-[1.35] text-navy">
                  {member.name}
                </h3>
                <p className="text-[14px] font-medium text-teal-dark">
                  {member.role}
                </p>
                <div className="mt-4 flex justify-center gap-3">
                  {socials.map((s) => (
                    <span
                      key={s}
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e6f2fa] text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white"
                    >
                      <Icon name={s} className="h-4 w-4" />
                    </span>
                  ))}
                </div>
                <Link
                  href={`/team/${member.slug}`}
                  className="mt-5 inline-flex items-center gap-2 text-[14px] font-semibold text-primary hover:text-teal-dark"
                >
                  View Profile
                  <Icon
                    name="arrow"
                    className="h-4 w-4 transition-transform group-hover:translate-x-1.5"
                  />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
