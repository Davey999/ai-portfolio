"use client";

import { useRef, useEffect } from "react";

const posts = [
  {
    title: "Claude Code: End-to-End Workflows for Finance",
    date: "Mar 2026",
    description: "How Claude Code enables complete finance workflows — from downloading financial statements to producing Excel and PDF outputs — without switching between apps.",
    tag: "AI Tools",
  },
  {
    title: "Turn Claude into Your Personal SQL Expert",
    date: "Mar 2026",
    description: "Four steps to set up Claude Projects so it remembers your database, your queries, and your logic — every time you need to pull data.",
    tag: "Tutorial",
  },
  {
    title: "Why AI Results Vary in Finance",
    date: "Feb 2026",
    description: "Five reasons finance professionals get different results from AI — and what to do about it. Right tool, paid models, reps, context, and avoiding the moonshot.",
    tag: "Strategy",
  },
  {
    title: "Claude in Excel: Where the Real Value Is",
    date: "Jan 2026",
    description: "Most people assume AI in Excel is about building models. The real value is understanding the nightmare spreadsheet you just inherited.",
    tag: "AI Tools",
  },
  {
    title: "AI and Finance Jobs: The Jevons Paradox",
    date: "Jan 2026",
    description: "Email was supposed to give us more leisure time. AI is following the same pattern — work isn't shrinking, it's changing. What that means for finance teams.",
    tag: "Industry",
  },
  {
    title: "The AI Hype Cycle in Finance",
    date: "Dec 2025",
    description: "AI in finance went from Mr Frosty-level disappointment to actually delivering. What changed, and why the boy who cried wolf moment might finally be real.",
    tag: "Opinion",
  },
];

export default function WritingPage() {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = headerRef.current;
    if (el) {
      el.style.opacity = "1";
      el.style.filter = "blur(0px)";
    }
  }, []);

  return (
    <div className="relative w-screen pt-[17.5vh] pl-[10vw] pr-[10vw] lg:pt-[12vh] lg:pl-[15vw] lg:pr-[15vw]">
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
          WRITING
        </h1>
      </div>

      {/* Posts list */}
      <div className="flex flex-col">
        {posts.map((post, i) => (
          <div
            key={i}
            className="group py-[clamp(1.5rem,3vh,2.5rem)] border-b border-border cursor-pointer"
            style={{
              opacity: 0,
              filter: "blur(1px)",
              transform: "translateY(10px)",
              transition: "opacity 0.6s ease-out, filter 0.6s ease-out, transform 0.6s ease-out",
            }}
            ref={(el) => {
              if (el) {
                const observer = new IntersectionObserver(
                  ([entry]) => {
                    if (entry.isIntersecting) {
                      setTimeout(() => {
                        el.style.opacity = "1";
                        el.style.filter = "blur(0px)";
                        el.style.transform = "translateY(0)";
                      }, i * 100);
                    }
                  },
                  { threshold: 0.1 }
                );
                observer.observe(el);
              }
            }}
          >
            <div className="flex flex-col lg:flex-row lg:items-baseline lg:justify-between gap-2">
              <div className="flex-1">
                <h2 className="text-[clamp(0.9rem,1.3vw,1.4rem)] font-light tracking-wide group-hover:text-accent transition-colors duration-300">
                  {post.title}
                </h2>
                <p className="text-[clamp(0.7rem,0.9vw,1rem)] text-text-primary font-light mt-2 leading-relaxed max-w-[60ch]">
                  {post.description}
                </p>
              </div>
              <div className="flex items-center gap-4 text-[clamp(0.65rem,0.8vw,0.9rem)] text-text-secondary font-light shrink-0">
                <span className="border border-border rounded-full px-3 py-0.5 text-accent/70">
                  {post.tag}
                </span>
                <span>{post.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
