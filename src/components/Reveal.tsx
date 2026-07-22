"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Delay in ms before the reveal transition starts once visible. */
  delay?: number;
  /** Element/tag to render. Defaults to "div". */
  as?: ElementType;
  /** Extra class names alongside the base "reveal". */
  className?: string;
  /** Style passthrough (e.g. for width/grid placement). */
  style?: React.CSSProperties;
};

/**
 * Scroll-triggered reveal wrapper.
 *
 * Adds the base `.reveal` class (opacity:0 + translateY) and toggles
 * `.is-visible` via IntersectionObserver when the element scrolls into view.
 * Fully dependency-free and GPU-accelerated (transform/opacity only).
 *
 * Respects prefers-reduced-motion: the CSS sets the content visible by default
 * in that case, so nothing stays hidden.
 */
export default function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  className,
  style,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Fallback: if IntersectionObserver isn't available, just show.
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const classes = ["reveal"];
  if (visible) classes.push("is-visible");
  if (className) classes.push(className);

  return (
    <Tag
      ref={ref as React.Ref<HTMLElement>}
      className={classes.join(" ")}
      style={{ ...style, transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
