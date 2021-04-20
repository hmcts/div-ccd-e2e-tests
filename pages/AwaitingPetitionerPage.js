const I = actor();

module.exports = {

  fields: {
    selectActionDropDown: 'select[id="next-step"]',
    eventSummary: '#field-trigger-summary',
    submit: 'button[type="submit"]'
  },

  async fillFormAndSubmit() {
    await I.selectOption(this.fields.selectActionDropDown, 'Awaiting petitioner');
    await I.wait(1);
    await I.waitForNavigationToComplete(this.fields.submit);
    await I.wait(1);
    await I.waitForElement(this.fields.eventSummary);
    await I.runAccessibilityTest();
    await I.waitForElement(this.fields.submit);
    await I.waitForNavigationToComplete(this.fields.submit);
    await I.wait(1);
  }
};
