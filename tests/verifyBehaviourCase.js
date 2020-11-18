/// <reference path="../steps.d.ts" />

const { createCaseInCcd, updateCaseInCcd, getCaseWorkerLoginDetails, firstLetterToCaps, datechange } = require('../helpers/utils');
const verifyContent = require('../data/ccdBehaviourUnDefendedCase.json');
const caseWorker = getCaseWorkerLoginDetails();
const { reasonsForDivorce, signOut } = require('../common/constants');

let caseId;

Feature('Verify Behaviour Case ');

Scenario('Behaviour case Undefended - Petitioner', async function (I) {
  caseId = await createCaseInCcd('data/ccdBehaviourUnDefendedCase.json');
  const response = await updateCaseInCcd(caseId, 'hwfApplicationAcceptedfromAwaitingHWFDecision');
  const submitted = await updateCaseInCcd(caseId, 'issueFromSubmitted');

  I.amOnHomePage();
  I.login(caseWorker.username, caseWorker.password);
  I.wait(20);
  I.amOnPage('/case/DIVORCE/DIVORCE/' + caseId);
  I.wait(30);
  I.verifyPetitionerTab(reasonsForDivorce.BEHAVIOUR, verifyContent);
  I.verifyConfidentialPetitionerTab(verifyContent);
  I.verifyMarriageCertificateTab(verifyContent);
  I.click(signOut);
});

Scenario('Behaviour case Undefended - AOS', async function (I) {
  const issueAOS = await updateCaseInCcd(caseId, 'issueAos');
  const startAOS = await updateCaseInCcd(caseId, 'startAos');
  const aosSubmittedUndefended = await updateCaseInCcd(caseId, 'aosSubmittedUndefended');

  I.amOnHomePage();
  I.login(caseWorker.username, caseWorker.password);
  I.wait(20);
  I.amOnPage('/case/DIVORCE/DIVORCE/' + caseId);
  I.wait(30);
  I.verifyAOSAnswersInTab(reasonsForDivorce.BEHAVIOUR, verifyContent);
  I.click(signOut);
});

Scenario('Behaviour case Undefended - DN', async function (I) {
  const dnApplied = await updateCaseInCcd(caseId, 'dnReceived');

  I.amOnHomePage();
  I.login(caseWorker.username, caseWorker.password);
  I.wait(20);
  I.amOnPage('/case/DIVORCE/DIVORCE/' + caseId);
  I.wait(30);
  I.verifyDNAnswersInTab(reasonsForDivorce.BEHAVIOUR, verifyContent);
  I.verifyDocumentsTab(reasonsForDivorce.BEHAVIOUR, caseId);
  I.click(signOut);
});