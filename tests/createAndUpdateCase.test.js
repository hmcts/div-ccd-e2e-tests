/// <reference path="../steps.d.ts" />

const { createCaseInCcd, updateCaseInCcd, getCaseWorkerLoginDetails } = require('../helpers/utils');

const caseWorker = getCaseWorkerLoginDetails();

Feature('Testing CCD Create and Update as well as Caseworker change AOS States');

Scenario('Create and Update as well as caseworker change AOS states', async function (I) {
  const caseId = await createCaseInCcd('data/ccdAdulteryRespondentCorespondentDefendedCase.json');
  const response = await updateCaseInCcd(caseId, 'hwfApplicationAcceptedfromAwaitingHWFDecision', 'data/ccd-update-data.json');

  I.amOnHomePageamOnHomePage();
  I.login(caseWorkercaseWorker.username, caseWorker.password);
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
  I.wait(5);
  I.click('Sign Out');
});


Scenario('ccd-basic-data', async function (I) {
  const caseId = await createCaseInCcd('data/ccd-basic-data.json');
  const response = await updateCaseInCcd(caseId, 'hwfApplicationAcceptedfromAwaitingHWFDecision', 'data/ccd-update-data.json');
});

Scenario('ccdAdulteryRespondentCorespondentDefendedCase', async function (I) {
  const caseId = await createCaseInCcd('data/ccdAdulteryRespondentCorespondentDefendedCase.json');
  const response = await updateCaseInCcd(caseId, 'hwfApplicationAcceptedfromAwaitingHWFDecision', 'data/ccd-update-data.json');
});

Scenario('ccdBehaviourUnDefendedCase', async function (I) {
  const caseId = await createCaseInCcd('data/ccdBehaviourUnDefendedCase.json');
  const response = await updateCaseInCcd(caseId, 'hwfApplicationAcceptedfromAwaitingHWFDecision', 'data/ccd-update-data.json');
});



Scenario('additionalpayment', async function (I) {
  const caseId = await createCaseInCcd('/data/reasonadultery.json');
  const response = await updateCaseInCcd(caseId, 'hwfApplicationAcceptedfromAwaitingHWFDecision', 'data/ccd-update-data.json');
});
