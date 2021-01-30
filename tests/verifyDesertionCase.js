const { createCaseInCcd, updateCaseInCcd } = require('../helpers/utils');
const { reasonsForDivorce, signOut, states, events } = require('../common/constants');
const assert = require('assert');
const config = require('./config');

const verifyContent = require('../data/ccdDesertionCase.json');

const verifyState = (eventResponse, state) => {
  assert.strictEqual(JSON.parse(eventResponse).state, state);
};

let caseId;

Feature('Verify Desertion Case ');

Scenario('Execute events for end to end flow of PFE, RFE, DN , DA', async function (I) {
  caseId = await createCaseInCcd('data/ccdDesertionCase.json');

  const submitted = await updateCaseInCcd(caseId, events.HWF_ACCEPT_AWAIT_DECISION);
  verifyState(submitted, states.SUBMITTTED);

  const issued = await updateCaseInCcd(caseId, events.ISSUE_FROM_SUBMITTED);
  verifyState(issued, states.ISSUED);

  const issueAOS = await updateCaseInCcd(caseId, events.ISSUE_AOS);
  verifyState(issueAOS, states.AOS_AWAITING);

  const startAOS = await updateCaseInCcd(caseId, events.START_AOS);
  verifyState(startAOS, states.AOS_STARTED);

  const aosSubmittedRespoDefended = await updateCaseInCcd(caseId, events.AOS_SUBMITTED_DEFENDED);
  verifyState(aosSubmittedRespoDefended, states.AWAITING_ANSWER);

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
}).retry(config.TestRetryScenarios);

Scenario('verify all tab fields of PFE, RFE, DN, DA', async function (I) {
  await I.amOnHomePage();
  await I.login(config.TestEnvCWUser, config.TestEnvCWPassword);
  await I.wait(20);
  await I.amOnPage('/case/DIVORCE/DIVORCE/' + caseId);
  await I.wait(30);
  await I.validatePetitionTabData(reasonsForDivorce.DESERTION, verifyContent);
  await I.validateConfidentialPetitionerTab(verifyContent);
  await I.validateMarriageCertTabData(verifyContent);
  await I.validateAOSTabData(reasonsForDivorce.DESERTION, verifyContent);
  await I.validateDecreeNisiTabData(reasonsForDivorce.DESERTION, verifyContent);
  await I.validateOutcomeOfDNTabData(verifyContent);
  await I.validateDecreeAbsoluteTabData(verifyContent);
  await I.validateDocumentTabData(reasonsForDivorce.DESERTION, caseId);
  await I.validatePaymentTabData(verifyContent);
  await I.validateLanguageTabData(reasonsForDivorce.DESERTION, verifyContent);
  I.click(signOut);
}).retry(config.TestRetryScenarios);
