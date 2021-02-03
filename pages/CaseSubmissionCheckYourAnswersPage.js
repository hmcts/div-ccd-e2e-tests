const I = actor();

module.exports = {

  fields: {
    submit: 'button[type="submit"]'
  },

  async fillFormAndSubmit() {
    await I.waitInUrl('solicitorStatementOfTruthPaySubmit/submit');
    await I.runAccessibilityTest();
    await I.see('Case submission');
    await I.see('Check your answers');
    await I.see('I am duly authorised by the petitioner to sign this statement.');
    await I.waitForNavigationToComplete(this.fields.submit);
    await I.wait(1);
  }
};