const I = actor();

module.exports = {

  fields: {
    hasMarriageCertificate: '#screenHasMarriageCert_Yes',
    submit: 'button[type="submit"]'
  },

  metadata: {
    url: 'financial/advice'
  },

  async selectYesAndSubmit() {
    await I.waitInUrl(this.metadata.url);
    await I.runAccessibilityTest();
    await I.click(this.fields.hasPartnersAddress);
    await I.waitForNavigationToComplete(this.fields.submit);
    await I.wait(1);
  }
};