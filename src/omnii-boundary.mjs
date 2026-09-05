const CONSEQUENTIAL = new Set([
  'continuity.transition',
  'continuity.recover',
  'legal.handoff',
  'official.communicate',
  'execution.delete',
])

export function classifyRitesAction({ capabilityRef, authorityRef = null, consentRef = null, evidenceRefs = [], requiresHuman = false } = {}) {
  if (!capabilityRef) throw new Error('capabilityRef is required')
  const consequential = Boolean(requiresHuman) || CONSEQUENTIAL.has(capabilityRef)
  const allowed = !consequential || (Boolean(authorityRef) && Boolean(consentRef))
  return {
    consequential,
    allowed,
    reason: allowed ? (consequential ? 'authority-and-consent-supplied' : 'non-consequential') : 'authority-and-consent-required',
    authorityRef,
    consentRef,
    evidenceRefs: [...evidenceRefs],
    ownershipChanged: false,
    identityChanged: false,
  }
}

export function projectContinuityEvidence(input) {
  return {
    kind: 'evidence',
    sourceSystem: 'RITES',
    sourceRef: input.sourceRef,
    summary: input.summary,
    verificationStatus: input.verificationStatus ?? 'unverified',
    authorityRef: null,
  }
}
