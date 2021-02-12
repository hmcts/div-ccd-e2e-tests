const I = actor();

module.exports = {

  fields: {
    behaviourDetails: '#D8ReasonForDivorceBehaviourDetails',
    submit: 'button[type="submit"]',
    secondHandInfo: '#D8ReasonForDivorceAdulteryAnyInfo2ndHand-No'
  },

  async fillFormAndSubmit() {
    await I.waitInUrl('solicitorCreateSolSOCBehaviour1');
    await I.runAccessibilityTest();
    await I.fillField(this.fields.behaviourDetails, 'My wife is abusing me');
    await I.waitForNavigationToComplete(this.fields.submit);
    await I.wait(1);
  }
};