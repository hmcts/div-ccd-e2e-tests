const I = actor();

module.exports = {

  fields: {
    howPaymentMade: 'select[id="SolPaymentHowToPay"]',
    enterYourAccountNumber: '#SolicitorFeeAccountNumber',
    selectPbaNumber: 'select[id="PbaNumbers"]',
    enterYourReference: '#FeeAccountReference',
    submit: 'button[type="submit"]'
  },

  async fillFormAndSubmit() {
    I.wait(1);
    I.click(this.fields.howPaymentMade);
    I.selectOption(this.fields.howPaymentMade, 'Fee account');
    I.click(this.fields.submit);
    //I.fillField(this.fields.enterYourAccountNumber, 'PBA1234908');

    const pbaNumber = await I.grabTextFrom(`${this.fields.selectPbaNumber} option:nth-child(2)`);
    await I.selectOption(this.fields.selectPbaNumber, pbaNumber);
    await I.fillField(this.fields.enterYourReference, 'Next case submitted');
    await I.click(this.fields.submit);
    await I.wait(1);
  }
};