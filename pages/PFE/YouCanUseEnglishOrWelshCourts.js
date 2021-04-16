const I = actor();

module.exports = {

  fields: {
    confidentThatConnectionIsRight: '#jurisdictionConfidentLegal_Yes',
    submit: 'input[type="submit"]'
  },

  metadata: {
    url: 'interstitial'
  },

  async selectConfidentSelectionIsRightAndContinue() {
    await I.waitInUrl(this.metadata.url);
    await I.runAccessibilityTest();
    await I.click(this.fields.confidentThatConnectionIsRight);
    await I.waitForNavigationToComplete(this.fields.submit);
    await I.wait(1);
  }
};