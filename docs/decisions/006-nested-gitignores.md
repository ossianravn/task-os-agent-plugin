# 006 — Nested ignore files instead of editing `.gitignore`

Setup keeps machine-local and captured files out of Git without touching an existing `.gitignore`. It writes `.taskos/.gitignore` (`local/`, `index.sqlite*`, `.lock`) and `work/.gitignore` (`sources/`). Git applies a nested ignore file to its own folder, so the effect matches SPEC.md section 12. Adopt-in-place rule 1 still holds: no existing file changes except the appended `AGENTS.md` block and, when needed, a `CLAUDE.md` import.
