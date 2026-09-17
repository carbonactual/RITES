import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';

const mainSource = await fs.readFile(new URL('../src/main.jsx', import.meta.url), 'utf8');

test('RITES UI routes intelligence through ABBA', () => {
  assert.match(mainSource, /import \{ askAbba \} from ['"]\.\/lib\/abba\.js['"]/);
  assert.match(mainSource, /askAbbaForCurrent/);
  assert.match(mainSource, /execute:false/);
  assert.match(mainSource, /ABBA · RITES ORCHESTRATION/);
});

test('RITES UI keeps consequential actions behind authority', () => {
  assert.match(mainSource, /approve, publish, execute, transfer, disclose and delete remain authority-gated/);
});
