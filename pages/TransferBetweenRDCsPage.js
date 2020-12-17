const I = actor();

module.exports = {

  fields: {
    eventSummary: '#field-trigger-summary',
    eventDescription: '#field-trigger-description',
    submit: 'button[type="submit"]'
  },

  fillFormAndSubmit() {
    I.waitForElement(this.fields.eventSummary);
    I.fillField(this.fields.eventSummary, 'I am transferring from one RDC to CTSC');
    I.fillField(this.fields.eventDescription, 'Event description for CTSC transfer');
    I.waitForElement(this.fields.submit);
    I.click(this.fields.submit);
    I.wait(1);
  }
};