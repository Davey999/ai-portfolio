"use client";

import { useEffect, useRef } from "react";

export function FadeSection({
  children,
  className = "",
  threshold = 0.15,
}: {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.filter = "blur(0px)";
          el.style.transform = "translateY(0)";
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <section
      ref={ref}
      className={className}
      style={{
        opacity: 0,
        filter: "blur(1px)",
        transform: "translateY(20px)",
        transition:
          "opacity 0.8s ease-out, filter 0.8s ease-out, transform 0.8s ease-out",
      }}
    >
      {children}
    </section>
  );
}
