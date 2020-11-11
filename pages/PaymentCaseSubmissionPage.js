const I = actor();

module.exports = {

  fields: {
    howPaymentMade: 'select[id="SolPaymentHowToPay"]',
    enterYourAccountNumber: '#SolicitorFeeAccountNumber',
    selectPbaNumber: '#PbaNumbers',
    enterYourReference: '#FeeAccountReference',
    submit: 'button[type="submit"]'
  },

  fillFormAndSubmit() {
    I.wait(1);
    I.click(this.fields.howPaymentMade);
    I.selectOption(this.fields.howPaymentMade, 'Fee account');
    I.click(this.fields.submit);
    //I.fillField(this.fields.enterYourAccountNumber, 'PBA1234908');
    I.selectOption(this.fields.selectPbaNumber, I.grabTextFrom('select option:nth-child(2)'));
    I.fillField(this.fields.enterYourReference, 'Next case submitted');
    I.click(this.fields.submit);
    I.wait(1);
  }
};