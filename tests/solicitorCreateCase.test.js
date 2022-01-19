const { paymentType, yesorno } = require('../common/constants');
const testconfig = require('./config');
const { reasonsForDivorce } = require('../common/constants');

let caseNumber;

Feature('Solicitor create case - with fee account');

Scenario('Solicitor create case and make payment', async ({I}) => {
  await I.amOnHomePage();
  // I.wait(10);
  //pause();
  // console.log("user" + testconfig.TestEnvProfUser+ testconfig.TestEnvProfPassword);
  await I.login(testconfig.TestEnvProfUser, testconfig.TestEnvProfPassword);
  await I.clickCreateCase();
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
  caseNumber = await I.solicitorCaseCreatedAndSubmit(true);
  caseNumber = caseNumber.replace(/\D/gi, '');
  // console.log(caseNumber);
  await I.statementOfTruthAndReconciliationPageFormAndSubmit(yesorno.No);
  await I.casePaymentWithFeeAccountAndSubmissionPageFormAndSubmit();
  await I.caseOrderSummaryPageFormAndSubmit(paymentType.FEE_ACCOUNT);
  await I.caseApplicationCompletePageFormAndSubmit();
  await I.caseCheckYourAnswersPageFormAndSubmit();
  await I.solAwaitingPaymentConfPageFormAndSubmit();
}).retry(testconfig.TestRetryScenarios);
