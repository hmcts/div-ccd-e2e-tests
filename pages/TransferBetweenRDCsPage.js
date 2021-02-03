const I = actor();

module.exports = {

  fields: {
    eventSummary: '#field-trigger-summary',
    eventDescription: '#field-trigger-description',
    submit: 'button[type="submit"]'
  },

  async fillFormAndSubmit() {
    await I.waitForElement(this.fields.eventSummary);
    await I.runAccessibilityTest();
    await I.fillField(this.fields.eventSummary, 'I am transferring from one RDC to CTSC');
    await I.fillField(this.fields.eventDescription, 'Event description for CTSC transfer');
    await I.waitForElement(this.fields.submit);
    await I.waitForNavigationToComplete(this.fields.submit);
    await I.wait(1);
  }
};