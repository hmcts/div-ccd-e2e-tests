/// <reference path="../steps.d.ts" />

const {paymentType} = require('../common/constants');
const {getSolicitorLoginDetails, getCaseWorkerLoginDetails} = require('../helpers/utils');


const solicitor = getSolicitorLoginDetails();
const caseWorker = getCaseWorkerLoginDetails();


let caseNumber;
let caseNumberWithHyphen;


Feature('create an urgent case journey');

Scenario('Solicitor create an urgent case', async (I) => {
  I.amOnHomePage();
  I.login(solicitor.username, solicitor.password);
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
  caseNumber = await I.solicitorCaseCreatedAndSubmit();
  caseNumber = caseNumber.replace(/\D/gi, '');
  caseNumberWithHyphen = await I.solicitorCaseCreatedAndSubmit();
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
  I.login(solicitor.username, solicitor.password);
  I.wait(20);
  I.clickCreateList();
  I.ShouldBeAbleToFilterAnUrgentCase('yes', caseNumberWithHyphen);

}).retry(2);

Scenario('Caseworker able to filter and search urgent case', async (I) => {
  I.amOnHomePage();
  I.login(caseWorker.username, caseWorker.password);
  I.wait(20);
  I.clickCreateList();
  I.ShouldBeAbleToFilterAnUrgentCase('yes', caseNumberWithHyphen);

}).retry(2);
