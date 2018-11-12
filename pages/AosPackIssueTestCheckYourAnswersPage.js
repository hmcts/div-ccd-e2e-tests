const I = actor();

module.exports = {

  fields: {
    eventSummary: '#field-trigger-summary',
    eventDescription: '#field-trigger-description',
    submit: 'button[type="submit"]'
  },

  fillFormAndSubmit() {
    I.waitForElement(this.fields.eventSummary, 10);
    I.fillField(this.fields.eventSummary, 'This is Aos pack issue event summary field');
    I.fillField(this.fields.eventDescription, 'This is Aos pack issue event description field and its optional');
    I.waitForElement(this.fields.submit, 10);
    I.click(this.fields.submit);
    I.wait(3);
  }
}