# RITES Authority Kernel V1

## Objective

Make every Continuum experience contextual, permissioned and auditable. Relationship alone never grants access.

## Canonical access model

`Actor -> Subject -> Role -> Grant -> Purpose -> Scope -> Object -> Action -> Decision -> Audit`

### Actor
A human, institution, service or RITES agent requesting an action.

### Subject
The person, household, family, organization, grave, event or other Continuum entity to which information belongs.

### Role
Examples: self, parent, child, spouse, caregiver, executor, beneficiary, clinician, religious officiant, mortician, cemetery operator, lawyer, government authority, provider, archivist and agent.

Roles describe context; they do not automatically grant access.

### Grant
An explicit permission from the appropriate authority. Grants can expire, be revoked, delegated or restricted.

### Purpose
Why access is being requested: care, ceremony, estate settlement, memorial, genealogy, public-health reporting, cemetery maintenance, archival preservation, service fulfillment, etc.

### Scope
The smallest necessary dataset and action surface. Examples: one grave, one ceremony, one document, one family member, one provider task.

### Object sensitivity
Canonical classes:

- public
- community
- family
- private
- sensitive
- highly_sensitive
- sealed
- regulated

DNA, medical information, intimate/confidential material, credentials and financial information default to highly_sensitive or sealed.

## Decision rules

1. Self-access is not unlimited; sensitive and regulated objects retain their own controls.
2. Family relationship is not equivalent to permission.
3. Professional role is not equivalent to unrestricted access.
4. Agents inherit only explicit machine-readable grants.
5. Emergency access is narrowly scoped, time-bound and fully audited.
6. Expired/revoked grants immediately stop new access.
7. High-impact actions require configured human/institutional authority.
8. AI recommendations are never evidence of identity, death, inheritance, diagnosis, parentage or legal status.
9. A claim remains a claim until an appropriate verification process changes its state.
10. Public release of sensitive media or information requires a publication authority gate.

## High-impact actions

Require explicit authorization and, where applicable, authoritative evidence:

- death registration
- identity/body confirmation
- medical disclosure
- autopsy/exhumation workflow
- disposition authorization
- inheritance determination
- financial transfer
- account takeover/closure
- publication of sensitive information
- DNA disclosure
- release of sealed messages
- irreversible deletion

## Agent contract

Every agent receives:

`agent_id + subject_scope + allowed_object_types + allowed_actions + purpose + expiry + approval_policy`

An agent cannot broaden its own scope, delegate its authority, or convert recommendations into irreversible actions.

## Audit

Every access decision and consequential action records:

`actor + role + purpose + scope + object + requested_action + decision + authority + evidence + timestamp + resulting_state`

Audit records are append-only from the application perspective.

## Continuum rendering

The UI should be generated from the authority context rather than from a universal dashboard. The same user may receive multiple simultaneous views:

- self Continuum
- parent/family Continuum
- caregiver Continuum
- executor Continuum
- professional Continuum
- community/religious Continuum
- provider operations Continuum

Each view exposes only the minimum necessary information and actions for that context.

## Emergency access

Emergency access is a controlled exception, never a backdoor. It requires a defined emergency reason, minimum scope, expiry, notification/audit policy and post-event review.

## Publication gate

For every photograph, video, obituary, RIP notice, announcement or memorial artifact:

`candidate -> audience -> authority -> approval -> release time -> publication -> audit`

Private, family-only, ceremony-only, recipient-specific, timed and permanently sealed states are first-class.

## Design principle

**RITES should know enough to help, but never assume enough to overreach.**
