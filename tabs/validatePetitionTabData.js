const I = actor();
const { firstLetterToCaps, formatDateToCcdDisplayDate } = require('../helpers/utils');
const labels = require('../data/tab-fields/petition.json');
const commonFields = require('../data/tab-fields/commonFields.json');
const { reasonsForDivorce } = require('../common/constants');


module.exports = (reason,verifyContent) => {
  I.click(labels.name);
  I.see(labels.rdc);
  I.see(labels.courtName);
  I.see(labels.petitionerFName);
  I.see(verifyContent.D8PetitionerFirstName);
  I.see(labels.petitionerLName);
  I.see(verifyContent.D8PetitionerLastName);
  I.see(labels.petionerGender);
  I.see(firstLetterToCaps(verifyContent.D8InferredPetitionerGender));
  I.see(labels.petitionerChangedName);
  I.see(firstLetterToCaps(verifyContent.D8PetitionerNameDifferentToMarriageCert));
  I.see(labels.placeOfMarriage);
  I.see(verifyContent.D8MarriagePlaceOfMarriage);
  I.see(labels.WhoPetitionerDivorcing);
  I.see(firstLetterToCaps(verifyContent.D8DivorceWho));
  I.see(labels.sameSexCouple);
  I.see(firstLetterToCaps(verifyContent.D8MarriageIsSameSexCouple));
  I.see(labels.petitionerFactsStated);
  I.see(commonFields.yes);
  I.see(labels.anyPreviousProceedings);
  I.see(firstLetterToCaps(verifyContent.D8LegalProceedings));

  //Respondent details
  I.see(labels.respondentFName);
  I.see(verifyContent.D8RespondentFirstName);
  I.see(labels.respondentLName);
  I.see(verifyContent.D8RespondentLastName);
  I.see(labels.respHomeAddress);
  I.see(verifyContent.D8DerivedRespondentHomeAddress);
  I.see(labels.respondentSerAdd);
  I.see(verifyContent.D8DerivedRespondentCorrespondenceAddr);
  I.see(labels.respondentConsentEmailComm);
  I.see(commonFields.yes);
  I.see(labels.respGender);
  I.see(firstLetterToCaps(verifyContent.D8InferredRespondentGender));

  I.see(labels.wishToApplyForFinancialOrder);
  I.see( firstLetterToCaps(verifyContent.D8FinancialOrder));
  if(reasonsForDivorce.ADULTERY == reason) {
    I.see(labels.applyForClaimCosts);
    I.see(firstLetterToCaps(verifyContent.D8DivorceCostsClaim));
  }
  if(reasonsForDivorce.BEHAVIOUR == reason) {
    I.see(labels.whoTheFinancialOrder);
    I.see(verifyContent.D8FinancialOrderFor[0]);
    I.see(labels.applyForClaimCosts);
    I.see(firstLetterToCaps(verifyContent.D8DivorceCostsClaim));
    I.see(labels.claimCostsFrom);
    I.see('Respondent');
  }
  I.see(labels.factsStated);
  I.see(firstLetterToCaps(verifyContent.D8StatementOfTruth));

  // Reason details
  I.see(labels.reasonForDivorce);
  I.see(reason);

  if(reasonsForDivorce.ADULTERY == reason) {
    I.see(labels.adulteryDetails);
    I.see(verifyContent.D8ReasonForDivorceAdulteryDetails);
    I.see(labels.nameOfCoRespondent);
    I.see(firstLetterToCaps(verifyContent.D8ReasonForDivorceAdulteryWishToName));
    I.see(labels.adulteryInfoThirdPartyDetails);
    I.see(verifyContent.D8ReasonForDivorceAdultery2ndHandDetails);
    I.see(labels.adulteryPetitionerKnowsWhen);
    I.see(firstLetterToCaps(verifyContent.D8ReasonForDivorceAdulteryKnowWhen));
    I.see(labels.detailsOfWhenAdulteryTookPlace);
    I.see(verifyContent.D8ReasonForDivorceAdulteryWhenDetails);
    I.see(labels.adulteryPetitionerKnowsWhere);
    I.see(firstLetterToCaps(verifyContent.D8ReasonForDivorceAdulteryKnowWhere));
    I.see(labels.detailsOfWhereAdulteryTookPlace);
    I.see(verifyContent.D8ReasonForDivorceAdulteryWhereDetails);
  } else if(reasonsForDivorce.BEHAVIOUR == reason) {
    I.see(labels.behaviourDetails);
    I.see(verifyContent.D8DerivedStatementOfCase);
  } else if (reasonsForDivorce.DESERTION == reason) {
    I.see(labels.respondentLeaveWithoutAgreement);
    I.see(verifyContent.D8ReasonForDivorceDesertionAgreed);
    I.see(labels.desertionDetails);
    I.see(verifyContent.D8ReasonForDivorceDesertionDetails);
    I.see(labels.desertionDate);
    I.see(formatDateToCcdDisplayDate(new Date(verifyContent.D8ReasonForDivorceDesertionDate)));
    I.see(labels.livedApart);
    I.see(verifyContent.D8LivedApartSinceDesertion);
  }

  // Legal Connections

  I.see(labels.legalConnections);
  I.see(verifyContent.D8Connections.A);
  I.see(verifyContent.D8Connections.C);
  I.see(labels.livedTogether);
  I.see(verifyContent.D8DerivedLivingArrangementsLastLivedAddr);

}
