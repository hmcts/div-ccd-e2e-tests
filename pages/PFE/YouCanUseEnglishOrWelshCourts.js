const I = actor();

module.exports = {

  fields: {
    confidentThatConnectionIsRight: '#jurisdictionConfidentLegal_Yes',
    submit: 'button[type="submit"]'
  },

  metadata: {
    url: 'interstitial'
  },

  async selectConfidentSelectionIsRightAndContinue() {
    await I.waitInUrl(this.metadata.url);
    await I.runAccessibilityTest();
    await I.click(this.fields.confidentThatConnectionIsRight);
    await I.waitForNavigationToComplete(this.fields.selectContinue);
    await I.wait(1);
  }
};