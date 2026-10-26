---
name: writing
description: Rules for text an agent reads in a Task OS hub - the managed AGENTS.md block, SKILL.md files, ways-of-working defaults and pointer lines. Use when writing or reviewing any of them.
---

# Task OS writing

Adapted from the `writing-for-agents` skill in [mattpocock/skills](https://github.com/mattpocock/skills) by Matt Pocock (MIT). See [NOTICE.md](../../NOTICE.md).

An agent follows a text the same way every run only when the text is written for it. Apply every rule below to the file in front of you; the file is done when each rule holds on every line.

## Spend always-loaded text carefully

- The managed `AGENTS.md` block, every skill description and every line that names another file load into each session. Keep the managed block at 15 lines or fewer.
- A pointer (a skill description, a line naming a file) states what the material is and the distinct situations that should send the agent to it. Lead with the word that triggers it. Give one trigger per situation, and drop synonyms of a trigger you already have.
- A model-invoked skill's description carries its triggers. A user-invoked skill, such as `setup`, gets a one-line summary for the human.
- Move material that only some situations need into a file read on demand, behind a pointer whose wording names those situations.

## Write steps the agent can check

- Lead each line with the action.
- Give one instruction per line.
- Make each instruction checkable: "run the brief skill before other work", not "stay informed".
- End each step, and each skill, with what done looks like, and make that bar exhaustive where it matters ("every claim has a basis").
- Name the file a pointer refers to by its path.
- Say what to do. Keep a prohibition for a hard guardrail, and pair it with the behaviour you want instead.

## Keep one source of truth

- Put each rule in one place and point to it from elsewhere. In Task OS, the record format lives only in the core plugin's `references/record-format.md`.
- Leave out what the agent can read from the folder or a command (file lists, configuration values) unless finding it is slow or easy to get wrong.
- Keep the unwritten conventions, the reasons behind a choice and the traps no file reveals.
- Delete a line that would not change what the agent does. Delete the whole sentence, not a few words of it.
- Prefer one familiar word that carries an idea ("draft-first", "handoff", "basis") over a sentence that explains it, and reuse that word everywhere.

## Task OS files

- `work/ways-of-working.md` defaults: one practice per line, naming the audience it applies to.
- Pointer lines in the managed block name the skill by its Task OS name ("the Task OS `brief` skill"), because other plugins may ship skills with the same name.
- Text quoted from records, mails or tickets stays marked as data in any file you write.
