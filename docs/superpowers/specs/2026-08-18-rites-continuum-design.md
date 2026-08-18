# RITES Continuum — Canonical Product & Architecture Design

## Purpose

RITES is a human continuity infrastructure platform. It supports a person while present, during major transitions including death, immediately after a transition, and over the long run. The system preserves and coordinates intentions, relationships, assets, obligations, services, memories, places, digital life, provisions, and handoffs.

The public website is the entrance to RITES, not the product itself.

## Core thesis

**RITES keeps what matters moving.**

Death is the major continuity event, but RITES operates before, during, after, and for the long run. It can represent wishes, dreams, promises, vows, oaths, needs, wants, obligations, provisions, assets, people, places, events, services, memories, digital assets, and economic activity.

## Canonical lifecycle

```text
PRESENT → PREPARE → EVENT / DEATH → VERIFY → ORCHESTRATE → HANDOFF → SETTLE → CONTINUE → BLOSSOM
```

## Canonical object

A **Continuity Object** contains:

- subject / owner
- object type
- meaning / description
- relationship(s)
- place
- time
- condition
- trigger
- authority
- consent scope
- recipient / beneficiary
- responsible party
- provider / institution
- resource / funding
- evidence / provenance
- state
- handoff state
- outcome
- next state

## Continuum domains

### Present / Life Curation
- identity
- self promises / oaths
- wishes
- dreams
- goals
- relationships
- family
- dependants
- health continuity
- important records
- assets and liabilities
- businesses and responsibilities
- provisions
- emergency instructions
- memories and moments
- digital estate
- genealogy and family history

### Death / Transition
- death report / registration
- verification
- cause-of-death data from authoritative sources
- next-of-kin activation
- ceremony composition
- religious / cultural rite selection
- burial / cremation / mausoleum choices
- cemetery / plot / grave
- clothing and personal items
- pallbearers and transport
- officiant
- eulogy / speakers
- music / DJ / performance preferences
- flowers / souvenirs / tombstone / inscription
- notification order and framing
- assigned tasks and duties
- funeral providers
- legal / probate / estate workflows
- autopsy / exhumation / case workflows where lawful
- body donation / science pathways where lawful
- organ / tissue donor status where authoritative

### After / Affairs
- estate administration
- debts and who is owed / who owes
- assets and allocations
- bills and contracts
- savings / associations / groups
- business succession
- digital account handoff
- social profile / memorialization decisions
- family provisions
- documents
- property
- cemetery maintenance
- memorial and archive creation
- reporting and audit

### Long run / Continuum
- anniversaries
- birthdays and milestones
- memory activations
- timed messages
- future provisions
- family history
- genealogy
- place history
- grave visits
- grave maintenance
- flowers / memorial services
- celebrations of life
- long-term stewardship
- generational handoff
- archived and retired AI state in HAPI World

## Multi-role, multi-view model

RITES has one canonical Continuum Graph, with contextual views rather than duplicated data.

Participants can include:

- self
- spouse / partner
- mother / father
- son / daughter
- sibling
- cousin / aunt / uncle / nephew / niece
- friend / mentor
- dependant / guardian
- executor / trustee
- lawyer / estate professional
- funeral / cemetery provider
- religious institution
- medical provider
- government / civil registry
- public-health authority
- business / employer / corporation
- financial provider
- marketplace provider
- RITES operator / support
- AI / automation agents

Each view is bounded by role, purpose, jurisdiction, consent, authority, sensitivity and task.

## Life-stage and special-case scenarios

The scenario engine must support configurable profiles including:

- infant / baby
- child
- adolescent
- adult
- elderly person
- terminal illness / serious illness
- sudden death
- death abroad
- missing / unavailable person
- incapacitated person
- VVIP / public figure
- monarch / traditional ruler
- president / governor / public office holder
- faith leader / pastor / imam / deacon
- business owner / founder
- large family / blended family
- pets / animals
- important devices / electronics / physical digital-adjacent assets
- miscarriage / pregnancy loss, with culturally and legally appropriate safeguards and care pathways

These profiles change workflows, permissions, providers, privacy, ceremony, reporting, and escalation requirements; they do not create separate databases.

## Digital estate scrub and handoff

RITES must support a **Digital Estate Registry** with explicit per-account intent:

- preserve
- memorialize
- transfer
- close
- notify
- archive
- delete
- review
- no-action

Objects can include email, social profiles, domains, websites, creator accounts, digital products, cloud storage, subscription services, crypto/wallet references, media archives and other digital assets.

RITES stores instructions and authorized routing; it does not bypass provider security. Actual handoff uses official provider processes where required.

The system can curate a **digital estate scrub checklist** to identify duplicate, obsolete, sensitive or unintended public material before a transition, subject to user consent and platform constraints.

## Media, announcement and memory controls

The Continuum supports per-item and per-recipient controls for:

- photographs
- videos
- audio
- documents
- moments
- stories
- eulogies
- obituary content
- memorial content
- public posts
- private family posts
- images that may be posted
- images that must not be posted
- who receives first notification
- who makes the first public announcement
- message framing / communication template
- who is responsible for notification

Every media object has provenance, visibility, audience, timing, authorization and publication state.

## Reporting and intelligence

RITES Intelligence can:

- detect incomplete continuity objects
- identify missing handoffs
- identify unassigned responsibilities
- surface contradictions or conflicts
- identify obligations with no successor
- identify provisions with no beneficiary
- identify assets with no destination
- identify digital accounts with no continuity plan
- generate scenario simulations
- curate next actions
- prepare reports for authorized roles
- summarize what changed
- track fulfillment
- monitor service workflows
- produce government / religious / legal / provider-specific reporting views where authorized

AI recommendations are advisory by default. Consequential actions require explicit authority according to the action class.

## Marketplace / economic layer

Continuity needs can become structured economic workflows:

```text
Need → Request → Opportunity → Provider → Offer → Agreement → Payment / Provision → Fulfillment → Evidence → Settlement
```

This can cover funeral services, cemetery services, maintenance, transport, flowers, tombstones, ceremony providers, legal services, estate services, care, education provisions, housing, digital estate services, genealogy services and other eligible providers.

The marketplace is contextual to the Continuum, not an independent ecommerce layer.

## Genealogy and DNA integrations

Genealogy and DNA should begin as adapter/integration layers, not a replacement for existing large databases.

RITES can connect:

- family tree
- ancestor / descendant relationships
- historical records
- grave / cemetery records
- family stories
- places
- photos
- DNA provider results where explicitly consented

Genetic and health information require heightened sensitivity, provenance, purpose limitation, access controls, and revocation where possible.

## Government and public-health integration

RITES must distinguish:

- human/family continuity records
- authoritative civil registration
- medical records
- public-health intelligence
- legal records

RITES can prepare or route data to authorized government systems. It must not replace authoritative registries or invent medical/legal conclusions.

## Religious and cultural integration

RITES supports configurable rites and faith/cultural pathways. The system stores preferences and orchestrates approved providers and institutions without asserting a single universal ritual.

Views may include:

- faith requested
- officiant
- service schedule
- rite checklist
- cemetery / grave
- family roles
- approved ceremony elements
- cultural protocol
- local / foreign jurisdiction rules

## HAPI World AI lifecycle

A person's AI can have a defined lifecycle:

```text
ACTIVE → CUSTODIAL → RETIRED → HAPI WORLD → DORMANT → AUTHORIZED ACTIVATION → REST
```

A retired AI must not present itself as the deceased person. It operates only from authorized continuity material and defined activation rules.

## Guardrails

High-impact workflows require explicit authorization. RITES must not silently:

- expose private or sensitive information
- publish media
- execute financial transfers
- change legal ownership
- access protected third-party accounts
- make medical diagnoses
- make legal determinations
- perform irreversible digital actions
- override provider security
- infer sensitive facts without evidence

The system should distinguish **read / analyze / curate / recommend / prepare** from **approve / publish / execute / transfer / delete / disclose**.

## Page and application architecture

### Public
- `/`
- `/services`
- `/find`
- `/plan`
- `/record`
- `/provide`
- `/protect`
- `/remember`
- `/transfer`
- `/continue`
- `/about`
- `/help`
- `/providers`

### Authenticated
- `/app`
- `/app/me`
- `/app/people`
- `/app/places`
- `/app/wishes`
- `/app/provisions`
- `/app/assets`
- `/app/digital`
- `/app/memories`
- `/app/timeline`
- `/app/continuum`
- `/app/events`
- `/app/scenarios`
- `/app/reports`
- `/app/permissions`
- `/app/settings`

### Role-specific surfaces
- `/provider`
- `/religion`
- `/government`
- `/legal`
- `/business`
- `/family`

All are projections over the same Continuum Graph.

## Reusable Carbon Actual experience layer

RITES is the flagship implementation of a reusable experience system. Candidate primitives include:

- AmbientWorld
- ContinuityField
- GoldenThread
- StoryScene
- MorphSearch
- RelationshipPath
- SpatialNode
- MagneticButton
- RevealText
- DepthSurface
- TransitionPortal
- ContinuumTimeline
- ScenarioSimulator
- HandoffCard
- RoleViewSwitcher
- CuratedContinuum

RITES-specific domain logic must stay separate from reusable experience primitives.

## Implementation sequence

1. Create production-grade app structure and CI.
2. Extract current visual experience into reusable components.
3. Add canonical Continuum domain types and state model.
4. Add role/view model and guardrails.
5. Build public service pages with explicit functions.
6. Build authenticated Continuum workspace.
7. Add scenario engine and reporting surfaces.
8. Add digital estate registry and handoff workflow.
9. Add genealogy/DNA and external-system adapter boundaries.
10. Add provider and institutional surfaces.
11. Connect Supabase and secure persistence.
12. Connect I/O/NGIN/ABBA/HAPI at defined boundaries.
13. Add testing, observability, accessibility, security and deployment automation.

## Acceptance principle

No feature is considered complete because the UI exists. Completion requires:

**UI → state → data → authority → action → feedback → audit → error handling → responsive behavior → deployment verification.**
