import type { Metadata } from "next";
import { MountFade } from "../_components/MountFade";
import { FadeSection } from "../_components/FadeSection";

export const metadata: Metadata = {
  title: "Links | David Merry",
  robots: { index: false, follow: false },
};

export default function LinksPage() {
  return (
    <div className="relative w-screen pt-[17.5vh] pl-[10vw] pr-[10vw] lg:pt-[12vh] lg:pl-[15vw] lg:pr-[15vw]">
      {/* Header */}
      <MountFade className="flex flex-col mb-[5vh]">
        <h1 className="text-[clamp(1.5rem,3vw,3rem)] font-light tracking-wide">
          LINKS
        </h1>
      </MountFade>

      <FadeSection className="lg:w-[70vw]" threshold={0.1}>
        <div className="flex flex-col gap-6 text-[clamp(0.7rem,1vw,1.2rem)] tracking-[0.1rem] font-light leading-[clamp(1.1rem,3vh,1.4rem)] text-text-primary">
          <p>Articles, videos, and resources I&apos;ve found useful on the AI journey. Coming soon.</p>
        </div>
      </FadeSection>
    </div>
  );
}
