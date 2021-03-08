const I = actor();

module.exports = {

  fields: {
    hasPartnersAddress: '#screenHasRespondentAddress_Yes',
    submit: 'button[type="submit"]'
  },

  metadata: {
    url: 'respondent-address'
  },


  async selectYesAndSubmit() {
    await I.waitInUrl(this.metadata.url);
    await I.runAccessibilityTest();
    await I.click(this.fields.hasPartnersAddress);
    await I.waitForNavigationToComplete(this.fields.submit);
    await I.wait(1);
  }
};