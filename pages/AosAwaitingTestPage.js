const I = actor();

module.exports = {

  fields: {
    eventSummary: '#field-trigger-summary',
    eventDescription: '#field-trigger-description',
    submit: 'button[type="submit"]'
  },

  fillFormAndSubmit() {
<<<<<<< HEAD
    I.waitForElement(this.fields.eventSummary, 10);
    I.fillField(this.fields.eventSummary, 'Aos Awaiting Test summary field');
    I.fillField(this.fields.eventDescription, 'AOS event description field and its optional');
    I.waitForElement(this.fields.submit, 10);
=======
    I.waitForElement(this.fields.eventSummary, 20);
    I.fillField(this.fields.eventSummary, 'Aos Awaiting Test summary field');
    I.fillField(this.fields.eventDescription, 'AOS event description field and its optional');
    I.waitForElement(this.fields.submit, 20);
>>>>>>> 023d652706abccc2e2af65b759a29a0b031ad487
    I.click(this.fields.submit);
    I.wait(3);
  }
}