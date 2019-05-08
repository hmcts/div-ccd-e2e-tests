/// <reference path="../steps.d.ts" />

const { createCaseInCcd, updateCaseInCcd, getCaseWorkerLoginDetails } = require('../helpers/utils');

const caseWorker = getCaseWorkerLoginDetails();

Feature('Testing CCD Create and Update as well as Caseworker change AOS States');

Scenario('Create and Update as well as caseworker change AOS states', async function (I) {
  const caseId = await createCaseInCcd('data/ccd-basic-data.json');
  const response = await updateCaseInCcd(caseId, 'hwfApplicationAcceptedfromAwaitingHWFDecision', 'data/ccd-update-data.json');

  I.resizeWindow(1920, 1080);
  I.amOnHomePage();
  I.login(caseWorker.username, caseWorker.password);
  I.shouldBeOnCaseListPage();
  I.amOnPage('/case/DIVORCE/DIVORCE/' + caseId);
  I.wait(15);
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
  I.wait(5);
  I.click('Sign Out');
  I.wait(8);
});