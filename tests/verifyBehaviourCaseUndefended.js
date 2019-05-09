/// <reference path="../steps.d.ts" />

const { createCaseInCcd, updateCaseInCcd, getCaseWorkerLoginDetails, firstLetterToCaps } = require('../helpers/utils');
const verifyContent = require('../data/ccdBehaviourUnDefendedCase.json');
const verifyLableText = require('../data/ccdFieldTabLabelNames.json');
const caseWorker = getCaseWorkerLoginDetails();

Feature('verify behaviour case ');

Scenario('Behaviour case Undefended', async function (I) {
  const caseId = await createCaseInCcd('data/ccdBehaviourUnDefendedCase.json');
  const response = await updateCaseInCcd(caseId, 'hwfApplicationAcceptedfromAwaitingHWFDecision');
  const submitted = await updateCaseInCcd(caseId, 'issueFromSubmitted');
  const issueAOS = await updateCaseInCcd(caseId, 'issueAos');
  const startAOS = await updateCaseInCcd(caseId, 'startAos');
  const aosSubmittedUndefended = await updateCaseInCcd(caseId, 'aosSubmittedUndefended');
  const dnApplied = await updateCaseInCcd(caseId, 'dnReceived');

  I.amOnHomePage();
  I.login(caseWorker.username, caseWorker.password);
  I.shouldBeOnCaseListPage();
  I.amOnPage('/case/DIVORCE/DIVORCE/' + caseId);
  I.wait(5);

  // Verify Petitioner Tab

  I.clickTab(verifyLableText.petitionertab.name);
  I.see(verifyLableText.petitionertab.rdc);
  I.see(verifyLableText.petitionertab.courtName);
  I.see(verifyLableText.petitionertab.petitionerFName);
  I.see(verifyContent.D8PetitionerFirstName);
  I.see(verifyLableText.petitionertab.petitionerLName);
  I.see(verifyContent.D8PetitionerLastName);
  I.see(verifyLableText.petitionertab.petionerGender);
  I.see(await firstLetterToCaps(verifyContent.D8InferredPetitionerGender));
  I.see(verifyLableText.petitionertab.petitionerChangedName);
  I.see(await firstLetterToCaps(verifyContent.D8PetitionerNameDifferentToMarriageCert));
  I.see(verifyLableText.petitionertab.placeOfMarriage);
  I.see(verifyContent.D8MarriagePlaceOfMarriage);
  I.see(verifyLableText.petitionertab.WhoPetitionerDivorcing);
  I.see(await firstLetterToCaps(verifyContent.D8DivorceWho));
  I.see(verifyLableText.petitionertab.sameSexCouple);
  I.see(await firstLetterToCaps(verifyContent.D8MarriageIsSameSexCouple));
  I.see(verifyLableText.petitionertab.petitionerFactsStated);
  I.see(verifyLableText.general.yes);
  I.see(verifyLableText.petitionertab.previousCourtProceedings);
  I.see(await firstLetterToCaps(verifyContent.D8LegalProceedings));

  // Verify DN answers
  I.see(verifyLableText.dnAnswers.continuewithDN);
  I.see(await firstLetterToCaps(verifyContent.DNApplyForDecreeNisi));
  I.see(verifyLableText.dnAnswers.dateOfDnSubmitted);
  I.see(verifyLableText.dnAnswers.isEverythingStatedDivPetition);
  I.see(await firstLetterToCaps(verifyContent.statementOfTruthDN));
  I.see(verifyLableText.dnAnswers.isBehaviourStillHapp);
  I.see(await firstLetterToCaps(verifyContent.BehaviourStillHappeningDN));
  I.see(verifyLableText.dnAnswers.petitionerCostAtDN);
  I.see(verifyLableText.dnAnswers.claimOriginalAmountText);
  I.see(verifyLableText.dnAnswers.petitionerFactsDnStage);
  I.see(await firstLetterToCaps(verifyContent.ConfirmPetitionDN));

  // Verfiy Respondent Tab

  I.clickTab(verifyLableText.respondentTab.name);
  I.see(verifyLableText.respondentTab.familyManRefNumber);
  I.see(verifyContent.D8caseReference);
  I.see(verifyLableText.respondentTab.respondentFName);
  I.see(verifyContent.D8RespondentFirstName);
  I.see(verifyLableText.respondentTab.respondentLName);
  I.see(verifyContent.D8RespondentLastName);
  I.see(verifyLableText.respondentTab.respondentHomeAdd);
  I.see(verifyContent.D8DerivedRespondentHomeAddress);
  I.see(verifyLableText.respondentTab.respondentSerAdd);
  I.see(verifyContent.D8DerivedRespondentCorrespondenceAddr);
  I.see(verifyLableText.respondentTab.respondentConsentEmailComm);
  I.see(verifyLableText.general.yes);
  I.see(verifyLableText.respondentTab.respondentGender);
  I.see(await firstLetterToCaps(verifyContent.D8InferredRespondentGender));

  // AOS Answers

  I.see(verifyLableText.aosAnswers.respConfirmedRead);
  I.see(verifyContent.RespConfirmReadPetition);
  I.see(verifyLableText.aosAnswers.respAdmitted);
  I.see(verifyContent.RespAdmitOrConsentToFact);
  I.see(verifyLableText.aosAnswers.respAgreedClaimdJurisdiction);
  I.see(verifyContent.RespJurisdictionAgree);
  I.see(verifyLableText.aosAnswers.resplegalProceedings);
  I.see(verifyContent.RespLegalProceedingsExist);
  I.see(verifyLableText.aosAnswers.respAgreeCosts);
  I.see(verifyContent.RespAgreeToCosts);
  I.see(verifyLableText.aosAnswers.respAgreeStatementOfTruth);
  I.see(verifyContent.RespStatementOfTruth);
  I.see(verifyLableText.aosAnswers.respDigitalChannel);
  I.see(await firstLetterToCaps(verifyContent.RespContactMethodIsDigital));
  I.see(verifyLableText.general.yes);
  I.see(verifyLableText.aosAnswers.respDueDate);
  // <todo write function for due date calculation>

  // Verify Reason For Divorce Tab
  I.clickTab(verifyLableText.reasonForDivorceTab.name);
  I.see(verifyLableText.reasonForDivorceTab.fact);
  I.see('Behaviour');
  I.see(verifyLableText.reasonForDivorceTab.behaviourDetails);
  I.see(verifyContent.D8DerivedStatementOfCase);

  // Verify Jurisdiction Tab
  I.clickTab(verifyLableText.jurisdictionTab.name);
  I.see(verifyLableText.jurisdictionTab.legalConnections);
  I.see(verifyContent.D8Connections.A);
  I.see(verifyContent.D8Connections.C);
  I.see(verifyLableText.jurisdictionTab.livedTogether);
  I.see(verifyContent.D8DerivedLivingArrangementsLastLivedAddr);

  // Verify Prayer Tab
  I.clickTab(verifyLableText.prayerTab.name);
  I.see(verifyLableText.prayerTab.otherCourtProceedings);
  I.see(verifyLableText.general.no);
  I.see(verifyLableText.prayerTab.financialOrder);
  I.see(verifyLableText.general.yes);
  I.see(verifyLableText.prayerTab.whoTheFinancialOrder);
  I.see(verifyContent.D8FinancialOrderFor[0]);
  I.see(verifyLableText.prayerTab.applyForClaimCosts);
  I.see(verifyLableText.general.yes);
  I.see(verifyLableText.prayerTab.claimCostsFrom);
  I.see('Respondent');
  I.see(verifyLableText.prayerTab.factsStated);
  I.see(verifyLableText.general.yes);


  // Verify Marriage Certificate Tab
  I.clickTab(verifyLableText.marriageCertificateTab.name);
  I.see(verifyLableText.marriageCertificateTab.petitionerFullNameMarriageCertificate);
  I.see(verifyContent.D8MarriagePetitionerName);
  I.see(verifyLableText.marriageCertificateTab.respondnetFullNameMarriageCertificate);
  I.see(verifyContent.D8MarriageRespondentName);
  I.see(verifyLableText.marriageCertificateTab.dateofMarriage);
  I.see('2 Mar 2015');
  I.see(verifyLableText.marriageCertificateTab.isMarriageTookPlaceInUK);
  I.see(verifyLableText.general.yes);
  I.see(verifyLableText.marriageCertificateTab.placeOfMarriage);
  I.see(verifyContent.D8MarriagePlaceOfMarriage);

  // Verify Confidential Petitioner Tab
  I.clickTab(verifyLableText.confidentialPetitionerTab.name);
  I.see(verifyLableText.confidentialPetitionerTab.petitionerServiceAddress);
  I.see(verifyContent.D8DerivedPetitionerCorrespondenceAddr);
  I.see(verifyLableText.confidentialPetitionerTab.petitionerEmail);
  I.see(verifyContent.D8PetitionerEmail);
  I.see(verifyLableText.confidentialPetitionerTab.petitionerHomeAddress);
  I.see(verifyContent.D8DerivedPetitionerHomeAddress);

  // Verify Documents Tab
  I.clickTab(verifyLableText.documentsTab.name);
  I.see(verifyLableText.documentsTab.documentsUploadedPFEStage);
  I.see(verifyLableText.documentsTab.pfeUploadedDoc);
  I.see(verifyLableText.documentsTab.documentsGenerated);
  I.see(verifyLableText.documentsTab.d8petitionText+caseId+verifyLableText.documentsTab.documentgeneratedExtension);
  I.see(verifyLableText.documentsTab.aosInvitationText+caseId+verifyLableText.documentsTab.documentgeneratedExtension);
  // I.see(verifyLableText.documentsTab.respondentAnswersText);
  I.see(verifyLableText.documentsTab.documentsUploadedDNStage);
  I.see(verifyLableText.documentsTab.dnUploadedDoc);

  // Verify Prayer Tab
  I.clickTab(verifyLableText.prayerTab.name);
  I.see(verifyLableText.prayerTab.otherCourtProceedings);
  I.see(verifyLableText.general.no);
  I.see(verifyLableText.prayerTab.financialOrder);
  I.see(verifyLableText.general.yes);
  I.see(verifyLableText.prayerTab.whoTheFinancialOrder);
  I.see(verifyContent.D8FinancialOrderFor[0]);
  I.see(verifyLableText.prayerTab.applyForClaimCosts);
  I.see(verifyLableText.general.yes);
  I.see(verifyLableText.prayerTab.claimCostsFrom);
  I.see(await firstLetterToCaps(verifyContent.D8DivorceClaimFrom[0]));
  I.see(verifyLableText.prayerTab.factsStated);
  I.see(verifyLableText.general.yes);

  I.click('Sign Out');
});
