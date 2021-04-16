const I = actor();
const {eventDisplayName} = require('../common/constants');

module.exports = {
  
  fields: {
    selectActionDropDown: 'select[id="next-step"]',
    dnDateFieldText: 'Decree Nisi granted date',
    dnPronouncementJudgeText: 'Pronouncement Judge',
    dnGrantedDateDay: '#DecreeNisiGrantedDate-day',
    dnGrantedDateMonth: '#DecreeNisiGrantedDate-month',
    dnGrantedDateYear: '#DecreeNisiGrantedDate-year',
    dnPronouncementJudgeField: '#PronouncementJudge',
    submit: 'button[type="submit"]',
    eventSummary: '#field-trigger-summary'
  },

  async fillFormAndSubmit() {
    await I.waitForElement(this.fields.selectActionDropDown);
    await I.runAccessibilityTest();
    await I.selectOption(this.fields.selectActionDropDown, eventDisplayName.TEST_EVENT_FOR_DA_DATA);
    await I.wait(1);
    await I.waitForNavigationToComplete(this.fields.submit);
    await I.waitForText(this.fields.dnDateFieldText);
    await I.fillField(this.fields.dnGrantedDateDay, '01');
    await I.fillField(this.fields.dnGrantedDateMonth, '01');
    await I.fillField(this.fields.dnGrantedDateYear, '2021');
    await I.waitForText(this.fields.dnPronouncementJudgeText);
    await I.fillField(this.fields.dnPronouncementJudgeField, 'Test Judge');
    await I.waitForNavigationToComplete(this.fields.submit);
    await I.waitForElement(this.fields.eventSummary);
    await I.waitForNavigationToComplete(this.fields.submit);
    await I.wait(2);
  }
};