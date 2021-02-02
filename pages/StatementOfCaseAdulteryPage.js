const I = actor();

module.exports = {

  fields: {
    adulteryDetails: '#D8ReasonForDivorceAdulteryDetails',
    submit: 'button[type="submit"]',
    secondHandInfo: '#D8ReasonForDivorceAdulteryAnyInfo2ndHand-No'
  },

  async fillFormAndSubmit() {
    await I.waitInUrl('solicitorCreateSolSOCAdultery1');
    await I.runAccessibilityTest();
    await I.fillField(this.fields.adulteryDetails, 'My wife and her boyfriends beat me up everytime but I dont cry');
    await I.click(this.fields.secondHandInfo);
    await I.waitForNavigationToComplete(this.fields.submit);
    await I.wait(1);
  }
};