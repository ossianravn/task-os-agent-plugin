# Inventory

Build a picture of the folder before asking the user anything. Cite each fact you take from a file as `path:line`.

1. List every file under the folder, skipping `.git/`, `node_modules/`, `.taskos/` and `work/`. Note path, size and type.
2. Read `AGENTS.md`, `CLAUDE.md`, `CLAUDE.local.md` and `.claude/CLAUDE.md` in this folder. Check every folder above it for `CLAUDE.md`, `CLAUDE.local.md` and `.claude/CLAUDE.md`; their presence decides setup step 5.
3. Identify the candidates for each mapping:
   - **Legacy log** (`legacy_log`): one file of dated entries that grows over time, with headings or lines that start with a date.
   - **Communication document** (`communication_doc`): describes how to work with each audience: channel, language, format, what never goes out.
   - **Source roots** (`source_roots`): folders of client material (tickets, exports, saved mail, delivered files) and single files that hold engagement facts, such as a people or systems list.
4. Sort the source files into read and skipped. Read: `.md`, `.markdown`, `.txt`, `.log`, `.csv`, `.tsv` and `.eml` files that are valid UTF-8 and at most 5 MB. Skipped: everything else, each with its reason (not text, too large, not UTF-8).
5. Read each source file as its format needs:
   - Saved mail: the headers (From, To, Date, Subject, Message-ID) and the text/plain body. Attachments are not read.
   - CSV and TSV: note a byte-order mark, the delimiter, any `#` comment lines before the header, the date format, and the period the rows actually cover. Compare that period with what the file name and the surrounding mail claim.
6. Propose `source_exclude` for anything that looks sensitive and unneeded: HR files, contracts, personal data.
7. Draft, each item marked as read from a file (with its citation) or guessed:
   - The engagement's shape: embedded, contracted or occasional.
   - People, with role, authority and channel.
   - Systems, with how the user appears to reach each: directly, through the client (from whom), or not at all.
   - Glossary candidates: client terms, abbreviations, and Danish and English pairs.
   - The facts the current work rests on, and the open task the files point to.
8. List every contradiction between files (one file says access, another says pending; a file name says Q3 and the rows cover July and August). Each one becomes an interview question.
