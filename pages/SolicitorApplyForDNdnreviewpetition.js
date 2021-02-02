const I = actor();

module.exports = {

  fields: {
    petitionChangedYes: '#PetitionChangedYesNoDN-Yes',
    changeDetailsId: '#PetitionChangedDetailsDN',
    changedDetailsValue: 'Add something to petition',
    confirmPetitionYes: '#ConfirmPetitionDN-Yes',
    submit: 'button[type="submit"]'
  },

  async fillFormAndSubmit() {
    await I.waitInUrl('solicitorApplyForDNdnreviewpetition');
    await I.runAccessibilityTest();
    await I.click(this.fields.petitionChangedYes);
    await I.fillField(this.fields.changeDetailsId, this.fields.changedDetailsValue);
    await I.click(this.fields.confirmPetitionYes);
    await I.waitForNavigationToComplete(this.fields.submit);
    await I.wait(1);
  }
};