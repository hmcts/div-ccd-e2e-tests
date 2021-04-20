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
    await I.waitForElement(this.fields.howPaymentMade);
    await I.runAccessibilityTest();
    await I.selectOption(this.fields.howPaymentMade, paymentType.FEE_ACCOUNT);
    await I.waitForNavigationToComplete(this.fields.submit);
    await I.waitForElement(this.fields.selectPbaNumber);
    await I.selectOption(this.fields.selectPbaNumber, 'PBA0077051');
    await I.wait(1);
    await I.fillField(this.fields.enterYourReference, 'Next case submitted');
    await I.waitForNavigationToComplete(this.fields.submit);
    await I.wait(1);
  }
};
