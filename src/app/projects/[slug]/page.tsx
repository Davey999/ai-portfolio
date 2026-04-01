import { notFound } from "next/navigation";
import Link from "next/link";
import { projects, getProjectBySlug } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[clamp(0.65rem,0.8vw,0.85rem)] text-accent font-body tracking-[0.15em] uppercase mb-3">
      {children}
    </p>
  );
}

function Divider() {
  return <div className="h-[1px] w-full bg-border my-[5vh]" />;
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <div className="relative w-screen pt-[17.5vh] pb-[15vh] pl-[10vw] pr-[10vw] lg:pt-[12vh] lg:pl-[15vw] lg:pr-[15vw]">

      {/* Back link */}
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-text-secondary text-sm font-light hover:text-accent transition-colors duration-300 mb-[6vh]"
      >
        ← All projects
      </Link>

      {/* Header */}
      <div className="mb-[6vh]">
        <p className="text-text-secondary text-[clamp(0.7rem,0.9vw,1rem)] font-light mb-3">
          {project.type}
        </p>
        <h1 className="text-[clamp(2rem,4vw,4rem)] font-light tracking-wide uppercase">
          {project.title}
        </h1>
      </div>

      {/* Image placeholder */}
      <div className="w-full aspect-[21/9] bg-bg-surface border border-border rounded-sm flex items-center justify-center mb-[8vh]">
        <p className="text-text-secondary text-sm font-light">[PROJECT_IMAGE]</p>
      </div>

      {/* Result callout — only shown if result exists */}
      {project.result && (
        <>
          <div className="border-l-2 border-accent pl-6 py-2 mb-[6vh]">
            <p className="text-[clamp(1rem,1.4vw,1.4rem)] font-light leading-relaxed text-text-accent">
              {project.result}
            </p>
          </div>
          <Divider />
        </>
      )}

      {/* Case study body */}
      <div className="max-w-[72ch] flex flex-col gap-[5vh]">

        {/* The Situation */}
        <div>
          <SectionLabel>The Situation</SectionLabel>
          <p className="text-[clamp(0.85rem,1.1vw,1.1rem)] text-text-primary font-light leading-relaxed">
            {project.situation}
          </p>
        </div>

        <Divider />

        {/* The Problem */}
        <div>
          <SectionLabel>The Problem</SectionLabel>
          <p className="text-[clamp(0.85rem,1.1vw,1.1rem)] text-text-primary font-light leading-relaxed">
            {project.problem}
          </p>
        </div>

        <Divider />

        {/* The Approach */}
        <div>
          <SectionLabel>The Approach</SectionLabel>
          <p className="text-[clamp(0.85rem,1.1vw,1.1rem)] text-text-primary font-light leading-relaxed">
            {project.approach}
          </p>
        </div>

        <Divider />

        {/* What I Built */}
        <div>
          <SectionLabel>What I Built</SectionLabel>
          <p className="text-[clamp(0.85rem,1.1vw,1.1rem)] text-text-primary font-light leading-relaxed">
            {project.whatIBuilt}
          </p>
        </div>

        <Divider />

        {/* The Stack */}
        <div>
          <SectionLabel>The Stack</SectionLabel>
          <div className="flex flex-wrap gap-2 mt-1">
            {project.stack.map((item) => (
              <span
                key={item}
                className="px-3 py-1 border border-border text-text-secondary text-[clamp(0.65rem,0.8vw,0.85rem)] font-light rounded-sm tracking-wide"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* The Result — full section, only if result exists */}
        {project.result && (
          <>
            <Divider />
            <div>
              <SectionLabel>The Result</SectionLabel>
              <p className="text-[clamp(0.85rem,1.1vw,1.1rem)] text-text-primary font-light leading-relaxed">
                {project.result}
              </p>
            </div>
          </>
        )}

        {/* What I Learned — optional */}
        {project.whatILearned && (
          <>
            <Divider />
            <div>
              <SectionLabel>What I Learned</SectionLabel>
              <p className="text-[clamp(0.85rem,1.1vw,1.1rem)] text-text-primary font-light leading-relaxed">
                {project.whatILearned}
              </p>
            </div>
          </>
        )}

      </div>

      {/* Footer nav */}
      <div className="mt-[10vh]">
        <Divider />
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-text-secondary text-sm font-light hover:text-accent transition-colors duration-300"
        >
          ← Back to all projects
        </Link>
      </div>

    </div>
  );
}
