# 004 — LF line endings, with two exceptions

All text files are stored with LF (`.gitattributes`: `* text=auto eol=lf`), so `npm run validate` can compare `dist/` with a fresh build byte for byte on every OS, and fixture files have the same bytes on every checkout. Windows launcher scripts (`*.cmd`) use CRLF. Saved mail (`*.eml`) is stored exactly as captured, with CRLF, because real mail files have it and the source indexer must handle both; `.gitattributes` marks it `-text` so Git never converts it.
