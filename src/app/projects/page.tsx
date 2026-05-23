import Link from "next/link";
import { getAllProjects } from "@/data/projects.server";
import { FadeSection } from "../_components/FadeSection";
import { MountFade } from "../_components/MountFade";
import { ProjectCard } from "./_components/ProjectCard";

export default function ProjectsPage() {
  const projects = getAllProjects();
  const featured = projects[0];
  const rest = projects.slice(1);

  return (
    <div className="relative w-screen pt-[17.5vh] pl-[10vw] pr-[10vw] lg:pt-[12vh] lg:pl-[15vw] lg:pr-[10vw]">
      {/* Header */}
      <MountFade className="flex flex-col mb-[5vh]">
        <h1 className="text-[clamp(1.5rem,3vw,3rem)] font-light tracking-wide">
          PROJECTS
        </h1>
      </MountFade>

      {/* Featured project */}
      {featured && (
        <FadeSection
          className="flex flex-col lg:flex-row lg:gap-[5vw] mb-[10vh]"
          threshold={0.1}
        >
          <Link
            href={`/projects/${featured.slug}`}
            className="group w-full lg:w-[50%] aspect-[16/10] bg-bg-surface border border-border rounded-sm flex items-center justify-center overflow-hidden transition-colors duration-300 hover:border-accent"
          >
            <div className="text-text-secondary text-sm font-light">[PROJECT_IMAGE]</div>
          </Link>
          <div className="flex flex-col justify-center mt-6 lg:mt-0 lg:w-[40%]">
            <p className="text-text-secondary text-[clamp(0.7rem,0.9vw,1rem)] font-light mb-2">
              [ 01 / {String(projects.length).padStart(2, "0")} ]
            </p>
            <Link href={`/projects/${featured.slug}`} className="group">
              <h2 className="text-[clamp(1.2rem,2vw,2rem)] font-light tracking-wide uppercase group-hover:text-accent transition-colors duration-300">
                {featured.title}
              </h2>
            </Link>
            <p className="text-text-secondary text-[clamp(0.7rem,0.9vw,1rem)] font-light mt-1">
              {featured.type}
            </p>
            <p className="text-text-primary text-[clamp(0.7rem,1vw,1.1rem)] font-light leading-relaxed mt-4">
              {featured.description}
            </p>
            <Link
              href={`/projects/${featured.slug}`}
              className="mt-6 self-start text-accent text-sm font-light tracking-wide hover:text-accent-hover transition-colors duration-300"
            >
              View case study →
            </Link>
          </div>
        </FadeSection>
      )}

      {/* Project grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[5vw] mb-[15vh]">
        {rest.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </div>
  );
}
