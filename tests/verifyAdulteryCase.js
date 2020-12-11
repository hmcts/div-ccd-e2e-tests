/// <reference path="../steps.d.ts" />

const { createCaseInCcd, updateCaseInCcd, getCaseWorkerLoginDetails } = require('../helpers/utils');
const verifyContent = require('../data/ccdAdulteryRespondentCorespondentDefendedCase.json');
const caseWorker = getCaseWorkerLoginDetails();
const { reasonsForDivorce, signOut, states, events } = require('../common/constants');
const assert = require('assert');

const verifyState = (eventResponse, state) => {
  assert.strictEqual(JSON.parse(eventResponse).state, state);
};

let caseId;

Feature('Verify Adultery case defended by both Resp and Co Resp ');

Scenario('Execute events for end to end flow PFE, RFE, Co-RESP, DN , DA', async function (I) {
  caseId = await createCaseInCcd('data/ccdAdulteryRespondentCorespondentDefendedCase.json');

  const submitted = await updateCaseInCcd(caseId, events.HWF_ACCEPT_AWAIT_DECISION);
  verifyState(submitted, states.SUBMITTTED);

  const issued = await updateCaseInCcd(caseId, events.ISSUE_FROM_SUBMITTED);
  verifyState(issued, states.ISSUED);

  const issueAOS = await updateCaseInCcd(caseId, events.ISSUE_AOS);
  verifyState(issueAOS, states.AOS_AWAITING);

  const startAOS = await updateCaseInCcd(caseId, events.START_AOS);
  verifyState(startAOS, states.AOS_STARTED);

  const aosSubmittedCoRespoDefended = await updateCaseInCcd(caseId, events.CO_RESP_AOS_RECEIVED_STARTED);
  verifyState(aosSubmittedCoRespoDefended, states.AOS_STARTED);

  const aosSubmittedRespoDefended = await updateCaseInCcd(caseId, events.AOS_SUBMITTED_DEFENDED);
  verifyState(aosSubmittedRespoDefended, states.AWAITING_ANSWER);

  const coRespAnswerReceivedForDefended = await updateCaseInCcd(caseId, events.CO_RESP_ANSWER_RECVD_AOS);
  verifyState(coRespAnswerReceivedForDefended, states.AWAITING_ANSWER);

  const answerNotReceived = await updateCaseInCcd(caseId, events.ANSWER_NOT_RECEIVED);
  verifyState(answerNotReceived, states.AWAITING_DN);

  const dnApplied = await updateCaseInCcd(caseId, events.DN_RECEIVED);
  verifyState(dnApplied, states.AWAITING_LA);

  const refertoLegalAdvisor = await updateCaseInCcd(caseId, events.REFER_TO_LEGAL_ADVSIOR);
  verifyState(refertoLegalAdvisor, states.AWAITING_CONSIDERATION);

  const entitlementGranted = await updateCaseInCcd(caseId, events.ENTITLEMENT_GRANTED);
  verifyState(entitlementGranted, states.AWAITING_PRONOUNCEMENT);

  const awaitingDecreeAbsolute = await updateCaseInCcd(caseId, events.DN_PRONOUNCED);
  verifyState(awaitingDecreeAbsolute, states.AWAITING_DA);

  const daGranted = await updateCaseInCcd(caseId, events.DA_GRANTED);
  verifyState(daGranted, states.DIVORCE_GRANTED);
}).retry(2);

Scenario('verify all tab fields PFE, RFE, DN, DA', async function (I) {
  I.amOnHomePage();
  I.login(caseWorker.username, caseWorker.password);
  I.wait(20);
  I.amOnPage('/case/DIVORCE/DIVORCE/' + caseId);
  I.wait(30);
  await I.validatePetitionTabData(reasonsForDivorce.ADULTERY, verifyContent);
  await I.validateMarriageCertTabData(verifyContent);
  await I.validateAOSTabData(reasonsForDivorce.ADULTERY, verifyContent);
  await I.validateCoRespTabData(verifyContent);
  await I.validateDecreeNisiTabData(reasonsForDivorce.ADULTERY, verifyContent);
  await I.validateOutcomeOfDNTabData(verifyContent);
  await I.validateDecreeAbsoluteTabData(verifyContent);
  await I.validateDocumentTabData(reasonsForDivorce.ADULTERY, caseId);
  await I.validatePaymentTabData(verifyContent);
  await I.validateLanguageTabData(reasonsForDivorce.ADULTERY, verifyContent);
  I.click(signOut);
}).retry(2);
