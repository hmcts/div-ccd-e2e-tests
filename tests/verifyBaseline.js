const { createCaseInCcd, updateCaseInCcd } = require('../helpers/utils');
const {states, events } = require('../common/constants');
const assert = require('assert');

describe('E2E Baseline tests for core functionality', () => {

  /**
   * https://docs.google.com/spreadsheets/d/1VbAz_WhGfQOYRWIrM8xwQXGEQYvse1JN-CXSxwt1Gak/edit?ts=601c25ab#gid=1443787070
   * 21 Scenarios.
   */

  it('AC 1 should allow petitioner to create an adultery case, claims costs and pay with credit card', async () => {
    await I.amOnHomePage();
    await I.login(testconfig.TestEnvProfUser, testconfig.TestEnvProfPassword);
    await I.languagePreferenceSelection();
    await I.stateThatMarriageHasBrokenDown();
    await I.haveAnAddressForPartner();
    await I.haveMarriageCertificate();
    await I.continueSettlingFinances();
    await I.dontNeedHelpWithFees();
    await I.amDivorcingMyWife();
    await I.gotMarriedTwoYearsAgo();
    await I.gotMarriedInTheUk();
    await I.stateBothPartiesAreMainlyInEnglandAndWales();
    await I.amConfidentSelectionIsRight();
    await I.dontNeedMyAddressKeptPrivate();
    await I.enterBothPartiesNames();
    await I.enterNamesDisplayedOnTheMarriageCertificate();
    await I.haveNotChangedMyNameSinceIGotMarried();
    await I.agreeToEmailNotifcations();
  });
});