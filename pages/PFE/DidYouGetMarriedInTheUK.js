const I = actor();

module.exports = {

  fields: {
    marriedInUK: '#marriedInUk_Yes',
    submit: 'button[type="submit"]'
  },

  metadata: {
    url: 'in-the-uk'
  },

  async selectMarriedInUKAndContinue() {
    await I.waitInUrl(this.metadata.url);
    await I.runAccessibilityTest();
    await I.click(this.fields.marriedInUK);
    await I.waitForNavigationToComplete(this.fields.submit);
    await I.wait(1);
  }
};