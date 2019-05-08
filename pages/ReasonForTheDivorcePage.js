const I = actor();

module.exports = {

  fields: {
    fact: '#D8ReasonForDivorce',
    submit: 'button[type="submit"]'
  },

  fillFormAndSubmit() {
    I.seeInCurrentUrl('solicitorCreateSolReasonForDivorce');
    I.selectOption(this.fields.fact, 'adultery');
    I.click(this.fields.submit);
    I.wait(5);
  }
};