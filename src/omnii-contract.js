const HIGH_IMPACT = new Set(['approve','publish','execute','transfer','disclose','delete']);

export function toOmniiIntent({ subjectId = null, purpose = null, action = 'read', objectId = null, metadata = {} } = {}) {
  return { type: 'intent', product: 'RITES', subjectId, purpose, action, objectId, metadata, authorityRef: null };
}

export function toOmniiAgentContract({ agentId, purpose, capabilities = [], subjectScope = [], requiredApprovals = [], sensitivityCeiling = 'restricted' } = {}) {
  return { type: 'agent', product: 'RITES', agentId, purpose, capabilities, subjectScope, requiredApprovals, sensitivityCeiling, ownsData: false, expandsAuthority: false };
}

export function guardAction({ action = 'read', authorityRef = null, consent = false, evidenceRefs = [] } = {}) {
  const consequential = HIGH_IMPACT.has(action);
  return {
    allowed: !consequential || Boolean(authorityRef && (consent || action === 'approve')),
    consequential,
    authorityRef,
    consent,
    evidenceRefs,
    reason: consequential && !authorityRef ? 'authority-required' : 'within-boundary',
  };
}
