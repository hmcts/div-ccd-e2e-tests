const I = actor();

module.exports = {

  fields: {
    eventSummary: '#field-trigger-summary',
    eventDescription: '#field-trigger-description',
    submit: 'button[type="submit"]'
  },

  async fillFormAndSubmit() {
    await I.runAccessibilityTest();
    await I.waitForElement(this.fields.eventSummary);
    await I.fillField(this.fields.eventSummary, 'This is event summary field');
    await I.fillField(this.fields.eventDescription, 'This is event description field and its optional');
    await I.waitForElement(this.fields.submit);
    await I.waitForNavigationToComplete(this.fields.submit);
    await I.wait(1);
  }
};