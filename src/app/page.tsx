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
        className="relative w-screen pt-[17.5vh] pl-[10vw] flex flex-col lg:pt-[15vh] lg:pl-[15vw] lg:flex-row lg:items-center lg:gap-[10vw]"
        style={{
          opacity: 0,
          filter: "blur(1px)",
          transform: "translateY(20px)",
          transition: "opacity 0.8s ease-out, filter 0.8s ease-out, transform 0.8s ease-out",
        }}
      >
        {/* Left column — Name */}
        <div className="w-[80vw] lg:w-[35vw] lg:h-[clamp(20rem,60vh,40rem)] flex flex-col items-start justify-between font-light leading-none">
          <div>
            <div className="text-[clamp(3rem,6.5vw,7rem)] md:text-[clamp(4rem,7vw,8rem)] font-light md:font-thin tracking-[-0.03em] font-[family-name:var(--font-hero)]">
              <h1>DAVID</h1>
              <h1>MERRY</h1>
            </div>
            <div className="text-[clamp(0.8rem,1.2vw,1.5rem)] pl-1 lg:pl-2 text-text-secondary mt-2 tracking-wide">
              Practical AI for Finance
            </div>
          </div>

          <div className="pl-1 mt-[10vh] lg:pl-2 flex flex-col items-start justify-start text-[clamp(0.8rem,1.2vw,1.5rem)] leading-tight text-text-secondary">
            <p>For business inquiries, email me at</p>
            <a
              href="mailto:davegmerry@gmail.com"
              className="text-text-primary hover:text-accent transition-colors duration-300"
              style={{ fontFamily: "var(--font-prose)", lineHeight: 1.5 }}
            >
              davegmerry@gmail.com
            </a>
          </div>
        </div>

        {/* Right column — About Me */}
        <div className="lg:h-[clamp(20rem,60vh,40rem)] flex flex-col items-start justify-end mt-[10vh] lg:mt-0">
          <div className="h-[10vh] lg:h-[15vh] flex items-end text-[clamp(1rem,1.5vw,2rem)] font-light mb-1 tracking-[0.1em]">
            <h2>ABOUT ME</h2>
          </div>
          <div className="w-[80vw] lg:w-[35vw] h-[1px] bg-border" />
          <div className="w-[80vw] lg:w-[35vw] flex flex-col pt-[5vh] lg:pt-[clamp(1rem,7.5vh,3rem)] text-[clamp(0.7rem,1vw,1.2rem)] tracking-[0.1rem] font-light gap-4 leading-[clamp(1.1rem,3vh,1.4rem)] text-text-primary">
            <p>I&apos;m a Director of Finance, and sit at the intersection of accounting, data and AI. More and more, I spend my time exploring what AI tools can actually do for Finance teams.</p>
            <p>I also use AI for personal projects - I&apos;ve built YouTube analytics tools, content creation workflows, and even this website. Because the best way to understand agents, APIs, and AI tooling is to actually build something with them.</p>
          </div>
        </div>
      </section>

      {/* Motivation Section */}
      <FadeSection className="relative w-screen pt-[5vh] pl-[10vw] lg:pt-[clamp(5rem,15vh,10rem)] lg:pl-[15vw] flex flex-col lg:flex-row lg:items-center lg:gap-[10vw]">
        <div className="lg:h-[clamp(20rem,60vh,40rem)] flex flex-col items-start justify-start">
          <div className="h-[15vh] flex items-end text-[clamp(1rem,1.5vw,2rem)] font-light mb-1 tracking-[0.1em]">
            <h2>WHAT&apos;S HERE</h2>
          </div>
          <div className="w-[80vw] lg:w-[35vw] h-[1px] bg-border" />
          <div className="w-[80vw] lg:w-[35vw] flex flex-col pt-[5vh] lg:pt-[clamp(1rem,7.5vh,3rem)] text-[clamp(0.7rem,1vw,1.2rem)] tracking-[0.1rem] font-light gap-4 leading-[clamp(1.1rem,3vh,1.4rem)] text-text-primary">
            <p>This site is a collection of what I&apos;ve built, what I&apos;ve learnt and where I think AI is heading - in finance and beyond. You&apos;ll find project case studies, writing on AI, and links to useful AI resources.</p>
            <p>If you&apos;re in finance (or any field) and curious about getting started with AI, hopefully there&apos;s something in here that helps you on your journey.</p>
          </div>
        </div>
        <div className="mt-[5vh] w-[80vw] aspect-[8/5] lg:w-[35vw] lg:aspect-[8/5] flex items-center justify-center overflow-hidden rounded-sm bg-bg-surface border border-border">
          <div className="text-text-secondary text-sm font-light">[IMAGE_PLACEHOLDER]</div>
        </div>
      </FadeSection>

      {/* Skills / Expertise Section */}
      <FadeSection className="relative w-screen pt-[5vh] pl-[10vw] lg:pt-[clamp(2rem,5vh,5rem)] lg:pl-[15vw] flex flex-col">
        <div className="w-[80vw] lg:w-[75vw] flex flex-col items-start justify-start">
          <div className="h-[15vh] flex items-end text-[clamp(1rem,1.5vw,2rem)] font-light mb-1 tracking-[0.1em]">
            <h2>EXPERTISE</h2>
          </div>
          <div className="w-[80vw] lg:w-[75vw] h-[1px] bg-border" />
          <div className="mt-[5vh] w-[80vw] lg:w-[75vw] flex flex-col items-start justify-start gap-10 lg:flex-row lg:items-start lg:justify-between">
            {/* Column 1 */}
            <div className="flex flex-col w-[80vw] lg:w-[25vw] gap-3 font-light">
              <div className="text-[clamp(1rem,1.5vw,2rem)] tracking-[0.1em] min-h-[3em] flex items-start">
                <h3>AI FOR FINANCE</h3>
              </div>
              <div className="w-full text-[clamp(0.8rem,1.2vw,1rem)] flex flex-wrap gap-2">
                {["Claude", "Perplexity", "Gemini", "Prompt Engineering"].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="w-fit h-fit p-1 px-5 m-1 border border-border rounded-full bg-bg-elevated transition-colors duration-500 hover:bg-text-primary hover:text-bg-primary cursor-default"
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col w-[80vw] lg:w-[20vw] gap-3 font-light">
              <div className="text-[clamp(1rem,1.5vw,2rem)] tracking-[0.1em] min-h-[3em] flex items-start">
                <h3>FINANCE & ACCOUNTING</h3>
              </div>
              <div className="w-full text-[clamp(0.8rem,1.2vw,1rem)] flex flex-wrap gap-2">
                {["Financial Analysis", "Month-End Close", "Reconciliations", "SQL & Data"].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="w-fit h-fit p-1 px-5 m-1 border border-border rounded-full bg-bg-elevated transition-colors duration-500 hover:bg-text-primary hover:text-bg-primary cursor-default"
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col w-[80vw] lg:w-[20vw] gap-3 font-light">
              <div className="text-[clamp(1rem,1.5vw,2rem)] tracking-[0.1em] min-h-[3em] flex items-start">
                <h3>CONTENT & COMMUNICATION</h3>
              </div>
              <div className="w-full text-[clamp(0.8rem,1.2vw,1rem)] flex flex-wrap gap-2">
                {["Technical Writing", "LinkedIn", "Case Studies", "Workflow Documentation"].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="w-fit h-fit p-1 px-5 m-1 border border-border rounded-full bg-bg-elevated transition-colors duration-500 hover:bg-text-primary hover:text-bg-primary cursor-default"
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Bottom links */}
          <div className="ml-auto flex flex-col items-end justify-center gap-4 mt-[15vh]">
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
        </div>
      </FadeSection>
    </div>
  );
}
