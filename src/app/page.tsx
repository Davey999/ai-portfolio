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

      {/* About Me + What's Here — two-column */}
      <FadeSection className="relative w-screen pt-[clamp(5rem,15vh,10rem)] px-[10vw] lg:px-[15vw] flex flex-col lg:flex-row lg:items-start lg:gap-[10vw]">
        <div className="flex flex-col items-start justify-start flex-1">
          <div className="h-[8vh] flex items-end text-[clamp(1rem,1.5vw,2rem)] font-light mb-1 tracking-[0.1em]">
            <h2>ABOUT ME</h2>
          </div>
          <div className="w-full h-[1px] bg-border" />
          <div className="w-full flex flex-col pt-[clamp(1rem,5vh,2.5rem)] text-[clamp(0.7rem,1vw,1.2rem)] tracking-[0.1rem] font-light gap-4 leading-[clamp(1.1rem,3vh,1.4rem)] text-text-primary">
            <p>I am a Director of Finance and Chartered Accountant with over 20 years of experience.</p>
            <p>I use Claude, Alteryx, and Glean AI in my day-to-day finance work.</p>
            <p>Outside of that, I build with Claude Code and write about what I&apos;m learning.</p>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start flex-1 mt-[8vh] lg:mt-0">
          <div className="h-[8vh] flex items-end text-[clamp(1rem,1.5vw,2rem)] font-light mb-1 tracking-[0.1em]">
            <h2>WHAT&apos;S HERE</h2>
          </div>
          <div className="w-full h-[1px] bg-border" />
          <div className="w-full flex flex-col pt-[clamp(1rem,5vh,2.5rem)] text-[clamp(0.7rem,1vw,1.2rem)] tracking-[0.1rem] font-light gap-4 leading-[clamp(1.1rem,3vh,1.4rem)] text-text-primary">
            <p>This site is a record of my AI journey. It&apos;s where I document the workflows I&apos;m building, the lessons I&apos;m learning, and my perspective on where AI is heading in Finance (and beyond).</p>
            <p>While much of this site is finance-focused, you will also find details of my projects in other fields.</p>
            <p>If what you find here resonates with you, or you just want to talk AI in finance, connect with me on LinkedIn.</p>
          </div>
        </div>
      </FadeSection>

      {/* Featured Projects */}
      <FadeSection className="relative w-screen pt-[clamp(6rem,18vh,10rem)] px-[10vw] lg:px-[15vw]">
        <div className="flex items-end h-[8vh] text-[clamp(1rem,1.5vw,2rem)] font-light mb-1 tracking-[0.1em]">
          <h2>PROJECTS</h2>
        </div>
        <div className="w-full h-[1px] bg-border mb-[clamp(1.5rem,5vh,3rem)]" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Link href="/projects/football-finance" className="group border border-white/10 rounded-sm p-6 flex flex-col gap-4 hover:border-white/20 hover:brightness-110 transition-colors duration-300" style={{ background: '#1e2535' }}>
            <div className="text-[clamp(0.6rem,0.8vw,0.9rem)] tracking-[0.12em] text-[#7a8a9a] font-light">AI WORKFLOW · FINANCE</div>
            <div className="text-[clamp(0.9rem,1.2vw,1.4rem)] font-light tracking-wide text-white/90">Football Finance</div>
            <p className="text-[clamp(0.7rem,1vw,1.1rem)] font-light text-[#9aabb8] leading-relaxed">
              Automated pipeline turning Companies House filings into structured financial reports across multiple UK football clubs.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {["Claude Code", "Companies House API", "Excel"].map(tag => (
                <span key={tag} className="text-[clamp(0.6rem,0.7vw,0.8rem)] tracking-[0.08em] text-[#7a8a9a] border border-white/10 px-2 py-1 rounded-sm">{tag}</span>
              ))}
            </div>
            <div className="text-[clamp(0.7rem,0.9vw,1rem)] tracking-[0.1em] text-[#7a8a9a] group-hover:text-white transition-colors duration-300 text-right">VIEW PROJECT →</div>
          </Link>
          <Link href="/projects/youtube-analytics" className="group border border-white/10 rounded-sm p-6 flex flex-col gap-4 hover:border-white/20 hover:brightness-110 transition-colors duration-300" style={{ background: '#1e2535' }}>
            <div className="text-[clamp(0.6rem,0.8vw,0.9rem)] tracking-[0.12em] text-[#7a8a9a] font-light">AI TOOL · DATA ANALYSIS</div>
            <div className="text-[clamp(0.9rem,1.2vw,1.4rem)] font-light tracking-wide text-white/90">YouTube Analytics</div>
            <div className="flex gap-6">
              <div>
                <div className="text-[clamp(1rem,1.5vw,1.8rem)] font-light text-white/90">+549%</div>
                <div className="text-[clamp(0.6rem,0.7vw,0.8rem)] tracking-[0.08em] text-[#7a8a9a]">VIEWS PER VIDEO</div>
              </div>
              <div>
                <div className="text-[clamp(1rem,1.5vw,1.8rem)] font-light text-white/90">+535%</div>
                <div className="text-[clamp(0.6rem,0.7vw,0.8rem)] tracking-[0.08em] text-[#7a8a9a]">WATCH TIME</div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-auto">
              {["Python", "Claude API", "YouTube API"].map(tag => (
                <span key={tag} className="text-[clamp(0.6rem,0.7vw,0.8rem)] tracking-[0.08em] text-[#7a8a9a] border border-white/10 px-2 py-1 rounded-sm">{tag}</span>
              ))}
            </div>
            <div className="text-[clamp(0.7rem,0.9vw,1rem)] tracking-[0.1em] text-[#7a8a9a] group-hover:text-white transition-colors duration-300 text-right">VIEW PROJECT →</div>
          </Link>
        </div>
      </FadeSection>

      <div className="pb-[clamp(3rem,8vh,6rem)]" />
    </div>
  );
}
