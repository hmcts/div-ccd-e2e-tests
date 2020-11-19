const I = actor();

const { reasonsForDivorce } = require('../common/constants');

module.exports = {

  fields: {
    fact: '#D8ReasonForDivorce',
    submit: 'button[type="submit"]'
  },

  fillFormAndSubmit() {
    I.seeInCurrentUrl('solicitorCreateSolReasonForDivorce');
    I.selectOption(this.fields.fact, reasonsForDivorce.ADULTERY);
    I.click(this.fields.submit);
  }
};