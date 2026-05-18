# reviews/

Durable record of every review / gap analysis. This folder is the bridge
between agents: Codex (or Claude Code) writes findings here as a committed
file, so the next session of the other agent can pick them up. Findings that
live only in chat do not survive and do not cross between agents.

## Naming

- `codex-review-YYYY-MM-DD.md` — Codex review or gap analysis
- `codex-build-YYYY-MM-DD.md` — Codex build summary (when Codex drafts files)
- `claude-review-YYYY-MM-DD.md` — Claude Code review

One file per pass. Date is the day the work was run, absolute, no relative dates.

## Review template

```markdown
# Review YYYY-MM-DD

**Reviewer:** Codex | Claude Code
**Reviewed commit:** <git short SHA the review is against>
**Scope:** <what was reviewed, e.g. about page copy + writing page links>

## Gaps / issues found

1. <issue> — <why it matters> — <suggested fix>
2. ...

## Pressure-test

<Where decisions may be optimistic, inconsistent, or drifting from the site's stated objective.>

## Disagreements

<Anything the reviewer would approach differently, with reasoning.>

## Status

- [ ] Addressed by <agent> in commit <SHA>
```

## Build summary template

```markdown
# Build YYYY-MM-DD

**Builder:** Codex
**Base commit:** <git short SHA work started from>
**Task:** <what was asked, e.g. "rewrite About page right column copy">

## Files created or modified

- `<path>` — <what changed>

## What is done

<Brief description of completed output.>

## What still needs to happen

<Next actions for Claude Code or David.>

## Status

- [ ] Reviewed and actioned by <agent> in commit <SHA>
```

## Lifecycle

A review is open until its `Status` checkbox is ticked with the commit that
addressed it. Old reviews are kept, not deleted: they are the audit trail of
how the project evolved.
