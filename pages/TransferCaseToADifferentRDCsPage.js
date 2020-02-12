const I = actor();

module.exports = {

  fields: {
    RDCOptional: '#D8DivorceUnit',
    submit: 'button[type="submit"]'
  },

  fillFormAndSubmit() {
    I.wait(1);
    I.selectOption(this.fields.RDCOptional, 'Courts and Tribunals Service Centre');
    I.click(this.fields.submit);
    I.wait(2);
  }
};