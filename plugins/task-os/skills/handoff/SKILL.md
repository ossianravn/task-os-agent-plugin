---
name: handoff
description: Write this session's Task OS handoff - goal, state, evidence, decisions, blockers, next action. Use without being asked when work in a Task OS hub stops or the user signs off, or when asked.
---

# Task OS handoff

Leave the next session, in either host, enough to continue every workstream this session touched without the user restating anything. Write the records as [the record format](../../references/record-format.md) says. `<plugin>` is the plugin root, two folders above this skill's folder.

1. Find the hub: the nearest `.taskos/workspace.yaml` at or above the working directory. If there is none, say so and stop.
2. Save what is unsaved first: anything from this session not yet in a record goes through the Task OS `capture` skill, so the handoff can cite ids.
3. List the workstreams this session worked on, from the records it wrote and the work it did. Each one gets its own handoff, with its `workstream_id`.
4. Run `node "<plugin>/scripts/new-id.mjs" <count>` for the ids, time, host and session. For each workstream, search `work/records/` for a handoff with this `recorded_by.session` and this `workstream_id`. If one exists, replace it in place, keeping its `id` and `created_at`. Otherwise write a new one.
5. Fill every field:
   - `goal`: the outcome being worked toward, in one sentence.
   - `state`: what is true now, one line per fact, each with its record ids.
   - `evidence`: ids of the records and evidence this session relied on.
   - `decisions`: ids of the decisions made or confirmed.
   - `artifacts`: workspace-relative paths of files created or changed, such as drafts.
   - `blockers`: what stops progress, and who can unblock it.
   - `next_action`: the one next step, concrete enough to start without asking.
   - `rationale`: why that step comes next.
6. Rewrite `work/views/overview.md` from the records, as "The overview" in the record format says: every workstream that is not done with its newest handoff's next action, the active and waiting tasks, and the broken routes.
7. Follow "Decisions on instructions" in `work/ways-of-working.md` for the project's own log. When the user kept a rule to log each session, append a dated entry to the mapped legacy log. When they kept a status section true, such as "Now", rewrite only that section from the overview. Change nothing else in the file.
8. When the Pele Board's `show_diagram` tool is available, draw `taskos-plan` from the handoff of the workstream worked on last, and `taskos-tasks`, as [the project board reference](../../references/project-board.md) says.
9. Reply with one line per workstream: its handoff's path and next action.
