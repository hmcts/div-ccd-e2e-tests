const {paymentType} = require('../common/constants');
const config = require('./config');

let caseNumber;
let caseNumberWithHyphen;


Feature('create an urgent case journey');

Scenario('Solicitor create an urgent case', async (I) => {
  I.amOnHomePage();
  I.login(config.TestEnvProfUser, config.TestEnvProfPassword);
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
  caseNumberWithHyphen = await I.solicitorCaseCreatedAndSubmit();
  caseNumberWithHyphen = caseNumberWithHyphen.replace('#', '');
  caseNumber = caseNumberWithHyphen.replace(/\D/gi, '');
  console.log(caseNumber);
  console.log('..................... '+caseNumberWithHyphen+' .............');
  I.statementOfTruthAndReconciliationPageFormAndSubmit('yes');
  await I.casePaymentWithHWFAndSubmissionPageFormAndSubmit();
  I.caseOrderSummaryPageFormAndSubmit(paymentType.HWF);
  I.caseApplicationCompletePageFormAndSubmit();
  I.caseCheckYourAnswersPageFormAndSubmit();
  I.solAwaitingPaymentConfPageFormAndSubmit();
}).retry(2);

Scenario('Solicitor able to filter and search urgent case', async (I) => {
  I.amOnHomePage();
  I.login(config.TestEnvProfUser, config.TestEnvProfPassword);
  I.wait(20);
  I.clickCreateList();
  I.ShouldBeAbleToFilterAnUrgentCase('yes', caseNumberWithHyphen);

}).retry(2);

Scenario('Caseworker able to filter and search urgent case', async (I) => {
  I.amOnHomePage();
 I.login(config.TestEnvCWUser, config.TestEnvCWPassword);
  I.wait(20);
  I.clickCreateList();
  I.ShouldBeAbleToFilterAnUrgentCase('yes', caseNumberWithHyphen);

}).retry(2);
