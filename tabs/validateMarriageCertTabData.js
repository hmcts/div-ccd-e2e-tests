const I = actor();
const { firstLetterToCaps, formatDateToCcdDisplayDate } = require('../helpers/utils');
const labels = require('../data/tab-fields/marriageCertificate.json');

module.exports = async (verifyContent) => {
  await I.clickTab(labels.name);
  await I.see(labels.petitionerFullNameMarriageCertificate);
  await I.see(verifyContent.D8MarriagePetitionerName);
  await I.see(labels.respondnetFullNameMarriageCertificate);
  await I.see(verifyContent.D8MarriageRespondentName);
  await I.see(labels.dateofMarriage);
  await I.see(formatDateToCcdDisplayDate(new Date(verifyContent.D8MarriageDate)));
  await I.see(labels.isMarriageTookPlaceInUK);
  await I.see(firstLetterToCaps(verifyContent.D8MarriedInUk));
  await I.see(labels.placeOfMarriage);
  await I.see(verifyContent.D8MarriagePlaceOfMarriage);
};
