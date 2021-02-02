const I = actor();

module.exports = {

  fields: {
    submit: 'button[type="submit"]'
  },

  async fillFormAndSubmit() {
    await I.waitInUrl('solicitorCreate/submit');
    await I.runAccessibilityTest();
    await I.see('Check your answers');
    await I.see('Check the information below carefully.');
    await I.waitForNavigationToComplete(this.fields.submit);
  }
};