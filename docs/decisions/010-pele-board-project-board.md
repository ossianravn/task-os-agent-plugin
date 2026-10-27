# 010 — Pele Board shows the project on a live board from stage 1

The promise that Task OS keeps track of every task is easier to trust when the user can see the tracking. Pele Board draws Mermaid diagrams on a live page in the user's browser and updates them in place, on every platform with Node.js 20 or later. From stage 1, when its `show_diagram` tool is exposed, Task OS keeps two diagrams on it:

- `taskos-tasks`: a kanban of the tasks by status (Active, Waiting, Backlog, and the five most recently done), one card per task with its owner, captioned with the next step.
- `taskos-plan`: a left-to-right flowchart drawn from the newest handoff: the steps just finished, the next action, the steps after it, and each blocker with a dashed arrow to the step it holds up, marked with Pele's `done`, `active`, `todo` and `blocked` classes.

The ids stay fixed, so each draw replaces the one before. `brief` draws both at the start of a session and ends with the board's address; `capture` redraws `taskos-tasks` whenever a task is created or changes; `handoff` redraws both from the new handoff; `setup` draws both once the first task and its handoff exist. The rules live in `plugins/task-os/references/project-board.md`, which the four skills point to.

The board is a view, never a source of state. Pele keeps diagrams in memory for one session, so `brief` draws the board again each time from the records in `work/`; a task changes when its record changes, and the board follows. The workspace records the choice as `modules.pele-board`.

Pele Board installs from its own marketplace, with the commands its README documents: in Claude Code `/plugin marketplace add ossianravn/pele-agent-plugin`, then `/plugin install pele-board@pele-board`; in Codex `codex plugin marketplace add ossianravn/pele-agent-plugin`, then `codex plugin add pele-board@pele-board`. `setup` recommends it on every platform alongside open-cu ([009](009-open-cu-from-stage-1.md)), as a recommendation rather than a dependency: Task OS works fully without it, and uses it as soon as its tool is exposed.

Checked 2026-10-27 with Pele Board 0.1.0 in Claude Code 2.1.306: both diagrams, drawn from the setup test's records for `fixtures/project-b`, were accepted and rendered in light and dark mode. The README shows them.
