# RITES Implementation Roadmap V1

## Build order

### 1. Continuum runtime
- Resolve signed-in actor and active subject contexts.
- Load role/grant/scope decisions.
- Assemble current Continuum state.
- Calculate urgent, upcoming, unresolved and continuing items.
- Render only authorized objects.

### 2. Event/workflow engine
Canonical event envelope:
`event_id, subject_id, actor_id, event_type, occurred_at, effective_at, source, provenance, sensitivity, payload, correlation_id`.

Core event families: identity, relationship, life, health, care, intention, wish, obligation, asset, financial, legal, death, mortuary, ceremony, grave, memorial, digital, heritage, provider, marketplace, notification, approval, handoff and audit.

Workflow pattern:
`trigger -> enrich -> policy -> classify -> recommend -> approval -> action -> verify -> emit -> notify`.

### 3. Agent registry
Agents must declare identity, purpose, capabilities, object types, actions, subject scope, required approvals, data sensitivity ceiling, tools, expiry and audit behavior.

Initial agents: Continuum Curator, Family, Heritage, Digital Estate, Ceremony, Mortuary, Cemetery, Genealogy, DNA Adapter, Medical Continuity, Legal Handoff, Religious Rite, Government Reporting, Provider Marketplace, Provision, Scenario, Memorial, Accessibility and VVIP Protocol.

### 4. Scenario engine
Support simulations for self-planning, incapacitation, serious/terminal illness, expected death, sudden death, death abroad, child/infant, pregnancy loss, pet/animal, VVIP/public office, military/veteran, caregiver, executor, religious leader, provider and business succession.

Simulation outputs are recommendations and gaps, never legal/medical determinations.

### 5. Heritage pipeline
Ingest physical/digital artifacts with provenance. OCR handwriting where appropriate, transcribe audio/video, detect dates/people/places, link to timeline, preserve original, generate derivatives, assign access and publication policy, and create future handoff tasks.

### 6. Digital estate pipeline
Inventory accounts and devices; classify preserve/memorialize/transfer/close/archive/delete/no-action; create provider-specific handoff checklists; verify completion; never store third-party credentials unless explicitly supported by a compliant secret-management design.

### 7. Ceremony + transition
Build ceremony plan from wishes, faith/culture, legal constraints, venue, provider availability, logistics, attendance priority, media policy and budget. Track every handoff from death verification through disposition and long-run memorial.

### 8. Marketplace
Provider discovery -> qualification -> offer -> agreement -> booking -> payment/provision -> fulfillment -> evidence -> settlement -> rating. Provider access is scoped to assigned work.

### 9. Reporting
Generate individual, family, executor, provider, cemetery, religious, legal, medical/public-health, government and business reports with explicit audience and provenance.

### 10. Production hardening
- RLS policies for every table.
- Storage policies by subject/scope/sensitivity.
- Append-only audit path.
- Rate limits and abuse controls.
- Encryption and secrets management.
- Backup/restore tests.
- Migration tests.
- Contract tests for adapters.
- Accessibility and responsive UI tests.
- CI build/type/lint/test/security gates.
- Vercel preview and production verification.

## Definition of done

A feature is not complete unless its data model, authority policy, UI state, event contract, workflow, audit behavior, failure state, accessibility behavior and deployment path are defined and tested.
