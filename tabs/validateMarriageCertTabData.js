const I = actor();
const { firstLetterToCaps, formatDateToCcdDisplayDate } = require('../helpers/utils');
const labels = require('../data/tab-fields/marriageCertificate.json');

module.exports = async (verifyContent) => {
  await I.clickTab(labels.name);
  I.see(labels.petitionerFullNameMarriageCertificate);
  I.see(verifyContent.D8MarriagePetitionerName);
  I.see(labels.respondnetFullNameMarriageCertificate);
  I.see(verifyContent.D8MarriageRespondentName);
  I.see(labels.dateofMarriage);
  I.see(formatDateToCcdDisplayDate(new Date(verifyContent.D8MarriageDate)));
  I.see(labels.isMarriageTookPlaceInUK);
  I.see(firstLetterToCaps(verifyContent.D8MarriedInUk));
  I.see(labels.placeOfMarriage);
  I.see(verifyContent.D8MarriagePlaceOfMarriage);
}
