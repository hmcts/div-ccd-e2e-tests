const I = actor();

const { reasonsForDivorce } = require('../common/constants');

module.exports = {

  fields: {
    fact: '#D8ReasonForDivorce',
    submit: 'button[type="submit"]'
  },

  async fillFormAndSubmit() {
    await I.waitInUrl('solicitorCreateSolReasonForDivorce');
    await I.runAccessibilityTest();
    await I.selectOption(this.fields.fact, reasonsForDivorce.ADULTERY);
    await I.waitForNavigationToComplete(this.fields.submit);
  }
};