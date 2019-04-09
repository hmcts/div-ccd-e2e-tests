const I = actor();

module.exports = {

  fields: {
    selectActionDropDown: 'select[id="next-step"]',
    caseNumberDisplay: 'ccd-case-header .heading-h1',
    submit: 'button[type="submit"]'
  },

  async fillFormAndSubmit() {
    I.waitForElement(this.fields.selectActionDropDown, 20);
    I.selectOption(this.fields.selectActionDropDown, 'Case submission');
    const display = await I.grabTextFrom(this.fields.caseNumberDisplay)
    I.waitForVisible(this.fields.submit);
    I.click(this.fields.submit);
    I.wait(2);
    return display;
  }

}