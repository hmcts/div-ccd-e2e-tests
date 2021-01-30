const { createCaseInCcd } = require('../helpers/utils');
const { signOut } = require('../common/constants');
const config = require('./config');

Feature('Verify Amended Case ');

Scenario('Create linked case and verify tab', async function (I) {
  const caseId = await createCaseInCcd('data/ccdLinkedCase.json');
  I.amOnHomePage();
 I.login(config.TestEnvCWUser, config.TestEnvCWPassword);
  I.wait(20);
  I.amOnPage('/case/DIVORCE/DIVORCE/' + caseId);
  I.wait(30);
  await I.validateLinkedCaseTabData();
  await I.click(signOut);
}).retry(2);

