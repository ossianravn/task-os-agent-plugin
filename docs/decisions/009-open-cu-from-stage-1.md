# 009 — open-cu is the on-screen route from stage 1

Task OS is meant to let the agent work in any app, site or system, and connectors reach only the systems that have an MCP server, plugin or connector. open-cu covers the rest: it operates any app or site on screen, on Windows 10/11 and macOS 14+. It therefore moves from a stage 4 listing to stage 1.

open-cu installs from its own marketplace, with the commands its README documents: in Claude Code `/plugin marketplace add ossianravn/open-computer-use`, then `/plugin install open-cu@open-cu`; in Codex `codex plugin marketplace add ossianravn/open-computer-use`, then `codex plugin add open-cu@open-cu`. Each plugin keeps one install path, owned and kept current by its own project, so a user who already runs open-cu has nothing to change. `setup` recommends it on Windows and macOS, checks whether its tools are already exposed, and gives those commands for the host; on macOS it points to the Accessibility and Screen Recording permissions. It stays a recommendation rather than a plugin dependency, because a dependency would install a server that cannot start on Linux, which open-cu has no helper for yet.

System records gain `route` (`connector` or `on_screen`) for directly reached systems; a reading taken on screen is an evidence record whose locator names the app or site and the view (`screen:…`). The `AGENTS.md` block (marker `v0.4`) tells the agent to open `on_screen` systems itself, and its data rule covers screen text. open-cu's own guard rails apply, and Task OS's ask-first rule covers every change outside the folder.

Revised 2026-10-27: the first version listed open-cu in both Task OS marketplaces as `open-cu@task-os`. That listing is gone; the install follows open-cu's README, as above.
