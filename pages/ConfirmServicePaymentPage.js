const I = actor();

module.exports = {

  fields: {
    selectActionDropDown: 'select[id="next-step"]',
    serviceApplicationPayment: '#ServiceApplicationPayment',
    helpWithFeesReferenceNumber: '#HelpWithFeesReferenceNumber',
    submit: 'button[type="submit"]',
    fieldsetCaseData: '#fieldset-case-data',
    eventSummary: '#field-trigger-summary'
  },

  async fillFormAndSubmit() {
    await I.selectOption(this.fields.selectActionDropDown, 'Confirm service payment');
    await I.wait(1);
    await I.waitForNavigationToComplete(this.fields.submit);
    await I.wait(1);

    await I.waitForElement(this.fields.serviceApplicationPayment);
    await I.runAccessibilityTest();
    await I.selectOption(this.fields.serviceApplicationPayment, 'Help with Fees');
    await I.fillField(this.fields.helpWithFeesReferenceNumber, 'HWF-123-456');
    await I.waitForElement(this.fields.submit);
    await I.waitForNavigationToComplete(this.fields.submit);

    await I.wait(3);
    await I.waitForElement(this.fields.fieldsetCaseData);
    await I.waitForNavigationToComplete(this.fields.submit);

    await I.wait(3);
    await I.waitForElement(this.fields.eventSummary);
    await I.waitForNavigationToComplete(this.fields.submit);
  }
};
