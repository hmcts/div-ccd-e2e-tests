const I = actor();

module.exports = {

  fields: {
    notFromAnotherPerson: '#reasonForDivorceAdulterySecondHandInfo_Yes',
    submit: 'input[type="submit"]'
  },

  metadata: {
    url: 'adultery/second-hand-information'
  },

  async selectNoAndContinue() {
    await I.waitInUrl(this.metadata.url);
    await I.runAccessibilityTest();
    await I.click(this.fields.notFromAnotherPerson);
    await I.waitForNavigationToComplete(this.fields.submit);
    await I.wait(1);
  }
};