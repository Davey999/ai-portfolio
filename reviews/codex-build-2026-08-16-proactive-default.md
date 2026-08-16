# Build 2026-08-16

**Builder:** Codex
**Base commit:** 4ef9d4f
**Task:** Make proactive website coaching the default when David opens a
conversation without a stated task.

## Files created or modified

- `PROJECT_STATUS.md` — records the default proactive opening and its override
  rule.
- `AGENTS.md` — requires every future agent session to follow that default.
- `reviews/codex-build-2026-08-16-proactive-default.md` — this handoff record.

## What is done

- When David has not stated a task, Codex must lead with the highest-value
  action and why it is the priority.
- A specific request from David always overrides that default agenda.

## What still needs to happen

- On the next open-ended website conversation, apply the rule and propose the
  single most valuable move from the current status.

## Status

- [ ] Reviewed and actioned by Claude Code in commit <SHA>
