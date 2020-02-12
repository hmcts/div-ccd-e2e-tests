const I = actor();

module.exports = {

  fields: {
    adulteryDetails: '#D8ReasonForDivorceAdulteryDetails',
    submit: 'button[type="submit"]',
    secondHandInfo: '#D8ReasonForDivorceAdulteryAnyInfo2ndHand-No'
  },

  fillFormAndSubmit() {
    I.seeInCurrentUrl('solicitorCreateSolSOCAdultery1');
    I.fillField(this.fields.adulteryDetails, 'My wife and her boyfriends beat me up everytime but I dont cry');
    I.click(this.fields.secondHandInfo);
    I.click(this.fields.submit);
    I.wait(2);
  }
};