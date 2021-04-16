const I = actor();

module.exports = {

  fields: {
    knowledgeOfAdultery: '#reasonForDivorceAdulteryDetails',
    submit: 'input[type="submit"]'
  },

  metadata: {
    url: 'adultery/details'
  },

  async enterInformationAndContinue() {
    await I.waitInUrl(this.metadata.url);
    await I.runAccessibilityTest();
    await I.fillField(this.fields.knowledgeOfAdultery, 'I know about abc.');
    await I.waitForNavigationToComplete(this.fields.submit);
    await I.wait(1);
  }
};