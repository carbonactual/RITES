// Compatibility module retained for existing RITES imports.
// Canonical contract semantics live in ./carbon-actual-contract.js.

export {
  toCarbonActualIntent,
  toCarbonActualAgentContract,
  guardAction,
} from './carbon-actual-contract.js';

import {
  toCarbonActualIntent,
  toCarbonActualAgentContract,
} from './carbon-actual-contract.js';

// Legacy API aliases. Existing callers remain valid while Carbon Actual is
// the canonical semantic source.
export const toOmniiIntent = toCarbonActualIntent;
export const toOmniiAgentContract = toCarbonActualAgentContract;
