const { createCaseInCcd, updateCaseInCcd } = require('../helpers/utils');
const verifyContent = require('../data/ccdAdulteryRespondentCorespondentDefendedCase.json');
const { reasonsForDivorce, signOut, states, events } = require('../common/constants');
const assert = require('assert');
const testconfig = require('./config');

const verifyState = (eventResponse, state) => {
  assert.strictEqual(JSON.parse(eventResponse).state, state);
};

let caseId;

describe('E2E Baseline tests for core functionality', () => {

  it('should allow Petitioner to create an adultery case, claims costs and pay with credit card', async () => {
    const condition = 'data/petitionerCreateAdulteryWithCostClaimsAndCreditCard.json';

    caseId = await createCaseInCcd(condition);

    const submitted = await updateCaseInCcd(caseId, events.HWF_ACCEPT_AWAIT_DECISION);
    verifyState(submitted, states.SUBMITTTED);
  });
});