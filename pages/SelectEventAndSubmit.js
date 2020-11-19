const I = actor();

module.exports = {

  fields: {
    selectActionDropDown: 'select[id="next-step"]',
    submit: 'button[type="submit"]'
  },


  fillFormAndSubmit(eventName) {
    I.waitForElement(this.fields.selectActionDropDown);
    I.selectOption(this.fields.selectActionDropDown, eventName);
    I.wait(1);
    I.click(this.fields.submit);
    I.wait(1);
    I.waitForVisible(this.fields.submit);
    I.click(this.fields.submit);
    I.wait(2);
  }
}