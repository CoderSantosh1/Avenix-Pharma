import Image from "next/image";
import { assets } from "@/app/data/data";
import Icon, { type Icon as IconName } from "../ui/Icons";
import Reveal from "../ui/Reveal";

const reasons: { title: string; icon: IconName }[] = [
  { title: "High Quality Products", icon: "award" },
  { title: "Advanced Manufacturing", icon: "flask" },
  { title: "Patient-Centric Approach", icon: "users" },
  { title: "Global Reach", icon: "shield" },
];

export default function Choose() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#eef7fc] to-[#f7fbfe]">
      {/* Image on the right with a diagonal edge */}
      <Reveal
        variant="right"
        className="absolute inset-y-0 right-0 hidden w-[44%] lg:block"
      >
        <div
          className="relative h-full w-full"
          style={{ clipPath: "polygon(22% 0, 100% 0, 100% 100%, 0 100%)" }}
        >
          <Image
            src={assets.whyChoose}
            alt="Blue and white capsules"
            fill
            sizes="45vw"
            className="object-cover transition-transform duration-[2000ms] hover:scale-110"
          />
        </div>
      </Reveal>

      <div className="mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-16 relative">
        <div className="max-w-[660px]">
          <Reveal>
            <div className="mb-3 flex items-center gap-4">
              <p className="text-[13px] font-semibold uppercase tracking-[3px] text-teal">
                Why Choose Us
              </p>
              <span className="origin-left scale-x-0 transition-transform delay-300 duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-data-[visible=true]/reveal:scale-x-100 h-[2px] w-16 bg-teal" />
            </div>
            <h2 className="text-[28px] font-bold leading-[1.2] tracking-[-0.02em] text-navy sm:text-[34px] lg:text-[40px]">
              Your Trusted Partner in
              <br />
              <span className="text-teal-dark">Better Healthcare</span>
            </h2>
            <p className="mt-5 text-[15px] leading-[1.75] text-muted sm:text-[16px]">
              We are committed to delivering high-quality, safe and affordable
              medicines that improve lives and support a healthier tomorrow.
            </p>
          </Reveal>

          <div className="mt-10 grid grid-cols-2 gap-y-8 sm:grid-cols-4">
            {reasons.map((reason, i) => (
              <Reveal
                key={reason.title}
                variant="zoom"
                delay={i * 120}
                className={`group flex flex-col items-center px-2 text-center ${
                  i > 0 ? "sm:border-l sm:border-[#c7d6e4]" : ""
                }`}
              >
                <span className="flex h-[62px] w-[62px] items-center justify-center rounded-full bg-[#d9eef8] text-teal-dark transition-all duration-500 group-hover:-translate-y-2 group-hover:bg-teal-dark group-hover:text-white group-hover:shadow-lg">
                  <Icon name={reason.icon} className="h-7 w-7" />
                </span>
                <h3 className="mt-3 text-[15px] font-semibold leading-[1.35] text-navy">
                  {reason.title}
                </h3>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile image */}
      <div className="relative h-64 w-full lg:hidden">
        <Image
          src={assets.whyChoose}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}
