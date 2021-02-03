const I = actor();

module.exports = {

  fields: {
    desertionDetails: '#D8ReasonForDivorceDesertionDetails',
    submit: 'button[type="submit"]',
    desertionAgreedNo: '#D8ReasonForDivorceDesertionAgreed-No',
    reasonForDivorceDesertionDateDay: '#D8ReasonForDivorceDesertionDate-day',
    reasonForDivorceDesertionDateMonth: '#D8ReasonForDivorceDesertionDate-month',
    reasonForDivorceDesertionDateYear: '#D8ReasonForDivorceDesertionDate-year'
  },

  async fillFormAndSubmit() {
    await I.waitInUrl('solicitorCreateSolSOCDesertion');
    await I.runAccessibilityTest();
    await I.click(this.fields.desertionAgreedNo);
    await I.fillField(this.fields.reasonForDivorceDesertionDateDay, '11');
    await I.fillField(this.fields.reasonForDivorceDesertionDateMonth, '12');
    await I.fillField(this.fields.reasonForDivorceDesertionDateYear, '2018');
    await I.fillField(this.fields.desertionDetails, 'My wife left me');
    await I.waitForNavigationToComplete(this.fields.submit);
    await I.wait(1);
  }
};