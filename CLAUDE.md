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

**How to invoke Codex:** Run `/codex:review` from within Claude Code (Codex is
a Claude Code marketplace plugin). Use `/codex:adversarial-review` to
pressure-test decisions. Run `/codex:setup` first if Codex has not been used
recently.

**Commit attribution:** prefix every commit subject with `[claude]`, `[codex]`,
or `[david]` so `git log` stays a clear record of who did what.
