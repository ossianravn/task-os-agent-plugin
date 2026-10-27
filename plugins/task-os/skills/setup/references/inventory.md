# Inventory

Build a picture of the folder before asking the user anything. Size it up before you open anything, read each file only as far as the picture needs, and cite each fact you take from a file as `path:line`.

1. **Size up the folder.** List every file, skipping `.git/`, `node_modules/`, `.taskos/` and `work/`, with path, size and type, using the host's file listing or one shell command rather than opening files. Summarise by top-level folder: file count, total size, main file types and newest date.
2. **Propose excludes before reading.** Propose `source_exclude` for folders that hold bulk data rather than project knowledge: large analysis or data folders, compressed logs and archives (`.gz`, `.zip`, `.7z`), downloads, generated output, dependency and build folders. Add anything sensitive and unneeded: HR files, contracts, personal data. Show the user the summary and the proposed excludes, and wait for them to confirm or change the list before you read any file's content.
3. **Instruction files.** Read `AGENTS.md`, `CLAUDE.md`, `CLAUDE.local.md` and `.claude/CLAUDE.md` in this folder in full. Check every folder above it for `CLAUDE.md`, `CLAUDE.local.md` and `.claude/CLAUDE.md`; their presence decides setup step 6. Note each rule about logging, status sections and handoffs, and each section about writing to someone.
4. **The host's memory.** Claude Code keeps notes per folder in `~/.claude/projects/<name>/memory/`, where `<name>` is this folder's absolute path with every character other than a letter or digit replaced by `-` (`C:\Work\Acme` becomes `C--Work-Acme`). Read each note there, whichever host you run in. Codex keeps its memories in its own store: ask the user whether Codex holds notes about this project. For each note about this project, propose its home in `work/`: a person's preferences or background in their person record, a stance or reporting rule in `ways-of-working.md`, a system's access or an operating tip in its system record. Notes about other projects stay where they are.
5. **Candidates for each mapping.**
   - **Legacy log** (`legacy_log`): one file of dated entries that grows over time, with headings or lines that start with a date. Note any status section in it, such as "Now" or "Status", and any rule that asks agents to keep it true.
   - **Communication documents** (`communication_docs`): every file that says how to write to whom: the reader and what they know, channel, language, format, checklists, what never goes out. A language guide and a section of `AGENTS.md` both count; list each one.
   - **Source roots** (`source_roots`): raw material from systems and people: saved mail, exports, query results, tickets, and single files that list project facts, such as a people or systems list.
   - **Deliverable roots** (`deliverable_roots`): folders of what was made for others: reports, decks and their slide sources, dated output folders, earlier summaries and status notes, including an agent's own. When raw extracts sit inside an output folder, list those files as sources.
6. **Read or skip.** Read: `.md`, `.markdown`, `.txt`, `.log`, `.csv`, `.tsv`, `.eml`, and `.html` and `.htm` with the tags stripped, when they are valid UTF-8 and at most 5 MB. Skipped: everything else and everything excluded, each with its reason (not text, too large, not UTF-8, excluded).
7. **Read each file only as far as its kind needs.**
   - Instruction files, the legacy log and the communication documents: in full.
   - Saved mail: the headers (From, To, Date, Subject, Message-ID) and the text/plain body. Attachments are not read.
   - CSV and TSV: the header, the row count and the period the rows cover (the first and last date), never every row. Note a byte-order mark, the delimiter, any `#` comment lines before the header and the date format. Compare the period with what the file name and the surrounding mail claim.
   - Other text: headings and opening lines; read further only where the open work rests on the file.
   - A folder of many similar files, such as dated output folders or ticket exports: open a few, and describe the rest by their pattern.
8. **Draft**, each item marked as read from a file (with its citation) or guessed:
   - The project's shape: ongoing (your own role, or a long mandate), a contracted piece of work, or an occasional job.
   - People, with role, authority, channel, and what each appears to know about the work.
   - Systems, with how the user appears to reach each from each host (the tool and the account or profile), and what its data can and cannot show. For an export or a log, say how each column the work relies on was made.
   - Glossary candidates: the project's and organisation's terms, abbreviations, and Danish and English pairs.
   - The workstreams the files show, each with the open task it points to, and the facts the current work rests on.
9. **Contradictions.** List every contradiction between files (one file says access, another says pending; a file name says Q3 and the rows cover July and August). Each one becomes an interview question.
