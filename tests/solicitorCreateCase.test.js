/// <reference path="../steps.d.ts" />

const { getSolicitorLoginDetails  } = require('../helpers/utils');


const solicitor = getSolicitorLoginDetails();

let caseNumber;

Feature('Solicitor create case');

Scenario('Solicitor create case and make payment', async (I) => {
  I.amOnHomePage();
  I.login(solicitor.username, solicitor.password);
  I.shouldBeOnCaseListPage();
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
  console.log(caseNumber);
  I.statementOfTruthAndReconciliationPageFormAndSubmit();
  await I.casePaymentAndSubmissionPageFormAndSubmit();
  I.caseOrderSummaryPageFormAndSubmit();
  I.caseApplicationCompletePageFormAndSubmit();
  I.caseCheckYourAnswersPageFormAndSubmit();
  I.solAwaitingPaymentConfPageFormAndSubmit();
});

Scenario('Solicitor should not see payment made events', async (I) => {
  I.amOnHomePage();
  I.login(caseWorker.username, caseWorker.password);
  I.wait(20);
  I.amOnPage('/case/DIVORCE/DIVORCE/' + caseNumber);
  I.waitForElement('select[id="next-step"]');
  I.click('select[id="next-step"]');
  I.see('Update Language');
  I.dontSee('Awaiting petitioner');
  I.dontSee('Fee account debited');
  I.dontSee('HWF application accepted');
  I.dontSee('Payment made');
});

