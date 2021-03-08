const I = actor();

module.exports = {

  fields: {
    hasBrokenDownIrretrievably: '#screenHasMarriageBroken_Yes',
    submit: 'button[type="submit"]'
  },

  metadata: {
    url: 'has-marriage-broken'
  },

  async fillFormAndSubmit() {
    await I.waitInUrl(this.metadata.url);
    await I.runAccessibilityTest();
    await I.click(this.fields.hasBrokenDownIrretrievably);
    await I.waitForNavigationToComplete(this.fields.submit);
    await I.wait(1);
  }
};