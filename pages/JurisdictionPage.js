const I = actor();

module.exports = {

  fields: {
    legalConnections: '#D8JurisdictionConnection-A',
    submit: 'button[type="submit"]'
  },

  async selectLegalActionsAndSubmit() {
    await I.see('The Petitioner and the Respondent are habitually resident in England and Wales');
    await I.click(this.fields.legalConnections);
    await I.click(this.fields.submit);
    await I.wait(1);
  }
};