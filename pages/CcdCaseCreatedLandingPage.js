const I = actor();

module.exports = {

  fields: {
    selectActionDropDown: 'select[id="next-step"]',
    submit: 'button[type="submit"]'
  },

  fillFormAndSubmit() {
    I.waitForElement(this.fields.selectActionDropDown, 10);  
    I.see('Petition submitted');
    I.selectOption(this.fields.selectActionDropDown, 'Issue');
    I.wait(3);
    I.waitForVisible(this.fields.submit);
    I.click(this.fields.submit);
    I.wait(2);
  }

}