# Task OS

Turn the folder you already work from into an engagement hub that Claude Code and Codex share. Each session starts from a brief, findings and decisions are saved with the evidence behind them, and a handoff lets the next session, in either agent, carry on without you restating the context.

> **Stage 1 of the [build plan](SPEC.md).** Skills only: the agent writes Task OS records as plain markdown files. The command-line core, search index and session hooks arrive in stage 2. [COMPATIBILITY.md](COMPATIBILITY.md) lists what has been tested.

**Install:** [Claude Code](#claude-code) · [Codex](#codex) · then [set up a folder](#set-up-a-folder)

## What you need

- Claude Code 2.1.277 or later, or the Codex CLI.
- Node.js 22.18 or later on your `PATH`. The skills run a small bundled script to mint record ids.
- Nothing else: no account, API key or server. Task OS reads and writes files in your folder only.

## Install

### Claude Code

Inside Claude Code, submit:

```text
/plugin marketplace add ossianravn/task-os-agent-plugin
```

Then submit:

```text
/plugin install task-os@task-os
```

Choose **user** scope to have Task OS in every folder, then run `/reload-plugins` or start a new session. Typing `/task-os:` now lists `brief`, `capture`, `handoff` and `setup`.

To install from a terminal instead, run:

```bash
claude plugin marketplace add ossianravn/task-os-agent-plugin
```

```bash
claude plugin install task-os@task-os
```

### Codex

In a terminal, run:

```bash
codex plugin marketplace add ossianravn/task-os-agent-plugin
```

```bash
codex plugin add task-os@task-os
```

Start a new Codex session. Running `/skills` lists `task-os:setup`, `task-os:brief`, `task-os:capture` and `task-os:handoff`.

## Set up a folder

Open your agent in the folder you work from for one client: a folder of notes, mails and exports, or an existing repository.

- In Claude Code, submit `/task-os:setup`.
- In Codex, type `$`, choose `task-os:setup`, and submit.

Setup lists what it finds and proposes what each file is. Then it asks only what the files can't answer: the work and your role, how work reaches you, which systems you can reach yourself and which only through the client, and the first task worth finishing. A short job takes four questions. It writes `.taskos/` and `work/`, appends a short block to `AGENTS.md`, and finishes that first task with you.

Setup never moves, renames or rewrites your files. The only existing file it changes is `AGENTS.md`, by appending its block. When Claude Code would otherwise skip `AGENTS.md`, setup also adds a one-line `@AGENTS.md` import to `CLAUDE.md`.

## Day to day

Ask in your own words; the block in `AGENTS.md` tells the agent which skill to use.

| Skill | Ask, for example | What it does |
| --- | --- | --- |
| `brief` | "Brief me." | Open workstreams and tasks, the last handoff, open questions |
| `capture` | "Log: sent the draft to Anna." "Capture that as a finding." | One record per claim, with how we know it and where it came from |
| `handoff` | "Write the handoff." | Goal, state, evidence, blockers and the next action, for the next session in either agent |
| `setup` | `/task-os:setup` in Claude Code, `$task-os:setup` in Codex | Adopts a folder, or reconciles a hub after changes |

## Modules

Two optional plugins come from the same marketplace:

- `task-os-grill`: an interview that settles open decisions in rounds and records each one. Needs the core plugin.
- `task-os-writing`: rules for writing the text agents read, such as the `AGENTS.md` block and skills.

Install them the same way: `/plugin install task-os-grill@task-os` in Claude Code, `codex plugin add task-os-grill@task-os` in Codex.

## What Task OS writes

```text
AGENTS.md                your instructions, followed by one Task OS block
.taskos/workspace.yaml   the hub's id, which of your files are sources, enabled modules
.taskos/local/           your profile and setup progress, ignored by Git
work/                    context, ways of working, glossary, people, systems, workstreams, tasks and records
```

Each record is a markdown file with a short header that says what kind of record it is, how we know it (`observed`, `reported`, `inferred` and so on), and where it came from. The files are the source of truth; you can read them like any notes.

## Update and remove

| | Claude Code | Codex |
| --- | --- | --- |
| Update | `claude plugin marketplace update task-os`, then `claude plugin update task-os@task-os` | `codex plugin marketplace upgrade task-os` |
| Remove | `claude plugin uninstall task-os@task-os` | `codex plugin remove task-os@task-os` |

Removing the plugin leaves your hub folders as they are.

## Credits

`task-os-grill` and `task-os-writing` adapt skills from [mattpocock/skills](https://github.com/mattpocock/skills) by Matt Pocock, used under the MIT License. See their `NOTICE.md` files.

## Development

- [SPEC.md](SPEC.md) is the implementation spec; [docs/decisions/](docs/decisions/) records choices the spec left open.
- [fixtures/](fixtures/) holds the acceptance engagements and their expected results.
- Check the packaging with `claude plugin validate .` and `claude plugin validate plugins/task-os`.
- To try local changes, add the marketplace from your checkout path instead of GitHub. Claude Code reads a local marketplace in place; Codex copies each plugin into its cache, so reinstall it with `codex plugin add` after a change.
