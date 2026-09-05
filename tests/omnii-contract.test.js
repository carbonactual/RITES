import test from 'node:test';
import assert from 'node:assert/strict';
import { toOmniiAgentContract, toOmniiIntent, guardAction } from '../src/omnii-contract.js';

test('RITES intent maps to OMNII without implicit authority', () => {
  const intent = toOmniiIntent({ subjectId: 'person:1', purpose: 'continuity', action: 'read' });
  assert.equal(intent.authorityRef, null);
  assert.equal(intent.product, 'RITES');
});

test('RITES agents cannot own data or expand authority', () => {
  const contract = toOmniiAgentContract({ agentId: 'rites:curator', purpose: 'curate' });
  assert.equal(contract.ownsData, false);
  assert.equal(contract.expandsAuthority, false);
});

test('consequential RITES actions require explicit authority', () => {
  assert.equal(guardAction({ action: 'transfer' }).allowed, false);
  assert.equal(guardAction({ action: 'read' }).allowed, true);
});
