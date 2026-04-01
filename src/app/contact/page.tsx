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

      <div className="flex flex-col lg:flex-row lg:gap-[10vw]">
        {/* Left — Contact info */}
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
            <p>If you&apos;re a finance team exploring AI, or you want to talk about practical applications — I&apos;d like to hear from you.</p>

            <div>
              <h3 className="text-text-primary text-[clamp(0.9rem,1.2vw,1.3rem)] font-light tracking-wide mb-2">
                EMAIL
              </h3>
              <a
                href="mailto:davegmerry@gmail.com"
                className="text-text-primary hover:text-accent transition-colors duration-300"
              >
                davegmerry@gmail.com
              </a>
            </div>

            <div>
              <h3 className="text-text-primary text-[clamp(0.9rem,1.2vw,1.3rem)] font-light tracking-wide mb-2">
                CONNECT
              </h3>
              <div className="flex flex-col gap-2">
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

        {/* Right — Contact form */}
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
          <div className="text-[clamp(1rem,1.5vw,2rem)] font-light mb-1 tracking-wide">
            <h2>SEND A MESSAGE</h2>
          </div>
          <div className="w-full h-[1px] bg-border mb-[3vh]" />

          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="text-[clamp(0.7rem,0.9vw,1rem)] text-text-secondary font-light tracking-wider uppercase"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="bg-transparent border-b border-border py-2 text-[clamp(0.8rem,1vw,1.1rem)] font-light text-text-primary focus:outline-none focus:border-accent transition-colors duration-300 placeholder:text-text-secondary/50"
                placeholder="Your name"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-[clamp(0.7rem,0.9vw,1rem)] text-text-secondary font-light tracking-wider uppercase"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="bg-transparent border-b border-border py-2 text-[clamp(0.8rem,1vw,1.1rem)] font-light text-text-primary focus:outline-none focus:border-accent transition-colors duration-300 placeholder:text-text-secondary/50"
                placeholder="your@email.com"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="message"
                className="text-[clamp(0.7rem,0.9vw,1rem)] text-text-secondary font-light tracking-wider uppercase"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="bg-transparent border-b border-border py-2 text-[clamp(0.8rem,1vw,1.1rem)] font-light text-text-primary focus:outline-none focus:border-accent transition-colors duration-300 resize-none placeholder:text-text-secondary/50"
                placeholder="Your message"
              />
            </div>

            <button
              type="submit"
              className="self-start mt-4 px-8 py-3 border border-border rounded-full text-[clamp(0.8rem,1vw,1rem)] font-light tracking-wider uppercase transition-colors duration-500 hover:bg-text-primary hover:text-bg-primary focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 active:scale-[0.98]"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
