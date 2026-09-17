import test from 'node:test';
import assert from 'node:assert/strict';
import { createContinuityObject, createHandoff, CONTINUUM_STATES, SENSITIVITY_LEVELS } from '../src/domain/continuum.js';

test('continuity object preserves governed lifecycle defaults', () => {
  const object = createContinuityObject({ type: 'wish', title: 'Family instruction', sensitivity: 'sensitive' });
  assert.equal(object.state, CONTINUUM_STATES.PRESENT);
  assert.equal(object.sensitivity, SENSITIVITY_LEVELS.SENSITIVE);
  assert.equal(object.type, 'wish');
  assert.ok(object.id);
});

test('handoff carries explicit authority boundary', () => {
  const handoff = createHandoff({ from: 'guardian', to: 'executor', purpose: 'continue responsibility' });
  assert.equal(handoff.from, 'guardian');
  assert.equal(handoff.to, 'executor');
  assert.equal(handoff.status, 'prepared');
  assert.deepEqual(handoff.authority, { required: true, granted: false });
});
