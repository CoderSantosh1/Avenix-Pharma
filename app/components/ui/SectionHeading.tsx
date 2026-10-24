import type { ReactNode } from "react";
import Reveal from "./Reveal";

type SectionHeadingProps = {
  label: string;
  title: ReactNode;
  highlight?: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

/** Small uppercase label + two-tone heading used at the top of most sections. */
export default function SectionHeading({
  label,
  title,
  highlight,
  description,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <Reveal
      className={`${centered ? "mx-auto text-center" : ""} mb-8 max-w-4xl lg:mb-10 ${className}`}
    >
      <div
        className={`mb-3 flex items-center gap-4 ${centered ? "justify-center" : ""}`}
      >
        {centered && (
          <span className="h-[2px] w-12 origin-right scale-x-0 bg-teal transition-transform delay-300 duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-data-[visible=true]/reveal:scale-x-100" />
        )}
        <p className="text-[13px] font-semibold uppercase tracking-[3px] text-teal">
          {label}
        </p>
        <span className="origin-left scale-x-0 transition-transform delay-300 duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-data-[visible=true]/reveal:scale-x-100 h-[2px] w-12 bg-teal" />
      </div>

      <h2 className="text-[28px] font-bold leading-[1.2] tracking-[-0.02em] text-navy sm:text-[34px] lg:text-[40px]">
        {title}{" "}
        {highlight && <span className="text-teal-dark">{highlight}</span>}
      </h2>

      {description && (
        <p className="mt-3 text-[15px] leading-[1.75] text-muted sm:text-[16px]">
          {description}
        </p>
      )}
    </Reveal>
  );
}
