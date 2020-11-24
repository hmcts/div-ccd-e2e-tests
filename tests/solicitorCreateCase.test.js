/// <reference path="../steps.d.ts" />

const { events, signOut } = require('../common/constants');
const { getSolicitorLoginDetails, getCaseWorkerLoginDetails } = require('../helpers/utils');


const solicitor = getSolicitorLoginDetails();
const caseWorker = getCaseWorkerLoginDetails();

const nextStepDropDown = 'select[id="next-step"]'

let caseNumber;

Feature('Solicitor create case');

Scenario('Solicitor create case and make payment', async (I) => {
  I.amOnHomePage();
  I.login(solicitor.username, solicitor.password);
  I.shouldBeOnCaseListPage();
  I.clickCreateCase();
  I.wait(1);
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
  I.languagePreferenceSelection();
  I.solicitorCreateCheckYourAnswerAndSubmit();
  caseNumber = await I.solicitorCaseCreatedAndSubmit();
  caseNumber = caseNumber.replace(/\D/gi, '');
  console.log(caseNumber);
  I.statementOfTruthAndReconciliationPageFormAndSubmit();
  await I.casePaymentAndSubmissionPageFormAndSubmit();
  I.caseOrderSummaryPageFormAndSubmit();
  I.caseApplicationCompletePageFormAndSubmit();
  I.caseCheckYourAnswersPageFormAndSubmit();
  I.solAwaitingPaymentConfPageFormAndSubmit();
});

Scenario('Solicitor should not see issue, refund events', async (I) => {
  I.amOnHomePage();
  I.login(solicitor.username, solicitor.password);
  I.wait(20);
  I.amOnPage('/case/DIVORCE/DIVORCE/' + caseNumber);
  I.waitForElement(nextStepDropDown);
  I.click(nextStepDropDown);
  I.see(events.UPDATE_LANG);
  I.dontSee(events.ISSUE);
  I.dontSee(events.REFUND);
  I.dontSee(events.TRANSFER_BETWEEN_RDC);
  I.dontSee(events.TRANSFER_CTSC_TO_RDC);
  I.click(signOut);
});

Scenario('Caseworker should be able to see issue, refund events', async (I) => {
  I.amOnHomePage();
  I.login(caseWorker.username, caseWorker.password);
  I.wait(20);
  I.amOnPage('/case/DIVORCE/DIVORCE/' + caseNumber);
  I.waitForElement(nextStepDropDown);
  I.click(nextStepDropDown);
  I.see(events.UPDATE_LANG);
  I.see(events.ISSUE);
  I.see(events.REFUND);
  I.see(events.TRANSFER_BETWEEN_RDC);
  I.see(events.TRANSFER_CTSC_TO_RDC);
  I.click(signOut);
});

