const I = actor();
const labels = require('../data/tab-fields/confidentialPetitioner.json');

module.exports = (verifyContent) => {
  I.click(labels.confidentialPetitionerTab.name);
  I.see(labels.confidentialPetitionerTab.petitionerServiceAddress);
  I.see(verifyContent.D8DerivedPetitionerCorrespondenceAddr);
  I.see(labels.confidentialPetitionerTab.petitionerEmail);
  I.see(verifyContent.D8PetitionerEmail);
  I.see(labels.confidentialPetitionerTab.petitionerHomeAddress);
  I.see(verifyContent.D8DerivedPetitionerHomeAddress);
}
