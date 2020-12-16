const I = actor();

const { paymentType } = require('../common/constants');

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
    I.selectOption(this.fields.howPaymentMade, paymentType.FEE_ACCOUNT);
    I.click(this.fields.submit);
    //I.fillField(this.fields.enterYourAccountNumber, 'PBA1234908');

    //All the pba numbers in the dropdown are not working. So, hardcoding for now.
    //const pbaNumber = await I.grabTextFrom(`${this.fields.selectPbaNumber} option:nth-child(2)`);
    I.selectOption(this.fields.selectPbaNumber, 'PBA0072626');
    I.fillField(this.fields.enterYourReference, 'Next case submitted');
    I.click(this.fields.submit);
    I.wait(1);
  }
};