const {paymentType, stateDisplayName, yesorno} = require('../common/constants');
const testconfig = require('./config');

let caseNumberWithHyphen;


Feature('create an urgent case journey');

Scenario('Solicitor create an urgent case', async (I) => {
  await I.amOnHomePage();
  await I.login(testconfig.TestEnvProfUser, testconfig.TestEnvProfPassword);
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
  console.log('..................... '+caseNumberWithHyphen+' .............');
  await I.statementOfTruthAndReconciliationPageFormAndSubmit(yesorno.Yes);
  await I.casePaymentWithHWFAndSubmissionPageFormAndSubmit();
  await I.caseOrderSummaryPageFormAndSubmit(paymentType.HWF);
  await I.caseApplicationCompletePageFormAndSubmit();
  await I.caseCheckYourAnswersPageFormAndSubmit();
  await I.solAwaitingPaymentConfPageFormAndSubmit();
}).retry(testconfig.TestRetryScenarios);

xScenario('Solicitor able to filter and search urgent case', async (I) => {
  await I.amOnHomePage();
  await I.login(testconfig.TestEnvProfUser, testconfig.TestEnvProfPassword);
  await I.wait(1);
  await I.clickCreateList();
  await I.ShouldBeAbleToFilterAnUrgentCase(yesorno.Yes, stateDisplayName.SOL_AWAIT_PAYMENT_CONFIRM, caseNumberWithHyphen);
}).retry(testconfig.TestRetryScenarios);

xScenario('Caseworker able to filter and search urgent case', async (I) => {
  await I.amOnHomePage();
  await I.login(testconfig.TestEnvCWUser, testconfig.TestEnvCWPassword);
  await I.wait(1);
  await I.clickCreateList();
  await I.ShouldBeAbleToFilterAnUrgentCase(yesorno.Yes, stateDisplayName.SOL_AWAIT_PAYMENT_CONFIRM, caseNumberWithHyphen);
}).retry(testconfig.TestRetryScenarios);


Scenario('div-BA-2-year-separation-with-consent', async function (I) {
  const caseId = await createCaseInCcd('data/div-BA-2-year-separation-with-consent.json');
  const response = await updateCaseInCcd(caseId, 'hwfApplicationAcceptedfromAwaitingHWFDecision', 'data/ccd-update-data.json');
})