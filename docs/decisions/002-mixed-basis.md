# 002 — A claim built from mixed inputs takes the weakest basis

A finding that combines inputs of different basis gets the weakest of them and cites every input. The usual case is a comparison: GA4 purchases the person saw in the property (`observed`) against order counts the client sent (`reported`) gives a finding with basis `reported` and both sources in `source_refs`. Order from strong to weak: `observed`; then `user_stated` and `reported`; then `inferred`; then `assumed`. Without this rule, `verify` would present a comparison as observed when one side of it is somebody's report.
