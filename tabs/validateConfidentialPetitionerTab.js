const I = actor();
const labels = require('../data/tab-fields/confidentialPetitioner.json');

module.exports = async (verifyContent) => {
  await I.clickTab(labels.name);
  await I.see(labels.petitionerServiceAddress);
  await I.see(verifyContent.D8DerivedPetitionerCorrespondenceAddr);
  await I.see(labels.petitionerEmail);
  await I.see(verifyContent.D8PetitionerEmail);
  await I.see(labels.petitionerHomeAddress);
  await I.see(verifyContent.D8DerivedPetitionerHomeAddress);
};
