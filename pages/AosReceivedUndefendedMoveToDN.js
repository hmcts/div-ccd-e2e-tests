const I = actor();

module.exports = {
  
  fields: {
    selectActionDropDown: 'select[id="next-step"]',
    submit: 'button[type="submit"]',
    selectDNReason: 'select[id="PermittedDecreeNisiReason"]'
  },

  async fillFormAndSubmit() {
    await I.waitForElement(this.fields.selectActionDropDown);
    await I.selectOption(this.fields.selectActionDropDown, 'AOS Received (undefended)');
    await I.wait(1);
    await I.click(this.fields.submit);
    await I.selectOption(this.fields.selectDNReason, 'Undefended divorce with Respondent agreement');
    await I.waitForVisible(this.fields.submit);
    await I.click(this.fields.submit);
    await I.wait(1);
    await I.waitForVisible(this.fields.submit);
    await I.click(this.fields.submit);
  }
};