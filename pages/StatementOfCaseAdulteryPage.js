const I = actor();

module.exports = {

  fields: {
    adulteryDetails: '#D8ReasonForDivorceAdulteryDetails',
    submit: 'button[type="submit"]',
    secondHandInfo: '#D8ReasonForDivorceAdulteryAnyInfo2ndHand-No'
  },

  async fillFormAndSubmit() {
    await I.seeInCurrentUrl('solicitorCreateSolSOCAdultery1');
    await I.fillField(this.fields.adulteryDetails, 'My wife and her boyfriends beat me up everytime but I dont cry');
    await I.click(this.fields.secondHandInfo);
    await I.click(this.fields.submit);
    await I.wait(1);
  }
};