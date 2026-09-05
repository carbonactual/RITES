import test from 'node:test'
import assert from 'node:assert/strict'
import { classifyRitesAction, projectContinuityEvidence } from './omnii-boundary.mjs'

test('RITES blocks continuity transition without authority and consent', () => {
  const result = classifyRitesAction({ capabilityRef: 'continuity.transition' })
  assert.equal(result.allowed, false)
  assert.equal(result.reason, 'authority-and-consent-required')
})

test('RITES permits consequential continuity action with authority and consent', () => {
  const result = classifyRitesAction({ capabilityRef: 'continuity.recover', authorityRef: 'authority:1', consentRef: 'consent:1' })
  assert.equal(result.allowed, true)
  assert.equal(result.ownershipChanged, false)
  assert.equal(result.identityChanged, false)
})

test('RITES evidence remains evidence', () => {
  const result = projectContinuityEvidence({ sourceRef: 'record:1', summary: 'continuity source' })
  assert.equal(result.kind, 'evidence')
  assert.equal(result.authorityRef, null)
})
