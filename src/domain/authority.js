import { ACTION_CLASSES, SENSITIVITY_LEVELS, classifyAction } from './continuum.js';

export const SCOPE_MODES = Object.freeze(['own','delegated','emergency','institutional','provider','public']);

export function normalizeGrant(grant = {}) {
  return {
    actorId: grant.actorId ?? null,
    subjectId: grant.subjectId ?? null,
    role: grant.role ?? null,
    purpose: grant.purpose ?? null,
    scope: grant.scope ?? [],
    actions: grant.actions ?? [ACTION_CLASSES.READ],
    sensitivityCeiling: grant.sensitivityCeiling ?? SENSITIVITY_LEVELS.restricted,
    mode: grant.mode ?? 'delegated',
    startsAt: grant.startsAt ?? null,
    expiresAt: grant.expiresAt ?? null,
    revokedAt: grant.revokedAt ?? null,
    evidence: grant.evidence ?? [],
  };
}

const levelRank = Object.freeze({
  public: 0,
  family: 1,
  restricted: 2,
  sensitive: 3,
  highly_sensitive: 4,
});

function withinSensitivity(objectLevel, ceiling) {
  return (levelRank[objectLevel] ?? 99) <= (levelRank[ceiling] ?? -1);
}

function activeAt(grant, at = new Date()) {
  const now = at instanceof Date ? at : new Date(at);
  if (grant.revokedAt && new Date(grant.revokedAt) <= now) return false;
  if (grant.startsAt && new Date(grant.startsAt) > now) return false;
  if (grant.expiresAt && new Date(grant.expiresAt) < now) return false;
  return true;
}

export function evaluateAccess({ actorId, subjectId, object, grant, purpose, action = ACTION_CLASSES.READ, at } = {}) {
  const normalized = normalizeGrant(grant);
  const highImpact = classifyAction(action) === 'explicit_authorization';
  const reasons = [];

  if (!actorId || normalized.actorId !== actorId) reasons.push('actor_mismatch');
  if (!subjectId || normalized.subjectId !== subjectId) reasons.push('subject_mismatch');
  if (!object) reasons.push('object_missing');
  if (!purpose || normalized.purpose !== purpose) reasons.push('purpose_mismatch');
  if (!activeAt(normalized, at)) reasons.push('grant_inactive');
  if (object && !withinSensitivity(object.sensitivity ?? 'restricted', normalized.sensitivityCeiling)) reasons.push('sensitivity_exceeds_grant');
  if (!normalized.actions.includes(action)) reasons.push('action_not_granted');
  if (highImpact && normalized.mode === 'emergency' && action !== ACTION_CLASSES.READ) reasons.push('emergency_action_requires_review');
  if (object?.state === 'sealed' && action !== ACTION_CLASSES.READ) reasons.push('sealed_object');

  return { allowed: reasons.length === 0, reasons, grant: normalized, highImpact };
}

export function visibleForContext({ objects = [], actorId, subjectId, grants = [], purpose, action = ACTION_CLASSES.READ, at } = {}) {
  return objects.filter((object) => grants.some((grant) => evaluateAccess({ actorId, subjectId, object, grant, purpose, action, at }).allowed));
}
