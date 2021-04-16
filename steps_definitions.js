
'use strict';
// in this file you can append custom step methods to 'I' object

const LoginPage = require('./pages/LoginPage');
const CaseListPage = require('./pages/CaseListPage');
const CaseDetailsPage = require('./pages/CaseDetailsPage');
const CreateCasePage = require('./pages/CreateCasePage');
const AboutSolicitorPage = require('./pages/AboutSolicitorPage');
const AboutThePetitionerPage = require('./pages/AboutThePetitionerPage');
const AboutTheRespondentPage = require('./pages/AboutTheRespondentPage');
const RespSolicitorRepresented = require('./pages/RespSolicitorRepresented');
const JurisdictionPage = require('./pages/JurisdictionPage');
const ReasonForTheDivorcePage = require('./pages/ReasonForTheDivorcePage');
const StatementOfCaseAdulteryPage = require('./pages/StatementOfCaseAdulteryPage');
const StatementOfCaseBehaviourPage = require('./pages/StatementOfCaseBehaviourPage');
const StatementOfCaseDesertionPage = require('./pages/StatementOfCaseDesertionPage');
const StatementOfCaseSeparationDetail = require('./pages/StatementOfCaseSeparationDetail');
const LivedApartPage = require('./pages/LivedApartPage');
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
const SetTestDataForDA = require('./pages/SetTestDataForDA');
const SelectEventAndSubmit = require('./pages/SelectEventAndSubmit');
const SelectEvent = require('./pages/SelectEvent');
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
      return this.amOnPage('');
    },

    login: function (email, password) {
      return LoginPage.submitLogin(email, password);
    },

    selectACaseFromList: function () {
      return CaseListPage.selectCase();
    },

    shouldBeOnCaseDetailsPage: function () {
      return CaseDetailsPage.shouldDisplayTabs();
    },

    shouldBeOnCaseListPage: function () {
      return CaseListPage.resetFilter();
    },

    ShouldBeAbleToFilterAnUrgentCase: function (urgent, state, caseNum) {
      return CaseListPage.urgentCaseFilter(urgent, state, caseNum);
    },

    clickCreateCase: function() {
      return CreateCasePage.clickCreateCase();
    },

    clickCreateList: function() {
      return CaseListPage.clickCreateList();
    },

    fillCreateCaseFormAndSubmit() {
      return CreateCasePage.fillFormAndSubmit();
    },

    fillAboutSolicitorFormAndSubmit() {
      return AboutSolicitorPage.fillFormAndSubmit();
    },

    fillAboutThePetitionerFormAndSubmit() {
      return AboutThePetitionerPage.fillFormAndSubmit();
    },

    fillAboutTheRespondentFormAndSubmit() {
      return AboutTheRespondentPage.fillFormAndSubmit();
    },

    fillAboutRespSolicitorFormAndSubmit() {
      return RespSolicitorRepresented.fillFormAndSubmit();
    },

    completeMarriageCertificateDetailsPageAndSubmit: function () {
      return MarriageCertificateDetailsPage.fillFormAndSubmit();
    },

    selectJurisdictionQuestionPageAndSubmit: function () {
      return JurisdictionPage.selectLegalActionsAndSubmit();
    },

    selectReasonForTheDivorceQuestionPageAndSubmit: function (reason) {
      return ReasonForTheDivorcePage.fillFormAndSubmit(reason);
    },

    fillAdulteryDetailsFormAndSubmit() {
      return StatementOfCaseAdulteryPage.fillFormAndSubmit();
    },

    fillAdulteryDetailsSecondPageFormAndSubmit() {
      return StatementOfCaseAdulterySecPage.fillFormAndSubmit();
    },

    fillBehaviourDetailsFormAndSubmit() {
      return StatementOfCaseBehaviourPage.fillFormAndSubmit();
    },

    fillDesertionDetailsFormAndSubmit() {
      return StatementOfCaseDesertionPage.fillFormAndSubmit();
    },

    fillSeparationDetailsFormAndSubmit() {
      return StatementOfCaseSeparationDetail.fillFormAndSubmit();
    },
  
    fillLiveApartFormAndSubmit(reason) {
      return LivedApartPage.fillFormAndSubmit(reason);
    },

    otherLegalProceedings: function() {
      return OtherLegalProceedingsPage.fillFormAndSubmit();
    },

    financialOrdersSelectButton: function() {
      return FinancialOrdersPage.fillFormAndSubmit();
    },

    claimForCostsSelectButton: function() {
      return ClaimForCostsPage.fillFormAndSubmit();
    },

    uploadTheMarriageCertificateOptional: function() {
      return UploadMarriageCertificatePage.fillFormAndSubmit();
    },

    languagePreferenceSelection: function() {
      return SolCreateLanguagePrefPage.fillFormAndSubmit();
    },

    solicitorCreateCheckYourAnswerAndSubmit: function() {
      return SolCreateCheckYourAnswersPage.fillFormAndSubmit();
    },

    solicitorCaseCreatedAndSubmit: function() {
      return SolCaseCreatedPage.fillFormAndSubmit();
    },

    statementOfTruthAndReconciliationPageFormAndSubmit: function (urgent) {
      return StatementOfTruthAndRecPage.fillFormAndSubmit(urgent);
    },

    casePaymentWithFeeAccountAndSubmissionPageFormAndSubmit: function() {
      return FeeAccountPaymentCaseSubmissionPage.fillFormAndSubmit();
    },

    casePaymentWithHWFAndSubmissionPageFormAndSubmit: function() {
      return HWFPaymentCaseSubmissionPage.fillFormAndSubmit();
    },

    caseOrderSummaryPageFormAndSubmit: function(paymentType) {
      return CaseSubmissionOrderSummaryPage.fillFormAndSubmit(paymentType);
    },

    caseApplicationCompletePageFormAndSubmit: function() {
      return CaseSubmissionAppCompletePage.fillFormAndSubmit();
    },

    caseCheckYourAnswersPageFormAndSubmit: function() {
      return CaseSubmissionCheckYourAnswersPage.fillFormAndSubmit();
    },

    solAwaitingPaymentConfPageFormAndSubmit: function() {
      return SolAwaitingPaymentConfirmationPage.checkPageAndSignOut();
    },

    ccdCaseCreatedFromJsonLandingPageFormAndSubmit: function() {
      return CcdCaseCreatedLandingPage.fillFormAndSubmit();
    },

    issueFromSubmittedPageFormAndSubmit: function() {
      return IssuePage.fillFormAndSubmit();
    },

    issueCheckYourAnswersPageFormAndSubmit: function() {
      return IssueCheckYourAnswersPage.fillFormAndSubmit();
    },

    petitionIssuedPageAndAosPackSelectPageFormAndSubmit: function() {
      return CcdCaseCreatedPetitionIssuedLandingPage.fillFormAndSubmit();
    },

    // aosPackIssueTestPageFormAndSubmit: function() {
    //   AosPackIssueTestPage.fillFormAndSubmit();
    // },

    aosPackIssueTestCheckYourAnswersPageFormAndSubmit: function() {
      return IssueAosPackToRespondentCheckYourAnswersPage.fillFormAndSubmit();
    },

    aosPackToRespondentLandingPageFormAndSubmit: function() {
      return IssueAosPackToRespondentLandingPage.fillFormAndSubmit();
    },

    aosReceivedUndefendedMoveToDNFormSubmit: function() {
      return AosReceivedUndefendedMoveToDN.fillFormAndSubmit();
    },

    setTestDataForDA: function() {
      return SetTestDataForDA.fillFormAndSubmit();
    },
    
    selectAndSubmitEvent: function(eventName) {
      return SelectEventAndSubmit.fillFormAndSubmit(eventName);
    },

    selectEvent: function(eventName) {
      return SelectEvent.fillFormAndSubmit(eventName);
    },
    

    aosStartedPageFormAndSubmit: function() {
      return AosStartedPage.fillFormAndSubmit();
    },

    aosStartedCheckYourAnswersPageFormAndSubmit: function() {
      return AosStartedCheckYourAnswersPage.fillFormAndSubmit();
    },

    changeToCourtsAndTribunalsServiceCentrePageFormAndSubmit: function() {
      return TransferCaseToADifferentRDCsPage.fillFormAndSubmit();
    },

    enterRDCChangeSummaryAndDescriptionPageFormAndSubmit: function() {
      return TransferBetweenRDCsPage.fillFormAndSubmit();
    },

    caseCreatedCTSCServiceCentrePageFormAndSubmit: function() {
      return TransferToRDCLandingPage.fillFormAndSubmit();
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
