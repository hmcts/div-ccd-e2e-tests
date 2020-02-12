const I = actor();

module.exports = {

  fields: {
    submit: 'button[type="submit"]'
  },

  fillFormAndSubmit() {
    I.seeInCurrentUrl('solicitorStatementOfTruthPaySubmitSolSummary');
    I.see('Before you submit');
    I.see('0300 303 0642');
    I.click(this.fields.submit);
    I.wait(1);
  }
};