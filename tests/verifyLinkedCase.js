const { createCaseInCcd } = require('../helpers/utils');
const { signOut } = require('../common/constants');
const testconfig = require('./config');

Feature('Verify Amended Case ');

Scenario('Create linked case and verify tab', async function (I) {
  const caseId = await createCaseInCcd('data/ccdLinkedCase.json');
  await I.amOnHomePage();
  await I.login(testconfig.TestEnvCWUser, testconfig.TestEnvCWPassword);
  await I.wait(1);
  await I.amOnPage('/case/DIVORCE/DIVORCE/' + caseId);
  await I.wait(1);
  await I.validateLinkedCaseTabData();
  await I.click(signOut);
}).retry(testconfig.TestRetryScenarios);

