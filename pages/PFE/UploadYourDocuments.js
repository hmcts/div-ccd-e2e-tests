const I = actor();

module.exports = {

  fields: {
    submit: 'input[type="submit"]'
  },

  metadata: {
    url: 'petitioner-respondent/marriage-certificate-upload'
  },

  async selectContinue() {
    await I.waitInUrl(this.metadata.url);
    await I.runAccessibilityTest();
    await I.waitForNavigationToComplete(this.fields.submit);
    await I.wait(1);
  }
};