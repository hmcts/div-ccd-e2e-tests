const I = actor();

module.exports = {

  fields: {
    howPaymentMade: 'select[id="SolPaymentHowToPay"]',  
    enterYourAccountNumber: '#SolicitorFeeAccountNumber', 
    enterYourPreference: '#FeeAccountReference', 
    submit: 'button[type="submit"]',
  },

  fillFormAndSubmit() {
    I.wait(10);
    I.click(this.fields.howPaymentMade);
    I.selectOption('select[id=SolPaymentHowToPay', 'feePayByAccount');
    I.wait(5);
    I.fillField(this.fields.enterYourAccountNumber, 'PBA1234908');
    I.wait(5);
    I.fillField(this.fields.enterYourPreference, 'Next case submitted');
    I.click(this.fields.submit);
    I.wait(3);
  }
}