const I = actor();

module.exports = {

  fields: {
    selectActionDropDown: 'select[id="next-step"]',
    submit: 'button[type="submit"]',
    eventSummary: '#field-trigger-summary'
  },

  async fillFormAndSubmit() {
    await I.selectOption(this.fields.selectActionDropDown, 'Issued To Bailiff Test');
    await I.wait(1);
    await I.waitForNavigationToComplete(this.fields.submit);
    await I.wait(1);

    await I.waitForElement(this.fields.eventSummary);
    await I.waitForNavigationToComplete(this.fields.submit);
  }
};
