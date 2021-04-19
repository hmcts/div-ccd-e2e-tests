const I = actor();
const { firstLetterToCaps, formatDateToCcdDisplayDate } = require('../helpers/utils');
const labels = require('../data/tab-fields/decreeNisi.json');
const { reasonsForDivorce } = require('../common/constants');

module.exports = async (reason, verifyContent) => {
  await I.clickTab(labels.name);
  await I.see(labels.continuewithDN);
  await I.see(firstLetterToCaps(verifyContent.DNApplyForDecreeNisi));
  await I.see(labels.dateOfDnSubmitted);
  await I.see(formatDateToCcdDisplayDate(new Date(verifyContent.DNApplicationSubmittedDate)));
  await I.see(labels.isEverythingStatedDivPetition);
  await I.see(firstLetterToCaps(verifyContent.statementOfTruthDN));
  if(reasonsForDivorce.BEHAVIOURDISPLAY === reason) {
    await I.see(labels.isBehaviourStillHapp);
    await I.see(firstLetterToCaps(verifyContent.BehaviourStillHappeningDN));
  }
  // } else if(reasonsForDivorce.DESERTIONDISPLAY === reason) {
  //   await I.see(labels.livedApart);
  //   await I.see(firstLetterToCaps(verifyContent.DesertionLivedApartSinceEventDN));
  // }
  // else if ([reasonsForDivorce.SEPFIVEYRSDISPLAY, reasonsForDivorce.SEPTWOYRSDISPLAY].includes(reason)) {
  //   await I.see(labels.livedApart);
  //   await I.see(firstLetterToCaps(verifyContent.SeparationLivedApartSinceEventDN));
  // }
  await I.see(labels.petitionerCostAtDN);
  await I.see(labels.claimOriginalAmountText);
  await I.see(labels.petitionerFactsDnStage);
  await I.see(firstLetterToCaps(verifyContent.ConfirmPetitionDN));
};
