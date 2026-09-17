# RITES ↔ ABBA Orchestration v1

## Boundary

RITES remains the canonical continuity product and system of record for continuity-specific data and workflow state. ABBA is the ecosystem orchestration and intelligence layer.

```text
RITES UI / Continuum
        ↓
RITES Intent + Context envelope
        ↓
ABBA authenticated control plane
        ↓
OMNII common-layer lookup + policy / authority checks
        ↓
Plan / decision / execution gate
        ↓
RITES workflow / audit state
```

## What ABBA may do

ABBA may read authorized context, analyze, curate, recommend, compare, summarize, simulate, prepare workflow steps, identify missing evidence, identify missing handoffs, and route work to the applicable capability.

## What ABBA may not do by itself

ABBA may not issue authority, create or replace identity, infer consent, change constitutional semantics, silently publish sensitive material, transfer ownership, execute financial or legal transfers, disclose protected information, delete records, or bypass an institutional provider's security boundary.

Consequential actions remain governed by the canonical action classes and require the applicable authority, consent, evidence and policy checks.

## Request envelope

RITES sends a bounded request containing:

- product and domain
- objective
- subject/context references
- service and action
- capability reference when applicable
- common-denominator references
- sensitivity and continuum state
- constraints and memory scope
- evidence requirements
- execution flag
- authority and consent references when execution is requested

Plan-mode requests use `execute: false`. RITES uses plan mode for normal intelligence interactions. Execution mode is reserved for explicitly authorized, separately governed actions.

## Idempotency and provenance

Each RITES-generated ABBA request receives an idempotency key. ABBA records authenticated ingress, common-layer resolutions, plan/decision references and the authority boundary in its existing OMNII ABBA session/event structures.

## Automation relationship

`rites-automation-tick` remains prepare-only. It can queue governed work and wait for authority; it does not perform consequential external actions. ABBA similarly prepares and gates rather than inventing authority.

## Experience rule

The product remains visually RITES. ABBA is the named AI/orchestration presence inside the RITES experience; no competing product-level visual system is introduced.
