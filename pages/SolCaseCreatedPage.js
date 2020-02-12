const I = actor();

module.exports = {

  fields: {
    selectActionDropDown: 'select[id="next-step"]',
    caseNumberDisplay: 'ccd-case-edit ccd-case-edit-page .heading-h2',
    submit: 'button[type="submit"]'
  },

  async fillFormAndSubmit() {
    I.waitForElement(this.fields.selectActionDropDown, 10);
    I.selectOption(this.fields.selectActionDropDown, 'Case submission');
    I.click(this.fields.submit);
    I.wait(2);
    const display = await I.grabTextFrom(this.fields.caseNumberDisplay);
    I.waitForVisible(this.fields.submit);
    I.click(this.fields.submit);
    I.wait(2);
    return display;
  }

};