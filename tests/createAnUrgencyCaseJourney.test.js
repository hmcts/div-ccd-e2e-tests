const {paymentType} = require('../common/constants');
const config = require('./config');

let caseNumber;
let caseNumberWithHyphen='1611-9269-9777-6419';


Feature('create an urgent case journey');

Scenario('Solicitor create an urgent case', async (I) => {
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
  caseNumberWithHyphen = await I.solicitorCaseCreatedAndSubmit();
  caseNumberWithHyphen = caseNumberWithHyphen.replace('#', '');
  caseNumber = caseNumberWithHyphen.replace(/\D/gi, '');
  console.log(caseNumber);
  console.log('..................... '+caseNumberWithHyphen+' .............');
  await I.statementOfTruthAndReconciliationPageFormAndSubmit('yes');
  await I.casePaymentWithHWFAndSubmissionPageFormAndSubmit();
  await I.caseOrderSummaryPageFormAndSubmit(paymentType.HWF);
  await I.caseApplicationCompletePageFormAndSubmit();
  await I.caseCheckYourAnswersPageFormAndSubmit();
  await I.solAwaitingPaymentConfPageFormAndSubmit();
}).retry(config.TestRetryScenarios);

xScenario('Solicitor able to filter and search urgent case', async (I) => {
  await I.amOnHomePage();
  await I.login(config.TestEnvProfUser, config.TestEnvProfPassword);
  await I.wait(20);
  await I.clickCreateList();
  await I.ShouldBeAbleToFilterAnUrgentCase('yes', caseNumberWithHyphen);

}).retry(config.TestRetryScenarios);

xScenario('Caseworker able to filter and search urgent case', async (I) => {
  await I.amOnHomePage();
  await I.login(config.TestEnvCWUser, config.TestEnvCWPassword);
  await I.wait(20);
  await I.clickCreateList();
  await I.ShouldBeAbleToFilterAnUrgentCase('yes', caseNumberWithHyphen);

}).retry(config.TestRetryScenarios);
