const I = actor();

module.exports = {

  fields: {
    petitionerApplyForFinancialOrder: '#D8FinancialOrder-No',
    submit: 'button[type="submit"]'
  },

  fillFormAndSubmit() {
    I.seeInCurrentUrl('solicitorCreateSolDividingMoneyAndProperty');
    I.click(this.fields.petitionerApplyForFinancialOrder);
    I.click(this.fields.submit);
    I.wait(3);
  }
};