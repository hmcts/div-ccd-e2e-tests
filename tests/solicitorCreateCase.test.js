/// <reference path="../steps.d.ts" />

const { getSolicitorLoginDetails, getCaseWorkerLoginDetails } = require('../helpers/utils');


const solicitor = getSolicitorLoginDetails();
const caseWorker = getCaseWorkerLoginDetails();

Feature('Solicitor create case');

Scenario('Solicitor create case and case worker views case', async (I) => {
    I.resizeWindow(1920, 1080);
    I.amOnHomePage();
    I.login(solicitor.username, solicitor.password);
    I.shouldBeOnCaseListPage();
    I.clickCreateCase();
    I.wait(5);
    I.fillCreateCaseFormAndSubmit();
    I.fillAboutSolicitorFormAndSubmit();
    I.fillAboutThePetitionerFormAndSubmit();
    I.fillAboutTheRespondentFormAndSubmit();
    I.completeMarriageCertificateDetailsPageAndSubmit();
    I.selectJurisdictionQuestionPageAndSubmit();
    I.selectReasonForTheDivorceQuestionPageAndSubmit();
    I.fillAdulteryDetailsFormAndSubmit();
    I.fillAdulteryDetailsSecondPageFormAndSubmit();
    I.otherLegalProceedings();
    I.financialOrdersSelectButton();
    I.claimForCostsSelectButton(),
    I.uploadTheMarriageCertificateOptional();
    I.solicitorCreateCheckYourAnswerAndSubmit();
    const caseNumber = await I.solicitorCaseCreatedAndSubmit();
    console.log(caseNumber);
    I.statementOfTruthAndReconciliationPageFormAndSubmit();
    I.casePaymentAndSubmissionPageFormAndSubmit();
    I.caseOrderSummaryPageFormAndSubmit();
    I.caseApplicationCompletePageFormAndSubmit();
    I.caseCheckYourAnswersPageFormAndSubmit();
    I.solAwaitingPaymentConfPageFormAndSubmit();
    I.wait(4);
    
    
});