const I = actor();

module.exports = {

  fields: {
    wantHelpPayingFees: '#helpWithFeesNeedHelp_Yes',
    dontWantHelpPayingFees: '#helpWithFeesNeedHelp_No',
    submit: 'button[type="submit"]'
  },

  async selectYesAndContinue() {
    await I.waitInUrl('need-help');
    await I.runAccessibilityTest();
    await I.click(this.fields.wantHelpPayingFees);
    await I.waitForNavigationToComplete(this.fields.selectContinue);
    await I.wait(1);
  },
  async selectNoAndContinue() {
    await I.waitInUrl('need-help');
    await I.runAccessibilityTest();
    await I.click(this.fields.dontWantHelpPayingFees);
    await I.waitForNavigationToComplete(this.fields.selectContinue);
    await I.wait(1);
  }
};