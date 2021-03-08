const I = actor();

module.exports = {

  fields: {
    submit: 'button[type="submit"]'
  },

  metadata: {
    url: 'start-page'
  },

  async selectContinue() {
    await I.waitInUrl(this.metadata.url);
    await I.runAccessibilityTest();
    await I.waitForNavigationToComplete(this.fields.submit);
    await I.wait(1);
  }
};