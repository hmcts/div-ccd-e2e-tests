const I = actor();
const labels = require('../data/tab-fields/language.json');
const { firstLetterToCaps } = require('../helpers/utils');
const { reasonsForDivorce } = require('../common/constants');

module.exports = async (reason, verifyContent) => {
  await I.clickTab(labels.name);
  await I.see(labels.prefWelsh);
  await I.see(firstLetterToCaps(verifyContent.LanguagePreferenceWelsh));
  if(reasonsForDivorce.ADULTERYDISPLAY === reason) {
    await I.see(labels.adulteryTimeLivedTogetherDetailsDNTrans);
    await I.see(verifyContent.AdulteryTimeLivedTogetherDetailsDNTrans);
  } else if(reasonsForDivorce.BEHAVIOURDISPLAY === reason) {
    await I.see(labels.behaviourTimeLivedTogetherDetailsDNTrans);
    await I.see(verifyContent.BehaviourTimeLivedTogetherDetailsDNTrans);
  } else if (reasonsForDivorce.DESERTIONDISPLAY === reason) {
    await I.see(labels.desertionTimeLivedTogetherDetailsDNTrans);
    await I.see(verifyContent.DesertionTimeLivedTogetherDetailsDNTrans);
  } else if ([reasonsForDivorce.SEPFIVEYRSDISPLAY, reasonsForDivorce.SEPTWOYRSDISPLAY].includes(reason)) {
    await I.see(labels.separationTimeLivedTogetherDetailsDNTrans);
    await I.see(verifyContent.SeparationTimeLivedTogetherDetailsDNTrans);
  }
  await I.see(labels.stateWhatPetClaim);
  await I.see(verifyContent.CostsDifferentDetailsTrans);
};
