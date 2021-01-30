const I = actor();

const { paymentType } = require('../common/constants');

module.exports = {

  fields: {
    submit: 'button[type="submit"]'
  },

  async fillFormAndSubmit(paymentMethod) {
    await I.waitForText('Case submission');
    if (paymentMethod === paymentType.FEE_ACCOUNT) {
      await I.see('Your fee account reference: Next case submitted');
    } else if (paymentMethod === paymentMethod.HWF) {
      await I.see('Help with fee reference: HWF-123-456');
    }
    await I.click(this.fields.submit);
    await I.wait(1);
  }
};