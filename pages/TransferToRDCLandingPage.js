const I = actor();

module.exports = {

  fields: {
    selectActionDropDown: 'select[id="next-step"]',
    submit: 'button[type="submit"]'
  },

  fillFormAndSubmit() {
    I.waitForElement(this.fields.selectActionDropDown);
    I.see('Petition submitted');
    I.clickTab('Petition');
    I.wait(1);
    I.see('Courts and Tribunals Service Centre');
  }

};