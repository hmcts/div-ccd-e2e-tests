const I = actor();

module.exports = {

  fields: {
    confirmStatementOfTruth: 'select[id="confirmPrayer"]',
    submit: 'input[type="submit"]'
  },

  metadata: {
    url: 'check-your-answers'
  },

  async signFormAndSubmit() {
    await I.waitForElement(this.metadata.url);
    await I.selectOption(this.fields.confirmStatementOfTruth);
    await I.wait(1);
    await I.waitForNavigationToComplete(this.fields.submit);
    await I.wait(1);
  }
};