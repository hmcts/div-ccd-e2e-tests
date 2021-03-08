const I = actor();

module.exports = {

  fields: {
    submit: 'button[type="submit"]'
  },

  async selectContinue() {
    await I.waitInUrl('financial-remedy');
    await I.runAccessibilityTest();
    await I.waitForNavigationToComplete(this.fields.submit);
    await I.wait(1);
  }
};