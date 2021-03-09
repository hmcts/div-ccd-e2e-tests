
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
const SelectEventAndSubmit = require('./pages/SelectEventAndSubmit');
const SelectEvent = require('./pages/SelectEvent');
const MarriageCertificateDetailsPage = require('./pages/MarriageCertificateDetailsPage');
const TransferCaseToADifferentRDCsPage = require('./pages/TransferCaseToADifferentRDCsPage');
const TransferBetweenRDCsPage = require('./pages/TransferBetweenRDCsPage');
const TransferToRDCLandingPage = require('./pages/TransferToRDCLandingPage');

// Petitioner Frontend Pages
const HasMarriageBrokenDownPage = require('./pages/PFE/HasMarriageBrokenDownPage');
const DoYouHaveAnAddressForYourHusbandOrWife = require('./pages/PFE/DoYouHaveAnAddressForYourHusbandOrWife');
const DoYouHaveYourMarriageCertificate = require('./pages/PFE/DoYouHaveYourMarriageCertificate');
const ContinueToSettlingFinance = require('./pages/PFE/ContinueToSettlingFinance');
const DoYouWantHelpPayingYourFees = require('./pages/PFE/DoYouWantHelpPayingYourFees');
const WhoAreYouDivorcing = require('./pages/PFE/WhoAreYouDivorcing');
const WhenDidYouGetMarried = require('./pages/PFE/WhenDidYouGetMarried');
const YouCanUseEnglishOrWelshCourts = require('./pages/PFE/YouCanUseEnglishOrWelshCourts');
const DidYouGetMarriedInTheUK = require('./pages/PFE/DidYouGetMarriedInTheUK');
const CheckIfYouCanGetADivorceInEnglandAndWales = require('./pages/PFE/CheckIfYouCanGetADivorceInEnglandAndWales');
const DoYouWantYourAddressToRemainPrivate = require('./pages/PFE/DoYouWantYourAddressToRemainPrivate');
const EnterYourCurrentPartyNames = require('./pages/PFE/EnterYourCurrentPartyNames');
const HowAreYourNamesDisplayedOnTheMarriageCertificate = require('./pages/PFE/HowAreYourNamesDisplayedOnTheMarriageCertificate');
const HaveYouChangedYourNameSinceYouGotMarried = require('./pages/PFE/HaveYouChangedYourNameSinceYouGotMarried');
const HowTheCourtWillContactYou = require('./pages/PFE/HowTheCourtWillContactYou');
const WhatIsYourHomeAddress = require('./pages/PFE/WhatIsYourHomeAddress');
const WhatIsYourHomeAddressManual = require('./pages/PFE/WhatIsYourHomeAddressManual');
const DoYouWantYourDivorcePapersSentToThisAddress = require('./pages/PFE/DoYouWantYourDivorcePapersSentToThisAddress');
const DoYouAndYourPartnerLiveAtTheSameAddress = require('./pages/PFE/DoYouAndYourPartnerLiveAtTheSameAddress');
const IsThisWhereYourPartnersDivorcePapersShouldBeSent = require('./pages/PFE/IsThisWhereYourPartnersDivorcePapersShouldBeSent');
const ChooseAReasonForYourDivorce = require('./pages/PFE/ChooseAReasonForYourDivorce');
const DoYouWantToNameThePersonYouBelieveYourPartnerCommittedAdulteryWith = require('./pages/PFE/DoYouWantToNameThePersonYouBelieveYourPartnerCommittedAdulteryWith');
const DoYouKnowWhereTheAdulteryTookPlace = require('./pages/PFE/DoYouKnowWhereTheAdulteryTookPlace');
const DoYouKnowWhenTheAdulteryTookPlace = require('./pages/PFE/DoYouKnowWhenTheAdulteryTookPlace');
const YourAccountOfTheAdultery = require('./pages/PFE/YourAccountOfTheAdultery');
const HasAnyOfTheInformationAboutTheAdulteryComeFromAnotherPerson = require('./pages/PFE/HasAnyOfTheInformationAboutTheAdulteryComeFromAnotherPerson');
const OtherCourtCasesRelatedToYourMarriagePropertyOrChildren = require('./pages/PFE/OtherCourtCasesRelatedToYourMarriagePropertyOrChildren');
const DividingYourMoneyAndProperty = require('./pages/PFE/DividingYourMoneyAndProperty');
const ApplyingForFinancialOrder = require('./pages/PFE/ApplyingForFinancialOrder');
const DoYouWantToApplyToClaimYourDivorceCosts = require('./pages/PFE/DoYouWantToApplyToClaimYourDivorceCosts');
const UploadYourDocuments = require('./pages/PFE/UploadYourDocuments');
const EqualityAndDiversityQuestions = require('./pages/PFE/EqualityAndDiversityQuestions');
const CheckYourAnswers = require('./pages/PFE/CheckYourAnswers');
const PFELanguagePreferencePage = require('./pages/PFE/PFELanguagePreferencePage');

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

    amOnPetitionerFrontendPage: function () {
      return this.amOnPage('https://petitioner-frontend-aks.aat.platform.hmcts.net/');
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

    selectEnglishAsPreferredLanguage: function() {
      return PFELanguagePreferencePage.selectEnglishAsLanguageAndSubmit();
    },

    stateThatMarriageHasBrokenDown: function() {
      return HasMarriageBrokenDownPage.fillFormAndSubmit();
    },

    haveAnAddressForPartner: function() {
      return DoYouHaveAnAddressForYourHusbandOrWife.selectYesAndSubmit();
    },

    haveMarriageCertificate: function() {
      return DoYouHaveYourMarriageCertificate.selectYesAndSubmit();
    },

    continueSettlingFinances: function() {
      return ContinueToSettlingFinance.selectContinue();
    },

    dontNeedHelpWithFees: function() {
      return DoYouWantHelpPayingYourFees.selectNoAndContinue();
    },

    doNeedHelpWithFees: function() {
      return DoYouWantHelpPayingYourFees.selectYesAndContinue();
    },

    amDivorcingMyWife: function() {
      return WhoAreYouDivorcing.selectWifeAndContinue();
    },

    amDivorcingMyHusband: function() {
      return WhoAreYouDivorcing.selectHusbandAndContinue();
    },

    gotMarriedTwoYearsAgo: function() {
      return WhenDidYouGetMarried.enterTwoYearsAgoAndContinue();
    },

    gotMarriedInTheUk: function() {
      return DidYouGetMarriedInTheUK.selectMarriedInUKAndContinue();
    },

    stateBothPartiesAreMainlyInEnglandAndWales: function() {
      return CheckIfYouCanGetADivorceInEnglandAndWales.selectBothPartiesAreMainlyBasedInEnglandOrWalesAndContinue();
    },

    amConfidentSelectionIsRight: function() {
      return YouCanUseEnglishOrWelshCourts.selectConfidentSelectionIsRightAndContinue();
    },

    dontNeedMyAddressKeptPrivate: function() {
      return DoYouWantYourAddressToRemainPrivate.selectIDontNeedMyAddressKeptPrivateAndContinue();
    },

    enterBothPartiesNames: function() {
      return EnterYourCurrentPartyNames.enterPetitionerAndRespondentNamesAndContinue();
    },

    enterNamesDisplayedOnTheMarriageCertificate: function() {
      return HowAreYourNamesDisplayedOnTheMarriageCertificate.enterBothPartiesNames();
    },

    haveNotChangedMyNameSinceIGotMarried: function() {
      return HaveYouChangedYourNameSinceYouGotMarried.selectNoAndContinue();
    },

    agreeToEmailNotifications: function() {
      return HowTheCourtWillContactYou.selectAgreeToReceiveEmailsAndContinue();
    },

    canNotEnterUkPostcode: function() {
      return WhatIsYourHomeAddress.selectICantEnterUkPostcode();
    },

    enterHomeAddressManually: function() {
      return WhatIsYourHomeAddressManual.enterPostcodeManually();
    },

    wantMyPaperDeliverToThisAddress: function() {
      return DoYouWantYourDivorcePapersSentToThisAddress.selectDeliverToThisAddressAndContinue();
    },

    stateThatWeLiveAtTheSameAddress: function() {
      return DoYouAndYourPartnerLiveAtTheSameAddress.selectLiveTogetherAndContinue();
    },

    wantTheirPapersSentToThisAddress: function() {
      return IsThisWhereYourPartnersDivorcePapersShouldBeSent.selectYesAndContinue();
    },

    selectAdulteryForTheReasonForDivorce: function() {
      return ChooseAReasonForYourDivorce.selectAdulteryAndContinue();
    },

    doNotWantToNameThePersonMyPartnerCommittedAdulteryWith: function() {
      return DoYouWantToNameThePersonYouBelieveYourPartnerCommittedAdulteryWith.selectNoAndContinue();
    },

    doNotKnowWhereTheAdulteryTookPlace: function() {
      return DoYouKnowWhereTheAdulteryTookPlace.selectNoAndContinue();
    },

    doNotKnowWhenTheAdulteryTookPlace: function() {
      return DoYouKnowWhenTheAdulteryTookPlace.selectNoAndContinue();
    },

    enterMyAccountOfTheAdultery: function() {
      return YourAccountOfTheAdultery.enterInformationAndContinue();
    },

    stateInformationHasCameFromPartner: function() {
      return HasAnyOfTheInformationAboutTheAdulteryComeFromAnotherPerson.selectNoAndContinue();
    },

    haveNoOtherCourtCasesRelatedToMarriagePropertyOrChildren: function() {
      return OtherCourtCasesRelatedToYourMarriagePropertyOrChildren.selectNoAndContinue();
    },

    applyForFinancialOrderForMyself: function() {
      return DividingYourMoneyAndProperty.applyForFinancialOrderForPetitioner();
    },

    continueToApplyForAFinancialOrder: function() {
      return ApplyingForFinancialOrder.selectContinue();
    },

    applyToClaimDivorceCosts: function() {
      return DoYouWantToApplyToClaimYourDivorceCosts.selectYesAndContinue();
    },

    continueWithoutUploadingDocuments: function() {
      return UploadYourDocuments.selectContinue();
    },

    doNotWantToAnswerAdditionalQuestions: function() {
      return EqualityAndDiversityQuestions.selectContinue();
    },

    checkMyAnswers: function() {
      return CheckYourAnswers.signFormAndSubmit();
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
