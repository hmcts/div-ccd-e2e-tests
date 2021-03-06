const I = actor();

module.exports = {

  fields: {
    legalConnections: '#D8JurisdictionConnectionNewPolicy-A',
    submit: 'button[type="submit"]'
  },

  async selectLegalActionsAndSubmit() {
    await I.waitForText('The Petitioner and the Respondent are habitually resident in England and Wales');
    await I.runAccessibilityTest();
    await I.click(this.fields.legalConnections);
    await I.waitForNavigationToComplete(this.fields.submit);
    await I.wait(1);
  }
};