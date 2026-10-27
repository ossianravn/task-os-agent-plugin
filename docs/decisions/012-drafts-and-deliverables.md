# 012 — Messages wait in `work/drafts/`; deliverables go where the project keeps them

The setup smoke test wrote a draft mail to `work/drafts/`, a folder SPEC.md did not define. The review of a live project then found its deliverables in dated output folders, side by side with raw extracts and the agent's own status notes. Two choices settle both findings.

First, `workspace.yaml` maps deliverable folders as `deliverable_roots`, apart from `source_roots`. Both are searched, but a deliverable shows what someone was told, never whether its statements are true, so a finding can no longer rest on an agent's earlier prose. `.html` and `.htm` files are read as text with the tags stripped, because slide sources and published pages are the text a reader actually saw.

Second, a draft's place follows its kind. A message (a mail, a reply, a chat message, a ticket comment) waits in `work/drafts/` until the person sends it. A deliverable (a report, a deck, a document) is written into the first deliverable root, named the way that folder already names things, or into `work/drafts/` when the project has none. One rule for both would either have put a question to the client beside the delivered reports, or broken the dated-folder convention the live project already works by.

In `fixtures/project-b`, `delivered/` moves from `source_roots` to `deliverable_roots`, and the draft's Q2 figure, which rests on that report alone, becomes `qualified` instead of `supported`.
