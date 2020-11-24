/// <reference path="../steps.d.ts" />

const { createCaseInCcd, getCaseWorkerLoginDetails } = require('../helpers/utils');
const caseWorker = getCaseWorkerLoginDetails();
const { signOut } = require('../common/constants');


Feature('Verify Separation-2-yr Case ');

Scenario('Execute events for end to end flow of PFE, RFE, DN , DA', async function (I) {
  const caseId = await createCaseInCcd('data/ccdLinkedCase.json');
  I.amOnHomePage();
  I.login(caseWorker.username, caseWorker.password);
  I.wait(20);
  I.amOnPage('/case/DIVORCE/DIVORCE/' + caseId);
  I.wait(30);
  I.validateLinkedCaseTabData();
  I.click(signOut);
});

