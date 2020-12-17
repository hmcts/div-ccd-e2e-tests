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

  fillFormAndSubmit() {
    I.waitForElement(this.fields.respondentsEmailAddress);
    I.fillField(this.fields.respondentsEmailAddress, 'Tasha.StPatrick@jo.com');
    I.click(this.fields.aosReceivedFromRespondent);
    I.fillField(this.fields.dateAosReceivedFromRespondentDay, '11');
    I.fillField(this.fields.dateAosReceivedFromRespondentMonth, '12');
    I.fillField(this.fields.dateAosReceivedFromRespondentYear, '2018');
    I.waitForElement(this.fields.submit);
    I.click(this.fields.submit);
    I.wait(3);
  }
};