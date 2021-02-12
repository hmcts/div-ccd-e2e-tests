const I = actor();

module.exports = {

  fields: {
    firstName: '#D8RespondentFirstName',
    lastName: '#D8RespondentLastName',
    respondentChangedName: '#D8RespondentNameAsOnMarriageCertificate-No',
    respondentGender: '#D8InferredRespondentGender',
    wishToEffectServiceOnRespondent: '#PetitionerSolicitorToEffectService-Yes',
    respondentUsingASolicitor: '#D8RespondentCorrespondenceSendToSol-No',
    respondentServiceAddress: '#D8DerivedRespondentCorrespondenceAddr',
    submit: 'button[type="submit"]'
  },

  async fillFormAndSubmit() {
    await I.waitForElement(this.fields.firstName);
    await I.runAccessibilityTest();
    await I.fillField(this.fields.firstName, 'Tasha');
    await I.fillField(this.fields.lastName, 'St Patrick');
    await I.click(this.fields.respondentChangedName);
    await I.selectOption(this.fields.respondentGender, 'Female');
    await I.wait(1);
    await I.waitForNavigationToComplete(this.fields.submit);
  }
};
