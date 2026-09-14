import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const manifest = JSON.parse(await readFile('.carbon-actual/product-inheritance.json', 'utf8'));

test('RITES declares the canonical product boundary', () => {
  assert.equal(manifest.product_id, 'rites');
  assert.equal(manifest.constitutional_compliance, true);
  assert.ok(manifest.foundation_dependencies.includes('#'));
  assert.ok(manifest.foundation_dependencies.includes('pulse'));
  assert.ok(manifest.floor_dependencies.includes('security_ash_phoenix_recovery'));
});

test('RITES retains its unique continuity domain', () => {
  assert.ok(manifest.unique_capabilities.includes('ROOT'));
  assert.ok(manifest.unique_capabilities.includes('TRANSITION ENGINE'));
  assert.ok(manifest.unique_capabilities.includes('digital estate'));
});

test('RITES does not claim a second sovereign ontology', () => {
  assert.match(manifest.identity_model, /does not define a competing identity system/i);
  assert.match(manifest.authority_model, /explicit delegation/i);
});
