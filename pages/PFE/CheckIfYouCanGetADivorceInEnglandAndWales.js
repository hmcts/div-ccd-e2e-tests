const I = actor();

module.exports = {

  fields: {
    petitionerIsMainlyBasedInEnglandOrWales: '#jurisdictionPetitionerResidence_Yes',
    respondentIsMainlyBasedInEnglandOrWales: '#jurisdictionRespondentResidence_Yes',
    submit: 'button[type="submit"]'
  },

  metadata: {
    url: 'habitual-residence'
  },

  async selectBothPartiesAreMainlyBasedInEnglandOrWalesAndContinue() {
    await I.waitInUrl(this.metadata.url);
    await I.runAccessibilityTest();
    await I.click(this.fields.petitionerIsMainlyBasedInEnglandOrWales);
    await I.click(this.fields.respondentIsMainlyBasedInEnglandOrWales);
    await I.waitForNavigationToComplete(this.fields.selectContinue);
    await I.wait(1);
  }
};