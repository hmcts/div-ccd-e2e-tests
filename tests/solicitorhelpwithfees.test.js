/// <reference path="../steps.d.ts" />

const { eventDisplayName, signOut, paymentType } = require('../common/constants');
const { getSolicitorLoginDetails, getCaseWorkerLoginDetails } = require('../helpers/utils');


const solicitor = getSolicitorLoginDetails();
const caseWorker = getCaseWorkerLoginDetails();

const nextStepDropDown = 'select[id="next-step"]'

let caseNumber='1608063617043924';

Feature('Solicitor create case - help with fees');

Scenario('Solicitor create case and make payment', async (I) => {
  I.amOnHomePage();
  I.login(solicitor.username, solicitor.password);
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
  await I.casePaymentWithHWFAndSubmissionPageFormAndSubmit();
  I.caseOrderSummaryPageFormAndSubmit(paymentType.HWF);
  I.caseApplicationCompletePageFormAndSubmit();
  I.caseCheckYourAnswersPageFormAndSubmit();
  I.solAwaitingPaymentConfPageFormAndSubmit();
}).retry(2);

Scenario('Solicitor should not see issue, refund events', async (I) => {
  I.amOnHomePage();
  I.login(solicitor.username, solicitor.password);
  I.wait(20);
  I.amOnPage('/case/DIVORCE/DIVORCE/' + caseNumber);
  I.waitForElement(nextStepDropDown);
  I.click(nextStepDropDown);
  I.see(eventDisplayName.UPDATE_LANG);
  I.dontSee(eventDisplayName.ISSUE);
  I.dontSee(eventDisplayName.REFUND);
  I.dontSee(eventDisplayName.TRANSFER_BETWEEN_RDC);
  I.dontSee(eventDisplayName.TRANSFER_CTSC_TO_RDC);
  I.click(signOut);
}).retry(2);

Scenario('Caseworker should be able to see issue, refund events and issue aos pack', async (I) => {
  I.amOnHomePage();
  I.login(caseWorker.username, caseWorker.password);
  I.wait(20);
  I.amOnPage('/case/DIVORCE/DIVORCE/' + caseNumber);
  I.selectAndSubmitEvent(eventDisplayName.HWF_APP_ACCEPTED);
  I.waitForElement(nextStepDropDown);
  I.click(nextStepDropDown);
  I.see(eventDisplayName.UPDATE_LANG);
  I.see(eventDisplayName.ISSUE);
  I.see(eventDisplayName.REFUND);
  I.see(eventDisplayName.TRANSFER_BETWEEN_RDC);
  I.see(eventDisplayName.TRANSFER_CTSC_TO_RDC);
  I.issueFromSubmittedPageFormAndSubmit();
  I.issueCheckYourAnswersPageFormAndSubmit();
  I.selectAndSubmitEvent(eventDisplayName.ISSUE_AOS_TO_RESP);
  I.click(signOut);
}).retry(2);

