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
    await I.wait(1);
    await I.click(this.fields.howPaymentMade);
    await I.selectOption(this.fields.howPaymentMade, paymentType.FEE_ACCOUNT);
    await I.click(this.fields.submit);
    //await I.fillField(this.fields.enterYourAccountNumber, 'PBA1234908');

    //All the pba numbers in the dropdown are not working. So, hardcoding for now.
    //const pbaNumber = await await I.grabTextFrom(`${this.fields.selectPbaNumber} option:nth-child(2)`);
    await I.selectOption(this.fields.selectPbaNumber, 'PBA0072626');
    await I.fillField(this.fields.enterYourReference, 'Next case submitted');
    await I.click(this.fields.submit);
    await I.wait(1);
  }
};