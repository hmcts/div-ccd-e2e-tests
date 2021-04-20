const { eventDisplayName, signOut, paymentType, yesorno } = require('../common/constants');
const testconfig = require('./config');

const { reasonsForDivorce } = require('../common/constants');

const nextStepDropDown = 'select[id="next-step"]';

let caseNumber;

Feature('Adultery');

Scenario('Solicitor create case and make payment', async (I) => {
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
  await I.selectReasonForTheDivorceQuestionPageAndSubmit(reasonsForDivorce.ADULTERY);
  await I.fillAdulteryDetailsFormAndSubmit();
  await I.fillAdulteryDetailsSecondPageFormAndSubmit();
  await I.otherLegalProceedings();
  await I.financialOrdersSelectButton();
  await I.claimForCostsSelectButton();
  await I.uploadTheMarriageCertificateOptional();
  await I.languagePreferenceSelection();
  await I.solicitorCreateCheckYourAnswerAndSubmit();
  caseNumber = await I.solicitorCaseCreatedAndSubmit();
  caseNumber = caseNumber.replace(/\D/gi, '');
  console.log('Adultery casenumber is ..', caseNumber);
  await I.statementOfTruthAndReconciliationPageFormAndSubmit(yesorno.No);
  await I.casePaymentWithHWFAndSubmissionPageFormAndSubmit();
  await I.caseOrderSummaryPageFormAndSubmit(paymentType.HWF);
  await I.caseApplicationCompletePageFormAndSubmit();
  await I.caseCheckYourAnswersPageFormAndSubmit();
  await I.solAwaitingPaymentConfPageFormAndSubmit();
}).tag('@crossbrowser')
  .retry(testconfig.TestRetryScenarios);
