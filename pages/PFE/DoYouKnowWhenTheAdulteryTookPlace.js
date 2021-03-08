const I = actor();

module.exports = {

  fields: {
    doNotKnowWhereAdulteryTookPlace: '#reasonForDivorceAdulteryKnowWhen_No',
    submit: 'button[type="submit"]'
  },

  metadata: {
    url: 'adultery/when'
  },

  async selectNoAndContinue() {
    await I.waitInUrl(this.metadata.url);
    await I.runAccessibilityTest();
    await I.click(this.fields.doNotKnowWhereAdulteryTookPlace);
    await I.waitForNavigationToComplete(this.fields.submit);
    await I.wait(1);
  }
};