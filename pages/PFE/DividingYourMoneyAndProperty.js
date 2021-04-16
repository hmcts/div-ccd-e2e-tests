const I = actor();

module.exports = {

  fields: {
    applyForFinancialOrder: '#financialOrder_Yes',
    submit: 'input[type="submit"]'
  },

  dropdown: {
    financialOrderForPetitioner: '#petitioner',
    financialOrderForChildren: '#children'
  },

  metadata: {
    url: 'financial/arrangements'
  },

  async applyForFinancialOrderForPetitioner() {
    await I.waitInUrl(this.metadata.url);
    await I.runAccessibilityTest();
    await I.click(this.fields.applyForFinancialOrder);
    await I.selectOption(this.dropdown.financialOrderForPetitioner);
    await I.waitForNavigationToComplete(this.fields.submit);
    await I.wait(1);
  }
};