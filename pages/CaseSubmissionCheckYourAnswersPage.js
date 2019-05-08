const I = actor();

module.exports = {

  fields: {
    submit: 'button[type="submit"]'
  },

  fillFormAndSubmit() {
    I.seeInCurrentUrl('solicitorStatementOfTruthPaySubmit/submit');
    I.see('Case submission');
    I.see('Check your answers');
    I.see('I am duly authorised by the petitioner to sign this statement.');
    I.click(this.fields.submit);
    I.wait(5);
  }
};