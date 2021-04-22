const I = actor();

module.exports = {

  fields: {
    selectActionDropDown: 'select[id="next-step"]',
    applicationDate: '#ReceivedServiceApplicationDate',
    applicationDateDay: '#ReceivedServiceApplicationDate-day',
    applicationDateMonth: '#ReceivedServiceApplicationDate-month',
    applicationDateYear: '#ReceivedServiceApplicationDate-year',
    serviceApplicationType: '#ServiceApplicationType',
    submit: 'button[type="submit"]',
    eventSummary: '#field-trigger-summary'
  },

  async fillFormAndSubmit(serviceApplicationType) {
    await I.selectOption(this.fields.selectActionDropDown, 'Service application received');
    await I.wait(1);
    await I.waitForNavigationToComplete(this.fields.submit);
    await I.wait(1);

    await I.waitForElement(this.fields.applicationDate);
    await I.runAccessibilityTest();
    await I.fillField(this.fields.applicationDateDay, '11');
    await I.fillField(this.fields.applicationDateMonth, '02');
    await I.fillField(this.fields.applicationDateYear, '2021');
    await I.selectOption(this.fields.serviceApplicationType, serviceApplicationType);
    await I.waitForElement(this.fields.submit);
    await I.waitForNavigationToComplete(this.fields.submit);

    await I.waitForElement(this.fields.eventSummary);
    await I.waitForNavigationToComplete(this.fields.submit);
  }
};
