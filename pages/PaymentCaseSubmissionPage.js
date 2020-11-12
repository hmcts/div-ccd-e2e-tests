const I = actor();

module.exports = {

  fields: {
    howPaymentMade: 'select[id="SolPaymentHowToPay"]',
    enterYourAccountNumber: '#SolicitorFeeAccountNumber',
    selectPbaNumber: 'select[id="PbaNumbers"]',
    enterYourReference: '#FeeAccountReference',
    submit: 'button[type="submit"]'
  },

  fillFormAndSubmit() {
    I.wait(1);
    I.click(this.fields.howPaymentMade);
    I.selectOption(this.fields.howPaymentMade, 'Fee account');
    I.click(this.fields.submit);
    //I.fillField(this.fields.enterYourAccountNumber, 'PBA1234908');
    const pbaNumbers = await I.grabTextFromAll(`${this.fields.selectPbaNumber} option`);
    const pbaNumbers1 = await I.grabValueFrom(`${this.fields.selectPbaNumber} option`);
    const pbaNumbers2 = await I.grabValueFromAll(`${this.fields.selectPbaNumber} option`);
    const pbaNumber = await I.grabTextFrom(`${this.fields.selectPbaNumber} option:nth-child(2)`);

    console.log('the values are1 ..',  pbaNumbers1);
    console.log('the values are2 ..',  pbaNumbers2);

    console.log('the values are ..',  pbaNumbers);
    console.log('the value is ..',  pbaNumber);
    I.selectOption(this.fields.selectPbaNumber, pbaNumber);
    I.fillField(this.fields.enterYourReference, 'Next case submitted');
    I.click(this.fields.submit);
    I.wait(1);
  }
};