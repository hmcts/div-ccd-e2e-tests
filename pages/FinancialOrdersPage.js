const I = actor();

module.exports = {

  fields: {
    petitionerApplyForFinancialOrder: '#D8FinancialOrder-No',
    submit: 'button[type="submit"]'
  },

  async fillFormAndSubmit() {
    await I.seeInCurrentUrl('solicitorCreateSolDividingMoneyAndProperty');
    await I.click(this.fields.petitionerApplyForFinancialOrder);
    await I.click(this.fields.submit);
    await I.wait(1);
  }
};