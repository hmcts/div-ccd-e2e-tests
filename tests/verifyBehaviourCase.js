/// <reference path="../steps.d.ts" />

const { createCaseInCcd, updateCaseInCcd, getCaseWorkerLoginDetails, firstLetterToCaps, datechange } = require('../helpers/utils');
const verifyContent = require('../data/ccdBehaviourUnDefendedCase.json');
const caseWorker = getCaseWorkerLoginDetails();
const { reasonsForDivorce, signOut } = require('../common/constants');

let caseId;

Feature('Verify Behaviour Case ');

Scenario('Behaviour case Undefended - Execute events for PFE, RFE, Co-RESP, DN , DA', async function (I) {
  caseId = await createCaseInCcd('data/ccdBehaviourUnDefendedCase.json');
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
  const daGranted = await updateCaseInCcd(caseId, 'daGranted');
  console.log('daGranted is ', daGranted);
});

Scenario('Behaviour case Undefended - verify all tabs PFE, RFE, DN, DA', async function (I) {
  I.amOnHomePage();
  I.login(caseWorker.username, caseWorker.password);
  I.wait(20);
  I.amOnPage('/case/DIVORCE/DIVORCE/' + caseId);
  I.wait(30);
  I.validatePetitionerTabData(reasonsForDivorce.BEHAVIOUR, verifyContent);
  I.validateConfidentialPetitionerTab(verifyContent);
  I.validateMarriageCertTabData(verifyContent);
  I.validateAOSTabData(reasonsForDivorce.BEHAVIOUR, verifyContent);
  I.validateDecreeNisiTabData(reasonsForDivorce.BEHAVIOUR, verifyContent);
  I.validateDocumentTabData(reasonsForDivorce.BEHAVIOUR, caseId);
  I.click(signOut);
});