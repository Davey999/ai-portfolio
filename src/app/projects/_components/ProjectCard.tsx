"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import type { Project } from "@/data/types";

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.opacity = "1";
            el.style.filter = "blur(0px)";
            el.style.transform = "translateY(0)";
          }, index * 150);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={ref}
      style={{
        opacity: 0,
        filter: "blur(1px)",
        transform: "translateY(20px)",
        transition: "opacity 0.8s ease-out, filter 0.8s ease-out, transform 0.8s ease-out",
      }}
    >
      <Link href={`/projects/${project.slug}`} className="group w-full flex flex-col gap-4 block">
        {/* Project image placeholder */}
        <div className="w-full aspect-[16/10] bg-bg-surface border border-border rounded-sm flex items-center justify-center overflow-hidden transition-colors duration-300 group-hover:border-accent">
          <div className="text-text-secondary text-sm font-light">[PROJECT_IMAGE]</div>
        </div>
        {/* Project info */}
        <div className="flex flex-col gap-1">
          <div className="flex items-baseline justify-between">
            <h3 className="text-[clamp(1rem,1.5vw,1.5rem)] font-light tracking-wide group-hover:text-accent transition-colors duration-300">
              {project.title}
            </h3>
            <span className="text-text-secondary text-xs font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-4">
              View case study →
            </span>
          </div>
          <p className="text-[clamp(0.7rem,0.9vw,1rem)] text-text-secondary font-light">
            {project.type}
          </p>
          <p className="text-[clamp(0.7rem,1vw,1.1rem)] text-text-primary font-light leading-relaxed mt-2">
            {project.description}
          </p>
        </div>
      </Link>
    </div>
  );
}
