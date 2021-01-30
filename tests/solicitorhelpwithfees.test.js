const { eventDisplayName, signOut, paymentType } = require('../common/constants');
const config = require('./config')

const nextStepDropDown = 'select[id="next-step"]'

let caseNumber;

Feature('Solicitor create case - help with fees');

Scenario('Solicitor create case and make payment', async (I) => {
  await I.amOnHomePage();
  await I.login(config.TestEnvProfUser, config.TestEnvProfPassword);
  await I.clickCreateCase();
  await I.wait(1);
  await I.fillCreateCaseFormAndSubmit();
  await I.fillAboutSolicitorFormAndSubmit();
  await I.fillAboutThePetitionerFormAndSubmit();
  await I.fillAboutTheRespondentFormAndSubmit();
  await I.completeMarriageCertificateDetailsPageAndSubmit();
  await I.selectJurisdictionQuestionPageAndSubmit();
  await I.selectReasonForTheDivorceQuestionPageAndSubmit();
  await I.fillAdulteryDetailsFormAndSubmit();
  await I.fillAdulteryDetailsSecondPageFormAndSubmit(); 
  await I.otherLegalProceedings();
  await I.financialOrdersSelectButton();
  await I.claimForCostsSelectButton(),
  await I.uploadTheMarriageCertificateOptional();
  await I.languagePreferenceSelection();
  await I.solicitorCreateCheckYourAnswerAndSubmit();
  caseNumber = await I.solicitorCaseCreatedAndSubmit();
  caseNumber = caseNumber.replace(/\D/gi, '');
  console.log(caseNumber);
  await I.statementOfTruthAndReconciliationPageFormAndSubmit('no');
  await I.casePaymentWithHWFAndSubmissionPageFormAndSubmit();
  await I.caseOrderSummaryPageFormAndSubmit(paymentType.HWF);
  await I.caseApplicationCompletePageFormAndSubmit();
  await I.caseCheckYourAnswersPageFormAndSubmit();
  await I.solAwaitingPaymentConfPageFormAndSubmit();
});

xScenario('Solicitor should not see issue, refund events', async (I) => {
  await I.amOnHomePage();
  await I.login(config.TestEnvProfUser, config.TestEnvProfPassword);
  await I.wait(20);
  await I.amOnPage('/case/DIVORCE/DIVORCE/' + caseNumber);
  await I.waitForElement(nextStepDropDown);
  await I.click(nextStepDropDown);
  await I.see(eventDisplayName.UPDATE_LANG);
  await I.dontSee(eventDisplayName.ISSUE);
  await I.dontSee(eventDisplayName.REFUND);
  await I.dontSee(eventDisplayName.TRANSFER_BETWEEN_RDC);
  await I.dontSee(eventDisplayName.TRANSFER_CTSC_TO_RDC);
  await I.click(signOut);
});

xScenario('Caseworker should be able to see issue, refund events and issue aos pack', async (I) => {
  await I.amOnHomePage();
  await I.login(config.TestEnvCWUser, config.TestEnvCWPassword);
  await I.wait(20);
  await I.amOnPage('/case/DIVORCE/DIVORCE/' + caseNumber);
  await I.selectAndSubmitEvent(eventDisplayName.HWF_APP_ACCEPTED);
  await I.waitForElement(nextStepDropDown);
  await I.click(nextStepDropDown);
  await I.see(eventDisplayName.UPDATE_LANG);
  await I.see(eventDisplayName.ISSUE);
  await I.see(eventDisplayName.REFUND);
  await I.see(eventDisplayName.TRANSFER_BETWEEN_RDC);
  await I.see(eventDisplayName.TRANSFER_CTSC_TO_RDC);
  await I.issueFromSubmittedPageFormAndSubmit();
  await I.issueCheckYourAnswersPageFormAndSubmit();
  await I.selectAndSubmitEvent(eventDisplayName.ISSUE_AOS_TO_RESP);
  await I.click(signOut);
});

