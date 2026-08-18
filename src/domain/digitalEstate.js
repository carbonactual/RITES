export const DIGITAL_INTENTS = Object.freeze([
  'preserve',
  'memorialize',
  'transfer',
  'close',
  'notify',
  'archive',
  'delete',
  'review',
  'no_action',
]);

export const DIGITAL_ASSET_TYPES = Object.freeze([
  'email',
  'social_profile',
  'creator_account',
  'website',
  'domain',
  'cloud_storage',
  'digital_product',
  'subscription',
  'media_archive',
  'crypto_reference',
  'device',
  'other',
]);

export function createDigitalAsset(input = {}) {
  return {
    id: input.id ?? crypto.randomUUID(),
    ownerId: input.ownerId ?? null,
    provider: input.provider ?? '',
    type: input.type ?? 'other',
    identifier: input.identifier ?? null,
    intent: input.intent ?? 'review',
    successorId: input.successorId ?? null,
    memorialContactId: input.memorialContactId ?? null,
    trigger: input.trigger ?? null,
    sensitivity: input.sensitivity ?? 'highly_sensitive',
    publicExposure: input.publicExposure ?? 'unknown',
    scrubStatus: input.scrubStatus ?? 'not_started',
    handoffStatus: input.handoffStatus ?? 'not_ready',
    officialProcessUrl: input.officialProcessUrl ?? null,
    notes: input.notes ?? '',
    evidence: input.evidence ?? [],
  };
}

export const SCRUB_CHECKS = Object.freeze([
  'identify_public_material',
  'identify_private_material',
  'identify_sensitive_material',
  'identify_duplicate_accounts',
  'identify_obsolete_accounts',
  'identify_unintended_publication',
  'review_media_permissions',
  'review_legacy_contact',
  'review_recovery_methods',
  'review_domain_and_web_assets',
  'review_creator_assets',
  'review_cloud_archives',
  'record_provider_handoff',
]);

export function buildScrubChecklist(asset) {
  return SCRUB_CHECKS.map((key) => ({
    key,
    assetId: asset.id,
    status: 'pending',
    requiresExplicitApproval: key.includes('publication') || key.includes('media'),
  }));
}
