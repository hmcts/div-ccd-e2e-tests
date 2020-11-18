/// <reference path="../steps.d.ts" />

const { createCaseInCcd, updateCaseInCcd, getCaseWorkerLoginDetails } = require('../helpers/utils');
const verifyContent = require('../data/ccdAdulteryRespondentCorespondentDefendedCase.json');
const caseWorker = getCaseWorkerLoginDetails();
const { reasonsForDivorce, signOut } = require('../common/constants');

let caseId;

Feature('Verify Adultery case defended by both Resp and Co Res ');

Scenario('Adultery case - Execute events for PFE, RFE, Co-RESP, DN , DA', async function (I) {
  caseId = await createCaseInCcd('data/ccdAdulteryRespondentCorespondentDefendedCase.json');
  const response = await updateCaseInCcd(caseId, 'hwfApplicationAcceptedfromAwaitingHWFDecision');
  const submitted = await updateCaseInCcd(caseId, 'issueFromSubmitted');
  const issueAOS = await updateCaseInCcd(caseId, 'issueAos');
  const startAOS = await updateCaseInCcd(caseId, 'startAos');
  const aosSubmittedCoRespoDefended = await updateCaseInCcd(caseId, 'co-RespAOSReceivedStarted');
  const aosSubmittedRespoDefended = await updateCaseInCcd(caseId, 'aosSubmittedDefended');
  const coRespAnswerReceivedForDefended = await updateCaseInCcd(caseId, 'coRespAnswerReceivedAOS');
  const answerNotReceived = await updateCaseInCcd(caseId, 'answerNotReceived');
  const dnApplied = await updateCaseInCcd(caseId, 'dnReceived');
  const refertoLegalAdvisor = await updateCaseInCcd(caseId, 'refertoLegalAdvisor');
  const entitlementGranted = await updateCaseInCcd(caseId, 'entitlementGranted');
  const awaitingDecreeAbsolute = await updateCaseInCcd(caseId, 'dnPronounced');
  const daGranted = await updateCaseInCcd(caseId, 'daGranted');
});

Scenario('Adultery case - verify all tabs PFE, RFE, DN, DA', async function (I) {
  I.amOnHomePage();
  I.login(caseWorker.username, caseWorker.password);
  I.wait(20);
  I.amOnPage('/case/DIVORCE/DIVORCE/' + caseId);
  I.wait(30);
  I.verifyPetitionerTab(reasonsForDivorce.ADULTERY, verifyContent);
  I.verifyMarriageCertificateTab(verifyContent);
  I.verifyAOSAnswersInTab(reasonsForDivorce.ADULTERY, verifyContent);
  I.verifyCorespondentTab(verifyContent);
  I.verifyDNAnswersInTab(reasonsForDivorce.ADULTERY, verifyContent);
  I.verifyDocumentsTab(reasonsForDivorce.ADULTERY, caseId);
  I.click(signOut);
});
