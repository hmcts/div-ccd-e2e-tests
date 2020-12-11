const I = actor();
const labels = require('../data/tab-fields/confidentialPetitioner.json');

module.exports = async (verifyContent) => {
  await I.clickTab(labels.name);
  I.see(labels.petitionerServiceAddress);
  I.see(verifyContent.D8DerivedPetitionerCorrespondenceAddr);
  I.see(labels.petitionerEmail);
  I.see(verifyContent.D8PetitionerEmail);
  I.see(labels.petitionerHomeAddress);
  I.see(verifyContent.D8DerivedPetitionerHomeAddress);
}
