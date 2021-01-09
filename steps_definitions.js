
'use strict';
// in this file you can append custom step methods to 'I' object

const LoginPage = require('./pages/LoginPage');
const CaseListPage = require('./pages/CaseListPage');
const CaseDetailsPage = require('./pages/CaseDetailsPage');
const CreateCasePage = require('./pages/CreateCasePage');
const AboutSolicitorPage = require('./pages/AboutSolicitorPage');
const AboutThePetitionerPage = require('./pages/AboutThePetitionerPage');
const AboutTheRespondentPage = require('./pages/AboutTheRespondentPage');
const JurisdictionPage = require('./pages/JurisdictionPage');
const ReasonForTheDivorcePage = require('./pages/ReasonForTheDivorcePage');
const StatementOfCaseAdulteryPage = require('./pages/StatementOfCaseAdulteryPage');
const StatementOfCaseAdulterySecPage = require('./pages/StatementOfCaseAdulterySecPage');
const OtherLegalProceedingsPage = require('./pages/OtherLegalProceedingsPage');
const FinancialOrdersPage = require('./pages/FinancialOrdersPage');
const ClaimForCostsPage = require('./pages/ClaimForCostsPage');
const UploadMarriageCertificatePage = require('./pages/UploadMarriageCertificatePage');
const SolCreateLanguagePrefPage = require('./pages/SolCreateLanguagePrefPage');
const SolCreateCheckYourAnswersPage = require('./pages/SolCreateCheckYourAnswersPage');
const SolCaseCreatedPage = require('./pages/SolCaseCreatedPage');
const StatementOfTruthAndRecPage = require('./pages/StatementOfTruthAndRecPage');
const FeeAccountPaymentCaseSubmissionPage = require('./pages/FeeAccountPaymentCaseSubmissionPage');
const HWFPaymentCaseSubmissionPage = require('./pages/HWFPaymentCaseSubmissionPage');
const CaseSubmissionOrderSummaryPage = require('./pages/CaseSubmissionOrderSummaryPage');
const CaseSubmissionAppCompletePage = require('./pages/CaseSubmissionAppCompletePage');
const CaseSubmissionCheckYourAnswersPage = require('./pages/CaseSubmissionCheckYourAnswersPage');
const SolAwaitingPaymentConfirmationPage = require('./pages/SolAwaitingPaymentConfirmationPage');
const CcdCaseCreatedLandingPage = require('./pages/CcdCaseCreatedLandingPage');
const IssuePage = require('./pages/IssuePage');
const IssueCheckYourAnswersPage = require('./pages/IssueCheckYourAnswersPage');
const CcdCaseCreatedPetitionIssuedLandingPage = require('./pages/CcdCaseCreatedPetitionIssuedLandingPage');
// const AosPackIssueTestPage = require('./pages/AosPackIssueTestPage');
const IssueAosPackToRespondentCheckYourAnswersPage = require('./pages/IssueAosPackToRespondentCheckYourAnswersPage');
const IssueAosPackToRespondentLandingPage = require('./pages/IssueAosPackToRespondentLandingPage');
const AosStartedPage = require('./pages/AosStartedPage');
const AosStartedCheckYourAnswersPage = require('./pages/AosStartedCheckYourAnswersPage');
const AosReceivedUndefendedMoveToDN = require('./pages/AosReceivedUndefendedMoveToDN');
const SelectEventAndSubmit = require('./pages/SelectEventAndSubmit');
const MarriageCertificateDetailsPage = require('./pages/MarriageCertificateDetailsPage');
const TransferCaseToADifferentRDCsPage = require('./pages/TransferCaseToADifferentRDCsPage');
const TransferBetweenRDCsPage = require('./pages/TransferBetweenRDCsPage');
const TransferToRDCLandingPage = require('./pages/TransferToRDCLandingPage');

const validatePetitionTabData = require ('./tabs/validatePetitionTabData');
const validateConfidentialPetitionerTab = require ('./tabs/validateConfidentialPetitionerTab');
const validateAOSTabData = require ('./tabs/validateAOSTabData');
const validateCoRespTabData = require ('./tabs/validateCoRespTabData');
const validateDecreeNisiTabData = require ('./tabs/validateDecreeNisiTabData');
const validateOutcomeOfDNTabData = require ('./tabs/validateOutcomeOfDNTabData');
const validateDecreeAbsoluteTabData = require ('./tabs/validateDecreeAbsoluteTabData');
const validateMarriageCertTabData = require ('./tabs/validateMarriageCertTabData');
const validateDocumentTabData = require ('./tabs/validateDocumentTabData');
const validatePaymentTabData = require ('./tabs/validatePaymentTabData');
const validateLanguageTabData = require ('./tabs/validateLanguageTabData');
const validateLinkedCaseTabData = require ('./tabs/validateLinkedCaseTabData');

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

    shouldBeOnCaseListPage: function () {
      CaseListPage.resetFilter();
    },

    ShouldBeAbleToFilterAnUrgentCase: function (urgent, caseNum) {
      CaseListPage.urgentCaseFilter(urgent, caseNum);
    },

    clickCreateCase: function() {
      this.click('Create case');
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

    languagePreferenceSelection: function() {
      SolCreateLanguagePrefPage.fillFormAndSubmit();
    },

    solicitorCreateCheckYourAnswerAndSubmit: function() {
      SolCreateCheckYourAnswersPage.fillFormAndSubmit();
    },

    solicitorCaseCreatedAndSubmit: function() {
      return SolCaseCreatedPage.fillFormAndSubmit();
    },

    statementOfTruthAndReconciliationPageFormAndSubmit: function (urgent) {
      StatementOfTruthAndRecPage.fillFormAndSubmit(urgent);
    },

    casePaymentWithFeeAccountAndSubmissionPageFormAndSubmit: function() {
      return FeeAccountPaymentCaseSubmissionPage.fillFormAndSubmit();
    },

    casePaymentWithHWFAndSubmissionPageFormAndSubmit: function() {
      return HWFPaymentCaseSubmissionPage.fillFormAndSubmit();
    },

    caseOrderSummaryPageFormAndSubmit: function(paymentType) {
      CaseSubmissionOrderSummaryPage.fillFormAndSubmit(paymentType);
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

    // aosPackIssueTestPageFormAndSubmit: function() {
    //   AosPackIssueTestPage.fillFormAndSubmit();
    // },

    aosPackIssueTestCheckYourAnswersPageFormAndSubmit: function() {
      IssueAosPackToRespondentCheckYourAnswersPage.fillFormAndSubmit();
    },

    aosPackToRespondentLandingPageFormAndSubmit: function() {
      IssueAosPackToRespondentLandingPage.fillFormAndSubmit();
    },

    aosReceivedUndefendedMoveToDNFormSubmit: function() {
      AosReceivedUndefendedMoveToDN.fillFormAndSubmit();
    },
    
    selectAndSubmitEvent: function(eventName) {
      SelectEventAndSubmit.fillFormAndSubmit(eventName);
    },

    aosStartedPageFormAndSubmit: function() {
      AosStartedPage.fillFormAndSubmit();
    },

    aosStartedCheckYourAnswersPageFormAndSubmit: function() {
      AosStartedCheckYourAnswersPage.fillFormAndSubmit();
    },

    changeToCourtsAndTribunalsServiceCentrePageFormAndSubmit: function() {
      TransferCaseToADifferentRDCsPage.fillFormAndSubmit();
    },

    enterRDCChangeSummaryAndDescriptionPageFormAndSubmit: function() {
      TransferBetweenRDCsPage.fillFormAndSubmit();
    },

    caseCreatedCTSCServiceCentrePageFormAndSubmit: function() {
      TransferToRDCLandingPage.fillFormAndSubmit();
    },

    validatePetitionTabData: function(reason,verifyContent) {
      return validatePetitionTabData(reason,verifyContent);
    },

    validateCoRespTabData: function(verifyContent) {
      return validateCoRespTabData(verifyContent);
    },

    validateDocumentTabData: function(reason, caseId) {
      return validateDocumentTabData(reason, caseId);
    },

    validateMarriageCertTabData: function(verifyContent) {
      return validateMarriageCertTabData(verifyContent);
    },

    validateAOSTabData: function(reason,verifyContent){
      return validateAOSTabData(reason,verifyContent);
    },

    validateDecreeNisiTabData: function(reason,verifyContent) {
      return validateDecreeNisiTabData(reason,verifyContent);
    },
    
    validateConfidentialPetitionerTab: function(verifyContent) {
      return validateConfidentialPetitionerTab(verifyContent);
    },
    
    validateOutcomeOfDNTabData: function(verifyContent) {
      return validateOutcomeOfDNTabData(verifyContent);
    },

    validateDecreeAbsoluteTabData: function(verifyContent) {
      return validateDecreeAbsoluteTabData(verifyContent);
    },

    validatePaymentTabData: function(verifyContent) {
      return validatePaymentTabData(verifyContent);
    },

    validateLanguageTabData: function(reason, verifyContent) {
      return validateLanguageTabData(reason, verifyContent);
    },

    validateLinkedCaseTabData: function(verifyContent) {
      return validateLinkedCaseTabData(verifyContent);
    }
  });
};
