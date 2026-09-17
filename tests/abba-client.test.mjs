import test from 'node:test';
import assert from 'node:assert/strict';
import { invokeAbba } from '../src/lib/abba-client.mjs';

test('invokeAbba sends a governed request to the ABBA function', async () => {
  let captured = null;
  const client = {
    functions: {
      async invoke(name, options) {
        captured = { name, options };
        return { data: { accepted: true, status: 'proposed' }, error: null };
      },
    },
  };

  const result = await invokeAbba(client, {
    product: 'RITES',
    domain: 'continuity',
    objective: { query: 'prepare a continuity plan' },
    execute: false,
  });

  assert.deepEqual(result, { accepted: true, status: 'proposed' });
  assert.equal(captured.name, 'abba');
  assert.equal(captured.options.body.execute, false);
  assert.equal(captured.options.body.product, 'RITES');
  assert.equal(captured.options.body.domain, 'continuity');
});

test('invokeAbba propagates the server error', async () => {
  const client = {
    functions: {
      async invoke() {
        return { data: null, error: new Error('unauthorized') };
      },
    },
  };

  await assert.rejects(
    invokeAbba(client, { product: 'RITES', domain: 'continuity', objective: { query: 'private request' } }),
    /unauthorized/
  );
});
