const I = actor();

module.exports = {

  fields: {
    submit: 'input[type="submit"]'
  },

  async selectContinue() {
    await I.waitInUrl('financial-remedy');
    await I.runAccessibilityTest();
    await I.waitForNavigationToComplete(this.fields.submit);
    await I.wait(1);
  }
};