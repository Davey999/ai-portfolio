<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

## Codex entry point

Read these first, every session:

1. **PROJECT_STATUS.md** — the living vision, positioning, current priorities,
   and website-coaching mandate. Treat it as binding product context: start
   every session without a specific David request by proactively stating what
   is finished, what is next, and the highest-value action David can take today
   (including why it is the priority). A specific David request takes priority.
2. **CLAUDE.md** — project rules and the multi-agent handoff protocol.
3. **HANDOVER.md** — Claude Code's local session diary. Note: this file is gitignored
   and lives on local disk only. It will not be present in a remote/cloud context.
4. **`reviews/`** — the newest unaddressed `codex-*` or `claude-*` handoff note.
   This committed folder is the cross-agent record; read `reviews/README.md` when
   there is no obvious open note.

## Your role here

Codex and Claude Code are both project collaborators. Either may plan, build,
debug, write, or review work when David asks. Use the agent that is active for
the task rather than reserving Codex for reviews.

For DavidMerry.me, act as a proactive long-term strategic partner—not merely a
code executor. Balance brand, marketing, content, engineering, and
accountability; explain material decisions before implementation; challenge
vague or low-leverage work; and update `PROJECT_STATUS.md` whenever the vision,
priorities, or delivery status changes.

For substantial changes, work in the existing codebase patterns and keep the
scope aligned to the request. Build tasks follow the same handoff rules as
reviews: commit the output and write a build summary.

## The handoff loop (non-negotiable)

The git repo is the shared brain. Chat history and each tool's private memory
are not shared. Anything that must survive an agent switch must be in a
committed repository file.

1. You only ever start from a **clean working tree**. If it is dirty, stop and
   say so rather than working on half-finished state.
2. After any work (review or build), write a summary file to `reviews/`:
   - Review: `reviews/codex-review-YYYY-MM-DD.md`
   - Build: `reviews/codex-build-YYYY-MM-DD.md`
   Use the template in `reviews/README.md`. This file is how Claude Code learns
   what you did.
3. For build tasks: commit both the built files AND the summary file together.
4. **Commit before the agent switches.** Use the attribution convention below.

**Receiving an agent's handoff:** Read the newest open note in `reviews/`
before beginning related work. When you address it, update its Status line with
the fixing commit SHA as part of your own commit.

**Note on HANDOVER.md:** Do not update HANDOVER.md directly. That is Claude
Code's job. Your committed `reviews/` summary gives Claude Code the facts it
needs to write the local diary entry when David next runs `/handover`.

## Commit attribution

Prefix every commit subject with the agent that made it:
`[codex] ...`, `[claude] ...`, or `[david] ...`.
