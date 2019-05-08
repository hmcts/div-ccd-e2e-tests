const I = actor();

module.exports = {

  fields: {
    eventSummary: '#field-trigger-summary',
    eventDescription: '#field-trigger-description',
    submit: 'button[type="submit"]'
  },

  fillFormAndSubmit() {
    I.waitForElement(this.fields.eventSummary, 20);
    I.fillField(this.fields.eventSummary, 'This is Issue AOS pack to respondent event summary field');
    I.fillField(this.fields.eventDescription, 'This is formerly Aos pack issue event description field and its optional');
    I.waitForElement(this.fields.submit, 20);
    I.click(this.fields.submit);
    I.wait(3);
  }
};