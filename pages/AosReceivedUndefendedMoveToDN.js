const I = actor();

module.exports = {
  
  fields: {
    selectActionDropDown: 'select[id="next-step"]',
    submit: 'button[type="submit"]',
    selectDNReason: 'select[id="PermittedDecreeNisiReason"]'
  },

  async fillFormAndSubmit() {
    await I.waitForElement(this.fields.selectActionDropDown);
    await I.runAccessibilityTest();
    await I.selectOption(this.fields.selectActionDropDown, 'AOS Received (undefended)');
    await I.wait(1);
    await I.waitForNavigationToComplete(this.fields.submit);
    await I.waitForElement(this.fields.selectDNReason);
    await I.selectOption(this.fields.selectDNReason, 'Undefended divorce with Respondent agreement');
    await I.waitForNavigationToComplete(this.fields.submit);
    await I.wait(1);
    await I.waitForNavigationToComplete(this.fields.submit);
  }
};