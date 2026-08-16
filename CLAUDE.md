@AGENTS.md

## Multi-Agent Workflow (Claude Code + Codex)

This repo is worked by two agents, never at the same time. Claude Code is the
primary builder. Codex is the reviewer / gap analyst (see AGENTS.md, which is
also Codex's entry point).

**Principle:** the git repo is the shared brain. Chat history is NOT shared
between agents. Anything that must survive a session or cross between agents
must be a committed file, not something said in chat.

**The handoff loop:**
1. An agent does a chunk of work.
2. Commit before switching agents. The next agent only ever starts from a
   clean working tree.
3. Reviews go to `reviews/codex-review-YYYY-MM-DD.md` (template in
   `reviews/README.md`), then committed.
4. The receiving agent reads the open review file, addresses it, ticks the
   Status checkbox with the fixing commit SHA, and commits.

**Codex build handoffs:** When Codex builds or changes project files, it writes
and commits `reviews/codex-build-YYYY-MM-DD.md` with the changed files, base
commit, verification, and remaining work. Claude Code must read the newest
unactioned `codex-*` note before related work. Once actioned, update its Status
checkbox in the resolving commit.

**Claude session handover:** When David runs `/handover`, first read any
unactioned committed `reviews/codex-*` notes alongside the local HANDOVER.md
and Claude memory. Incorporate their completed work, decisions, verification,
and open actions into HANDOVER.md. Do not copy a Codex summary verbatim or
create a second source of truth; the review remains the committed audit trail
and HANDOVER.md remains Claude's local session diary.

**How to invoke Codex:** Run `/codex:review` from within Claude Code (Codex is
a Claude Code marketplace plugin). Use `/codex:adversarial-review` to
pressure-test decisions. Run `/codex:setup` first if Codex has not been used
recently.

**Commit attribution:** prefix every commit subject with `[claude]`, `[codex]`,
or `[david]` so `git log` stays a clear record of who did what.

## Content Pipeline (added May 23, 2026)

Project data (the case studies on `/projects` and the home page cards) is **NOT** hand-coded TypeScript. It is read at build time from markdown files in `content/projects/`, which are synced from the canonical source: `c:\Users\61422\LocalOnly\Projects\content-creation\1 - Projects\b - Project Summaries\`.

**To add or update a case study on davidmerry.me:**

1. Edit/create the markdown file in `content-creation/1 - Projects/b - Project Summaries/`. Frontmatter must be on line 1 (no comments above it). Required fields: `slug, title, type, description, situation, problem, approach, whatIBuilt, stack`. Set `showOnSite: true` to publish.
2. From this repo: `npm run sync-content`
3. `npm run dev`, visually verify at `http://localhost:3000`
4. `git add content/projects && git commit && git push` — Hostinger auto-deploys
5. Also commit + push the source change in `content-creation/`

**Body of markdown files is NEVER rendered.** Only the YAML frontmatter fields. Safe to keep anonymisation notes / publishing considerations in the body.

**Key files:**
- `scripts/sync-projects.mjs` — the sync script (filters `showOnSite: true`, validates required fields, errors on duplicate slugs, removes stale files)
- `src/data/types.ts` — `Project` interface (all available frontmatter fields)
- `src/data/projects.server.ts` — server-only data loader (uses `gray-matter`)
- `content/projects/*.md` — synced files, committed to this repo (do NOT edit directly; they are overwritten on next sync)
- `src/app/_components/` — shared client components (FadeSection, MountFade, HeroSection, FeaturedCard, FadeItem)
- `src/app/projects/_components/ProjectCard.tsx` — list page card component

**Featured projects on home page**: controlled by `featured: true` frontmatter flag plus `order` (ascending). Currently: Football Finance (order 10), YouTube Analytics (order 20). Set any other case study to `featured: true` and it will appear automatically.

## Cross-Project Links

This project is one of four in David's career system. The command center lives at `C:\Users\61422\LocalOnly\Projects\career-hub\` — open that repo first and read its `dashboard.md` for cross-project state and the current Primary Action.

- **Consumes from `content-creation`**: case studies via the markdown sync above. Never edit `content/projects/*.md` directly — they are overwritten on next sync. Source of truth = `content-creation/1 - Projects/b - Project Summaries/`.
- **Feeds `job-search`**: davidmerry.me is the proof link for CV, LinkedIn, recruiter conversations, and cold outreach.
