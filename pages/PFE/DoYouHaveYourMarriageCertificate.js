const I = actor();

module.exports = {

  fields: {
    hasMarriageCertificate: '#screenHasMarriageCert_Yes',
    submit: 'input[type="submit"]'
  },

  metadata: {
    url: 'screening-questions/marriage-certificate'
  },

  async selectYesAndSubmit() {
    await I.waitInUrl(this.metadata.url);
    await I.runAccessibilityTest();
    await I.click(this.fields.hasPartnersAddress);
    await I.waitForNavigationToComplete(this.fields.submit);
    await I.wait(1);
  }
};