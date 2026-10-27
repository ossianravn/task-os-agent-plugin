# Stage 1 findings

What the schema and layout got wrong in use, to feed back into SPEC.md sections 4 and 5 before stage 2 (SPEC.md section 13, stage 1 exit). Add an entry for each problem seen during the week of real use: what happened, where, and what would fix it.

## From the setup smoke test, 2026-10-26

Claude Code 2.1.306 ran `setup` once, non-interactively, on a copy of `fixtures/project-b/folder`, with the interview answers given up front.

- **No home for drafts.** Setup wrote the draft mail to Anna to `work/drafts/`, a folder SPEC.md section 4 does not define. Draft-first output needs a defined place, either `work/drafts/` or the user's own folder (`delivered/` in this fixture).
- **Disputed across scopes.** Anna's 41% for Q3 was marked `disputed` against the export's 37.8% for July and August. Different scopes do not contradict each other. Fixed in `references/record-format.md`; `expected.yaml` already expects both records to stay `current`.
- **Setup is costly by hand.** The run took 91 turns, 9 minutes and $2.76 for a five-file folder. The stage 2 CLI (`adopt scan`, `capture`) should take most of that work off the model.
- **The clock was real.** The run used today's date, after the fixture's `as_of` of 2026-10-06, and correctly reported that the deadline had passed. E2e tests need the pinned clock from decision 001.
- **Version check needs approval.** Setup could not run `claude --version` without approval, so it created `CLAUDE.md` containing only `@AGENTS.md`, which works on every version.

- **Task numbers differ from `expected.yaml`.** Setup made the session's first task (check the export) `T-1` and the Q3 summary `T-3`; `expected.yaml` gives the summary `number: 1`. Matching tasks by number is too strict when setup may split work into several tasks; match them by content, as decision 001 does for other records.

The rest agreed with `fixtures/project-b/expected/expected.yaml`. The original files were byte-identical afterwards. All 17 records had valid frontmatter and ids, and sources for every reported or observed claim. Mailchimp was recorded as `via_client` (since renamed `via_person`), supplied by Anna, and the interview stopped after four questions. The instruction in Anna's mail ("Det må gerne fremgå") was quoted, not followed.
