/// <reference path="../steps.d.ts" />

const { createCaseInCcd, updateCaseInCcd, getCaseWorkerLoginDetails } = require('../helpers/utils');
const verifyContent = require('../data/ccdDesertionCase.json');
const caseWorker = getCaseWorkerLoginDetails();
const { reasonsForDivorce, signOut, states } = require('../common/constants')
const assert = require('assert');

let caseId;

Feature('Verify Desertion Case ');

xScenario('Desertion case - Execute events & verify states for PFE, RFE, Co-RESP, DN , DA', async function (I) {
  caseId = await createCaseInCcd('data/ccdDesertionCase.json');

  const submitted = await updateCaseInCcd(caseId, 'hwfApplicationAcceptedfromAwaitingHWFDecision');
  assert.strictEqual(JSON.parse(submitted).state, states.SUBMITTTED);

  const issued = await updateCaseInCcd(caseId, 'issueFromSubmitted');
  assert.strictEqual(JSON.parse(issued).state, states.ISSUED);

  const issueAOS = await updateCaseInCcd(caseId, 'issueAos');
  assert.strictEqual(JSON.parse(issueAOS).state, states.AOS_AWAITING);

  const startAOS = await updateCaseInCcd(caseId, 'startAos');
  assert.strictEqual(JSON.parse(startAOS).state, states.AOS_STARTED);

  const aosSubmittedRespoDefended = await updateCaseInCcd(caseId, 'aosSubmittedDefended');
  assert.strictEqual(JSON.parse(aosSubmittedRespoDefended).state, states.AWAITING_ANSWER);

  const answerNotReceived = await updateCaseInCcd(caseId, 'answerNotReceived');
  assert.strictEqual(JSON.parse(answerNotReceived).state, states.AWAITING_DN);

  const dnApplied = await updateCaseInCcd(caseId, 'dnReceived');
  assert.strictEqual(JSON.parse(dnApplied).state, states.AWAITING_LA);

  const refertoLegalAdvisor = await updateCaseInCcd(caseId, 'refertoLegalAdvisor');
  assert.strictEqual(JSON.parse(refertoLegalAdvisor).state, states.AWAITING_CONSIDERATION);

  const entitlementGranted = await updateCaseInCcd(caseId, 'entitlementGranted');
  assert.strictEqual(JSON.parse(entitlementGranted).state, states.AWAITING_CONSIDERATION);

  const awaitingDecreeAbsolute = await updateCaseInCcd(caseId, 'dnPronounced');
  assert.strictEqual(JSON.parse(awaitingDecreeAbsolute).state, states.AWAITING_DA);

  const daGranted = await updateCaseInCcd(caseId, 'daGranted');
  assert.strictEqual(JSON.parse(daGranted).state, states.DIVORCE_GRANTED);
});

Scenario('Desertion case - verify all tabs PFE, RFE, DN, DA', async function (I) {
  I.amOnHomePage();
  I.login(caseWorker.username, caseWorker.password);
  I.wait(20);
  I.amOnPage('/case/DIVORCE/DIVORCE/' + caseId);
  I.wait(30);
  I.validatePetitionTabData(reasonsForDivorce.DESERTION, verifyContent);
  I.validateConfidentialPetitionerTab(verifyContent);
  I.validateMarriageCertTabData(verifyContent);
  I.validateAOSTabData(reasonsForDivorce.DESERTION, verifyContent);
  I.validateDecreeNisiTabData(reasonsForDivorce.DESERTION, verifyContent);
  I.validateDocumentTabData(reasonsForDivorce.DESERTION, caseId);
  I.click(signOut);
});
