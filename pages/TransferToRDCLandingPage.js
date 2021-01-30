const I = actor();

module.exports = {

  fields: {
    selectActionDropDown: 'select[id="next-step"]',
    submit: 'button[type="submit"]'
  },

  async fillFormAndSubmit() {
    await I.waitForElement(this.fields.selectActionDropDown);
    await I.see('Petition submitted');
    await I.clickTab('Petition');
    await I.wait(1);
    await I.see('Courts and Tribunals Service Centre');
  }

};