const I = actor();

module.exports = {

  fields: {
    hasBrokenDownIrretrievably: '#screenHasMarriageBroken_Yes',
    submit: 'button[type="submit"]'
  },

  async fillFormAndSubmit() {
    await I.waitInUrl('has-marriage-broken');
    await I.runAccessibilityTest();
    await I.click(this.fields.hasBrokenDownIrretrievably);
    await I.waitForNavigationToComplete(this.fields.submit);
    await I.wait(1);
  }
};