const I = actor();

module.exports = {

  fields: {
    firstName: '#D8RespondentFirstName',
    lastName: '#D8RespondentLastName',
    respondentChangedName: '#D8RespondentNameAsOnMarriageCertificate-No',
    respondentGender: '#D8InferredRespondentGender',
    respondentHomeAddress: '#D8DerivedRespondentHomeAddress',
    wishToEffectServiceOnRespondent: '#PetitionerSolicitorToEffectService-Yes',
    respondentUsingASolicitor: '#D8RespondentCorrespondenceSendToSol-No',
    respondentServiceAddress: '#D8DerivedRespondentCorrespondenceAddr',
    submit: 'button[type="submit"]'
  },

  async fillFormAndSubmit() {
    await I.waitForElement(this.fields.firstName);
    await I.fillField(this.fields.firstName, 'Tasha');
    await I.fillField(this.fields.lastName, 'St Patrick');
    await I.click(this.fields.respondentChangedName);
    await I.selectOption(this.fields.respondentGender, 'Female');
    await I.fillField(this.fields.respondentHomeAddress, '300 Central London, Lagos W2 3MU');
    // I.click(this.fields.respondentUsingASolicitor); // as respondentUsingASolicitor yes or no has removed now
    await I.fillField(this.fields.respondentServiceAddress, '007 Peter Pan Road , E14 5RT');
    await I.wait(1);
    await I.click(this.fields.submit);
  }
};
