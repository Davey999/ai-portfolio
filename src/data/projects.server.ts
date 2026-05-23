import "server-only";
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { Project } from "./types";

const CONTENT_DIR = path.join(process.cwd(), "content", "projects");

function loadProjects(): Project[] {
  if (!fs.existsSync(CONTENT_DIR)) {
    return [];
  }

  const files = fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".md") && !f.startsWith("."));

  const projects: Project[] = files.map((filename) => {
    const filepath = path.join(CONTENT_DIR, filename);
    const raw = fs.readFileSync(filepath, "utf8");
    const { data } = matter(raw);

    const project: Project = {
      slug: String(data.slug),
      title: String(data.title),
      type: String(data.type),
      description: String(data.description).trim(),
      situation: String(data.situation).trim(),
      problem: String(data.problem).trim(),
      approach: String(data.approach).trim(),
      whatIBuilt: String(data.whatIBuilt).trim(),
      stack: Array.isArray(data.stack) ? data.stack.map(String) : [],
      result: data.result ? String(data.result).trim() : null,
      whatILearned: data.whatILearned ? String(data.whatILearned).trim() : null,
      featured: data.featured === true,
      order: typeof data.order === "number" ? data.order : 999,
      homeCardKicker: data.homeCardKicker ? String(data.homeCardKicker) : undefined,
      homeCardTags: Array.isArray(data.homeCardTags)
        ? data.homeCardTags.map(String)
        : undefined,
      homeCardStats: Array.isArray(data.homeCardStats)
        ? data.homeCardStats.map((s: { value: unknown; label: unknown }) => ({
            value: String(s.value),
            label: String(s.label),
          }))
        : undefined,
      homeCardDescription: data.homeCardDescription
        ? String(data.homeCardDescription).trim()
        : undefined,
    };

    return project;
  });

  projects.sort((a, b) => {
    const orderA = a.order ?? 999;
    const orderB = b.order ?? 999;
    if (orderA !== orderB) return orderA - orderB;
    return a.title.localeCompare(b.title);
  });

  return projects;
}

export function getAllProjects(): Project[] {
  return loadProjects();
}

export function getFeaturedProjects(): Project[] {
  return loadProjects().filter((p) => p.featured === true);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return loadProjects().find((p) => p.slug === slug);
}
