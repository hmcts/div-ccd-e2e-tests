const I = actor();
const labels = require('../data/tab-fields/language.json');
const { firstLetterToCaps } = require('../helpers/utils');

module.exports = (verifyContent) => {
    I.click(labels.name);
    I.see(labels.prefWelsh);
    I.see(firstLetterToCaps(verifyContent.LanguagePreferenceWelsh));
    I.see(labels.changesToPetAtDN);
    I.see(labels.livingArrangementsDetails);
    I.see(labels.stateWhatPetClaim);
    I.see(verifyContent.CostsDifferentDetailsTrans);
}
