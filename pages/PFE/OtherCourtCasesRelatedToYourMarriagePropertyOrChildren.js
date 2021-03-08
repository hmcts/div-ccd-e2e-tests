const I = actor();

module.exports = {

  fields: {
    noLegalProceedings: '#legalProceedings_No',
    submit: 'button[type="submit"]'
  },

  metadata: {
    url: 'about-divorce/legal-proceedings'
  },

  async selectNoAndContinue() {
    await I.waitInUrl(this.metadata.url);
    await I.runAccessibilityTest();
    await I.click(this.fields.noLegalProceedings);
    await I.waitForNavigationToComplete(this.fields.submit);
    await I.wait(1);
  }
};