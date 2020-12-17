const I = actor();

module.exports = {

  fields: {
    selectActionDropDown: 'select[id="next-step"]',
    submit: 'button[type="submit"]'
  },

  fillFormAndSubmit() {
    I.waitForElement(this.fields.selectActionDropDown);
    I.see('Petition submitted');
    I.selectOption(this.fields.selectActionDropDown, 'Transfer between RDCs');
    I.wait(1);
    I.waitForVisible(this.fields.submit);
    I.click(this.fields.submit);
    I.wait(1);
  }

};