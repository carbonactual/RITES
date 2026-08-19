export const EVENT_TYPES = Object.freeze([
  'life',
  'relationship',
  'intention',
  'health',
  'care',
  'finance',
  'legal',
  'death_reported',
  'death_verified',
  'mortuary',
  'ceremony',
  'disposition',
  'grave',
  'memorial',
  'digital',
  'heritage',
  'provider',
  'marketplace',
  'handoff',
  'notification',
  'approval',
  'fulfillment',
  'audit',
]);

export const WORKFLOW_STATES = Object.freeze([
  'triggered',
  'enriching',
  'policy_check',
  'awaiting_authorization',
  'ready',
  'executing',
  'verifying',
  'fulfilled',
  'continuing',
  'blocked',
  'disputed',
  'expired',
  'revoked',
]);

export function createEvent(input = {}) {
  return {
    id: input.id ?? crypto.randomUUID(),
    type: input.type ?? 'life',
    subjectId: input.subjectId ?? null,
    actorId: input.actorId ?? null,
    correlationId: input.correlationId ?? null,
    occurredAt: input.occurredAt ?? new Date().toISOString(),
    effectiveAt: input.effectiveAt ?? input.occurredAt ?? new Date().toISOString(),
    source: input.source ?? 'rites',
    provenance: input.provenance ?? null,
    sensitivity: input.sensitivity ?? 'restricted',
    payload: input.payload ?? {},
    evidence: input.evidence ?? [],
  };
}

export function createWorkflow(input = {}) {
  return {
    id: input.id ?? crypto.randomUUID(),
    subjectId: input.subjectId ?? null,
    eventId: input.eventId ?? null,
    name: input.name ?? 'continuity-workflow',
    state: input.state ?? 'triggered',
    trigger: input.trigger ?? {},
    conditions: input.conditions ?? [],
    approvals: input.approvals ?? [],
    actions: input.actions ?? [],
    handoffs: input.handoffs ?? [],
    outcomes: input.outcomes ?? [],
    nextEvents: input.nextEvents ?? [],
    audit: input.audit ?? [],
  };
}

export function advanceWorkflow(workflow, step = {}) {
  const current = workflow?.state ?? 'triggered';
  const next = step.nextState ?? current;
  return {
    ...workflow,
    state: next,
    audit: [
      ...(workflow?.audit ?? []),
      {
        at: new Date().toISOString(),
        from: current,
        to: next,
        actorId: step.actorId ?? null,
        reason: step.reason ?? null,
      },
    ],
  };
}
