const I = actor();
const { firstLetterToCaps, datechange, formatDateToCcdDisplayDate } = require('../helpers/utils');
const verifyLableText = require('../data/ccdFieldTabLabelNames.json');


function verifyPetitionerTab(reason,verifyContent){
  I.click(verifyLableText.petitionertab.name);
  I.see(verifyLableText.petitionertab.rdc);
  I.see(verifyLableText.petitionertab.courtName);
  I.see(verifyLableText.petitionertab.petitionerFName);
  I.see(verifyContent.D8PetitionerFirstName);
  I.see(verifyLableText.petitionertab.petitionerLName);
  I.see(verifyContent.D8PetitionerLastName);
  I.see(verifyLableText.petitionertab.petionerGender);
  I.see(firstLetterToCaps(verifyContent.D8InferredPetitionerGender));
  I.see(verifyLableText.petitionertab.petitionerChangedName);
  I.see(firstLetterToCaps(verifyContent.D8PetitionerNameDifferentToMarriageCert));
  I.see(verifyLableText.petitionertab.placeOfMarriage);
  I.see(verifyContent.D8MarriagePlaceOfMarriage);
  I.see(verifyLableText.petitionertab.WhoPetitionerDivorcing);
  I.see(firstLetterToCaps(verifyContent.D8DivorceWho));
  I.see(verifyLableText.petitionertab.sameSexCouple);
  I.see(firstLetterToCaps(verifyContent.D8MarriageIsSameSexCouple));
  I.see(verifyLableText.petitionertab.petitionerFactsStated);
  I.see(verifyLableText.general.yes);
  I.see(verifyLableText.petitionertab.previousCourtProceedings);
  I.see(firstLetterToCaps(verifyContent.D8LegalProceedings));

  //Respondent details
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
  I.see(firstLetterToCaps(verifyContent.D8InferredRespondentGender));

  if(['Adultery'].includes(reason)) {
    I.see(verifyLableText.confidentialPetitionerTab.petitionerServiceAddress);
    I.see(verifyContent.D8DerivedPetitionerCorrespondenceAddr);
    I.see(verifyLableText.confidentialPetitionerTab.petitionerEmail);
    I.see(verifyContent.D8PetitionerEmail);
    I.see(verifyLableText.confidentialPetitionerTab.petitionerHomeAddress);
    I.see(verifyContent.D8DerivedPetitionerHomeAddress);
  }

  // prayer related data
  I.see(verifyLableText.prayerTab.otherCourtProceedings);
  I.see( firstLetterToCaps(verifyContent.D8LegalProceedings));
  I.see(verifyLableText.prayerTab.financialOrder);
  I.see( firstLetterToCaps(verifyContent.D8FinancialOrder));
  if(['Adultery'].includes(reason)) {
    I.see(verifyLableText.prayerTab.applyForClaimCosts);
    I.see(firstLetterToCaps(verifyContent.D8DivorceCostsClaim));
  }
  if(['Behaviour'].includes(reason)) {
    I.see(verifyLableText.prayerTab.whoTheFinancialOrder);
    I.see(verifyContent.D8FinancialOrderFor[0]);
    I.see(verifyLableText.prayerTab.applyForClaimCosts);
    I.see(firstLetterToCaps(verifyContent.D8DivorceCostsClaim));
    I.see(verifyLableText.prayerTab.claimCostsFrom);
    I.see('Respondent');
  }
  I.see(verifyLableText.prayerTab.factsStated);
  I.see(firstLetterToCaps(verifyContent.D8StatementOfTruth));

  // Reason details
  I.see(verifyLableText.reasonForDivorceTab.fact);
  I.see(reason);

  if(['Adultery'].includes(reason)) {
    I.see(verifyLableText.reasonForDivorceTab.adulteryDetails);
    I.see(verifyContent.D8ReasonForDivorceAdulteryDetails);
    I.see(verifyLableText.reasonForDivorceTab.nameOfCoRespondent);
    I.see(firstLetterToCaps(verifyContent.D8ReasonForDivorceAdulteryWishToName));
    I.see(verifyLableText.reasonForDivorceTab.adulteryInfoThirdPartyDetails);
    I.see(verifyContent.D8ReasonForDivorceAdultery2ndHandDetails);
    I.see(verifyLableText.reasonForDivorceTab.adulteryPetitionerKnowsWhen);
    I.see(firstLetterToCaps(verifyContent.D8ReasonForDivorceAdulteryKnowWhen));
    I.see(verifyLableText.reasonForDivorceTab.detailsOfWhenAdulteryTookPlace);
    I.see(verifyContent.D8ReasonForDivorceAdulteryWhenDetails);
    I.see(verifyLableText.reasonForDivorceTab.adulteryPetitionerKnowsWhere);
    I.see(firstLetterToCaps(verifyContent.D8ReasonForDivorceAdulteryKnowWhere));
    I.see(verifyLableText.reasonForDivorceTab.detailsOfWhereAdulteryTookPlace);
    I.see(verifyContent.D8ReasonForDivorceAdulteryWhereDetails);
  } else if(['Behaviour'].includes(reason)) {
    I.see(verifyLableText.reasonForDivorceTab.behaviourDetails);
    I.see(verifyContent.D8DerivedStatementOfCase);
  } else if (['Desertion'].includes(reason)) {
    I.see(verifyLableText.reasonForDivorceTab.respondentLeaveWithoutAgreement);
    I.see(verifyContent.D8ReasonForDivorceDesertionAgreed);
    I.see(verifyLableText.reasonForDivorceTab.desertionDetails);
    I.see(verifyContent.D8ReasonForDivorceDesertionDetails);
    I.see(verifyLableText.reasonForDivorceTab.desertionDate);
    I.see(formatDateToCcdDisplayDate(new Date(verifyContent.D8ReasonForDivorceDesertionDate)));
    I.see(verifyLableText.reasonForDivorceTab.livedApart);
    I.see(verifyContent.D8LivedApartSinceDesertion);
  }

  // Legal Connections

  I.see(verifyLableText.jurisdictionTab.legalConnections);
  I.see(verifyContent.D8Connections.A);
  I.see(verifyContent.D8Connections.C);
  I.see(verifyLableText.jurisdictionTab.livedTogether);
  I.see(verifyContent.D8DerivedLivingArrangementsLastLivedAddr);

}

function verifyCorespondentTab(reason,verifyContent)
{
  if(['Adultery'].includes(reason)) {
    I.click(verifyLableText.coRespondenttab.name);
    I.see(verifyLableText.coRespondenttab.coRespondentFName);
    I.see(verifyContent.D8ReasonForDivorceAdultery3rdPartyFName);
    I.see(verifyLableText.coRespondenttab.coRespondentLName);
    I.see(verifyContent.D8ReasonForDivorceAdultery3rdPartyLName);
    I.see(verifyLableText.coRespondenttab.coRespondentAddress);
    I.see(verifyContent.D8DerivedReasonForDivorceAdultery3rdAddr);
    I.see(verifyLableText.coRespondenttab.coRespondentCommunications);
    I.see(firstLetterToCaps(verifyContent.CoRespConsentToEmail));
    I.see(verifyLableText.coRespondenttab.coRespondentReadPetition);
    I.see(firstLetterToCaps(verifyContent.CoRespConfirmReadPetition));
    I.see(verifyLableText.coRespondenttab.coRespondentDefendDivorce);
    I.see(firstLetterToCaps(verifyContent.CoRespDefendsDivorce));
    I.see(verifyLableText.coRespondenttab.coRespondentAdmitDivorce);
    I.see(firstLetterToCaps(verifyContent.CoRespAdmitAdultery));
    I.see(verifyLableText.coRespondenttab.coRespondentAgreeStatementOfTruth);
    I.see(firstLetterToCaps(verifyContent.CoRespStatementOfTruth));
    I.see(verifyLableText.coRespondenttab.coRespondentDigitalChannel);
    I.see(firstLetterToCaps(verifyContent.CoRespContactMethodIsDigital));
    I.see(verifyLableText.coRespondenttab.coRespondentAosDueDate);
    I.see(verifyLableText.coRespondenttab.coRespondentAnswerReceived);
    I.see(verifyContent.ReceivedAnswerFromCoResp);
    I.see(verifyLableText.coRespondenttab.coRespondentAnswerReceivedDate);
  }
}

function verifyDocumentsTab(reason, caseId) {
// Verify Documents Tab
  I.click(verifyLableText.documentsTab.name);
  I.see(verifyLableText.documentsTab.documentsUploadedPFEStage);
  I.see(verifyLableText.documentsTab.documentsGenerated);
  I.see(verifyLableText.documentsTab.d8petitionText + caseId + verifyLableText.documentsTab.documentgeneratedExtension);
  if(['Adultery'].includes(reason)) {
    I.see(verifyLableText.documentsTab.coRespondentaosinvitationText + caseId + verifyLableText.documentsTab.documentgeneratedExtension);
  } else {
    I.see(verifyLableText.documentsTab.pfeUploadedDoc);
    I.see(verifyLableText.documentsTab.respondentAnswersText);
    I.see(verifyLableText.documentsTab.documentsUploadedDNStage);
    I.see(verifyLableText.documentsTab.dnUploadedDoc);
  }
}
function verifyMarriageCertificateTab(verifyContent) {
  I.click(verifyLableText.marriageCertificateTab.name);
  I.see(verifyLableText.marriageCertificateTab.petitionerFullNameMarriageCertificate);
  I.see(verifyContent.D8MarriagePetitionerName);
  I.see(verifyLableText.marriageCertificateTab.respondnetFullNameMarriageCertificate);
  I.see(verifyContent.D8MarriageRespondentName);
  I.see(verifyLableText.marriageCertificateTab.dateofMarriage);
  I.see(formatDateToCcdDisplayDate(new Date(verifyContent.D8MarriageDate)));
  I.see(verifyLableText.marriageCertificateTab.isMarriageTookPlaceInUK);
  I.see(firstLetterToCaps(verifyContent.D8MarriedInUk));
  I.see(verifyLableText.marriageCertificateTab.placeOfMarriage);
  I.see(verifyContent.D8MarriagePlaceOfMarriage);
}
function verifyDNAnswersInTab(reason, verifyContent) {
  if(['Behaviour'].includes(reason)) {
    I.click(verifyLableText.dnAnswers.name);
    I.see(verifyLableText.dnAnswers.continuewithDN);
    I.see(firstLetterToCaps(verifyContent.DNApplyForDecreeNisi));
    I.see(verifyLableText.dnAnswers.dateOfDnSubmitted);
    I.see(verifyLableText.dnAnswers.isEverythingStatedDivPetition);
    I.see(firstLetterToCaps(verifyContent.statementOfTruthDN));
    I.see(verifyLableText.dnAnswers.isBehaviourStillHapp);
    I.see(firstLetterToCaps(verifyContent.BehaviourStillHappeningDN));
    I.see(verifyLableText.dnAnswers.petitionerCostAtDN);
    I.see(verifyLableText.dnAnswers.claimOriginalAmountText);
    I.see(verifyLableText.dnAnswers.petitionerFactsDnStage);
    I.see(firstLetterToCaps(verifyContent.ConfirmPetitionDN));
  }
}

function verifyAOSAnswersInTab(reason,verifyContent){
  // AOS Answers
  I.click(verifyLableText.respondentTab.name);
  I.see(verifyLableText.aosAnswers.respConfirmedRead);
  I.see(verifyContent.RespConfirmReadPetition);

  if(['Adultery'].includes(reason)) {
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
    I.see(verifyLableText.aosAnswers.respDigitalChannel);
    I.see(firstLetterToCaps(verifyContent.RespContactMethodIsDigital));
    I.see(verifyLableText.general.yes);
    I.see(verifyLableText.aosAnswers.respDueDate);
  }
  if(['Behaviour'].includes(reason)) {
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
    I.see(verifyLableText.aosAnswers.respDigitalChannel);
    I.see(firstLetterToCaps(verifyContent.RespContactMethodIsDigital));
    I.see(verifyLableText.general.yes);
    I.see(verifyLableText.aosAnswers.respDueDate);
  }

  I.see(datechange(30));
}

function verifyConfidentialPetitionerTab(verifyContent) {
  I.click(verifyLableText.confidentialPetitionerTab.name);
  I.see(verifyLableText.confidentialPetitionerTab.petitionerServiceAddress);
  I.see(verifyContent.D8DerivedPetitionerCorrespondenceAddr);
  I.see(verifyLableText.confidentialPetitionerTab.petitionerEmail);
  I.see(verifyContent.D8PetitionerEmail);
  I.see(verifyLableText.confidentialPetitionerTab.petitionerHomeAddress);
  I.see(verifyContent.D8DerivedPetitionerHomeAddress);
}


module.exports = { verifyPetitionerTab,
  verifyCorespondentTab,
  verifyDocumentsTab,
  verifyMarriageCertificateTab,
  verifyAOSAnswersInTab,
  verifyDNAnswersInTab,
  verifyConfidentialPetitionerTab
};

