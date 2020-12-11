const I = actor();
const labels = require('../data/tab-fields/language.json');
const { firstLetterToCaps } = require('../helpers/utils');
const { reasonsForDivorce } = require('../common/constants');

module.exports = async (reason, verifyContent) => {
    await I.clickTab(labels.name);
    I.see(labels.prefWelsh);
    I.see(firstLetterToCaps(verifyContent.LanguagePreferenceWelsh));
    if(reasonsForDivorce.ADULTERY == reason) {
        I.see(labels.adulteryTimeLivedTogetherDetailsDNTrans);
        I.see(verifyContent.AdulteryTimeLivedTogetherDetailsDNTrans);
    } else if(reasonsForDivorce.BEHAVIOUR == reason) {
        I.see(labels.behaviourTimeLivedTogetherDetailsDNTrans);
        I.see(verifyContent.BehaviourTimeLivedTogetherDetailsDNTrans);
    } else if (reasonsForDivorce.DESERTION == reason) {
        I.see(labels.desertionTimeLivedTogetherDetailsDNTrans);
        I.see(verifyContent.DesertionTimeLivedTogetherDetailsDNTrans);
    } else if ([reasonsForDivorce.SEPFIVEYRS, reasonsForDivorce.SEPTWOYRS].includes(reason)) {
        I.see(labels.separationTimeLivedTogetherDetailsDNTrans);
        I.see(verifyContent.SeparationTimeLivedTogetherDetailsDNTrans);
    }
    I.see(labels.stateWhatPetClaim);
    I.see(verifyContent.CostsDifferentDetailsTrans);
}
