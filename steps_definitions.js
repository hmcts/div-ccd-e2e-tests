
'use strict';
// in this file you can append custom step methods to 'I' object

const LoginPage = require('./pages/LoginPage');
const CaseListPage = require('./pages/CaseListPage');
const CaseDetailsPage = require('./pages/CaseDetailsPage');
const CreateCasePage = require('./pages/CreateCasePage');
const AboutSolicitorPage = require('./pages/AboutSolicitorPage');
const AboutThePetitionerPage = require('./pages/AboutThePetitionerPage');
const AboutTheRespondentPage = require('./pages/AboutTheRespondentPage');
const MarriageCertificateDetailsPage = require('./pages/MarriageCertificateDetailsPage');
const JurisdictionPage = require('./pages/JurisdictionPage');
const ReasonForTheDivorcePage = require('./pages/ReasonForTheDivorcePage');
const StatementOfCaseAdulteryPage = require('./pages/StatementOfCaseAdulteryPage');
const StatementOfCaseAdulterySecPage = require('./pages/StatementOfCaseAdulterySecPage');
const OtherLegalProceedingsPage = require('./pages/OtherLegalProceedingsPage');
const FinancialOrdersPage = require('./pages/FinancialOrdersPage');
const ClaimForCostsPage = require('./pages/ClaimForCostsPage');
const UploadMarriageCertificatePage = require('./pages/UploadMarriageCertificatePage');
const SolCreateCheckYourAnswersPage = require('./pages/SolCreateCheckYourAnswersPage');
const SolCaseCreatedPage = require('./pages/SolCaseCreatedPage');
const StatementOfTruthAndRecPage = require('./pages/StatementOfTruthAndRecPage');
const PaymentCaseSubmissionPage = require('./pages/PaymentCaseSubmissionPage');
const CaseSubmissionOrderSummaryPage = require('./pages/CaseSubmissionOrderSummaryPage');
const CaseSubmissionAppCompletePage = require('./pages/CaseSubmissionAppCompletePage');
const CaseSubmissionCheckYourAnswersPage = require('./pages/CaseSubmissionCheckYourAnswersPage');
const SolAwaitingPaymentConfirmationPage = require('./pages/SolAwaitingPaymentConfirmationPage');
const CcdCaseCreatedLandingPage = require('./pages/CcdCaseCreatedLandingPage');
const IssuePage = require('./pages/IssuePage');
const IssueCheckYourAnswersPage = require('./pages/IssueCheckYourAnswersPage');
const CcdCaseCreatedPetitionIssuedLandingPage = require('./pages/CcdCaseCreatedPetitionIssuedLandingPage');
const AosPackIssueTestPage = require('./pages/AosPackIssueTestPage');
const AosPackIssueTestCheckYourAnswersPage = require('./pages/AosPackIssueTestCheckYourAnswersPage');
const AosPackIssueTestLandingPage = require('./pages/AosPackIssueTestLandingPage');
const AosAwaitingTestPage = require('./pages/AosAwaitingTestPage');

module.exports = function () {
  return actor({

    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.
    amOnHomePage: function () {
      this.amOnPage('');
    },

    login: function (email, password) {
      LoginPage.submitLogin(email, password);
    },

    selectACaseFromList: function () {
      CaseListPage.selectCase();
    },

    shouldBeOnCaseDetailsPage: function () {
      CaseDetailsPage.shouldDisplayTabs();
    },

    clickTab: function (list) {
      CaseDetailsPage.clickTab(list);
    },

    shouldBeOnCaseListPage: function () {
      CaseListPage.assertOnPage();
    },

    clickCreateCase: function() {
      this.click('Create Case');
    },
  
    clickCreateList: function() {
      this.click('Case List');
    },

    fillCreateCaseFormAndSubmit() {
      CreateCasePage.fillFormAndSubmit();
    },

    fillAboutSolicitorFormAndSubmit() {
      AboutSolicitorPage.fillFormAndSubmit();
    },

    fillAboutThePetitionerFormAndSubmit() {
      AboutThePetitionerPage.fillFormAndSubmit();
    },

    fillAboutTheRespondentFormAndSubmit() {
      AboutTheRespondentPage.fillFormAndSubmit();
    },

    completeMarriageCertificateDetailsPageAndSubmit: function () {
      MarriageCertificateDetailsPage.fillFormAndSubmit();
    },

    selectJurisdictionQuestionPageAndSubmit: function () {
      JurisdictionPage.selectLegalActionsAndSubmit();
    },

    selectReasonForTheDivorceQuestionPageAndSubmit: function () {
      ReasonForTheDivorcePage.fillFormAndSubmit();
    },

    fillAdulteryDetailsFormAndSubmit() {
      StatementOfCaseAdulteryPage.fillFormAndSubmit();
    },

    fillAdulteryDetailsSecondPageFormAndSubmit() {
      StatementOfCaseAdulterySecPage.fillFormAndSubmit();
    },

    otherLegalProceedings: function() {
      OtherLegalProceedingsPage.fillFormAndSubmit();
    },

    financialOrdersSelectButton: function() {
      FinancialOrdersPage.fillFormAndSubmit();
    },

    claimForCostsSelectButton: function() {
      ClaimForCostsPage.fillFormAndSubmit();
    },

    uploadTheMarriageCertificateOptional: function() {
      UploadMarriageCertificatePage.fillFormAndSubmit();
    },

    solicitorCreateCheckYourAnswerAndSubmit: function() {
      SolCreateCheckYourAnswersPage.fillFormAndSubmit();
    },

    solicitorCaseCreatedAndSubmit: function() {
      return SolCaseCreatedPage.fillFormAndSubmit();
    },

    statementOfTruthAndReconciliationPageFormAndSubmit: function() {
      StatementOfTruthAndRecPage.fillFormAndSubmit();
    },

    casePaymentAndSubmissionPageFormAndSubmit: function() {
      PaymentCaseSubmissionPage.fillFormAndSubmit();
    },

    caseOrderSummaryPageFormAndSubmit: function() {
      CaseSubmissionOrderSummaryPage.fillFormAndSubmit();
    },

    caseApplicationCompletePageFormAndSubmit: function() {
      CaseSubmissionAppCompletePage.fillFormAndSubmit();
    },

    caseCheckYourAnswersPageFormAndSubmit: function() {
      CaseSubmissionCheckYourAnswersPage.fillFormAndSubmit();
    },

    solAwaitingPaymentConfPageFormAndSubmit: function() {
      SolAwaitingPaymentConfirmationPage.checkPageAndSignOut();
    },

    ccdCaseCreatedFromJsonLandingPageFormAndSubmit: function() {
      CcdCaseCreatedLandingPage.fillFormAndSubmit();
    },

    issueFromSubmittedPageFormAndSubmit: function() {
      IssuePage.fillFormAndSubmit();
    },

    issueCheckYourAnswersPageFormAndSubmit: function() {
      IssueCheckYourAnswersPage.fillFormAndSubmit();
    },

    petitionIssuedPageAndAosPackSelectPageFormAndSubmit: function() {
      CcdCaseCreatedPetitionIssuedLandingPage.fillFormAndSubmit();
    },

    aosPackIssueTestPageFormAndSubmit: function() {
      AosPackIssueTestPage.fillFormAndSubmit();
    },

    aosPackIssueTestCheckYourAnswersPageFormAndSubmit: function() {
      AosPackIssueTestCheckYourAnswersPage.fillFormAndSubmit();
    },

    aosPackIssueTestLandingPageFormAndSubmit: function() {
      AosPackIssueTestLandingPage.fillFormAndSubmit();
    },

    aosAwaitingTestPageFormAndSubmit: function() {
      AosAwaitingTestPage.fillFormAndSubmit();
    }
  });
}
