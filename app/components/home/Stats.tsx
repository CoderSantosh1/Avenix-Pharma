import Image from "next/image";
import Heroimage from "@/public/Home/heroImage.png";
import { stats } from "@/app/data/data";
import Counter from "../ui/Counter";
import Icon from "../ui/Icons";
import Reveal from "../ui/Reveal";

export default function Stats() {
  return (
    <section className="relative isolate overflow-hidden py-16 lg:py-20">
      <Image
        src={Heroimage}
        alt=""
        fill
        sizes="100vw"
        className="-z-20 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0a4f93]/95 via-[#0b5ea8]/90 to-[#0a4f93]/95" />

      <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-y-12 px-6 lg:grid-cols-4">
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
              <Icon name={stat.icon} className="h-9 w-9" />
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
