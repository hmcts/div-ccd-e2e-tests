const I = actor();

const { paymentType } = require('../common/constants');

module.exports = {

  fields: {
    submit: 'button[type="submit"]'
  },

  async fillFormAndSubmit(paymentMethod) {
    await I.waitForText('Case submission');
    await I.runAccessibilityTest();
    await I.click(this.fields.submit);
    await I.wait(60);
  }
};