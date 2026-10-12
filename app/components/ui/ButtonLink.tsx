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
      className={`shine group/btn inline-flex h-[48px] items-center justify-center gap-3 rounded-full px-7 text-[15px] font-semibold transition-all duration-300 hover:-translate-y-0.5 ${variants[variant]} ${className}`}
    >
      {children}
      <Icon
        name="arrow"
        className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1"
      />
    </Link>
  );
}
