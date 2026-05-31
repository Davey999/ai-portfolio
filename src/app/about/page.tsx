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

      {/* Photo at top */}
      <FadeSection threshold={0.1}>
        <div className="w-[50vw] lg:w-[28vw] aspect-[3/4] overflow-hidden rounded-sm mb-[8vh] relative">
          <Image
            src="/photo.jpg"
            alt="David Merry"
            fill
            className="object-cover object-center"
          />
        </div>
      </FadeSection>

      {/* Bio */}
      <FadeSection threshold={0.1}>
        <div className="flex flex-col gap-4 text-[clamp(0.7rem,1vw,1.2rem)] tracking-[0.1rem] font-light leading-[clamp(1.1rem,3vh,1.4rem)] text-text-primary lg:max-w-[55vw]">
          <p>I am a Director of Finance and Chartered Accountant with over 20 years experience across financial reporting and data analysis. For the past few years I have been using AI in that work every day - for traditional accounting tasks like reconciliations and automating month-end processes, and for more complex data analysis in Python and SQL that was not previously feasible. I also build with it: scripts and automations that now run reliably without any AI once they are done.</p>
          <p>I only write about things I have tested against real work. If a technique did not change what I produced or how long it took, I did not publish it.</p>
          <p>Templates and prompts circulate everywhere - a useful starting point. But they depend heavily on context, and the context almost always varies. You get good at AI by using AI; there is no substitute for the reps.</p>
          <p>The part I find most interesting is building things with AI that then run without it - a script, a query, an automation. The output becomes deterministic and auditable even though the build process was not. Finance work is changing in ways I can see from where I sit; I write about what that looks like from inside a finance team.</p>
        </div>
      </FadeSection>

      {/* Connect */}
      <FadeSection className="mt-[8vh]" threshold={0.1}>
        <div className="lg:max-w-[55vw]">
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
      </FadeSection>

      <div className="pb-[clamp(3rem,8vh,6rem)]" />
    </div>
  );
}
