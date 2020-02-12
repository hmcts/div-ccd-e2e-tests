const I = actor();

module.exports = {

  fields: {
    selectActionDropDown: 'select[id="next-step"]',
    submit: 'button[type="submit"]'
  },

  fillFormAndSubmit() {
    I.waitForElement(this.fields.selectActionDropDown, 20);
    I.see('Petition submitted');
    I.click('//a[contains(.,\'Petition\')]');
    I.wait(1);
    I.see('Courts and Tribunals Service Centre');
    I.selectOption(this.fields.selectActionDropDown, 'Issue');
    I.wait(1);
    I.waitForVisible(this.fields.submit);
    I.click(this.fields.submit);
    I.wait(1);
  }

};