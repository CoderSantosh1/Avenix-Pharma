"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Variant = "up" | "down" | "left" | "right" | "zoom" | "flip";

type RevealProps = {
  children: ReactNode;
  variant?: Variant;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "article" | "li";
};

// Starting (hidden) state per variant. Side slides become upward slides below
// lg so nothing starts off-screen and the page can't be dragged sideways.
const hidden: Record<Variant, string> = {
  up: "translate-y-10",
  down: "-translate-y-10",
  left: "translate-y-10 lg:translate-y-0 lg:-translate-x-[30px]",
  right: "translate-y-10 lg:translate-y-0 lg:translate-x-[30px]",
  zoom: "scale-[0.88]",
  flip: "origin-top translate-y-[30px] [transform:perspective(900px)_rotateX(18deg)]",
};

const base =
  "group/reveal transition-[opacity,translate,scale,transform] duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:translate-none motion-reduce:scale-100 motion-reduce:opacity-100 motion-reduce:transition-none motion-reduce:[transform:none]";

/**
 * Fades/slides its children in the first time they scroll into view.
 * Children can react to it with `group-data-[visible=true]/reveal:*` classes.
 */
export default function Reveal({
  children,
  variant = "up",
  delay = 0,
  className = "",
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      data-visible={visible}
      style={{ transitionDelay: `${delay}ms` }}
      className={`${base} ${
        visible ? "translate-none scale-100 opacity-100 [transform:none]" : `opacity-0 ${hidden[variant]}`
      } ${className}`}
    >
      {children}
    </Tag>
  );
}
