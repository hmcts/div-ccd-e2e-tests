const { createCaseInCcd } = require('../helpers/utils');
const { signOut } = require('../common/constants');
const config = require('./config');

Feature('Verify Amended Case ');

Scenario('Create linked case and verify tab', async function (I) {
  const caseId = await createCaseInCcd('data/ccdLinkedCase.json');
  await I.amOnHomePage();
  await I.login(config.TestEnvCWUser, config.TestEnvCWPassword);
  await I.wait(20);
  await I.amOnPage('/case/DIVORCE/DIVORCE/' + caseId);
  await I.wait(30);
  await I.validateLinkedCaseTabData();
  await I.click(signOut);
}).retry(config.TestRetryScenarios);

