/// <reference path="../steps.d.ts" />

const { createCaseInCcd, getCaseWorkerLoginDetails } = require('../helpers/utils');
const caseWorker = getCaseWorkerLoginDetails();
const { signOut } = require('../common/constants');


Feature('Verify Amended Case ');

Scenario('Create linked case and verify tab', async function (I) {
  const caseId = await createCaseInCcd('data/ccdLinkedCase.json');
  I.amOnHomePage();
  I.login(caseWorker.username, caseWorker.password);
  I.wait(20);
  I.amOnPage('/case/DIVORCE/DIVORCE/' + caseId);
  I.wait(30);
  await I.validateLinkedCaseTabData();
  I.click(signOut);
}).retry(2);

