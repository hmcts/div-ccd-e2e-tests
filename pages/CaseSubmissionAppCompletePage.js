const I = actor();

module.exports = {

  fields: {
    submit: 'button[type="submit"]'
  },

  async fillFormAndSubmit() {
    await I.waitInUrl('solicitorStatementOfTruthPaySubmitSolSummary');
    await I.runAccessibilityTest();
    await I.see('Before you submit');
    await I.see('0300 303 0642');
    await I.waitForNavigationToComplete(this.fields.submit);
    await I.wait(1);
  }
};