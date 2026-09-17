import test from 'node:test';
import assert from 'node:assert/strict';
import { createAbbaRequest, classifyAbbaIntent, toAbbaContext } from '../src/abba-contract.mjs';

test('plan mode creates a bounded ABBA request', () => {
  const request = createAbbaRequest({
    objective: { query: 'prepare my family continuity plan' },
    subjectRef: 'person:123',
    serviceId: 'plan',
    query: 'prepare my family continuity plan',
    denominatorRefs: ['identity', 'consent'],
  });

  assert.equal(request.execute, false);
  assert.equal(request.product, 'RITES');
  assert.equal(request.domain, 'continuity');
  assert.deepEqual(request.denominatorRefs, ['identity', 'consent']);
});

test('execution mode marks consequential work for explicit authority', () => {
  const result = classifyAbbaIntent({ action: 'transfer', execute: true, authorityRef: 'seal:123', consentRef: 'consent:123' });
  assert.equal(result.consequential, true);
  assert.equal(result.requiresHumanApproval, true);
  assert.equal(result.allowed, true);
});

test('execution mode without authority is rejected locally', () => {
  assert.throws(
    () => createAbbaRequest({ objective: { action: 'delete digital estate' }, action: 'delete', execute: true }),
    /authorityRef is required/
  );
});

test('context projects RITES continuum state without granting authority', () => {
  const context = toAbbaContext({
    serviceId: 'continue',
    state: 'handoff',
    sensitivity: 'sensitive',
    subjectRef: 'person:123',
  });

  assert.deepEqual(context, {
    product: 'RITES',
    domain: 'continuity',
    serviceId: 'continue',
    state: 'handoff',
    sensitivity: 'sensitive',
    subjectRef: 'person:123',
    authorityRef: null,
    consentRef: null,
  });
});
