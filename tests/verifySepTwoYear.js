/// <reference path="../steps.d.ts" />

const { createCaseInCcd, updateCaseInCcd, getCaseWorkerLoginDetails } = require('../helpers/utils');
const verifyContent = require('../data/ccdSepTwoYrs.json');
const caseWorker = getCaseWorkerLoginDetails();
const { reasonsForDivorce, signOut, states } = require('../common/constants');
const assert = require('assert');

const verifyState = (eventResponse, state) => {
  assert.strictEqual(JSON.parse(eventResponse).state, state);
};

let caseId;

Feature('Verify Separation-2-yr Case ');

Scenario('Execute events for end to end flow of PFE, RFE, DN , DA', async function (I) {
  caseId = await createCaseInCcd('data/ccdSepTwoYrs.json');

  const submitted = await updateCaseInCcd(caseId, 'hwfApplicationAcceptedfromAwaitingHWFDecision');
  verifyState(submitted, states.SUBMITTTED);

  const issued = await updateCaseInCcd(caseId, 'issueFromSubmitted');
  verifyState(issued, states.ISSUED);

  const issueAOS = await updateCaseInCcd(caseId, 'issueAos');
  verifyState(issueAOS, states.AOS_AWAITING);

  const startAOS = await updateCaseInCcd(caseId, 'startAos');
  verifyState(startAOS, states.AOS_STARTED);

  const aosSubmittedRespoDefended = await updateCaseInCcd(caseId, 'aosSubmittedDefended');
  verifyState(aosSubmittedRespoDefended, states.AWAITING_ANSWER);

  const answerNotReceived = await updateCaseInCcd(caseId, 'answerNotReceived');
  verifyState(answerNotReceived, states.AWAITING_DN);

  const dnApplied = await updateCaseInCcd(caseId, 'dnReceived');
  verifyState(dnApplied, states.AWAITING_LA);

  const refertoLegalAdvisor = await updateCaseInCcd(caseId, 'refertoLegalAdvisor');
  verifyState(refertoLegalAdvisor, states.AWAITING_CONSIDERATION);

  const entitlementGranted = await updateCaseInCcd(caseId, 'entitlementGranted');
  verifyState(entitlementGranted, states.AWAITING_PRONOUNCEMENT);

  const awaitingDecreeAbsolute = await updateCaseInCcd(caseId, 'dnPronounced');
  verifyState(awaitingDecreeAbsolute, states.AWAITING_DA);

  const daGranted = await updateCaseInCcd(caseId, 'daGranted');
  verifyState(daGranted, states.DIVORCE_GRANTED);
});

Scenario('verify all tab fields of PFE, RFE, DN, DA', async function (I) {
  I.amOnHomePage();
  I.login(caseWorker.username, caseWorker.password);
  I.wait(20);
  I.amOnPage('/case/DIVORCE/DIVORCE/' + caseId);
  I.wait(30);
  I.validatePetitionTabData(reasonsForDivorce.SEPTWOYRSDISPLAY, verifyContent);
  I.validateConfidentialPetitionerTab(verifyContent);
  I.validateMarriageCertTabData(verifyContent);
  I.validateAOSTabData(reasonsForDivorce.SEPTWOYRS, verifyContent);
  I.validateDecreeNisiTabData(reasonsForDivorce.SEPTWOYRS, verifyContent);
  I.validateDocumentTabData(reasonsForDivorce.SEPTWOYRS, caseId);
  I.click(signOut);
});
