const I = actor();

module.exports = {

  fields: {
    applyToClaimCosts: '#yes',
    submit: 'input[type="submit"]'
  },

  metadata: {
    url: 'about-divorce/claim-costs'
  },

  async selectYesAndContinue() {
    await I.waitInUrl(this.metadata.url);
    await I.runAccessibilityTest();
    await I.click(this.fields.applyToClaimCosts);
    await I.waitForNavigationToComplete(this.fields.submit);
    await I.wait(1);
  }
};