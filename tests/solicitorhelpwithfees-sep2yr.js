const { eventDisplayName, signOut, paymentType, yesorno } = require('../common/constants');
const testconfig = require('./config');
const { reasonsForDivorce } = require('../common/constants');
const nextStepDropDown = 'select[id="next-step"]';

let caseNumber;

Feature('Sep-2-Yrs');

Scenario('Solicitor create case and make payment', async ({I}) => {
  await I.amOnHomePage();
  await I.login(testconfig.TestEnvProfUser, testconfig.TestEnvProfPassword);
  await I.clickCreateCase();
  await I.wait(1);
  await I.fillCreateCaseFormAndSubmit();
  await I.fillAboutSolicitorFormAndSubmit();
  await I.fillAboutThePetitionerFormAndSubmit();
  await I.fillAboutTheRespondentFormAndSubmit();
  await I.fillAboutRespSolicitorFormAndSubmit();
  await I.completeMarriageCertificateDetailsPageAndSubmit();
  await I.selectJurisdictionQuestionPageAndSubmit();
  await I.selectReasonForTheDivorceQuestionPageAndSubmit(reasonsForDivorce.SEPTWOYRS);
  await I.fillSeparationDetailsFormAndSubmit();
  await I.fillLiveApartFormAndSubmit(reasonsForDivorce.SEPFIVEYRS);
  await I.otherLegalProceedings();
  await I.financialOrdersSelectButton();
  await I.claimForCostsSelectButton();
  await I.uploadTheMarriageCertificateOptional();
  await I.languagePreferenceSelection();
  await I.solicitorCreateCheckYourAnswerAndSubmit();
  caseNumber = await I.solicitorCaseCreatedAndSubmit();
  caseNumber = caseNumber.replace(/\D/gi, '');
  console.log('Sep 2 yr case number is ...', caseNumber);
  await I.statementOfTruthAndReconciliationPageFormAndSubmit(yesorno.No);
  await I.casePaymentWithHWFAndSubmissionPageFormAndSubmit();
  await I.caseOrderSummaryPageFormAndSubmit(paymentType.HWF);
  await I.caseApplicationCompletePageFormAndSubmit();
  await I.caseCheckYourAnswersPageFormAndSubmit();

  // Solicitor should not see issue, refund events
  await I.wait(5);
  await I.amOnPage('cases/case-details/' + caseNumber);
  await I.wait(5);
  await I.waitForElement(nextStepDropDown);
  await I.click(nextStepDropDown);
  await I.see(eventDisplayName.UPDATE_LANG);
  await I.dontSee(eventDisplayName.ISSUE);
  await I.dontSee(eventDisplayName.REFUND);
  await I.dontSee(eventDisplayName.TRANSFER_BETWEEN_RDC);
  await I.dontSee(eventDisplayName.TRANSFER_CTSC_TO_RDC);
  await I.click(signOut);
}).retry(testconfig.TestRetryScenarios);
