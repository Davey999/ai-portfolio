"use client";

import { useRef, useEffect } from "react";

const experience: { role: string; company: string; period: string }[] = [];

export default function AboutPage() {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = headerRef.current;
    if (el) {
      el.style.opacity = "1";
      el.style.filter = "blur(0px)";
    }
  }, []);

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
          ABOUT
        </h1>
      </div>

      {/* Two-column layout like hero */}
      <div className="flex flex-col lg:flex-row lg:gap-[10vw]">
        {/* Left — Bio */}
        <div
          className="lg:w-[35vw]"
          style={{
            opacity: 0,
            filter: "blur(1px)",
            transform: "translateY(20px)",
            transition: "opacity 0.8s ease-out, filter 0.8s ease-out, transform 0.8s ease-out",
          }}
          ref={(el) => {
            if (el) {
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
            }
          }}
        >
          {/* Photo placeholder */}
          <div className="w-full aspect-[4/5] bg-bg-surface border border-border rounded-sm flex items-center justify-center overflow-hidden mb-[5vh]">
            <div className="text-text-secondary text-sm font-light">[PHOTO]</div>
          </div>

          <div className="flex flex-col gap-4 text-[clamp(0.7rem,1vw,1.2rem)] tracking-[0.1rem] font-light leading-[clamp(1.1rem,3vh,1.4rem)] text-text-primary">
            <p>I&apos;ve spent my career in finance — month-end closes, reconciliations, financial analysis, the works. The kind of work where accuracy matters and deadlines don&apos;t move.</p>
            <p>A couple of years ago I started experimenting with AI tools to see if they could actually help with the day-to-day. Not the flashy demos — the real stuff. Turns out, they can. But only if you know how to use them properly.</p>
            <p>Now I spend my time testing AI tools against real finance work, documenting what delivers, and sharing it so other finance teams don&apos;t have to figure it out from scratch.</p>
          </div>
        </div>

        {/* Right — Experience */}
        <div
          className="lg:w-[35vw] mt-[10vh] lg:mt-0"
          style={{
            opacity: 0,
            filter: "blur(1px)",
            transform: "translateY(20px)",
            transition: "opacity 0.8s ease-out, filter 0.8s ease-out, transform 0.8s ease-out",
          }}
          ref={(el) => {
            if (el) {
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
            }
          }}
        >
          {/* Values / Philosophy */}
          <div>
            <div className="text-[clamp(1rem,1.5vw,2rem)] font-light mb-1 tracking-wide">
              <h2>PHILOSOPHY</h2>
            </div>
            <div className="w-full h-[1px] bg-border mb-[3vh]" />
            <div className="flex flex-col gap-4 text-[clamp(0.7rem,1vw,1.2rem)] tracking-[0.1rem] font-light leading-[clamp(1.1rem,3vh,1.4rem)] text-text-primary">
              <p>AI is only useful if it works on the stuff you actually do. I don&apos;t chase the latest model announcement or build things that look impressive in a demo but fall apart in practice. If it doesn&apos;t save time or improve the output, it&apos;s not worth writing about.</p>
              <p>Start with the basics. Learn what works. Then try harder things. That&apos;s the approach I take, and it&apos;s what I recommend to every finance team I talk to.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
