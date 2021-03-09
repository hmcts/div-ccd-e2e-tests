const I = actor();

module.exports = {

  fields: {
    reasonAdultery: '#adultery',
    submit: 'input[type="submit"]'
  },

  metadata: {
    url: 'about-divorce/reason-for-divorce/reason'
  },

  async selectAdulteryAndContinue() {
    await I.waitInUrl(this.metadata.url);
    await I.runAccessibilityTest();
    await I.click(this.fields.reasonAdultery);
    await I.waitForNavigationToComplete(this.fields.submit);
    await I.wait(1);
  }
};