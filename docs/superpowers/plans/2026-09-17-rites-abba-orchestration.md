# RITES ABBA Orchestration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Connect RITES to ABBA as the ecosystem orchestration/intelligence layer while keeping RITES as the continuity system of record and preserving explicit human authority over consequential actions.

**Architecture:** RITES emits governed continuity intents and context envelopes. ABBA receives those envelopes through the existing authenticated `abba` Supabase Edge Function, resolves common-layer references, proposes plans, and returns an authority-gated execution state. RITES never grants authority and never creates a competing identity, governance, ledger, or AI primitive; the existing Continuum and OMNII contracts remain authoritative.

**Tech Stack:** React/Vite, Supabase JS, Supabase Edge Functions, framework-agnostic JavaScript domain contracts, Node test runner.

**Spec:** `docs/superpowers/specs/2026-08-18-rites-continuum-design.md`

## Global Constraints

- RITES remains the continuity system of record; ABBA is orchestration/intelligence, not ownership of RITES continuity data.
- Consequential actions remain blocked unless the applicable authority/capability/consent checks succeed.
- RITES must not create a competing identity, authority, ledger, banking, governance, or constitutional ontology.
- No new visual language or vendor dependency; retain the existing Audubon-inspired RITES experience.
- Browser calls use the existing Supabase client boundary and authenticated `abba` Edge Function.

---

### Task 1: Add the ABBA intent/context contract

**Files:**
- Create: `src/abba-contract.mjs`
- Test: `tests/abba-contract.test.mjs`

**Interfaces:**
- Consumes: RITES continuity objects, service requests, action classes, authority/consent/evidence references.
- Produces: deterministic ABBA request envelopes with `objective`, `subjectRef`, `operatingContextId`, `capabilityRef`, `denominatorRefs`, `requiresHumanApproval`, `execute`, `constraints`, `memoryScope`, and `evidenceRequirements`.

- [ ] Write failing tests for plan mode, execution mode, bounded refs, and high-impact action classification.
- [ ] Run `node --test tests/abba-contract.test.mjs` and verify failure.
- [ ] Implement `createAbbaRequest`, `classifyAbbaIntent`, and `toAbbaContext` without network calls.
- [ ] Run the targeted test and verify PASS.

### Task 2: Add the authenticated ABBA client boundary

**Files:**
- Create: `src/lib/abba.js`
- Test: `tests/abba-client.test.mjs`
- Modify: `.env.example`

**Interfaces:**
- Consumes: `createAbbaRequest` and the existing Supabase client.
- Produces: `askAbba(input)` returning the authenticated Edge Function response without storing authority locally.

- [ ] Write a failing fake-client test for `functions.invoke('abba', ...)`.
- [ ] Run the targeted test and verify failure.
- [ ] Implement `askAbba`, including configuration/error handling and server response propagation.
- [ ] Add `VITE_ABBA_FUNCTION=abba` to `.env.example`.
- [ ] Run the targeted test and verify PASS.

### Task 3: Connect the RITES intelligence surface to ABBA

**Files:**
- Modify: `src/main.jsx`
- Test: `tests/abba-ui-contract.test.mjs`

**Interfaces:**
- Consumes: `askAbba` and active RITES service/query state.
- Produces: visible ABBA planning status, next-step proposal, authority requirements, and errors without executing consequential work.

- [ ] Write a failing UI contract test for ABBA invocation and status rendering.
- [ ] Run it and verify failure.
- [ ] Route intelligence submission through ABBA with `execute:false` planning mode.
- [ ] Rename AI-facing labels from `RITES INTELLIGENCE` to `ABBA` while keeping `RITES` as the product name.
- [ ] Surface authority/consent requirements as workflow information only.
- [ ] Run targeted and existing domain/conformance tests.

### Task 4: Harden the canonical database security boundary

**Files:** canonical Supabase database

**Interfaces:**
- Consumes: existing PostGIS `public.spatial_ref_sys` table.
- Produces: RLS-enabled spatial metadata without altering RITES ownership semantics.

- [ ] Enable RLS on `public.spatial_ref_sys`.
- [ ] Verify `relrowsecurity = true`.
- [ ] Re-run RITES table/health checks.

### Task 5: Document ABBA conformance and operational boundary

**Files:**
- Modify: `ECOSYSTEM_CONFORMANCE.md`
- Modify: `OMNII_CONFORMANCE.md`
- Create: `docs/RITES_ABBA_ORCHESTRATION_V1.md`

**Interfaces:**
- Consumes: the contract and integration behavior from Tasks 1–4.
- Produces: the canonical RITES→ABBA→OMNII authority boundary for future adapters and agents.

- [ ] Document routing, planning, execution gating, evidence, and authority boundaries.
- [ ] Document that ABBA cannot issue authority or replace the human authority model.
- [ ] Add the role to conformance documents without creating a new primitive.

### Task 6: Verify, review, and merge

**Files:** none beyond Tasks 1–5.

- [ ] Run the repository test suite.
- [ ] Run the production build.
- [ ] Verify `abba` is active and JWT-protected.
- [ ] Verify `rites-automation-tick` remains active and prepare-only.
- [ ] Verify canonical RITES tables and authority checks.
- [ ] Open and review a pull request to `main`, then merge after clean verification.
