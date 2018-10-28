const I = actor();

module.exports = {

  fields: {
    submit: 'button[type="submit"]',
  },

  fillFormAndSubmit() {
    I.seeInCurrentUrl('solicitorStatementOfTruthPaySubmitSolPaymentSummary');
    I.see('Case submission');
    I.see('Order Summary');
    I.see('Your fee account reference: Next case submitted');
    I.click(this.fields.submit);
    I.wait(5)
  }
}