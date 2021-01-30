const I = actor();

module.exports = {

  fields: {
    eventSummary: '#field-trigger-summary',
    eventDescription: '#field-trigger-description',
    submit: 'button[type="submit"]'
  },

  async fillFormAndSubmit() {
    await I.waitForElement(this.fields.eventSummary, 20);
    await I.fillField(this.fields.eventSummary, 'This is event summary field');
    await I.fillField(this.fields.eventDescription, 'This is event description field and its optional');
    await I.waitForElement(this.fields.submit, 20);
    await I.click(this.fields.submit);
    await I.wait(1);
  }
};