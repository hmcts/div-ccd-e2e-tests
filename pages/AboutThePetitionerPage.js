const I = actor();

module.exports = {

  fields: {
    firstName: '#D8PetitionerFirstName',
    lastName: '#D8PetitionerLastName',
    petitionerChangedName: '#D8PetitionerNameDifferentToMarriageCert_No',
    whoIsPetitionerDivorcing: '#D8DivorceWho',
    petitionerGender: '#D8InferredPetitionerGender',
    petitionerRespondentSameSex: '#D8MarriageIsSameSexCouple_No',
    petitionerHomeAddress: '#D8DerivedPetitionerHomeAddress',
    petitionerPhoneNumber: '#D8PetitionerPhoneNumber',
    petitionerEmailAddress: '#D8PetitionerEmail',
    keepPetitionerContactDetails: '#D8PetitionerContactDetailsConfidential',
    submit: 'button[type="submit"]'
  },

  async fillFormAndSubmit() {
    await I.waitForElement(this.fields.firstName);
    await I.runAccessibilityTest();
    await I.fillField(this.fields.firstName, 'James');
    await I.fillField(this.fields.lastName, 'St Patrick');
    await I.click(this.fields.petitionerChangedName);
    await I.selectOption(this.fields.whoIsPetitionerDivorcing, 'Wife');
    await I.selectOption(this.fields.petitionerGender, 'Male');
    await I.click(this.fields.petitionerRespondentSameSex);
    await I.fillField(this.fields.petitionerHomeAddress, '300 Central London, W2 3MU');
    await I.fillField(this.fields.petitionerPhoneNumber, '01789029090');
    await I.fillField(this.fields.petitionerEmailAddress, 'JamesStPatrick@power.com');
    await I.selectOption(this.fields.keepPetitionerContactDetails, '2: share');
    await I.waitForNavigationToComplete(this.fields.submit);
  }
};