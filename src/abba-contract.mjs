const HIGH_IMPACT_ACTIONS = new Set(['approve', 'publish', 'execute', 'transfer', 'disclose', 'delete']);
const DEFAULT_DENOMINATORS = ['identity', 'authority', 'consent', 'provenance', 'event'];

function boundedRefs(value, limit = 32) {
  if (!Array.isArray(value)) return [];
  return [...new Set(value.filter((item) => typeof item === 'string' && item.length > 0 && item.length <= 160))].slice(0, limit);
}

export function classifyAbbaIntent({ action = 'read', execute = false, authorityRef = null, consentRef = null } = {}) {
  const consequential = HIGH_IMPACT_ACTIONS.has(action) || execute;
  const requiresHumanApproval = consequential;
  const allowed = !execute || Boolean(authorityRef && consentRef);

  return {
    action,
    consequential,
    requiresHumanApproval,
    allowed,
    reason: allowed ? 'within-authority-boundary' : 'authority-and-consent-required',
  };
}

export function toAbbaContext({
  serviceId = null,
  state = 'present',
  sensitivity = 'restricted',
  subjectRef = null,
  authorityRef = null,
  consentRef = null,
} = {}) {
  return {
    product: 'RITES',
    domain: 'continuity',
    serviceId,
    state,
    sensitivity,
    subjectRef,
    authorityRef,
    consentRef,
  };
}

export function createAbbaRequest({
  objective,
  subjectRef = null,
  operatingContextId = null,
  serviceId = null,
  query = null,
  action = 'analyze',
  capabilityRef = null,
  denominatorRefs = DEFAULT_DENOMINATORS,
  requiresHumanApproval = false,
  execute = false,
  authorityRef = null,
  consentRef = null,
  constraints = {},
  memoryScope = {},
  evidenceRequirements = [],
  steps = [],
  state = 'present',
  sensitivity = 'restricted',
} = {}) {
  if (!objective || typeof objective !== 'object' || Array.isArray(objective)) {
    throw new Error('objective is required');
  }

  const classification = classifyAbbaIntent({ action, execute, authorityRef, consentRef });
  if (execute && !authorityRef) throw new Error('authorityRef is required for execution');
  if (execute && !consentRef) throw new Error('consentRef is required for execution');

  return {
    product: 'RITES',
    domain: 'continuity',
    objective,
    subjectRef,
    operatingContextId,
    serviceId,
    query,
    action,
    capabilityRef,
    denominatorRefs: boundedRefs(denominatorRefs.length ? denominatorRefs : DEFAULT_DENOMINATORS),
    requiresHumanApproval: requiresHumanApproval || classification.requiresHumanApproval,
    execute,
    authorityRef,
    consentRef,
    constraints,
    memoryScope,
    evidenceRequirements: Array.isArray(evidenceRequirements) ? evidenceRequirements : [],
    steps: Array.isArray(steps) ? steps : [],
    context: toAbbaContext({ serviceId, state, sensitivity, subjectRef, authorityRef, consentRef }),
    policy: {
      constitutionalBoundary: 'enforced',
      humanAuthorityBoundary: 'preserved',
      evidenceRequired: true,
      unknownContextsEscalate: true,
      commonLayerReuseRequired: true,
    },
    idempotencyKey: `rites:${crypto.randomUUID()}`,
  };
}
