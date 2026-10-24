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
      className={`${centered ? "mx-auto text-center" : ""} max-w-4xl ${className}`}
    >
      <div
        className={`mb-3 flex items-center gap-4 ${centered ? "justify-center" : ""}`}
      >
        {centered && (
          <span className="grow-line h-[2px] w-12 bg-teal [transform-origin:right]" />
        )}
        <p className="eyebrow">
          {label}
        </p>
        <span className="grow-line h-[2px] w-12 bg-teal" />
      </div>

      <h2 className="heading-section">
        {title}{" "}
        {highlight && <span className="text-teal-dark">{highlight}</span>}
      </h2>

      {description && (
        <p className="mt-3 text-body">
          {description}
        </p>
      )}
    </Reveal>
  );
}
