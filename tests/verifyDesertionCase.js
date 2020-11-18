/// <reference path="../steps.d.ts" />

const { createCaseInCcd, updateCaseInCcd, getCaseWorkerLoginDetails } = require('../helpers/utils');
const verifyContent = require('../data/ccdDesertionCase.json');
const caseWorker = getCaseWorkerLoginDetails();
const { reasonsForDivorce, signOut } = require('../common/constants')

let caseId;

Feature('Verify Desertion Case ');

Scenario('Desertion case - Petitioner', async function (I) {
  caseId = await createCaseInCcd('data/ccdDesertionCase.json');
  const response = await updateCaseInCcd(caseId, 'hwfApplicationAcceptedfromAwaitingHWFDecision');
  const submitted = await updateCaseInCcd(caseId, 'issueFromSubmitted');

  I.amOnHomePage();
  I.login(caseWorker.username, caseWorker.password);
  I.wait(20);
  I.amOnPage('/case/DIVORCE/DIVORCE/' + caseId);
  I.wait(30);
  I.verifyPetitionerTab(reasonsForDivorce.DESERTION, verifyContent);
  I.verifyConfidentialPetitionerTab(verifyContent);
  I.verifyMarriageCertificateTab(verifyContent);
  I.click(signOut);
});

Scenario('Desertion case - AOS', async function (I) {

  const issueAOS = await updateCaseInCcd(caseId, 'issueAos');
  const startAOS = await updateCaseInCcd(caseId, 'startAos');
  const aosSubmittedUndefended = await updateCaseInCcd(caseId, 'aosSubmittedUndefended');

  I.amOnHomePage();
  I.login(caseWorker.username, caseWorker.password);
  I.wait(20);
  I.amOnPage('/case/DIVORCE/DIVORCE/' + caseId);
  I.wait(30);
  I.verifyAOSAnswersInTab(reasonsForDivorce.DESERTION, verifyContent);
  I.click(signOut);
});

Scenario('Desertion case - DN', async function (I) {
  const dnApplied = await updateCaseInCcd(caseId, 'dnReceived');

  I.amOnHomePage();
  I.login(caseWorker.username, caseWorker.password);
  I.wait(20);
  I.amOnPage('/case/DIVORCE/DIVORCE/' + caseId);
  I.wait(30);
  I.verifyDNAnswersInTab(reasonsForDivorce.DESERTION, verifyContent);
  I.verifyDocumentsTab(reasonsForDivorce.DESERTION, caseId);
  I.click(signOut);
});
