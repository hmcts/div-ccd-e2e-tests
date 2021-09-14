const I = actor();

module.exports = {

  fields: {
    existingCourtProceedings: '#D8LegalProceedings_No',
    submit: 'button[type="submit"]'
  },

  async fillFormAndSubmit() {
    await I.waitInUrl('solicitorCreateSolExistingCourtCases');
    await I.runAccessibilityTest();
    await I.click(this.fields.existingCourtProceedings);
    await I.waitForNavigationToComplete(this.fields.submit);
    await I.wait(1);
  }
};
