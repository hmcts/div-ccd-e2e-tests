const I = actor();

module.exports = {

  fields: {
    fact: '#D8ReasonForDivorce',
    submit: 'button[type="submit"]'
  },

  fillFormAndSubmit() {
    I.seeInCurrentUrl('solicitorCreateSolReasonForDivorce');
    I.selectOption(this.fields.fact, 'Adultery');
    I.click(this.fields.submit);
  }
};