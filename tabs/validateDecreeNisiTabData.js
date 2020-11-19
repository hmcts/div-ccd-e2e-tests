const I = actor();
const { firstLetterToCaps } = require('../helpers/utils');
const labels = require('../data/tab-fields/decreeNisi.json');
const { reasonsForDivorce } = require('../common/constants')

module.exports = (reason, verifyContent) => {
  if(reasonsForDivorce.BEHAVIOUR == reason) {
    I.click(labels.dnAnswers.name);
    I.see(labels.dnAnswers.continuewithDN);
    I.see(firstLetterToCaps(verifyContent.DNApplyForDecreeNisi));
    I.see(labels.dnAnswers.dateOfDnSubmitted);
    I.see(labels.dnAnswers.isEverythingStatedDivPetition);
    I.see(firstLetterToCaps(verifyContent.statementOfTruthDN));
    I.see(labels.dnAnswers.isBehaviourStillHapp);
    I.see(firstLetterToCaps(verifyContent.BehaviourStillHappeningDN));
    I.see(labels.dnAnswers.petitionerCostAtDN);
    I.see(labels.dnAnswers.claimOriginalAmountText);
    I.see(labels.dnAnswers.petitionerFactsDnStage);
    I.see(firstLetterToCaps(verifyContent.ConfirmPetitionDN));
  }
}
