const I = actor();

module.exports = {

  fields: {
    hasPartnersAddress: '#screenHasRespondentAddress_Yes',
    submit: 'button[type="submit"]'
  },

  async selectYesAndSubmit() {
    await I.waitInUrl('respondent-address');
    await I.runAccessibilityTest();
    await I.click(this.fields.hasPartnersAddress);
    await I.waitForNavigationToComplete(this.fields.submit);
    await I.wait(1);
  }
};