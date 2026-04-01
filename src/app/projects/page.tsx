"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { projects } from "@/data/projects";

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
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

export default function ProjectsPage() {
  const headerRef = useRef<HTMLDivElement>(null);
  const featuredRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = headerRef.current;
    if (el) {
      el.style.opacity = "1";
      el.style.filter = "blur(0px)";
    }
  }, []);

  useEffect(() => {
    const el = featuredRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.filter = "blur(0px)";
          el.style.transform = "translateY(0)";
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const featured = projects[0];

  return (
    <div className="relative w-screen pt-[17.5vh] pl-[10vw] pr-[10vw] lg:pt-[12vh] lg:pl-[15vw] lg:pr-[10vw]">
      {/* Header */}
      <div
        ref={headerRef}
        className="flex flex-col mb-[5vh]"
        style={{
          opacity: 0,
          filter: "blur(1px)",
          transition: "opacity 0.8s ease-out, filter 0.8s ease-out",
        }}
      >
        <h1 className="text-[clamp(1.5rem,3vw,3rem)] font-light tracking-wide">
          PROJECTS
        </h1>
      </div>

      {/* Featured project */}
      <div
        ref={featuredRef}
        className="flex flex-col lg:flex-row lg:gap-[5vw] mb-[10vh]"
        style={{
          opacity: 0,
          filter: "blur(1px)",
          transform: "translateY(20px)",
          transition: "opacity 0.8s ease-out, filter 0.8s ease-out, transform 0.8s ease-out",
        }}
      >
        <Link
          href={`/projects/${featured.slug}`}
          className="group w-full lg:w-[50%] aspect-[16/10] bg-bg-surface border border-border rounded-sm flex items-center justify-center overflow-hidden transition-colors duration-300 hover:border-accent"
        >
          <div className="text-text-secondary text-sm font-light">[PROJECT_IMAGE]</div>
        </Link>
        <div className="flex flex-col justify-center mt-6 lg:mt-0 lg:w-[40%]">
          <p className="text-text-secondary text-[clamp(0.7rem,0.9vw,1rem)] font-light mb-2">
            [ 01 / {String(projects.length).padStart(2, "0")} ]
          </p>
          <Link href={`/projects/${featured.slug}`} className="group">
            <h2 className="text-[clamp(1.2rem,2vw,2rem)] font-light tracking-wide uppercase group-hover:text-accent transition-colors duration-300">
              {featured.title}
            </h2>
          </Link>
          <p className="text-text-secondary text-[clamp(0.7rem,0.9vw,1rem)] font-light mt-1">
            {featured.type}
          </p>
          <p className="text-text-primary text-[clamp(0.7rem,1vw,1.1rem)] font-light leading-relaxed mt-4">
            {featured.description}
          </p>
          <Link
            href={`/projects/${featured.slug}`}
            className="mt-6 self-start text-accent text-sm font-light tracking-wide hover:text-accent-hover transition-colors duration-300"
          >
            View case study →
          </Link>
        </div>
      </div>

      {/* Project grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[5vw] mb-[15vh]">
        {projects.slice(1).map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </div>
  );
}
