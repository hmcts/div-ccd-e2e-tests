const { eventDisplayName, signOut, paymentType, yesorno } = require('../common/constants');
const testconfig = require('./config');

const { reasonsForDivorce } = require('../common/constants');

const nextStepDropDown = 'select[id="next-step"]';

let caseNumber;

Feature('Behaviour');

Scenario.skip('Solicitor create case and make payment', async (I) => {
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
  await I.selectReasonForTheDivorceQuestionPageAndSubmit(reasonsForDivorce.BEHAVIOUR);
  await I.fillBehaviourDetailsFormAndSubmit(); 
  await I.otherLegalProceedings();
  await I.financialOrdersSelectButton();
  await I.claimForCostsSelectButton(),
  await I.uploadTheMarriageCertificateOptional();
  await I.languagePreferenceSelection();
  await I.solicitorCreateCheckYourAnswerAndSubmit();
  caseNumber = await I.solicitorCaseCreatedAndSubmit();
  caseNumber = caseNumber.replace(/\D/gi, '');
  console.log('Behaviour case number is...', caseNumber);
  await I.statementOfTruthAndReconciliationPageFormAndSubmit(yesorno.No);
  await I.casePaymentWithHWFAndSubmissionPageFormAndSubmit();
  await I.caseOrderSummaryPageFormAndSubmit(paymentType.HWF);
  await I.caseApplicationCompletePageFormAndSubmit();
  await I.caseCheckYourAnswersPageFormAndSubmit();
  await I.solAwaitingPaymentConfPageFormAndSubmit();
}).retry(testconfig.TestRetryScenarios);

xScenario('Solicitor should not see issue, refund events', async (I) => {
  await I.amOnHomePage();
  await I.login(testconfig.TestEnvProfUser, testconfig.TestEnvProfPassword);
  await I.wait(1);
  await I.amOnPage('/case/DIVORCE/DIVORCE/' + caseNumber);
  await I.waitForElement(nextStepDropDown);
  await I.click(nextStepDropDown);
  await I.see(eventDisplayName.UPDATE_LANG);
  await I.dontSee(eventDisplayName.ISSUE);
  await I.dontSee(eventDisplayName.REFUND);
  await I.dontSee(eventDisplayName.TRANSFER_BETWEEN_RDC);
  await I.dontSee(eventDisplayName.TRANSFER_CTSC_TO_RDC);
  await I.click(signOut);
}).retry(testconfig.TestRetryScenarios);

Scenario.skip('Caseworker should be able to see issue, refund events and issue aos pack', async (I) => {
  await I.amOnHomePage();
  await I.login(testconfig.TestEnvCWUser, testconfig.TestEnvCWPassword);
  await I.wait(0.5);
  await I.amOnPage('/case/DIVORCE/DIVORCE/' + caseNumber);
  await I.selectAndSubmitEvent(eventDisplayName.HWF_APP_ACCEPTED);
  await I.waitForElement(nextStepDropDown);
  await I.click(nextStepDropDown);
  await I.wait(0.5);
  await I.see(eventDisplayName.UPDATE_LANG);
  await I.see(eventDisplayName.ISSUE);
  await I.see(eventDisplayName.REFUND);
  await I.see(eventDisplayName.TRANSFER_BETWEEN_RDC);
  await I.see(eventDisplayName.TRANSFER_CTSC_TO_RDC);
  await I.issueFromSubmittedPageFormAndSubmit();
  await I.issueCheckYourAnswersPageFormAndSubmit();
  await I.selectAndSubmitEvent(eventDisplayName.ISSUE_AOS_TO_RESP);
  await I.selectEvent(eventDisplayName.AOS_STARTED);
  await I.aosStartedPageFormAndSubmit();
  await I.aosStartedCheckYourAnswersPageFormAndSubmit();
  await I.aosReceivedUndefendedMoveToDNFormSubmit();
  await I.selectAndSubmitEvent(eventDisplayName.DN_RECEIVED);
  await I.selectAndSubmitEvent(eventDisplayName.REFER_TO_LEGAL_ADVSIOR);
  await I.selectAndSubmitEvent(eventDisplayName.ENTITLEMENT_GRANTED);
  await I.selectAndSubmitEvent(eventDisplayName.DN_PRONOUNCED);
  await I.selectAndSubmitEvent(eventDisplayName.DA_GRANTED);
}).retry(testconfig.TestRetryScenarios);
