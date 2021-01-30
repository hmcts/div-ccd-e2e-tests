const { paymentType } = require('../common/constants');

let caseNumber;

Feature('Solicitor create case - with fee account');

//Skipping fee payment as PBA number id deleted for this user. Once PBA is set again the test can be uncommented
xScenario('Solicitor create case and make payment', async (I) => {
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
  caseNumber = await I.solicitorCaseCreatedAndSubmit();
  caseNumber = caseNumber.replace(/\D/gi, '');
  console.log(caseNumber);
  I.statementOfTruthAndReconciliationPageFormAndSubmit('no');
  await I.casePaymentWithFeeAccountAndSubmissionPageFormAndSubmit();
  I.caseOrderSummaryPageFormAndSubmit(paymentType.FEE_ACCOUNT);
  I.caseApplicationCompletePageFormAndSubmit();
  I.caseCheckYourAnswersPageFormAndSubmit();
  I.solAwaitingPaymentConfPageFormAndSubmit();
}).retry(2);
