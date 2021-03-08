const I = actor();

module.exports = {

  fields: {
    petitionerFirstName: '#petitionerFirstName',
    petitionerLastName: '#petitionerLastName',
    respondentLastName: '#respondentFirstName',
    respondentFirstName: '#respondentLastName',
    submit: 'button[type="submit"]'
  },

  metadata: {
    url: 'petitioner-respondent/names'
  },

  async enterPetitionerAndRespondentNamesAndContinue() {
    await I.waitInUrl(this.metadata.url);
    await I.runAccessibilityTest();
    await I.fillField(this.fields.petitionerFirstName, 'Peter');
    await I.fillField(this.fields.petitionerLastName, 'Petitioneir');
    await I.fillField(this.fields.respondentFirstName, 'Remmie');
    await I.fillField(this.fields.respondentLastName, 'Respondentie');
    await I.waitForNavigationToComplete(this.fields.selectContinue);
    await I.wait(1);
  }
};