const I = actor();

module.exports = {

  fields: {
    iDontNeedMyAddressKeptPrivate: '#petitionerContactDetailsConfidential_share',
    keepMyAddressPrivate : '#petitionerContactDetailsConfidential_keep',
    submit: 'button[type="submit"]'
  },

  metadata: {
    url: 'petitioner-respondent/confidential'
  },

  async selectIDontNeedMyAddressKeptPrivateAndContinue() {
    await I.waitInUrl(this.metadata.url);
    await I.runAccessibilityTest();
    await I.click(this.fields.iDontNeedMyAddressKeptPrivate);
    await I.waitForNavigationToComplete(this.fields.submit);
    await I.wait(1);
  },
  async selectKeepMyAddressPrivateAndContinue() {
    await I.waitInUrl(this.metadata.url);
    await I.runAccessibilityTest();
    await I.click(this.fields.keepMyAddressPrivate);
    await I.waitForNavigationToComplete(this.fields.submit);
    await I.wait(1);
  }
};