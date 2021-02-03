const I = actor();

module.exports = {

  fields: {
    respondentsEmailAddress: '#RespEmailAddress',
    aosReceivedFromRespondent: '#ReceivedAOSfromResp-Yes',
    dateAosReceivedFromRespondentDay: '#ReceivedAOSfromRespDate-day',
    dateAosReceivedFromRespondentMonth: '#ReceivedAOSfromRespDate-month',
    dateAosReceivedFromRespondentYear: '#ReceivedAOSfromRespDate-year',
    submit: 'button[type="submit"]'
  },

  async fillFormAndSubmit() {
    await I.waitForElement(this.fields.respondentsEmailAddress);
    await I.runAccessibilityTest();
    await I.fillField(this.fields.respondentsEmailAddress, 'Tasha.StPatrick@jo.com');
    await I.click(this.fields.aosReceivedFromRespondent);
    await I.fillField(this.fields.dateAosReceivedFromRespondentDay, '11');
    await I.fillField(this.fields.dateAosReceivedFromRespondentMonth, '12');
    await I.fillField(this.fields.dateAosReceivedFromRespondentYear, '2018');
    await I.waitForElement(this.fields.submit);
    await I.waitForNavigationToComplete(this.fields.submit);
    await I.wait(1);
  }
};