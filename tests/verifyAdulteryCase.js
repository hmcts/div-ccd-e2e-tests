/// <reference path="../steps.d.ts" />

const { createCaseInCcd, updateCaseInCcd, getCaseWorkerLoginDetails, firstLetterToCaps, datechange } = require('../helpers/utils');
const verifyContent = require('../data/ccdAdulteryRespondentCorespondentDefendedCase.json');
const verifyLableText = require('../data/ccdFieldTabLabelNames.json');
const caseWorker = getCaseWorkerLoginDetails();

Feature('verify Adutlery case ');

Scenario('Adultery case defended by both Repson and Co Resp', async function (I) {
  const caseId = await createCaseInCcd('data/ccdAdulteryRespondentCorespondentDefendedCase.json');
  const response = await updateCaseInCcd(caseId, 'hwfApplicationAcceptedfromAwaitingHWFDecision');
  const submitted = await updateCaseInCcd(caseId, 'issueFromSubmitted');
  const issueAOS = await updateCaseInCcd(caseId, 'issueAos');
  const startAOS = await updateCaseInCcd(caseId, 'startAos');
  const aosSubmittedCoRespoDefended = await updateCaseInCcd(caseId, 'co-RespAOSReceivedStarted');
  const aosSubmittedRespoDefended = await updateCaseInCcd(caseId, 'aosSubmittedDefended');
  const coRespAnswerReceivedForDefended = await updateCaseInCcd(caseId,'coRespAnswerReceivedAOS');

  I.amOnHomePage();
  I.login(caseWorker.username, caseWorker.password);
  I.shouldBeOnCaseListPage();
  I.amOnPage('/case/DIVORCE/DIVORCE/' + caseId);
  I.wait(5);

  // Verify coRespondent Tab
  I.clickTab(verifyLableText.coRespondenttab.name);
  I.see(verifyLableText.coRespondenttab.coRespondentFName);
  I.see(verifyContent.D8ReasonForDivorceAdultery3rdPartyFName);
  I.see(verifyLableText.coRespondenttab.coRespondentLName);
  I.see(verifyContent.D8ReasonForDivorceAdultery3rdPartyLName);
  I.see(verifyLableText.coRespondenttab.coRespondentAddress);
  I.see(verifyContent.D8DerivedReasonForDivorceAdultery3rdAddr);
  I.see(verifyLableText.coRespondenttab.coRespondentCommunications);
  I.see(await firstLetterToCaps(verifyContent.CoRespConsentToEmail));

  I.see(verifyLableText.coRespondenttab.coRespondentReadPetition);
  I.see(await firstLetterToCaps(verifyContent.CoRespConfirmReadPetition));
  I.see(verifyLableText.coRespondenttab.coRespondentDefendDivorce);
  I.see(await firstLetterToCaps(verifyContent.CoRespDefendsDivorce));
  I.see(verifyLableText.coRespondenttab.coRespondentAdmitDivorce);
  I.see(await firstLetterToCaps(verifyContent.CoRespAdmitAdultery));
  I.see(verifyLableText.coRespondenttab.coRespondentAgreeStatementOfTruth);
  I.see(await firstLetterToCaps(verifyContent.CoRespStatementOfTruth));
  I.see(verifyLableText.coRespondenttab.coRespondentDigitalChannel);
  I.see(await firstLetterToCaps(verifyContent.CoRespContactMethodIsDigital));
  I.see(verifyLableText.coRespondenttab.coRespondentAosDueDate);
  I.see(verifyLableText.coRespondenttab.coRespondentAnswerReceived);
  I.see(verifyContent.ReceivedAnswerFromCoResp);
  I.see(verifyLableText.coRespondenttab.coRespondentAnswerReceivedDate);

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
  I.see(verifyLableText.confidentialPetitionerTab.petitionerServiceAddress);
  I.see(verifyContent.D8DerivedPetitionerCorrespondenceAddr);
  I.see(verifyLableText.confidentialPetitionerTab.petitionerEmail);
  I.see(verifyContent.D8PetitionerEmail);
  I.see(verifyLableText.confidentialPetitionerTab.petitionerHomeAddress);
  I.see(verifyContent.D8DerivedPetitionerHomeAddress);
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

  I.see(verifyLableText.aosAnswers.respDefendDivorce);
  I.see(verifyContent.RespWillDefendDivorce);

  I.see(verifyLableText.aosAnswers.respAdmitted);
  I.see(verifyContent.RespAdmitOrConsentToFact);

  I.see(verifyLableText.aosAnswers.respAgreedClaimdJurisdiction);
  I.see(verifyContent.RespJurisdictionAgree);

  I.see(verifyLableText.aosAnswers.respReasonJurisdiction);
  I.see(verifyContent.RespJurisdictionDisagreeReason);
  I.see(verifyLableText.aosAnswers.respJurisdictionCountry);
  I.see(verifyContent.RespJurisdictionRespCountryOfResidence);
  I.see(verifyLableText.aosAnswers.resplegalProceedings);
  I.see(verifyContent.RespLegalProceedingsExist);

  I.see(verifyLableText.aosAnswers.respAgreeStatementOfTruth);
  I.see(verifyContent.RespStatementOfTruth);
  I.see(verifyLableText.aosAnswers.respDigitalChannel);
  I.see(await firstLetterToCaps(verifyContent.RespContactMethodIsDigital));
  I.see(verifyLableText.general.yes);
  I.see(verifyLableText.aosAnswers.respDueDate);
  I.see(await datechange(30));

  // Verify Reason For Divorce Tab
  I.clickTab(verifyLableText.reasonForDivorceTab.name);
  I.see(verifyLableText.reasonForDivorceTab.fact);
  I.see('Adultery');
  I.see(verifyLableText.reasonForDivorceTab.adulteryDetails);
  I.see(verifyContent.D8ReasonForDivorceAdulteryDetails);

  I.see(verifyLableText.reasonForDivorceTab.nameOfCoRespondent);
  I.see(await firstLetterToCaps(verifyContent.D8ReasonForDivorceAdulteryWishToName));

  I.see(verifyLableText.reasonForDivorceTab.adulteryInfoThirdParty);
  I.see(await firstLetterToCaps(verifyContent.D8ReasonForDivorceAdulteryAnyInfo2ndHand));
  I.see(verifyLableText.reasonForDivorceTab.adulteryInfoThirdPartyDetails);
  I.see(verifyContent.D8ReasonForDivorceAdultery2ndHandDetails);
  I.see(verifyLableText.reasonForDivorceTab.adulteryPetitionerKnowsWhen);
  I.see(await firstLetterToCaps(verifyContent.D8ReasonForDivorceAdulteryKnowWhen));
  I.see(verifyLableText.reasonForDivorceTab.detailsOfWhenAdulteryTookPlace);
  I.see(verifyContent.D8ReasonForDivorceAdulteryWhenDetails);

  I.see(verifyLableText.reasonForDivorceTab.adulteryPetitionerKnowsWhere);
  I.see(await firstLetterToCaps(verifyContent.D8ReasonForDivorceAdulteryKnowWhere));
  I.see(verifyLableText.reasonForDivorceTab.detailsOfWhereAdulteryTookPlace);
  I.see(verifyContent.D8ReasonForDivorceAdulteryWhereDetails);

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
  I.see(await firstLetterToCaps(verifyContent.D8LegalProceedings));

  I.see(verifyLableText.prayerTab.financialOrder);
  I.see(await firstLetterToCaps(verifyContent.D8FinancialOrder));
  I.see(verifyLableText.prayerTab.applyForClaimCosts);
  I.see(await firstLetterToCaps(verifyContent.D8DivorceCostsClaim));
  I.see(verifyLableText.prayerTab.factsStated);
  I.see(await firstLetterToCaps(verifyContent.D8StatementOfTruth));

  // Verify Documents Tab
  I.clickTab(verifyLableText.documentsTab.name);
  I.see(verifyLableText.documentsTab.documentsUploadedPFEStage);
  I.see(verifyLableText.documentsTab.documentsGenerated);
  I.see(verifyLableText.documentsTab.d8petitionText+caseId+verifyLableText.documentsTab.documentgeneratedExtension);
  I.see(verifyLableText.documentsTab.coRespondentaosinvitationText+caseId+verifyLableText.documentsTab.documentgeneratedExtension);

  // Verify Marriage Certificate Tab
  I.clickTab(verifyLableText.marriageCertificateTab.name);
  I.see(verifyLableText.marriageCertificateTab.petitionerFullNameMarriageCertificate);
  I.see(verifyContent.D8MarriagePetitionerName);
  I.see(verifyLableText.marriageCertificateTab.respondnetFullNameMarriageCertificate);
  I.see(verifyContent.D8MarriageRespondentName);
  I.see(verifyLableText.marriageCertificateTab.dateofMarriage);
  I.see('20 Oct 2010');
  I.see(verifyLableText.marriageCertificateTab.isMarriageTookPlaceInUK);
  I.see(await firstLetterToCaps(verifyContent.D8MarriedInUk));
  I.see(verifyLableText.marriageCertificateTab.placeOfMarriage);
  I.see(verifyContent.D8MarriagePlaceOfMarriage);
});