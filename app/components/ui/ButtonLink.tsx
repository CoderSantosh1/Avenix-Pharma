import Link from "next/link";
import type { ReactNode } from "react";
import Icon from "./Icons";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "teal" | "outline";
  className?: string;
};

const variants = {
  primary: "bg-primary text-white hover:bg-teal-dark shadow-[0_10px_25px_-10px_rgba(8,102,178,0.7)]",
  teal: "bg-gradient-to-r from-[#00bfae] to-[#00a7bd] text-white border-2 border-white hover:brightness-110",
  outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
};

export default function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`relative isolate overflow-hidden after:pointer-events-none after:absolute after:inset-y-0 after:left-0 after:w-2/5 after:bg-linear-to-r after:from-transparent after:via-white/45 after:to-transparent after:[transform:translateX(-120%)_skewX(-20deg)] hover:after:animate-shine group/btn inline-flex h-[48px] items-center justify-center gap-3 rounded-full px-7 text-[15px] font-semibold transition-all duration-300 hover:-translate-y-0.5 ${variants[variant]} ${className}`}
    >
      {children}
      <Icon
        name="arrow"
        className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1"
      />
    </Link>
  );
}
