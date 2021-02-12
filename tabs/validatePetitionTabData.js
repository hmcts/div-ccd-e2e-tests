const I = actor();
const { firstLetterToCaps, formatDateToCcdDisplayDate } = require('../helpers/utils');
const labels = require('../data/tab-fields/petition.json');
const commonFields = require('../data/tab-fields/commonFields.json');
const { reasonsForDivorce } = require('../common/constants');


module.exports = async (reason, verifyContent) => {
  await I.clickTab(labels.name);
  await I.see(labels.rdc);
  await I.see(labels.courtName);
  await I.see(labels.petitionerFName);
  await I.see(verifyContent.D8PetitionerFirstName);
  await I.see(labels.petitionerLName);
  await I.see(verifyContent.D8PetitionerLastName);
  await I.see(labels.petionerGender);
  await I.see(firstLetterToCaps(verifyContent.D8InferredPetitionerGender));
  await I.see(labels.petitionerChangedName);
  await I.see(firstLetterToCaps(verifyContent.D8PetitionerNameDifferentToMarriageCert));
  await I.see(labels.placeOfMarriage);
  await I.see(verifyContent.D8MarriagePlaceOfMarriage);
  await I.see(labels.WhoPetitionerDivorcing);
  await I.see(firstLetterToCaps(verifyContent.D8DivorceWho));
  await I.see(labels.sameSexCouple);
  await I.see(firstLetterToCaps(verifyContent.D8MarriageIsSameSexCouple));
  await I.see(labels.petitionerFactsStated);
  await I.see(commonFields.yes);
  await I.see(labels.anyPreviousProceedings);
  await I.see(firstLetterToCaps(verifyContent.D8LegalProceedings));

  //Respondent details
  await I.see(labels.respondentFName);
  await I.see(verifyContent.D8RespondentFirstName);
  await I.see(labels.respondentLName);
  await I.see(verifyContent.D8RespondentLastName);
  await I.see(labels.respHomeAddress);
  await I.see(verifyContent.D8DerivedRespondentHomeAddress);
  await I.see(labels.respondentSerAdd);
  await I.see(verifyContent.D8DerivedRespondentCorrespondenceAddr);
  await I.see(labels.respondentConsentEmailComm);
  await I.see(commonFields.yes);
  await I.see(labels.respGender);
  await I.see(firstLetterToCaps(verifyContent.D8InferredRespondentGender));

  await I.see(labels.wishToApplyForFinancialOrder);
  await I.see( firstLetterToCaps(verifyContent.D8FinancialOrder));
  if(reasonsForDivorce.ADULTERYDISPLAY === reason) {
    await I.see(labels.applyForClaimCosts);
    await I.see(firstLetterToCaps(verifyContent.D8DivorceCostsClaim));
  }
  if(reasonsForDivorce.BEHAVIOURDISPLAY === reason) {
    await I.see(labels.whoTheFinancialOrder);
    await I.see(verifyContent.D8FinancialOrderFor[0]);
    await I.see(labels.applyForClaimCosts);
    await I.see(firstLetterToCaps(verifyContent.D8DivorceCostsClaim));
    await I.see(labels.claimCostsFrom);
    await I.see('Respondent');
  }

  await I.see(labels.factsStated);
  await I.see(firstLetterToCaps(verifyContent.D8StatementOfTruth));

  // Reason details
  await I.see(labels.reasonForDivorce);
  await I.see(reason);

  if(reasonsForDivorce.ADULTERYDISPLAY === reason) {
    await I.see(labels.adulteryDetails);
    await I.see(verifyContent.D8ReasonForDivorceAdulteryDetails);
    await I.see(labels.nameOfCoRespondent);
    await I.see(firstLetterToCaps(verifyContent.D8ReasonForDivorceAdulteryWishToName));
    await I.see(labels.adulteryInfoThirdPartyDetails);
    await I.see(verifyContent.D8ReasonForDivorceAdultery2ndHandDetails);
    await I.see(labels.adulteryPetitionerKnowsWhen);
    await I.see(firstLetterToCaps(verifyContent.D8ReasonForDivorceAdulteryKnowWhen));
    await I.see(labels.detailsOfWhenAdulteryTookPlace);
    await I.see(verifyContent.D8ReasonForDivorceAdulteryWhenDetails);
    await I.see(labels.adulteryPetitionerKnowsWhere);
    await I.see(firstLetterToCaps(verifyContent.D8ReasonForDivorceAdulteryKnowWhere));
    await I.see(labels.detailsOfWhereAdulteryTookPlace);
    await I.see(verifyContent.D8ReasonForDivorceAdulteryWhereDetails);
  } else if(reasonsForDivorce.BEHAVIOURDISPLAY === reason) {
    await I.see(labels.behaviourDetails);
    await I.see(verifyContent.D8DerivedStatementOfCase);
  } else if (reasonsForDivorce.DESERTIONDISPLAY === reason) {
    await I.see(labels.respondentLeaveWithoutAgreement);
    await I.see(verifyContent.D8ReasonForDivorceDesertionAgreed);
    await I.see(labels.desertionDetails);
    await I.see(verifyContent.D8ReasonForDivorceDesertionDetails);
    await I.see(labels.desertionDate);
    await I.see(formatDateToCcdDisplayDate(new Date(verifyContent.D8ReasonForDivorceDesertionDate)));
    await I.see(labels.livedApart);
    await I.see(verifyContent.D8LivedApartSinceDesertion);
  } else if (reasonsForDivorce.SEPFIVEYRSDISPLAY === reason || reasonsForDivorce.SEPTWOYRSDISPLAY === reason ) {
    await I.see(labels.d8MentalSeparationDate);
    await I.see(formatDateToCcdDisplayDate(new Date(verifyContent.D8MentalSeparationDate)));
    await I.see(labels.d8PhysicalSeparationDate);
    await I.see(formatDateToCcdDisplayDate(new Date(verifyContent.D8PhysicalSeparationDate)));
    await I.see(labels.d8ReasonForDivorceSeperationDate);
    await I.see(formatDateToCcdDisplayDate(new Date(verifyContent.D8PhysicalSeparationDate)));
    await I.see(labels.d8LivedApartSinceSeparation);
    await I.see(firstLetterToCaps(verifyContent.D8LivedApartSinceSeparation));
  }

  // Legal Connections
  await I.see(labels.legalConnections);
  await I.see(verifyContent.D8Connections.A);
  await I.see(verifyContent.D8Connections.C);
  await I.see(labels.livedTogether);
  await I.see(verifyContent.D8DerivedLivingArrangementsLastLivedAddr);
};
