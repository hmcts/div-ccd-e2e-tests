const I = actor();

module.exports = {

  fields: {
    petitionerApplyForFinancialOrder: '#D8FinancialOrder_No',
    submit: 'button[type="submit"]'
  },

  async fillFormAndSubmit() {
    await I.waitInUrl('solicitorCreateSolDividingMoneyAndProperty');
    await I.runAccessibilityTest();
    await I.click(this.fields.petitionerApplyForFinancialOrder);
    await I.waitForNavigationToComplete(this.fields.submit);
    await I.wait(1);
  }
};
