const I = actor();

const { paymentType } = require('../common/constants');

module.exports = {

  fields: {
    submit: 'button[type="submit"]'
  },

  fillFormAndSubmit(paymentMethod) {
    I.see('Case submission');
    if (paymentMethod === paymentType.FEE_ACCOUNT) {
      I.see('Your fee account reference: Next case submitted');
    } else if (paymentMethod === paymentMethod.HWF) {
      I.see('Help with fee reference: HWF-123-456');
    }
    I.click(this.fields.submit);
    I.wait(1);
  }
};