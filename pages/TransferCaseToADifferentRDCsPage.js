const I = actor();

module.exports = {

  fields: {
    RDCOptional: '#D8DivorceUnit',
    submit: 'button[type="submit"]'
  },

  fillFormAndSubmit() {
    I.wait(3);
    I.selectOption(this.fields.RDCOptional, 'serviceCentre');
    I.click(this.fields.submit);
    I.wait(5);
  }
};