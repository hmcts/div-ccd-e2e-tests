const I = actor();

module.exports = {

  fields: {
    yesUseThisAddress: '#respondentCorrespondenceUseHomeAddress_Yes',
    submit: 'input[type="submit"]'
  },

  metadata: {
    url: 'respondent-correspondence/use-home-address'
  },

  async selectYesAndContinue() {
    await I.waitInUrl(this.metadata.url);
    await I.runAccessibilityTest();
    await I.click(this.fields.yesUseThisAddress);
    await I.waitForNavigationToComplete(this.fields.submit);
    await I.wait(1);
  }
};