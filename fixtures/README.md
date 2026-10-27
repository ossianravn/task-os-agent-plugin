# Fixtures

Two projects the acceptance scenarios run against (SPEC.md section 13). Layout and matching rules: [docs/decisions/001-fixture-layout.md](../docs/decisions/001-fixture-layout.md).

| Fixture | Shape | As of |
| --- | --- | --- |
| `project-a` | Embedded web analytics consultant; direct access to GA4, GTM, Jira and Azure DevOps; order data through the client | 2026-10-16 |
| `project-b` | Occasional newsletter reporting for a small client; mail only, numbers arrive as exports | 2026-10-06 |

Each fixture has `folder/` (the project folder before Task OS), `inputs/` (drafts a session brings in) and `expected/expected.yaml` (what a correct run produces). Never edit `folder/` to make a test pass; change `expected/` only after review.

Scenario 7 uses both fixtures as hubs and attaches an empty Git repository that the test creates. Scenarios 5 and 8 need no fixture data.
