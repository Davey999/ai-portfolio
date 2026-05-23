"use client";

import { useEffect, useRef } from "react";

export function MountFade({
  children,
  className = "",
  withTransform = false,
}: {
  children: React.ReactNode;
  className?: string;
  withTransform?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "1";
    el.style.filter = "blur(0px)";
    if (withTransform) {
      el.style.transform = "translateY(0)";
    }
  }, [withTransform]);

  const baseStyle: React.CSSProperties = {
    opacity: 0,
    filter: "blur(1px)",
    transition: withTransform
      ? "opacity 0.8s ease-out, filter 0.8s ease-out, transform 0.8s ease-out"
      : "opacity 0.8s ease-out, filter 0.8s ease-out",
  };
  if (withTransform) {
    baseStyle.transform = "translateY(20px)";
  }

  return (
    <div ref={ref} className={className} style={baseStyle}>
      {children}
    </div>
  );
}
