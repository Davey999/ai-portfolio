"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

function ArrowIcon() {
  return (
    <svg
      width="clamp(1rem,1.5vw,2rem)"
      height="clamp(1rem,1.5vw,2rem)"
      viewBox="0 0 102 102"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="0.2" y1="50.2" x2="100.2" y2="50.2" stroke="currentColor" strokeWidth="4" />
      <line x1="65.4" y1="15.2" x2="100.8" y2="50.6" stroke="currentColor" strokeWidth="4" />
      <line x1="65.4" y1="85.2" x2="100.8" y2="49.9" stroke="currentColor" strokeWidth="4" />
    </svg>
  );
}

function useScrollFade(ref: React.RefObject<HTMLElement | null>) {
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
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [ref]);
}

function FadeSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  useScrollFade(ref);

  return (
    <section
      ref={ref}
      className={className}
      style={{
        opacity: 0,
        filter: "blur(1px)",
        transform: "translateY(20px)",
        transition: "opacity 0.8s ease-out, filter 0.8s ease-out, transform 0.8s ease-out",
      }}
    >
      {children}
    </section>
  );
}

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (el) {
      el.style.opacity = "1";
      el.style.filter = "blur(0px)";
      el.style.transform = "translateY(0)";
    }
  }, []);

  return (
    <div className="relative">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative w-screen pt-[17.5vh] pl-[10vw] flex flex-col lg:flex-row lg:items-start lg:pt-[15vh] lg:pl-[15vw]"
        style={{
          opacity: 0,
          filter: "blur(1px)",
          transform: "translateY(20px)",
          transition: "opacity 0.8s ease-out, filter 0.8s ease-out, transform 0.8s ease-out",
        }}
      >
        {/* Left column — Name */}
        <div className="w-[80vw] lg:w-[35vw] flex flex-col items-start justify-start font-light leading-none">
          <div className="text-[clamp(2.5rem,5vw,6rem)] md:text-[clamp(3rem,5.5vw,6.5rem)] font-light md:font-thin tracking-[-0.03em] font-[family-name:var(--font-hero)]">
            <h1>DAVID</h1>
            <h1>MERRY</h1>
          </div>
          <div className="text-[clamp(0.8rem,1.2vw,1.5rem)] pl-1 lg:pl-2 text-text-secondary mt-2 tracking-wide">
            Practical AI for Finance
          </div>
        </div>
        {/* Photo */}
        <div className="mt-[5vh] w-[35vw] aspect-[3/4] lg:mt-0 lg:ml-[15vw] lg:w-[14vw] lg:aspect-[3/4] overflow-hidden rounded-sm">
          <img src="/photo.jpg" alt="David Merry" className="w-full h-full object-cover object-center" />
        </div>
      </section>

      {/* About Me Section */}
      <FadeSection className="relative w-screen pt-[5vh] pl-[10vw] lg:pt-[clamp(5rem,15vh,10rem)] lg:pl-[15vw] flex flex-col lg:flex-row lg:items-start lg:gap-[10vw]">
        <div className="lg:h-[clamp(20rem,60vh,40rem)] flex flex-col items-start justify-start">
          <div className="h-[15vh] flex items-end text-[clamp(1rem,1.5vw,2rem)] font-light mb-1 tracking-[0.1em]">
            <h2>ABOUT ME</h2>
          </div>
          <div className="w-[80vw] lg:w-[35vw] h-[1px] bg-border" />
          <div className="w-[80vw] lg:w-[35vw] flex flex-col pt-[5vh] lg:pt-[clamp(1rem,7.5vh,3rem)] text-[clamp(0.7rem,1vw,1.2rem)] tracking-[0.1rem] font-light gap-4 leading-[clamp(1.1rem,3vh,1.4rem)] text-text-primary">
            <p>I am a Director of Finance and Chartered Accountant with over 20 years of experience.</p>
            <p>I work at the intersection of accounting, data, and AI, focusing on how AI tools can be used by finance teams in the real world.</p>
            <p>My approach is simple: no hype, just practical stuff that works and saves teams time.</p>
          </div>
        </div>
      </FadeSection>

      {/* Motivation Section */}
      <FadeSection className="relative w-screen pt-[5vh] pr-[10vw] lg:pt-[clamp(5rem,15vh,10rem)] lg:pr-[15vw] flex flex-col items-end lg:flex-row lg:justify-end lg:items-start">
        {/* Text */}
        <div className="lg:h-[clamp(20rem,60vh,40rem)] flex flex-col items-start justify-start">
          <div className="h-[15vh] flex items-end text-[clamp(1rem,1.5vw,2rem)] font-light mb-1 tracking-[0.1em]">
            <h2>WHAT&apos;S HERE</h2>
          </div>
          <div className="w-[80vw] lg:w-[35vw] h-[1px] bg-border" />
          <div className="w-[80vw] lg:w-[35vw] flex flex-col pt-[5vh] lg:pt-[clamp(1rem,7.5vh,3rem)] text-[clamp(0.7rem,1vw,1.2rem)] tracking-[0.1rem] font-light gap-4 leading-[clamp(1.1rem,3vh,1.4rem)] text-text-primary">
            <p>This site is a record of my AI journey. It&apos;s where I document the workflows I&apos;m building, the lessons I&apos;m learning, and my perspective on where AI is heading in Finance (and beyond).</p>
            <p>While much of this site is finance-focused, you will also find details of my projects in other fields.</p>
            <p>If you&apos;re also exploring how to use AI in your work or personal projects, I&apos;d love to hear from you!</p>
          </div>
        </div>
      </FadeSection>

      {/* Bottom links */}
      <FadeSection className="relative w-screen pt-[clamp(5rem,15vh,10rem)] pl-[10vw] lg:pl-[15vw] pb-[clamp(3rem,8vh,6rem)]">
        <div className="ml-auto pr-[10vw] flex flex-col items-end justify-center gap-4">
          <Link
            href="/projects"
            className="flex flex-row items-center justify-center gap-2 text-[clamp(1rem,1.5vw,2rem)] font-light hover:text-accent transition-colors duration-300"
          >
            <span>PROJECTS</span>
            <ArrowIcon />
          </Link>
          <Link
            href="/writing"
            className="flex flex-row items-center justify-center gap-2 text-[clamp(1rem,1.5vw,2rem)] font-light hover:text-accent transition-colors duration-300"
          >
            <span>WRITING</span>
            <ArrowIcon />
          </Link>
        </div>
      </FadeSection>
    </div>
  );
}
