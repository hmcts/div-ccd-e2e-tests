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

  fillFormAndSubmit() {
    I.waitForElement(this.fields.firstName);
    I.fillField(this.fields.firstName, 'Tasha');
    I.fillField(this.fields.lastName, 'St Patrick');
    I.click(this.fields.respondentChangedName);
    I.selectOption(this.fields.respondentGender, 'Female');
    I.fillField(this.fields.respondentHomeAddress, '300 Central London, Lagos W2 3MU');
//    I.click(this.fields.respondentUsingASolicitor); // as respondentUsingASolicitor yes or no has removed now
    I.fillField(this.fields.respondentServiceAddress, '007 Peter Pan Road , E14 5RT');
    I.wait(2);
    I.click(this.fields.submit);
  }
};
