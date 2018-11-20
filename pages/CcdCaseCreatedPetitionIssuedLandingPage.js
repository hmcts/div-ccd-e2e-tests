const I = actor();

module.exports = {

  fields: {
    selectActionDropDown: 'select[id="next-step"]',
    submit: 'button[type="submit"]'
  },

  fillFormAndSubmit() {
    I.waitForElement(this.fields.selectActionDropDown, 20);  
    I.see('Petition issued');
    I.selectOption(this.fields.selectActionDropDown, 'Aos pack issue test');
    I.wait(3);
    I.waitForVisible(this.fields.submit);
    I.click(this.fields.submit);
    I.wait(2);
  }

}