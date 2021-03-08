const I = actor();

module.exports = {

  fields: {
    yesUseThisAddress: '#respondentCorrespondenceUseHomeAddress_Yes',
    submit: 'button[type="submit"]'
  },

  metadata: {
    url: 'z'
  },

  async selectYesAndContinue() {
    await I.waitInUrl(this.metadata.url);
    await I.runAccessibilityTest();
    await I.click(this.fields.yesUseThisAddress);
    await I.waitForNavigationToComplete(this.fields.submit);
    await I.wait(1);
  }
};