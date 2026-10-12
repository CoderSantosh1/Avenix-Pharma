import Image from "next/image";
import WhyChooseImage from "@/public/Home/why-choose.jpg";
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
            src={WhyChooseImage}
            alt="Blue and white capsules"
            fill
            sizes="45vw"
            className="object-cover transition-transform duration-[2000ms] hover:scale-110"
          />
        </div>
      </Reveal>

      <div className="relative mx-auto max-w-[1300px] px-6 py-16 lg:px-20 lg:py-20">
        <div className="max-w-[660px]">
          <Reveal>
            <div className="mb-3 flex items-center gap-4">
              <p className="text-[12px] font-semibold uppercase tracking-[3px] text-teal sm:text-[13px]">
                Why Choose Us
              </p>
              <span className="grow-line h-[2px] w-16 bg-teal" />
            </div>
            <h2 className="text-[32px] font-bold leading-[1.15] tracking-tight text-navy sm:text-[38px] lg:text-[44px]">
              Your Trusted Partner in
              <br />
              <span className="text-teal-dark">Better Healthcare</span>
            </h2>
            <p className="mt-5 text-[15px] leading-[1.7] text-muted sm:text-[17px]">
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
                <h3 className="mt-3 text-[14px] font-semibold leading-snug text-navy sm:text-[15px]">
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
          src={WhyChooseImage}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}
