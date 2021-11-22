const I = actor();
const testConfig = require('../tests/config');

module.exports = {

  fields: {
    selectActionDropDown: 'select[id="next-step"]',
    caseNumberDisplayDemo: 'ccd-case-edit ccd-case-edit-page ccd-markdown markdown p',
    caseNumberDisplay: 'ccd-markdown[class="ng-star-inserted"] p',
    submit: 'button[type="submit"]'
  },

  async fillFormAndSubmit() {
    await I.wait(5);
    await I.waitForElement(this.fields.selectActionDropDown);
    await I.selectOption(this.fields.selectActionDropDown, 'Case submission');
    await I.waitForNavigationToComplete(this.fields.submit);
    const displayField = testConfig.TestEnv === 'demo'? this.fields.caseNumberDisplayDemo: this.fields.caseNumberDisplay;
    await I.waitForElement(displayField);
    const display = await I.grabTextFrom(displayField);
    await I.wait(1);
    return display;
  }

};