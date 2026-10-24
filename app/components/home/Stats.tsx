import Image from "next/image";
import { assets, stats } from "@/app/data/data";
import Counter from "../ui/Counter";
import Icon, { type Icon as IconName } from "../ui/Icons";
import Reveal from "../ui/Reveal";

export default function Stats() {
  return (
    <section className="py-14 sm:py-16 lg:py-16 relative isolate overflow-hidden">
      <Image
        src={assets.hero}
        alt=""
        fill
        sizes="100vw"
        className="-z-20 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0a4f93]/95 via-[#0b5ea8]/90 to-[#0a4f93]/95" />

      <div className="mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-8 grid grid-cols-2 gap-y-10 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <Reveal
            key={stat.label}
            variant="up"
            delay={i * 150}
            className={`group flex flex-col items-center text-center text-white ${
              i > 0 ? "lg:border-l lg:border-white/30" : ""
            }`}
          >
            <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-teal-dark shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
              <Icon name={stat.icon as IconName} className="h-9 w-9" />
            </span>
            <p className="mt-5 text-[40px] font-bold leading-none sm:text-[52px]">
              <Counter value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="mt-2 text-[15px] text-white/90 sm:text-[19px]">
              {stat.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
