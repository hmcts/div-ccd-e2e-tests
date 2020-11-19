const I = actor();
const { firstLetterToCaps, formatDateToCcdDisplayDate } = require('../helpers/utils');
const labels = require('../data/tab-fields/petition.json');
const { reasonsForDivorce } = require('../common/constants')


module.exports = (reason,verifyContent) => {
  I.click(labels.petitionertab.name);
  I.see(labels.petitionertab.rdc);
  I.see(labels.petitionertab.courtName);
  I.see(labels.petitionertab.petitionerFName);
  I.see(verifyContent.D8PetitionerFirstName);
  I.see(labels.petitionertab.petitionerLName);
  I.see(verifyContent.D8PetitionerLastName);
  I.see(labels.petitionertab.petionerGender);
  I.see(firstLetterToCaps(verifyContent.D8InferredPetitionerGender));
  I.see(labels.petitionertab.petitionerChangedName);
  I.see(firstLetterToCaps(verifyContent.D8PetitionerNameDifferentToMarriageCert));
  I.see(labels.petitionertab.placeOfMarriage);
  I.see(verifyContent.D8MarriagePlaceOfMarriage);
  I.see(labels.petitionertab.WhoPetitionerDivorcing);
  I.see(firstLetterToCaps(verifyContent.D8DivorceWho));
  I.see(labels.petitionertab.sameSexCouple);
  I.see(firstLetterToCaps(verifyContent.D8MarriageIsSameSexCouple));
  I.see(labels.petitionertab.petitionerFactsStated);
  I.see(labels.general.yes);
  I.see(labels.petitionertab.previousCourtProceedings);
  I.see(firstLetterToCaps(verifyContent.D8LegalProceedings));

  //Respondent details
  I.see(labels.respondentTab.respondentFName);
  I.see(verifyContent.D8RespondentFirstName);
  I.see(labels.respondentTab.respondentLName);
  I.see(verifyContent.D8RespondentLastName);
  I.see(labels.respondentTab.respondentHomeAdd);
  I.see(verifyContent.D8DerivedRespondentHomeAddress);
  I.see(labels.respondentTab.respondentSerAdd);
  I.see(verifyContent.D8DerivedRespondentCorrespondenceAddr);
  I.see(labels.respondentTab.respondentConsentEmailComm);
  I.see(labels.general.yes);
  I.see(labels.respondentTab.respondentGender);
  I.see(firstLetterToCaps(verifyContent.D8InferredRespondentGender));

  if(reasonsForDivorce.ADULTERY == reason) {
    I.see(labels.confidentialPetitionerTab.petitionerServiceAddress);
    I.see(verifyContent.D8DerivedPetitionerCorrespondenceAddr);
    I.see(labels.confidentialPetitionerTab.petitionerEmail);
    I.see(verifyContent.D8PetitionerEmail);
    I.see(labels.confidentialPetitionerTab.petitionerHomeAddress);
    I.see(verifyContent.D8DerivedPetitionerHomeAddress);
  }

  // prayer related data
  I.see(labels.prayerTab.otherCourtProceedings);
  I.see( firstLetterToCaps(verifyContent.D8LegalProceedings));
  I.see(labels.prayerTab.financialOrder);
  I.see( firstLetterToCaps(verifyContent.D8FinancialOrder));
  if(reasonsForDivorce.ADULTERY == reason) {
    I.see(labels.prayerTab.applyForClaimCosts);
    I.see(firstLetterToCaps(verifyContent.D8DivorceCostsClaim));
  }
  if(reasonsForDivorce.BEHAVIOUR == reason) {
    I.see(labels.prayerTab.whoTheFinancialOrder);
    I.see(verifyContent.D8FinancialOrderFor[0]);
    I.see(labels.prayerTab.applyForClaimCosts);
    I.see(firstLetterToCaps(verifyContent.D8DivorceCostsClaim));
    I.see(labels.prayerTab.claimCostsFrom);
    I.see('Respondent');
  }
  I.see(labels.prayerTab.factsStated);
  I.see(firstLetterToCaps(verifyContent.D8StatementOfTruth));

  // Reason details
  I.see(labels.reasonForDivorceTab.fact);
  I.see(reason);

  if(reasonsForDivorce.ADULTERY == reason) {
    I.see(labels.reasonForDivorceTab.adulteryDetails);
    I.see(verifyContent.D8ReasonForDivorceAdulteryDetails);
    I.see(labels.reasonForDivorceTab.nameOfCoRespondent);
    I.see(firstLetterToCaps(verifyContent.D8ReasonForDivorceAdulteryWishToName));
    I.see(labels.reasonForDivorceTab.adulteryInfoThirdPartyDetails);
    I.see(verifyContent.D8ReasonForDivorceAdultery2ndHandDetails);
    I.see(labels.reasonForDivorceTab.adulteryPetitionerKnowsWhen);
    I.see(firstLetterToCaps(verifyContent.D8ReasonForDivorceAdulteryKnowWhen));
    I.see(labels.reasonForDivorceTab.detailsOfWhenAdulteryTookPlace);
    I.see(verifyContent.D8ReasonForDivorceAdulteryWhenDetails);
    I.see(labels.reasonForDivorceTab.adulteryPetitionerKnowsWhere);
    I.see(firstLetterToCaps(verifyContent.D8ReasonForDivorceAdulteryKnowWhere));
    I.see(labels.reasonForDivorceTab.detailsOfWhereAdulteryTookPlace);
    I.see(verifyContent.D8ReasonForDivorceAdulteryWhereDetails);
  } else if(reasonsForDivorce.BEHAVIOUR == reason) {
    I.see(labels.reasonForDivorceTab.behaviourDetails);
    I.see(verifyContent.D8DerivedStatementOfCase);
  } else if (reasonsForDivorce.DESERTION == reason) {
    I.see(labels.reasonForDivorceTab.respondentLeaveWithoutAgreement);
    I.see(verifyContent.D8ReasonForDivorceDesertionAgreed);
    I.see(labels.reasonForDivorceTab.desertionDetails);
    I.see(verifyContent.D8ReasonForDivorceDesertionDetails);
    I.see(labels.reasonForDivorceTab.desertionDate);
    I.see(formatDateToCcdDisplayDate(new Date(verifyContent.D8ReasonForDivorceDesertionDate)));
    I.see(labels.reasonForDivorceTab.livedApart);
    I.see(verifyContent.D8LivedApartSinceDesertion);
  }

  // Legal Connections

  I.see(labels.jurisdictionTab.legalConnections);
  I.see(verifyContent.D8Connections.A);
  I.see(verifyContent.D8Connections.C);
  I.see(labels.jurisdictionTab.livedTogether);
  I.see(verifyContent.D8DerivedLivingArrangementsLastLivedAddr);

}
