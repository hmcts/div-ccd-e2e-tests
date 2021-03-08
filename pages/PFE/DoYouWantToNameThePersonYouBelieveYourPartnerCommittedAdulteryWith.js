const I = actor();

module.exports = {

  fields: {
    doNotNameThirdParty: '#reasonForDivorceAdulteryWishToName_No',
    submit: 'button[type="submit"]'
  },

  metadata: {
    url: 'adultery/wish-to-name'
  },

  async selectNoAndContinue() {
    await I.waitInUrl(this.metadata.url);
    await I.runAccessibilityTest();
    await I.click(this.fields.doNotNameThirdParty);
    await I.waitForNavigationToComplete(this.fields.submit);
    await I.wait(1);
  }
};