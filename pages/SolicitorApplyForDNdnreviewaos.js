const I = actor();

module.exports = {

  fields: {
    applyForDNYes: '#DNApplyForDecreeNisi-Yes',
    submit: 'button[type="submit"]'
  },

  async fillFormAndSubmit() {
    await I.waitInUrl('solicitorApplyForDNdnreviewaos');
    await I.runAccessibilityTest();
    await I.click(this.fields.applyForDNYes);
    await I.waitForNavigationToComplete(this.fields.submit);
    await I.wait(1);
  }
};