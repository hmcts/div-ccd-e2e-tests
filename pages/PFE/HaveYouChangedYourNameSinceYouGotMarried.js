const I = actor();

module.exports = {

  fields: {
    haveNotChangedName: '#petitionerNameDifferentToMarriageCertificate_No',
    submit: 'input[type="submit"]'
  },

  metadata: {
    url: 'changed-name'
  },

  async selectNoAndContinue() {
    await I.waitInUrl(this.metadata.url);
    await I.runAccessibilityTest();
    await I.click(this.fields.haveNotChangedName);
    await I.waitForNavigationToComplete(this.fields.submit);
    await I.wait(1);
  }
};