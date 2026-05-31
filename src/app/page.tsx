import type { Metadata } from "next";
import { getFeaturedProjects } from "@/data/projects.server";
import { FadeSection } from "./_components/FadeSection";
import { HeroSection } from "./_components/HeroSection";
import { FeaturedCard } from "./_components/FeaturedCard";

export const metadata: Metadata = {
  title: "David Merry | Practical AI for Finance",
  description:
    "Practical AI techniques and tools for finance professionals. Workflows, case studies, and articles from a Director of Finance and Chartered Accountant.",
};

export default function Home() {
  const featured = getFeaturedProjects();

  return (
    <div className="relative">
      {/* Hero Section */}
      <HeroSection>
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

      </HeroSection>

      {/* About Me + What's Here — two-column */}
      <FadeSection className="relative w-screen pt-[clamp(5rem,15vh,10rem)] px-[10vw] lg:px-[15vw] flex flex-col">
        <div className="flex flex-col items-start justify-start">
          <div className="h-[8vh] flex items-end text-[clamp(1rem,1.5vw,2rem)] font-light mb-1 tracking-[0.1em]">
            <h2>ABOUT ME</h2>
          </div>
          <div className="w-full h-[1px] bg-border" />
          <div className="w-full flex flex-col pt-[clamp(1rem,5vh,2.5rem)] text-[clamp(0.7rem,1vw,1.2rem)] tracking-[0.1rem] font-light gap-4 leading-[clamp(1.1rem,3vh,1.4rem)] text-text-primary">
            <p>Director of Finance and Chartered Accountant. I have been using AI every day for a few years - for traditional accounting tasks like reconciliations and automating month-end processes, and for more complex data analysis in Python and SQL that was not previously feasible.</p>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start mt-[8vh]">
          <div className="h-[8vh] flex items-end text-[clamp(1rem,1.5vw,2rem)] font-light mb-1 tracking-[0.1em]">
            <h2>WHAT&apos;S HERE</h2>
          </div>
          <div className="w-full h-[1px] bg-border" />
          <div className="w-full flex flex-col pt-[clamp(1rem,5vh,2.5rem)] text-[clamp(0.7rem,1vw,1.2rem)] tracking-[0.1rem] font-light gap-4 leading-[clamp(1.1rem,3vh,1.4rem)] text-text-primary">
            <p>Articles about practical AI techniques I use in finance work - what I tested, what saved time, and what did not.</p>
            <p>Projects built with Claude Code, including Python scripts and automations that run reliably once they are done. The interesting part is usually what it took to build them.</p>
            <p>If any of it is useful, find me on LinkedIn.</p>
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
          {featured.map((project) => (
            <FeaturedCard key={project.slug} project={project} />
          ))}
        </div>
      </FadeSection>

      <div className="pb-[clamp(3rem,8vh,6rem)]" />
    </div>
  );
}
