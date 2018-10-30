const I = actor();

module.exports = {

  fields: {
    legalConnections: '#D8JurisdictionConnection-A',
    submit: 'button[type="submit"]',
  },

  selectLegalActionsAndSubmit() {
    I.see('The Petitioner and the Respondent are habitually resident in England and Wales');
    I.click(this.fields.legalConnections);
    I.click(this.fields.submit);
    I.wait(3);
  }
}