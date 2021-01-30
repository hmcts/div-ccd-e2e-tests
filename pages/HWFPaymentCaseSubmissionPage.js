const I = actor();

const { paymentType } = require('../common/constants');

module.exports = {

  fields: {
    howPaymentMade: 'select[id="SolPaymentHowToPay"]',
    hwfRefNumTitle: '#D8HelpWithFeesReferenceNumber',
    submit: 'button[type="submit"]',

  },

  async fillFormAndSubmit() {
    await I.wait(1);
    await I.click(this.fields.howPaymentMade);
    await I.selectOption(this.fields.howPaymentMade, paymentType.HWF);
    await I.click(this.fields.submit);

    await I.waitForElement(this.fields.hwfRefNumTitle);
    await I.fillField(this.fields.hwfRefNumTitle, 'HWF-123-456');
    await I.click(this.fields.submit);
    await I.wait(1);
  }
};