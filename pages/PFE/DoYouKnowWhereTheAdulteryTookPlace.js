const I = actor();

module.exports = {

  fields: {
    doNotKnowWhereAdulteryTookPlace: '#reasonForDivorceAdulteryKnowWhere_No',
    submit: 'button[type="submit"]'
  },

  metadata: {
    url: 'adultery/where'
  },

  async selectNoAndContinue() {
    await I.waitInUrl(this.metadata.url);
    await I.runAccessibilityTest();
    await I.click(this.fields.doNotKnowWhereAdulteryTookPlace);
    await I.waitForNavigationToComplete(this.fields.submit);
    await I.wait(1);
  }
};