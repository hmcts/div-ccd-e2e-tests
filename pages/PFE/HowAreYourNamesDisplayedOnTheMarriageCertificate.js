const I = actor();

module.exports = {

  fields: {
    petitionerFullLegalName: '#marriagePetitionerName',
    respondentFullLegalName: '#marriageRespondentName',
    submit: 'button[type="submit"]'
  },

  metadata: {
    url: 'petitioner-respondent/names-on-certificate'
  },

  async enterBothPartiesNames() {
    await I.waitInUrl(this.metadata.url);
    await I.runAccessibilityTest();
    await I.fillField(this.fields.petitionerFullLegalName, 'Peter Petitioneir');
    await I.fillField(this.fields.respondentFullLegalName, 'Remmie Respondentie');
    await I.waitForNavigationToComplete(this.fields.submit);
    await I.wait(1);
  }
};