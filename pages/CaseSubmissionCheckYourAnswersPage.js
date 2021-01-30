const I = actor();

module.exports = {

  fields: {
    submit: 'button[type="submit"]'
  },

  async fillFormAndSubmit() {
    await I.waitInUrl('solicitorStatementOfTruthPaySubmit/submit', 10);
    await I.seeInCurrentUrl('solicitorStatementOfTruthPaySubmit/submit');
    await I.see('Case submission');
    await I.see('Check your answers');
    await I.see('I am duly authorised by the petitioner to sign this statement.');
    await I.click(this.fields.submit);
    await I.wait(1);
  }
};