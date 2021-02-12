const { paymentType, yesorno } = require('../common/constants');
const testconfig = require('./config');

let caseNumber;

Feature('Solicitor create case - with fee account');

//Skipping fee payment as PBA number id deleted for this user. Once PBA is set again the test can be uncommented
xScenario('Solicitor create case and make payment', async (I) => {
  await I.amOnHomePage();
  await I.login(testconfig.TestEnvProfUser, testconfig.TestEnvProfPassword);
  await I.clickCreateCase();
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
  await I.statementOfTruthAndReconciliationPageFormAndSubmit(yesorno.No);
  await I.casePaymentWithFeeAccountAndSubmissionPageFormAndSubmit();
  await I.caseOrderSummaryPageFormAndSubmit(paymentType.FEE_ACCOUNT);
  await I.caseApplicationCompletePageFormAndSubmit();
  await I.caseCheckYourAnswersPageFormAndSubmit();
  await I.solAwaitingPaymentConfPageFormAndSubmit();
}).retry(testconfig.TestRetryScenarios);