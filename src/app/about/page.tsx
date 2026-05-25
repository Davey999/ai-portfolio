import type { Metadata } from "next";
import Image from "next/image";
import { MountFade } from "../_components/MountFade";
import { FadeSection } from "../_components/FadeSection";

export const metadata: Metadata = {
  title: "About | David Merry",
  description:
    "Director of Finance and Chartered Accountant with 20+ years experience. Using AI every day to do finance work better and build tools that make it possible.",
  openGraph: {
    title: "About | David Merry",
    description:
      "Director of Finance and Chartered Accountant using AI to improve finance work.",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <div className="relative w-screen pt-[17.5vh] pl-[10vw] pr-[10vw] lg:pt-[12vh] lg:pl-[15vw] lg:pr-[10vw]">
      {/* Header */}
      <MountFade className="flex flex-col mb-[5vh]">
        <h1 className="text-[clamp(1.5rem,3vw,3rem)] font-light tracking-wide">
          ABOUT
        </h1>
      </MountFade>

      {/* Two-column layout */}
      <div className="flex flex-col lg:flex-row lg:gap-[10vw]">
        {/* Left — Photo + Bio */}
        <FadeSection className="lg:w-[35vw]" threshold={0.1}>
          <div className="w-full aspect-[4/5] overflow-hidden rounded-sm mb-[5vh] relative">
            <Image
              src="/photo.jpg"
              alt="David Merry"
              fill
              className="object-cover object-center"
            />
          </div>

          <div className="flex flex-col gap-4 text-[clamp(0.7rem,1vw,1.2rem)] tracking-[0.1rem] font-light leading-[clamp(1.1rem,3vh,1.4rem)] text-text-primary">
            <p>I am a Director of Finance and Chartered Accountant with over 20 years of experience across corporate finance, financial reporting, and data analysis. The kind of work where accuracy matters, deadlines don&apos;t move, and the spreadsheets have consequences.</p>
            <p>A few years ago I started testing AI tools against real finance work - not demos, not hypotheticals, but the actual day-to-day. Month-end closes, reconciliations, data extraction, report writing. Turns out AI can handle a lot of it. But it takes the right tools, the right approach, and a lot of reps to find out what actually works.</p>
            <p>Now I build workflows, document what delivers, and share it so other finance teams don&apos;t have to figure it out from scratch.</p>
          </div>
        </FadeSection>

        {/* Right — Philosophy */}
        <FadeSection className="lg:w-[35vw] mt-[10vh] lg:mt-0" threshold={0.1}>
          <div>
            <div className="text-[clamp(1rem,1.5vw,2rem)] font-light mb-1 tracking-wide">
              <h2>APPROACH</h2>
            </div>
            <div className="w-full h-[1px] bg-border mb-[3vh]" />
            <div className="flex flex-col gap-4 text-[clamp(0.7rem,1vw,1.2rem)] tracking-[0.1rem] font-light leading-[clamp(1.1rem,3vh,1.4rem)] text-text-primary">
              <p>When AI doesn&apos;t deliver, the technology is rarely the problem. It&apos;s usually the tool, the setup, or the instructions. Getting good at it is a skill - and like most skills, it compounds with practice.</p>
              <p>I don&apos;t write about what AI could theoretically do for finance teams. I write about what it actually does, tested against real work. If it doesn&apos;t save time or improve the output, it&apos;s not worth your attention.</p>
              <p>A lot of what circulates online about AI in finance is templates - comment a word and someone sends you a prompt. Templates are a useful starting point. But results depend on context. You get good at AI by using AI, and there is no shortcut to that.</p>
              <p>The way finance work gets done is changing. I write about what that looks like from the inside.</p>
            </div>

            <div className="mt-[5vh]">
              <div className="text-[clamp(1rem,1.5vw,2rem)] font-light mb-1 tracking-wide">
                <h2>CONNECT</h2>
              </div>
              <div className="w-full h-[1px] bg-border mb-[3vh]" />
              <div className="flex flex-col gap-4 text-[clamp(0.7rem,1vw,1.2rem)] tracking-[0.1rem] font-light leading-[clamp(1.1rem,3vh,1.4rem)] text-text-primary">
                <p>If you want to compare notes or just talk AI in finance, find me on LinkedIn.</p>
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
        </FadeSection>
      </div>
    </div>
  );
}
