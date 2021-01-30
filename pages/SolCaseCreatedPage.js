const I = actor();

module.exports = {

  fields: {
    selectActionDropDown: 'select[id="next-step"]',
    caseNumberDisplay: 'ccd-case-edit ccd-case-edit-page .heading-h2',
    submit: 'button[type="submit"]'
  },

  async fillFormAndSubmit() {
    await I.waitForElement(this.fields.selectActionDropDown);
    await I.selectOption(this.fields.selectActionDropDown, 'Case submission');
    await I.click(this.fields.submit);
    await I.waitForElement(this.fields.caseNumberDisplay);
    const display = await I.grabTextFrom(this.fields.caseNumberDisplay);
    await I.waitForVisible(this.fields.submit);
    await I.click(this.fields.submit);
    await I.wait(1);
    return display;
  }

};