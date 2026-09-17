import test from 'node:test';
import assert from 'node:assert/strict';
import { createContinuityObject, createHandoff, CONTINUUM_STATES } from '../src/domain/continuum.js';

test('continuity object preserves lifecycle defaults', () => {
  const object = createContinuityObject({ type: 'wish', title: 'Family instruction', sensitivity: 'sensitive' });
  assert.equal(object.state, 'present');
  assert.ok(CONTINUUM_STATES.includes(object.state));
  assert.equal(object.sensitivity, 'sensitive');
  assert.equal(object.type, 'wish');
  assert.ok(object.id);
});

test('handoff retains the authority field without inventing execution authority', () => {
  const handoff = createHandoff({ from: 'guardian', to: 'executor', why: 'continue responsibility' });
  assert.equal(handoff.from, 'guardian');
  assert.equal(handoff.to, 'executor');
  assert.equal(handoff.status, 'planned');
  assert.equal(handoff.authority, null);
});
