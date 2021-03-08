const { createCaseInCcd, updateCaseInCcd } = require('../helpers/utils');
const {states, events } = require('../common/constants');
const assert = require('assert');

const verifyState = (eventResponse, state) => {
  assert.strictEqual(JSON.parse(eventResponse).state, state);
};

let caseId;

describe('E2E Baseline tests for core functionality', () => {

  it('should allow petitioner to create an adultery case, claims costs and pay with credit card', async () => {
    await I.amOnHomePage();
    await I.login(testconfig.TestEnvProfUser, testconfig.TestEnvProfPassword);
    await I.languagePreferenceSelection();
    await I.hasMarriageBrokenDown();
    await I.haveAnAddressForPartner();
    await I.haveMarriageCertificate();
  });
});