"use client";

import { useRef, useEffect } from "react";

export default function ContactPage() {
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
          CONTACT
        </h1>
      </div>

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
        <div className="flex flex-col gap-6 text-[clamp(0.7rem,1vw,1.2rem)] tracking-[0.1rem] font-light leading-[clamp(1.1rem,3vh,1.4rem)] text-text-primary">
          <p>I write about using AI in finance as a practitioner. If you want to connect or just compare notes, find me on LinkedIn.</p>

          <div>
            <h3 className="text-text-primary text-[clamp(0.9rem,1.2vw,1.3rem)] font-light tracking-wide mb-2">
              CONNECT
            </h3>
            <a
              href="https://www.linkedin.com/in/david-merry/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-primary hover:text-accent transition-colors duration-300"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
