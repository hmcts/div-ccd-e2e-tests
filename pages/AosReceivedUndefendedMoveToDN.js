const I = actor();

module.exports = {
  
  fields: {
    selectActionDropDown: 'select[id="next-step"]',
    submit: 'button[type="submit"]',
    selectDNReason: 'select[id="PermittedDecreeNisiReason"]'
  },

  fillFormAndSubmit() {
    I.waitForElement(this.fields.selectActionDropDown);
    I.selectOption(this.fields.selectActionDropDown, 'AOS Received (undefended)');
    I.wait(1);
    I.click(this.fields.submit);
    I.selectOption(this.fields.selectDNReason, 'Undefended divorce with Respondent agreement');
    I.waitForVisible(this.fields.submit);
    I.click(this.fields.submit);
    I.wait(1);
    I.waitForVisible(this.fields.submit);
    I.click(this.fields.submit);
  }
};