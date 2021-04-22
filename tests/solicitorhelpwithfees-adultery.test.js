const { paymentType, yesorno } = require('../common/constants');
const testConfig = require('./config');
const {signOut, serviceApplicationType} = require('../common/constants');

const { reasonsForDivorce } = require('../common/constants');

let caseNumber;

Feature('Adultery');

Scenario('Solicitor create case and make payment', async (I) => {
  await I.amOnHomePage();
  await I.login(testConfig.TestEnvProfUser, testConfig.TestEnvProfPassword);
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

  // bailiff
  await I.wait(5);
  await I.amOnHomePage();
  await I.wait(1);
  await I.login(testConfig.TestEnvCWUser, testConfig.TestEnvCWPassword);
  await I.wait(5);
  await I.amOnPage('cases/case-details/' + caseNumber);
  await I.wait(1);

  await I.awaitingPetitionerFormAndSubmit();
  await I.serviceApplicationReceivedPageFormAndSubmit(serviceApplicationType.BAILIFF_APPLICATION);
  await I.confirmServicePaymentPageFormAndSubmit();
  await I.issueBailiffPackPageFormAndSubmit();
  await I.click(signOut);
}).tag('@crossbrowser')
  .retry(testConfig.TestRetryScenarios);
