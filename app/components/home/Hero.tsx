import Image from "next/image";
import Heroimage from "@/public/Home/heroImage.png";
import ButtonLink from "../ui/ButtonLink";
import Icon from "../ui/Icons";

export default function Hero() {
  return (
    <section className="relative flex min-h-[560px] w-full items-center overflow-hidden md:min-h-[600px]">
      {/* Background image */}
      <Image
        src={Heroimage}
        alt="Scientist examining samples in a pharmaceutical laboratory"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[70%_center]"
      />

      {/* Left side blur + white gradient for readability */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] backdrop-blur-[4px]"
        style={{
          maskImage: "linear-gradient(to right, black 0%, black 25%, transparent 70%)",
          WebkitMaskImage:
            "linear-gradient(to right, black 0%, black 25%, transparent 70%)",
        }}
      />
      <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-r from-white/85 via-white/45 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-[1240px] px-6 py-16 md:px-10 lg:px-16">
        <div className="max-w-[540px]">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[2.5px] text-teal-dark sm:text-[13px] sm:tracking-[4px]">
            Advancing Healthcare Together
          </p>

          <h1 className="text-[40px] font-bold leading-[1.08] tracking-[-1px] text-navy sm:text-[52px] lg:text-[58px]">
            Innovating
            <br />
            Healthcare,
            <br />
            <span className="bg-gradient-to-r from-teal-dark to-teal bg-clip-text text-transparent">
              Improving Lives
            </span>
          </h1>

          <p className="mt-5 max-w-[475px] text-[15px] leading-[1.6] text-[#44566d] md:text-[16px]">
            We are committed to developing high-quality pharmaceutical
            solutions for a healthier and brighter tomorrow.
          </p>

          <div className="mt-7 flex flex-wrap gap-4">
            <ButtonLink href="/contact">Contact Us</ButtonLink>
            <ButtonLink href="/products" variant="outline">
              Our Products
            </ButtonLink>
          </div>
        </div>
      </div>

      {/* Info badges */}
      {/* <div className="absolute bottom-10 right-[6%] z-10 hidden items-center gap-3 rounded-2xl bg-white/95 px-5 py-4 shadow-xl lg:flex">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-teal text-white">
          <Icon name="shield" className="h-6 w-6" />
        </span>
        <div>
          <p className="text-[15px] font-bold text-navy">WHO-GMP Certified</p>
          <p className="text-[12px] text-muted">Global quality standards</p>
        </div>
      </div> */}
      {/* <div className="absolute right-[30%] top-12 z-10 hidden items-center gap-3 rounded-2xl bg-white/95 px-5 py-3 shadow-xl xl:flex">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">
          <Icon name="award" className="h-5 w-5" />
        </span>
        <div>
          <p className="text-[15px] font-bold text-navy">25+ Years</p>
          <p className="text-[12px] text-muted">of trusted care</p>
        </div>
      </div> */}
    </section>
  );
}
