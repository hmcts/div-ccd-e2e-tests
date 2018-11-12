/// <reference path="../steps.d.ts" />

const { createCaseInCcd, updateCaseInCcd, getCaseWorkerLoginDetails } = require('../helpers/utils');

const caseWorker = getCaseWorkerLoginDetails();

Feature('Testing CCD Create and Update as well as Caseworker change AOS States');

Scenario('Create and Update as well as caseworker change AOS states', async function (I) {
    const caseId = await createCaseInCcd();
    const response = await updateCaseInCcd(caseId, 'hwfApplicationAcceptedfromAwaitingHWFDecision');

    I.resizeWindow(1920, 1080);
    I.amOnHomePage();
    I.login(caseWorker.username, caseWorker.password);
    I.shouldBeOnCaseListPage();
    I.amOnPage('/case/DIVORCE/DIVORCE/' + caseId);
    I.wait(3);
    I.ccdCaseCreatedFromJsonLandingPageFormAndSubmit();
    I.issueFromSubmittedPageFormAndSubmit();
    I.issueCheckYourAnswersPageFormAndSubmit();
    I.petitionIssuedPageAndAosPackSelectPageFormAndSubmit();
    I.aosPackIssueTestPageFormAndSubmit();
    I.aosPackIssueTestCheckYourAnswersPageFormAndSubmit();
    I.aosPackIssueTestLandingPageFormAndSubmit();
    I.aosAwaitingTestPageFormAndSubmit();
    I.wait(5);
    I.click('Sign Out');
    I.wait(8);
});