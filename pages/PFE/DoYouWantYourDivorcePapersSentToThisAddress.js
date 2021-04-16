const I = actor();

module.exports = {

  fields: {
    deliverToThisAddress: '#petitionerCorrespondenceUseHomeAddress_Yes',
    submit: 'input[type="submit"]'
  },

  metadata: {
    url: 'petitioner-respondent/petitioner-correspondence/use-home-address'
  },

  async selectDeliverToThisAddressAndContinue() {
    await I.waitInUrl(this.metadata.url);
    await I.runAccessibilityTest();
    await I.click(this.fields.deliverToThisAddress);
    await I.waitForNavigationToComplete(this.fields.submit);
    await I.wait(1);
  }
};