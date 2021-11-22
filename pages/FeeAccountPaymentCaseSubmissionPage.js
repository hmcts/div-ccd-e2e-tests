const I = actor();

const { Test } = require('mocha');
const { paymentType, demoVariables, aatVariables } = require('../common/constants');
const testConfig = require('../tests/config');

module.exports = {

  fields: {
    howPaymentMade: 'select[id="SolPaymentHowToPay"]',
    enterYourAccountNumber: '#SolicitorFeeAccountNumber',
    selectPbaNumber: 'select[id="PbaNumbers"]',
    enterYourReference: '#FeeAccountReference',
    submit: 'button[type="submit"]'
  },

  async fillFormAndSubmit() {
    const variables = testConfig.TestEnv === 'demo'? demoVariables: aatVariables;
    await I.waitForElement(this.fields.howPaymentMade);
    await I.runAccessibilityTest();
    await I.selectOption(this.fields.howPaymentMade, paymentType.FEE_ACCOUNT);
    await I.waitForNavigationToComplete(this.fields.submit);
    await I.waitForElement(this.fields.selectPbaNumber);
    await I.selectOption(this.fields.selectPbaNumber, variables.solicitorPBANumber);
    await I.wait(1);
    await I.fillField(this.fields.enterYourReference, 'Next case submitted');
    await I.waitForNavigationToComplete(this.fields.submit);
    await I.wait(1);
  }
};
