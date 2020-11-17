/// <reference path="../steps.d.ts" />

const { createCaseInCcd, updateCaseInCcd, getCaseWorkerLoginDetails, firstLetterToCaps, datechange } = require('../helpers/utils');
const verifyContent = require('../data/ccdDesertionCase.json');
const verifyLableText = require('../data/ccdFieldTabLabelNames.json');
const caseWorker = getCaseWorkerLoginDetails();
const reason = 'Behaviour';

Feature('verify desertion case ');

Scenario('Desertion case', async function (I) {
  const caseId = await createCaseInCcd('data/ccdDesertionCase.json');
  const response = await updateCaseInCcd(caseId, 'hwfApplicationAcceptedfromAwaitingHWFDecision');
  const submitted = await updateCaseInCcd(caseId, 'issueFromSubmitted');
  const issueAOS = await updateCaseInCcd(caseId, 'issueAos');
  const startAOS = await updateCaseInCcd(caseId, 'startAos');
  const aosSubmittedUndefended = await updateCaseInCcd(caseId, 'aosSubmittedUndefended');
  const dnApplied = await updateCaseInCcd(caseId, 'dnReceived');

  I.amOnHomePage();
  I.login(caseWorker.username, caseWorker.password);
  I.wait(20);
  I.amOnPage('/case/DIVORCE/DIVORCE/' + caseId);
  I.wait(30);
  I.verifyPetitionerTab(reason,verifyContent);
  I.verifyDNAnswersInTab(reason,verifyContent);
  I.verifyAOSAnswersInTab(reason,verifyContent);
  I.verifyDocumentsTab(reason,verifyContent,caseId);
  I.verifyConfidentialPetitionerTab(reason,verifyContent);
  I.verifyMarriageCertificateTab(reason,verifyContent);
  I.click('Sign out');
});
