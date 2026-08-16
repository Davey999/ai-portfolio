# Build 2026-08-16

**Builder:** Codex
**Base commit:** 0df6f51
**Task:** Align Claude Code and Codex session handoffs and establish both as
equal project collaborators.

## Files created or modified

- `AGENTS.md` - establishes `reviews/` as the committed cross-agent record and
  requires the receiving agent to read and resolve open handoff notes. It also
  makes Codex an equal build-and-review collaborator rather than a reviewer by
  default.
- `CLAUDE.md` - defines the Codex build handoff and requires Claude's
  `/handover` to incorporate open Codex notes into the local session diary. It
  also records that either agent may plan, build, debug, write, or review.
- `C:\Users\61422\.claude\skills\handover\SKILL.md` - adds `reviews/` to
  Claude Code's handover inputs and clarifies that it is evidence, not a second
  diary.
- `C:\Users\61422\.agents\skills\handover\SKILL.md` - adds a project-level
  override so Codex follows a repository's committed `reviews/` protocol rather
  than writing competing session records.

## What is done

The handoff contract is now:

1. The active agent works from a clean tree.
2. Either Claude Code or Codex can do the requested project work.
3. Codex commits its code plus a dated build or review note in `reviews/`.
4. Claude Code reads that note before related work and updates its status when
   resolved.
5. Claude Code's `/handover` folds the relevant outcome into local
   `HANDOVER.md` and selectively updates its durable memory.

Each tool's private memory remains private generated state; the committed
repository files are the shared source of truth.

## What still needs to happen

- Commit and push this configuration change.
- In the next Claude Code session, run `/handover` once to add this workflow
  change to the local session diary and durable memory where appropriate.

## Status

- [ ] Reviewed and actioned by Claude Code in commit <SHA>
