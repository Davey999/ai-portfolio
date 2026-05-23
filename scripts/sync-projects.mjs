#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SOURCE = path.resolve(
  __dirname,
  "../../content-creation/1 - Projects/b - Project Summaries"
);
const DEST = path.resolve(__dirname, "../content/projects");

const REQUIRED_FIELDS = [
  "slug",
  "title",
  "type",
  "description",
  "situation",
  "problem",
  "approach",
  "whatIBuilt",
  "stack",
];

const SYNC_HEADER =
  "<!-- AUTO-SYNCED FROM content-creation/1 - Projects/b - Project Summaries/ -->\n" +
  "<!-- DO NOT EDIT HERE. Edit the source file in content-creation, then run `npm run sync-content`. -->\n\n";

function log(msg) {
  process.stdout.write(`[sync-projects] ${msg}\n`);
}
function warn(msg) {
  process.stderr.write(`[sync-projects] WARN: ${msg}\n`);
}
function fail(msg) {
  process.stderr.write(`[sync-projects] ERROR: ${msg}\n`);
  process.exit(1);
}

if (!fs.existsSync(SOURCE)) {
  warn(
    `Source folder not found: ${SOURCE}. Skipping sync. (This is expected on the Hostinger build server.)`
  );
  process.exit(0);
}

if (!fs.existsSync(DEST)) {
  fs.mkdirSync(DEST, { recursive: true });
}

const sourceFiles = fs
  .readdirSync(SOURCE)
  .filter((f) => f.endsWith(".md") && !f.startsWith("."));

log(`Found ${sourceFiles.length} markdown file(s) in source.`);

const seenSlugs = new Set();
const kept = [];
const skipped = [];

for (const filename of sourceFiles) {
  const filepath = path.join(SOURCE, filename);
  const raw = fs.readFileSync(filepath, "utf8");

  let parsed;
  try {
    parsed = matter(raw);
  } catch (err) {
    fail(`Failed to parse frontmatter in ${filename}: ${err.message}`);
  }

  const fm = parsed.data;

  if (fm.showOnSite !== true) {
    skipped.push(filename);
    continue;
  }

  for (const field of REQUIRED_FIELDS) {
    const value = fm[field];
    const isMissing =
      value === undefined ||
      value === null ||
      (typeof value === "string" && value.trim() === "") ||
      (Array.isArray(value) && value.length === 0);
    if (isMissing) {
      fail(
        `${filename}: missing or empty required field "${field}". showOnSite is true but the field is not set.`
      );
    }
  }

  if (!Array.isArray(fm.stack)) {
    fail(`${filename}: field "stack" must be a YAML list, got ${typeof fm.stack}.`);
  }

  const slug = String(fm.slug).trim();
  if (!/^[a-z0-9-]+$/.test(slug)) {
    fail(
      `${filename}: slug "${slug}" must be lowercase letters, numbers, and hyphens only.`
    );
  }

  if (seenSlugs.has(slug)) {
    fail(
      `${filename}: duplicate slug "${slug}" already used by another file in this sync.`
    );
  }
  seenSlugs.add(slug);

  // Insert the sync header AFTER the closing --- of the frontmatter,
  // so gray-matter still finds the frontmatter at the top of the file.
  const fmEndRegex = /^---[\r\n]+[\s\S]*?[\r\n]+---[\r\n]+/;
  const fmMatch = raw.match(fmEndRegex);
  const outContent = fmMatch
    ? raw.slice(0, fmMatch[0].length) + SYNC_HEADER + raw.slice(fmMatch[0].length)
    : SYNC_HEADER + raw;

  const outPath = path.join(DEST, `${slug}.md`);
  fs.writeFileSync(outPath, outContent, "utf8");
  kept.push(slug);
}

const existingDestFiles = fs
  .readdirSync(DEST)
  .filter((f) => f.endsWith(".md"));

for (const destFile of existingDestFiles) {
  const slug = destFile.replace(/\.md$/, "");
  if (!seenSlugs.has(slug)) {
    fs.unlinkSync(path.join(DEST, destFile));
    log(`Removed stale file: ${destFile} (no longer has showOnSite: true)`);
  }
}

log(`Synced ${kept.length} project(s): ${kept.join(", ") || "(none)"}`);
if (skipped.length > 0) {
  log(`Skipped ${skipped.length} (showOnSite not true): ${skipped.join(", ")}`);
}
