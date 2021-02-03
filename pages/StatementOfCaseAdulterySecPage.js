const I = actor();

module.exports = {

  fields: {
    namePersonAdulteryCommittedWith: '#D8ReasonForDivorceAdulteryWishToName-No',
    submit: 'button[type="submit"]'
  },

  async fillFormAndSubmit() {
    await I.waitInUrl('solicitorCreateSolSOCCoRespondent');
    await I.runAccessibilityTest();
    await I.see('The petitioner has the option to name the person with whom the respondent committed adultery.');
    await I.click(this.fields.namePersonAdulteryCommittedWith);
    await I.waitForNavigationToComplete(this.fields.submit);
    await I.wait(1);
  }
};