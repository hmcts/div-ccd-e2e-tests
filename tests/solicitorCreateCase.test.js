/// <reference path="../steps.d.ts" />

const { getSolicitorLoginDetails  } = require('../helpers/utils');


const solicitor = getSolicitorLoginDetails();

Feature('Solicitor create case');

Scenario('Solicitor create case and make payment', async (I) => {
  console.log('amOnHomePage...1')
  I.amOnHomePage();
  console.log('amOnHomePage...2')
  I.login(solicitor.username, solicitor.password);
  console.log('login...1', solicitor.username, '...', 'solicitor.password')
  I.shouldBeOnCaseListPage();
  console.log('shouldBeOnCaseListPage...')
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
  const caseNumber = await I.solicitorCaseCreatedAndSubmit();
  console.log(caseNumber);
  I.statementOfTruthAndReconciliationPageFormAndSubmit();
  I.casePaymentAndSubmissionPageFormAndSubmit();
  I.caseOrderSummaryPageFormAndSubmit();
  I.caseApplicationCompletePageFormAndSubmit();
  I.caseCheckYourAnswersPageFormAndSubmit();
  I.solAwaitingPaymentConfPageFormAndSubmit();
});
