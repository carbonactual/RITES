export const REPORT_TYPES = Object.freeze([
  'continuum_summary',
  'handoff_status',
  'unassigned_responsibilities',
  'unfulfilled_wishes',
  'unsettled_affairs',
  'digital_estate_status',
  'cemetery_status',
  'service_operations',
  'religious_operations',
  'legal_case_status',
  'government_submission',
  'public_health_signal',
  'family_briefing',
  'audit',
]);

export function createReportRequest(input = {}) {
  return {
    id: input.id ?? crypto.randomUUID(),
    type: input.type ?? 'continuum_summary',
    requesterId: input.requesterId ?? null,
    role: input.role ?? null,
    purpose: input.purpose ?? '',
    scope: input.scope ?? [],
    sensitivity: input.sensitivity ?? 'restricted',
    status: 'prepared',
    generatedAt: null,
    approvedAt: null,
    deliveredAt: null,
    approvalRequired: input.approvalRequired ?? true,
    recipientIds: input.recipientIds ?? [],
  };
}

export function buildContinuityGaps(objects = []) {
  const gaps = [];
  for (const object of objects) {
    if (!object.responsiblePartyId) gaps.push({ type: 'unassigned_responsibility', objectId: object.id });
    if (object.handoffState === 'not_ready') gaps.push({ type: 'missing_handoff', objectId: object.id });
    if (object.type === 'provision' && object.recipientIds?.length === 0) gaps.push({ type: 'missing_beneficiary', objectId: object.id });
    if (object.type === 'asset' && !object.nextState) gaps.push({ type: 'missing_destination', objectId: object.id });
  }
  return gaps;
}
