"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  { href: "/", label: "HOME" },
  { href: "/projects", label: "PROJECTS" },
  { href: "/writing", label: "WRITING" },
  { href: "/about", label: "ABOUT" },
  { href: "/contact", label: "CONTACT" },
];

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/david-merry/",
    label: "LinkedIn",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-[1em] h-[1em]">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    href: "mailto:davegmerry@gmail.com",
    label: "Email",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-[1em] h-[1em]">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
];

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="w-[3rem] p-[0.1rem] lg:w-[5rem] lg:p-[0.2rem] aspect-[5/2] rounded-full border lg:border-2 flex flex-row items-center justify-between transition-colors duration-700 border-text-primary/80"
      aria-label="Toggle light and dark mode"
    >
      <div
        className={`w-[1rem] lg:w-[1.6rem] aspect-square rounded-full transition-colors duration-700 ${
          theme === "light" ? "bg-text-primary/80" : "bg-transparent"
        }`}
      />
      <div
        className={`w-[1rem] lg:w-[1.6rem] aspect-square rounded-full transition-colors duration-700 ${
          theme === "dark" ? "bg-text-primary/80" : "bg-transparent"
        }`}
      />
    </button>
  );
}

export default function Navigation() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header>
      {/* Mobile nav — hamburger */}
      <div className="fixed top-0 left-0 z-50 lg:hidden">
        {/* Top bar with hamburger button */}
        <div className="pl-[5vw] pr-[5vw] w-screen h-[clamp(3rem,6vh,4rem)] flex flex-row items-center justify-between bg-bg-primary/95 backdrop-blur-sm">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex flex-col justify-center items-center gap-[5px] w-8 h-8"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-[1.5px] bg-text-primary transition-all duration-300 ${
                mobileOpen ? "translate-y-[6.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block w-5 h-[1.5px] bg-text-primary transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-[1.5px] bg-text-primary transition-all duration-300 ${
                mobileOpen ? "-translate-y-[6.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        {/* Overlay menu */}
        <div
          className={`fixed inset-0 bg-bg-primary/98 backdrop-blur-md flex flex-col items-center justify-center gap-8 transition-all duration-500 ${
            mobileOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
            >
              <div
                className={`text-[clamp(1.2rem,5vw,2rem)] tracking-[0.3em] font-light transition-colors duration-500 ${
                  pathname === link.href
                    ? "text-text-primary"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {link.label}
              </div>
            </Link>
          ))}

          {/* Social links in mobile menu */}
          <div className="flex flex-row items-center gap-6 pt-4 text-[1.5rem]">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="text-text-secondary hover:text-text-primary transition-colors duration-300"
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Theme toggle in mobile menu */}
          <div className="pt-4">
            <ThemeToggle />
          </div>
        </div>
      </div>

      {/* Desktop sidebar nav */}
      <div className="hidden lg:block fixed top-[12vh] left-[3vw] z-50">
        <div className="flex flex-col items-start gap-4 w-[10vw]">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <div
                className={`group relative text-[clamp(0.8rem,1vw,1.5rem)] tracking-widest font-light transition-colors duration-500 ${
                  pathname === link.href
                    ? "text-text-primary"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 h-[0.5px] bg-text-primary transition-all duration-500 ease-out ${
                    pathname === link.href
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </div>
            </Link>
          ))}

          {/* Social icons */}
          <div className="flex flex-col items-start gap-2 pt-5 text-[clamp(1rem,1.5vw,1.5rem)] font-extralight">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="text-text-secondary hover:text-text-primary transition-colors duration-300"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Vertical divider — scroll edge (desktop only) */}
      <div className="hidden lg:block fixed top-0 left-[13vw] w-[1px] h-screen bg-border/30 z-40" />

      {/* Theme toggle — desktop only (mobile toggle is inside hamburger overlay) */}
      <div className="hidden lg:block fixed top-[5vh] right-[3vw] z-50">
        <ThemeToggle />
      </div>
    </header>
  );
}
