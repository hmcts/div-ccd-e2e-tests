/// <reference path="../steps.d.ts" />

const { createCaseInCcd, updateCaseInCcd, getCaseWorkerLoginDetails } = require('../helpers/utils');
const { eventDisplayName, signOut } = require('../common/constants');

const caseWorker = getCaseWorkerLoginDetails();

let caseId;

Feature('Testing CCD Create and Update as well as Caseworker change AOS States');

Scenario('Create and Update as well as caseworker change AOS states', async function (I) {
  caseId = await createCaseInCcd('data/ccd-basic-data.json');
  await updateCaseInCcd(caseId, 'hwfApplicationAcceptedfromAwaitingHWFDecision', 'data/ccd-update-data.json');

  I.amOnHomePage();
  I.login(caseWorker.username, caseWorker.password);
  I.shouldBeOnCaseListPage();
  I.amOnPage('/case/DIVORCE/DIVORCE/' + caseId);
  I.wait(5);
  I.ccdCaseCreatedFromJsonLandingPageFormAndSubmit();
  I.changeToCourtsAndTribunalsServiceCentrePageFormAndSubmit();
  I.enterRDCChangeSummaryAndDescriptionPageFormAndSubmit();
  I.caseCreatedCTSCServiceCentrePageFormAndSubmit();
  I.issueFromSubmittedPageFormAndSubmit();
  I.issueCheckYourAnswersPageFormAndSubmit();
  I.petitionIssuedPageAndAosPackSelectPageFormAndSubmit();
  I.aosPackIssueTestCheckYourAnswersPageFormAndSubmit();
  I.aosPackToRespondentLandingPageFormAndSubmit();
  I.aosStartedPageFormAndSubmit();
  I.aosStartedCheckYourAnswersPageFormAndSubmit();
  I.click(signOut);
}).retry(2);

Scenario('Caseworker change DN events', async function (I) {
  I.amOnHomePage();
  I.login(caseWorker.username, caseWorker.password);
  I.shouldBeOnCaseListPage();
  I.amOnPage('/case/DIVORCE/DIVORCE/' + caseId);
  I.wait(5);
  I.aosReceivedUndefendedMoveToDNFormSubmit();
  I.selectAndSubmitEvent(eventDisplayName.DN_RECEIVED);
  I.selectAndSubmitEvent(eventDisplayName.REFER_TO_LEGAL_ADVSIOR);
  I.selectAndSubmitEvent(eventDisplayName.ENTITLEMENT_GRANTED);
  I.selectAndSubmitEvent(eventDisplayName.DN_PRONOUNCED);
  I.selectAndSubmitEvent(eventDisplayName.DA_GRANTED)
  I.wait(5);
  I.click(signOut);
}).retry(2);