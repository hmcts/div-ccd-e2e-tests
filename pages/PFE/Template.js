const I = actor();

module.exports = {

  fields: {
    x: '#x',
    y: '#y',
    submit: 'button[type="submit"]'
  },

  metadata: {
    url: 'z'
  },

  async selectYesAndContinue() {
    await I.waitInUrl(this.metadata.url);
    await I.runAccessibilityTest();
    await I.click(this.fields.x);
    await I.waitForNavigationToComplete(this.fields.selectContinue);
    await I.wait(1);
  },
  async selectNoAndContinue() {
    await I.waitInUrl(this.metadata.url);
    await I.runAccessibilityTest();
    await I.click(this.fields.y);
    await I.waitForNavigationToComplete(this.fields.selectContinue);
    await I.wait(1);
  }
};