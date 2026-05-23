"use client";

import { useEffect, useRef } from "react";

export function HeroSection({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (el) {
      el.style.opacity = "1";
      el.style.filter = "blur(0px)";
      el.style.transform = "translateY(0)";
    }
  }, []);

  return (
    <section
      ref={ref}
      className="relative w-screen pt-[17.5vh] pl-[10vw] flex flex-col lg:flex-row lg:items-start lg:pt-[15vh] lg:pl-[15vw]"
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
