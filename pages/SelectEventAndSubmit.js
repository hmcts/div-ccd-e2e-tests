const I = actor();

module.exports = {

  fields: {
    eventSummary: '#field-trigger-summary',
    selectActionDropDown: 'select[id="next-step"]',
    submit: 'button[type="submit"]'
  },


  async fillFormAndSubmit(eventName) {
    await I.waitForElement(this.fields.selectActionDropDown);
    await I.selectOption(this.fields.selectActionDropDown, eventName);
    await I.wait(1);
    await I.waitForNavigationToComplete(this.fields.submit);
    await I.waitForElement(this.fields.eventSummary);
    await I.waitForNavigationToComplete(this.fields.submit);
    await I.wait(1);
  }
};