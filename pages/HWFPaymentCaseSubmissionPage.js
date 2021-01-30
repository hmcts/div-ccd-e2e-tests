const I = actor();

const { paymentType } = require('../common/constants');

module.exports = {

  fields: {
    howPaymentMade: 'select[id="SolPaymentHowToPay"]',
    hwfRefNumTitle: '#D8HelpWithFeesReferenceNumber',
    submit: 'button[type="submit"]',

  },

  async fillFormAndSubmit() {
    I.wait(10);
    I.click(this.fields.howPaymentMade);
    I.selectOption(this.fields.howPaymentMade, paymentType.HWF);
    I.click(this.fields.submit);

    I.waitForElement(this.fields.hwfRefNumTitle);
    I.fillField(this.fields.hwfRefNumTitle, 'HWF-123-456');
    I.click(this.fields.submit);
    I.wait(1);
  }
};