const I = actor();

module.exports = {

  fields: {
    divorcingMyHusband: '#divorceWho_husband',
    divorcingMyWife: '#divorceWho_wife',
    submit: 'input[type="submit"]'
  },

  metadata: {
    url: 'about-your-marriage/details'
  },

  async selectHusbandAndContinue() {
    await I.waitInUrl(this.metadata.url);
    await I.runAccessibilityTest();
    await I.click(this.fields.divorcingMyHusband);
    await I.waitForNavigationToComplete(this.fields.submit);
    await I.wait(1);
  },
  async selectWifeAndContinue() {
    await I.waitInUrl(this.metadata.url);
    await I.runAccessibilityTest();
    await I.click(this.fields.divorcingMyWife);
    await I.waitForNavigationToComplete(this.fields.submit);
    await I.wait(1);
  }
};