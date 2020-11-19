const I = actor();
const { firstLetterToCaps, formatDateToCcdDisplayDate } = require('../helpers/utils');
const labels = require('../data/tab-fields/marriageCertificate.json');

module.exports = (verifyContent) => {
  I.click(labels.marriageCertificateTab.name);
  I.see(labels.marriageCertificateTab.petitionerFullNameMarriageCertificate);
  I.see(verifyContent.D8MarriagePetitionerName);
  I.see(labels.marriageCertificateTab.respondnetFullNameMarriageCertificate);
  I.see(verifyContent.D8MarriageRespondentName);
  I.see(labels.marriageCertificateTab.dateofMarriage);
  I.see(formatDateToCcdDisplayDate(new Date(verifyContent.D8MarriageDate)));
  I.see(labels.marriageCertificateTab.isMarriageTookPlaceInUK);
  I.see(firstLetterToCaps(verifyContent.D8MarriedInUk));
  I.see(labels.marriageCertificateTab.placeOfMarriage);
  I.see(verifyContent.D8MarriagePlaceOfMarriage);
}
