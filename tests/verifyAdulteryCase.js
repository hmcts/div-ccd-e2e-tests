/// <reference path="../steps.d.ts" />

const { createCaseInCcd, updateCaseInCcd, getCaseWorkerLoginDetails, firstLetterToCaps, datechange } = require('../helpers/utils');
const verifyContent = require('../data/ccdAdulteryRespondentCorespondentDefendedCase.json');
const verifyLableText = require('../data/ccdFieldTabLabelNames.json');
const caseWorker = getCaseWorkerLoginDetails();

Feature('verify Adutlery case ');

Scenario('Adultery case defended by both Resp and Co Resp', async function (I) {
  const caseId = await createCaseInCcd('data/ccdAdulteryRespondentCorespondentDefendedCase.json');
  const response = await updateCaseInCcd(caseId, 'hwfApplicationAcceptedfromAwaitingHWFDecision');
  const submitted = await updateCaseInCcd(caseId, 'issueFromSubmitted');
  const issueAOS = await updateCaseInCcd(caseId, 'issueAos');
  const startAOS = await updateCaseInCcd(caseId, 'startAos');
  const aosSubmittedCoRespoDefended = await updateCaseInCcd(caseId, 'co-RespAOSReceivedStarted');
  const aosSubmittedRespoDefended = await updateCaseInCcd(caseId, 'aosSubmittedDefended');
  const coRespAnswerReceivedForDefended = await updateCaseInCcd(caseId,'coRespAnswerReceivedAOS');
  const reason ='Adultery';

  I.amOnHomePage();
  I.login(caseWorker.username, caseWorker.password);
  I.wait(20);
  I.amOnPage('/case/DIVORCE/DIVORCE/' + caseId);
  I.wait(30);
  I.verifyPetitionerTab(reason,verifyContent);
  I.verifyAOSAnswersInTab(reason,verifyContent);
  I.verifyDocumentsTab(reason,verifyContent,caseId);
  I.verifyMarriageCertificateTab(reason, verifyContent);
  I.verifyCorespondentTab(reason, verifyContent);
  I.click('Sign out');

});