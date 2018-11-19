const I = actor();

module.exports = {

  fields: {
    firstName: '#D8PetitionerFirstName',
    lastName: '#D8PetitionerLastName',
    petitionerChangedName: '#D8PetitionerNameDifferentToMarriageCert-No',
    petitionerGender: '#D8InferredPetitionerGender',
    petitionerRespondentSameSex: '#D8MarriageIsSameSexCouple-No',
    petitionerHomeAddress: '#D8DerivedPetitionerHomeAddress',
    petitionerPhoneNumber: '#D8PetitionerPhoneNumber',
    petitionerEmailAddress: '#D8PetitionerEmail',
    keepPetitionerContactDetails: '#D8PetitionerContactDetailsConfidential',
    petitionerEmailAddress: '#D8PetitionerEmail',
    submit: 'button[type="submit"]'
  },

  fillFormAndSubmit() {
    I.waitForElement(this.fields.firstName, 20);
    I.fillField(this.fields.firstName, 'James');
    I.fillField(this.fields.lastName, 'St Patrick');
    I.click(this.fields.petitionerChangedName);
    I.selectOption(this.fields.petitionerGender, 'male');
    I.click(this.fields.petitionerRespondentSameSex);
    I.fillField(this.fields.petitionerHomeAddress, '300 Central London, W2 3MU');
    I.fillField(this.fields.petitionerPhoneNumber, '01789029090');
    I.fillField(this.fields.petitionerEmailAddress, 'JamesStPatrick@power.com');
    I.selectOption(this.fields.keepPetitionerContactDetails, 'share');
    I.click(this.fields.submit);
  }
}