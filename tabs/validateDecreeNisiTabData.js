const I = actor();
const { firstLetterToCaps } = require('../helpers/utils');
const labels = require('../data/tab-fields/decreeNisi.json');
const { reasonsForDivorce } = require('../common/constants');

module.exports = (reason, verifyContent) => {
  if(reasonsForDivorce.BEHAVIOUR == reason) {
    I.click(labels.name);
    I.see(labels.continuewithDN);
    I.see(firstLetterToCaps(verifyContent.DNApplyForDecreeNisi));
    I.see(labels.dateOfDnSubmitted);
    I.see(labels.isEverythingStatedDivPetition);
    I.see(firstLetterToCaps(verifyContent.statementOfTruthDN));
    I.see(labels.isBehaviourStillHapp);
    I.see(firstLetterToCaps(verifyContent.BehaviourStillHappeningDN));
    I.see(labels.petitionerCostAtDN);
    I.see(labels.claimOriginalAmountText);
    I.see(labels.petitionerFactsDnStage);
    I.see(firstLetterToCaps(verifyContent.ConfirmPetitionDN));
  }
}
