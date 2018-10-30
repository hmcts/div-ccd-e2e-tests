const I = actor();

module.exports = {

  fields: {
    namePersonAdulteryCommittedWith: '#D8ReasonForDivorceAdulteryIsNamed-No',
    submit: 'button[type="submit"]',
  },

  fillFormAndSubmit() {
    I.seeInCurrentUrl('solicitorCreateSolSOCCoRespondent');
    I.see('The petitioner has the option to name the person with whom the respondent committed adultery.');
    I.click(this.fields.namePersonAdulteryCommittedWith);
    I.click(this.fields.submit);
    I.wait(3)
  }
}