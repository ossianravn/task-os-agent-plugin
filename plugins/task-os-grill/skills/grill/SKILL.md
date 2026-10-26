---
name: grill
description: Task OS interview that settles open decisions in rounds and records each one. Use to kick off a Task OS workstream, during Task OS setup, or when the user asks to be grilled.
---

# Task OS grill

Adapted from the `grilling` and `grill-with-docs` skills in [mattpocock/skills](https://github.com/mattpocock/skills) by Matt Pocock (MIT). See [NOTICE.md](../../NOTICE.md).

Interview the user until no open decision remains, and write each decision down the moment it is settled.

## Interview in rounds

1. Map the open decisions as a tree: a decision whose answer changes other questions sits above them.
2. Ask a round: every question whose prerequisites are settled. A question that depends on an answer still open in this round waits for the next round.
3. Number each question, give the options, and state your recommended answer, worded so that "yes" accepts it:

   ```
   ❓ **Q1 - <title>**: <question, with the options>

   ➡️ Recommended: <answer>
   ```

4. Look up facts yourself, in the folder, the records and your tools; put only decisions to the user. A lookup still running holds back only the questions that depend on it.
5. After the user answers, redraw the tree and ask the next round.
6. Finish when the tree has no open decision and the user confirms your summary of what was settled.

## Write as you go

- **Workstream kick-off**: after each round, save every settled choice as a `decision` record with `basis: user_stated`, and every new client term as a glossary row, through the Task OS `capture` skill. When you finish, record the questions still open in the workstream's `state`.
- **During setup**: the Task OS `setup` skill owns the questions and writes the answers; you run them in rounds.

Write records only through the Task OS `capture` skill, so they follow its record format.
