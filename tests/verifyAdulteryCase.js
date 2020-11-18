/// <reference path="../steps.d.ts" />

const { createCaseInCcd, updateCaseInCcd, getCaseWorkerLoginDetails } = require('../helpers/utils');
const verifyContent = require('../data/ccdAdulteryRespondentCorespondentDefendedCase.json');
const caseWorker = getCaseWorkerLoginDetails();
const { reasonsForDivorce, signOut } = require('../common/constants');

let caseId;

Feature('Verify Adultery case defended by both Resp and Co Res ');

Scenario('Adultery case - Petitioner', async function (I) {
  caseId = await createCaseInCcd('data/ccdAdulteryRespondentCorespondentDefendedCase.json');
  const response = await updateCaseInCcd(caseId, 'hwfApplicationAcceptedfromAwaitingHWFDecision');
  const submitted = await updateCaseInCcd(caseId, 'issueFromSubmitted');

  I.amOnHomePage();
  I.login(caseWorker.username, caseWorker.password);
  I.wait(20);
  I.amOnPage('/case/DIVORCE/DIVORCE/' + caseId);
  I.wait(30);
  I.verifyPetitionerTab(reasonsForDivorce.ADULTERY, verifyContent);
  I.verifyConfidentialPetitionerTab(verifyContent);
  I.verifyMarriageCertificateTab(verifyContent);
  I.click(signOut);
});

Scenario('Adultery case  - AOS ', async function (I) {
  const issueAOS = await updateCaseInCcd(caseId, 'issueAos');
  const startAOS = await updateCaseInCcd(caseId, 'startAos');
  const aosSubmittedCoRespoDefended = await updateCaseInCcd(caseId, 'co-RespAOSReceivedStarted');

  I.amOnHomePage();
  I.login(caseWorker.username, caseWorker.password);
  I.wait(20);
  I.amOnPage('/case/DIVORCE/DIVORCE/' + caseId);
  I.wait(30);
  I.verifyAOSAnswersInTab(reasonsForDivorce.ADULTERY, verifyContent);
  I.click(signOut);
});

Scenario('Adultery case - CoResp ', async function (I) {
  const coRespAnswerReceivedForDefended = await updateCaseInCcd(caseId,'coRespAnswerReceivedAOS');

  I.amOnHomePage();
  I.login(caseWorker.username, caseWorker.password);
  I.wait(20);
  I.amOnPage('/case/DIVORCE/DIVORCE/' + caseId);
  I.wait(30);
  I.verifyCorespondentTab(verifyContent);
  I.click(signOut);
});

Scenario('Adultery case  - DN', async function (I) {
  const dnApplied = await updateCaseInCcd(caseId, 'dnReceived');

  I.amOnHomePage();
  I.login(caseWorker.username, caseWorker.password);
  I.wait(20);
  I.amOnPage('/case/DIVORCE/DIVORCE/' + caseId);
  I.wait(30);
  I.verifyDNAnswersInTab(reasonsForDivorce.ADULTERY, verifyContent);
  I.verifyDocumentsTab(reasonsForDivorce.ADULTERY, caseId);
  I.click(signOut);
});