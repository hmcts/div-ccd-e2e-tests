const I = actor();

module.exports = {

  fields: {
    wantHelpPayingFees: '#helpWithFeesNeedHelp_Yes',
    dontWantHelpPayingFees: '#helpWithFeesNeedHelp_No',
    submit: 'input[type="submit"]'
  },

  metadata: {
    url: 'need-help'
  },


  async selectYesAndContinue() {
    await I.waitInUrl(this.metadata.url);
    await I.runAccessibilityTest();
    await I.click(this.fields.wantHelpPayingFees);
    await I.waitForNavigationToComplete(this.fields.submit);
    await I.wait(1);
  },
  async selectNoAndContinue() {
    await I.waitInUrl(this.metadata.url);
    await I.runAccessibilityTest();
    await I.click(this.fields.dontWantHelpPayingFees);
    await I.waitForNavigationToComplete(this.fields.submit);
    await I.wait(1);
  }
};