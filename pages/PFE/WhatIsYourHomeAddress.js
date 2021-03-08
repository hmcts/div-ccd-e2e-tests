const I = actor();

module.exports = {

  fields: {
    enterPostcodeManually: '#enter-manual',
    submit: 'button[type="submit"]'
  },

  metadata: {
    url: 'petitioner-respondent/address'
  },

  async selectICantEnterUkPostcode() {
    await I.waitInUrl(this.metadata.url);
    await I.runAccessibilityTest();
    await I.click(this.fields.enterPostcodeManually);
    await I.wait(1);
  }
};