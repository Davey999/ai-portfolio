import Link from "next/link";
import type { Project } from "@/data/types";

export function FeaturedCard({ project }: { project: Project }) {
  const kicker = project.homeCardKicker ?? project.type.toUpperCase();
  const cardDescription = project.homeCardDescription ?? project.description;
  const tags = project.homeCardTags ?? project.stack.slice(0, 3);
  const stats = project.homeCardStats;

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group border border-border rounded-sm p-6 flex flex-col gap-4 hover:border-accent transition-colors duration-300"
      style={{ background: "color-mix(in srgb, var(--bg-surface) 60%, var(--bg-primary))" }}
    >
      <div className="text-[clamp(0.6rem,0.8vw,0.9rem)] tracking-[0.12em] text-text-secondary font-light">
        {kicker}
      </div>
      <div className="text-[clamp(0.9rem,1.2vw,1.4rem)] font-light tracking-wide text-text-primary">
        {project.title}
      </div>

      {stats && stats.length > 0 ? (
        <div className="flex gap-6">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-[clamp(1rem,1.5vw,1.8rem)] font-light text-text-primary">
                {s.value}
              </div>
              <div className="text-[clamp(0.6rem,0.7vw,0.8rem)] tracking-[0.08em] text-text-secondary">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-[clamp(0.7rem,1vw,1.1rem)] font-light text-text-secondary leading-relaxed">
          {cardDescription}
        </p>
      )}

      <div className="flex flex-wrap gap-2 mt-auto">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-[clamp(0.6rem,0.7vw,0.8rem)] tracking-[0.08em] text-text-secondary border border-border px-2 py-1 rounded-sm"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="text-[clamp(0.7rem,0.9vw,1rem)] tracking-[0.1em] text-text-secondary group-hover:text-text-primary transition-colors duration-300 text-right">
        VIEW PROJECT →
      </div>
    </Link>
  );
}
