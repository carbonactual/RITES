export const SCENARIO_PROFILES = Object.freeze({
  infant: { label: 'Infant / baby', safeguards: ['guardian_authority', 'heightened_privacy', 'care_pathway'] },
  child: { label: 'Child', safeguards: ['guardian_authority', 'heightened_privacy'] },
  adolescent: { label: 'Adolescent', safeguards: ['guardian_authority', 'age_appropriate_access'] },
  adult: { label: 'Adult', safeguards: [] },
  elderly: { label: 'Elderly person', safeguards: ['care_coordination'] },
  terminal_illness: { label: 'Terminal / serious illness', safeguards: ['care_team_boundary', 'consent', 'dignity', 'wish_curation'] },
  sudden_death: { label: 'Sudden death', safeguards: ['verification_first', 'family_activation'] },
  death_abroad: { label: 'Death abroad', safeguards: ['jurisdiction', 'translation', 'repatriation'] },
  incapacitated: { label: 'Incapacitated person', safeguards: ['authority_verification', 'guardian_or_proxy'] },
  vvip: { label: 'VVIP / public figure', safeguards: ['privacy', 'security', 'verified_authority', 'controlled_publication'] },
  monarch: { label: 'Monarch / traditional ruler', safeguards: ['protocol', 'jurisdiction', 'security', 'controlled_publication'] },
  president: { label: 'President / governor / public office holder', safeguards: ['state_protocol', 'security', 'verified_authority', 'controlled_publication'] },
  faith_leader: { label: 'Pastor / imam / deacon / faith leader', safeguards: ['institutional_role', 'faith_protocol', 'family_boundary'] },
  business_owner: { label: 'Founder / business owner', safeguards: ['succession', 'authority', 'commercial_continuity'] },
  miscarriage: { label: 'Pregnancy loss / miscarriage', safeguards: ['dignity', 'privacy', 'culturally_appropriate_care', 'jurisdiction'] },
  pet: { label: 'Pet / animal', safeguards: ['custody', 'care', 'memorial'] },
  device: { label: 'Important device / electronics', safeguards: ['ownership', 'security', 'digital_estate'] },
});

export const SCENARIO_STAGES = Object.freeze([
  'present',
  'prepare',
  'event',
  'verify',
  'notify',
  'orchestrate',
  'handoff',
  'settle',
  'memorialize',
  'continue',
]);

export function createScenario(input = {}) {
  const profile = SCENARIO_PROFILES[input.profile] ?? SCENARIO_PROFILES.adult;
  return {
    id: input.id ?? crypto.randomUUID(),
    profile: input.profile ?? 'adult',
    label: profile.label,
    safeguards: [...profile.safeguards],
    stage: input.stage ?? 'present',
    subjectId: input.subjectId ?? null,
    participants: input.participants ?? [],
    triggers: input.triggers ?? [],
    tasks: input.tasks ?? [],
    handoffs: input.handoffs ?? [],
    reports: input.reports ?? [],
    simulationOnly: Boolean(input.simulationOnly),
  };
}

export function nextScenarioStage(stage) {
  const index = SCENARIO_STAGES.indexOf(stage);
  return index >= 0 && index < SCENARIO_STAGES.length - 1 ? SCENARIO_STAGES[index + 1] : stage;
}
