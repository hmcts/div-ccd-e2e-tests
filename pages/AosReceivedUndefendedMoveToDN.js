const I = actor();
const {eventDisplayName} = require('../common/constants');

module.exports = {
  
  fields: {
    selectActionDropDown: 'select[id="next-step"]',
    submit: 'button[type="submit"]',
    selectDNReason: 'select[id="PermittedDecreeNisiReason"]',
    selectDNReasonLabel: 'Reason for AwaitingDecreeNisi?',
    eventSummary: '#field-trigger-summary',
    respConfirmReadYes: '#RespConfirmReadPetition-Yes',
    DNReasonValue: 'Undefended divorce with Respondent agreement'
  },

  async fillFormAndSubmit() {
    await I.waitForElement(this.fields.selectActionDropDown);
    await I.runAccessibilityTest();
    await I.selectOption(this.fields.selectActionDropDown, eventDisplayName.AOS_RECVD_UNDEFENDED);
    await I.wait(1);
    await I.waitForNavigationToComplete(this.fields.submit);
    const isSafariBrowser = await I.isSafariBrowser();
    if (isSafariBrowser) {
      await I.waitForClickable(this.fields.selectDNReason);
      await I.wait(5);
    } else {
      await I.waitForElement(this.fields.selectDNReason);
    }
    await I.retry(2).selectOption(this.fields.selectDNReasonLabel, this.fields.DNReasonValue);
    await I.wait(1);
    await I.click(this.fields.respConfirmReadYes);
    await I.waitForNavigationToComplete(this.fields.submit);
    await I.waitForElement(this.fields.eventSummary);
    await I.waitForNavigationToComplete(this.fields.submit);
    await I.wait(2);
  }
};