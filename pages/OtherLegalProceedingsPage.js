const I = actor();

module.exports = {

  fields: {
    existingCourtProceedings: '#D8LegalProceedings-No',
    submit: 'button[type="submit"]'
  },

  fillFormAndSubmit() {
    I.seeInCurrentUrl('solicitorCreateSolExistingCourtCases');
    I.click(this.fields.existingCourtProceedings);
    I.click(this.fields.submit);
    I.wait(1);
  }
};