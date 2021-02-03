const I = actor();
const {eventDisplayName} = require('../common/constants');

module.exports = {
  
  fields: {
    selectActionDropDown: 'select[id="next-step"]',
    submit: 'button[type="submit"]',
    selectDNReason: 'select[id="PermittedDecreeNisiReason"]',
    eventSummary: '#field-trigger-summary'
  },

  async fillFormAndSubmit() {
    await I.waitForElement(this.fields.selectActionDropDown);
    await I.runAccessibilityTest();
    await I.selectOption(this.fields.selectActionDropDown, eventDisplayName.AOS_RECVD_UNDEFENDED);
    await I.wait(1);
    await I.waitForNavigationToComplete(this.fields.submit);
    await I.waitForElement(this.fields.selectDNReason);
    await I.selectOption(this.fields.selectDNReason, 'Undefended divorce with Respondent agreement');
    await I.click('#RespConfirmReadPetition-Yes');
    await I.waitForNavigationToComplete(this.fields.submit);
    await I.waitForElement(this.fields.eventSummary);
    await I.waitForNavigationToComplete(this.fields.submit);
    await I.wait(2);
  }
};