# Compatibility

Host versions each stage was tested against, and the outcome of its acceptance scenarios (SPEC.md section 14, rule 9).

## Stage results

| Stage | Date | Scenarios | Outcome |
| --- | --- | --- | --- |
| 0 | 2026-10-26 | none; exit is a human review of `fixtures/` and `expected/` | approved by the user |
| 1 | 2026-10-26 | none; exit is a week of real use, logged in [docs/stage-1-findings.md](docs/stage-1-findings.md) | packaging checked (below); real use not started |

## Checks, stage 1

All on Windows 11 Pro (10.0.26200), Node 24.19.0. The local checks ran against the working tree before the stage 1 commit; the GitHub checks ran against commit `22fc0dc`.

| Host | Version | Source | Check | Outcome |
| --- | --- | --- | --- | --- |
| Claude Code | 2.1.306 | local checkout | `claude plugin validate` on the marketplace and the three plugins | passed. The public-directory checks report no LICENSE or icon; publishing there is out of scope |
| Claude Code | 2.1.306 | local checkout, isolated `CLAUDE_CONFIG_DIR` | `marketplace add`, `install` of all three plugins, `plugin details` | installed and enabled. Skills: `brief`, `capture`, `handoff`, `setup`; `grill`; `writing`. About 200 tokens loaded in every session |
| Claude Code | 2.1.306 | local checkout, `--plugin-dir`, non-interactive | `/task-os:setup` on a copy of `fixtures/project-b/folder` | completed in 91 turns. Originals unchanged; 17 records with valid frontmatter. Findings in [docs/stage-1-findings.md](docs/stage-1-findings.md) |
| Codex CLI | 0.163.0 | local checkout, isolated `CODEX_HOME` in a path with a space | `marketplace add`, `plugin add` of all three plugins | installed into the plugin cache; the id script runs from the cached path |
| Codex CLI | 0.163.0 | same | `codex debug prompt-input` | the model sees `task-os:brief`, `task-os:capture`, `task-os:handoff`, `task-os-grill:grill` and `task-os-writing:writing` with full descriptions; `task-os:setup` is hidden from implicit use, as configured |
| Claude Code | 2.1.306 | GitHub `ossianravn/task-os-agent-plugin` at `22fc0dc`, isolated `CLAUDE_CONFIG_DIR` | `marketplace add`, `install` of all three plugins, `plugin details` | installed from the plugin cache; same four core skills; the id script runs from the cached copy |
| Codex CLI | 0.163.0 | GitHub at `22fc0dc`, isolated `CODEX_HOME` | `marketplace add`, `plugin add` of all three plugins, `codex debug prompt-input` | installed; the model sees the same five skills |
| Claude Code | 2.1.306 | Pele Board 0.1.0, installed from its own marketplace; checked 2026-10-27 | `show_diagram` with `taskos-tasks` (kanban) and `taskos-plan` (flowchart), drawn from the setup test records for `fixtures/project-b` | both accepted and rendered, in light and dark mode; the README screenshots come from this run |

### Core 0.6.0, 2026-10-27

The changes from the live-project review ([docs/stage-1-findings.md](docs/stage-1-findings.md)), checked against the local working tree.

| Host | Version | Source | Check | Outcome |
| --- | --- | --- | --- | --- |
| Claude Code | 2.1.306 | local checkout | `claude plugin validate` on the marketplace and the three plugins | passed |
| Codex CLI | 0.163.0 | local checkout, isolated `CODEX_HOME` | `marketplace add`, `plugin add task-os@task-os`, `codex debug prompt-input` | installed as 0.6.0; the model sees `task-os:brief`, `task-os:capture`, `task-os:handoff` and `task-os:verify`, each with its full description (verify: 192 characters) |
| Claude Code | 2.1.306 | local checkout, `--plugin-dir`, non-interactive, read-only tools | `/task-os:verify` on the Q3 draft from `fixtures/project-b/inputs/`, in a hub built by hand from `fixtures/project-b` with the three expected findings | ran twice, about 7 turns, 2.6 minutes and $0.80 each. Both runs returned a claim table, line edits that kept the draft's order, and additions offered apart; both said the draft is not ready and edited nothing. The first run deleted Anna's 41 % instead of crediting it to her, and called the Q2 figure, found only in last quarter's report, evidence-needed. The skill now says both explicitly. The second run matched `expected.yaml`: line 5 credits Anna and names the Q2 report, and lines 6–8 are qualified to July and August |

Not exercised for 0.6.0: `setup` on a real or fixture folder, the `handoff` overview, a correction reaching a deliverable, and installs from GitHub.

The first GitHub attempt failed in both hosts with Git's "Filename too long", because the isolated test folders sat under a 130-character temporary path and the clone's deepest file reached 270 characters. With `core.longpaths` set for the test processes only, both installs passed. Under a normal `C:\Users\<name>\.claude` or `.codex`, the deepest file is about 165 characters, well under Windows' 260-character limit.

Not exercised: a live Codex session, explicit `$task-os:setup` in Codex, the Codex desktop app, WSL and macOS. open-cu and Pele Board install from their own marketplaces, with the commands their READMEs document; their own compatibility records cover those installs, and this repo has not repeated them.

## Host behaviour observed

- Codex 0.163.0 shows about 200 characters of a skill description in the model's skill list and cuts the rest. Two descriptions were shortened to fit.
- Codex lists plugin skills as `<plugin>:<skill>`, the same form as Claude Code's `/plugin:skill`.
- `codex plugin marketplace add` did not install the core plugin, despite `INSTALLED_BY_DEFAULT`; `codex plugin add task-os@task-os` did.
- Codex also loads skills from `~/.agents/skills` when `CODEX_HOME` points elsewhere.
- Claude Code reads `AGENTS.md` directly from 2.1.277 unless a `CLAUDE.md`, `.claude/CLAUDE.md` or `CLAUDE.local.md` exists in the folder or above it (docs checked 2026-10-26).
- Claude Code exports `CLAUDE_CODE_SESSION_ID` to shell commands. Codex is expected to export `CODEX_THREAD_ID` (seen in a Codex commit, not in the docs); not yet observed.
