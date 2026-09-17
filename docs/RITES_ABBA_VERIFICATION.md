# RITES ↔ ABBA Verification Record

Date: 2026-09-17

## Verified

- RITES ABBA request/context contract is present.
- ABBA transport is isolated from the browser-specific wrapper.
- RITES intelligence UI sends planning requests with `execute: false`.
- ABBA is configured as the RITES AI/orchestration presence.
- Consequential actions remain authority-gated.
- `abba` Edge Function is active and JWT-protected.
- `rites-automation-tick` is active and remains prepare-only.
- RITES persistence and workflow governance remain connected.

## Environment limitation

A full repository test/build could not be run in the current container because outbound GitHub access was unavailable and repository dependencies were not installed locally. Targeted contract/transport behavior was independently checked in an isolated container execution.

## Managed PostGIS limitation

The approved attempt to enable RLS on `public.spatial_ref_sys` was rejected by Supabase with PostgreSQL error `42501: must be owner of table spatial_ref_sys`. No ownership workaround or unsafe privilege escalation was introduced.

## Integration state

PR #5: `feat: route RITES orchestration through ABBA`.
