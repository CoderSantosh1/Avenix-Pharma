import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { team } from "@/app/data/data";
import PageBanner from "@/app/components/ui/PageBanner";
import Reveal from "@/app/components/ui/Reveal";
import SectionHeading from "@/app/components/ui/SectionHeading";
import Icon, { type Icon as IconName } from "@/app/components/ui/Icons";

export function generateStaticParams() {
  return team.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/team/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  return { title: team.find((m) => m.slug === slug)?.name ?? "Team" };
}

const socials: IconName[] = ["facebook", "linkedin", "twitter", "youtube"];

export default async function TeamDetailPage({
  params,
}: PageProps<"/team/[slug]">) {
  const { slug } = await params;
  const member = team.find((m) => m.slug === slug);
  if (!member) notFound();

  const parts = member.name.split(" ");
  const last = parts.pop();

  const contact: { label: string; value: string; icon: IconName }[] = [
    { label: "Email", value: member.email, icon: "mail" },
    { label: "Phone", value: member.phone, icon: "phone" },
    { label: "Location", value: member.location, icon: "pin" },
  ];

  return (
    <>
      <PageBanner title="Team Detail" crumbs={[{ name: "Team", href: "/team" }]} />

      <section className="py-14 sm:py-16 lg:py-16 bg-soft">
        <div className="mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Team"
            title="Team"
            highlight="Detail"
            description="Get to know more about our expert team member who is dedicated to providing high-quality pharmaceutical care and support."
          />

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[490px_1fr]">
            <Reveal variant="left">
              <div className="group relative aspect-[490/640] overflow-hidden rounded-2xl bg-white shadow-lg">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 490px"
                  className="object-cover object-top transition-transform duration-[1500ms] group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 flex translate-y-full justify-center gap-3 bg-gradient-to-t from-navy/80 to-transparent py-6 transition-transform duration-500 group-hover:translate-y-0">
                  {socials.map((s) => (
                    <span
                      key={s}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary transition hover:bg-teal hover:text-white"
                    >
                      <Icon name={s} className="h-4 w-4" />
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal variant="right">
              <div className="h-full rounded-2xl bg-white p-6 shadow-[0_10px_35px_-18px_rgba(16,52,90,0.3)] sm:p-8">
                <span className="inline-block rounded-md bg-[#e3f1fa] px-4 py-1.5 text-[14px] font-medium text-navy">
                  {member.role}
                </span>
                <h2 className="mt-4 text-[28px] font-bold leading-[1.2] tracking-[-0.02em] text-navy sm:text-[34px] lg:text-[40px]">
                  {parts.join(" ")} <span className="text-teal">{last}</span>
                </h2>
                <span className="mt-2 block h-[3px] w-12 rounded-full bg-teal" />
                <p className="mt-5 text-[15px] leading-[1.75] text-muted sm:text-[16px]">
                  {member.bio}
                </p>

                <div className="mt-6 grid grid-cols-1 gap-4 rounded-xl bg-[#f3f8fc] p-5 sm:grid-cols-3 sm:gap-0">
                  {contact.map((c, i) => (
                    <div
                      key={c.label}
                      className={`group flex items-start gap-3 sm:px-4 ${
                        i > 0 ? "sm:border-l sm:border-[#d5e3ef]" : ""
                      }`}
                    >
                      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-teal shadow-sm transition group-hover:bg-teal group-hover:text-white">
                        <Icon name={c.icon} className="h-4 w-4" />
                      </span>
                      <div className="min-w-0">
                        <p className="text-[15px] font-semibold text-navy">{c.label}</p>
                        <p className="break-words text-[14px] text-muted">{c.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <h3 className="mt-8 text-[20px] font-bold leading-[1.3] text-navy sm:text-[22px]">
                  About {member.name}
                </h3>
                <span className="mt-2 block h-[3px] w-12 rounded-full bg-teal" />
                <p className="mt-4 text-[15px] leading-[1.75] text-muted sm:text-[16px]">
                  {member.about}
                </p>

                <div className="mt-6 space-y-4">
                  {[
                    ["Leadership", 95],
                    ["Research", 88],
                    ["Quality Management", 92],
                  ].map(([skill, pct]) => (
                    <div key={skill}>
                      <div className="mb-1 flex justify-between text-[14px] font-medium text-navy">
                        <span>{skill}</span>
                        <span>{pct}%</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-[#e3eef6]">
                        <div
                          className="origin-left scale-x-0 transition-transform delay-300 duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-data-[visible=true]/reveal:scale-x-100 h-full rounded-full bg-gradient-to-r from-primary to-teal"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
