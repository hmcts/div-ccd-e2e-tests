const I = actor();

module.exports = {

  fields: {
    RDCOptional: '#D8DivorceUnit',
    submit: 'button[type="submit"]'
  },

  async fillFormAndSubmit() {
    await I.waitForElement(this.fields.submit);
    await I.selectOption(this.fields.RDCOptional, 'Courts and Tribunals Service Centre');
    await I.waitForNavigationToComplete(this.fields.submit);
    await I.wait(1);
  }
};