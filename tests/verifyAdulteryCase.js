/// <reference path="../steps.d.ts" />

const { createCaseInCcd, updateCaseInCcd, getCaseWorkerLoginDetails } = require('../helpers/utils');
const verifyContent = require('../data/ccdAdulteryRespondentCorespondentDefendedCase.json');
const caseWorker = getCaseWorkerLoginDetails();
const { reasonsForDivorce, signOut } = require('../common/constants');

let caseId;

Feature('Verify Adultery case defended by both Resp and Co Res ');

Scenario('Adultery case - Execute events for PFE, RFE, Co-RESP, DN , DA', async function (I) {
  caseId = await createCaseInCcd('data/ccdAdulteryRespondentCorespondentDefendedCase.json');
  await updateCaseInCcd(caseId, 'hwfApplicationAcceptedfromAwaitingHWFDecision');
  await updateCaseInCcd(caseId, 'issueFromSubmitted');
  await updateCaseInCcd(caseId, 'issueAos');
  await updateCaseInCcd(caseId, 'startAos');
  await updateCaseInCcd(caseId, 'co-RespAOSReceivedStarted');
  await updateCaseInCcd(caseId, 'aosSubmittedDefended');
  await updateCaseInCcd(caseId, 'coRespAnswerReceivedAOS');
  await updateCaseInCcd(caseId, 'answerNotReceived');
  await updateCaseInCcd(caseId, 'dnReceived');
  await updateCaseInCcd(caseId, 'refertoLegalAdvisor');
  await updateCaseInCcd(caseId, 'entitlementGranted');
  await updateCaseInCcd(caseId, 'dnPronounced');
  await updateCaseInCcd(caseId, 'daGranted');
});

Scenario('Adultery case - verify all tabs PFE, RFE, DN, DA', async function (I) {
  I.amOnHomePage();
  I.login(caseWorker.username, caseWorker.password);
  I.wait(20);
  I.amOnPage('/case/DIVORCE/DIVORCE/' + caseId);
  I.wait(30);
  I.validatePetitionerTabData(reasonsForDivorce.ADULTERY, verifyContent);
  I.validateMarriageCertTabData(verifyContent);
  I.validateAOSTabData(reasonsForDivorce.ADULTERY, verifyContent);
  I.validateCoRespTabData(verifyContent);
  I.validateDecreeNisiTabData(reasonsForDivorce.ADULTERY, verifyContent);
  I.validateDocumentTabData(reasonsForDivorce.ADULTERY, caseId);
  I.click(signOut);
});
