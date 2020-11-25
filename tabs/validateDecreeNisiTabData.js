const I = actor();
const { firstLetterToCaps, formatDateToCcdDisplayDate } = require('../helpers/utils');
const labels = require('../data/tab-fields/decreeNisi.json');
const { reasonsForDivorce } = require('../common/constants');

module.exports = (reason, verifyContent) => {
  I.click(labels.name);
  I.see(labels.continuewithDN);
  I.see(firstLetterToCaps(verifyContent.DNApplyForDecreeNisi));
  I.see(labels.dateOfDnSubmitted);
  I.see(formatDateToCcdDisplayDate(new Date(verifyContent.DNApplicationSubmittedDate)));
  I.see(labels.isEverythingStatedDivPetition);
  I.see(firstLetterToCaps(verifyContent.statementOfTruthDN));
  if(reasonsForDivorce.BEHAVIOUR == reason) {
    I.see(labels.isBehaviourStillHapp);
    I.see(firstLetterToCaps(verifyContent.BehaviourStillHappeningDN));
  } else if(reasonsForDivorce.DESERTION == reason) {
    I.see(labels.livedApart);
    I.see(firstLetterToCaps(verifyContent.DesertionLivedApartSinceEventDN));
  } else if ([reasonsForDivorce.SEPFIVEYRS, reasonsForDivorce.SEPTWOYRS].includes(reason)) {
    I.see(labels.livedApart);
    I.see(firstLetterToCaps(verifyContent.SeparationLivedApartSinceEventDN))
  }
  I.see(labels.petitionerCostAtDN);
  I.see(labels.claimOriginalAmountText);
  I.see(labels.petitionerFactsDnStage);
  I.see(firstLetterToCaps(verifyContent.ConfirmPetitionDN));
}
