---
name: handoff
description: Write this session's Task OS handoff - goal, state, evidence, decisions, blockers, next action. Use without being asked when work in a Task OS hub stops or the user signs off, or when asked.
---

# Task OS handoff

Leave the next session, in either host, enough to continue without the user restating anything. Write the record as [the record format](../../references/record-format.md) says. `<plugin>` is the plugin root, two folders above this skill's folder.

1. Find the hub: the nearest `.taskos/workspace.yaml` at or above the working directory. If there is none, say so and stop.
2. Save what is unsaved first: anything from this session not yet in a record goes through the Task OS `capture` skill, so the handoff can cite ids.
3. Run `node "<plugin>/scripts/new-id.mjs" 1` for the time, host and session. Search `work/records/` for a handoff whose `recorded_by.session` is this session. If one exists, replace it in place, keeping its `id` and `created_at`. Otherwise write a new one.
4. Fill every field:
   - `goal`: the outcome being worked toward, in one sentence.
   - `state`: what is true now, one line per fact, each with its record ids.
   - `evidence`: ids of the records and evidence this session relied on.
   - `decisions`: ids of the decisions made or confirmed.
   - `artifacts`: workspace-relative paths of files created or changed, such as drafts.
   - `blockers`: what stops progress, and who can unblock it.
   - `next_action`: the one next step, concrete enough to start without asking.
   - `rationale`: why that step comes next.
5. When `work/ways-of-working.md` records that the user also wants a session entry in the legacy log, append a dated entry to the mapped legacy log as well.
6. Reply with the handoff's path and its next action.
