# Compatibility

Host versions each stage was tested against, and the outcome of its acceptance scenarios (SPEC.md section 14, rule 9).

## Stage results

| Stage | Date | Scenarios | Outcome |
| --- | --- | --- | --- |
| 0 | 2026-10-26 | none; exit is a human review of `fixtures/` and `expected/` | approved by the user |
| 1 | 2026-10-26 | none; exit is a week of real use, logged in [docs/stage-1-findings.md](docs/stage-1-findings.md) | packaging checked (below); real use not started |

## Checks, stage 1

All on Windows 11 Pro (10.0.26200), Node 24.19.0, against the working tree before the stage 1 commit.

| Host | Version | Source | Check | Outcome |
| --- | --- | --- | --- | --- |
| Claude Code | 2.1.306 | local checkout | `claude plugin validate` on the marketplace and the three plugins | passed. The public-directory checks report no LICENSE or icon; publishing there is out of scope |
| Claude Code | 2.1.306 | local checkout, isolated `CLAUDE_CONFIG_DIR` | `marketplace add`, `install` of all three plugins, `plugin details` | installed and enabled. Skills: `brief`, `capture`, `handoff`, `setup`; `grill`; `writing`. About 200 tokens loaded in every session |
| Claude Code | 2.1.306 | local checkout, `--plugin-dir`, non-interactive | `/task-os:setup` on a copy of `fixtures/engagement-b/folder` | completed in 91 turns. Originals unchanged; 17 records with valid frontmatter. Findings in [docs/stage-1-findings.md](docs/stage-1-findings.md) |
| Codex CLI | 0.163.0 | local checkout, isolated `CODEX_HOME` in a path with a space | `marketplace add`, `plugin add` of all three plugins | installed into the plugin cache; the id script runs from the cached path |
| Codex CLI | 0.163.0 | same | `codex debug prompt-input` | the model sees `task-os:brief`, `task-os:capture`, `task-os:handoff`, `task-os-grill:grill` and `task-os-writing:writing` with full descriptions; `task-os:setup` is hidden from implicit use, as configured |

Not exercised: installing from GitHub (stage 1 is not pushed yet), a live Codex session, explicit `$task-os:setup` in Codex, the Codex desktop app, WSL and macOS.

## Host behaviour observed

- Codex 0.163.0 shows about 200 characters of a skill description in the model's skill list and cuts the rest. Two descriptions were shortened to fit.
- Codex lists plugin skills as `<plugin>:<skill>`, the same form as Claude Code's `/plugin:skill`.
- `codex plugin marketplace add` did not install the core plugin, despite `INSTALLED_BY_DEFAULT`; `codex plugin add task-os@task-os` did.
- Codex also loads skills from `~/.agents/skills` when `CODEX_HOME` points elsewhere.
- Claude Code reads `AGENTS.md` directly from 2.1.277 unless a `CLAUDE.md`, `.claude/CLAUDE.md` or `CLAUDE.local.md` exists in the folder or above it (docs checked 2026-10-26).
- Claude Code exports `CLAUDE_CODE_SESSION_ID` to shell commands. Codex is expected to export `CODEX_THREAD_ID` (seen in a Codex commit, not in the docs); not yet observed.
