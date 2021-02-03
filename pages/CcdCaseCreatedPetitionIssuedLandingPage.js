const I = actor();

module.exports = {

  fields: {
    selectActionDropDown: 'select[id="next-step"]',
    submit: 'button[type="submit"]'
  },

  async fillFormAndSubmit() {
    await I.waitForElement(this.fields.selectActionDropDown);
    await I.see('Petition issued');
    await I.selectOption(this.fields.selectActionDropDown, 'Issue AOS pack to respondent');
    await I.wait(1);
    await I.waitForNavigationToComplete(this.fields.submit);
    await I.wait(1);
  }

};