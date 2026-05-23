import { getFeaturedProjects } from "@/data/projects.server";
import { FadeSection } from "./_components/FadeSection";
import { HeroSection } from "./_components/HeroSection";
import { FeaturedCard } from "./_components/FeaturedCard";

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
        {/* Photo */}
        <div className="mt-[5vh] w-[35vw] aspect-[3/4] lg:mt-0 lg:ml-[15vw] lg:w-[14vw] lg:aspect-[3/4] overflow-hidden rounded-sm">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/photo.jpg" alt="David Merry" className="w-full h-full object-cover object-center" />
        </div>
      </HeroSection>

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
          {featured.map((project) => (
            <FeaturedCard key={project.slug} project={project} />
          ))}
        </div>
      </FadeSection>

      <div className="pb-[clamp(3rem,8vh,6rem)]" />
    </div>
  );
}
