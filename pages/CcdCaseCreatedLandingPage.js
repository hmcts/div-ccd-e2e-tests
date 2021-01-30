const I = actor();

module.exports = {

  fields: {
    selectActionDropDown: 'select[id="next-step"]',
    submit: 'button[type="submit"]'
  },

  async fillFormAndSubmit() {
    await I.waitForElement(this.fields.selectActionDropDown, 20);
    await I.see('Petition submitted');
    await I.selectOption(this.fields.selectActionDropDown, 'Transfer between RDCs');
    await I.wait(1);
    await I.waitForVisible(this.fields.submit);
    await I.click(this.fields.submit);
    await I.wait(1);
  }

};