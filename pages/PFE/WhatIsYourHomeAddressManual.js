const I = actor();

module.exports = {

  fields: {
    enterPostcodeManually: '#addressManual',
    submit: 'button[type="submit"]'
  },

  metadata: {
    url: 'petitioner-respondent/address/manual'
  },

  async enterPostcodeManually() {
    await I.waitInUrl(this.metadata.url);
    await I.runAccessibilityTest();
    await I.fillField(this.fields.enterPostcodeManually, '64 Zoo Lane, Neverland Street, SW1A 1AA');
    await I.waitForNavigationToComplete(this.fields.submit);
    await I.wait(1);
  }
};