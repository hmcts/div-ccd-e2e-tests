const I = actor();

module.exports = {

  fields: {
    existingCourtProceedings: '#D8LegalProceedings-No',
    submit: 'button[type="submit"]'
  },

  async fillFormAndSubmit() {
    await I.waitInUrl('solicitorCreateSolExistingCourtCases');
    await I.click(this.fields.existingCourtProceedings);
    await I.click(this.fields.submit);
    await I.wait(1);
  }
};