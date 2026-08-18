/**
 * RITES Continuum domain primitives.
 *
 * These are intentionally framework-agnostic. UI, Supabase, institutional
 * adapters and automation should project this model rather than inventing
 * parallel representations.
 */

export const CONTINUUM_STATES = Object.freeze([
  'present',
  'prepare',
  'transition',
  'verify',
  'orchestrate',
  'handoff',
  'settle',
  'continue',
  'blossom',
]);

export const CONTINUITY_OBJECT_TYPES = Object.freeze([
  'person',
  'relationship',
  'wish',
  'dream',
  'promise',
  'vow',
  'oath',
  'asset',
  'liability',
  'obligation',
  'provision',
  'document',
  'account',
  'digital_asset',
  'media',
  'memory',
  'place',
  'grave',
  'event',
  'rite',
  'service',
  'task',
  'case',
  'report',
]);

export const ROLE_VIEWS = Object.freeze([
  'self',
  'family',
  'beneficiary',
  'guardian',
  'executor',
  'trustee',
  'legal',
  'medical',
  'religious',
  'provider',
  'cemetery',
  'government',
  'public_health',
  'business',
  'financial',
  'operator',
  'ai_agent',
]);

export const SENSITIVITY_LEVELS = Object.freeze([
  'public',
  'family',
  'restricted',
  'sensitive',
  'highly_sensitive',
]);

export const ACTION_CLASSES = Object.freeze({
  READ: 'read',
  ANALYZE: 'analyze',
  CURATE: 'curate',
  RECOMMEND: 'recommend',
  PREPARE: 'prepare',
  APPROVE: 'approve',
  PUBLISH: 'publish',
  EXECUTE: 'execute',
  TRANSFER: 'transfer',
  DISCLOSE: 'disclose',
  DELETE: 'delete',
});

export function createContinuityObject(input = {}) {
  return {
    id: input.id ?? crypto.randomUUID(),
    type: input.type ?? 'event',
    subjectId: input.subjectId ?? null,
    ownerId: input.ownerId ?? null,
    title: input.title ?? '',
    meaning: input.meaning ?? '',
    relationshipIds: input.relationshipIds ?? [],
    placeId: input.placeId ?? null,
    startsAt: input.startsAt ?? null,
    endsAt: input.endsAt ?? null,
    condition: input.condition ?? null,
    trigger: input.trigger ?? null,
    authority: input.authority ?? null,
    consentScope: input.consentScope ?? [],
    recipientIds: input.recipientIds ?? [],
    responsiblePartyId: input.responsiblePartyId ?? null,
    providerId: input.providerId ?? null,
    resource: input.resource ?? null,
    evidence: input.evidence ?? [],
    sensitivity: input.sensitivity ?? 'restricted',
    state: input.state ?? 'present',
    handoffState: input.handoffState ?? 'not_ready',
    outcome: input.outcome ?? null,
    nextState: input.nextState ?? null,
    provenance: input.provenance ?? null,
    createdAt: input.createdAt ?? new Date().toISOString(),
    updatedAt: input.updatedAt ?? new Date().toISOString(),
  };
}

export function canViewObject({ object, role, purpose, consent = false, authority = false }) {
  if (!object) return false;
  if (object.sensitivity === 'public') return true;
  if (role === 'self' && object.ownerId) return true;
  if (!consent && !authority) return false;
  if (!purpose) return false;
  return true;
}

export function classifyAction(action) {
  const highImpact = new Set([
    ACTION_CLASSES.APPROVE,
    ACTION_CLASSES.PUBLISH,
    ACTION_CLASSES.EXECUTE,
    ACTION_CLASSES.TRANSFER,
    ACTION_CLASSES.DISCLOSE,
    ACTION_CLASSES.DELETE,
  ]);
  return highImpact.has(action) ? 'explicit_authorization' : 'advisory_or_preparatory';
}

export function createHandoff(input = {}) {
  return {
    id: input.id ?? crypto.randomUUID(),
    objectId: input.objectId ?? null,
    from: input.from ?? null,
    to: input.to ?? null,
    what: input.what ?? null,
    why: input.why ?? null,
    condition: input.condition ?? null,
    authority: input.authority ?? null,
    requiredEvidence: input.requiredEvidence ?? [],
    status: input.status ?? 'planned',
    dueAt: input.dueAt ?? null,
    completedAt: input.completedAt ?? null,
    completionEvidence: input.completionEvidence ?? [],
    nextState: input.nextState ?? null,
  };
}
